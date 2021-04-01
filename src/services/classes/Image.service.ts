import { sequelize } from './../../../config/database';
import { toImageDto } from './../../domain/mappers/Image.mapper';
import { inject, injectable } from 'inversify';
import ImageEntity from '../../domain/entities/Image';
import { REPOSITORY_TYPES } from '../../types';
import IImageService from '../interfaces/IImage.service';
import IImageRepository from '../../dal/repository/interfaces/IImage.repository';
import ImageUtil from '../../utils/Image.util';

@injectable()
class ImageService implements IImageService {
  @inject(REPOSITORY_TYPES.ImageRepositoryType)
  private _imageRepository: IImageRepository;

  //==================================== get all image===========================================
  async getAllImagesAsync(): Promise<Object> {
    const images = await this._imageRepository.getAllImagesAsync();
    const imageDto = images.map((image) => toImageDto(image));
    return { msg: 'success', payload: imageDto, status: 200 };
  }
  //==================================== get image by id===========================================
  async getImageByIdAsync(image_id): Promise<Object> {
    const image = await this._imageRepository.getImageByIdAsync(image_id);
    if (!image) return { msg: 'image not found', payload: null, status: 404 };
    const imageDto = toImageDto(image);
    return { msg: 'success', payload: imageDto, status: 200 };
  }
  //==================================== insert image ===========================================
  async insertImageAsync({ name, description, image_url }): Promise<Object> {
    const t = await sequelize.transaction();
    try {
      const imageExist = await this._imageRepository.getImageByNameAsync(name);
      if (imageExist) {
        ImageUtil.invalidateImage(image_url);
        return { msg: 'image already exits', payload: null, status: 404 };
      }
      const imageToInsert = new ImageEntity(name, description, image_url);
      const imageInserted = await this._imageRepository.insertImageAsync(
        imageToInsert
      );
      if (!imageInserted) {
        ImageUtil.invalidateImage(image_url);
        return { msg: 'unable to insert image', payload: null, status: 500 };
      }

      t.commit();

      ImageUtil.confirmImage(image_url);
      const imageDto = toImageDto(imageInserted);
      return { msg: 'success', payload: imageDto, status: 200 };
    } catch (error) {
      t.rollback();
      ImageUtil.invalidateImage(image_url);
      console.log(error);
    }
  }
  //==================================== update image ===========================================
  async updateImageAsync({
    image_id,
    name,
    description,
    image_url,
    oldImage_url,
  }): Promise<Object> {
    const t = await sequelize.transaction();
    try {
      const image = new ImageEntity(name, description, image_url, image_id);
      const imageUpdated = await this._imageRepository.updateImageAsync(image);
      if (!imageUpdated) {
        ImageUtil.invalidateImage(image_url);
        return { msg: 'unable to update image', payload: null, status: 500 };
      }

      t.commit();

      //if image_url doesn't exist means that we only want to update name and description
      if (image_url) {
        ImageUtil.confirmImage(image_url);
        ImageUtil.removeImage(oldImage_url);
      }

      const imageDto = toImageDto(imageUpdated);
      return { msg: 'success', payload: imageDto, status: 200 };
    } catch (error) {
      t.rollback();
      console.error(error);
    }
  }
  //==================================== remove image ===========================================
  async removeImageAsync(image_id): Promise<Object> {
    const t = await sequelize.transaction();
    try {
      const imageRemoved = await this._imageRepository.removeImageAsync(
        image_id
      );
      if (!imageRemoved) {
        return { msg: 'unable to remove image', payload: null, status: 500 };
      }

      t.commit();

      ImageUtil.removeImage(imageRemoved.image_url);

      const imageDto = toImageDto(imageRemoved);
      return { msg: 'success', payload: imageDto, status: 200 };
    } catch (error) {
      t.rollback();
      console.log(error);
      return { msg: 'unable to remove image', payload: null, status: 500 };
    }
  }
}

export default ImageService;

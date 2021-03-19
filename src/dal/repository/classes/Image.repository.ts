import { injectable } from 'inversify';
import * as uuid from 'uuid';
import { toDomainImage } from './../../../domain/mappers/Image.mapper';
import IImageEntity from '../../../domain/interfaces/IImage';
import ImageModel from '../../models/Image.model';
import IImageRepository from '../interfaces/IImage.repository';

@injectable()
class ImageRepository implements IImageRepository {
  //===============================get image by id=========================================
  async getImageByIdAsync(image_id: string): Promise<IImageEntity> {
    const image = await ImageModel.findByPk(image_id);
    if (!image) return null;

    return toDomainImage(image);
  }
  //===============================get all images=========================================
  async getAllImagesAsync(): Promise<IImageEntity[]> {
    const images = await ImageModel.findAll();
    return images.map((image) => toDomainImage(image));
  }
  //===============================Insert image=========================================
  async insertImageAsync(image: IImageEntity): Promise<IImageEntity> {
    const imageInserted = await ImageModel.create({
      image_id: uuid.v1(),
      name: image.name,
      description: image.description,
      image_url: image.image_url,
    });

    if (!imageInserted) return null;

    return toDomainImage(imageInserted);
  }
  //===============================update image=========================================
  async updateImageAsync(image: IImageEntity): Promise<IImageEntity> {
    const imageNameExists = await this.getImageByNameAsync(image.name);
    if (imageNameExists) return null;

    const imageToUpdate = await ImageModel.findByPk(image.image_id);
    if (!imageToUpdate) return null;

    imageToUpdate.name = image.name;
    imageToUpdate.image_url = image.image_url;
    imageToUpdate.description = image.description;

    await imageToUpdate.save();

    return toDomainImage(imageToUpdate);
  }
  //===============================remove image=========================================
  async removeImageAsync(image_id: string): Promise<IImageEntity> {
    const imageToRemove = await ImageModel.findByPk(image_id);
    if (!imageToRemove) return null;

    await imageToRemove.destroy();

    return toDomainImage(imageToRemove);
  }
  //===============================get image by name=========================================
  async getImageByNameAsync(name: string): Promise<IImageEntity> {
    const image = await ImageModel.findOne({ where: { name } });
    if (!image) return null;

    return toDomainImage(image);
  }
}

export default ImageRepository;

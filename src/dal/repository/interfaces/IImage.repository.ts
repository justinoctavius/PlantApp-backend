import IImageEntity from '../../../domain/interfaces/IImage';

interface IImageRepository {
  getImageByIdAsync(image_id: string): Promise<IImageEntity>;
  getAllImagesAsync(): Promise<IImageEntity[]>;
  insertImageAsync(image: IImageEntity): Promise<IImageEntity>;
  updateImageAsync(image: IImageEntity): Promise<IImageEntity>;
  removeImageAsync(image_id: string): Promise<IImageEntity>;
  getImageByNameAsync(name: string): Promise<IImageEntity>;
}

export default IImageRepository;

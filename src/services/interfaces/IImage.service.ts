interface IImageService {
  getImageByIdAsync(image_id): Promise<Object>;
  getAllImagesAsync(): Promise<Object>;
  insertImageAsync(image: Object): Promise<Object>;
  updateImageAsync(image: Object): Promise<Object>;
  removeImageAsync(image_id): Promise<Object>;
}

export default IImageService;

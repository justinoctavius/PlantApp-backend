interface IImageController {
  getImageByIdAsync(req, res): Promise<void>;
  getAllImagesAsync(req, res): Promise<void>;
  insertImageAsync(req, res): Promise<void>;
  updateImageAsync(req, res): Promise<void>;
  removeImageAsync(req, res): Promise<void>;
}

export default IImageController;

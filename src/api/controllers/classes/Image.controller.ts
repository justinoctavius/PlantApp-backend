import { inject, injectable } from 'inversify';
import { SERVICE_TYPES } from '../../../types';

import IImageController from '../intefaces/IImage.controller';

@injectable()
class ImageController implements IImageController {
  @inject(SERVICE_TYPES.ImageServiceType) private _imageService;
  //=============================== Get image by id =========================================
  async getImageByIdAsync(req, res) {
    const { image_id } = req.params;
    const response: any = await this._imageService.getImageByIdAsync(image_id);
    res.json(response).status(response.status);
  }
  //=============================== Get all images =========================================
  async getAllImagesAsync(req, res) {
    const response: any = await this._imageService.getAllImagesAsync();
    res.json(response).status(response.status);
  }
  //=============================== insert image =========================================
  async insertImageAsync(req, res) {
    const { name, description } = req.body;
    const image_url = req.file.filename;
    console.log(req.file, image_url);
    const response: any = await this._imageService.insertImageAsync({
      name,
      description,
      image_url,
    });
    res.json(response).status(response.status);
  }
  //=============================== update image =========================================
  async updateImageAsync(req, res) {
    const { image_id } = req.params;
    const { name, description, oldImage_url } = req.body;
    const image_url = req.file.filename;
    const response: any = await this._imageService.updateImageAsync({
      image_id,
      name,
      description,
      image_url,
      oldImage_url,
    });
    res.json(response).status(response.status);
  }
  //=============================== remove image =========================================
  async removeImageAsync(req, res) {
    const { image_id } = req.params;
    const response = await this._imageService.removeImageAsync(image_id);
    res.json(response).status(response.status);
  }
}

export default ImageController;

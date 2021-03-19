import IImageEntity from '../interfaces/IImage';

class ImageEntity implements IImageEntity {
  public readonly name: string;
  public readonly description: string;
  public readonly image_url: string;
  public readonly image_id: string;
  constructor(
    name: string,
    description: string,
    image_url: string,
    image_id: string = ''
  ) {
    this.name = name;
    this.description = description;
    this.image_url = image_url;
    this.image_id = image_id;
  }
}

export default ImageEntity;

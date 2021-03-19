import ImageEntity from '../entities/Image';
import IImageEntity from '../interfaces/IImage';

export const toDomainImage = ({ name, description, image_url, image_id }) => {
  return new ImageEntity(name, description, image_url, image_id);
};

export const toImageDto = (image: IImageEntity) => {
  return {
    name: image.name,
    description: image.description,
    image_url: image.image_url,
    image_id: image.image_id,
  };
};

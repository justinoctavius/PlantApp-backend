import * as multer from 'multer';
import * as path from 'path';
import * as uuid from 'uuid';

class ImageMiddleware {
  static multer() {
    const storage = multer.diskStorage({
      destination: path.join(__dirname, '..', '..', 'assets', 'temp'),
      filename: (req, file, cb) => {
        cb(null, uuid.v1() + path.extname(file.originalname).toLowerCase());
      },
    });

    return multer({
      storage,
      dest: path.join(__dirname, '..', '..', 'assets', 'temp'),
      limits: { fileSize: 2000000 },
      fileFilter: (req, file, cb) => {
        const isValidExt = this.verifyExt(file);
        if (isValidExt) {
          return cb(null, true);
        }
        cb(new Error('file is not supported'));
      },
    }).single('image');
  }

  private static verifyExt(file) {
    const extension = /jpeg|jpg|png|gif/;
    const mimetype = extension.test(file.mimetype);
    const extname = extension.test(path.extname(file.originalname));
    if (extname && mimetype) {
      return true;
    }
    return false;
  }
}

export default ImageMiddleware;

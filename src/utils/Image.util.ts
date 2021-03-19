import * as fs from 'fs';
import * as path from 'path';

class ImageUtil {
  static confirmImage(filename) {
    const publicPath = path.join(__dirname, '..', 'assets');
    fs.renameSync(
      path.join(publicPath, 'temp', filename),
      path.join(publicPath, 'upload', filename)
    );
  }

  static invalidateImage(filename) {
    const publicPath = path.join(__dirname, '..', 'assets');
    fs.unlinkSync(path.join(publicPath, 'temp', filename));
  }

  static removeImage(filename) {
    const publicPath = path.join(__dirname, '..', 'assets');
    fs.unlinkSync(path.join(publicPath, 'upload', filename));
  }
}

export default ImageUtil;

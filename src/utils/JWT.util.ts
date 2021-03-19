import * as jwt from 'jsonwebtoken';
import config from '../../config';

class JWTUtil {
  static sign(user_id) {
    const exp = Math.floor(Date.now() / 1000) + 3 * 60 * 60;
    return jwt.sign({ data: user_id, exp }, config.env.JWT_SECRECT);
  }

  static verify(token) {
    try {
      return jwt.verify(token, config.env.JWT_SECRECT);
    } catch (error) {
      return false;
    }
  }

  static decode(token) {
    return jwt.decode(token);
  }
}

export default JWTUtil;

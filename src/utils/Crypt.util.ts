import * as bcrypt from 'bcrypt';

class CryptUtil {
  static hash(password, salt): string {
    return bcrypt.hashSync(password, salt);
  }

  static compare(password, encryptedPassword): boolean {
    return bcrypt.compareSync(password, encryptedPassword);
  }
}

export default CryptUtil;

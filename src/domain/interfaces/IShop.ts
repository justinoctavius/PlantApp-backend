import ICategory from './ICategory';

interface IShop {
  categories: ICategory[];
  name: string;
  shop_id: string;
  description: string;
  global: boolean;
  getMoney(): number;
  reduceMoney(amount: number): void;
  addMoney(amount: number): void;
}

export default IShop;

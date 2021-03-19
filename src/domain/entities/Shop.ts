import ICategory from '../interfaces/ICategory';
import IShop from '../interfaces/IShop';

class Shop implements IShop {
  public readonly categories: ICategory[];
  private money: number;
  public readonly global: boolean;
  public readonly shop_id: string;
  public readonly name: string;
  public readonly description: string;

  constructor(
    categories: ICategory[],
    name: string,
    description: string,
    global: boolean = false,
    money: number = 1000,
    shop_id: string = ''
  ) {
    this.categories = categories;
    this.money = money;
    this.global = global;
    this.name = name;
    this.description = description;
    this.shop_id = shop_id;
  }

  getMoney(): number {
    return this.money;
  }

  reduceMoney(amount: number): void {
    this.money = this.money - amount;
  }

  addMoney(amount: number): void {
    this.money = this.money + amount;
  }
}

export default Shop;

interface IReceiptService {
  getAllReceiptAsync(shop_id: string, page: number): Promise<Object>;
  getReceiptAsync(receipt_id: string): Promise<Object>;
}

export default IReceiptService;

interface IReceiptService {
  getAllReceiptAsync(user_id: string): Promise<Object>;
  getReceiptAsync(receipt_id: string): Promise<Object>;
}

export default IReceiptService;

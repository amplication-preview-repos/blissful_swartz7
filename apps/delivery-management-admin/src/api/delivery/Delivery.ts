export type Delivery = {
  createdAt: Date;
  deliveryDate: Date | null;
  deliveryMonth: string | null;
  id: string;
  paymentDate: Date | null;
  paymentReceived: boolean | null;
  paymentTime: Date | null;
  thankYouMessage: string | null;
  updatedAt: Date;
};

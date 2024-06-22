export type DeliveryRequest = {
  approvalStatus: boolean | null;
  createdAt: Date;
  id: string;
  requesterName: string | null;
  successfulDeliveryTime: Date | null;
  updatedAt: Date;
};

export interface SmsLog {
  id: string;
  phone: string;
  message: string;
  timestamp: string;
  status: 'sent' | 'failed';
}

export interface PdfArchiveEntry {
  id: string;
  subscriberName: string;
  subscriberPhone: string;
  reportType: 'BILL' | 'DOCUMENTS';
  createdAt: string;
  downloadUrl?: string;
}

export interface Transaction {
  id: string;
  trxId: string;
  amount: number;
  validityDaysAdded: number;
  status: 'Pending' | 'Approved' | 'Rejected';
  createdAt: string;
  rejectionNote?: string; // অ্যাডমিনের পাঠানো ভুল সংশোধনের বিবরণী
}

export interface AdvancePaymentRequest {
  id: string;
  subscriberId: string;
  subscriberName: string;
  subscriberPhone: string;
  txnId: string;
  amount: number;
  cyclesCount: number;
  status: 'Pending' | 'Approved' | 'Rejected';
  createdAt: string;
  rejectionNote?: string; // অ্যাডমিনের পাঠানো ভুল সংশোধনের বিবরণী
}

export interface RegisteredUser {
  id: string;
  name: string;
  phone: string;
  role: 'ADMIN' | 'SUBSCRIBER';
  userType: 'MONTHLY' | 'REGULAR';
  balance: number;
  validityDays: number;
  registeredName?: string;
  registeredMobile?: string;
  registeredAddress?: string;
  nid?: string;
  nidFront?: string;
  nidBack?: string;
  selfie?: string;
  verificationStatus?: 'Pending' | 'Verified' | 'Rejected'; // ভোটার আইডি যাচাইকরণের অবস্থা
  verificationNote?: string; // অ্যাডমিনের ভোটার আইডি সংশোধনের বিবরণী
  billingTotal?: number;
  billingFine?: number;
  billingIssueDate?: string;
  billingDueDate?: string;
}

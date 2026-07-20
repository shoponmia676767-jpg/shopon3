// অ্যাডমিন প্রত্যাখ্যান হ্যান্ডলার (মডাল চালু করে)
const handleRejectTransaction = (id: string) => {
  setRejectionTarget({ id, type: 'recharge' });
  setRejectionNoteInput('');
  setCustomRejectionReason('');
};

const handleRejectAdvancePayment = (id: string) => {
  setRejectionTarget({ id, type: 'advance' });
  setRejectionNoteInput('');
  setCustomRejectionReason('');
};

const handleRejectSubscriberVerification = (id: string) => {
  setRejectionTarget({ id, type: 'subscriber' });
  setRejectionNoteInput('');
  setCustomRejectionReason('');
};

// গ্রাহকের রি-সাবমিশন হ্যান্ডলার (সংশোধন করে পুনরায় জমা দেওয়া)
const handleResubmitRecharge = (id: string, newTrx: string, newAmt: number) => {
  setTransactions(prev => prev.map(t => {
    if (t.id === id) {
      return {
        ...t,
        trxId: newTrx.trim().toUpperCase(),
        amount: newAmt,
        status: 'Pending',
        rejectionNote: undefined
      };
    }
    return t;
  }));
  // সিমুলেটেড এসএমএস নোটিফিকেশন
  setSimulatedSmsStatus({
    type: 'success',
    text: `সংশোধিত রিচার্জ আবেদন সফলভাবে পুনরায় পাঠানো হয়েছে! TxnID: ${newTrx}`
  });
  setTimeout(() => setSimulatedSmsStatus(null), 4000);
};

export { handleRejectTransaction, handleRejectAdvancePayment, handleRejectSubscriberVerification, handleResubmitRecharge };

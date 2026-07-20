# Shopon3 - সাবস্ক্রাইবার ম্যানেজমেন্ট সিস্টেম

একটি সম্পূর্ণ সাবস্ক্রাইবার ম্যানেজমেন্ট প্ল্যাটফর্ম যা বিলিং, লেনদেন এবং ব্যবহারকারী যাচাইকরণ পরিচালনা করে।

## 📁 ফাইলের বিবরণ

### `types.ts`
TypeScript ইন্টারফেস যা সিস্টেমের ডেটা মডেল সংজ্ঞায়িত করে:

- **SmsLog** - SMS বার্তার লগ রেকর্ড
- **PdfArchiveEntry** - PDF ডকুমেন্ট আর্কাইভ এন্ট্রি
- **Transaction** - লেনদেন তথ্য (অনুমোদিত/প্রত্যাখ্যাত)
- **AdvancePaymentRequest** - অগ্রিম পেমেন্ট অনুরোধ
- **RegisteredUser** - নিবন্ধিত ব্যবহারকারী প্রোফাইল

### `handlers.ts`
ব্যবসায়িক লজিক ফাংশন:

- **handleRejectTransaction()** - লেনদেন প্রত্যাখ্যান করা
- **handleRejectAdvancePayment()** - অগ্রিম পেমেন্ট প্রত্যাখ্যান
- **handleRejectSubscriberVerification()** - ব্যবহারকারী যাচাইকরণ প্রত্যাখ্যান
- **handleResubmitRecharge()** - পুনরায় রিচার্জ জমা দেওয়া

## 🎯 বৈশিষ্ট্য

✅ SMS লগিং এবং ট্র্যাকিং  
✅ লেনদেন ম্যানেজমেন্ট  
✅ PDF আর্কাইভিং  
✅ ব্যবহারকারী যাচাইকরণ  
✅ বিলিং ট্র্যাকিং  
✅ পূর্ণ বাংলা সাপোর্ট  

## 📝 ব্যবহার

```typescript
import { Transaction, RegisteredUser } from './types';
import { handleRejectTransaction, handleResubmitRecharge } from './handlers';

// লেনদেন প্রত্যাখ্যান করুন
handleRejectTransaction('txn-123');

// সংশোধিত রিচার্জ পুনরায় জমা দিন
handleResubmitRecharge('txn-456', 'TRX202601', 500);
```

## 🔧 প্রযুক্তি

- **Language**: TypeScript
- **Type Safety**: ✅ Fully Typed
- **Language Support**: বাংলা ও ইংরেজি

---

**তৈরি**: জুলাই ২০২৬  
**লাইসেন্স**: Open Source  
**ভাষা**: বাংলা/ইংরেজি

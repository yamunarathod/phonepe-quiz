export interface Question {
  id: string;
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: 'A' | 'B' | 'C' | 'D';
}

export const questions: Question[] = [
  {
    id: '1',
    question: 'Which of the following is a common UPI fraud technique?',
    optionA: 'Phishing links asking for UPI PIN',
    optionB: 'Fake cashback offers',
    optionC: 'Fake customer care numbers',
    optionD: 'All of the above',
    correctAnswer: 'D'
  },
  {
    id: '2',
    question: 'What should you do if you receive unexpected UPI request for money?',
    optionA: 'Accept it if the sender claims to be from your bank',
    optionB: 'Decline the request and report it',
    optionC: 'Call the sender to verify',
    optionD: 'Enter your UPI PIN to check the details',
    correctAnswer: 'B'
  },
  {
    id: '3',
    question: 'Which of these is true about UPI PIN security?',
    optionA: 'You should share it only with bank representatives',
    optionB: 'You can keep the same PIN for years',
    optionC: 'You should never share it with anyone',
    optionD: 'You can write it down for convenience',
    correctAnswer: 'C'
  },
  {
    id: '4',
    question: 'How do fraudsters commonly trick people into sending money via UPI?',
    optionA: 'By sending fake refund requests',
    optionB: 'By offering job opportunities',
    optionC: 'By pretending to be a known person in need',
    optionD: 'All of the above',
    correctAnswer: 'D'
  },
  {
    id: '5',
    question: 'What should you do if you receive an OTP for a card transaction you did not initiate?',
    optionA: 'Share it with your bank immediately',
    optionB: 'Ignore it',
    optionC: 'Report the incident and block your card',
    optionD: 'Wait for another OTP to confirm',
    correctAnswer: 'C'
  },
  {
    id: '6',
    question: 'How can fraudsters steal credit/debit card information?',
    optionA: 'Card skimming at ATMs or POS machines',
    optionB: 'Phishing emails asking for card details',
    optionC: 'Fake customer service calls',
    optionD: 'All of the above',
    correctAnswer: 'D'
  },
  {
    id: '7',
    question: 'Which of these is NOT a safe online transaction practice?',
    optionA: 'Using two-factor authentication',
    optionB: 'Saving your card details on multiple websites',
    optionC: 'Checking for authenticity in the website URL',
    optionD: 'Avoiding public Wi-Fi for transactions',
    correctAnswer: 'B'
  },
  {
    id: '8',
    question: 'What is card skimming?',
    optionA: 'Collecting loyalty points from a card',
    optionB: 'A technique where fraudsters steal card data using a hidden device',
    optionC: 'A method banks use to process payments faster',
    optionD: 'An online shopping discount method',
    correctAnswer: 'B'
  },
  {
    id: '9',
    question: 'Which of the following is a secure way to use your debit/credit card?',
    optionA: 'Regularly changing your card PIN',
    optionB: 'Enabling transaction alerts',
    optionC: 'Setting spending limits on your card',
    optionD: 'All of the above',
    correctAnswer: 'D'
  },
  {
    id: '10',
    question: 'What is caller ID spoofing?',
    optionA: 'A technique where scammers disguise their phone number to appear as a legitimate entity',
    optionB: 'A legitimate way to make anonymous calls',
    optionC: 'A security measure used by banks',
    optionD: 'A type of mobile banking feature',
    correctAnswer: 'A'
  },
  {
    id: '11',
    question: 'How do fraudsters use social media for impersonation fraud?',
    optionA: 'Creating fake profiles that resemble real people',
    optionB: 'Sending fake emergency fund requests',
    optionC: 'Posting fake job offers',
    optionD: 'All of the above',
    correctAnswer: 'D'
  },
  {
    id: '12',
    question: 'If you receive a call claiming to be from your bank asking for sensitive details, you should:',
    optionA: 'Provide the details if the caller sounds genuine',
    optionB: 'Ask the caller to send an email confirmation',
    optionC: 'Disconnect and call your bank\'s official helpline',
    optionD: 'Reply with partial information for verification',
    correctAnswer: 'C'
  },
  {
    id: '13',
    question: 'Which of these is a sign of email spoofing?',
    optionA: 'An email from a familiar name but with an unusual email address',
    optionB: 'A request to urgently update your banking information',
    optionC: 'Poor grammar and spelling in official-looking emails',
    optionD: 'All of the above',
    correctAnswer: 'D'
  },
  {
    id: '14',
    question: 'How can you verify a suspicious payment request from someone claiming to be a friend or relative?',
    optionA: 'Ask them for their full banking details',
    optionB: 'Call them directly using a known number',
    optionC: 'Send a small test payment first',
    optionD: 'Accept the request if the amount is small',
    correctAnswer: 'B'
  },
  {
    id: '15',
    question: 'Who can commit financial fraud?',
    optionA: 'Cybercriminals',
    optionB: 'Friends and family members',
    optionC: 'Employees within an organization',
    optionD: 'All of the above',
    correctAnswer: 'D'
  },
  {
    id: '16',
    question: 'Who can become a victim of financial fraud?',
    optionA: 'Only elderly people',
    optionB: 'Only business owners',
    optionC: 'Anyone, regardless of age or background',
    optionD: 'Only those who are careless with their financial details',
    correctAnswer: 'C'
  },
  {
    id: '17',
    question: 'What is cashback fraud?',
    optionA: 'Using a promo code multiple times legally',
    optionB: 'Fraudulently claiming cashback or refunds through fake transactions',
    optionC: 'Receiving a legitimate reward for shopping',
    optionD: 'A bonus scheme provided by banks',
    correctAnswer: 'B'
  },
  {
    id: '18',
    question: 'Which is a common tactic used in fake cashback frauds?',
    optionA: 'A message asking for a UPI PIN to process cashback',
    optionB: 'Automatically credited rewards',
    optionC: 'Bank-initiated cashback on eligible purchases',
    optionD: 'None of the above',
    correctAnswer: 'A'
  },
  {
    id: '19',
    question: 'How can you avoid falling for fake cashback offers?',
    optionA: 'Verifying offers from official sources',
    optionB: 'Avoiding unknown links claiming cashback rewards',
    optionC: 'Checking the sender\'s authenticity before clicking any links',
    optionD: 'All of the above',
    correctAnswer: 'D'
  },
  {
    id: '20',
    question: 'Which is the safest way to report financial fraud?',
    optionA: 'Posting on social media',
    optionB: 'Contacting your bank\'s official customer support',
    optionC: 'Calling the number provided in the fraudulent message',
    optionD: 'Ignoring the fraud if the amount is small',
    correctAnswer: 'B'
  },
  {
    id: '21',
    question: 'What is the best way to secure Digital payments and Digital banking?',
    optionA: 'Using strong passwords',
    optionB: 'Enabling two-factor authentication',
    optionC: 'Avoiding unknown third-party apps',
    optionD: 'All of the above',
    correctAnswer: 'D'
  },
  {
    id: '22',
    question: 'Which organization should you contact for online financial fraud in India?',
    optionA: 'Local police',
    optionB: 'Cyber Crime Helpline (1930)',
    optionC: 'National Consumer Helpline',
    optionD: 'Any of the above',
    correctAnswer: 'D'
  },
  {
    id: '23',
    question: 'What is a key sign of a scam message?',
    optionA: 'Urgent language',
    optionB: 'Poor grammar',
    optionC: 'Unusual sender addresses',
    optionD: 'All of the above',
    correctAnswer: 'D'
  },
  {
    id: '24',
    question: 'What should you do if you suspect a fraud attempt?',
    optionA: 'Ignore it',
    optionB: 'Report it immediately',
    optionC: 'Try to track the fraudster yourself',
    optionD: 'Wait for another scam attempt to confirm',
    correctAnswer: 'B'
  },
  {
    id: '25',
    question: 'Rahul receives a call from someone claiming to be a customer support executive from his bank. The caller says Rahul\'s bank account needs verification and asks him to approve a UPI collect request sent to his phone. What should Rahul do?',
    optionA: 'Approve the request immediately to prevent his account from getting blocked',
    optionB: 'Decline the request and call his bank\'s official helpline',
    optionC: 'Share his UPI PIN with the caller for faster verification',
    optionD: 'Approve the request and report it later',
    correctAnswer: 'B'
  },
  {
    id: '26',
    question: 'Priya receives a message on WhatsApp saying she has won ₹5,000 as a cashback reward. The message asks her to click a link and enter her card details to claim the money. What should Priya do?',
    optionA: 'Click the link and provide her card details to claim the cashback',
    optionB: 'Ignore the message and delete it immediately',
    optionC: 'Forward the message to her friends to check if they received the same offer',
    optionD: 'Reply to the sender and ask for more details',
    correctAnswer: 'B'
  },
  {
    id: '27',
    question: 'Amit gets an SMS saying ₹15,000 has been deducted from his credit card for a purchase he did not make. He receives a call from a person claiming to be from his bank, offering to reverse the charge if he shares his OTP. What is the safest action for Amit?',
    optionA: 'Share the OTP with the caller to reverse the transaction',
    optionB: 'Call his bank using the official number to report unauthorized use',
    optionC: 'Wait and see if the bank reverses the charge automatically',
    optionD: 'Accept the loss, as fraud prevention is difficult',
    correctAnswer: 'B'
  },
  {
    id: '28',
    question: 'Sneha withdraws cash from an ATM and later notices unauthorized transactions on her debit card. The bank confirms that her card details were compromised. What could have happened?',
    optionA: 'She lost her ATM card before the withdrawal',
    optionB: 'Her card might have been skimmed using a hidden device at the ATM',
    optionC: 'Her bank made an error in processing transactions',
    optionD: 'Her friend used her card without permission',
    correctAnswer: 'B'
  },
  {
    id: '29',
    question: 'Vikram receives a message from his close friend Rohan on Instagram, asking for ₹2,000 as an emergency loan. Vikram is about to send the money when he notices that the username is slightly different from Rohan\'s usual one. What should Vikram do?',
    optionA: 'Transfer the money immediately to help his friend',
    optionB: 'Call Rohan directly on his phone to confirm',
    optionC: 'Ask the sender for his bank account details before transferring',
    optionD: 'Reply to the message and ask for proof of identity',
    correctAnswer: 'B'
  },
  {
    id: '30',
    question: 'Neha\'s internet banking is not working, so she searches for her bank\'s customer care number on Google. She calls the first number she finds and is asked to share her debit card details for verification. What should Neha do?',
    optionA: 'Share her card details since it\'s the bank\'s helpline',
    optionB: 'Ask the caller to email her official verification steps',
    optionC: 'Disconnect the call and find the number on the bank\'s official website',
    optionD: 'Complain to her bank about poor customer service',
    correctAnswer: 'C'
  },
  {
    id: '31',
    question: 'Ramesh lists an old laptop for sale online. A buyer contacts him, agrees on a price, and sends a QR code, asking Ramesh to scan it to receive the payment. What should Ramesh do?',
    optionA: 'Scan the QR code to receive money',
    optionB: 'Ask the buyer to send the payment directly to his account',
    optionC: 'Share his UPI PIN to verify the transaction',
    optionD: 'Delete the QR code and block the buyer',
    correctAnswer: 'B'
  },
  {
    id: '32',
    question: 'Pooja receives an email from a well-known company offering her a remote job with a high salary. The email asks her to pay a ₹2,000 "registration fee" to complete the hiring process. What should Pooja do?',
    optionA: 'Pay the fee immediately to secure the job',
    optionB: 'Ignore the email and apply through the company\'s official website',
    optionC: 'Reply and ask for a refund guarantee before paying',
    optionD: 'Forward the email to her friends to check if they got similar offers',
    correctAnswer: 'B'
  },
  {
    id: '33',
    question: 'Arjun receives a call from someone offering him a personal loan with "zero documentation." The caller asks for an advance processing fee before disbursing the loan. What should Arjun do?',
    optionA: 'Pay the processing fee to get the loan quickly',
    optionB: 'Ask for official documents before proceeding',
    optionC: 'Check with his bank or a legitimate lender before making any payments',
    optionD: 'Give his personal details first, then verify the lender',
    correctAnswer: 'C'
  },
  {
    id: '34',
    question: 'Ravi sees an ad on social media promising a "guaranteed 50% return in 10 days" on investments. The company asks for an initial deposit of ₹10,000 via UPI. What is the safest decision for Ravi?',
    optionA: 'Invest immediately to take advantage of the offer',
    optionB: 'Research the company and check for complaints online',
    optionC: 'Ask for written proof of the guarantee before investing',
    optionD: 'Invest a small amount first to test the scheme',
    correctAnswer: 'B'
  },
  {
    id: '35',
    question: 'Which of the following is a common UPI fraud technique?',
    optionA: 'Phishing links asking for UPI PIN',
    optionB: 'Fake cashback offers',
    optionC: 'Fake customer care numbers',
    optionD: 'All of the above',
    correctAnswer: 'D'
  },
  {
    id: '36',
    question: 'What should you do if you receive an OTP for a transaction you did not initiate?',
    optionA: 'Share it with your bank immediately',
    optionB: 'Ignore it',
    optionC: 'Report the incident and block your card',
    optionD: 'Wait for another OTP to confirm',
    correctAnswer: 'C'
  },
  {
    id: '37',
    question: 'How do fraudsters use social media for impersonation fraud?',
    optionA: 'Creating fake profiles that resemble real people',
    optionB: 'Sending fake emergency fund requests',
    optionC: 'Posting fake job offers',
    optionD: 'All of the above',
    correctAnswer: 'D'
  },
  {
    id: '38',
    question: 'If you receive a call claiming to be from your bank asking for sensitive details, you should:',
    optionA: 'Provide the details if the caller sounds genuine',
    optionB: 'Ask the caller to send an email confirmation',
    optionC: 'Disconnect and call your bank\'s official helpline',
    optionD: 'Reply with partial information for verification',
    correctAnswer: 'C'
  },
  {
    id: '39',
    question: 'Which of these is a sign of email spoofing?',
    optionA: 'An email from a familiar name but with an unusual email address',
    optionB: 'A request to urgently update your banking information',
    optionC: 'Poor grammar and spelling in official-looking emails',
    optionD: 'All of the above',
    correctAnswer: 'D'
  },
  {
    id: '40',
    question: 'Who can become a victim of financial fraud?',
    optionA: 'Only elderly people',
    optionB: 'Only business owners',
    optionC: 'Anyone, regardless of age or background',
    optionD: 'Only those who are careless with their financial details',
    correctAnswer: 'C'
  },
  {
    id: '41',
    question: 'Which is a common tactic used in fake cashback frauds?',
    optionA: 'A message asking for a UPI PIN to process cashback',
    optionB: 'Automatically credited rewards',
    optionC: 'Bank-initiated cashback on eligible purchases',
    optionD: 'None of the above',
    correctAnswer: 'A'
  },
  {
    id: '42',
    question: 'Which organization should you contact for online financial fraud in India?',
    optionA: 'Local police',
    optionB: 'Cyber Crime Helpline (1930)',
    optionC: 'National Consumer Helpline',
    optionD: 'Any of the above',
    correctAnswer: 'D'
  },
  {
    id: '43',
    question: 'What is a key sign of a scam message?',
    optionA: 'Urgent language',
    optionB: 'Poor grammar',
    optionC: 'Unusual sender addresses',
    optionD: 'All of the above',
    correctAnswer: 'D'
  },
  {
    id: '44',
    question: 'What should you do if you suspect a fraud attempt?',
    optionA: 'Ignore it',
    optionB: 'Report it immediately',
    optionC: 'Try to track the fraudster yourself',
    optionD: 'Wait for another scam attempt to confirm',
    correctAnswer: 'B'
  },
  {
    id: '45',
    question: 'Rahul receives a call from someone claiming to be a customer support executive from his bank. The caller says Rahul\'s bank account needs verification and asks him to approve a UPI collect request sent to his phone. What should Rahul do?',
    optionA: 'Approve the request immediately to prevent his account from getting blocked',
    optionB: 'Decline the request and call his bank\'s official helpline',
    optionC: 'Share his UPI PIN with the caller for faster verification',
    optionD: 'Approve the request and report it later',
    correctAnswer: 'B'
  },
  {
    id: '46',
    question: 'Amit gets an SMS saying ₹15,000 has been deducted from his credit card for a purchase he did not make. He receives a call from a person claiming to be from his bank, offering to reverse the charge if he shares his OTP. What is the safest action for Amit?',
    optionA: 'Share the OTP with the caller to reverse the transaction',
    optionB: 'Call his bank using the official number to report unauthorized use',
    optionC: 'Wait and see if the bank reverses the charge automatically',
    optionD: 'Accept the loss, as fraud prevention is difficult',
    correctAnswer: 'B'
  },
  {
    id: '47',
    question: 'Vikram receives a message from his close friend Rohan on Instagram, asking for ₹2,000 as an emergency loan. Vikram is about to send the money when he notices that the username is slightly different from Rohan\'s usual one. What should Vikram do?',
    optionA: 'Transfer the money immediately to help his friend',
    optionB: 'Call Rohan directly on his phone to confirm',
    optionC: 'Ask the sender for his bank account details before transferring',
    optionD: 'Reply to the message and ask for proof of identity',
    correctAnswer: 'B'
  },
  {
    id: '48',
    question: 'Neha\'s internet banking is not working, so she searches for her bank\'s customer care number on Google. She calls the first number she finds and is asked to share her debit card details for verification. What should Neha do?',
    optionA: 'Share her card details since it\'s the bank\'s helpline',
    optionB: 'Ask the caller to email her official verification steps',
    optionC: 'Disconnect the call and find the number on the bank\'s official website',
    optionD: 'Complain to her bank about poor customer service',
    correctAnswer: 'C'
  },
  {
    id: '49',
    question: 'Ramesh lists an old laptop for sale online. A buyer contacts him, agrees on a price, and sends a QR code, asking Ramesh to scan it to receive the payment. What should Ramesh do?',
    optionA: 'Scan the QR code to receive money',
    optionB: 'Ask the buyer to send the payment directly to his account',
    optionC: 'Share his UPI PIN to verify the transaction',
    optionD: 'Delete the QR code and block the buyer',
    correctAnswer: 'B'
  },
  {
    id: '50',
    question: 'Pooja receives an email from a well-known company offering her a remote job with a high salary. The email asks her to pay a ₹2,000 "registration fee" to complete the hiring process. What should Pooja do?',
    optionA: 'Pay the fee immediately to secure the job',
    optionB: 'Ignore the email and apply through the company\'s official website',
    optionC: 'Reply and ask for a refund guarantee before paying',
    optionD: 'Forward the email to her friends to check if they got similar offers',
    correctAnswer: 'B'
  }
];

export function getRandomQuestions(count: number = 6): Question[] {
  // Create a copy of the questions array
  const shuffled = [...questions];

  // Use crypto.getRandomValues for better randomness if available, fallback to Math.random
  const getRandomIndex = (max: number): number => {
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      const array = new Uint32Array(1);
      crypto.getRandomValues(array);
      return array[0] % max;
    }
    return Math.floor(Math.random() * max);
  };

  // Fisher-Yates shuffle with enhanced randomization
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = getRandomIndex(i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
}

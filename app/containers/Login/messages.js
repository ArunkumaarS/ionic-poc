/*
 * BbankAccount Messages
 *
 * This contains all the text for the BbankAccount component.
 */
import { defineMessages } from 'react-intl';

const scope = 'app.containers.BbankAccount';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Bank Account Details',
  },
  loanPdfPageTitle: {
    id: `${scope}.loan_pdf_page_title`,
    defaultMessage: 'Sign Agreement',
  },
  loanPdfAgreeMsg: {
    id: `${scope}.loan_pdf_agree_msg`,
    defaultMessage: 'These Standard Terms & Conditions along with the Most Important Terms and Conditions form a legal and binding agreement upon acceptance pursuant to the Indian Contract Act, 1872 and the Information Technology Act, 2000.',
  },
  loanPdfBtn: {
    id: `${scope}.loan_pdf_btn`,
    defaultMessage: 'Request OTP to sign',
  },
  loanAmtTxt: {
    id: `${scope}.loan_amt_txt`,
    defaultMessage: 'Loan Amount',
  },
  bankSignedTxt: {
    id: `${scope}.bank_signed_txt`,
    defaultMessage: 'Selected Bank Account',
  },
  maskedTxt: {
    id: `${scope}.masked_txt`,
    defaultMessage: 'xxxxxxx',
  },
  lfaSignedTxt: {
    id: `${scope}.lfa_signed_txt`,
    defaultMessage: 'Loan Agreement signed',
  },
  autoDebitCreated: {
    id: `${scope}.auto_debit_created`,
    defaultMessage: 'Auto-Debit Created',
  },
  emiDebitAlert: {
    id: `${scope}.emi_debit_alert`,
    defaultMessage: 'Your EMI will be auto debited from your account on the Due Date',
  },
  processingMsg: {
    id: `${scope}.processing_msg`,
    defaultMessage: 'Your loan will be processed in 15 minutes',
  },
  loanSuccessTitle: {
    id: `${scope}.loan_success_title`,
    defaultMessage: 'Loan Application submitted',
  },
  placeOrderRmvcoup: {
    id: `${scope}.place_order_rmvcoup`,
    defaultMessage: 'Are you sure you want to remove the applied coupon ?',
  },
  placeOrderRmvpoint: {
    id: `${scope}.place_order_rmvpoint`,
    defaultMessage: 'Are you sure you want to remove the applied points ?',
  },
  nachAutoDebitCheckTxt: {
    id: `${scope}.nach_auto_debit_check_txt`,
    defaultMessage: 'Auto-Debit Created',
  },
  nachVerifiedTxt: {
    id: `${scope}.nach_verified_txt`,
    defaultMessage: 'Verified',
  },
  nachAutoDebitMsg: {
    id: `${scope}.nach_auto_debit_msg`,
    defaultMessage: 'Your EMI will be auto debited from your account on the Due Date.',
  },
  processingMsgWithoutAutoDebit: {
    id: `${scope}.processing_msg_without_auto_debit`,
    defaultMessage: 'Your loan will be processed in 1 hour',
  },
  cheersTxt: {
    id: `${scope}.cheers_txt`,
    defaultMessage: 'Cheers!',
  },
});

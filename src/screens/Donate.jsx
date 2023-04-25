import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/HeaderDonate";
import Footer from "../components/Sections/Footer"
import DonationPageWrapper from "../components/Sections/DonationButtonForm";

export default function Donate() {
  return (
    <>
      <TopNavbar />
      <Header />
      <DonationPageWrapper />
      <Footer />
    </>
  );
}

// import React from 'react';
// import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

// export default function App() {
//    const config = {
//     public_key: 'FLWPUBK_TEST-37af43616af66964179678c4f1d05fcc-X',
//     tx_ref: Date.now(),
//     amount: 100,
//     currency: 'NGN',
//     payment_options: 'card,mobilemoney,ussd',
//     customer: {
//       email: 'rogerrisha@gmail.com',
//       phone_number: '0753706683',
//       name: 'Rogers',
//     },
//     customizations: {
//       title: 'My store',
//       description: 'Payment for items in cart',
//       logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
//     },
//   };

//   const fwConfig = {
//     ...config,
//     text: 'Pay with Flutterwave!',
//     callback: (response) => {
//        console.log(response);
//       closePaymentModal() // this will close the modal programmatically
//     },
//     onClose: () => {},
//   };

//   return (
//     <div className="App">
//      <h1>Hello Test user</h1>
//       <FlutterWaveButton {...fwConfig} />
//     </div>
//   );
// }



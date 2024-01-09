import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import PaypalPayment from "./PaypalPayment";
import VisaPayment from "./VisaPayment";
import BancontactPayment from "./BancontactPayment";

function Payments() {
  return (
    <div>
      <Routes>
        <Route path="paypal" element={<PaypalPayment />} />
        <Route path="visa" element={<VisaPayment />} />
        <Route path="bancontact" element={<BancontactPayment />} />
        <Route index element={<BancontactPayment />} />
      </Routes>
    </div>
  );
}

export default Payments;
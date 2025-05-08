import React, { useState } from "react";
import NavBar from "../components/ecommerce/NavBar";
import Address from "../components/ecommerce/Address";
import AddressType from "../components/ecommerce/AddressType";
import Footer from "../components/ecommerce/Footer";

const AddressPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(true);

  return (
    <>
      <NavBar />
      {isSubmitted ? (
        <AddressType onAddNew={() => setIsSubmitted(false)} />
      ) : (
        <Address onSuccess={() => setIsSubmitted(true)} />
      )}
      <Footer />
    </>
  );
};

export default AddressPage;

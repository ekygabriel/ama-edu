import React from "react";
import ContactForm from "./_components/ContactForm";

const LoginPage = () => {
  return (
    <div className="mt-10 mb-20">
      <div className="max-w-[600px] mx-auto">
        <h2 className="text-center">Login</h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default LoginPage;

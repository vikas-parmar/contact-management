import React from "react";
import ContactList from "components/ContactList";
import CreateContact from "components/CreateContact";

const ContectsPage = () => {
  return (
    <div className="w-full h-full">
      <CreateContact />
      <ContactList />
    </div>
  );
};

export default ContectsPage;

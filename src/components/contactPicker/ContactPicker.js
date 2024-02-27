import React from "react";
import { FormSelect} from "react-bootstrap";

export const ContactPicker = ({contacts, value, name, onChange}) => {
  return (
      <FormSelect value={value} name={name} onChange={onChange}>
        <option value={''} key={-1}>No contact selected</option>
        {contacts?.map((contact) => {
        return (
        <option key={contact} value={contact} >
          {contact}
        </option>
        );
      })}
      </FormSelect>
  );
};

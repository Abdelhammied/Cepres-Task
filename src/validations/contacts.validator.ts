import { ContactInterface } from "store/contacts/conacts.state";
import * as yup from "yup";

export const useValidateContact = (contact: ContactInterface) => {
  let schema = yup.object().shape({
    id: yup.string().uuid().required(),
    fname: yup.string().required(),
    lname: yup.string().required(),
    email_of_contact: yup.string().email().required(),
    company_name: yup.string().required(),
  });

  return schema.validateSync(contact, {
    abortEarly: false,
  });
};

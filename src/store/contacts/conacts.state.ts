export interface ContactInterface {
  id: string;
  fname: string;
  lname: string;
  company_name: string;
  email_of_contact: string;
  unreaded_messages: number;
  job_title: string;
}

export interface ContactsInitialStateInterface {
  contacts: ContactInterface[];

  contact: ContactInterface;

  openModal: boolean;

  state: "create" | "update";

  erorrs: { [key: string]: string | null };
}

export type ContactFields = keyof ContactInterface;
export type ContactsStateType = keyof ContactsInitialStateInterface;
export type ContactsStateValuesType =
  ContactsInitialStateInterface[keyof ContactsInitialStateInterface];

export const contactsInitialState: ContactsInitialStateInterface = {
  contact: {
    id: "",
    fname: "",
    lname: "",
    company_name: "",
    email_of_contact: "",
    unreaded_messages: 0,
    job_title: "",
  },

  contacts: [],

  openModal: false,

  state: "create",

  erorrs: {
    fname: null,
    lname: null,
    company_name: null,
    email_of_contact: null,
  },
};

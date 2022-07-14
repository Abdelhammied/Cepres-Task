import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormGroup,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  ContactInterface,
  contactsInitialState,
  ContactsInitialStateInterface,
} from "store/contacts/conacts.state";
import {
  createOrUpdateContact,
  updateContactsState,
} from "store/contacts/contacts.actions";
import { contactsStateSelector } from "store/contacts/contacts.selectors";
import { AppDispatch } from "store/store.config";

export default function ContactModal() {
  const dispatch: AppDispatch = useDispatch();

  const contactStoreState = useSelector(
    contactsStateSelector("contact")
  ) as ContactInterface;

  const [contact, setContact] = useState<ContactInterface>(
    contactsInitialState.contact
  );

  const errors = useSelector(
    contactsStateSelector("erorrs")
  ) as ContactsInitialStateInterface["erorrs"];

  const openModal = useSelector(contactsStateSelector("openModal")) as boolean;

  useEffect(() => {
    setContact(contactStoreState);

    return () => {
      setContact(contactsInitialState.contact);
    };
  }, [contactStoreState]);

  return (
    <Dialog
      open={openModal}
      onClose={() => dispatch(updateContactsState("openModal", false))}
      fullWidth
    >
      <DialogContent>
        <FormGroup>
          <TextField
            helperText={errors.fname}
            error={Boolean(errors.fname)}
            value={contact.fname}
            placeholder="Contact first name"
            label="First name"
            onChange={(e) => setContact({ ...contact, fname: e.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <TextField
            helperText={errors.lname}
            error={Boolean(errors.lname)}
            value={contact.lname}
            placeholder="Contact last name"
            label="Last name"
            onChange={(e) => setContact({ ...contact, lname: e.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <TextField
            helperText={errors.email_of_contact}
            error={Boolean(errors.email_of_contact)}
            value={contact.email_of_contact}
            placeholder="Contact email of contact"
            label="Email of contact"
            onChange={(e) =>
              setContact({ ...contact, email_of_contact: e.target.value })
            }
          />
        </FormGroup>

        <FormGroup sx={{ mb: 0 }}>
          <TextField
            helperText={errors.company_name}
            error={Boolean(errors.company_name)}
            value={contact.company_name}
            placeholder="Contact company name"
            label="Company name"
            onChange={(e) =>
              setContact({ ...contact, company_name: e.target.value })
            }
          />
        </FormGroup>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={() => dispatch(updateContactsState("openModal", false))}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={() => dispatch(createOrUpdateContact(contact))}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

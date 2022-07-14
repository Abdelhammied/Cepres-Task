import React, { useCallback } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { ContactInterface } from "store/contacts/conacts.state";
import { contactsStateSelector } from "store/contacts/contacts.selectors";
import AddIcon from "@mui/icons-material/Add";

import ContactListItem from "./ContactListItem";
import { AppDispatch } from "store/store.config";
import { handleCreateContact } from "store/contacts/contacts.actions";

export default function ContactList() {
  const contacts = useSelector(
    contactsStateSelector("contacts")
  ) as ContactInterface[];

  const dispatch: AppDispatch = useDispatch();

  const getTotalUnreadedMessages = useCallback(() => {
    return contacts.reduce(
      (accoumelator: number, contact: ContactInterface) => {
        accoumelator += contact.unreaded_messages;

        return accoumelator;
      },
      0
    );
  }, [contacts]);

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">My Investment Network</Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => dispatch(handleCreateContact())}
        >
          Create
        </Button>
      </Box>

      <Table>
        <TableBody>
          {contacts.map((contact) => (
            <ContactListItem key={contact.id} contact={contact} />
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>
              <Typography>
                {getTotalUnreadedMessages()} unread messages in total
              </Typography>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}

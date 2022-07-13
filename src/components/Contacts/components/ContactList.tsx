import React, { useCallback } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

import { ContactInterface } from "store/contacts/conacts.state";
import { contactsStateSelector } from "store/contacts/contacts.selectors";
import ContactListItem from "./ContactListItem";

export default function ContactList() {
  const contacts = useSelector(
    contactsStateSelector("contacts")
  ) as ContactInterface[];

  const currentSelectedContact = useSelector(
    contactsStateSelector("contact")
  ) as ContactInterface;

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
      <Typography variant="h5">My Investment Network</Typography>

      <Table>
        <TableBody>
          {contacts.map((contact) => (
            <ContactListItem
              key={contact.id}
              contact={contact}
              isActive={currentSelectedContact.id === contact.id}
            />
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

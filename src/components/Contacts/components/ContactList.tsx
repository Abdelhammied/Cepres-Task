import {
  Avatar,
  Badge,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { ContactInterface } from "store/contacts/conacts.state";
import { contactsStateSelector } from "store/contacts/contacts.selectors";

export default function ContactList() {
  const contacts = useSelector(
    contactsStateSelector("contacts")
  ) as ContactInterface[];

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
            <TableRow key={contact.id}>
              <TableCell>
                <Avatar />
              </TableCell>

              <TableCell>
                <Typography variant="h6">{`${contact.fname} ${contact.lname}`}</Typography>

                <Typography>{contact.email_of_contact}</Typography>
              </TableCell>

              <TableCell>
                <Chip label={`${contact.unreaded_messages} New Messages`} />
              </TableCell>
            </TableRow>
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

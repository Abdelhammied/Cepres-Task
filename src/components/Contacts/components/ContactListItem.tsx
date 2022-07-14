/* eslint-disable no-restricted-globals */
import React from "react";

import {
  Avatar,
  Chip,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";

import { ContactInterface } from "store/contacts/conacts.state";
import {
  deleteContact,
  updateContactsState,
} from "store/contacts/contacts.actions";
import { AppDispatch } from "store/store.config";

interface ContactListItemInterface {
  contact: ContactInterface;
}

function ContactListItem({ contact }: ContactListItemInterface) {
  const dispatch: AppDispatch = useDispatch();

  const showItem = () => dispatch(updateContactsState("contact", contact));

  const editItem = () => {
    dispatch(updateContactsState("state", "update"));

    dispatch(updateContactsState("contact", contact));

    dispatch(updateContactsState("openModal", true));
  };

  const deleteItem = () => {
    if (
      confirm(
        `Are you sure you want to delete ${contact.fname} ${contact.lname}`
      )
    ) {
      dispatch(deleteContact(contact));
    }
  };

  return (
    <TableRow>
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

      <TableCell>
        <IconButton size="small" color="info" onClick={showItem}>
          <VisibilityIcon />
        </IconButton>

        <IconButton size="small" color="info" onClick={editItem}>
          <EditIcon />
        </IconButton>

        <IconButton size="small" color="error" onClick={deleteItem}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default React.memo(ContactListItem);

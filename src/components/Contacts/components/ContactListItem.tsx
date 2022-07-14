/* eslint-disable no-restricted-globals */
import React from "react";

import {
  Avatar,
  Chip,
  TableCell,
  TableRow,
  Typography,
  styled,
  Button,
} from "@mui/material";

import { useDispatch } from "react-redux";

import { Menu, Item, useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import "assets/css/ReactContextify.css";
import DeleteIcon from "@mui/icons-material/Delete";

import { ContactInterface } from "store/contacts/conacts.state";
import { AppDispatch } from "store/store.config";
import {
  deleteContact,
  updateContactsState,
} from "store/contacts/contacts.actions";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  cursor: "pointer",
  transitionDuration: ".25s",
  transitionTimingFunction: "ease-in-out",
  "&:hover": {
    background: theme.palette.secondary.light,
  },
}));

interface ContactListItemInterface {
  contact: ContactInterface;
  isActive: boolean;
}

function ContactListItem({ contact, isActive }: ContactListItemInterface) {
  const { show } = useContextMenu({
    id: contact.id,
  });

  const dispatch: AppDispatch = useDispatch();

  const handleContextMenu = (event: any) => {
    event.preventDefault();
    show(event, {
      props: {
        key: "value",
      },
    });
  };

  const handleDeleteContact = () => {
    if (
      confirm(
        `Are you sure you want to delete ${contact.fname} ${contact.lname}`
      )
    ) {
      dispatch(deleteContact(contact.id));
    }
  };

  return (
    <>
      <StyledTableRow
        onClick={() => dispatch(updateContactsState("contact", contact))}
        onContextMenu={handleContextMenu}
        sx={{
          backgroundColor: (theme) =>
            isActive ? theme.palette.secondary.main : "",
        }}
      >
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
      </StyledTableRow>

      <Menu id={contact.id}>
        <Item onClick={handleDeleteContact}>
          <Button color="error" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Item>
      </Menu>
    </>
  );
}

export default React.memo(ContactListItem);

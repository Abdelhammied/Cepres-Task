import React from "react";
import { useSelector } from "react-redux";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { contactsStateSelector } from "store/contacts/contacts.selectors";
import { ContactInterface } from "store/contacts/conacts.state";

export default function ContactHeader() {
  const contact = useSelector(
    contactsStateSelector("contact")
  ) as ContactInterface;

  const MemoizedHeaderDescription = React.useMemo(
    () => (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          flex: 1,
          gap: (theme) => theme.spacing(10),
        }}
      >
        <Typography variant="h4">Manage your investment network</Typography>

        <Typography>
          Big company announcement or simple sub-header taking two or more lines
        </Typography>
      </Box>
    ),
    []
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: (theme) => theme.spacing(10),
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          flex: 1,
          gap: (theme) => theme.spacing(25),
        }}
      >
        {MemoizedHeaderDescription}

        <Box
          gap={(theme) => theme.spacing(2)}
          display="flex"
          marginBottom={(theme) => theme.spacing(5)}
        >
          <Button variant="contained">Verify Request</Button>

          <Button>Contact {contact.fname}</Button>
        </Box>
      </Box>

      <Box
        sx={{
          flex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: (theme) => theme.spacing(5),
          backgroundColor: (theme) => theme.palette.secondary.main,
          height: (theme) => theme.spacing(80),
        }}
      >
        <Avatar
          sx={{
            width: 56,
            height: 56,
            color: (theme) => theme.palette.secondary.dark,
          }}
        />

        <Box
          display="flex"
          flexDirection="column"
          flexWrap="wrap"
          justifyContent="space-between"
          gap={(theme) => theme.spacing(1)}
        >
          <Typography variant="h6">{`${contact.fname} ${contact.lname}`}</Typography>

          <Typography>
            {`${contact.job_title}@${contact.company_name}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

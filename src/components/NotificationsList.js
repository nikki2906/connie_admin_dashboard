import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Box
} from '@mui/material';

import notificationsData from '../data/notificationdata.json';

const NotificationsList = () => {
  const notifications = notificationsData.data;

  const [open, setOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState('');
  const [emailContent, setEmailContent] = useState('');

  const handleEmailUser = (userEmail) => {
    setSelectedEmail(userEmail);
    setOpen(true);
  };

  const handleEmailNonProfit = (nonProfitEmail) => {
    setSelectedEmail(nonProfitEmail);
    setOpen(true);
  };

  const handleSendEmail = () => {
    console.log(`Email sent to: ${selectedEmail}`);
    console.log(`Email content: ${emailContent}`);

    setSelectedEmail('');
    setEmailContent('');
    setOpen(false);
  };

  const handleClose = () => {
    setSelectedEmail('');
    setEmailContent('');
    setOpen(false);
  };

  return (
    <Box m={2} p={2} border={1} borderRadius={4}>
      <Card>
        <CardHeader title="Notifications and Alerts" />
        <CardContent>
          <List>
            <Typography variant="h5">Notifications</Typography>
            {notifications.map((notification) => (
              <ListItem key={notification.id}>
                <ListItemText primary={notification.message} secondary={`Date/Time: ${notification.dateTime}`} />
                <ListItemSecondaryAction>
                  <Box sx={{ display: 'flex', gap: '8px' }}>
                    <Button
                      variant="outlined"
                      onClick={() => handleEmailUser(notification.userEmail)}
                      sx={{
                        color: 'primary.main',
                        border: '1px solid',
                        borderColor: 'primary.main',
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          color: 'white',
                          borderColor: 'primary.main',
                        },
                      }}
                    >
                      Email User
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => handleEmailNonProfit(notification.nonProfitEmail)}
                      sx={{
                        color: 'secondary.main',
                        border: '1px solid',
                        borderColor: 'secondary.main',
                        '&:hover': {
                          backgroundColor: 'secondary.main',
                          color: 'white',
                          borderColor: 'secondary.main',
                        },
                      }}
                    >
                      Email Non-Profit
                    </Button>
                  </Box>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Compose Email</DialogTitle>
        <DialogContent>
          <TextField label="Recipient" value={selectedEmail} disabled fullWidth />

          <TextField
            label="Email Content"
            multiline
            rows={4}
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            fullWidth
            variant="outlined"
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSendEmail} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default NotificationsList;

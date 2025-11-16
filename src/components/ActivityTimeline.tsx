import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

const activities = [
  { id: 1, user: 'John Doe', action: 'created a new contact', time: '2 hours ago' },
  { id: 2, user: 'Jane Smith', action: 'updated a lead', time: '3 hours ago' },
  { id: 3, user: 'Peter Jones', action: 'closed an opportunity', time: '5 hours ago' },
];

const ActivityTimeline: React.FC = () => {
  return (
    <Card className="shadow-lg">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Recent Activity
        </Typography>
        <List>
          {activities.map((activity) => (
            <ListItem key={activity.id}>
              <ListItemAvatar>
                <Avatar>{activity.user.charAt(0)}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${activity.user} ${activity.action}`}
                secondary={activity.time}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ActivityTimeline;
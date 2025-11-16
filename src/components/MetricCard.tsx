import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Card, CardContent, Typography, Box } from '@mui/material';

interface MetricCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon, color }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    delay: 200,
    config: { duration: 1000 },
  });

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent>
        <Box display="flex" alignItems="center">
          <Box
            className="p-3 rounded-full"
            sx={{ backgroundColor: color, color: '#fff' }}
          >
            {icon}
          </Box>
          <Box ml={2}>
            <Typography color="textSecondary" gutterBottom>
              {title}
            </Typography>
            <animated.div className="text-2xl font-bold">
              {number.to((n) => n.toFixed(0))}
            </animated.div>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
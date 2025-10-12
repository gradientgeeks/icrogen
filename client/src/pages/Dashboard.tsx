import {
  Box,
  Card,
  CardContent,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Chip,
  ListItemButton,
} from '@mui/material';
import {
  School,
  Business,
  Person,
  Book,
  MeetingRoom,
  Schedule,
  TrendingUp,
  CheckCircle,
} from '@mui/icons-material';

interface StatCard {
  title: string;
  value: string | number;
  icon: React.ReactElement;
  color: string;
}

const Dashboard: React.FC = () => {
  const stats: StatCard[] = [
    {
      title: 'Active Programmes',
      value: '5',
      icon: <School />,
      color: '#2196f3',
    },
    {
      title: 'Departments',
      value: '12',
      icon: <Business />,
      color: '#4caf50',
    },
    {
      title: 'Total Teachers',
      value: '156',
      icon: <Person />,
      color: '#ff9800',
    },
    {
      title: 'Total Subjects',
      value: '342',
      icon: <Book />,
      color: '#9c27b0',
    },
    {
      title: 'Available Rooms',
      value: '48',
      icon: <MeetingRoom />,
      color: '#f44336',
    },
    {
      title: 'Generated Routines',
      value: '24',
      icon: <Schedule />,
      color: '#00bcd4',
    },
  ];

  const recentActivities = [
    { text: 'New routine generated for B.Tech CST Sem 5', time: '2 hours ago', status: 'success' },
    { text: 'Department "Electronics Engineering" updated', time: '5 hours ago', status: 'info' },
    { text: 'Teacher "Dr. Smith" added to Mathematics dept', time: '1 day ago', status: 'info' },
    { text: 'Routine committed for M.Sc Physics Sem 3', time: '2 days ago', status: 'success' },
    { text: 'New session "Fall 2025" created', time: '3 days ago', status: 'warning' },
  ];

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h3" 
          gutterBottom 
          sx={{ 
            fontWeight: 800,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em',
          }}
        >
          Dashboard
        </Typography>
        <Typography variant="h6" sx={{ color: 'rgba(0,0,0,0.6)', fontWeight: 500 }}>
          Welcome to ICRoGen - Manage your academic schedules efficiently
        </Typography>
      </Box>

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(6, 1fr)',
        },
        gap: 3,
        mb: 4,
      }}>
        {stats.map((stat, index) => (
          <Card
            key={index}
            sx={{
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
              background: `linear-gradient(135deg, ${stat.color}15 0%, ${stat.color}05 100%)`,
              border: `2px solid ${stat.color}30`,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: -20,
                right: -20,
                width: 100,
                height: 100,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${stat.color}20 0%, transparent 70%)`,
              }}
            />
            <CardContent sx={{ position: 'relative', zIndex: 1 }}>
              <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 56,
                    height: 56,
                    borderRadius: '16px',
                    background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}dd 100%)`,
                    boxShadow: `0 8px 16px ${stat.color}40`,
                    color: 'white',
                  }}
                >
                  <Box component="span" sx={{ fontSize: 28 }}>
                    {stat.icon}
                  </Box>
                </Box>
              </Box>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 800,
                  color: stat.color,
                  mb: 0.5,
                }}
              >
                {stat.value}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'rgba(0,0,0,0.6)',
                  fontWeight: 600,
                }}
              >
                {stat.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
        gap: 3,
      }}>
        <Paper sx={{ p: 4 }}>
          <Box display="flex" alignItems="center" mb={3} gap={1}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
              }}
            >
              <TrendingUp />
            </Box>
            <Typography variant="h5" fontWeight="bold" sx={{ color: '#1f2937' }}>
              Recent Activities
            </Typography>
          </Box>
          <List sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {recentActivities.map((activity, index) => (
              <ListItem
                key={index}
                sx={{
                  borderLeft: `4px solid ${
                    activity.status === 'success'
                      ? '#10b981'
                      : activity.status === 'warning'
                      ? '#f59e0b'
                      : '#06b6d4'
                  }`,
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  borderRadius: 2,
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateX(8px)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <ListItemText
                  primary={activity.text}
                  secondary={activity.time}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    fontSize: '0.95rem',
                  }}
                />
                <Chip
                  label={activity.status}
                  size="small"
                  color={
                    activity.status === 'success'
                      ? 'success'
                      : activity.status === 'warning'
                      ? 'warning'
                      : 'info'
                  }
                  sx={{
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    fontSize: '0.7rem',
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Paper>

        <Paper sx={{ p: 4 }}>
          <Box display="flex" alignItems="center" mb={3} gap={1}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
              }}
            >
              <CheckCircle />
            </Box>
            <Typography variant="h5" fontWeight="bold" sx={{ color: '#1f2937' }}>
              Quick Actions
            </Typography>
          </Box>
          <List sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <ListItemButton
              sx={{
                border: '2px solid rgba(99, 102, 241, 0.2)',
                borderRadius: 2,
                backdropFilter: 'blur(10px)',
                background: 'rgba(255, 255, 255, 0.5)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                  borderColor: 'rgba(99, 102, 241, 0.4)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 16px rgba(99, 102, 241, 0.2)',
                },
              }}
            >
              <ListItemText
                primary="Generate New Routine"
                secondary="Create schedule for a semester"
                primaryTypographyProps={{
                  fontWeight: 700,
                  fontSize: '0.95rem',
                }}
              />
            </ListItemButton>
            <ListItemButton
              sx={{
                border: '2px solid rgba(236, 72, 153, 0.2)',
                borderRadius: 2,
                backdropFilter: 'blur(10px)',
                background: 'rgba(255, 255, 255, 0.5)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(219, 39, 119, 0.1) 100%)',
                  borderColor: 'rgba(236, 72, 153, 0.4)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 16px rgba(236, 72, 153, 0.2)',
                },
              }}
            >
              <ListItemText
                primary="Add Programme"
                secondary="Create new academic programme"
                primaryTypographyProps={{
                  fontWeight: 700,
                  fontSize: '0.95rem',
                }}
              />
            </ListItemButton>
            <ListItemButton
              sx={{
                border: '2px solid rgba(16, 185, 129, 0.2)',
                borderRadius: 2,
                backdropFilter: 'blur(10px)',
                background: 'rgba(255, 255, 255, 0.5)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)',
                  borderColor: 'rgba(16, 185, 129, 0.4)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 16px rgba(16, 185, 129, 0.2)',
                },
              }}
            >
              <ListItemText
                primary="Manage Teachers"
                secondary="Add or update faculty members"
                primaryTypographyProps={{
                  fontWeight: 700,
                  fontSize: '0.95rem',
                }}
              />
            </ListItemButton>
            <ListItemButton
              sx={{
                border: '2px solid rgba(245, 158, 11, 0.2)',
                borderRadius: 2,
                backdropFilter: 'blur(10px)',
                background: 'rgba(255, 255, 255, 0.5)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(217, 119, 6, 0.1) 100%)',
                  borderColor: 'rgba(245, 158, 11, 0.4)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 16px rgba(245, 158, 11, 0.2)',
                },
              }}
            >
              <ListItemText
                primary="View Reports"
                secondary="Check routine statistics"
                primaryTypographyProps={{
                  fontWeight: 700,
                  fontSize: '0.95rem',
                }}
              />
            </ListItemButton>
          </List>
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;
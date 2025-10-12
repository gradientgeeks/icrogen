import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6366f1',
      light: '#818cf8',
      dark: '#4f46e5',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ec4899',
      light: '#f472b6',
      dark: '#db2777',
      contrastText: '#ffffff',
    },
    background: {
      default: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      paper: 'rgba(255, 255, 255, 0.95)',
    },
    success: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669',
    },
    warning: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706',
    },
    error: {
      main: '#ef4444',
      light: '#f87171',
      dark: '#dc2626',
    },
    info: {
      main: '#06b6d4',
      light: '#22d3ee',
      dark: '#0891b2',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontWeight: 600,
      letterSpacing: '-0.005em',
    },
    h6: {
      fontWeight: 600,
      letterSpacing: '0em',
    },
    button: {
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    'none',
    '0 2px 4px rgba(0,0,0,0.05)',
    '0 4px 6px rgba(0,0,0,0.07)',
    '0 6px 12px rgba(0,0,0,0.1)',
    '0 8px 16px rgba(0,0,0,0.12)',
    '0 10px 20px rgba(0,0,0,0.15)',
    '0 12px 24px rgba(0,0,0,0.17)',
    '0 14px 28px rgba(0,0,0,0.2)',
    '0 16px 32px rgba(0,0,0,0.22)',
    '0 18px 36px rgba(0,0,0,0.25)',
    '0 20px 40px rgba(0,0,0,0.27)',
    '0 22px 44px rgba(0,0,0,0.3)',
    '0 24px 48px rgba(0,0,0,0.32)',
    '0 26px 52px rgba(0,0,0,0.35)',
    '0 28px 56px rgba(0,0,0,0.37)',
    '0 30px 60px rgba(0,0,0,0.4)',
    '0 32px 64px rgba(0,0,0,0.42)',
    '0 34px 68px rgba(0,0,0,0.45)',
    '0 36px 72px rgba(0,0,0,0.47)',
    '0 38px 76px rgba(0,0,0,0.5)',
    '0 40px 80px rgba(0,0,0,0.52)',
    '0 42px 84px rgba(0,0,0,0.55)',
    '0 44px 88px rgba(0,0,0,0.57)',
    '0 46px 92px rgba(0,0,0,0.6)',
    '0 48px 96px rgba(0,0,0,0.62)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          padding: '10px 24px',
          fontWeight: 600,
          boxShadow: '0 4px 14px 0 rgba(0,0,0,0.1)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px 0 rgba(0,0,0,0.15)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #5568d3 0%, #6a4093 100%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          backdropFilter: 'blur(20px)',
          background: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.25)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          backdropFilter: 'blur(20px)',
          background: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        },
        elevation1: {
          boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.1)',
        },
        elevation2: {
          boxShadow: '0 8px 24px 0 rgba(31, 38, 135, 0.15)',
        },
        elevation3: {
          boxShadow: '0 12px 32px 0 rgba(31, 38, 135, 0.2)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            backdropFilter: 'blur(10px)',
            background: 'rgba(255, 255, 255, 0.8)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.9)',
            },
            '&.Mui-focused': {
              background: 'rgba(255, 255, 255, 1)',
              boxShadow: '0 4px 16px 0 rgba(99, 102, 241, 0.2)',
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(20px)',
          background: 'rgba(255, 255, 255, 0.85)',
          color: '#1f2937',
          boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backdropFilter: 'blur(20px)',
          background: 'rgba(255, 255, 255, 0.9)',
          border: 'none',
          boxShadow: '4px 0 24px 0 rgba(31, 38, 135, 0.15)',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          margin: '4px 8px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            background: 'rgba(99, 102, 241, 0.1)',
            transform: 'translateX(4px)',
          },
          '&.Mui-selected': {
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%)',
            fontWeight: 600,
            '&:hover': {
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(99, 102, 241, 0.1)',
        },
        head: {
          fontWeight: 700,
          background: 'rgba(99, 102, 241, 0.05)',
          color: '#4f46e5',
        },
      },
    },
  },
});

export default theme;
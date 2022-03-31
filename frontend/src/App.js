import { ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { theme } from './Theme';
import { getUserFromLocal } from './utils/getUserFromLocal';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = getUserFromLocal();

    if (!user) {
      navigate('/login');
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

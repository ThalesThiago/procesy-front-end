import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Menu from './pages/Menu';
import CadastroClientes from './pages/CadastroClientes';
import CadastroProcessos from './pages/CadastroProcessos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Cor primária
    },
    secondary: {
      main: '#dc004e', // Cor secundária
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Reseta os estilos padrão do navegador */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cadastro-clientes" element={<CadastroClientes />} />
          <Route path="/cadastro-processos" element={<CadastroProcessos />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

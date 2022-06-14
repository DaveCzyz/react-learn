import './App.css';
import { Route, Router } from 'react-router-dom';

import { Box } from '@mui/material';
import Home from './pages/Home';
import ExcerciseDetail from "./pages/ExcerciseDetail";
import Footer from './components/footer.js';
import Navbar from './components/footer.js';

function App() {
  return (
    <Box width="400px">
        <Navbar />
          <Router>
              <Route path="/" element={<Home/>}/>
              <Route path="/excercise/:id" element={<ExcerciseDetail />} />
          </Router>
        <Footer />
    </Box>
  );
}

export default App;

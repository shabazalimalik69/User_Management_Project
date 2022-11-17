
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import './App.css';
import Navbar from './Components/Navbar';
import UserDetails from './Pages/UserDetails/UserDetails';
import Router from './Routes/Router';

function App() {
  const token = useSelector((store)=>store.auth.accessToken);
  return (
    <div className="App">
     {token?
     (<UserDetails />):(<Box>
      <Navbar/>
     <Router/>
     </Box>)
     }
     {/* <Navbar/>
     <Router/> */}
    </div>
  );
}

export default App;

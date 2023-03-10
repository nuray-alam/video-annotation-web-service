import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Clients from './pages/Clients/Clients';
import Contact from './pages/Contact/Contact';
import HomePage from './pages/Home/HomePage';
import ServiceDetails from './pages/Services/ServiceDetails';
import Services from './pages/Services/Services';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='about' element={<About></About>}></Route>
          <Route path='service' element={<Services></Services>}></Route>
          <Route path='services/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
          <Route path='clients' element={<Clients></Clients>}></Route>
          <Route path='contact' element={<Contact></Contact>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

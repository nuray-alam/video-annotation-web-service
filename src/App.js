import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import HomePage from './pages/Home/HomePage';
import Services from './pages/Services/Services';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='about' element={<About></About>}></Route>
          <Route path='service' element={<Services></Services>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

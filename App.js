import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import { Home,Wardrobe } from './pages/index';
import { Container } from './components/index';
import { Header, Footer } from './sections/index';

const App = () => {
  return (
    <>
        <Router>
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/wardrobe' element={<Wardrobe/>}/>
          </Routes>
        </Container>
        {/*<Footer />*/}
        </Router>
    </>
  );
};

export default App;

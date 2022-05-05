import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Notfound from './Components/Notfound/Notfound';


function App() {
  return (
    <>
    <div>
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path='/Home' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/*' element={<Notfound />} />

    </Routes>
    </BrowserRouter>

</div>
   </>
  );
}

export default App;

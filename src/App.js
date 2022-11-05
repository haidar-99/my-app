
import './App.css';
import Customer from './Component/Customer';
import Data from './Component/Data';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import Startups from './Component/Startups';
import Workcards from './Component/Workcards';


function App() {
  return (
   <>
  <Navbar/>
  <Startups/>
  <Workcards/>
  <Data/>
  <Customer/>
  <Footer/>
   </>
  );
}

export default App;

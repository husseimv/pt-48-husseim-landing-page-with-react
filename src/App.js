import logo from './logo.svg';
import './App.css';
import Navbar from './navbar.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Chest from './chest.jsx';

export default function App() {
  return (<>
    <div>
      <div><Navbar/></div>
      <div><Chest/></div>
    </div>
    </>);
    
}
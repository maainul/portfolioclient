import './App.css';

import axios from 'axios';
import { MyRoutes } from './MyRoutes';


axios.defaults.withCredentials = true

function App() {
  return (
    <div className="App">
      <MyRoutes />
    </div>
  );
}

export default App;

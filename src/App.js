import React ,{useContext} from 'react';
import './App.scss';
import Mode from './components/Mode';
import { AdminContext } from './contexts/AdminContext';

function App() {
  const {mode} = useContext(AdminContext);
  return (
    <div id='app' className={mode === 'dark' ? 'darkapp': 'lightapp' } >
        <Mode/>
        
    </div>
  );
};

export default App;
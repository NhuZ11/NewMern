import { useState } from 'react';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import './App.css';
import Alert from './Components/Alert';
import Card from './Components/Card';

function App() {
  const [theme, setTheme] = useState('light');
  const [text, setButtonText] = useState('Enable Dark');
  const [alert, setAlert] = useState(null); // Initialize as null

  const alertShow = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setButtonText('Enable Light');
      alertShow('success', 'Dark mode is enabled.');
    } else {
      setTheme('light');
      setButtonText('Enable Dark');
      alertShow('danger', 'Light mode is enabled.'); // Corrected the message
    }
  };

  return (
    <>
      <div>
        <header>
          <Navbar theme={theme} text={text} toggleTheme={toggleTheme} />
        </header>
        <Carousel />
        {alert && <Alert alert={alert} alertShow={alertShow} />}
        <Card />  
      </div>
    </>
  );
}

export default App;

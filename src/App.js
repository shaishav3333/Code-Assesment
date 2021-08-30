import './App.css';
import LandingPage from './components/landingPage/landingPage'
import {initializeIcons } from '@fluentui/react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
function App() {
  initializeIcons();
  return (
    <div className="App">
      <LandingPage/>
    </div>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactForm from './components/ContactForm';

function App() {
return (
  <div>
    <ContactForm />

    <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
    Coded by <a href="https://www.frontendmentor.io/profile/lina98st">Alina</a>.
  </div>
  </div>
);
 }

export default App;

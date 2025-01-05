import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Sidebar from './components/sidebar/Sidebar';
import Container from './components/container/Container';

function App() {
  return (
    <div className="bg-background text-text flex font-ibm">
      <Sidebar></Sidebar>

      <Container></Container>
    </div>
  );
}

export default App

import { Analytics } from "@vercel/analytics/react"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Sidebar from './components/sidebar/Sidebar';
import Container from './components/container/Container';

function App() {
  return (
    <div className="bg-background text-text font-ibm flex min-h-screen">
      <Sidebar></Sidebar>

      <Container></Container>
      <Analytics/>
    </div>
  );
}

export default App

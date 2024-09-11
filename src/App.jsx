
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ExampleNavbarThree } from './components/Header/ExampleNavbarThree'
import Home from './components/Home/Home'
import { BlogDetail } from './components/Pages/BlogDetail';
import { FooterFour } from './components/Footer/FooterFour';

function App() {


  return (
    <>

<ExampleNavbarThree/>

<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
 
<FooterFour/>
    </>
  )
}

export default App

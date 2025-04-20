import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './routes/home'
import Publications from './routes/publications'
import Projects from './routes/projects'
import Misc from './routes/misc'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/misc" element={<Misc />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

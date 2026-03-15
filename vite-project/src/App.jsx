import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Automatically redirect from the root URL to your Portfolio page */}
          <Route path="/" element={<Navigate to="/Portfolio" replace />} />
          
          {/* Your actual main portfolio page */}
          <Route path="/Portfolio" element={<Portfolio />} />
          
          {/* The gutted 404 page we made earlier */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      
      {/* This is just a UI component for little pop-up notifications */}
      <Toaster />
    </>
  )
}

export default App
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home,Auth,Orders,Tables,Menu } from "./pages";
import  Header  from "./components/shared/Header";
function App() {
  return (
    
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Tables" element={<Tables />} />
         <Route path="/Menu" element={<Menu />} />
         <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

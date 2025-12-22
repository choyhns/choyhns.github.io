import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/project/:slug" element={<ProjectDetail/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

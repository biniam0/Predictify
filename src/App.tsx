import "./App.css";
import Navbar from "./components/NavBar";
import Events from "./pages/Events";
import Footer from "./pages/Footer";
import News from "./pages/News";
import Researchers from "./pages/Researchers";
import Stories from "./pages/Stories";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Researchers />
      <News />
      <Events />
      <Stories />
      <Footer />
    </>
  );
}

export default App;

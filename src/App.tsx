import "./App.css";
import Navbar from "./components/NavBar";
import Events from "./pages/Events";
import News from "./pages/News";
import ResearchersPage from "./pages/ResearchersPage";
import Stories from "./pages/Stories";

function App() {
  return (
    <>
      <Navbar />
      <ResearchersPage />
      <News />
      <Events />
      <Stories />
    </>
  );
}

export default App;

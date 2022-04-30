import "./App.scss";
import "./index.css";
import Footer from "./compenants/Footer";
import Header from "./compenants/Header";
import Jobs from "./compenants/Jobs";

function App() {
  return (
    <div className="App">
      <Header text="The Job Board" />
      <Jobs />
      <Footer text="Made with React at le Reacteur by Doud" />
    </div>
  );
}

export default App;

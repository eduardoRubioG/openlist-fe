import Login from "./components/Login";
import SongInput from "./components/SongInput";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Callback from "./components/Callback";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<SongInput />} />
          {/* <Route path="/callback" element={<Callback />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

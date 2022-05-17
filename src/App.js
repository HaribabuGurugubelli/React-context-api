import "./App.css";
import { Routes, Route } from "react-router-dom";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import Book from "./components/Books";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ComponentA />} />
      <Route path="/b" element={<ComponentB />} />
      <Route path="/books" element={<Book />} />
    </Routes>
  );
}

export default App;

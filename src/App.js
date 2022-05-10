import { Cards } from "./components/Cards";

function App() {
  return (
    <>
      <div className="top">
        <input
          className="search-input"
          type="text"
          placeholder="Procure por específico"
        />
      </div>
      <ul className="cards">
        <Cards />
      </ul>
    </>
  );
}

export default App;

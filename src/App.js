import Header from "./components/Header";
import "./index.css";
import Card from "./components/Card";
import data from "./Data";

function App() {
  let cards = data.map((card) => {
    return <Card key={card.id} card={card} />;
  });
  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}

export default App;

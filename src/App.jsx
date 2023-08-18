import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import TodosMain from "./TodosMain";


function App() {
  return (
    <div className="App">
      <div className=".App-header">
      <Header />
      <TodosMain />
      <Footer />
      </div>
      
    </div>
  );
}

export default App;
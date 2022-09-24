import List from "./Components/ListComponent"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //const items = [{ text: "ReactJS" }, { text: "VueJS" }, { text: "NextJS" }]
  return (
    <div className="main_container d-flex flex-column m-auto mt-5">
      <div className="p-2 bg-primary border fw-bold mb-2 text-center text-white rounded" >ITEMS</div>
      <List />
    </div>
  );
}

export default App;

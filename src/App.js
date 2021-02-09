import "./App.css";
import { Link, Route } from "react-router-dom";
import Home from "./components/Home";
import Planets from "./components/Planets";

function App() {
  return (
    <div>
      <nav>
        <li>
          <Link to="/">Home </Link>
        </li>

        <li>
          <Link to="/planets">Planets</Link>
        </li>
      </nav>

      <main>
        <Route exact path="/" component={Home} />
        <Route path="/planets" component={Planets} />
      </main>
    </div>
  );
}

export default App;

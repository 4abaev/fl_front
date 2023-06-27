import "./App.css";
import Header from "./components/header/header";
import Users from "./components/users/users";

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <Users />
            </div>
        </div>
    );
}

export default App;

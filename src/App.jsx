import "./App.css";
import Hamburger from "./components/Nav/Hamburger";
import Navbar from "./components/Nav/Navbar";

function App() {
    return (
        <>
            <div>
                <div className="hidden lg:block">
                    <Navbar></Navbar>
                </div>
                <div className="lg:hidden">
                    <Hamburger></Hamburger>
                </div>
            </div>
        </>
    );
}

export default App;

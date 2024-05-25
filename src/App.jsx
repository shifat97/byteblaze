import "./App.css";
import Hamburger from "./components/Nav/Hamburger";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer/Footer.jsx";

function App() {
    return (
        <div>
            <div>
                <div className="hidden lg:block">
                    <Navbar></Navbar>
                </div>
                <div className="lg:hidden">
                    <Hamburger></Hamburger>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default App;

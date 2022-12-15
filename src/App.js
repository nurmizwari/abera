import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hp from "./components/Hp";
import FooterTop from "./components/FooterTop";
import FooterBawah from "./components/FooterBawah";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <div className="container pp">
          <div className="col-8">
            <p className="p1 ">We Make IT Simple, Faster, and Less Expensive</p>
            <p className="p2">We're IT Business since 2022</p>
            <button
              type="button"
              class="btn rounded-pill"
              style={{
                background: "#205887",
                color: "white",
                paddingRight: "30px",
                paddingLeft: "30px",
                fontWeight: "bold",
              }}
            >
              LET US NOW
            </button>
          </div>
        </div>
      </div>
      <Hp />
      <FooterTop />
      <FooterBawah />
    </>
  );
}

export default App;

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Products from "./components/Products";
const App=()=>{
  return (
    <div className="container">
    <Header/>
    
    <Products/>
    <Footer/></div>
  );
}
export default App;
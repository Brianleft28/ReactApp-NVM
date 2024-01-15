import './App.css'
import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    <div className="app">
      { /* <Login/> */ }
      
      <Header/>
      <div className='app__central'>
      <Sidebar/>
      <Main/>
      </div>



    </div>
  );
}

export default App;

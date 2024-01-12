// import logo from './logo.svg';
import './App.css';
import Main from './layout/Main';
import Footer from './layout/Footer';
import Header from './layout/Header';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header title='React Movies'/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {Yes} from './Rindy';
import Button from './Button';


function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Logo in React <code></code> & save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>Muhammad Rindy</p>
      <Yes children="text1"/>
      <Yes children="text2"/> 
      {/* atau */}
      <Yes>oke guys</Yes> 
    {/* Untuk mengambil isi konten nya bs menggunakan props.children */}
    <p></p>
    <Button/>
    <p></p>
    <img clasName="picture" src="/https://cdn.wallpapersafari.com/92/45/p7rbaM.jpg" alt="gambar"/>
    </div>
  );
}


export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  const array1 = ["Android","Blackberry","iPhone","Windowa Phone"];
  const array2 = ["Samsung","HTC",'Micromax',"Apple"];
  return (
    <div className="App">
      <center>
        <h2>Mobile Operating System</h2>
          <ul>
            {array1.map((element) => <li style={{textAlign:"left"}}>{element}</li>)}
          </ul>
          <br/>
          <h2>Mobile Operating System</h2>
          <ul>
            {array1.map((element) => <li style={{textAlign:"left"}}>{element}</li>)}
          </ul>
      </center>
    </div>
  );
}

export default App;

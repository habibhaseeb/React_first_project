import logo from './logo.svg';
import './App.css';


function App() {
  const buttonStyles = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '20px 30px',
    border: '3px solid red',
    borderRadius: '4px',
    position:'fixed',
    fontSize: "13px",
    textAlign:'center',
    marginLeft:'-60px',
    marginRight:'20px',
    marginTop:'2in',
};

  return (
    <div style={{textAlign:'center'}}>
      <center>
      <h1 style={{border:'3px dotted black', width:'13em',backgroundColor:'orange'}}>This is Heading</h1>
      </center>
      <button style={buttonStyles}>Click me</button>
      <buttonStyles/>
    </div>
  );
}

export default App;

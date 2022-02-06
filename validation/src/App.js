import './App.css';
import LoginForm from './auth/login';

function App() {
  const divStyle = {
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
  }
  return (
    <div className="App" style={divStyle}>
     <LoginForm/>
    </div>
  );
}

export default App;

import MyFirstComponents from './components/MyFirstComponents';
import SecondComponent from './components/SecondComponent';
import ThirdComp from './components/ThirdComp';
function App() {
  const user = {
    name: 'Maks',
    surname: "Yary",
  }
  return (
    <div className="App">
      <h1>Hello react</h1>
      <MyFirstComponents user = {user}/>
      <SecondComponent user = {user}/>
      <ThirdComp>
         <p>lorem lorem10 lorem.</p>
      </ThirdComp>
    </div>
  );
}

export default App;

import Navabar from './components/navabar';
import Card from './components/card'; 

function App() {
  return (
  <>
    <Navabar />
    <div className="container ">
      <h1>Cosa desideri ordinare?</h1>
      <hr />
      <div className='row'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>  
  </>
  );
}

export default App;

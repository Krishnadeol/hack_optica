
import { useEffect,useState } from 'react';
import Spiral from './components/Spiral'
function App() {

  const[Load,setLod]=useState(false);
  useEffect(()=>{
    setLod(true);
    setTimeout(()=>{
    setLod(false);
    },8000)
  },[])
  return (
  
    <>
  {Load ? <Spiral /> : <h1>santa clause</h1>}
    </>
  );
}
export default App;


import { useAutor,AutorProvider } from '../context/AutorContext';

export default function Articole() {
  return (
    <AutorProvider>
    <div>Articole</div>
    <Articol1 />
    </AutorProvider>
  )
}
function Articol1() {
    return (
      <>
        <h1>Articol1</h1>
        <Partea1 />
      </>
    );
  }
  
  function Partea1() {
     const { nume } = useAutor();
    return (
      <>
        <h1>Partea 1</h1>
         <p>autorul este{nume}</p>
        <ZonaA />
      </>
    );
  }
  
  function ZonaA() {
     const { nume } = useAutor();
    return (
     <>
      
        <h1>Suntem in zona A</h1>
        <p>autorul este{nume}</p>
       </>
     
    );
  }
  
 
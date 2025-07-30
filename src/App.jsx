import AppRoutes from './routes/AppRoutes';
import { useEffect } from 'react';

const App = () => {

useEffect(() => {
  const handleContextMenu = (e) => e.preventDefault();
  document.addEventListener("contextmenu", handleContextMenu);
  return () => {
    document.removeEventListener("contextmenu", handleContextMenu);
  };
}, []); 

 
  return (

    <div style={{ fontFamily: "Instrument Sans" }}>
      <AppRoutes />
    </div>
  );
};

export default App;
import "./App.scss"

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cbs from "./componentes/Cbs/Cbs";
import FANErrorDeAgenda from "./componentes/FAN/ErrorDeAgenda";
import FANEsperaDeEjecucion from "./componentes/FAN/EsperaDeEjecucion";
import Fan from "./componentes/FAN/Fan";
import FanservicioReducido from "./componentes/FAN/ServicioReducido";
import Informacion from "./componentes/Informacion/informacion";
import NavBar from './componentes/NavBar/NavBar';
import Open from "./componentes/Open/Open";
import OpenAdelanto from "./componentes/Open/OpenAdelanto";
import Portada from "./componentes/Portada/portada";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar/>
          <Routes>
          <Route path="/" element={<Portada/>}/>

            <Route path="/FAN" element={<Fan/>} />
            <Route path="/FAN/ServicioReducido" element={<FanservicioReducido/>} />
            <Route path="/FAN/EsperaDeEjecucion" element={<FANEsperaDeEjecucion/>} />
            <Route path="/FAN/ErrorDeAgenda" element={<FANErrorDeAgenda/>} />


            
            <Route path="/Fan/InstaladoOService" element={<Fan/>} />
            <Route path="/Fan/ErrorAgenda" element={<Fan/>} />
            <Route path="/Fan/cambio" element={<Cbs/>} />
            <Route path="/Fan/SinReduccion360" element={<Fan/>} />




            <Route path="/Open" element={<Open/>} />
            <Route path="/Open/AdelantoAseguramiento" element={<OpenAdelanto/>} />



            <Route path="/Cbs" element={<Cbs/>} />
            
            <Route path="/informacion" element={<Informacion/>} />
            <Route path="/Prodecimientos" element={<ef/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
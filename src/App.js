import "./App.scss"

import { BrowserRouter, Route, Routes } from "react-router-dom";

import CambioDomicilioErrorFan from "./componentes/FAN/cambioDeDomicilioErrorFan";
import Cbs from "./componentes/Cbs/Cbs";
import FANErrorDeAgenda from "./componentes/FAN/ErrorDeAgenda";
import FANEsperaDeEjecucion from "./componentes/FAN/EsperaDeEjecucion";
import Fan from "./componentes/FAN/Fan";
import FanservicioReducido from "./componentes/FAN/ServicioReducido";
import Informacion from "./componentes/Informacion/informacion";
import NavBar from './componentes/NavBar/NavBar';
import Open from "./componentes/Open/Open";
import OpenAdelanto from "./componentes/Open/OpenAdelanto";
import OtAnularCerrar from "./componentes/Open/OtAnularCerrar";
import Portada from "./componentes/Portada/portada";
import PosibleMasivo from './componentes/Open/posibleMaviso';
import SinReduccionEn360 from "./componentes/FAN/SinReduccionen360";
import SuspendidoRecurrenteCCIP from "./componentes/FAN/SuspendidoRecurrenteCCIP";

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
            <Route path="/Fan/cambioDomicilioErroFan" element={<CambioDomicilioErrorFan/>} />
            <Route path="/Fan/SinReduccionen360" element={<SinReduccionEn360/>} />
            <Route path="/Fan/SuspendidoRecurrenteCCIP" element={<SuspendidoRecurrenteCCIP/>} />

            
            <Route path="/Fan/InstaladoOService" element={<Fan/>} />
            <Route path="/Fan/ErrorAgenda" element={<Fan/>} />
            <Route path="/Fan/cambio" element={<Cbs/>} />
            <Route path="/Fan/SinReduccion360" element={<Fan/>} />
            




            <Route path="/Open" element={<Open/>} />
            <Route path="/Open/AdelantoAseguramiento" element={<OpenAdelanto/>} />
            <Route path="/Open/PosibleMasivo" element={<PosibleMasivo/>} />
            <Route path="/Open/OtAnularCerrar" element={<OtAnularCerrar/>} />



            <Route path="/Cbs" element={<Cbs/>} />
            
            <Route path="/informacion" element={<Informacion/>} />
            <Route path="/Prodecimientos" element={<ef/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

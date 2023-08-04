import Inicio from "../Media/Img/Inicio.png"
import { Link } from "react-router-dom";

function NavBar(){
    return (
      <section className='NavContainer'>
        <div><Link to="/"><img src={Inicio} className='inicio'></img></Link></div>
        <div className='NavCard'></div>
        <div class="dropdown">
          <button class="dropbtn">FAN</button>
          <div class="dropdown-content">
            <Link to="/FAN/ServicioReducido">Servicio reducido por mora sin saldo pendiente (Servicio Reducido sin deuda + 48hs)</Link>
            <Link to="FAN/EsperaDeEjecucion">Instalado fisicamente pero sin activacion o en espera de ejecucion - FAN</Link>
            <Link to="FAN/ErrorDeAgenda">Error de agenda sin caso relacionado</Link>
            <Link to="FAN/cambioDomicilioErroFan">Cambio de domicilio con error en FAN</Link>
            <Link to="FAN/ErrorDeAgenda">Sin reduccion en 360° pero "Reduccion" solamente en Codi</Link>
            <Link to="FAN/ErrorDeAgenda"># I-TRACKER: Adelanto y aseguramiento de agenda</Link>
            <Link to="FAN/ErrorDeAgenda">Servicio suspendido en CCIP recurrentement</Link>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">OPEN</button>
          <div class="dropdown-content">
            <Link to="/Open/AdelantoAseguramiento">I-TRACKER: Adelanto y aseguramiento de agenda</Link>
            <Link to="/">Posible Masivo</Link>
            <Link to="/">OT a cerrar</Link>
            <Link to="/">OT a anular</Link>
            <Link to="/">Solicitud pendiente</Link>
            <Link to="/">Reduccion de servicio en OPEN</Link>
            <Link to="/">Pase a redes</Link>
            <Link to="/">Servicio suspendido en CCIP recurrentemente</Link>
            <Link to="/">FTTH Error equipos (ccip/pendiente)</Link>
            <Link to="/">Reducido en open sin deuda</Link>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">CBS-C</button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </section>
    )
}
export default NavBar;
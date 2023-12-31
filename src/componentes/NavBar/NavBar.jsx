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
            <Link to="FAN/ErrorDeAgenda">Error de agenda sin caso relacionado - Itracker Agenda FAN</Link>
            <Link to="FAN/cambioDomicilioErroFan">Cambio de domicilio con error en FAN</Link>
            <Link to="FAN/SinReduccionen360">Sin reduccion en 360° pero "Reduccion" solamente en Codi</Link>
            <Link to="FAN/SuspendidoRecurrenteCCIP">Servicio suspendido en CCIP recurrentemente</Link>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">OPEN</button>
          <div class="dropdown-content">
            <Link to="/Open/AdelantoAseguramiento">I-TRACKER: Adelanto y aseguramiento de agenda</Link>
            <Link to="/Open/PosibleMasivo">Posible Masivo</Link>
            <Link to="/Open/OtAnularCerrar">OT a anular - cerrar - solicitud pendiente</Link>
            <Link to="/Open/ReduccionOpen">Reduccion de servicio en OPEN</Link>
            <Link to="/Open/PaseARedes">Pase a redes</Link>
            <Link to="/">Servicio suspendido en CCIP recurrentemente</Link>
            <Link to="/">FTTH Error equipos (ccip/pendiente)</Link>
            <Link to="/">Reducido en open sin deuda</Link>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Servicios</button>
          <div class="dropdown-content">
            <a href="#">FTTH</a>
            <a href="#">HFC</a>
            <a href="#">Flow</a>
            <a href="#">Fibermail</a>
            <a href="#">Personal wifi zone</a>
          </div>
        </div>
      </section>
    )
}
export default NavBar;
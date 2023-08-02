import './Planillas.scss';

import {Link} from 'react-router-dom';

function Planillas() {
    return (
        <div className="header">
                <ul className="nav menu">
                    <li className="categorias">Itracker - CBS
                        <ul className="desplegable">
                            <li><Link to="# " className="active link" title="COMPONENTES DE PC">FAN</Link>
                                <ul>
                                    <li><Link to="FAN/servicioReducido" className="link">servicio reducido por mora sin saldo pendiente(reducido por mas de 48hrs)</Link></li>
                                    <li><Link to="FAN/instaladoOService" className="link">Instalacion o service con cambio de modem o decos que quedo en "espera de ejecucion"</Link></li>
                                    <li><Link to="FAN/errorAgenda" className="link">Error de agenda sin caso relacionado</Link></li>
                                    <li><Link to="FAN/cambioDeDomicilio" className="link">Cambio de domicilio con error en FAN</Link></li>
                                    <li><Link to="FAN/reduccionEnCodi" className="link">Sin reduccion en vista 360° pero reduccion en asistencia tc - codi</Link></li>
                                </ul>
                            </li>
                            <li title="Perifericos"> <Link to="category/perifericos" className="active link">OPEN</Link>
                                <ul>
                                    <li><Link to="category/teclados" className="link">Adelanto / aseguramiento / error de agenda</Link></li>
                                    <li><Link to="category/mousepads" className="link">Mousepads</Link></li>
                                    <li><Link to="category/mouse" className="link">Mouses</Link></li>
                                    <li><Link to="category/auriculares" className="link">Auriculares</Link></li>
                                    <li><Link to="category/parlantes" className="link">Parlantes</Link></li>
                                    <li><Link to="category/yoysticks" className="link">Yoystick y Volantes</Link></li>
                                    <li><Link to="category/microfonos" className="link">Microfonos</Link></li>
                                </ul>
                            </li>
                            <li title="AlMACENAMIENTO"><Link to="category/almacenamiento" className="active link">CBS/CBC</Link>
                                <ul>
                                    <li><Link to="category/memoriaFlash" className="link"> FMemorialahs</Link></li>
                                    <li><Link to="category/pendrives" className="link">Pendrives</Link></li>
                                    <li><Link to="category/discosExternos" className="link">Discos Externos</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div>
    )
}

export default Planillas;
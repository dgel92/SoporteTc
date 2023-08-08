import 'bootstrap/dist/css/bootstrap.min.css';

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import ImagenPendiente from "../Media/Img/imagenPendiente.jpg"
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import suspendidoRecurrente from "../Media/Img/suspendidoRecurrenteCCIP.png"
import suspendidoRecurrente2 from "../Media/Img/suspendidoRecurrenteCCIP2.png"

function SuspendidoRecurrenteCCIP() {
    return (
        <div className='cardFAN'>
    <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
            <br/>
        <div className='img-procedimientos'><Image src={suspendidoRecurrente} fluid /></div>;
        <br/>
        <br/>
            <Accordion.Header >Servicio Suspendido Recurrente en CCIP</Accordion.Header>
                <Accordion.Body>
                <br/>
                Sucede con clientes que al momento de ser migrados a FTTH (puede suceder en clientes en FAN y OPEN), tienen o tuvieron recientemente una refinanciacion de una deuda, estuvieron o estan en portal cautivo y el sistema de CCIP procede a suspender el servicio.
                <br/>
                <br/>
                Como referencia, si el cliente te dice que debe llamar cada 3, 7 o 10 dias porque siempre se queda sin servicio y que siempre le cuesta o lo deben transferir varias veces porque el sistema automatico y los representantes no ven ninguna falla, ante comentarios como este de parte del cliente, de cajon es suspension de servicio por CCIP.
                <br/>
                <br/>
                La suspension de servicio en CCIP no se refleja en los bullet de los servicios. Si te pregunta en los flujos el estado de la sesion y de la misma en CCIP pero podemos anticiparnos haciendo indagacion y escuchando al cliente.
                </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Flujo en Base de conocimiento</Accordion.Header>
            <Accordion.Body>
            <Button variant="outline-secondary"><Link to="https://basedeconocimientos.custhelp.com/app/answers/detail/a_id/10771/kw/ccip">Flujo de CCIP y symphonica</Link></Button>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Suspension en CCIP Portal cautivo</Accordion.Header>
            <Accordion.Body>
            <div className='img-procedimientos'><Image src={suspendidoRecurrente2} fluid /></div>
                <Table striped bordered hover size="xl">
                    <thead>
                        <tr>
                        <th>Portal cautivo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        Cliente tiene una deuda en alguno de los servicios que presta la misma (ARNET - telecom - personal - cablevision - fibertel) que sigue en el sistema y que imposibilita al cliente a comprar o contratar servicios.
                        <br/>
                        <br/>
                        Ante estos casos podemos reactivar el servicio pero sera nuevamente por una cantidad de dias, brindale al cliente el numero del area administrativa para que llame consultando por deudas que tenga a su DNI ya que aparece en portal cautivo.
                        Tambien si el cliente te dice que no tiene deuda. <br/><br/>Verificá en CCIP si el Cliente figura con Código Portal Cautivo (PC-102) y en ese caso no gestiones reclamos técnicos, informale que cargaras un reclamo para que en caso de que no tenga deudas "se limpie" del sistema asi su servicio no se suspendera cada determinada cantidad de dias.
                        <br/>
                        <br/>
                        Para ver el motivo de suspension de un servicio en CCIP puedes ingresar al siguiente link:<br/>
                        <Button variant="outline-secondary"><Link to="https://basedeconocimientos.custhelp.com/app/answers/detail/a_id/9203/kw/ccip#gs=eyJndWlkZUlEIjo0MTI3LCJxdWVzdGlvbklEIjoxLCJyZXNwb25zZUlEIjoxLCJndWlkZVNlc3Npb24iOiJxTnlscTdlcSIsInNlc3Npb25JRCI6IlhxQVptN2VxIn0.">Verificacion de suspension CCIP</Link></Button>
                        </td>
                        </tr>
                    </tbody>
                </Table>
            </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="3">
            <Accordion.Header>Suspension en CCIP por Refinanciacion en OPEN / SIEBEL </Accordion.Header>
            <Accordion.Body>
                <Table striped bordered hover size="xl">
                    <thead>
                        <tr>
                        <th>Refinanciacion en OPEN / SIEBEL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        En estos casos puede ocurrir que al cliente le haya quedado una deuda o un porcentaje de la ultima factura antes de su migracion impaga, tambien procedemos de la misma manera con la diferencia de que en estado de sesion veremos morosidad ISP y donde esta la suspension. <br/><br/>Brinda la ref de area administrativa para que se comunique informando que aparece moroso en alguno de nuestros sistemas, tambien generamos el itracker y reactivamos el servicio del cliente.
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
            <Accordion.Header>Planilla Itracker</Accordion.Header>
            <Accordion.Body>
            <Image src={ImagenPendiente} fluid />;
            <br/><br/>
                <Table striped bordered hover size="sm">
                <thead>
                        <tr>
                        <th>Planilla</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                                u:<br/>
                                Número de Cliente:<br/>
                                DNI / CUIL:<br/>
                                Contrato:<br/>
                                Telefono Operador:<br/>
                                Detalle el incidente/ gestión:<br/>
                                consulta:<br/>
                                motivo de suspension de sesion:<br/>
                                CAPTURA:<br/>
                            </td>
                        </tr>
                    </tbody>
                </Table>

            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </div>
    );
}

export default SuspendidoRecurrenteCCIP;
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import fan from "../Media/Img/fan.png"
import Image from 'react-bootstrap/Image';
import reducido from "../../componentes/Media/Img/ServicioReducido1.png"

function FanservicioReducido() {
    return (
        <div className='cardFAN'>
    <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
            <Image src={reducido} fluid />;
            <Accordion.Header >Servicio reducido por mora sin saldo pendiente (Reducido sin deuda + 48hs)</Accordion.Header>
                <Accordion.Body>
                Estamos contactando a los clientes que tienen facturas vencidas hace mas de 25 días, para informales que de no regularizar la cuenta, procederemos a una reducción técnica del servicio para con ello asegurarle que pueda seguir conectado y comunicado. Para evitar esa reducción del servicio te pedimos abonar las facturas pendientes.<br/><br/>
                Los clientes que tengan facturas impagas hace más de 25 días tendrán una reducción técnica del servicio quedando de la siguiente manera: WhatsApp: llevarlo a 32 KB (permite uso de WhatsApp texto y audio), Navegación datos: Full velocidad en Webs y APP Coronavirus, y 32 KB resto de las Webs y APP, Llamadas entrantes, Llamadas salientes (se mantienen las condiciones que tiene el cliente) y SMS ilimitados, Sin Roaming y Larga distancia Internacional, SVA se mantienen. Una vez normalizado el pago, volverás a disfrutar de todos los beneficios de tu plan.
                <br/>
                <br/>
                Telefonía Fija<br/>
                - 300 minutos para llamadas a números fijos<br/>
                - Llamadas ilimitadas a números cortos de emergencia y 0800
                <br/>
                <br/>
                Internet<br/>
                -Navegación con velocidad de 2MB
                <br/>
                <br/>
                TV (no analógico)<br/>
                - Grilla de 64 canales<br/>
                - No VOD/Flow App
                <br/>
                <br/>
                Una vez se regularice el pago, podrás volver a contratar nuestros servicios adicionales, mientras el servicio se encuentre reducido por facturas impagas solo podrás usar los servicios detallados.
                </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Flujo en Base de conocimiento</Accordion.Header>
            <Accordion.Body>
            <Button variant="outline-secondary"><Link to="https://basedeconocimientos.custhelp.com/app/answers/detail/a_id/10701/kw/servicio%20reducido">Flujo de servicio Reducido, haz click!</Link></Button>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Planilla</Accordion.Header>
            <Accordion.Body>
                <Table striped bordered hover size="xl">
                    <thead>
                        <tr>
                        <th>Planilla</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                                u:<br/>
                                Nº de cuenta:<br/>
                                Orden - Caso:<br/>
                                Detalle:<br/>
                                Mail:<br/>
                                Telefono de contacto:<br/>
                                Adjuntar capturas de resumen de cuenta y de la vista 360<br/>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header>Ejemplos</Accordion.Header>
            <Accordion.Body>
                <Table striped bordered hover size="sm">
                
                    <Carousel slide={false}>
                        <Carousel.Item>
                        <img src={fan} />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src={fan} />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={fan} />
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </Table>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </div>
    );
}

export default FanservicioReducido;
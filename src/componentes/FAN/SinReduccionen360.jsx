import 'bootstrap/dist/css/bootstrap.min.css';

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import ImagenPendiente from "../Media/Img/imagenPendiente.jpg"
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import reduccion360 from "../Media/Img/soloReduccion360.png"

function SinReduccionEn360() {
    return (
        <div className='cardFAN'>
    <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
            <br/>
        <div className='img-procedimientos'><Image src={reduccion360} fluid /></div>;
        <br/>
        <br/>
            <Accordion.Header >Sin reduccion en vista 360° pero "Reduccion" solamente en Codi</Accordion.Header>
                <Accordion.Body>
                Puede suceder en FAN que el cliente tuvo una reduccion de servicio activa y que ya fue dada de baja pero al ingresar a la asistencia tecnica, veamos los bullets en rojo o indicandonos de suspencion de servicio o reduccion de servicio.<br/>
                <br/>
                Si al verificar en resumen de cuenta, no vemos ninguna deuda o saldo pendiente (recuerda que aunque tenga una factura que aun no vence por haber tenido una suspencion activa debe pagar todo, incluida esa factura que no vencio aun) para que se le restablezca el servicio.
                <br/><br/>
                </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Flujo en Base de conocimiento</Accordion.Header>
            <Accordion.Body>
            <Button variant="outline-secondary"><Link to="https://basedeconocimientos.custhelp.com/app/answers/detail/a_id/10701/kw/servicio%20reducido">Flujo de servicio Reducido, haz click!</Link></Button>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Servicio reducido solo asistencia Tecnica CODI FAN</Accordion.Header>
            <Accordion.Body>
            <div className='img-procedimientos'><Image src={ImagenPendiente} fluid /></div>
                <Table striped bordered hover size="xl">
                    <thead>
                        En estos casos, veremos un bullet o todos en rojo y nos informaran de una suspension o reduccion de servicio, esto se debe a errores de gestiones dentro de la plataforma NPLAY, al momento de eliminar la suspension en la cuenta del cliente, no se genera un recalculo en los servicio del cliente por decirlo de alguna manera. <br/><br/>
                        Podemos realizar un recalculo a nivel del servicio afectado, pedirle al cl que desconecte los equipos y hacer un reset factory o pedirle al cl que lo haga en caso que codi no nos habilite.
                        Si en el caso que haciendo esto siga suspendido, tenemos que proceder a cargar la siguiente planilla como itracker:
                        <br/><br/>
                        <tr>
                        <th>Planilla - Sin reduccion en 360° pero "Reduccion" solamente en Codi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                                u:<br/>
                                Nº de cuenta:<br/>
                                Orden - Caso:<br/>
                                Direccion (localidad, partido, provincia):<br/>
                                detalle:<br/>
                                Mail:<br/>
                                Telefono de contacto:<br/>
                                Adjuntar capturas de resumen de cuenta y de la vista 360<br/>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
            <Accordion.Header>Ejemplos</Accordion.Header>
            <Accordion.Body>
                <Table striped bordered hover size="sm">
                
                <Image src={ImagenPendiente} fluid />;

                </Table>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </div>
    );
}

export default SinReduccionEn360;
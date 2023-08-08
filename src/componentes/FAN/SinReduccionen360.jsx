import 'bootstrap/dist/css/bootstrap.min.css';

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import ImagenPendiente from "../Media/Img/imagenPendiente.jpg"
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

function SinReduccionEn360() {
    return (
        <div className='cardFAN'>
    <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
            <br/>
        <div className='img-procedimientos'><Image src={ImagenPendiente} fluid /></div>;
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
            <Accordion.Header>Servicio reducido solo en FAN-CODI / Cliente HFC</Accordion.Header>
            <Accordion.Body>
            <div className='img-procedimientos'><Image src={ImagenPendiente} fluid /></div>
                <Table striped bordered hover size="xl">
                    <thead>
                        <tr>
                        <th>Cliente HFC</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        ---
                        
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="3">
            <Accordion.Header>Servicio reducido solo en FAN-CODI / Cliente FTTH</Accordion.Header>
            <Accordion.Body>
                <Table striped bordered hover size="xl">
                    <thead>
                        <tr>
                        <th>Cliente FTTH</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        ---
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
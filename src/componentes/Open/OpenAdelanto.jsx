import 'bootstrap/dist/css/bootstrap.min.css';

import Accordion from 'react-bootstrap/Accordion';
import AdelantoOpen from "../../componentes/Media/Img/adelantoOpen.png"
import AdelantoOpen2 from "../../componentes/Media/Img/error-zonas900.png"
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import CmHfc from "../Media/Img/cmHFC.png"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import DecoSerializable from "../Media/Img/DecosSerializable.png"
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import OntSerializable from "../Media/Img/OntSerializable.png"
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import fan from "../Media/Img/fan.png"

function OpenAdelanto() {
    return (
        <div className='cardFAN'>
    <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
        <br/>
        <div className='img-procedimientos'><Image src={AdelantoOpen} fluid /></div>
        <br/>        
            <Accordion.Header >I-TRACKER: Adelanto y aseguramiento de agenda</Accordion.Header>
                <Accordion.Body>
                Sucede en pedidos de instalacion o service tecnico que al momento de citar la orden no hay fechas proximas o errores en la aplicacion de agenda, por lo cual cargando este itracker solicitamos que se adelante y confirme un turno con el cliente.<br/>
                <br/>
                Esta gestión aplica únicamente cuando:<br/><br/>
                - La agenda no te da fechas o franjas horarias para cargar la cita.<br/>
                - La fecha que brinda la agenda es muy lejana y el cliente no la acepta.<br/>
                - La agenda da un error (por ejemplo: zona o base operativa no normalizada).<br/>
                - Si es zona peligrosa o si tiene comentarios de tecnicos que han ido o tenian la orden asignada y cancelaron la cita y notificaron zona peligrosa.<br/>
                - En caso de ser zona 900.
                <br/>
                <br/>
                Verificar<br/><br/>
                -Que domicilio y referencia de contacto para el tecnico esten bien.<br/>
                -Brindar ref de whatsapp para que clienta pueda consultar dudas sobre la cita.
                
                <br/>
                <br/>
                </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Flujo en Base de conocimiento</Accordion.Header>
            <Accordion.Body>
            <Button variant="outline-secondary"><Link to="https://basedeconocimientos.custhelp.com/app/answers/detail/a_id/8564/kw/agenda">Procedimiento Error agenda, haz click!</Link></Button>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Planilla - Itracker</Accordion.Header>
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
                        U:<br/>
                        Base Operativa/Nodo:<br/>
                        Localidad:<br/>
                        Ciudad:<br/>
                        N de orden:<br/>
                        Tipo de OT:<br/>
                        N de cliente: 56287372<br/>
                        Telefono:<br/>
                        Disponibilidad horaria:<br/>
                        Observaciones:
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
                <Image src={AdelantoOpen2} fluid />
                <tr>
                        <th>Zona 900</th>
                        </tr>


                </Table>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </div>
    );
}

export default OpenAdelanto;
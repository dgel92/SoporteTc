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
import TeDeLaImagen from "../Media/Img/imagenPendiente.jpg"
import fan from "../Media/Img/fan.png"
import masivo from "../Media/Img/posibleMasivo.png"
import masivo2 from "../Media/Img/posibleMasivo2.png"

function PosibleMasivo() {
    return (
        <div className='cardFAN'>
    <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
        <br/>
        <div className='img-procedimientos'><Image src={TeDeLaImagen} fluid /></div>
        <br/>
        <br/>
            <Accordion.Header >Posible Masivo</Accordion.Header>
                <Accordion.Body>
                Sucede cuando un cliente te llama que sigue sin servicio por un inconveniente en su zona y que ya todos sus vecinos tienen servicio y a el no se le ha restablecido. Lo veremos como un masivo que la fecha de resolucion ya vencio pero en OPEN sigue activo y en CODI no nos aparece la notificacion de masivo en la zona.
                <br/>
                <br/>
                Ingresar al masivo en OPEN y verificar los datos y registros del masivo y escalar la planilla a tu lider para que prosiga con eliminar el masivo.
                <br/>
                <br/>
                Una vez eliminado el masivo puedes seguir el flujo en codi sin inconvenientes y generar el service tecnico en caso de ser necesario.
                </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Flujo en Base de conocimiento</Accordion.Header>
            <Accordion.Body>
            <Button variant="outline-secondary"><Link to="https://basedeconocimientos.custhelp.com/app/answers/detail/a_id/4047/kw/masivo#gs=eyJndWlkZUlEIjoxNjM2LCJxdWVzdGlvbklEIjoxMiwicmVzcG9uc2VJRCI6MTksImd1aWRlU2Vzc2lvbiI6IkZxRXh3N2VxIiwic2Vzc2lvbklEIjoiWHFBWm03ZXEifQ..">Procedimiento Masivo OPEN</Link></Button>
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
                        S/N o CM del Equipo:<br/>
                        Nodo:<br/>
                        Región/Localidad:<br/>
                        IP:<br/>
                        DNI:<br/>
                        Numero de contacto del cliente:<br/>
                        Servicio afectado:<br/>
                        Inconveniente (descripción de la falla):<br/>
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
                <br/>
                <div className='img-procedimientos'><Image src={masivo2} fluid /></div>
                <br/>
                </Table>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </div>
    );
}

export default PosibleMasivo;
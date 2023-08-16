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

function PaseARedes(){
    return (
        <div className='cardFAN'>
    <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
        <br/>
        <Image src={TeDeLaImagen} fluid />;
        <br/>
        <br/>
            <Accordion.Header >OT Realizada con pase a red</Accordion.Header>
                <Accordion.Body>
                Estos reclamos ocurren cuando el tecnico domiciliario detecta una falla en la red, ante esta circunstancia el tc debe cerrar la orden de trabajo con una derivacion o pase a red, esto debemos verificarlo en la pestaña de daños a producto del servicio que reclama el cliente si existe. Verificar si existe un daño de red posterior al service tecnico que recibio el cliente y/o tambien verificar los datos externos de la orden de trabajo del tecnico.
                <br/>
                Si existe, se debe ingresar al daño y validar el estado del mismo, en base a esto pueden ocurrir 3 casos:<br/><br/> 
                -El pase a red no esta realizado.<br/> 
                -El pase de red esta realizado pero no atendido(gestionado) aun.<br/>
                -Pase a red realizado y ya fue resuelto.
                <br/><br/>
                En base a esto a continuacion exponemos las formas de proseguir.
                </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Flujo en Base de conocimiento</Accordion.Header>
            <Accordion.Body>
            <Button variant="outline-secondary"><Link to="https://basedeconocimientos.custhelp.com/app/answers/detail/a_id/4706">Procedimiento Consultas de service Red/edificios</Link></Button>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Planillas</Accordion.Header>
            <Accordion.Body>
                
                <Table striped bordered hover size="xl">
                    <thead>
                        <tr>
                        <th>OT A Cerrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                            - Número de orden técnica:<br/>
                            - Verificar si el servicio fue instalado (SI/NO):<br/>
                            - Fecha en la que se realizó:<br/>
                            - Motivo por el cual se pide cerrar:<br/>
                            - N° Serie:<br/>
                            </td>
                        </tr>
                    </tbody>
                    <br/>
                    <thead>
                        <tr>
                        <th>OT A Anular</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        - ¿Se intentó anular por ítem?(SI/NO):<br/>
                        - Detalle el error que figura al cancelar:<br/>
                        - Motivo por el cual pide anular:<br/>
                        - Nro de orden tecnica: <br/>
                            </td>
                        </tr>
                    </tbody>
                    <br/>
                    <thead>
                        <tr>
                        <th>Solicitud Pendiente</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        - Número de orden técnica:<br/>
                        - Servicio ya instalado? (Si/No): <br/>
                        - Fecha en que se realizo: <br/>
                        - Detalle el error que figura al activar / cancelar: <br/>
                        - Motivo por el cual se pide activar / cancelar:<br/>
                        - Cliente con servicio o no? (Si/ No): <br/>
                        - Nro de MAC / SN de los equipos instalados: <br/>
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
                <Image src={TeDeLaImagen} fluid />
                <tr>
                        <th></th>
                        </tr>


                </Table>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </div>
    );
}

export default PaseARedes
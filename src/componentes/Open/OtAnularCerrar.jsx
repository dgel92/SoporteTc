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

function OtAnularCerrar() {
    return (
        <div className='cardFAN'>
    <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
        <br/>
        <Image src={TeDeLaImagen} fluid />;
        <br/>
        <br/>
            <Accordion.Header >OT a Anular - Cerrar / Solicitud - orden pendiente</Accordion.Header>
                <Accordion.Body>
                Sirve para gestionar el cierre de una ot que se encuentra vencida (cumplido el plazo de 24hs hábiles desde que se realizó la orden) o solicitar la cancelación de una ot siendo que la misma se encuentre en un estado que no pueda ser anulada por un representante o líder.
                <br/>
                <br/>
                Podemos buscar los equipos en ORCOR y ver el estado de los mismos y corroborar el estado de la orden de servicio desde ORCAO, buscamos con la orden tecnica del producto, luego ingresamos a ORCAO y la buscamos para enviar un evento de actualizacion.
                <br/>
                <br/>
                Si esto no nos funciona, tenemos que escalar el reclamo a CBC para cerrar la ot pendiente o anularla (dependiendo del caso) y de la indagacion que has realizado con el cl.
                </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Flujo en Base de conocimiento</Accordion.Header>
            <Accordion.Body>
            <Button variant="outline-secondary"><Link to="https://basedeconocimientos.custhelp.com/app/answers/detail/a_id/4003#gs=eyJndWlkZUlEIjoxNDM1LCJxdWVzdGlvbklEIjo2LCJyZXNwb25zZUlEIjoxNSwiZ3VpZGVTZXNzaW9uIjoiZU1rKjdkOXEiLCJzZXNzaW9uSUQiOiJQNkUtNWQ5cSJ9">Procedimiento Ordenes pendientes</Link></Button>
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

export default OtAnularCerrar;
import 'bootstrap/dist/css/bootstrap.min.css';

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import ImagenPendiente from "../Media/Img/imagenPendiente.jpg"
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import cambioDomicilio from "../Media/Img/CambioDeDomicilio.png"

function CambioDomicilioErrorFan() {
    return (
        <div className='cardFAN'>
    <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
            <br/>
        <div className='img-procedimientos'><Image src={cambioDomicilio} fluid /></div>;
        <br/>
        <br/>
            <Accordion.Header >CAMBIO DE DOMICILIO ERROR FAN </Accordion.Header>
                <Accordion.Body>
                Existe un incidente en algunas localidades, donde la orden viaja con tecnologia de domicilio destino erronea, impidiendo la instalacion al momento de la visita del tecnico.<br/>
                Hasta que no se solucione, verifica que la localidad que indica el cliente esta en el listado que veras en el siguiente enlace.
                <br/>
                <br/>
                <button href="https://basedeconocimientos.custhelp.com/euf/assets/Nplay/TrasladoLocalidadesAfectadasFAN.htm">Listado de localidades</button>
                <br/>
                <br/>
                Si se encuentra afectado:<br/><br/>
                -Informale al cliente que se debe generar una nueva venta para asegurar la prefactivilidad y servicios disponibles en la zona (brinda 0800 y whatsapp para que generen nueva venta).
                -Ingresa al pedido desde relacionado, genera la cancelacion o baja del pedido, en caso que no cuentes con los permisos para cancelar el pedido deja un comentario en la orden informando el caso.
                <br/>
                <br/>
                Si no se encuentra afectado:<br/><br/>
                -Procede con el cambio de domicilio normalmente.
                <br/>
                <br/>
                </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Flujo en Base de conocimiento</Accordion.Header>
            <Accordion.Body>
            <Button variant="outline-secondary"><Link to="https://basedeconocimientos.custhelp.com/app/answers/detail/a_id/10889/kw/fan">Procedimiento Cambio de domicilio, haz click!</Link></Button>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Caso 1 - Cambio de domicilio en ejecucion - Aun no realizado.</Accordion.Header>
            <Accordion.Body>
            <div className='img-procedimientos'><Image src={ImagenPendiente} fluid /></div>
                <Table striped bordered hover size="xl">
                    <thead>
                        <tr>
                        <th>Caso 1 - Cambio de domicilio en ejecucion - aun no realizado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        - Verificar con el cliente los datos del domicilio y en el pedido de cambio de domicilio ver los datos cargados.<br/>
                        - En el pedido de cambio de domicilio hay un caso de venta o cambio de domicilio relacionado en el cual puedes ver la fecha de cita o su estado.<br/><br/>                         

                        - Si el cliente informa que los datos estan mal (los productos) o el domicilio esta mal, brindar 0800 y whatsapp para que se comunique con mudanzas.<br/>  
                        - En el caso de que no tenga cita programada agendar y ante cualquier error seguir flujo de error de agenda.
                        
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="3">
            <Accordion.Header>Caso 2 - Cambio de domicilio en ejecucion - Fue el tecnico y informo domicilio incorrecto.</Accordion.Header>
            <Accordion.Body>
                <Table striped bordered hover size="xl">
                    <thead>
                        <tr>
                        <th>Fue el tecnico y informo domicilio incorrecto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        Verificar el estado de la orden en casos, deberia haber una reserva de cita. Haz click sobre ella y veras la OT del caso y su cierre informado por el tecnico.<br/>
                        Si esta cerrada o anulada por motivo domicilio incorrecto. Al igual que el caso anterior informarle al cliente que se comunique con mudanzas o venta.

                        
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="4">
            <Accordion.Header>Caso 3 - Cambio de domicilio realizado pero no aparece en vista 360 y sigue en espera de ejecucion.</Accordion.Header>
            <Accordion.Body>
                <Table striped bordered hover size="xl">
                    <thead>
                        <tr>
                        <th>No aparece en vista 360 y sigue en espera de ejecucion.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        <br/>
                        El cl te informa que el tc ya realizo la instalacion de los equipos pero que el tc no pudo cerrar la orden o la cerro y le dijo al cl que en el transcurso de una hora iba a empezar a funcionar y no fue asi<br/>                     
                            <br/>         
                        Verifica el pedido y el caso relacionado y su estado en la reserva de la cita.<br/><br/>

                        Si la orden sigue en espera de ejecucion o quedo derivada, se debe generar un itracker solicitando el cierre de la orden para que impacte el cambio en FAN.<br/>
                        Planilla:
                        <br/><br/>
                                S/N de todos los equipos (deco - ont - cm):<br/>                              
                                u:<br/>
                                Nº de cuenta:<br/>
                                Orden - Caso:<br/>
                                OT:<br/>
                                Direccion (localidad, direccion, numeracion):<br/>
                                Detalle:<br/>
                                Mail:<br/>
                                Telefono de contacto:<br/>
                                Adjuntar captura de caso en espera de ejecucion<br/>
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

export default CambioDomicilioErrorFan;
import 'bootstrap/dist/css/bootstrap.min.css';

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import CmHfc from "../Media/Img/cmHFC.png"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import DecoSerializable from "../Media/Img/DecosSerializable.png"
import Image from 'react-bootstrap/Image';
import ImagenPendiente from "../Media/Img/imagenPendiente.jpg"
import { Link } from "react-router-dom";
import OntSerializable from "../Media/Img/OntSerializable.png"
import PendienteDeInstalacion from "../../componentes/Media/Img/pendienteDeInstalacion.png"
import PendienteDeInstalacion2 from "../../componentes/Media/Img/pendienteDeInstalacion2.png"
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

function CambioDomicilioErrorFan() {
    return (
        <div className='cardFAN'>
    <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
        <div className='img-procedimientos'><Image src={ImagenPendiente} fluid /></div>;
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
            <Image src={DecoSerializable} fluid />
                <Table striped bordered hover size="xl">
                    <thead>
                        <tr>
                        <th>Planilla Decodificadores</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        <br/>
                        Para el caso de los decodificadores (Ya sea Flow / HD / Digital / Arion) el dato que se necesita del equipo es el Número de Serie (SN).<br/>                     
                            <br/>     
                            <br/>     
                        El número de serie del decodificador está compuesto de la siguiente manera:<br/><br/>

                        -Flow Deco Android modelo HP40: HP40xxxxxxxxx<br/>
                        -Flow Deco Android modelo HP44: HP44xxxxxxxxx<br/>
                        -Flow Full IP Sagemcom: 31xxxxxxxxxxx<br/>
                        -Flow Box (DX4220/DCX4400): Mxxxxxxxxx<br/>

                        -Deco Clasico HD ISDBT (Comivision CV2514) CDVxxxxxxxx<br/>
                        -Deco HD Motorola (DCX4220/DCX3210): Mxxxxxxxxx<br/>
                        -Deco HD Pace: PAERxxxxxxx / PACxxxxx<br/>
                        -Deco HD Pace DVR: PAATxxxxxxxxx<br/>
                        -Deco Digital DCT/DTA  Mxxxxxxxxx<br/>

                        -Deco Arion: <br/>
                        -MCL-xxxx-xxxxx<br/>
                        -CVN-xxxx-xxxxx<br/>

                        -Deco Kaon: 2056xxxxxxx<br/><br/>
 
                        En el caso de solicitarle al cliente el número de serie en la etiqueta del equipo, este puede aparecer de la siguiente forma:
                        <br/><br/>
                        - S/N<br/>
                        - SN<br/>
                        - SN HOST:<br/>
                        - HOST SN:<br/><br/>
                                
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
                
                <Image src={PendienteDeInstalacion} fluid />;

                </Table>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </div>
    );
}

export default CambioDomicilioErrorFan;
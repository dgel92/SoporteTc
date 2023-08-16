import 'bootstrap/dist/css/bootstrap.min.css';

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import CmHfc from "../Media/Img/cmHFC.png"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import DecoSerializable from "../Media/Img/DecosSerializable.png"
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import OntSerializable from "../Media/Img/OntSerializable.png"
import PendienteDeInstalacion from "../../componentes/Media/Img/pendienteDeInstalacion.png"
import PendienteDeInstalacion2 from "../../componentes/Media/Img/pendienteDeInstalacion2.png"
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import imagenPendiente from "../Media/Img/imagenPendiente.jpg"
import reduccionOpen1 from "../Media/Img/reduccionOPEN1.png"
import reduccionOpen2 from "../Media/Img/reduccionOPEN2.png"
import reduccionOpen3 from "../Media/Img/reduccionOPEN3.png"

function ReduccionOpen() {
    return (
        <div className='cardFAN'>
    <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
            <br/>
        <div className='img-procedimientos'><Image src={imagenPendiente} fluid /></div>;
        <br/>
        <br/>
            <Accordion.Header >Reduccion en OPEN </Accordion.Header>
                <Accordion.Body>
                Este inconveniente ocurre cuando el cliente tuvo una deuda y realizo el pago o genero una refinanciacion pero el servicio sigue suspendido o con el pup pop de servicio reducido en OPEN.<br/>
                Puede ser que en CODI, los bullet salgan con el servicio reducido o no, como tambien en OPEN yendo a componentes del producto, podemos ver activo aun el servicio reducido en el servicio del cliente.
                </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Flujo en Base de conocimiento</Accordion.Header>
            <Accordion.Body>
            <Button variant="outline-secondary"><Link to="https://basedeconocimientos.custhelp.com/app/answers/detail/a_id/4231/kw/reducido">Procedimiento Servicio Suspendido - Reducido, haz click!</Link></Button>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Planilla - Contrato reducido sin deuda por pago/ajuste</Accordion.Header>
            <Accordion.Body>
                <Table striped bordered hover size="xl">
                    <thead>
                        <tr>
                        <th>Contrato reducido sin deuda por pago/ajuste</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        Si el cliente tiene un contrato reducido sin deuda por pago/ajuste, no será necesario que cargues el manifiesto de pago.Escalá estos casos al Callback completando correctamente la planilla con los siguientes datos:
                        <br/>      
                            - ID (DNI del cliente):<br/>
                            - Contrato:<br/>
                            - Tel:<br/>
                            - Motivo: ACTIVAR SERVICIO-REDUCIDO SIN DEUDA-EXCLUIR DEL CIRCUITO DE REDUCCIÓN<br/>
                            - Componente afectado: (Deco, Cablemodem, Flow App, etc)<br/>
                            - Pop Up en Open: SI/NO<br/>                  
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="3">
            <Accordion.Header>Planilla - Contrato reducido CON deuda, pero con ajuste pendiente.</Accordion.Header>
            <Accordion.Body>
                    <Image src={imagenPendiente} fluid />
                <Table striped bordered hover size="xl">
                    <thead>
                        <tr>
                        <th>Contrato reducido CON deuda, pero con ajuste pendiente.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        En los casos de reducción con ajuste pendiente por:<br/><br/>
                            -Financiación no aplicada<br/>
                            -Ajuste Legales<br/>
                            -Ajuste Reclamo Facturación<br/>
                            -Pago no impactado<br/><br/>

                            Se deberá:<br/><br/>
                            -Cargar Manifiesto de Pago para restauración a nivel contrato .<br/>
                            -Enviar mail a la casilla Gestión de Mora para exclusión de acciones de morosidad.<br/>
                            <br/>
                            En el margen inferior derecho (PROCESOS DE CONTRATOS) se encuentran una serie de acciones. Seleccionar la opción REGISTRO DE PLAZO DE SUSPENSIÓN                                             
                            <br/><br/>
                            La leyenda “El proceso terminó con éxito” indica que se restablecerá el servicio en 60 minutos.

                            En Open, el pop up de servicio reducido demorará poco más de una hora en desaparecer.

                            En el caso de ser contrato PDX (Pendiente de Desconexión), la activación es inmediata.
                            </td>
                        </tr>
                        <Image src={reduccionOpen1} fluid /><br/><br/>
                        <Image src={reduccionOpen2} fluid />
                    </tbody>
                </Table>
            </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="4">
            <Accordion.Header>Planilla - Servicio reducido en OPEN sin Deuda </Accordion.Header>
            <Accordion.Body>
            <Image src={imagenPendiente} fluid />
                <Table striped bordered hover size="xl">
                    <thead>
                        <tr>
                        <th>Servicio reducido en OPEN sin Deuda</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        <br/>
                        Para clientes con servicio reducido sin deuda (verificar en OPEN que el Cliente no tenga deuda) y verificar que no este en portal cautivo:<br/><br/>
                        Si no tiene deuda o indicios de una, se deberá:<br/><br/>
                        -Enviar mail a la casilla Gestión de Moras solo para exclusión de acciones de morosidad.<br/>
                        -Cargar ITracker para la restauración del servicio completando la siguiente planilla:<br/><br/>

                        -Número de Cliente:<br/>
                        -DNI / CUIL / CUIT:<br/>
                        -Contrato:<br/>
                        -Telefono Operador:<br/>
                        -Detalle el incidente  gestión/ consulta:<br/>
                        -CAPTURA:<br/>                        
                            </td>
                        </tr>
                    </tbody>
                    <Image src={reduccionOpen3} fluid />
                </Table>
            </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="5">
            <Accordion.Header>Ejemplos</Accordion.Header>
            <Accordion.Body>
                <Table striped bordered hover size="sm">
                
                <Image src={imagenPendiente} fluid />;

                </Table>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </div>
    );
}

export default ReduccionOpen;
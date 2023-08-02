import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import fan from "../Media/Img/fan.png"
import CmHfc from "../Media/Img/cmHFC.png"
import OntSerializable from "../Media/Img/OntSerializable.png"
import DecoSerializable from "../Media/Img/DecosSerializable.png"

function FANEsperaDeEjecucion() {
    return (
        <div className='cardFAN'>
    <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
            <Image src={Image} fluid />
            <Accordion.Header >Instalado o service con cambio de modem o decos con orden en "Espera de Ejecucion”</Accordion.Header>
                <Accordion.Body>
                Sucede en instalaciones o service que al termino de cerrar la orden o hay una contingencia activa en las herramientas del tecnico, por omision no se cerro la orden o quedaron mal serializados (mal cargado MAC o serial number) de los equipos nuevos que quedaron en el domicilio del cliente.
                <br/>
                <br/>
                Esta gestión aplica únicamente cuando:<br/><br/>
                - No coincide la MAC del CM / SN ONT instalado en el domicilio del cliente con el que figura en OPEN/FAN/CODI.<br/>
                - No coincide SN del Decodificador instalado en el domicilio del cliente con el SN registrado en OPEN/FAN/CODI.<br/>
                - Equipo dado de baja por error, se necesita activar en CRM.
                <br/>
                <br/>
                Verificar<br/>
                Que el equipo no se encuentre instalado en otro domicilio. De ser así debemos indicarle que el equipo solo se puede utilizar en el domicilio que figura registrado en sistema. En caso que nos informe que se mudó se deberá gestionar un TRASLADO DE PRODUCTO.<br/>    La MAC / SN ONT / SN Deco del equipo a reclamar, sea la correcta (ver opciones a continuación).
                <br/>
                <br/>
                </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Flujo en Base de conocimiento</Accordion.Header>
            <Accordion.Body>
            <Button variant="outline-secondary"><Link to="https://basedeconocimientos.custhelp.com/app/answers/detail/a_id/3934/kw/espera%20de%20ejecucion">Procedimiento Serializables, haz click!</Link></Button>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Planilla CM HFC</Accordion.Header>
            <Accordion.Body>
                <Col xs={6} md={4}>
                    <Image src={CmHfc} roundedCircle />
                </Col>
                <Table striped bordered hover size="xl">
                    <thead>
                        <tr>
                        <th>Planilla CM</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        La MAC del CM está compuesta por 12 dígitos y es Hexadecimal (1 al 9 y A al F)<br/>
                        NO confundir la MAC de un equipo con el número de serie. <br/><br/>                         
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


        <Accordion.Item eventKey="3">
            <Accordion.Header>Planilla ONT</Accordion.Header>
            <Accordion.Body>
                    <Image src={OntSerializable} fluid />
                <Table striped bordered hover size="xl">
                    <thead>
                        <tr>
                        <th>Planilla ONT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        Para el caso del servicio de FTTH, es necesario solicitarle al cliente el SN de la ONT (NO la MAC).<br/>

                        El SN de las ONT actuales puede estar compuesto de la siguiente manera:<br/><br/>

                        - ALCLBxxxxxxxxx<br/>
                        - 54454xxxxxxxxxx<br/>
                        - E0CC7xxxxxxxxx<br/>
                        - 4857xxxxxxxxxxx<br/>
                        - 04A22xxxxxxxxx<br/><br/>
                    
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


        <Accordion.Item eventKey="4">
            <Accordion.Header>Planilla Decodificadores</Accordion.Header>
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

export default FANEsperaDeEjecucion;
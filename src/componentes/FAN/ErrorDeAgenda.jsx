import 'bootstrap/dist/css/bootstrap.min.css';

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import CmHfc from "../Media/Img/cmHFC.png"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import DecoSerializable from "../Media/Img/DecosSerializable.png"
import ErrorAgenda from "../Media/Img/errorAgendaSinCasoAparente.png"
import ErrorAgenda1 from "../Media/Img/caso1-erroragenda.png"
import ErrorAgenda2 from "../Media/Img/caso1-erroragenda2.png"
import ErrorAgendacaso2 from "../Media/Img/caso2-erroragenda.png"
import ErrorAgendacaso3 from "../Media/Img/caso3-erroragenda.png"
import ErrorAgendacaso4 from "../Media/Img/caso4-erroragenda.png"
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import OntSerializable from "../Media/Img/OntSerializable.png"
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import fan from "../Media/Img/fan.png"

function FANErrorDeAgenda() {
    return (
        <div className='cardFAN'>
    <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
            <br/>
            <div className='img-procedimientos'><Image src={ErrorAgenda} fluid /></div>
            <br/>
            <Accordion.Header >Error de Agenda sin caso aparente o relacionado</Accordion.Header>
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
            <Button variant="outline-secondary"><Link to="https://basedeconocimientos.custhelp.com/app/answers/detail/a_id/10301/kw/fan%20error%20agenda#gs=eyJndWlkZUlEIjo0NTc0LCJxdWVzdGlvbklEIjoxLCJyZXNwb25zZUlEIjoyMSwiZ3VpZGVTZXNzaW9uIjoiYXFVZTVPZHEiLCJzZXNzaW9uSUQiOiJGSVFiNU9kcSJ9">Procedimiento Error de Agendas en FAN, haz click!</Link></Button>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Caso - 1 No hay agenda disponible</Accordion.Header>
            <Accordion.Body>
                <Table striped bordered hover size="xl">
                    <thead>
                        <tr>
                        <th>No hay agenda disponible</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                            
                        En casos de venta - cambio de domicilio - asistencia tecnica va a quedar como pendiente de contacto<br/><br/>
                        - Verifica en relacionado sobre el caso y vas a visualizar el caso derivado automaticamente y quedara en estado de "derivada" y callback se contactara con el cliente.
                        <br/>
                        - En el caso a la izquierda veras los detalles del caso y el id del itracker que se generara automaticamente y este numero de derivacion se lo puedes brindar al cliente.
                        <br/>
                        <br/>
                        - <b>IMPORTANTE</b>, si ves que no se genero el caso relacionado debes tabular de la siguiente forma:<br/>
                        * Error en gestiones<br/>
                        * NPLAY Fija<br/>
                        * Selecciona la opcion Gestion Citas<br/><br/>
                        - Genera un itracker de aseguramiento de citas.<br/>
                            </td>
                        </tr>
                    </tbody>
                    <br/>
                    <div className='img-procedimientos'><Image src={ErrorAgenda1} fluid /></div>
                    <br/><tr/>
                    <div className='img-procedimientos'><Image src={ErrorAgenda2} fluid /></div>
                </Table>
            </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="3">
            <Accordion.Header>Caso - 2 Error de agenda por Time out</Accordion.Header>
            <Accordion.Body>
                <Table striped bordered hover size="xl">
                    <thead>
                        <tr>
                        <th>Error de agenda por Time out</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        En este caso aunque veas que te quedan segundos en la programacion de la cita, recuerda que FAN necesita guardar y enviar los datos y a veces se demora y quedas fuera del tiempo que brinda la agenda.
                        <br/>
                        Debes buscar el caso generado por la asistencia tecnica que estara pendiente de contacto, boton crear cita y intenta agendar la orden tecnica.<br/><br/>

                        Si te sigue dando error genera un itracker con la siguiente ruta: <br/>
                        - Fan / Salesforce<br/>
                        - Seleccione Una Opcion: Error En Gestiones<br/>
                        - Seleccione Una Opcion: Nplay Fija<br/>
                        - Seleccione Una Opción: Gestion De Citas.
                            </td>
                        </tr>
                    </tbody>
                    <br/>
                    <div className='img-procedimientos'><Image src={ErrorAgendacaso3} fluid /></div>
                </Table>
            </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="4">
            <Accordion.Header>Caso - 3 No se guardaron los datos necesarios para continuar con la gestion</Accordion.Header>
            <Accordion.Body>
                <Table striped bordered hover size="xl">
                    <thead>
                        <tr>
                        <th>No se guardaron los datos necesarios para continuar con la gestion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        También deberá ser reportado como incidente (Itracker),  cuando no se genere el caso hijo de “Sin agenda disponible”.<br/><br/>

                        Si te sigue dando error genera un itracker con la siguiente ruta: <br/>
                        - Fan / Salesforce<br/>
                        - Seleccione Una Opcion: Error En Gestiones<br/>
                        - Seleccione Una Opcion: Nplay Fija<br/>
                        - Seleccione Una Opción: Gestion De Citas.<br/><br/>

                        <b>IMPORTANTE</b>: en los caso de venta, continuar con el proceso hasta confirmar el pedido.
                            </td>
                        </tr>
                    </tbody>
                    <div className='img-procedimientos'><Image src={ErrorAgendacaso2} fluid /></div>
                </Table>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
            <Accordion.Header>Caso - 4 Ha ocurrido un error al consultar la agenda</Accordion.Header>
            <Accordion.Body>
                <Table striped bordered hover size="xl">
                    <thead>
                        <tr>
                        <th>Ha ocurrido un error al consultar la agenda, porfavor reintenta desde Crear Cita</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        Ante este error, ingresar al Caso Padre e ir al botón de Crear Cita para llevar a cabo la agenda.<br/><br/>

                        Si te sigue dando error genera un itracker con la siguiente ruta: <br/>
                        - Fan / Salesforce<br/>
                        - Seleccione Una Opcion: Error En Gestiones<br/>
                        - Seleccione Una Opcion: Nplay Fija<br/>
                        - Seleccione Una Opción: Gestion De Citas.<br/><br/>
                            </td>
                        </tr>
                    </tbody>
                    <div className='img-procedimientos'><Image src={ErrorAgendacaso4} fluid /></div>
                </Table>
            </Accordion.Body>
            </Accordion.Item>
        

            <Accordion.Item eventKey="6">
            <Accordion.Header>Planillas</Accordion.Header>
            <Accordion.Body>
                <Table striped bordered hover size="xl">
                    <thead>
                        <tr>
                        <th>Planilla - Error de agenda sin caso relacionado y Itracker de agenda FAN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        U:<br/>
                        N° cuenta:<br/>
                        Caso:<br/>
                        OT:<br/>
                        Direccion, loc, prov, partido:<br/>
                        Detalle:<br/>
                        Mail:<br/>
                        Tel:<br/>
                        Captura del error
                            </td>
                        </tr>
                    </tbody>                    
                </Table>
            </Accordion.Body>
            <br/><br/>
            </Accordion.Item>

    </Accordion>
    </div>
    );
}

export default FANErrorDeAgenda;
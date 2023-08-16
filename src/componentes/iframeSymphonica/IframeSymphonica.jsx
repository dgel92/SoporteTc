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
import fan from "../Media/Img/fan.png"

function IframeSymphonica() {
    return (
        <div className='iframe-container'>
            <h1>Consulta Facturacion</h1>
                <div className='symphonica-container'>
                    <iframe src="https://pagos.telecom.com.ar/pages/init" width="1800vh" height="1200vh"></iframe>
                </div>
        </div>
    );
}

export default IframeSymphonica;
import IframeSymphonica from "../iframeSymphonica/IframeSymphonica";
import LinksUtiles from "../LinksUtiles/LinksUtiles";
import MediosDeContactos from "../MediosDeContactos/MediosDeContactos";

function Portada(){
    return(
        <div>
            <LinksUtiles/>
            <MediosDeContactos/>
            <IframeSymphonica/>
        </div>
    )
}
    
export default Portada;
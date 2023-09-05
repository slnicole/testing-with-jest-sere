import { Contacto } from "./contactos";
import { contactos } from "./contactos";
const findByEmail = (porcionDeEmail : string)  =>{
    if (porcionDeEmail === "") {
        return contactos;
    }
    return contactos.filter(contacto => contacto.email.includes(porcionDeEmail));
}
export {
    findByEmail
}
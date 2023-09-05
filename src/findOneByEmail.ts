import { Contacto } from "./contactos";
import { contactos } from "./contactos";
const findOneByEmail = (email:string) =>{
    if (email === "") {
        return contactos[0];
    }
    const encontrados = contactos.filter(contacto => contacto.email.includes(email));
    return encontrados[0];
}
export {
    findOneByEmail
}
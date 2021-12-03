import { Role } from "./Role";

export class Administrateur{
    id: any;
    nom: any;
    prenom: any;
    email: any;
    login: any;
    password: any;
    telephone: any;
    etat: any;
    role: Role | undefined
}
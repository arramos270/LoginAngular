export class AuthRegisterRequest {
    username: string;
    email: string;
    password: string;
    code: string;

    constructor(){
        this.username='';
        this.email='';
        this.password='';
        this.code='UDEMYANDROID'; //Tomamos la del API de Miguel
    }
}
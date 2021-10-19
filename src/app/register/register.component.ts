import { Component, OnInit } from '@angular/core';
import { AuthRegisterRequest } from '../models/dto/auth.dto';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(username: string, email: string, password: string){
    let datosAEnviar = new AuthRegisterRequest();
    datosAEnviar.username=username;
    datosAEnviar.email=email;
    datosAEnviar.password=password;

    this.authService.register(datosAEnviar).subscribe(res => { //Le llamamos res pero puede llamarse como sea
      alert(`Te has logeado y tu token es ${res.token}`)
    })
  }

}

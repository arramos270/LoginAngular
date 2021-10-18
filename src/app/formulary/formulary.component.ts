import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.css']
})
export class FormularyComponent implements OnInit {
  email='';
  password='';

  constructor() { }

  ngOnInit(): void {
  }

  getFormData(nuevoEmail: String, nuevaPass: String) {
      console.log(nuevoEmail, nuevaPass);
    };

}

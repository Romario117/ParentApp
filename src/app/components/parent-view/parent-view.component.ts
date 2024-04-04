import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-view',
  templateUrl: './parent-view.component.html',
  styleUrls: ['./parent-view.component.scss']
})
export class ParentViewComponent {
  texto:string ="";
  arrayCiudades:any = [
    { id: 1, nombre: 'Ciudad A', ciudad: 'Ciudad A' },
    { id: 2, nombre: 'Ciudad B', ciudad: 'Ciudad B' },
    { id: 3, nombre: 'Ciudad C', ciudad: 'Ciudad C' },
    { id: 4, nombre: 'Ciudad D', ciudad: 'Ciudad D' }
  ];
  
  // Array con objetos de id, nombre y país
  arrayPaises:any = [
    { id: 1, nombre: 'País A', pais: 'País A' },
    { id: 2, nombre: 'País B', pais: 'País B' },
    { id: 3, nombre: 'País C', pais: 'País C' },
    { id: 4, nombre: 'País D', pais: 'País D' }
  ];

  enviarDato = () =>{

      this.arrayPaises.push({ id: this.arrayPaises.length + 1, nombre: this.texto, pais: this.texto });
    
  }
}

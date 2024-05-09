import { Component, inject } from '@angular/core';
import { AutosService } from '../../servicios/autos.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla-autos',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './tabla-autos.component.html',
  styleUrl: './tabla-autos.component.css'
})
export class TablaAutosComponent {
  servicio = inject(AutosService)

  carros : any;
  marca ="";

  ngOnInit(){
    this.servicio.getPersonal().subscribe(p=>(
      this.carros = p
    )

    )

  }

  
  visualizar: any
  ver( id: any){
    this.visualizar = id
  }
 busqueda:any

}



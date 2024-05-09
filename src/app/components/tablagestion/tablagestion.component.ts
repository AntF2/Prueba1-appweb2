import { Component, inject } from '@angular/core';
import { AutosService } from '../../servicios/autos.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tablagestion',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './tablagestion.component.html',
  styleUrl: './tablagestion.component.css'
})
export class TablagestionComponent {
  servicio = inject(AutosService)

  carros : any;
  marca ="";
  placa ="";

  ngOnInit(){
    this.servicio.getPersonal().subscribe(p=>(
      this.carros = p
    )

    )

  }

  
  eliminar(id:any){
    this.servicio.deleteCarroID(id).subscribe()
    window.location.reload()
    
  }
  visualizar: any
  ver( id: any){
    this.visualizar = id
  }
 busqueda:any
}

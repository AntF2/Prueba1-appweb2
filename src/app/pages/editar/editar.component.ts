import { Component, inject } from '@angular/core';
import { AutosService } from '../../servicios/autos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  id:any
  marca:any
  precio:any
  color:any
  placa_id:any
  anio:any
  imagen:any
personal:any

servicio = inject(AutosService)
route = inject(Router)
ruta = inject(ActivatedRoute)

  editar(datos:any){
    this.servicio.putNosotros(datos.value).subscribe()
    this.route.navigateByUrl("gestion")
  }
  ngOnInit(){
    this.ruta.params.subscribe( p =>{
     this.id= p['idCarros']
 
     this.servicio.getPersonalUnico(this.id).subscribe( e =>{
       this.personal= e
     })
 
 
    })
   }
}

import { Component, inject } from '@angular/core';
import { AutosService } from '../../servicios/autos.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-autos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './detalles-autos.component.html',
  styleUrl: './detalles-autos.component.css'
})
export class DetallesAutosComponent {
  servicios = inject(AutosService)
  ruta = inject(ActivatedRoute)
  carros : any;
  

  ngOnInit(){
    this.ruta.params.subscribe(id=>{
      this.servicios.getPersonalUnico(id['idCarros']).subscribe(a=>{
        this.carros = a
      })
    })
}

}

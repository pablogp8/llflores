import { Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
import { Player } from '../../../shared/models/player.model';
import { CommonModule } from '@angular/common';
import { EquipoService } from '../../../shared/service/equipo.service';
import { GeneralDataService } from '../../../shared/service/generalData.service';

@Component({
  selector: 'app-team-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.css'
})
export class TeamDetailComponent {
  isCollapsed = true;
  @Input() bdid?:number;
  jugadores: Player[] = [];
  private equipoService = inject(EquipoService);
  private equipoLocalService = inject(GeneralDataService);
  nombreEqp = "";
  
  ngOnInit() {
    console.log('aca inicia');
    console.log(this.bdid);
    console.log('hola a todos');
    if (this.bdid){
      this.cargaJugadores2(this.bdid);
    }
  }

  cargaJugadores(bdid: number){    
    this.jugadores = [];
    this.equipoService.getListaJugadores(bdid).subscribe({
      next: (data)=> {
        console.log(data);
        this.jugadores = data;
      }, 
      error: (err) => {
        console.error(err);
      }
      
    })
  }

  cargaJugadores2(bdid: number){
    this.jugadores = [];
    this.nombreEqp =  "";
    this.equipoLocalService.getJugadores(bdid).subscribe({
      next: (data)=> {
        console.log(data);
        const tmpEqp= data.find(item=> item.bdid === Number(bdid));
        if (tmpEqp !== undefined){
          this.nombreEqp = tmpEqp.nombre;
          this.jugadores = tmpEqp.jugadores;
          console.log(tmpEqp.jugadores);
        }
      }, 
      error: (err) => {
        console.error(err);
      }
      
    })
  }

  toggleCollapse() {
    console.log('se hizo');
    this.isCollapsed = !this.isCollapsed;
  }
}

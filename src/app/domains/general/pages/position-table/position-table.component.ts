import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Team } from '../../../shared/models/team.model';
import { EstadisticaService } from '../../../shared/service/estadistica.service';
import { GeneralDataService } from '../../../shared/service/generalData.service';
@Component({
  selector: 'app-position-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './position-table.component.html',
  styleUrl: './position-table.component.css'
})
export class PositionTableComponent {
  private estadisticaService = inject(EstadisticaService);
  private tablaGeneral = inject(GeneralDataService);
  equipos: Team[] = [
    
  ]

  ngOnInit(){
    this.getTabla2();
  }

  getTabla(){
    this.equipos = [];
    console.log('ptr');
    this.estadisticaService.getTablaPosiciones().subscribe({
      next: (data) =>{
        this.equipos = data;
      },
      error: (err) =>{
        console.error(err);
      }
    })
  }

  getTabla2(){
    this.equipos = [];
    console.log('ptr');
    this.tablaGeneral.getTabla().subscribe({
      next: (data) =>{
        this.equipos = data;
      },
      error: (err) =>{
        console.error(err);
      }
    })
  }
}

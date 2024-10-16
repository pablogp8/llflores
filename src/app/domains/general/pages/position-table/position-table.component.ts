import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Team } from '../../../shared/models/team.model';
import { EstadisticaService } from '../../../shared/service/estadistica.service';

@Component({
  selector: 'app-position-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './position-table.component.html',
  styleUrl: './position-table.component.css'
})
export class PositionTableComponent {
  private estadisticaService = inject(EstadisticaService);
  equipos: Team[] = [
    
  ]

  ngOnInit(){
    this.getTabla();
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
}

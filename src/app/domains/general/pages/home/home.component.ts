import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Team } from '../../../shared/models/team.model';
import { RouterLinkWithHref } from '@angular/router';
import { EquipoService } from '../../../shared/service/equipo.service';
import { GeneralDataService } from '../../../shared/service/generalData.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private equipoService = inject(EquipoService);
  private equipoService2= inject(GeneralDataService);

  equipos: Team[] = [
    {
      bdid: '1',
      nombre: '3K',
      image: ''
    },{
      bdid: '2',
      nombre: 'ABT',
      image: ''
    },{
      bdid: '3',
      nombre: 'ASTROS',
      image: ''
    },{
      bdid: '4',
      nombre: 'BULLS',
      image: ''
    },{
      bdid: '5',
      nombre: 'EMUA',
      image: ''
    },{
      bdid: '6',
      nombre: 'HAWKS',
      image: ''
    },{
      bdid: '7',
      nombre: 'INDIOS',
      image: ''
    },{
      bdid: '8',
      nombre: 'MAXI TECPÁN',
      image: ''
    },{
      bdid: '9',
      nombre: 'TALENTO DE BARRIO',
      image: ''
    },{
      bdid: '10',
      nombre: 'TALENTO JR',
      image: ''
    },{
      bdid: '11',
      nombre: 'THUNDER',
      image: ''
    },{
      bdid: '12',
      nombre: 'VAGOS',
      image: ''
    },{
      bdid: '13',
      nombre: 'WOLFS',
      image: ''
    }
  ]

  ngOnInit(){
    this.getEquipos();
  }

  getMasculino(){
    this.equipos = [];  
    console.log('ptr');
    this.equipoService.getListaEquipos('masculino').subscribe({
      next: (data) =>{
        console.log(data);
        this.equipos = data;
      },
      error: (err) =>{
        console.error(err);
      }
    })
  }

  getEquipos(){
    this.equipos =  [];
    console.log('ptr');
    this.equipoService2.getEquiposLocal().subscribe({
      next: (data) =>{
        console.log(data);
        this.equipos= data;
      },
      error: (err) =>{
        console.error(err);
      }
    });
  }
}

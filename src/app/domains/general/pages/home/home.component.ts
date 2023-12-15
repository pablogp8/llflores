import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Team } from '../../../shared/models/team.model';
import { RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  equipos: Team[] = [
    {
      id: '1',
      name: '3K',
      image: ''
    },{
      id: '2',
      name: 'ABT',
      image: ''
    },{
      id: '3',
      name: 'ASTROS',
      image: ''
    },{
      id: '4',
      name: 'BULLS',
      image: ''
    },{
      id: '5',
      name: 'EMUA',
      image: ''
    },{
      id: '6',
      name: 'HAWKS',
      image: ''
    },{
      id: '7',
      name: 'INDIOS',
      image: ''
    },{
      id: '8',
      name: 'MAXI TECPÁN',
      image: ''
    },{
      id: '9',
      name: 'TALENTO DE BARRIO',
      image: ''
    },{
      id: '10',
      name: 'TALENTO JR',
      image: ''
    },{
      id: '11',
      name: 'THUNDER',
      image: ''
    },{
      id: '12',
      name: 'VAGOS',
      image: ''
    },{
      id: '13',
      name: 'WOLFS',
      image: ''
    }
  ]
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Team } from '../../../shared/models/team.model';

@Component({
  selector: 'app-position-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './position-table.component.html',
  styleUrl: './position-table.component.css'
})
export class PositionTableComponent {
  equipos: Team[] = [
    {
      "id": "1",
      "name": "ABT",
      "image": "",
      "games": 5,
      "wins": 5,
      "losses": 0,
      "lossesdef": 0,
      "points": 10,
      "pointsf": 470,
      "pointsc": 147,
      "difference": 323
    },
    {
      "id": "2",
      "name": "MaxiTecpan",
      "image": "",
      "games": 5,
      "wins": 4,
      "losses": 1,
      "lossesdef": 0,
      "points": 9,
      "pointsf": 344,
      "pointsc": 204,
      "difference": 140
    },
    {
      "id": "3",
      "name": "Bulls",
      "image": "",
      "games": 5,
      "wins": 4,
      "losses": 1,
      "lossesdef": 0,
      "points": 9,
      "pointsf": 246,
      "pointsc": 199,
      "difference": 47
    },
    {
      "id": "4",
      "name": "Talento de Barrio",
      "image": "",
      "games": 4,
      "wins": 4,
      "losses": 0,
      "lossesdef": 0,
      "points": 8,
      "pointsf": 292,
      "pointsc": 113,
      "difference": 179
    },
    {
      "id": "5",
      "name": "Indios",
      "image": "",
      "games": 4,
      "wins": 4,
      "losses": 0,
      "lossesdef": 0,
      "points": 8,
      "pointsf": 294,
      "pointsc": 147,
      "difference": 147
    },
    {
      "id": "6",
      "name": "3K",
      "image": "",
      "games": 5,
      "wins": 3,
      "losses": 2,
      "lossesdef": 0,
      "points": 8,
      "pointsf": 214,
      "pointsc": 204,
      "difference": 10
    },
    {
      "id": "7",
      "name": "Hawks",
      "image": "",
      "games": 5,
      "wins": 1,
      "losses": 4,
      "lossesdef": 0,
      "points": 6,
      "pointsf": 223,
      "pointsc": 267,
      "difference": -44
    },
    {
      "id": "8",
      "name": "Thunder",
      "image": "",
      "games": 5,
      "wins": 1,
      "losses": 4,
      "lossesdef": 0,
      "points": 6,
      "pointsf": 163,
      "pointsc": 259,
      "difference": -96
    },
    {
      "id": "9",
      "name": "Talento JR",
      "image": "",
      "games": 5,
      "wins": 1,
      "losses": 4,
      "lossesdef": 0,
      "points": 6,
      "pointsf": 150,
      "pointsc": 404,
      "difference": -254
    },
    {
      "id": "10",
      "name": "Astros",
      "image": "",
      "games": 4,
      "wins": 1,
      "losses": 3,
      "lossesdef": 0,
      "points": 5,
      "pointsf": 171,
      "pointsc": 215,
      "difference": -44
    },
    {
      "id": "11",
      "name": "Vagos",
      "image": "",
      "games": 4,
      "wins": 1,
      "losses": 3,
      "lossesdef": 0,
      "points": 5,
      "pointsf": 141,
      "pointsc": 278,
      "difference": -137
    },
    {
      "id": "12",
      "name": "Wolfs",
      "image": "",
      "games": 5,
      "wins": 0,
      "losses": 5,
      "lossesdef": 0,
      "points": 5,
      "pointsf": 148,
      "pointsc": 341,
      "difference": -193
    },
    {
      "id": "13",
      "name": "EMUA",
      "image": "",
      "games": 4,
      "wins": 0,
      "losses": 4,
      "lossesdef": 0,
      "points": 4,
      "pointsf": 105,
      "pointsc": 245,
      "difference": -140
    }
  ]
}

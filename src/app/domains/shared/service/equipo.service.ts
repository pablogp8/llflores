import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../models/team.model';
import { Player } from '../models/player.model';

@Injectable({
    providedIn: 'root'
})
export class EquipoService {
    private http= inject(HttpClient);
    private host = 'http://192.168.0.201:3000';
    constructor() {}

    getListaEquipos(genero: 'masculino'|'femenino') {
        const url= new URL(this.host + '/equipos/'+ genero);
        console.log(url.toString());
        return this.http.get<Team[]>(url.toString())
    }

    getListaJugadores(bdid: number) {
        const url =new URL(this.host + '/jugadores/lista/'+ bdid);
        return this.http.get<Player[]>(url.toString())
    }
}
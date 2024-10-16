import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Team } from "../models/team.model";
import { Player, listTeam } from "../models/player.model";

@Injectable({
  providedIn: 'root'  
})
export class GeneralDataService{
    constructor(private http: HttpClient){}

    getEquiposLocal(){
        return this.http.get<Team[]>('assets/listaEquipos.json');
    }

    getJugadores(bdid: number){
        return this.http.get<listTeam[]>('assets/listaJugadores.json');
    }
}
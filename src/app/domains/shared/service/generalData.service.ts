import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Team } from "../models/team.model";
import { listTop } from "../models/top.model";
import { listTeam } from "../models/player.model";
import { schedule } from "../models/schedule.model";

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

    getTabla(){
        return this.http.get<Team[]>('assets/tablaPosicion.json');
    }
    
    getListTops(){
        return this.http.get<listTop[]>('assets/tops.json');
    }

    getSchedule(){
        return this.http.get<schedule[]>('assets/schedule.json')
    }
}
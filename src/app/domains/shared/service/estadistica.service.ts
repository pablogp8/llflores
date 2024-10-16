import { Inject, Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Team } from "../models/team.model";

@Injectable({
    providedIn: 'root'
})
export class EstadisticaService {
    private http= inject(HttpClient);
    private host = 'http://192.168.0.201:3000';

    getTablaPosiciones() {
        const url = new URL(this.host + '/estadistica/orden');
        return this.http.get<Team[]>(url.toString())
    }
}
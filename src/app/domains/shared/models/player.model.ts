export interface listTeam{
    bdid: number;
    nombre: string;
    color: string;
    jugadores: Player[];
}

export interface Player{
    nombre: string;
    apellido: string;
    bdid: number;
    numb?: number;
    points?: number;
    points3?: number;
    assists?: number;
    rebounds?: number;
    blocks?: number;
    steals?: number;
    lost?: number;
}
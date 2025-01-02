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
    mvp?: number;
    juegos?: statsJ[];
}

export interface statsJ{
    jornada: number;
	tecnica: string;
	points: string;
	assists: string;
	rebounds: string;
	steals: string;
	points3: string;
	blocks: string;
	lost: string;
	anti: string;
	faltas: string;
}
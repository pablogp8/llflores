export interface schedule{
    bdid: number;
    nombre: string;
    fecha: string;
    descanso: string;
    juegos: match[];
}

export interface match{
    local: string;
    visita: string;
    hora: string;
    mlocal: string;
    mvisita: string;
}
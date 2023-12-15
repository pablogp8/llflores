export interface Team{
    id: string;
    name: string;
    image: string;
    games?: number;
    wins?: number;
    losses?: number;
    lossesdef?: number;
    points?: number;
    pointsf?: number;
    pointsc?: number;
    difference?: number;
}
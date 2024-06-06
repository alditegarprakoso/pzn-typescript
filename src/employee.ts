export interface Employee {
    id: number;
    name: string;
    divitsion: string;
}

export interface Manager extends Employee {
    numberOfEmployees: number;
}
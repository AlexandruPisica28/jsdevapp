export interface User {
    id: number | string;
    nume: string;
    prenume: string;
    email: string;
    datanastere: string; // sau Date, în funcție de format
    telefon: string;
    cnp: string;
    poza: string;
  }
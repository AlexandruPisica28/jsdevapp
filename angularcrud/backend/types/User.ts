export interface BasicUser {
    id: number,
  }
  export interface User extends BasicUser {
    nume: string,
    prenume: string,
    datanastere:Date, //string
    email:string,
    telefon: string,
    dataadaugare?:Date,
    actiune?:string
    cnp: string,
    poza?: string,
    users?: any;
  }
  export interface UserWithDetails extends BasicUser, User{
    userId: number,
    user: User,
    
  }
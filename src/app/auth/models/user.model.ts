export interface User {
    email: string;
    password: string;
    role: 'administrador' | 'colaborador'; // Roles definidos
}
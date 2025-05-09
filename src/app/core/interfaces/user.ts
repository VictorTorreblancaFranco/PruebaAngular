export interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'panadero' | 'cajero' | 'cliente'; // Ajusta según tus roles
    avatar?: string;
    token?: string; // La propiedad token sigue siendo opcional
}

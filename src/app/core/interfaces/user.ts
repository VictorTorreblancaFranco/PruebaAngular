// src/app/core/interfaces/user.ts
export interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'panadero' | 'cajero' | 'cliente'; // Ajusta según tus roles
    avatar?: string;
    token?: string; // Propiedad opcional si eventualmente necesitas JWT
}

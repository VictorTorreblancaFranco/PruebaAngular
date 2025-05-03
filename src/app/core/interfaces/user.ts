// src/app/shared/models/user.model.ts
export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    avatar?: string;
    token?: string; // Propiedad opcional si eventualmente necesitas JWT
}
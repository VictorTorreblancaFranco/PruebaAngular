export interface Customer {
    identificador: number;
    nombre: string;
    apellido: string;
    numero_documento: string;
    telefono: string;
    direccion: string;
    fecha_registro: Date;
    email: string;
    estado: boolean; // Se usará para eliminar lógicamente
    edad: number;
}

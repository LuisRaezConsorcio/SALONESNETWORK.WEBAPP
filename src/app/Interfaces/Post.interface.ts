export interface FollowUp {
  idFollow: number;
  idPost: number; // ID del post al que pertenece el seguimiento
  person: Person;
  content: string;
  expanded: boolean;
  isFromReply?: boolean; // Indica si el seguimiento proviene de una respuesta
  createdAt: Date; // Fecha de creación del seguimiento
}

export interface Post {
  id: number;
  person: Person;
  subject:boolean;
  seccion:number;
  pais:Pais;
  subseccion1:number;
  subseccion2:number;
  content: string;
  followUps: FollowUp[]; // Lista de seguimientos
  replyTo: Post | null; // Si es una respuesta, tendrá el post al que responde
  replies: Post[]; // Respuestas al post
  createdAt: Date;
}

export interface Person {
  id: number;
  name: string;
  position: string;
  area: string;
  numero: string;
  correo: string;
}

export interface Pais {
  id: number;
  name: string;
}

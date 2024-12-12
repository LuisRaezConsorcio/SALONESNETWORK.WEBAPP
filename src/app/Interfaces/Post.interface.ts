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
  title: string;
  content: string;
  person: Person;
  followUps: FollowUp[]; // Lista de seguimientos
  replyTo: Post | null; // Si es una respuesta, tendrá el post al que responde
  replies: Post[]; // Respuestas al post
}

export interface Person {
  id: number;
  name: string;
  position: string;
  area: string;
  numero: string;
  correo: string;
}

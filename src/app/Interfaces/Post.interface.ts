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
  pais:Pais[];
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
  subMenus:Submenus[]
}

export interface Submenus {
  id: number;
  name: string;
  tercerNivel:TercerNivel[]
}

export interface TercerNivel{
  id: number;
  name: string;
}

export interface FilterCriteria {
  subject: boolean;
  seccion: number;
  paisId: number;
  subMenuId?: number;
  tercerNivelId?: number;
  personId?:number;
  // solo aplicables con el boton de filtro
  noticiaId?: number,
  startDate?: string; // Cambiar de string a Date
  endDate?: string; 
}

import { Injectable } from '@angular/core';
import { FilterCriteria, Post } from '../Interfaces/Post.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  posts: Post[] = [
  
      {
        id: 43,
        seccion: 57,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 43",
        person: {
          id: 15,
          name: "Usuario 28",
          position: "Cargo 28",
          area: "Área 28",
          numero: "345660",
          correo: "usuario28@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T14:50:00Z"),
      },
      {
        id: 42,
        seccion: 57,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 41",
        person: {
          id: 15,
          name: "Usuario 28",
          position: "Cargo 28",
          area: "Área 28",
          numero: "345660",
          correo: "usuario28@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T14:40:00Z"),
      },
      {
        id: 41,
        seccion: 57,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 41",
        person: {
          id: 15,
          name: "Usuario 28",
          position: "Cargo 28",
          area: "Área 28",
          numero: "345660",
          correo: "usuario28@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T14:30:00Z"),
      },
      {
        id: 40,
        seccion: 56,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 38",
        person: {
          id: 14,
          name: "Usuario 25",
          position: "Cargo 25",
          area: "Área 25",
          numero: "308625",
          correo: "usuario25@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T14:20:00Z"),
      },
      {
        id: 39,
        seccion: 56,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 38",
        person: {
          id: 14,
          name: "Usuario 25",
          position: "Cargo 25",
          area: "Área 25",
          numero: "308625",
          correo: "usuario25@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T14:10:00Z"),
      },
      {
        id: 38,
        seccion: 56,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 38",
        person: {
          id: 14,
          name: "Usuario 25",
          position: "Cargo 25",
          area: "Área 25",
          numero: "308625",
          correo: "usuario25@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T14:00:00Z"),
      },
      {
        id: 37,
        seccion: 55,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 3,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 23",
        person: {
          id: 13,
          name: "Julio Ernesto Alfaro G",
          position: "Gerente General",
          area: "Seguridad",
          numero: "49380",
          correo: "Julio.Alfaro@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T13:50:00Z"),
      },
      {
        id: 36,
        seccion: 55,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 3,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 23",
        person: {
          id: 13,
          name: "Julio Ernesto Alfaro G",
          position: "Gerente General",
          area: "Seguridad",
          numero: "49380",
          correo: "Julio.Alfaro@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T13:40:00Z"),
      },
      {
        id: 35,
        seccion: 55,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 3,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 23",
        person: {
          id: 13,
          name: "Julio Ernesto Alfaro G",
          position: "Gerente General",
          area: "Seguridad",
          numero: "49380",
          correo: "Julio.Alfaro@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T13:30:00Z"),
      },
      {
        id: 34,
        seccion: 55,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 23",
        person: {
          id: 12,
          name: "Carlos Valcarce M",
          position: "Gerente",
          area: "Logistica",
          numero: "49380",
          correo: "Carlos.Valcarce@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T13:20:00Z"),
      },
      {
        id: 33,
        seccion: 55,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 2,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 23",
        person: {
          id: 12,
          name: "Carlos Valcarce M",
          position: "Gerente",
          area: "Logistica",
          numero: "49380",
          correo: "Carlos.Valcarce@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T13:10:00Z"),
      },
      {
        id: 32,
        seccion: 55,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 2,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 23",
        person: {
          id: 12,
          name: "Carlos Valcarce M",
          position: "Gerente",
          area: "Logistica",
          numero: "49380",
          correo: "Carlos.Valcarce@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T13:00:00Z"),
      },
      {
        id: 31,
        seccion: 55,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 23",
        person: {
          id: 11,
          name: "Valentin Capcha M",
          position: "Jefe Seguridad",
          area: "Seguridad",
          numero: "49380",
          correo: "Valentin.Capcha@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T12:50:00Z"),
      },
      {
        id: 30,
        seccion: 55,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 23",
        person: {
          id: 11,
          name: "Valentin Capcha M",
          position: "Jefe Seguridad",
          area: "Seguridad",
          numero: "49380",
          correo: "Valentin.Capcha@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T12:40:00Z"),
      },
      {
        id: 29,
        seccion: 55,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 23",
        person: {
          id: 11,
          name: "Valentin Capcha M",
          position: "Jefe Seguridad",
          area: "Seguridad",
          numero: "49380",
          correo: "Valentin.Capcha@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T12:30:00Z"),
      },
      {
        id: 28,
        seccion: 2,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 3,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 23",
        person: {
          id: 10,
          name: "Eduardo Arteaga G",
          position: "Tecnico De Aire Acondicionado",
          area: "I-com Attract",
          numero: "49380",
          correo: "Eduardo.Arteaga@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T12:20:00Z"),
      },
      {
        id: 27,
        seccion: 2,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 3,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 23",
        person: {
          id: 10,
          name: "Eduardo Arteaga G",
          position: "Tecnico De Aire Acondicionado",
          area: "I-com Attract",
          numero: "49380",
          correo: "Eduardo.Arteaga@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T12:10:00Z"),
      },
      {
        id: 26,
        seccion: 2,
        pais: [{
          id: 3,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 23",
        person: {
          id: 10,
          name: "Eduardo Arteaga G",
          position: "Tecnico De Aire Acondicionado",
          area: "I-com Attract",
          numero: "49380",
          correo: "Eduardo.Arteaga@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T12:00:00Z"),
      },
      {
        id: 25,
        seccion: 2,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 2,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 23",
        person: {
          id: 9,
          name: "Jaime Lopez Chau N",
          position: "Gerente",
          area: "Capacitacion Y Desarrollo",
          numero: "49380",
          correo: "Jaime.Chau@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T11:50:00Z"),
      },
      {
        id: 24,
        seccion: 2,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 2,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 23",
        person: {
          id: 9,
          name: "Jaime Lopez Chau N",
          position: "Gerente",
          area: "Capacitacion Y Desarrollo",
          numero: "49380",
          correo: "Jaime.Chau@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T11:40:00Z"),
      },
      {
        id: 23,
        seccion: 2,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 2,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 23",
        person: {
          id: 9,
          name: "Jaime Lopez Chau N",
          position: "Gerente",
          area: "Capacitacion Y Desarrollo",
          numero: "49380",
          correo: "Jaime.Chau@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T11:30:00Z"),
      },
      {
        id: 22,
        seccion: 2,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 20",
        person: {
          id: 8,
          name: "Rosalynn Sharmila Echave M",
          position: "Jefe(a) De Comunicación Corporativa",
          area: "Gerencia General",
          numero: "49380",
          correo: "Rosalynn.Echave@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T11:20:00Z"),
      },
      {
        id: 21,
        seccion: 2,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 20",
        person: {
          id: 8,
          name: "Rosalynn Sharmila Echave M",
          position: "Jefe(a) De Comunicación Corporativa",
          area: "Gerencia General",
          numero: "49380",
          correo: "Rosalynn.Echave@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T11:10:00Z"),
      },
      {
        id: 20,
        seccion: 2,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 20",
        person: {
          id: 8,
          name: "Rosalynn Sharmila Echave M",
          position: "Jefe(a) De Comunicación Corporativa",
          area: "Gerencia General",
          numero: "49380",
          correo: "Rosalynn.Echave@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T11:00:00Z"),
      },
      {
        id: 19,
        seccion: 1,
        pais: [{
          id: 3,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 19",
        person: {
          id: 7,
          name: "Ruth Melina Ojeda V",
          position: "Analista Producción",
          area: "Analisis De Produccion",
          numero: "49380",
          correo: "Ruth.Ojeda@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T10:50:00Z"),
      },
      {
        id: 18,
        seccion: 1,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 3,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 18",
        person: {
          id: 7,
          name: "Ruth Melina Ojeda V",
          position: "Analista Producción",
          area: "Analisis De Produccion",
          numero: "49380",
          correo: "Ruth.Ojeda@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T10:40:00Z"),
      },
      {
        id: 17,
        seccion: 1,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 17",
        person: {
          id: 7,
          name: "Ruth Melina Ojeda V",
          position: "Analista Producción",
          area: "Analisis De Produccion",
          numero: "49380",
          correo: "Ruth.Ojeda@consorcio-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T10:30:00Z"),
      },
      {
        id: 16,
        seccion: 1,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 2,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 16",
        person: {
          id: 6,
          name: "Carlos Tito Sinche C",
          position: "Asist Contable",
          area: "Contabilidad",
          numero: "9871234567",
          correo: "Carlos.Sinche@carolina-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T10:20:00Z"),
      },
      {
        id: 15,
        seccion: 1,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 2,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 15",
        person: {
          id: 6,
          name: "Carlos Tito Sinche C",
          position: "Asist Contable",
          area: "Contabilidad",
          numero: "9871234567",
          correo: "Carlos.Sinche@carolina-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T10:10:00Z"),
      },
      {
        id: 14,
        seccion: 1,
        pais: [{
          id: 2,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        subject: true,
        content: "Contenido de prueba 14",
        person: {
          id: 6,
          name: "Carlos Tito Sinche C",
          position: "Asist Contable",
          area: "Contabilidad",
          numero: "9871234567",
          correo: "Carlos.Sinche@carolina-peru.com"
        },
        followUps: [],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T10:00:00Z")
      },
      {
        id: 13,
        person: {
          id: 5,
          name: "Karen Danella Vera H",
          position: "Asistente De Proyectos",
          area: "Colorantes Naturales",
          numero: "9871234567",
          correo: "Karen.Vera@carolina-peru.com"
        },
        subject: true,
        seccion: 1,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        content: "Este es el contenido principal del nuevo post.",
        followUps: [
          {
            idFollow: 1003,
            idPost: 11,
            person: {
              id: 4,
              name: "Roberto Ramírez",
              position: "Supervisor de Calidad",
              area: "Calidad",
              numero: "9988776655",
              correo: "roberto.ramirez@carolina-peru.com"
            },
            content: "Este es un comentario de seguimiento al nuevo post.",
            expanded: false,
            isFromReply: false,
            createdAt: new Date("2024-12-14T12:00:00Z")
          },
          {
            idFollow: 1004,
            idPost: 11,
            person: {
              id: 3,
              name: "Laura Castillo",
              position: "Analista Financiera",
              area: "Finanzas",
              numero: "6655443322",
              correo: "laura.castillo@carolina-peru.com"
            },
            content: "Este es otro comentario relacionado con el nuevo post.",
            expanded: true,
            isFromReply: true,
            createdAt: new Date("2024-12-14T12:30:00Z")
          }
        ],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T11:30:00Z")
      },
      {
        id: 12,
        person: {
          id: 5,
          name: "Karen Danella Vera H",
          position: "Asistente De Proyectos",
          area: "Colorantes Naturales",
          numero: "9871234567",
          correo: "Karen.Vera@carolina-peru.com"
        },
        subject: true,
        seccion: 1,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        content: "Este es el contenido principal del nuevo post.",
        followUps: [
          {
            idFollow: 1003,
            idPost: 11,
            person: {
              id: 4,
              name: "Roberto Ramírez",
              position: "Supervisor de Calidad",
              area: "Calidad",
              numero: "9988776655",
              correo: "roberto.ramirez@carolina-peru.com"
            },
            content: "Este es un comentario de seguimiento al nuevo post.",
            expanded: false,
            isFromReply: false,
            createdAt: new Date("2024-12-14T12:00:00Z")
          },
          {
            idFollow: 1004,
            idPost: 11,
            person: {
              id: 3,
              name: "Laura Castillo",
              position: "Analista Financiera",
              area: "Finanzas",
              numero: "6655443322",
              correo: "laura.castillo@carolina-peru.com"
            },
            content: "Este es otro comentario relacionado con el nuevo post.",
            expanded: true,
            isFromReply: true,
            createdAt: new Date("2024-12-14T12:30:00Z")
          }
        ],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T11:30:00Z")
      },
      {
        id: 11,
        person: {
          id: 5,
          name: "Karen Danella Vera H",
          position: "Asistente De Proyectos",
          area: "Colorantes Naturales",
          numero: "9871234567",
          correo: "Karen.Vera@carolina-peru.com"
        },
        subject: true,
        seccion: 1,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        content: "Este es el contenido principal del nuevo post.",
        followUps: [
          {
            idFollow: 1003,
            idPost: 11,
            person: {
              id: 4,
              name: "Roberto Ramírez",
              position: "Supervisor de Calidad",
              area: "Calidad",
              numero: "9988776655",
              correo: "roberto.ramirez@carolina-peru.com"
            },
            content: "Este es un comentario de seguimiento al nuevo post.",
            expanded: false,
            isFromReply: false,
            createdAt: new Date("2024-12-14T12:00:00Z")
          },
          {
            idFollow: 1004,
            idPost: 11,
            person: {
              id: 3,
              name: "Laura Castillo",
              position: "Analista Financiera",
              area: "Finanzas",
              numero: "6655443322",
              correo: "laura.castillo@carolina-peru.com"
            },
            content: "Este es otro comentario relacionado con el nuevo post.",
            expanded: true,
            isFromReply: true,
            createdAt: new Date("2024-12-14T12:30:00Z")
          }
        ],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T11:30:00Z")
      },
      {
        id: 10,
        person: {
          id: 2,
          name: "Juan Pérez",
          position: "Gerente de Marketing",
          area: "Marketing",
          numero: "1234567890",
          correo: "juan.perez@carolina-peru.com"
        },
        subject: false,
        seccion: 0,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        content: "Este es el contenido principal del post.",
        followUps: [
          {
            idFollow: 1001,
            idPost: 1,
            person: {
              id: 102,
              name: "Ana García",
              position: "Especialista en Ventas",
              area: "Ventas",
              numero: "9876543210",
              correo: "ana.garcia@carolina-peru.com"
            },
            content: "Este es un comentario de seguimiento al post.",
            expanded: false,
            isFromReply: false,
            createdAt: new Date("2024-12-14T10:30:00Z")
          },
          {
            idFollow: 1002,
            idPost: 1,
            person: {
              id: 1,
              name: "Luis Mendoza",
              position: "Analista de Datos",
              area: "Datos",
              numero: "1122334455",
              correo: "luis.mendoza@carolina-peru.com"
            },
            content: "Este es otro comentario relacionado con el post.",
            expanded: true,
            isFromReply: true,
            createdAt: new Date("2024-12-14T11:00:00Z")
          }
        ],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T09:00:00Z")
      },
      {
        id: 9,
        person: {
          id: 2,
          name: "Juan Pérez",
          position: "Gerente de Marketing",
          area: "Marketing",
          numero: "1234567890",
          correo: "juan.perez@carolina-peru.com"
        },
        subject: false,
        seccion: 0,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        content: "Este es el contenido principal del post.",
        followUps: [
          {
            idFollow: 1001,
            idPost: 1,
            person: {
              id: 102,
              name: "Ana García",
              position: "Especialista en Ventas",
              area: "Ventas",
              numero: "9876543210",
              correo: "ana.garcia@carolina-peru.com"
            },
            content: "Este es un comentario de seguimiento al post.",
            expanded: false,
            isFromReply: false,
            createdAt: new Date("2024-12-14T10:30:00Z")
          },
          {
            idFollow: 1002,
            idPost: 1,
            person: {
              id: 1,
              name: "Luis Mendoza",
              position: "Analista de Datos",
              area: "Datos",
              numero: "1122334455",
              correo: "luis.mendoza@carolina-peru.com"
            },
            content: "Este es otro comentario relacionado con el post.",
            expanded: true,
            isFromReply: true,
            createdAt: new Date("2024-12-14T11:00:00Z")
          }
        ],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T09:00:00Z")
      },
      {
        id: 8,
        person: {
          id: 2,
          name: "Juan Pérez",
          position: "Gerente de Marketing",
          area: "Marketing",
          numero: "1234567890",
          correo: "juan.perez@carolina-peru.com"
        },
        subject: false,
        seccion: 0,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        content: "Este es el contenido principal del post.",
        followUps: [
          {
            idFollow: 1001,
            idPost: 1,
            person: {
              id: 102,
              name: "Ana García",
              position: "Especialista en Ventas",
              area: "Ventas",
              numero: "9876543210",
              correo: "ana.garcia@carolina-peru.com"
            },
            content: "Este es un comentario de seguimiento al post.",
            expanded: false,
            isFromReply: false,
            createdAt: new Date("2024-12-14T10:30:00Z")
          },
          {
            idFollow: 1002,
            idPost: 1,
            person: {
              id: 1,
              name: "Luis Mendoza",
              position: "Analista de Datos",
              area: "Datos",
              numero: "1122334455",
              correo: "luis.mendoza@carolina-peru.com"
            },
            content: "Este es otro comentario relacionado con el post.",
            expanded: true,
            isFromReply: true,
            createdAt: new Date("2024-12-14T11:00:00Z")
          }
        ],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T09:00:00Z")
      },
      {
        id: 7,
        person: {
          id: 2,
          name: "Juan Pérez",
          position: "Gerente de Marketing",
          area: "Marketing",
          numero: "1234567890",
          correo: "juan.perez@carolina-peru.com"
        },
        subject: false,
        seccion: 0,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        content: "Este es el contenido principal del post.",
        followUps: [
          {
            idFollow: 1001,
            idPost: 1,
            person: {
              id: 102,
              name: "Ana García",
              position: "Especialista en Ventas",
              area: "Ventas",
              numero: "9876543210",
              correo: "ana.garcia@carolina-peru.com"
            },
            content: "Este es un comentario de seguimiento al post.",
            expanded: false,
            isFromReply: false,
            createdAt: new Date("2024-12-14T10:30:00Z")
          },
          {
            idFollow: 1002,
            idPost: 1,
            person: {
              id: 1,
              name: "Luis Mendoza",
              position: "Analista de Datos",
              area: "Datos",
              numero: "1122334455",
              correo: "luis.mendoza@carolina-peru.com"
            },
            content: "Este es otro comentario relacionado con el post.",
            expanded: true,
            isFromReply: true,
            createdAt: new Date("2024-12-14T11:00:00Z")
          }
        ],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T09:00:00Z")
      },
      {
        id: 6,
        person: {
          id: 2,
          name: "Juan Pérez",
          position: "Gerente de Marketing",
          area: "Marketing",
          numero: "1234567890",
          correo: "juan.perez@carolina-peru.com"
        },
        subject: false,
        seccion: 0,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        content: "Este es el contenido principal del post.",
        followUps: [
          {
            idFollow: 1001,
            idPost: 1,
            person: {
              id: 102,
              name: "Ana García",
              position: "Especialista en Ventas",
              area: "Ventas",
              numero: "9876543210",
              correo: "ana.garcia@carolina-peru.com"
            },
            content: "Este es un comentario de seguimiento al post.",
            expanded: false,
            isFromReply: false,
            createdAt: new Date("2024-12-14T10:30:00Z")
          },
          {
            idFollow: 1002,
            idPost: 1,
            person: {
              id: 1,
              name: "Luis Mendoza",
              position: "Analista de Datos",
              area: "Datos",
              numero: "1122334455",
              correo: "luis.mendoza@carolina-peru.com"
            },
            content: "Este es otro comentario relacionado con el post.",
            expanded: true,
            isFromReply: true,
            createdAt: new Date("2024-12-14T11:00:00Z")
          }
        ],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T09:00:00Z")
      },
      {
        id: 5,
        person: {
          id: 2,
          name: "Juan Pérez",
          position: "Gerente de Marketing",
          area: "Marketing",
          numero: "1234567890",
          correo: "juan.perez@carolina-peru.com"
        },
        subject: false,
        seccion: 0,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        content: "Este es el contenido principal del post.",
        followUps: [
          {
            idFollow: 1001,
            idPost: 1,
            person: {
              id: 102,
              name: "Ana García",
              position: "Especialista en Ventas",
              area: "Ventas",
              numero: "9876543210",
              correo: "ana.garcia@carolina-peru.com"
            },
            content: "Este es un comentario de seguimiento al post.",
            expanded: false,
            isFromReply: false,
            createdAt: new Date("2024-12-14T10:30:00Z")
          },
          {
            idFollow: 1002,
            idPost: 1,
            person: {
              id: 1,
              name: "Luis Mendoza",
              position: "Analista de Datos",
              area: "Datos",
              numero: "1122334455",
              correo: "luis.mendoza@carolina-peru.com"
            },
            content: "Este es otro comentario relacionado con el post.",
            expanded: true,
            isFromReply: true,
            createdAt: new Date("2024-12-14T11:00:00Z")
          }
        ],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T09:00:00Z")
      },
      {
        id: 4,
        person: {
          id: 2,
          name: "Juan Pérez",
          position: "Gerente de Marketing",
          area: "Marketing",
          numero: "1234567890",
          correo: "juan.perez@carolina-peru.com"
        },
        subject: false,
        seccion: 0,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        content: "Este es el contenido principal del post.",
        followUps: [
          {
            idFollow: 1001,
            idPost: 1,
            person: {
              id: 102,
              name: "Ana García",
              position: "Especialista en Ventas",
              area: "Ventas",
              numero: "9876543210",
              correo: "ana.garcia@carolina-peru.com"
            },
            content: "Este es un comentario de seguimiento al post.",
            expanded: false,
            isFromReply: false,
            createdAt: new Date("2024-12-14T10:30:00Z")
          },
          {
            idFollow: 1002,
            idPost: 1,
            person: {
              id: 1,
              name: "Luis Mendoza",
              position: "Analista de Datos",
              area: "Datos",
              numero: "1122334455",
              correo: "luis.mendoza@carolina-peru.com"
            },
            content: "Este es otro comentario relacionado con el post.",
            expanded: true,
            isFromReply: true,
            createdAt: new Date("2024-12-14T11:00:00Z")
          }
        ],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T09:00:00Z")
      },
      {
        id: 3,
        person: {
          id: 2,
          name: "Juan Pérez",
          position: "Gerente de Marketing",
          area: "Marketing",
          numero: "1234567890",
          correo: "juan.perez@carolina-peru.com"
        },
        subject: false,
        seccion: 0,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        content: "Este es el contenido principal del post.",
        followUps: [
          {
            idFollow: 1001,
            idPost: 1,
            person: {
              id: 102,
              name: "Ana García",
              position: "Especialista en Ventas",
              area: "Ventas",
              numero: "9876543210",
              correo: "ana.garcia@carolina-peru.com"
            },
            content: "Este es un comentario de seguimiento al post.",
            expanded: false,
            isFromReply: false,
            createdAt: new Date("2024-12-14T10:30:00Z")
          },
          {
            idFollow: 1002,
            idPost: 1,
            person: {
              id: 1,
              name: "Luis Mendoza",
              position: "Analista de Datos",
              area: "Datos",
              numero: "1122334455",
              correo: "luis.mendoza@carolina-peru.com"
            },
            content: "Este es otro comentario relacionado con el post.",
            expanded: true,
            isFromReply: true,
            createdAt: new Date("2024-12-14T11:00:00Z")
          }
        ],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T09:00:00Z")
      },
      {
        id: 2,
        person: {
          id: 2,
          name: "Juan Pérez",
          position: "Gerente de Marketing",
          area: "Marketing",
          numero: "1234567890",
          correo: "juan.perez@carolina-peru.com"
        },
        subject: false,
        seccion: 0,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        content: "Este es el contenido principal del post.",
        followUps: [
          {
            idFollow: 1001,
            idPost: 1,
            person: {
              id: 102,
              name: "Ana García",
              position: "Especialista en Ventas",
              area: "Ventas",
              numero: "9876543210",
              correo: "ana.garcia@carolina-peru.com"
            },
            content: "Este es un comentario de seguimiento al post.",
            expanded: false,
            isFromReply: false,
            createdAt: new Date("2024-12-14T10:30:00Z")
          },
          {
            idFollow: 1002,
            idPost: 1,
            person: {
              id: 1,
              name: "Luis Mendoza",
              position: "Analista de Datos",
              area: "Datos",
              numero: "1122334455",
              correo: "luis.mendoza@carolina-peru.com"
            },
            content: "Este es otro comentario relacionado con el post.",
            expanded: true,
            isFromReply: true,
            createdAt: new Date("2024-12-14T11:00:00Z")
          }
        ],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T09:00:00Z")
      },
      {
        id: 1,
        person: {
          id: 2,
          name: "Juan Pérez",
          position: "Gerente de Marketing",
          area: "Marketing",
          numero: "1234567890",
          correo: "juan.perez@carolina-peru.com"
        },
        subject: false,
        seccion: 0,
        pais: [{
          id: 1,
          name: 'Peru',
          subMenus:
            [{
              id: 1,
              name: "Fundo Don Edmundo",
              tercerNivel: []
            }]
        }],
        content: "Este es el contenido principal del post.",
        followUps: [
          {
            idFollow: 1001,
            idPost: 1,
            person: {
              id: 102,
              name: "Ana García",
              position: "Especialista en Ventas",
              area: "Ventas",
              numero: "9876543210",
              correo: "ana.garcia@carolina-peru.com"
            },
            content: "Este es un comentario de seguimiento al post.",
            expanded: false,
            isFromReply: false,
            createdAt: new Date("2024-12-14T10:30:00Z")
          },
          {
            idFollow: 1002,
            idPost: 1,
            person: {
              id: 1,
              name: "Luis Mendoza",
              position: "Analista de Datos",
              area: "Datos",
              numero: "1122334455",
              correo: "luis.mendoza@carolina-peru.com"
            },
            content: "Este es otro comentario relacionado con el post.",
            expanded: true,
            isFromReply: true,
            createdAt: new Date("2024-12-14T11:00:00Z")
          }
        ],
        replyTo: null,
        replies: [],
        createdAt: new Date("2024-12-14T09:00:00Z")
      },
    ];

    private tempFilterCriteria: Partial<FilterCriteria> | null = null;

    private filteredPostsSubject = new BehaviorSubject<Post[]>([]);  // Cambiado a Post[]
filteredPosts$ = this.filteredPostsSubject.asObservable();
    
    constructor() { }
    
    getPosts(): Post[] {
      return this.posts;
    }
    
    // Guardar filtros temporales (desde Accordion y Filter)
    setTempFilterCriteria(criteria: Partial<FilterCriteria>) {
      if (!this.tempFilterCriteria) {
        this.tempFilterCriteria = {}; // Inicializar si no existe
      }
    
      // Combinamos los criterios previos con los nuevos valores proporcionados sin sobrescribir todo
      this.tempFilterCriteria = { ...this.tempFilterCriteria, ...criteria };
    
      // Actualizamos los posts filtrados según los nuevos criterios
      this.applyFilterAndEmit();
    }
    
    // Obtener filtros temporales (desde FilterComponent)
    getTempFilterCriteria(): Partial<FilterCriteria> | null {
      return this.tempFilterCriteria;
    }
    
    // Aplicar el filtro a los posts y emitir los resultados
    private applyFilterAndEmit() {
      if (!this.tempFilterCriteria) {
        return; // Si no hay criterios, no hace nada
      }
    
      // Filtrar los posts según los criterios completos
      const filteredPosts = this.posts.filter(post => {
        return (
          (this.tempFilterCriteria?.subject === undefined || post.subject === this.tempFilterCriteria.subject) &&
          (this.tempFilterCriteria?.seccion === undefined || post.seccion === this.tempFilterCriteria.seccion) &&
          (this.tempFilterCriteria?.paisId === undefined || post.pais.some(p => p.id === this.tempFilterCriteria?.paisId)) &&
          (this.tempFilterCriteria?.subMenuId === undefined || post.pais.some(p => p.subMenus.some(s => s.id === this.tempFilterCriteria?.subMenuId))) &&
          (this.tempFilterCriteria?.personId === undefined || post.person.id === this.tempFilterCriteria.personId) &&
          (this.tempFilterCriteria?.noticiaId === undefined || post.id.toString().includes(this.tempFilterCriteria.noticiaId.toString())) &&
      (this.tempFilterCriteria?.startDate === undefined || new Date(post.createdAt) >= new Date(this.tempFilterCriteria.startDate)) &&
          (this.tempFilterCriteria?.endDate === undefined || new Date(post.createdAt) <= new Date(this.tempFilterCriteria.endDate))
        );
      });
    
      // Emitir los posts filtradossdfdsfssss
      this.filteredPostsSubject.next(filteredPosts);
    
      console.log('Posts filtrados emitidos:', filteredPosts);
    }
    
}

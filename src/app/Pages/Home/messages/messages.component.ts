import { Component, OnInit } from '@angular/core';
import { GLOBAL_IMPORTS } from '../../../global-imports';
import { CardsComponent } from '../../../Components/cards/cards.component';
import { FollowUp, Post } from '../../../Interfaces/Post.interface';
import { PostsComponent } from '../../../Components/posts/posts.component';
import { SharedStateService } from '../../../Services/shared-state.service';

@Component({
  selector: 'app-messages',
  imports: [GLOBAL_IMPORTS, CardsComponent, PostsComponent],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit {

  //posts: Post[] = []; // Lista de posts

  showPost = false;

  constructor(private sharedStateService: SharedStateService) { }

  ngOnInit(): void {
    this.sharedStateService.showPost$.subscribe((value) => {
      this.showPost = value;
    });
  }

  handleNewPost(post: string): void {

    const newReply: Post = {
      id: this.nextId++, // ID único
      content: post.trim(),
      person: {
        id: 3,
        name: 'Luis Raez',
        position: 'Analista Programador',
        area: 'Sistemas',
        numero: '',
        correo: 'sistemas4@consorcio-carolina.com',
      },
      subject: false, // Asumimos que es una respuesta, no un tema principal
      seccion: 0, // Puedes reemplazarlo con un valor válido según tu lógica
      pais: {
        id: 0, // Puedes ajustar según el país correspondiente
        name: ''
      },
      subseccion1: 0, // Reemplaza con el valor adecuado
      subseccion2: 0, // Reemplaza con el valor adecuado
      followUps: [],
      replyTo: null,
      replies: [],
      createdAt: new Date()
    };

    this.posts.unshift(newReply);
  }

  nextId: number = 2;
  posts: Post[] = [
    {
      id: 10,
      person: {
        id: 101,
        name: "Juan Pérez",
        position: "Gerente de Marketing",
        area: "Marketing",
        numero: "1234567890",
        correo: "juan.perez@ejemplo.com"
      },
      subject: true,
      seccion: 3,
      pais: {
        id: 10,
        name: "México"
      },
      subseccion1: 5,
      subseccion2: 8,
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
            correo: "ana.garcia@ejemplo.com"
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
            id: 103,
            name: "Luis Mendoza",
            position: "Analista de Datos",
            area: "Datos",
            numero: "1122334455",
            correo: "luis.mendoza@ejemplo.com"
          },
          content: "Este es otro comentario relacionado con el post.",
          expanded: true,
          isFromReply: true,
          createdAt: new Date("2024-12-14T11:00:00Z")
        }
      ],
      replyTo: null,
      replies: [
        {
          id: 2,
          person: {
            id: 104,
            name: "Carla Ruiz",
            position: "Asesora Legal",
            area: "Legal",
            numero: "3344556677",
            correo: "carla.ruiz@ejemplo.com"
          },
          subject: false,
          seccion: 4,
          pais: {
            id: 20,
            name: "Argentina"
          },
          subseccion1: 6,
          subseccion2: 9,
          content: "Este es el contenido de una respuesta al post original.",
          followUps: [],
          replyTo: null,
          replies: [],
          createdAt: new Date("2024-12-14T12:00:00Z")
        }
      ],
      createdAt: new Date("2024-12-14T09:00:00Z")
    },
    {
      id: 9,
      person: {
        id: 101,
        name: "Juan Pérez",
        position: "Gerente de Marketing",
        area: "Marketing",
        numero: "1234567890",
        correo: "juan.perez@ejemplo.com"
      },
      subject: true,
      seccion: 3,
      pais: {
        id: 10,
        name: "México"
      },
      subseccion1: 5,
      subseccion2: 8,
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
            correo: "ana.garcia@ejemplo.com"
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
            id: 103,
            name: "Luis Mendoza",
            position: "Analista de Datos",
            area: "Datos",
            numero: "1122334455",
            correo: "luis.mendoza@ejemplo.com"
          },
          content: "Este es otro comentario relacionado con el post.",
          expanded: true,
          isFromReply: true,
          createdAt: new Date("2024-12-14T11:00:00Z")
        }
      ],
      replyTo: null,
      replies: [
        {
          id: 2,
          person: {
            id: 104,
            name: "Carla Ruiz",
            position: "Asesora Legal",
            area: "Legal",
            numero: "3344556677",
            correo: "carla.ruiz@ejemplo.com"
          },
          subject: false,
          seccion: 4,
          pais: {
            id: 20,
            name: "Argentina"
          },
          subseccion1: 6,
          subseccion2: 9,
          content: "Este es el contenido de una respuesta al post original.",
          followUps: [],
          replyTo: null,
          replies: [],
          createdAt: new Date("2024-12-14T12:00:00Z")
        }
      ],
      createdAt: new Date("2024-12-14T09:00:00Z")
    },
    {
      id: 8,
      person: {
        id: 101,
        name: "Juan Pérez",
        position: "Gerente de Marketing",
        area: "Marketing",
        numero: "1234567890",
        correo: "juan.perez@ejemplo.com"
      },
      subject: true,
      seccion: 3,
      pais: {
        id: 10,
        name: "México"
      },
      subseccion1: 5,
      subseccion2: 8,
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
            correo: "ana.garcia@ejemplo.com"
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
            id: 103,
            name: "Luis Mendoza",
            position: "Analista de Datos",
            area: "Datos",
            numero: "1122334455",
            correo: "luis.mendoza@ejemplo.com"
          },
          content: "Este es otro comentario relacionado con el post.",
          expanded: true,
          isFromReply: true,
          createdAt: new Date("2024-12-14T11:00:00Z")
        }
      ],
      replyTo: null,
      replies: [
        {
          id: 2,
          person: {
            id: 104,
            name: "Carla Ruiz",
            position: "Asesora Legal",
            area: "Legal",
            numero: "3344556677",
            correo: "carla.ruiz@ejemplo.com"
          },
          subject: false,
          seccion: 4,
          pais: {
            id: 20,
            name: "Argentina"
          },
          subseccion1: 6,
          subseccion2: 9,
          content: "Este es el contenido de una respuesta al post original.",
          followUps: [],
          replyTo: null,
          replies: [],
          createdAt: new Date("2024-12-14T12:00:00Z")
        }
      ],
      createdAt: new Date("2024-12-14T09:00:00Z")
    },
    {
      id: 7,
      person: {
        id: 101,
        name: "Juan Pérez",
        position: "Gerente de Marketing",
        area: "Marketing",
        numero: "1234567890",
        correo: "juan.perez@ejemplo.com"
      },
      subject: true,
      seccion: 3,
      pais: {
        id: 10,
        name: "México"
      },
      subseccion1: 5,
      subseccion2: 8,
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
            correo: "ana.garcia@ejemplo.com"
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
            id: 103,
            name: "Luis Mendoza",
            position: "Analista de Datos",
            area: "Datos",
            numero: "1122334455",
            correo: "luis.mendoza@ejemplo.com"
          },
          content: "Este es otro comentario relacionado con el post.",
          expanded: true,
          isFromReply: true,
          createdAt: new Date("2024-12-14T11:00:00Z")
        }
      ],
      replyTo: null,
      replies: [
        {
          id: 2,
          person: {
            id: 104,
            name: "Carla Ruiz",
            position: "Asesora Legal",
            area: "Legal",
            numero: "3344556677",
            correo: "carla.ruiz@ejemplo.com"
          },
          subject: false,
          seccion: 4,
          pais: {
            id: 20,
            name: "Argentina"
          },
          subseccion1: 6,
          subseccion2: 9,
          content: "Este es el contenido de una respuesta al post original.",
          followUps: [],
          replyTo: null,
          replies: [],
          createdAt: new Date("2024-12-14T12:00:00Z")
        }
      ],
      createdAt: new Date("2024-12-14T09:00:00Z")
    },
    {
      id: 6,
      person: {
        id: 101,
        name: "Juan Pérez",
        position: "Gerente de Marketing",
        area: "Marketing",
        numero: "1234567890",
        correo: "juan.perez@ejemplo.com"
      },
      subject: true,
      seccion: 3,
      pais: {
        id: 10,
        name: "México"
      },
      subseccion1: 5,
      subseccion2: 8,
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
            correo: "ana.garcia@ejemplo.com"
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
            id: 103,
            name: "Luis Mendoza",
            position: "Analista de Datos",
            area: "Datos",
            numero: "1122334455",
            correo: "luis.mendoza@ejemplo.com"
          },
          content: "Este es otro comentario relacionado con el post.",
          expanded: true,
          isFromReply: true,
          createdAt: new Date("2024-12-14T11:00:00Z")
        }
      ],
      replyTo: null,
      replies: [
        {
          id: 2,
          person: {
            id: 104,
            name: "Carla Ruiz",
            position: "Asesora Legal",
            area: "Legal",
            numero: "3344556677",
            correo: "carla.ruiz@ejemplo.com"
          },
          subject: false,
          seccion: 4,
          pais: {
            id: 20,
            name: "Argentina"
          },
          subseccion1: 6,
          subseccion2: 9,
          content: "Este es el contenido de una respuesta al post original.",
          followUps: [],
          replyTo: null,
          replies: [],
          createdAt: new Date("2024-12-14T12:00:00Z")
        }
      ],
      createdAt: new Date("2024-12-14T09:00:00Z")
    },
    {
      id: 5,
      person: {
        id: 101,
        name: "Juan Pérez",
        position: "Gerente de Marketing",
        area: "Marketing",
        numero: "1234567890",
        correo: "juan.perez@ejemplo.com"
      },
      subject: true,
      seccion: 3,
      pais: {
        id: 10,
        name: "México"
      },
      subseccion1: 5,
      subseccion2: 8,
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
            correo: "ana.garcia@ejemplo.com"
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
            id: 103,
            name: "Luis Mendoza",
            position: "Analista de Datos",
            area: "Datos",
            numero: "1122334455",
            correo: "luis.mendoza@ejemplo.com"
          },
          content: "Este es otro comentario relacionado con el post.",
          expanded: true,
          isFromReply: true,
          createdAt: new Date("2024-12-14T11:00:00Z")
        }
      ],
      replyTo: null,
      replies: [
        {
          id: 2,
          person: {
            id: 104,
            name: "Carla Ruiz",
            position: "Asesora Legal",
            area: "Legal",
            numero: "3344556677",
            correo: "carla.ruiz@ejemplo.com"
          },
          subject: false,
          seccion: 4,
          pais: {
            id: 20,
            name: "Argentina"
          },
          subseccion1: 6,
          subseccion2: 9,
          content: "Este es el contenido de una respuesta al post original.",
          followUps: [],
          replyTo: null,
          replies: [],
          createdAt: new Date("2024-12-14T12:00:00Z")
        }
      ],
      createdAt: new Date("2024-12-14T09:00:00Z")
    },
    {
      id: 4,
      person: {
        id: 101,
        name: "Juan Pérez",
        position: "Gerente de Marketing",
        area: "Marketing",
        numero: "1234567890",
        correo: "juan.perez@ejemplo.com"
      },
      subject: true,
      seccion: 3,
      pais: {
        id: 10,
        name: "México"
      },
      subseccion1: 5,
      subseccion2: 8,
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
            correo: "ana.garcia@ejemplo.com"
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
            id: 103,
            name: "Luis Mendoza",
            position: "Analista de Datos",
            area: "Datos",
            numero: "1122334455",
            correo: "luis.mendoza@ejemplo.com"
          },
          content: "Este es otro comentario relacionado con el post.",
          expanded: true,
          isFromReply: true,
          createdAt: new Date("2024-12-14T11:00:00Z")
        }
      ],
      replyTo: null,
      replies: [
        {
          id: 2,
          person: {
            id: 104,
            name: "Carla Ruiz",
            position: "Asesora Legal",
            area: "Legal",
            numero: "3344556677",
            correo: "carla.ruiz@ejemplo.com"
          },
          subject: false,
          seccion: 4,
          pais: {
            id: 20,
            name: "Argentina"
          },
          subseccion1: 6,
          subseccion2: 9,
          content: "Este es el contenido de una respuesta al post original.",
          followUps: [],
          replyTo: null,
          replies: [],
          createdAt: new Date("2024-12-14T12:00:00Z")
        }
      ],
      createdAt: new Date("2024-12-14T09:00:00Z")
    },
    {
      id: 3,
      person: {
        id: 101,
        name: "Juan Pérez",
        position: "Gerente de Marketing",
        area: "Marketing",
        numero: "1234567890",
        correo: "juan.perez@ejemplo.com"
      },
      subject: true,
      seccion: 3,
      pais: {
        id: 10,
        name: "México"
      },
      subseccion1: 5,
      subseccion2: 8,
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
            correo: "ana.garcia@ejemplo.com"
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
            id: 103,
            name: "Luis Mendoza",
            position: "Analista de Datos",
            area: "Datos",
            numero: "1122334455",
            correo: "luis.mendoza@ejemplo.com"
          },
          content: "Este es otro comentario relacionado con el post.",
          expanded: true,
          isFromReply: true,
          createdAt: new Date("2024-12-14T11:00:00Z")
        }
      ],
      replyTo: null,
      replies: [
        {
          id: 2,
          person: {
            id: 104,
            name: "Carla Ruiz",
            position: "Asesora Legal",
            area: "Legal",
            numero: "3344556677",
            correo: "carla.ruiz@ejemplo.com"
          },
          subject: false,
          seccion: 4,
          pais: {
            id: 20,
            name: "Argentina"
          },
          subseccion1: 6,
          subseccion2: 9,
          content: "Este es el contenido de una respuesta al post original.",
          followUps: [],
          replyTo: null,
          replies: [],
          createdAt: new Date("2024-12-14T12:00:00Z")
        }
      ],
      createdAt: new Date("2024-12-14T09:00:00Z")
    },
    {
      id: 2,
      person: {
        id: 101,
        name: "Juan Pérez",
        position: "Gerente de Marketing",
        area: "Marketing",
        numero: "1234567890",
        correo: "juan.perez@ejemplo.com"
      },
      subject: true,
      seccion: 3,
      pais: {
        id: 10,
        name: "México"
      },
      subseccion1: 5,
      subseccion2: 8,
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
            correo: "ana.garcia@ejemplo.com"
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
            id: 103,
            name: "Luis Mendoza",
            position: "Analista de Datos",
            area: "Datos",
            numero: "1122334455",
            correo: "luis.mendoza@ejemplo.com"
          },
          content: "Este es otro comentario relacionado con el post.",
          expanded: true,
          isFromReply: true,
          createdAt: new Date("2024-12-14T11:00:00Z")
        }
      ],
      replyTo: null,
      replies: [
        {
          id: 2,
          person: {
            id: 104,
            name: "Carla Ruiz",
            position: "Asesora Legal",
            area: "Legal",
            numero: "3344556677",
            correo: "carla.ruiz@ejemplo.com"
          },
          subject: false,
          seccion: 4,
          pais: {
            id: 20,
            name: "Argentina"
          },
          subseccion1: 6,
          subseccion2: 9,
          content: "Este es el contenido de una respuesta al post original.",
          followUps: [],
          replyTo: null,
          replies: [],
          createdAt: new Date("2024-12-14T12:00:00Z")
        }
      ],
      createdAt: new Date("2024-12-14T09:00:00Z")
    },
    {
      id: 1,
      person: {
        id: 101,
        name: "Juan Pérez",
        position: "Gerente de Marketing",
        area: "Marketing",
        numero: "1234567890",
        correo: "juan.perez@ejemplo.com"
      },
      subject: true,
      seccion: 3,
      pais: {
        id: 10,
        name: "México"
      },
      subseccion1: 5,
      subseccion2: 8,
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
            correo: "ana.garcia@ejemplo.com"
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
            id: 103,
            name: "Luis Mendoza",
            position: "Analista de Datos",
            area: "Datos",
            numero: "1122334455",
            correo: "luis.mendoza@ejemplo.com"
          },
          content: "Este es otro comentario relacionado con el post.",
          expanded: true,
          isFromReply: true,
          createdAt: new Date("2024-12-14T11:00:00Z")
        }
      ],
      replyTo: null,
      replies: [
        {
          id: 2,
          person: {
            id: 104,
            name: "Carla Ruiz",
            position: "Asesora Legal",
            area: "Legal",
            numero: "3344556677",
            correo: "carla.ruiz@ejemplo.com"
          },
          subject: false,
          seccion: 4,
          pais: {
            id: 20,
            name: "Argentina"
          },
          subseccion1: 6,
          subseccion2: 9,
          content: "Este es el contenido de una respuesta al post original.",
          followUps: [],
          replyTo: null,
          replies: [],
          createdAt: new Date("2024-12-14T12:00:00Z")
        }
      ],
      createdAt: new Date("2024-12-14T09:00:00Z")
    },

  ];
  addReply(postId: number, replyContent: string) {
    const originalPost = this.posts.find((post) => post.id === postId);
    if (originalPost) {
      // Generar contenido combinado del mensaje original y sus seguimientos
      const originalContentWithFollowUps = this.buildContentWithFollowUps(originalPost);

      const newReply: Post = {
        id: this.nextId++, // ID único
        content: replyContent.trim(),
        person: {
          id: 3,
          name: 'Luis Raez',
          position: 'Analista Programador',
          area: 'Sistemas',
          numero: '',
          correo: 'sistemas4@consorcio-carolina.com',
        },
        subject: false, // Asumimos que es una respuesta, no un tema principal
        seccion: 0, // Puedes reemplazarlo con un valor válido según tu lógica
        pais: {
          id: 0, // Puedes ajustar según el país correspondiente
          name: ''
        },
        subseccion1: 0, // Reemplaza con el valor adecuado
        subseccion2: 0, // Reemplaza con el valor adecuado
        followUps: [],
        replyTo: originalPost,
        replies: [],
        createdAt: new Date()
      };


      // Combinar contenido del mensaje original con la nueva respuesta
      newReply.content = `
        Respuesta: ${replyContent} \n
        ------------------- \n
        Mensaje original al que se responde: \n
        ${originalContentWithFollowUps}
      `;

      // Relacionar la nueva respuesta con el post original
      originalPost.replies.push(newReply);

      // Agregar al listado de posts para que sea visible
      this.posts.unshift(newReply);
    }
  }

  // Construir contenido combinado del post original y sus seguimientos
  buildContentWithFollowUps(post: Post): string {
    let content = `
      Autor: ${post.person.name} \n
      Contenido: \n\t${post.content.split('\n').join('\n\t')} \n
    `;

    if (post.followUps.length > 0) {
      content += '\n--- Seguimientos ---\n';
      post.followUps.forEach((followUp, index) => {
        content += ` 
          Seguimiento ${index + 1} de la noticia numero ${followUp.idPost} por ${followUp.person.name}:\n\t${followUp.content}\n
        `;
      });
    }

    return content;
  }

  // Agregar un seguimiento a un post
  addFollowToPost(postId: number, followContent: string) {
    const post = this.posts.find((p) => p.id === postId);
    if (post) {
      const newFollow: FollowUp = {
        idFollow: this.nextId++, // Generar un ID único
        idPost: postId,
        person: {
          id: 3,
          name: 'Luis Raez',
          position: 'Analista Programador',
          area: 'Sistemas',
          numero: '',
          correo: 'sistemas4@consorcio-carolina.com',
        },
        content: followContent,
        expanded: true,
        createdAt: new Date(), // Guardar la fecha actual
      };
      post.followUps.push(newFollow); // Agregar al array de seguimientos del post
    }
  }

}

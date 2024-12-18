import { Component, Input, OnInit } from '@angular/core';
import { GLOBAL_IMPORTS } from '../../../global-imports';
import { CardsComponent } from '../../../Components/cards/cards.component';
import { FollowUp, Post } from './../../../Interfaces/Post.interface'; // Ajusta la ruta según sea necesario
import { PostsComponent } from '../../../Components/posts/posts.component';
import { SharedStateService } from '../../../Services/shared-state.service';
import { MessageService } from '../../../Services/message.service';


@Component({
  selector: 'app-news',
  imports: [GLOBAL_IMPORTS, CardsComponent, PostsComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {

  //posts: Post[] = []; // Lista de posts
  @Input() post: Post[] = [];
  filteredPosts: Post[] = [];
  showPost = false;
  maxId = 0;

  constructor(private sharedStateService: SharedStateService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.post = this.messageService.getPosts();
    this.sharedStateService.showPost$.subscribe((value) => {
      this.showPost = value;
    });
    this.maxId = this.getMaxId(this.post) + 1;

    // Aplicar el filtro directamente al obtener los posts
    this.applyFilter();
  }

  applyFilter() {
    this.filteredPosts = this.post.filter(post => !post.subject);
  }

  handleNewPost(post: string): void {

    const newReply: Post = {
      id: this.maxId++, // ID único
      content: post.trim(),
      person: {
        id: 16,
        name: 'CARLOS PALOMINO',
        position: 'Gerente',
        area: 'Sistemas',
        numero: '',
        correo: 'carlos.palomino@consorcio-carolina.com',
      },
      subject: false, // Asumimos que es una respuesta, no un tema principal
      seccion: 0, // Puedes reemplazarlo con un valor válido según tu lógica
      pais: [
        {
          id: 1, // Puedes ajustar según el país correspondiente
          name: 'Peru',
          subMenus:
            [
              {
                id: 1,
                name: "Fundo Don Edmundo",
                tercerNivel: []
              }
            ]
        }
      ],
      followUps: [],
      replyTo: null,
      replies: [],
      createdAt: new Date()
    };

    this.post.unshift(newReply);
  }


  getMaxId = (posts: Post[]): number => {
    return posts.reduce((maxId, post) => {
      return post.id > maxId ? post.id : maxId;
    }, 0);  // Inicializamos con 0 para que devuelva el mayor id
  }

  // Obtener el id más alto
  addReply(postId: number, replyContent: string) {
    const originalPost = this.post.find((post) => post.id === postId);
    if (originalPost) {
      // Generar contenido combinado del mensaje original y sus seguimientos
      const originalContentWithFollowUps = this.buildContentWithFollowUps(originalPost);

      const newReply: Post = {
        id: this.maxId++, // ID único
        content: replyContent.trim(),
        person: {
          id: 16,
          name: 'CARLOS PALOMINO',
          position: 'Gerente',
          area: 'Sistemas',
          numero: '',
          correo: 'carlos.palomino@consorcio-carolina.com',
        },
        subject: false, // Asumimos que es una respuesta, no un tema principal
        seccion: 0, // Puedes reemplazarlo con un valor válido según tu lógica
        pais: [
          {
            id: 1, // Puedes ajustar según el país correspondiente
            name: 'Peru',
            subMenus:
              [
                {
                  id: 1,
                  name: "Fundo Don Edmundo",
                  tercerNivel: []
                }
              ]
          }
        ],
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
      this.post.unshift(newReply);
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
    const post = this.post.find((p) => p.id === postId);
    if (post) {
      const newFollow: FollowUp = {
        idFollow: this.maxId++, // Generar un ID único
        idPost: postId,
        person: {
          id: 16,
          name: 'CARLOS PALOMINO',
          position: 'Gerente',
          area: 'Sistemas',
          numero: '',
          correo: 'carlos.palomino@consorcio-carolina.com',
        },
        content: followContent,
        expanded: true,
        createdAt: new Date(), // Guardar la fecha actual
      };
      post.followUps.push(newFollow); // Agregar al array de seguimientos del post
    }
  }

}

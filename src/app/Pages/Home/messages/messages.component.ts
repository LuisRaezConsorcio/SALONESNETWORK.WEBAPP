import { Component, Input, OnInit} from '@angular/core';
import { GLOBAL_IMPORTS } from '../../../global-imports';
import { CardsComponent } from '../../../Components/cards/cards.component';
import { FilterCriteria, FollowUp, Post } from '../../../Interfaces/Post.interface';
import { PostsComponent } from '../../../Components/posts/posts.component';
import { SharedStateService } from '../../../Services/shared-state.service';
import { Router } from '@angular/router';
import { MessageService } from '../../../Services/message.service';

@Component({
  selector: 'app-messages',
  imports: [GLOBAL_IMPORTS, CardsComponent, PostsComponent],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit {

  @Input() post: Post[] = [];
  filteredPosts: Post[] = [];
  showPost = true;

  maxId = 0;
  nextId: number = 2;

  constructor(
    private sharedStateService: SharedStateService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.post = this.messageService.getPosts();

    this.sharedStateService.showPost$.subscribe((value) => {
      this.showPost = value;
    });

    this.maxId = this.getMaxId(this.post) + 1;

    // Escuchar los posts filtrados
    this.messageService.filteredPosts$.subscribe((filteredPosts: Post[]) => {
      this.filteredPosts = filteredPosts;
    });
  }

  // Método para aplicar un filtro según los criterios
  applyFilter(criteria: Partial<FilterCriteria>) {
    this.filteredPosts = this.post.filter(post =>
      (criteria.subject === undefined || post.subject === criteria.subject) &&
      (criteria.seccion === undefined || post.seccion === criteria.seccion) &&
      (criteria.paisId === undefined || post.pais.some(p => p.id === criteria.paisId)) &&
      (criteria.subMenuId === undefined || post.pais.some(p => p.subMenus.some(s => s.id === criteria.subMenuId))) &&
      (criteria.personId === undefined || post.person.id === criteria.personId) &&
      (criteria.noticiaId === undefined || post.id === criteria.noticiaId) &&
      (criteria.startDate === undefined || new Date(post.createdAt) >= new Date(criteria.startDate)) &&
      (criteria.endDate === undefined || new Date(post.createdAt) <= new Date(criteria.endDate))
    );
  }

  // Manejo de la creación de un nuevo post
  handleNewPost(postContent: string): void {
    const newReply: Post = {
      id: this.maxId++, // ID único
      content: postContent.trim(),
      person: this.getCurrentUser(),
      subject: false,
      seccion: 0,
      pais: this.getDefaultPais(),
      followUps: [],
      replyTo: null,
      replies: [],
      createdAt: new Date(),
    };

    this.post.unshift(newReply); // Añadir al principio
  }

  // Obtener el máximo ID de los posts actuales
  getMaxId(posts: Post[]): number {
    return posts.reduce((maxId, post) => post.id > maxId ? post.id : maxId, 0);
  }

  // Agregar una respuesta a un post
  addReply(postId: number, replyContent: string) {
    const originalPost = this.post.find((post) => post.id === postId);
    if (originalPost) {
      const originalContentWithFollowUps = this.buildContentWithFollowUps(originalPost);

      const newReply: Post = {
        id: this.maxId++, 
        content: replyContent.trim(),
        person: this.getCurrentUser(),
        subject: true,
        seccion: 1,
        pais: this.getDefaultPais(),
        followUps: [],
        replyTo: originalPost,
        replies: [],
        createdAt: new Date(),
      };

      newReply.content = `Respuesta: ${replyContent} \n------------------- \nMensaje original al que se responde: \n${originalContentWithFollowUps}`;
      originalPost.replies.push(newReply);
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
      const newFollow = {
        idFollow: this.nextId++, 
        idPost: postId,
        person: this.getCurrentUser(),
        content: followContent,
        expanded: true,
        createdAt: new Date(),
      };
      post.followUps.push(newFollow);
    }
  }

  // Obtener el usuario actual
  private getCurrentUser() {
    return {
      id: 16,
      name: 'CARLOS PALOMINO',
      position: 'Gerente',
      area: 'Sistemas',
      numero: '',
      correo: 'carlos.palomino@consorcio-carolina.com',
    };
  }

  // Obtener país por defecto
  private getDefaultPais() {
    return [
      {
        id: 1,
        name: 'Peru',
        subMenus: [
          {
            id: 1,
            name: 'Fundo Don Edmundo',
            tercerNivel: [],
          },
        ],
      },
    ];
  }

}

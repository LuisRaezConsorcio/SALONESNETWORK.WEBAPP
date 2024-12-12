import { Component, OnInit } from '@angular/core';
import { GLOBAL_IMPORTS } from '../../../global-imports';
import { CardsComponent } from '../../../Components/cards/cards.component';
import { FollowUp, Post } from '../../../Interfaces/Post.interface';

@Component({
  selector: 'app-messages',
  imports: [GLOBAL_IMPORTS, CardsComponent],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

  nextId: number = 2;
  posts: Post[] = [
    {
      id: 1,
      title: 'Titulo del Post 1',
      content: 'contenido del Post 1 Lorem aifhias kjhk j j j j lkhjkh  Ipsssssssssssssssssssssssssssssum',
      person: {
        id: 2,
        name: 'Luis Raez',
        position: 'Programador',
        area: 'Sistemas b',
        numero: '',
        correo: '',
      },
      followUps: [
        {
          idFollow: 1,
          idPost: 1,
          person: {
            id: 1,
            name: 'Juan Pérez',
            position: 'Analista',
            area: 'Sistemas',
            numero: '',
            correo: '',
          },
          createdAt:new Date(),
          content: 'Este es el primer seguimiento',
          expanded: false,
        },
      ],
      replyTo: null,
      replies: [],
    },
  ];
  addReply(postId: number, replyContent: string) {
    const originalPost = this.posts.find((post) => post.id === postId);
    if (originalPost) {
      // Generar contenido combinado del mensaje original y sus seguimientos
      const originalContentWithFollowUps = this.buildContentWithFollowUps(originalPost);

      const newReply: Post = {
        id: this.nextId++, // ID único
        title: `Respuesta a: ${originalPost.title}`,
        content: replyContent.trim(),
        person: {
          id: 3,
          name: 'Carlos Rodriguez',
          position: 'Gerente',
          area: 'Sistemas c',
          numero: '',
          correo: '',
        },
        followUps: [],
        replyTo: originalPost,
        replies: [],
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
      Título: ${post.title} \n
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
        idFollow: Date.now(), // Generar un ID único
        idPost: postId,
        person: {
          id: 3,
          name: 'Carlos Rodriguez',
          position: 'Gerente',
          area: 'Sistemas C',
          numero: '',
          correo: '',
        },
        content: followContent,
        expanded: true,
        createdAt: new Date(), // Guardar la fecha actual
      };
      post.followUps.push(newFollow); // Agregar al array de seguimientos del post
    }
  }
  
  
}

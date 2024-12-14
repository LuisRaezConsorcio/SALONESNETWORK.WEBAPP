import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GLOBAL_IMPORTS } from '../../global-imports';


import { loadCKEditorCloud, CKEditorModule, type CKEditorCloudResult, type CKEditorCloudConfig } from '@ckeditor/ckeditor5-angular';
import type { ClassicEditor, EditorConfig } from 'https://cdn.ckeditor.com/typings/ckeditor5.d.ts';
import { ActivatedRoute } from '@angular/router';



import { FollowUp, Post } from '../../Interfaces/Post.interface';


@Component({
  selector: 'app-cards',
  imports: [GLOBAL_IMPORTS, CKEditorModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {

  @Input() post!: Post;
  @Output() addReply = new EventEmitter<string>();
  @Output() addFollow = new EventEmitter<string>();

  nextId: number = 2;
  followContent: string = '';
  replyContent: string = '';
  openReply: boolean = false;
  openFollow: boolean = false;

  posts: Post[] = [];

  
  titulo: string = '';

  constructor(
    private route: ActivatedRoute
  ) { }

  public ngOnInit(): void {

    this.route.url.subscribe(urlSegments => {
      const rutaActual = urlSegments[0].path;

      // Cambiar el título basado en la ruta
      if (rutaActual === 'Noticias') {
        this.titulo = 'Revisa las Noticias Generales';
      } else if (rutaActual === 'Mensajes') {
        this.titulo = 'Revisa los Mensajes del Area';
      } else {
        this.titulo = 'Título por defecto';
      }
    });
  }


  



  // Datos del post
  postData = {
    user: {
      name: 'Juan Pérez',
      profilePicture: 'assets/images/logo-solo-sin-fondo.png',
    },
    timestamp: new Date(),
    content: `
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illum cum cupiditate fugiat repellendus, praesentium id dolores doloremque tempora recusandae quibusdam molestias iure, consectetur, aliquam debitis! Magnam omnis necessitatibus nisi!</p>
              <table>
                <tr><th>Columna 1</th><th>Columna 2</th></tr>
                <tr><td>Dato 1</td><td>Dato 2</td></tr>
              </table>`,
    image: 'assets/images/logo-login-2024.png',
    comments: [
      {
        user: { name: 'Ana Gómez', profilePicture: 'assets/images/logo-solo-sin-fondo.png' },
        content: '¡Muy interesante!',
        replies: [],
        reply: '',
        showReplyBox: false,
      },
    ],
  };

  // Nuevo comentario
  newComment = '';

  addComment(): void {
    if (this.newComment.trim()) {
      this.postData.comments.push({
        user: { name: 'Tú', profilePicture: 'assets/images/logo-solo-sin-fondo.png' },
        content: this.newComment,
        replies: [],
        reply: '',
        showReplyBox: false,
      });
      this.newComment = '';
    }
  }

  toggleReplyBox(comment: any): void {
    comment.showReplyBox = !comment.showReplyBox;
  }


  sendReply() {
    if (this.replyContent.trim()) {
      this.addReply.emit(this.replyContent);
      this.replyContent = '';
      this.openReply = false;
    }
  }

  addFollowToPost() {
    if (this.followContent.trim()) {
      this.addFollow.emit(this.followContent);
      this.followContent = '';
      this.openFollow = false;
    }
  }

  toggleReply() {
    this.openReply = !this.openReply;
    if (this.openReply) this.openFollow = false;
  }

  toggleFollow() {
    this.openFollow = !this.openFollow;
    if (this.openFollow) this.openReply = false;
  }


}

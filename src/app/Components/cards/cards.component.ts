import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GLOBAL_IMPORTS } from '../../global-imports';


import { loadCKEditorCloud, CKEditorModule, type CKEditorCloudResult, type CKEditorCloudConfig } from '@ckeditor/ckeditor5-angular';
import type { ClassicEditor, EditorConfig } from 'https://cdn.ckeditor.com/typings/ckeditor5.d.ts';
import { ActivatedRoute, Router } from '@angular/router';



import { FilterCriteria, FollowUp, Post } from '../../Interfaces/Post.interface';
import { MessageService } from '../../Services/message.service';
import { DataTransferService } from '../../Services/data-transfer.service';
import { BreadcrumbsService } from '../../Services/breadcrumbs.service';


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
  activacion: boolean = false;
  //posts: Post[] = [];



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService, private dataTransfer: DataTransferService,
    private breadcrumbsService:BreadcrumbsService
  ) { }

  public ngOnInit(): void {

    this.breadcrumbsService.activacion$.subscribe((activacion) => {
      this.activacion = activacion;
    });
  }

  navigateToSubject(idseccion:number,nameSeccion:string,paisid:number,paisname:string, idsubmenu:number,submenuname:string,nivelid?:number, nivelname?:string): void {
    //this.dataTransfer.setData(post); // Enviar los datos al servicio


    // Definir los parámetros que deseas pasar
  const seccion = nameSeccion;
  const seccionid = idseccion;  // Suponiendo que este es el id de la sección
  const country = paisname;
  const countryid = paisid;  // El id del país
  const submenu = submenuname;
  const submenuid = idsubmenu;  // El id del submenu
  const tercernivel = nivelname;
  const tercernivelid = nivelid;  // El id del tercer nivel

  // Guardar los parámetros en el servicio
  this.dataTransfer.selectTitles(seccion, seccionid, country, countryid, submenu, submenuid, tercernivel, tercernivelid);

  // Redirigir a 'AsuntosComponent' sin pasar parámetros en la URL

    this.router.navigate(['Home','Asuntos']); // Redirigir al componente `subject`

    
         let title = 'Mis Mensajes';
         let title2='Nuevo Mensaje';
  
         let activacion = true;
      this.breadcrumbsService.setStringList(title,title2,activacion);
    
  }

  navigateToNews():void{
    this.router.navigate(['Home']);
  }

  redireccionar(personid: number, seccion: number, pais: number, submenu: number, tercerNivel?: number): void {


    const filterCriteria: FilterCriteria = {
      subject: true,
      seccion: seccion,
      paisId: pais,
      subMenuId: submenu,
      tercerNivelId: tercerNivel,
      personId: personid, // Añadir el personId
      noticiaId: undefined,
      startDate: undefined,
      endDate: undefined,
    };
    this.messageService.setTempFilterCriteria(filterCriteria);
    this.router.navigate(['/home/asuntos/mensajes']).then(() => {
      console.log('Redirigido correctamente');
    }).catch((error) => {
      console.error('Error al redirigir:', error);
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

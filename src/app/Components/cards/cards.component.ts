import { Component, OnInit } from '@angular/core';
import { GLOBAL_IMPORTS } from '../../global-imports';


import { loadCKEditorCloud, CKEditorModule, type CKEditorCloudResult, type CKEditorCloudConfig } from '@ckeditor/ckeditor5-angular';
import type { ClassicEditor, EditorConfig } from 'https://cdn.ckeditor.com/typings/ckeditor5.d.ts';
import { ActivatedRoute } from '@angular/router';

const LICENSE_KEY =
	'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3MzM2MTU5OTksImp0aSI6ImI5OTY5YTJmLTliMTMtNDZlZS1hYWUwLWU5Y2QwMTQzNzU1OSIsImxpY2Vuc2VkSG9zdHMiOlsiKi53ZWJjb250YWluZXIuaW8iLCIqLmpzaGVsbC5uZXQiLCIqLmNzcC5hcHAiLCJjZHBuLmlvIiwiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIiwic2giXSwibGljZW5zZVR5cGUiOiJldmFsdWF0aW9uIiwidmMiOiIzMWU2ODdmNiJ9._IV147cjEP18CRYKz9KAB2cAw8oM2SKmpMBsSqomU-HC5TR_r6VQtSykEZQOFnMw8lV_PYnFMnPURROejux7Ig';

const cloudConfig = {
	version: '44.0.0'
} satisfies CKEditorCloudConfig;

@Component({
	selector: 'app-cards',
	imports: [GLOBAL_IMPORTS, CKEditorModule],
	templateUrl: './cards.component.html',
	styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {

	public Editor: typeof ClassicEditor | null = null;
	public config: EditorConfig | null = null;
	titulo: string = '';

	constructor(
		private route: ActivatedRoute
	) { }

	public ngOnInit(): void {
		loadCKEditorCloud(cloudConfig).then(this._setupEditor.bind(this));

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


	private _setupEditor(cloud: CKEditorCloudResult<typeof cloudConfig>) {
		const {
			ClassicEditor,
			Autosave,
			BlockQuote,
			Bold,
			Essentials,
			Heading,
			Indent,
			IndentBlock,
			Italic,
			Link,
			Paragraph,
			SpecialCharacters,
			Table,
			TableCaption,
			TableCellProperties,
			TableColumnResize,
			TableProperties,
			TableToolbar,
		} = cloud.CKEditor;

		this.Editor = ClassicEditor;
		this.config = {
			toolbar: {
				items: [
					'heading',
					'|',
					'bold',
					'italic',
					'underline',
					'|',
					'specialCharacters',
					'link',
					'insertTable',
					'blockQuote',
					'|',
					'outdent',
					'indent'
				],
				shouldNotGroupWhenFull: false
			},
			plugins: [
				Autosave,
				BlockQuote,
				Bold,
				Essentials,
				Heading,
				Indent,
				IndentBlock,
				Italic,
				Link,
				Paragraph,
				SpecialCharacters,
				Table,
				TableCaption,
				TableCellProperties,
				TableColumnResize,
				TableProperties,
				TableToolbar
			],
			heading: {
				options: [
					{
						model: 'paragraph',
						title: 'Paragraph',
						class: 'ck-heading_paragraph'
					},
					{
						model: 'heading1',
						view: 'h1',
						title: 'Heading 1',
						class: 'ck-heading_heading1'
					},
					{
						model: 'heading2',
						view: 'h2',
						title: 'Heading 2',
						class: 'ck-heading_heading2'
					},
					{
						model: 'heading3',
						view: 'h3',
						title: 'Heading 3',
						class: 'ck-heading_heading3'
					},
					{
						model: 'heading4',
						view: 'h4',
						title: 'Heading 4',
						class: 'ck-heading_heading4'
					},
					{
						model: 'heading5',
						view: 'h5',
						title: 'Heading 5',
						class: 'ck-heading_heading5'
					},
					{
						model: 'heading6',
						view: 'h6',
						title: 'Heading 6',
						class: 'ck-heading_heading6'
					}
				]
			},
			initialData:
				'',
			licenseKey: LICENSE_KEY,
			link: {
				addTargetToExternalLinks: true,
				defaultProtocol: 'https://',
				decorators: {
					toggleDownloadable: {
						mode: 'manual',
						label: 'Downloadable',
						attributes: {
							download: 'file'
						}
					}
				}
			},
			placeholder: 'Redacta una nueva Noticia!',
			table: {
				contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
			}
		};
	}


	tags: string[] = [];
	tagInput: string = '';
	selectedFiles: File[] = [];

	addTag(event: KeyboardEvent): void {
		event.preventDefault();
		if (this.tagInput.trim()) {
			this.tags.push(this.tagInput.trim());
			this.tagInput = '';
		}
	}

	removeTag(tag: string): void {
		this.tags = this.tags.filter(t => t !== tag);
	}

	onFileSelected(event: Event): void {
		const input = event.target as HTMLInputElement;
		if (input.files) {
			for (let i = 0; i < input.files.length; i++) {
				this.selectedFiles.push(input.files[i]);
			}
		}
	}

	// Elimina un archivo de la lista
	removeFile(index: number): void {
		this.selectedFiles.splice(index, 1);
	}

	submitPost(): void {
		const postData = {
			//  content: this.postContent,
			tags: this.tags,
			files: this.selectedFiles
		};
		console.log('Post Data:', postData);
		// Aquí puedes enviar los datos al servidor o procesarlos.
	}

	getFileIcon(file: File): string {
		const fileType = file.type;
		if (fileType.includes('image')) {
			return 'fas fa-file-image text-black-500';
		} else if (
			fileType.includes('pdf') ||
			fileType.includes('html')
		) {
			return 'fas fa-file-pdf text-red-500';
		} else if (
			fileType.includes('excel') ||
			fileType.includes('spreadsheet')
		) {
			return 'fas fa-file-excel text-green-500';
		}
		else if (fileType.includes('word')) {
			return 'fas fa-file-word text-blue-500';
		}
		else if (file.name.endsWith('.txt')) {
			return 'fas fa-file-alt text-gray-700';
		}
		else {
			return 'fas fa-file text-gray-500';
		}
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

	addReply(comment: any): void {
		if (comment.reply.trim()) {
			comment.replies.push({
				user: { name: 'Tú', profilePicture: 'assets/images/logo-solo-sin-fondo.png' },
				content: comment.reply,
			});
			comment.reply = '';
			comment.showReplyBox = false;
		}
	}



}

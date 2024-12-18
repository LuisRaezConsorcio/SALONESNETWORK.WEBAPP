import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CKEditorCloudConfig, CKEditorCloudResult, CKEditorModule, loadCKEditorCloud } from '@ckeditor/ckeditor5-angular';
import { ClassicEditor, EditorConfig } from 'ckeditor5';
import { GLOBAL_IMPORTS } from '../../global-imports';

const LICENSE_KEY =
  'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3MzQyMjA3OTksImp0aSI6ImJlM2I4OGQ2LWIyZjUtNGY5OS1iNDhiLTRkYWQ0NmIwYWViMyIsImxpY2Vuc2VkSG9zdHMiOlsiKi53ZWJjb250YWluZXIuaW8iLCIqLmpzaGVsbC5uZXQiLCIqLmNzcC5hcHAiLCJjZHBuLmlvIiwiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIiwic2giXSwibGljZW5zZVR5cGUiOiJldmFsdWF0aW9uIiwidmMiOiI5ZmNlYjI5ZCJ9.Loaub6V2_X9gLTPYVp6kJ5Uxfx8Xa0R1yOj3gvOkMv89euNzGCiMHD1Nh6plahOWY2_csuyD63founYZcLajVw';



const cloudConfig = {
  version: '44.0.0'
} satisfies CKEditorCloudConfig;

@Component({
  selector: 'app-posts',
  imports: [GLOBAL_IMPORTS, CKEditorModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{
  
  @Output() newPostCreated = new EventEmitter<string>();

  public Editor: typeof ClassicEditor | null = null;
  public config: EditorConfig | null = null;
  
  editorContent: string = ''; // Almacena el contenido del editor

  public ngOnInit(): void {
    loadCKEditorCloud(cloudConfig).then(this._setupEditor.bind(this));

   
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

  submitPost(){
    if (!this.editorContent.trim()) {
      console.warn('El contenido no puede estar vacío.');
      return;
    }
    else{
      this.newPostCreated.emit(this.editorContent);
      this.editorContent = '';

    }

  
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

}

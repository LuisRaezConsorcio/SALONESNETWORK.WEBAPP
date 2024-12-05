import {Routes} from '@angular/router'

export default [
    {
        path: '',
        loadComponent: () =>
            import('./home/home.component').then((m) => m.HomeComponent),
        children: [
            {
                path: 'News',
                loadComponent: () =>
                    import('./news/news.component').then((m) => m.NewsComponent),
            },
            {
                path: 'Subjects',
                loadComponent: () =>
                    import('./subject/subject.component').then((m) => m.SubjectComponent),
                children:[
                    {
                        path: 'Messages',
                        loadComponent: () =>
                            import('./messages/messages.component').then((m) => m.MessagesComponent),
                    },
                ]
            },
        ]
    },
    
] as Routes;
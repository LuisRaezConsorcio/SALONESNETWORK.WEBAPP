import { Routes } from '@angular/router'

export default [
    {
        path: '',
        loadComponent: () =>
            import('./home/home.component').then((m) => m.HomeComponent),
        children: [
            {
                path: 'Noticias',
                data: { breadcrumb: 'Noticias' },
                loadComponent: () =>
                    import('./news/news.component').then((m) => m.NewsComponent),
            },
            {
                path: 'Asuntos',
                data: { breadcrumb: 'Asuntos' },
                loadComponent: () =>
                    import('./subject/subject.component').then((m) => m.SubjectComponent),
                children: [
                    {
                        path: 'Mensajes',
                        data: { breadcrumb: 'Mensajes' },

                        loadComponent: () =>
                            import('./messages/messages.component').then((m) => m.MessagesComponent),
                    },
                ]
            },
        ]
    },

] as Routes;
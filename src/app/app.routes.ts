import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    title: 'Andrzej Musłkuł - Twój wąsaty trener personalny',
  },
  {
    path: 'achievements',
    redirectTo: 'about',
  },
  {
    path: 'transformations',
    loadComponent: () =>
      import('./pages/transformations/transformations').then((m) => m.Transformations),
    title: 'Andrzej Musłkuł - Przemiany',
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery').then((m) => m.Gallery),
    title: 'Andrzej Musłkuł - Galeria',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
    title: 'Andrzej Musłkuł - O mnie',
  },
  {
    path: 'training',
    redirectTo: 'get-in-touch',
  },
  {
    path: 'get-in-touch',
    loadComponent: () => import('./pages/get-in-touch/get-in-touch').then((m) => m.GetInTouch),
    title: 'Andrzej Musłkuł - Kontakt',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

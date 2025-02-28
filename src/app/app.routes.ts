import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'personajes',
    loadComponent: () => import('./pages/personajes/personajes.page').then( m => m.PersonajesPage)
  },
  {
    path: 'momentos',
    loadComponent: () => import('./pages/momentos/momentos.page').then( m => m.MomentosPage)
  },
  {
    path: 'informacion',
    loadComponent: () => import('./pages/informacion/informacion.page').then( m => m.InformacionPage)
  },
  {
    path: 'vida',
    loadComponent: () => import('./pages/vida/vida.page').then( m => m.VidaPage)
  },
  {
    path: 'contratame',
    loadComponent: () => import('./pages/contratame/contratame.page').then( m => m.ContratamePage)
  },
  {
    path: 'psj1',
    loadComponent: () => import('./pages/psjdetalle/psj1/psj1.page').then( m => m.Psj1Page)
  },
  {
    path: 'psj2',
    loadComponent: () => import('./pages/psjdetalle/psj2/psj2.page').then( m => m.Psj2Page)
  },
  {
    path: 'psj3',
    loadComponent: () => import('./pages/psjdetalle/psj3/psj3.page').then( m => m.Psj3Page)
  },
  {
    path: 'momento1',
    loadComponent: () => import('./pages/momentodetalle/momento1/momento1.page').then( m => m.Momento1Page)
  },
  {
    path: 'momento2',
    loadComponent: () => import('./pages/momentodetalle/momento2/momento2.page').then( m => m.Momento2Page)
  },
  {
    path: 'momento3',
    loadComponent: () => import('./pages/momentodetalle/momento3/momento3.page').then( m => m.Momento3Page)
  },
];

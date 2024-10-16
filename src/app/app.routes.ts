import { Routes } from '@angular/router';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children:[
            {
                path:'',
                loadComponent: () => import ('./domains/general/pages/home/home.component').then(m => m.HomeComponent)
            },
            {
                path:'equipo/:bdid',
                loadComponent: () => import ('./domains/general/pages/team-detail/team-detail.component').then(m => m.TeamDetailComponent)
            },
            {
                path:'tabla',
                loadComponent: () => import ('./domains/general/pages/position-table/position-table.component').then(m => m.PositionTableComponent)
            },
            {
                path:'estadistica',
                loadComponent: () => import ('./domains/general/pages/stat/stat.component').then(m => m.StatComponent)
            },
            {
                path:'descarga',
                loadComponent: () => import ('./domains/general/pages/download/download.component').then(m => m.DownloadComponent)
            },
            {
                path:'calendario',
                loadComponent: () => import ('./domains/general/pages/schedule/schedule.component').then(m => m.ScheduleComponent)
            },
            {
                path:'acerca',
                loadComponent: () => import ('./domains/general/pages/about/about.component').then(m => m.AboutComponent)
            }
        ]
    }
];

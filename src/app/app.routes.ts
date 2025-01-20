import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'transferencia',
        loadChildren: () => import('./transferencia/transferencia.routes').then(r => r.TRANSFERENCIA_ROUTES)
    },
    {
        path: 'conta',
        loadChildren: () => import('./conta/conta.routes').then(c => c.CONTA_ROUTES)
    },
];

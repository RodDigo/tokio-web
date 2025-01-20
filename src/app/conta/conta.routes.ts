import { Routes } from '@angular/router';
import { ContaComponent } from './contas/conta.component';
import { NovaContaComponent } from './nova-conta/nova-conta.component';

export const CONTA_ROUTES: Routes = [ 
    { path: 'getContas', component: ContaComponent },
    { path: 'createConta', component: NovaContaComponent },
]
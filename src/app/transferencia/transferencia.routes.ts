import { Routes } from '@angular/router';

import { TransferenciaComponent } from './transferencias/transferencia.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';

export const TRANSFERENCIA_ROUTES: Routes = [ 
    { path: 'getTransferencias', component: TransferenciaComponent },
    { path: 'createTransferencia', component: NovaTransferenciaComponent },
]
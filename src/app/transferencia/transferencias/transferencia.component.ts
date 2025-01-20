import { Component, inject, OnInit } from '@angular/core';
import { Transferencia } from '../model/transferencia';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../components/table/table.component';
import { TransferenciaService } from '../transferencia.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transferencia',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './transferencia.component.html',
  styleUrl: './transferencia.component.css'
})
export class TransferenciaComponent implements OnInit {

  transferenciaService = inject(TransferenciaService);
  transferencias: Observable<Transferencia[]>;

  ngOnInit(): void {
    this.transferencias = this.transferenciaService.listall();
  }

}

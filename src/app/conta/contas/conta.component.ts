import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ContaService } from '../conta.service';
import { Observable } from 'rxjs';
import { Conta } from '../model/conta';
import { TableComponent } from '../components/table/table.component';

@Component({
  selector: 'app-conta',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './conta.component.html',
  styleUrl: './conta.component.css'
})
export class ContaComponent implements OnInit {

  contaService = inject(ContaService);
  contas: Observable<Conta[]>;

  ngOnInit(): void {
    this.contas = this.contaService.listall();
  }


}

import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TransferenciaService } from '../transferencia.service';
import { Transferencia } from '../model/transferencia';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../components/table/table.component';
import { ContaService } from '../../conta/conta.service';
import { Observable } from 'rxjs';
import { Conta } from '../../conta/model/conta';

@Component({
  selector: 'app-nova-transferencia',
  standalone: true,
  imports: [CommonModule, TableComponent, ReactiveFormsModule],
  templateUrl: './nova-transferencia.component.html',
  styleUrl: './nova-transferencia.component.css'
})
export class NovaTransferenciaComponent implements OnInit {

  @Input() formGroup: FormGroup;

  contaService = inject(ContaService);
  origemSelected: number;
  destinoSelected: number;

  contas: Observable<Conta[]>;

  transferenciaService = inject(TransferenciaService);
  protected transferencia: Transferencia;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      valor: new FormControl('', [Validators.required]),
      dtTransferencia: new FormControl('', [Validators.required]),
    });
    this.contas = this.contaService.listall();
  }

  save() {
    if (this.formGroup.valid && this.origemSelected != undefined && this.destinoSelected != undefined) {
     
      this.transferencia = this.formGroup.value;
      this.transferencia.idContaOrigem = this.origemSelected;
      this.transferencia.idContaDestino = this.destinoSelected;
  
      this.transferenciaService.create(this.transferencia);
      alert("Salvo com sucesso");

    } else {
      alert("Dados não válidos...!!!");
    }
  }

  onSelectedOrigen(idOrigem: any) {
    this.origemSelected  = idOrigem.id
    console.log(idOrigem)
  }

  onSelectedDestino(isDestino: any) {
    this.destinoSelected  = isDestino.id
    console.log(isDestino)
  }

}

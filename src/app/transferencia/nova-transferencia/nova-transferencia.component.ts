import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TransferenciaService } from '../transferencia.service';
import { Transferencia } from '../model/transferencia';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../components/table/table.component';

@Component({
  selector: 'app-nova-transferencia',
  standalone: true,
  imports: [CommonModule, TableComponent, ReactiveFormsModule],
  templateUrl: './nova-transferencia.component.html',
  styleUrl: './nova-transferencia.component.css'
})
export class NovaTransferenciaComponent implements OnInit {

  @Input() formGroup: FormGroup;

  transferenciaService = inject(TransferenciaService);
  protected transferencia: Transferencia;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      valor: new FormControl('', []),
      dtTransferencia: new FormControl('', []),
    });
  }

  save() {
    this.transferencia = this.formGroup.value;
    this.transferenciaService.create(this.transferencia);
    alert("Salvo com sucesso");
  }

}

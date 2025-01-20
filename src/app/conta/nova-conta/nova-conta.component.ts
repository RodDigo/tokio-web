import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContaService } from '../conta.service';
import { Conta } from '../model/conta';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../components/table/table.component';

@Component({
  selector: 'app-nova-conta',
  standalone: true,
  imports: [CommonModule, TableComponent, ReactiveFormsModule],
  templateUrl: './nova-conta.component.html',
  styleUrl: './nova-conta.component.css'
})
export class NovaContaComponent implements OnInit{
 
  @Input() formGroup: FormGroup;

  contaService = inject(ContaService);
  protected conta: Conta;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      valor: new FormControl('', [Validators.required]),
      titular: new FormControl('', [Validators.required]),
    });
  }

  save() {
    if (this.formGroup.valid) {
      this.contaService.create(this.conta);
    }else {
      alert("Dados invalidos")
    }

  }

}

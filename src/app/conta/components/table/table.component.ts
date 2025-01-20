import { AsyncPipe, CommonModule } from "@angular/common";
import { Input } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { Conta } from "../../model/conta";



@Component({
    selector: 'app-table',
    standalone: true,
    imports: [AsyncPipe, FormsModule, ReactiveFormsModule, CommonModule],
    templateUrl: './table.component.html',
    styleUrl: './table.component.css'
  })
  export class TableComponent {
    @Input() contas: Observable<Conta[]>;
  }
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaContaComponent } from './nova-conta.component';

describe('NovaContaComponent', () => {
  let component: NovaContaComponent;
  let fixture: ComponentFixture<NovaContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaContaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

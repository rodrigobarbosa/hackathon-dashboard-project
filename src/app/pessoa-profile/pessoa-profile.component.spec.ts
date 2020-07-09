import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaProfileComponent } from './pessoa-profile.component';

describe('PessoaProfileComponent', () => {
  let component: PessoaProfileComponent;
  let fixture: ComponentFixture<PessoaProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisProcuradosComponent } from './mais-procurados.component';

describe('MaisProcuradosComponent', () => {
  let component: MaisProcuradosComponent;
  let fixture: ComponentFixture<MaisProcuradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaisProcuradosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaisProcuradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioComponent } from './gestio.component';

describe('GestioComponent', () => {
  let component: GestioComponent;
  let fixture: ComponentFixture<GestioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablagestionComponent } from './tablagestion.component';

describe('TablagestionComponent', () => {
  let component: TablagestionComponent;
  let fixture: ComponentFixture<TablagestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablagestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablagestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

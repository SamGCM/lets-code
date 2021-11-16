import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFirstComponent } from './component-first.component';

describe('ComponentFirstComponent', () => {
  let component: ComponentFirstComponent;
  let fixture: ComponentFixture<ComponentFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

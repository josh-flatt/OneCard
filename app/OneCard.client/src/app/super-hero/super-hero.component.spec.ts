import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroComponent } from './super-hero.component';

describe('SuperHeroComponent', () => {
  let component: SuperHeroComponent;
  let fixture: ComponentFixture<SuperHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

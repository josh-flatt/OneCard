import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserProfileComponent } from './create-user-profile.component';

describe('CreateUserProfileComponent', () => {
  let component: CreateUserProfileComponent;
  let fixture: ComponentFixture<CreateUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUserProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisternewsimComponent } from './registernewsim.component';

describe('RegisternewsimComponent', () => {
  let component: RegisternewsimComponent;
  let fixture: ComponentFixture<RegisternewsimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisternewsimComponent]
    });
    fixture = TestBed.createComponent(RegisternewsimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

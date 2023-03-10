import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailPageComponent } from './student-detail-page.component';

xdescribe('StudentDetailPageComponent', () => {
  let component: StudentDetailPageComponent;
  let fixture: ComponentFixture<StudentDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

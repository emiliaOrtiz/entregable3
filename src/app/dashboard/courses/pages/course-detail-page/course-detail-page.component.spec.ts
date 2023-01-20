import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { RouterTestingModule } from '@angular/router/testing';
import { CursoDialogComponent } from './course-detail-page.component';

xdescribe('CourseDetailPageComponent', () => {
  let component: CursoDialogComponent;
  let fixture: ComponentFixture<CursoDialogComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}


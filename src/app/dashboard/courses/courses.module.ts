import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoDialogComponent } from './pages/course-detail-page/course-detail-page.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list'
import { CursosComponent } from './pages/courses-page/courses-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';



 


@NgModule({
  declarations: [
    CursoDialogComponent,
    CursosComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    MatExpansionModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatFormFieldModule

  ],
  exports:[
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    MatExpansionModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
  ]
})
export class CoursesModule { }

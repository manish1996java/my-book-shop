import { NgModule } from '@angular/core';
import {MatSliderModule, MatCardModule, MatIconModule, MatButtonModule, MatExpansionModule, MatSidenavModule, MatTabGroup, MatTabsModule, MatPaginator, MatPaginatorModule, MatListModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material'
import {MatFileUploadModule} from 'angular-material-fileupload'

const materials = [
  MatSliderModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatExpansionModule,
  MatSidenavModule,
  MatTabsModule,
  MatPaginatorModule,
  MatListModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatFileUploadModule,
  MatSelectModule

]


@NgModule({
  imports: materials,
  exports: materials
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule} from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { CellCustomComponent } from './cell-custom/cell-custom.component';
import { MovieService } from '../movie.service';





@NgModule({
  declarations: [HomePageComponent, SearchComponent, DetailsComponent, CellCustomComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      {path:'details/:id',component:DetailsComponent},
      {path:'search',component:SearchComponent},



    ]),
    AgGridModule.withComponents([SearchComponent])
  ],
  entryComponents:[CellCustomComponent],
  providers:[MovieService]

})
export class HomeModule { }

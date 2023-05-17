import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogItemImageDetailsComponent} from "./components/blog-item-image-details/blog-item-image-details.component";

const routes: Routes = [
  {
    path: 'blog/detail/:id',
    component: BlogItemImageDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

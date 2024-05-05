import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreatPostComponent} from "./pages/creat-post/creat-post.component";
import {ShowAllComponent} from "./pages/show-all/show-all.component";
import {ViewPostComponent} from "./pages/view-post/view-post.component";
import {SearchByNameComponent} from "./search-by-name/search-by-name.component";

const routes: Routes = [

  {path: "" , component: ShowAllComponent},
  {path: "create-post" , component: CreatPostComponent},
  {path: "show-all" , component: ShowAllComponent},
  {path: "view-post/:id" , component: ViewPostComponent},
  {path: "search-by-name" , component: SearchByNameComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

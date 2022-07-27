import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from "./user-list/user-list.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {UserDetailResolverService} from "./user-detail-resolver.service";

const routes: Routes = [

  {path:'', children: [

      // Страница /users
      {path: 'users', component: UserListComponent},

      // Страница /user/1 детали пользователя
      {path: 'user/:id', component: UserDetailComponent, resolve: { user: UserDetailResolverService }},

    ]},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

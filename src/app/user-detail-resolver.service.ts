import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {EMPTY, mergeMap, Observable, of, take} from "rxjs";
import {UserService} from "./user.service";
import {User} from "./model/user";

@Injectable({
  providedIn: 'root'
})
export class UserDetailResolverService implements Resolve<User>{

  constructor(private service: UserService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {

    const id = route.paramMap.get('id')!;

    return this.service.getUser(id).pipe(

      take(1),
      mergeMap(user => {

        if (user) {
          return of(user);
        } else { // id not found
          this.router.navigate(['/']);
          return EMPTY;
        }

      })

    );

  }
}

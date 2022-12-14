import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.get("http://wd.etsisi.upm.es:10000/users/login?username="+user.username+"&password="+user.password);
  }

  register(user: any): Observable<any> {
    return this.http.post("http://wd.etsisi.upm.es:10000/users", user);
  }
}

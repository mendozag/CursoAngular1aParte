import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../components/usuarios/usuarios";

@Injectable({
  providedIn: "root"
})
export class UserService {
  public baseUrl = environment.apiUrl + "users/";
  //public baseUrl = "https://reqres.in/api/users/";

  constructor(private _http: HttpClient) {
    console.log("Base Url: ", this.baseUrl);
  }

  getUser(userId: string): Observable<User> {
    const url = this.baseUrl + userId;
    console.log("URL: ", url);
    return this._http.get<User>(url);

    //return this._http.get<User>(url);
  }
}

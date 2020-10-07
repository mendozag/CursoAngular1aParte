import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "departamentosComponent",
  templateUrl: "./departamentos.component.html"
})
export class DepartamentosComponent implements OnInit {
  public titulo: string;
  public users: any;

  constructor(private _http: HttpClient, private _router: Router) {
    this.titulo = "Departamentos";
    this._http.get("https://jsonplaceholder.typicode.com/users").subscribe(
      data => {
        console.log(data);
        console.log();
        this.users = data;
        console.log("Usuarios: ", this.users);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        console.log(err.message);
      },
      () => {
        console.log("Peticion Finalizo");
      }
    );
  }

  ngOnInit() {}

  redirigir(id: string) {
    this._router.navigate(["/usuarios/", id]);
  }
}

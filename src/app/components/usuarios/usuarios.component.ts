import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { UserService } from "../../services/user.service";
import { User } from "./usuarios";

@Component({
  selector: "usuariosComponent",
  templateUrl: "./usuarios.component.html"
})
export class UsuariosComponent implements OnInit {
  public titulo: string;
  public parametro;
  public user: User;
  public usersV2: any;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.titulo = "Usuarios";
    //console.log(this.titulo);
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.parametro = params["id"];
    });
    console.log("Parametro: ", this.parametro);
    if (this.parametro != null) {
      this.getUser(this.parametro);
    }
  }

  getUser(userId: string) {
    this.user = null;
    this._userService.getUser(userId).subscribe(
      userFromApi => {
        console.log("UserFromApi", userFromApi);
        this.usersV2 = userFromApi;
        console.log("UserV2: ", this.usersV2.data);

        this.user = userFromApi;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}

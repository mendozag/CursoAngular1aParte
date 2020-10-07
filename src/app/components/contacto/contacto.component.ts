import { Component, OnInit } from "@angular/core";

@Component({
  selector: "contactoComponent",
  templateUrl: "./contacto.component.html"
})
export class ContactoComponent implements OnInit {
  public titulo: string;

  constructor() {
    this.titulo = "Página de Contacto";
  }

  ngOnInit() {}
}

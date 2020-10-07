import { Component, OnInit } from "@angular/core";

@Component({
  selector: "productosComponent",
  templateUrl: "./productos.component.html"
})
export class ProductosComponent implements OnInit {
  public titulo: string;

  constructor() {
    this.titulo = "Productos";
  }

  ngOnInit() {}
}

import { Component } from "@angular/core";
import { Producto } from "./producto";

@Component({
  selector: "tresComponent",
  templateUrl: "./tres.component.html",
  styleUrls: ["./tres.component.css"]
})
export class TresComponent {
  public titulo: string;
  public producto: Producto;
  public productos: Array<Producto>;

  constructor() {
    this.titulo = "Tienda";
    this.producto = new Producto("Licuadora", "Oster", 750, true);
    this.productos = [
      new Producto("Licuadora", "Oster", 350, false),
      new Producto("Sandwichera", "LG", 500, true),
      new Producto("Pantalla", "Samsung", 3450, false),
      new Producto("Sarten", "T-Fal", 250, false),
      new Producto("Cafetera", "Braun", 550, true),
      new Producto("Batidora", "Osterizer", 650, false),
      new Producto("Licuadora", "Oster", 350, true),
      new Producto("Sandwichera", "LG", 500, true),
      new Producto("Pantalla", "Samsung", 3450, false),
      new Producto("Sarten", "T-Fal", 250, false),
      new Producto("Cafetera", "Braun", 550, true),
      new Producto("Batidora", "Osterizer", 650, false),
      new Producto("Licuadora", "Oster", 350, true),
      new Producto("Sandwichera", "LG", 500, true),
      new Producto("Pantalla", "Samsung", 3450, false),
      new Producto("Sarten", "T-Fal", 250, false),
      new Producto("Cafetera", "Braun", 550, true),
      new Producto("Batidora", "Osterizer", 650, false),
      new Producto("Licuadora", "Oster", 350, true),
      new Producto("Sandwichera", "LG", 500, true),
      new Producto("Pantalla", "Samsung", 3450, false),
      new Producto("Sarten", "T-Fal", 250, false),
      new Producto("Cafetera", "Braun", 550, true),
      new Producto("Batidora", "Osterizer", 650, false)
    ];
  }
}

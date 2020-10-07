import { Component, OnInit } from "@angular/core";
import { ProductoService } from "../../services/producto.service";

@Component({
  selector: "homeComponent",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [ProductoService]
})
export class HomeComponent implements OnInit {
  public titulo: string;
  public catalogo_productos: Array<string>;
  public producto_a_guardar: string;

  constructor(private _productoService: ProductoService) {
    this.titulo = "Home";
  }

  //Hook es un evento que sucede en alguna parte del ciclo de vida del componente
  ngOnInit() {
    //Bloque de Instrucciones
    //console.log("Entró a ngOnInit");
    this.producto_a_guardar = "Producto Genérico";
    this.titulo = "Página de Inicio";
    console.log(this._productoService.prueba("Licuadora"));
    this.catalogo_productos = this._productoService.getProducto();
    console.log(this.catalogo_productos);
  }

  guardarProducto() {
    this._productoService.addProducto(this.producto_a_guardar);
    this.producto_a_guardar = null;
  }

  eliminarProducto(index: number) {
    //alert(index);
    //Logica para elminar el producto
    this._productoService.deleteProducto(index);
  }
}

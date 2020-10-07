import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//Componentes
import { HomeComponent } from "./components/home/home.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { DepartamentosComponent } from "./components/departamentos/departamentos.component";
import { TresComponent } from "./components/tres/tres.component";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";
//Definir las rutas
const appRoutes: Routes = [
  //cuando la ruta está vacía
  { path: "", component: HomeComponent },
  //cuando se pone el nombre del componente en la ruta
  { path: "departamentos", component: DepartamentosComponent },
  { path: "productos", component: TresComponent },
  { path: "contacto", component: ContactoComponent },
  { path: "listaUsuarios", component: UsuariosComponent },
  { path: "usuarios/:id", component: UsuariosComponent },
  //Cuando que no existe
  { path: "**", component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

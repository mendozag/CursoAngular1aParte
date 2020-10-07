import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { routing, appRoutingProviders } from "./app.routing";

//Importar componentes
import { AppComponent } from "./app.component";
import { UnoComponent } from "./components/uno/uno.component";
import { DosComponent } from "./components/dos/dos.component";
import { TresComponent } from "./components/tres/tres.component";
import { HomeComponent } from "./components/home/home.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { DepartamentosComponent } from "./components/departamentos/departamentos.component";
import { HttpClientModule } from "@angular/common/http";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";

@NgModule({
  declarations: [
    AppComponent,
    UnoComponent,
    DosComponent,
    TresComponent,
    HomeComponent,
    ContactoComponent,
    ProductosComponent,
    DepartamentosComponent,
    UsuariosComponent
  ],
  imports: [BrowserModule, FormsModule, routing, HttpClientModule],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
 
import { AppComponent } from './app.component';
import { AppRouteModule } from './app.routemodule';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    CoreModule,
    ShoppingListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
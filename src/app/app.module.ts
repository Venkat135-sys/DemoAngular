import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RecipeComponent } from './recipe/recipe.component';
import { BiryaniComponent } from './biryani/biryani.component';
import { DessertsComponent } from './desserts/desserts.component';
import { CooldrinkComponent } from './cooldrink/cooldrink.component';
import { FooterComponent } from './footer/footer.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactusComponent,
    RecipeComponent,
    BiryaniComponent,
    DessertsComponent,
    CooldrinkComponent,
    FooterComponent,
    RecipeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HouseComponent } from './components/house/house.component';
import { AboutComponent } from './components/about/about.component';
import { SrrvicesComponent } from './components/srrvices/srrvices.component';
import { NavComponent } from './components/nav/nav.component';
import { AdminComponent } from './components/admin/admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { BedroomComponent } from './components/bedroom/bedroom.component';
import { PriceComponent } from './components/price/price.component';
import { BedroomPipe } from './pipe/bedroom.pipe';
import { PricePipe } from './pipe/price.pipe';
import { EditUserComponent } from './components/edit-user/edit-user.component'
import {DxButtonModule, DxLoadIndicatorModule} from "devextreme-angular";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HouseComponent,
    AboutComponent,
    SrrvicesComponent,
    NavComponent,
    AdminComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    BedroomComponent,
    PriceComponent,
    BedroomPipe,
    PricePipe,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    DxLoadIndicatorModule,
    DxButtonModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { LoginsComponent } from './logins/logins.component';
import { SignupComponent } from './signup/signup.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UsersComponent } from './users/users.component';
import { AddfoodsComponent } from './addfoods/addfoods.component';
import { UpdateusersComponent } from './updateusers/updateusers.component';
import { FoodcategorylistComponent } from './foodcategorylist/foodcategorylist.component';
import { AdminfoodcategoryupdateComponent } from './adminfoodcategoryupdate/adminfoodcategoryupdate.component';
import { AdminadedfoodsComponent } from './adminadedfoods/adminadedfoods.component';
import { AdminfoodlistsComponent } from './adminfoodlists/adminfoodlists.component';
import { AdminfoodupdateComponent } from './adminfoodupdate/adminfoodupdate.component';
import { UseraddedComponent } from './useradded/useradded.component';
import { UseraddedcategoryComponent } from './useraddedcategory/useraddedcategory.component';
import { UsercategorylistComponent } from './usercategorylist/usercategorylist.component';
import { UsercategoryupdateComponent } from './usercategoryupdate/usercategoryupdate.component';
import { UseraddedfoodsComponent } from './useraddedfoods/useraddedfoods.component';
import { UseraddedfoodlistComponent } from './useraddedfoodlist/useraddedfoodlist.component';
import { UserfoodupdateComponent } from './userfoodupdate/userfoodupdate.component';
import { AdminpicComponent } from './adminpic/adminpic.component';
import { UseradminhomeComponent } from './useradminhome/useradminhome.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    LoginsComponent,
    SignupComponent,
    AdminhomeComponent,
    UserhomeComponent,
    UsersComponent,
    AddfoodsComponent,
    UpdateusersComponent,
    FoodcategorylistComponent,
    AdminfoodcategoryupdateComponent,
    AdminadedfoodsComponent,
    AdminfoodlistsComponent,
    AdminfoodupdateComponent,
    UseraddedComponent,
    UseraddedcategoryComponent,
    UsercategorylistComponent,
    UsercategoryupdateComponent,
    UseraddedfoodsComponent,
    UseraddedfoodlistComponent,
    UserfoodupdateComponent,
    AdminpicComponent,
    UseradminhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

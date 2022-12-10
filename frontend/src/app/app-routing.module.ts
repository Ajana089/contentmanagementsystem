import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router'
import { AddfoodsComponent } from './addfoods/addfoods.component';
import { AdminadedfoodsComponent } from './adminadedfoods/adminadedfoods.component';
import { AdminfoodcategoryupdateComponent } from './adminfoodcategoryupdate/adminfoodcategoryupdate.component';
import { AdminfoodlistsComponent } from './adminfoodlists/adminfoodlists.component';
import { AdminfoodupdateComponent } from './adminfoodupdate/adminfoodupdate.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminpicComponent } from './adminpic/adminpic.component';
import { FoodcategorylistComponent } from './foodcategorylist/foodcategorylist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateusersComponent } from './updateusers/updateusers.component';
import { UseraddedcategoryComponent } from './useraddedcategory/useraddedcategory.component';
import { UseraddedfoodlistComponent } from './useraddedfoodlist/useraddedfoodlist.component';
import { UseraddedfoodsComponent } from './useraddedfoods/useraddedfoods.component';
import { UseradminhomeComponent } from './useradminhome/useradminhome.component';
import { UsercategorylistComponent } from './usercategorylist/usercategorylist.component';
import { UsercategoryupdateComponent } from './usercategoryupdate/usercategoryupdate.component';
import { UserfoodupdateComponent } from './userfoodupdate/userfoodupdate.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'userhome',component:UserhomeComponent,
children:[{path:'useraddcategory',component:UseraddedcategoryComponent},{
  path:'usercatlist',component:UsercategorylistComponent},
  {path:'useraddedfood',component:UseraddedfoodsComponent},
  {path:'useraddedfoodlist',component:UseraddedfoodlistComponent}
  
]},
{path:'usercatupdate',component:UsercategoryupdateComponent},
{path:'update',component:UpdateusersComponent},
{path:'usercatupdate',component:UsercategoryupdateComponent},
{path:'userfoodupdate',component:UserfoodupdateComponent},
{path:'useradminhome',component:UseradminhomeComponent},
{path:'adminfoodupdate',component:AdminfoodupdateComponent},
{path:'adminfoodcategoryupdate',component:AdminfoodcategoryupdateComponent},
{path:'adminhome',component:AdminhomeComponent,
children:[{path:'Regusers',component:UsersComponent},
{path:'adminhomepic',component:AdminpicComponent},
{path:'food',component:AddfoodsComponent},
{path:'adminaddedfood',component:AdminadedfoodsComponent},
{path:'categorylist',component:FoodcategorylistComponent},
{path:'adminaddedfoodlist',component:AdminfoodlistsComponent}
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

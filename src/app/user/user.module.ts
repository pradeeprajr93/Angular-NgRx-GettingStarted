import { userReducer } from './state/user.reducer';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';
import { ReactiveComponentModule } from '@ngrx/component';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('user', userReducer),
    ReactiveComponentModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }

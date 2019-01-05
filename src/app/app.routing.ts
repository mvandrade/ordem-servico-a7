import {Routes} from '@angular/router'

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './_guards';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'about', component: AboutComponent}
]
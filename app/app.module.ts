import { NgModule }      		from '@angular/core';
import { BrowserModule }	 	from '@angular/platform-browser';
import { FormsModule }	 		from '@angular/forms';
import { RouterModule }			from '@angular/router';

import { AppComponent }  		from './app.component';
import { HeroComponent }		from './hero.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }			from './hero.service';
import { DashboardComponent }	from './dashboard.component';

@NgModule({
  imports: 			[
  	BrowserModule,
  	FormsModule,
  	RouterModule.forRoot([
		{
			path: '',
			redirectTo: '/dashboard',
			pathMatch: 'full'
		},
		{
			path:'heroes',
			component: HeroComponent
		},
		{
			path: 'dashboard',
			component: DashboardComponent
		}
	])
  ],
  declarations:		[ 
  	AppComponent, 
  	DashboardComponent,
  	HeroComponent,
  	HeroDetailComponent
  ],
  providers:		[ HeroService ],
  bootstrap: 		[ AppComponent ]
})

export class AppModule { 

}

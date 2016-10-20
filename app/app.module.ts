import { NgModule }      		from '@angular/core';
import { BrowserModule }	 	from '@angular/platform-browser';
import { FormsModule }	 		from '@angular/forms';
import { RouterModule }			from '@angular/router';

import { AppComponent }  		from './app.component';
import { HeroComponent }		from './hero.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }			from './hero.service';

@NgModule({
  imports: 			[
  	BrowserModule,
  	FormsModule,
  	RouterModule.forRoot([
	{
		path:'heroes',
		component: HeroComponent
	}
])
  ],
  declarations:		[ 
  	AppComponent, 
  	HeroComponent,
  	HeroDetailComponent
  ],
  providers:		[ HeroService ],
  bootstrap: 		[ AppComponent ]
})

export class AppModule { 

}

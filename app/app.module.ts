import { NgModule }      		from '@angular/core';
import { BrowserModule }	 	from '@angular/platform-browser';
import { FormsModule }	 		from '@angular/forms';
import { HttpModule }			from '@angular/http';
import './rxjs-extensions';

import { AppComponent }  		from './app.component';
import { HeroComponent }		from './hero.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }			from './hero.service';
import { DashboardComponent }	from './dashboard.component';
import { HeroSearchComponent } 	from './hero-search.component';

import { AppRoutingModule } 	from './app-routing.module';  

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }	from './in-memory-data.service';

@NgModule({
  imports: 			[
  	BrowserModule,
  	FormsModule,
  	HttpModule,
  	InMemoryWebApiModule.forRoot(InMemoryDataService),
  	AppRoutingModule
  ],
  declarations:		[ 
  	AppComponent, 
  	DashboardComponent,
  	HeroComponent,
  	HeroDetailComponent,
  	HeroSearchComponent
  ],
  providers:		[ HeroService ],
  bootstrap: 		[ AppComponent ]
})

export class AppModule { 

}

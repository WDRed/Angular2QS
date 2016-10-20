import { Component } 		from '@angular/core';
import { OnInit } 			from '@angular/core';
import { Router }			from '@angular/router';			

import { Hero } 			from './hero';
import { HeroService }		from './hero.service';


@Component({
	moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'hero.component.html',
    styleUrls: ['hero.component.css']
})

export class HeroComponent implements OnInit { 

	selectedHero: Hero;
	heroes: Hero[];

	constructor(
		private router:		 Router,
		private heroService: HeroService
		){};

	onSelect(hero:Hero): void{
		this.selectedHero = hero;
	}
	getHeroes(): void{
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
	ngOnInit(): void {
		this.getHeroes();
	}
	gotoDetail(hero: Hero): void{
		this.router.navigate(['/detail', this.selectedHero.id]);
	}
}

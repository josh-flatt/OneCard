import { Component } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { SuperHeroService } from '../services/super-hero.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EditHeroComponent } from "../edit-hero/edit-hero.component";

@Component({
  selector: 'app-super-hero',
  standalone: true,
  templateUrl: './super-hero.component.html',
  styleUrl: './super-hero.component.css',
  imports: [
    CommonModule,
    HttpClientModule,
    EditHeroComponent
  ]
})
export class SuperHeroComponent {
  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero;

  constructor(private superHeroService: SuperHeroService) { }

  ngOnInit(): void {
    this.superHeroService
      .getSuperHeroes()
      .subscribe((result: SuperHero[]) => (this.heroes = result));
  }

  initNewHero() {
    this.heroToEdit = new SuperHero();
  }

  editHero(hero: SuperHero) {
    this.heroToEdit = hero;
  }
}

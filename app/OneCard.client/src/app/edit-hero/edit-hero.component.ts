import { Component, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from 'stream';
import { SuperHeroService } from '../services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './edit-hero.component.html',
  styleUrl: './edit-hero.component.css'
})
export class EditHeroComponent {

  @Input() hero?: SuperHero;
  // @Output() heroesUpdated = new EventEmitter<SuperHero[]>();
  heroes: SuperHero[] = [];

  //I cannot for the life of me figure out this issue. Please pick up at 1:08:00 of
  // this youtube video:
  // https://www.youtube.com/watch?v=dtthbiP3SE0

  constructor(private superHeroService: SuperHeroService) { }

  ngOnInit(): void { }

  updateHero(hero: SuperHero) {
    this.superHeroService
      .updateHero(hero)
      // .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
      .subscribe((result: SuperHero[]) => (this.heroes = result))
  }

  deleteHero(hero: SuperHero) {
    this.superHeroService
      .deleteHero(hero)
      // .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
      .subscribe((result: SuperHero[]) => (this.heroes = result))
  }

  createHero(hero: SuperHero) {
    this.superHeroService
      .createHero(hero)
      // .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
      .subscribe((result: SuperHero[]) => (this.heroes = result))
  }

}

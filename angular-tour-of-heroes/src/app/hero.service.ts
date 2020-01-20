import { Injectable } from "@angular/core";

import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor() {}

  // 返回 英雄 列表
  getHeroes(): Hero[] {
    return HEROES;
  }
}

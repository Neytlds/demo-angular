import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs"; // RxJS 中导入 Observable 和 of 符号

import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor() {}

  // 返回 英雄 列表
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}

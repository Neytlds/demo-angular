import { Component, OnInit } from "@angular/core"; // 从 Angular 核心库中导入 Component 符号，并为组件类加上 @Component 装饰器
import { Hero } from "../hero"; // 导入 Hero 类
import { HEROES } from "../mock-heroes";

@Component({
  // 装饰器函数，用于为该组件指定 Angular 所需的元数据
  selector: "app-heroes", // 组件的选择器（CSS 元素选择器）
  templateUrl: "./heroes.component.html", // 组件模板文件的位置
  styleUrls: ["./heroes.component.css"] // 组件私有 CSS 样式表文件的位置
})
export class HeroesComponent implements OnInit {
  // selectHero: Hero = {
  //   id: 1,
  //   name: "Windstrom"
  // };

  selectHero: Hero;

  heroes = HEROES;

  constructor() {}

  ngOnInit() {} // 是一个生命周期钩子，Angular 在创建完组件后很快就会调用 ngOnInit。这里是放置初始化逻辑的好地方

  onSelect(hero) {
    this.selectHero=hero;
  }
}

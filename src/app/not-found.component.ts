import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div>
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551942319080&di=d95dfcebf9685f2e5db0938fb89f013b&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cea05755a4d06ac72525ae9cadcd.jpg%402o.jpg" />
    </div>
  `,
  styles: ['div {height:100%;width:100%;} div img {height:100%;width:100%;}']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

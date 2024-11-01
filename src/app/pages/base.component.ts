import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
   
    <div class="border border-purple-600 p-5 my-5 mx-auto flex flex-row gap-10 w-fit rounded-lg shadow-md">
      <button routerLink="./ku-bo" class="btn" [ngClass]="url===url_list[0] ? 'boActive' : 'boDeactive'">Ku Bo</button>
      <button routerLink="./chi-meo" class="btn" [ngClass]="url===url_list[1] ? 'meoActive' : 'meoDeactive'">Chị Mèo</button>
    </div>
  `,
  styles: ``
})
export class BaseComponent {

  url_list: string[] = ['/ku-bo', '/chi-meo']
  url: string = ''

  constructor(private router: Router){
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.url = val.url; 
        if (val.url === '/') this.url = this.url_list[0]
      }     
    })
  }
  
}

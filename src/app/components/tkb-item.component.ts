import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LgIcon, optionItem } from 'lg-components';
import { tkbClass } from './tkb-interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'tkb-item',
  standalone: true,
  imports: [CommonModule, FormsModule, LgIcon],
  template: `
    <div class="mt-5 mx-auto text-center font-bold">{{note}}</div>
    <div id="list1" class="w-fit h-fit flex flex-col mx-auto -rotate-90 -translate-x-20 translate-y-28 md:translate-x-0 md:translate-y-0 md:rotate-0">
      <div class="mb-5 md:my-5">
        <p class="text-base md:text-xl text-rose-600 text-center font-bold">THỜI KHÓA BIỂU HỌC KÌ I - LỚP {{class}}</p>
        <P class="text-base md:text-xl text-rose-600 text-center font-bold">NĂM HỌC 2024-2025</P>
        <P class="text-base md:text-xl text-blue-600 text-center font-bold">{{name}}</P>
      </div>

      <div id="TKB" class="flex justify-between ">           
        <div *ngFor="let tkb of tkbList; index as j" class="flex flex-col items-center" 
        [ngClass]="{'border border-blue-500 shadow-lg mx-2 rounded-lg text-blue-700 font-semibold': j===today}" >
          <div class="mb-1">
            @if (tkb.date==='') {
              <div class="div_class gap-10 border-none bg-transparent " >
                <!-- <div class="text-blue-500 text-lg cursor-pointer" (click)="editable=!editable"
                ><lg-icon tooltip="Edit" name="pencil"></lg-icon></div>

                <button class="text-green-500 text-lg cursor-pointer disabled:text-slate-400" 
                [disabled]="!editable" (click)="saveTkb()"
                ><lg-icon tooltip="Save" name="check"></lg-icon></button>               -->
              </div>
            
            } @else {
              <div class="div_class  ">{{tkb.date}}</div>
            }
          </div>          
          
          <div *ngFor="let sub of tkb.subjs; index as s " >
            @if (j===0) {
              <div class="div_class ">{{sub.subj}}</div>
            } 
            @else {            
              <select [disabled]="!editable" class="selectbox" [(ngModel)]="sub.subj" 
              >
                <option *ngFor="let com of subj_list" [ngValue]="com.key">{{com.value}}</option>
              </select>            
            }
          </div>     
        </div>   
      </div>      

      
    </div>
    
  `,
  styles: ``
})
export class TkbItemComponent {
  @Input() tkbList: tkbClass[] = []
  @Input() subj_list: optionItem[] = []
  @Input() class: string = ''
  @Input() name: string = ''
  @Input() note: string = ''
  editable: boolean = false
  today: number = new Date().getDay()

  

  // ngOnInit(){console.log(this.subj_list)}

  saveTkb(){
    console.log('save')
  }
}

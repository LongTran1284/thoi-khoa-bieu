import { Component } from '@angular/core';
import { optionItem } from 'lg-components';
import { tkbClass } from '../components/tkb-interface';
import { tkbData_Bo } from '../components/data';
import { TkbItemComponent } from '../components/tkb-item.component';

@Component({
  selector: 'tkb_bo',
  standalone: true,
  imports: [TkbItemComponent],
  template: `   
    <tkb-item [class]="class" [name]="name" [note]="note"
      [tkbList]="tkbList" [subj_list]="subj_list"
    ></tkb-item>  
  `,
  styles: ``
})
export class TkbBoComponent {
  class: string = '4/5'
  name: string = 'TRẦN NHƯ BÁO'
  tkbList: tkbClass[] = tkbData_Bo.data
  note: string = '* Sáng thứ 5 học tin học và thể dục từ 7h15 - 9h30'
  
  get subj_list(){
    let sub: optionItem[] = []
    tkbData_Bo.subj_list.forEach((item: any) => sub.push({key: item.subj, value: item.subj}))
    return sub
  }
  
}

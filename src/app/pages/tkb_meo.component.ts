import { Component } from '@angular/core';
import { optionItem } from 'lg-components';
import { tkbClass } from '../components/tkb-interface';
import { tkbData_Meo } from '../components/data';
import { TkbItemComponent } from '../components/tkb-item.component';

@Component({
  selector: 'tkb_meo',
  standalone: true,
  imports: [TkbItemComponent],
  template: `    
    <tkb-item [class]="class" [name]="name"
      [tkbList]="tkbList" [subj_list]="subj_list"
    ></tkb-item>
  `,
  styles: ``
})
export class TkbMeoComponent {
  class: string = '8/4'
  name: string = 'TRẦN THỊ MÈO'
  tkbList: tkbClass[] = tkbData_Meo.data
  
  get subj_list(){
    let sub: optionItem[] = []
    tkbData_Meo.subj_list.forEach((item: any) => sub.push({key: item.subj, value: item.subj}))
    return sub
  }
}

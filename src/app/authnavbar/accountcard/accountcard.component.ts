import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accountcard',
  templateUrl: './accountcard.component.html',
  styleUrls: ['./accountcard.component.css']
})
export class AccountcardComponent {
 @Input() users:any;
 constructor(){}
}

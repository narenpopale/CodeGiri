import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ide',
  templateUrl: './ide.component.html',
  styleUrls: ['./ide.component.css']
})
export class IdeComponent implements OnInit {

  iframe = document.getElementsByClassName("iframe");

constructor() { 
}

ngOnInit(): void {
}

// resizeIframe() {
//   this.iframe[0]. = this.iframe[0].contentWindow.document.body.scrollHeight + "px";
// }

}

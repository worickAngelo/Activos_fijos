import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit,OnChanges {
  @Input() public headers: string[];  
  @Input() public body: any[];  
  names:any[];

  @Output() public OnDelete = new EventEmitter();
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.body){  
      this.get();
    }
  }

  ngOnInit(): void {
   /*  this.body.forEach(e =>{
      e.names = Object.getOwnPropertyNames(e);
    }) */
    
  }

  get(){
    console.log(this.body);
    this.names = Object.getOwnPropertyNames(this.body[0]);
    console.log(this.names);

  }

  borrar(id:number){
    console.log(this.body);
    return;
    this.OnDelete.emit(id);
  }

}

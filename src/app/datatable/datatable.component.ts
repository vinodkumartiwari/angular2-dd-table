import { Component, ElementRef } from '@angular/core';
import { DatatableService } from './datatable.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent{
	data;
	htmlText: string;
    tableShow:boolean = false;
    
  constructor(private service: DatatableService, private e:ElementRef) {
	  this.service.getData().then((data) => 
	  {
		  this.data = data
	  }
	  )
	  
	  this.service.getData().then((data) => {
	      this.data = data;
	    }); 
  }
  
  toInt(num: string) {
      return +num;
  }

  sortByWordLength = (a: any) => {
      return a.city.length;
  }
  
  toggleShow(){
	  if(!this.tableShow)
		  this.tableShow = true;
	  else
		  this.tableShow = false;
  }
  
  rowClicked(e){
	  console.log(e.target.parentElement);
	  //this.e.nativeElement.appendChild(e.target.parentElement);
	  this.e.nativeElement.childNodes[0].childNodes[1].appendChild(e.target.parentElement);
	  console.log(this.e);
  }
}
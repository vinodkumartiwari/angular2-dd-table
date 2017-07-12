import { Injectable } from '@angular/core';

@Injectable()
export class DatatableService {

  constructor() { }

  getData(): Promise<any> {
	    return new Promise((resolve, reject) => {
	      setTimeout(() => {
	        resolve(this.dataTableData);
	      }, 100);
	    });
	  }

  dataTableData = [{
      'name': 'Vinod',
      'email': 'vinod@gmail.com',
      'regDate': '2017-01-09T14:48:34-08:00',
      'city': 'Delhi',
      'age': 34
  },
  {
      'name': 'Anita',
      'email': 'anita@gmail.com',
      'regDate': '2017-01-23T20:09:52-08:00',
      'city': 'Bangalore',
      'age': 32
  },
  {
      'name': 'Avnish',
      'email': 'avi@gmail.com',
      'regDate': '2017-11-19T19:11:33-08:00',
      'city': 'Pune',
      'age': 3
  }
  
  ];
}

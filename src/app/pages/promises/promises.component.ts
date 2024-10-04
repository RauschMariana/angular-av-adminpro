import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUser().then( user => {
      console.log(user);
    });

  //   const promise = new Promise( ( resolve, reject ) => {
  //     if ( false ) {
  //       resolve('promise resolved');
  //     } else {
  //       reject('promise rejected');
  //     }

  //   });

  //   promise
  //   .then( ( message ) => {
  //     console.log(message);
  //   })
  //   .catch( error => {
  //     console.log('Error en mi promesa', error);
  //   });

  //   console.log('fin del init');
  // 
  }

  getUser() {
    return new Promise( resolve => {
      fetch('https://reqres.in/api/users')
      .then( resp => resp.json())
      .then( body => resolve(body.data));
    });
  }
}
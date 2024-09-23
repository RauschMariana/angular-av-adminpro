import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Dashboard', url: '/' },
        { title: 'Progress', url: 'progress' },
        { title: 'Grafica', url: 'graph1' }
        //{ title: 'Promesas', url: '/promesas' },
        //{ title: 'RxJs', url: '/rxjs' },
      ]
    }
  ];

  constructor() { }
}

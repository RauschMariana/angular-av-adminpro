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
        { title: 'Main', url: '/' },
        { title: 'Gráfica', url: 'graph1' },
        { title: 'RxJs', url: 'rxjs' },
        { title: 'Promesas', url: 'promises' },
        { title: 'Progress', url: 'progress' }
      ]
    }
  ];

  constructor() { }
}

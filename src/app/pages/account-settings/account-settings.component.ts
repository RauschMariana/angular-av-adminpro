import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',

})
export class AccountSettingsComponent {

  constructor( private settingsService: SettingsService ) { }

  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();  
  }
    
  changeTheme(themeName: string) {
    this.settingsService.changeTheme( themeName );
  }

}

import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BookticketComComponent } from './bookticket-com/bookticket-com.component';
import { ViewticketComComponent } from './viewticket-com/viewticket-com.component';
import { ContactComComponent } from './contact-com/contact-com.component';
import { LoginComComponent } from './login-com/login-com.component';
import { MapComComponent } from './map-com/map-com.component';
import { StationsComComponent } from './stations-com/stations-com.component';
import { NotfoundComComponent } from './notfound-com/notfound-com.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, BookticketComComponent, ViewticketComComponent, ContactComComponent, LoginComComponent, MapComComponent, StationsComComponent, NotfoundComComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'metro-prj';
}

import { Routes } from '@angular/router';
import { LoginComComponent } from './login-com/login-com.component';
import { ViewticketComComponent } from './viewticket-com/viewticket-com.component';
import { BookticketComComponent } from './bookticket-com/bookticket-com.component';
import { TimetableComComponent } from './timetable-com/timetable-com.component';
import { MapComComponent } from './map-com/map-com.component';
import { StationsComComponent } from './stations-com/stations-com.component';
import { ContactComComponent } from './contact-com/contact-com.component';
import { NotfoundComComponent } from './notfound-com/notfound-com.component';

export const routes: Routes = [
    { path: '', component: LoginComComponent },
    { path: 'bookTicket', component: BookticketComComponent },
    { path: 'viewTicket', component: ViewticketComComponent },
    { path: 'timeTable', component: TimetableComComponent },
    { path: 'stations', component: StationsComComponent },
    { path: 'map', component: MapComComponent },
    { path: 'contact', component: ContactComComponent },
    { path: '**', component: NotfoundComComponent }
];

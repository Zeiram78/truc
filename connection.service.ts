import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private router: Router) {
  }
 connected: boolean = false;
  userName: string = "";

  disconnection(): void {
    this.connected = false;
    this.userName = "";
    this.router.navigate(['']);
  }
  connection(userName: string): void {
    
    this.connected = true;
    this.userName = userName;
    this.router.navigate(['home']);
    console.log(this.connected)
  }

}

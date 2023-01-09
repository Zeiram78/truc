import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-global-view',
  templateUrl: './global-view.component.html',
  styleUrls: ['./global-view.component.css']
})
export class GlobalViewComponent implements OnInit {

  constructor(public connectionService:ConnectionService) { }

  connected: boolean = false;

  ngOnInit(): void {
    
  }

  disconnect(): void {
    this.connectionService.disconnection();
  }

}

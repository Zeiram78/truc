import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-connected-view',
  templateUrl: './connected-view.component.html',
  styleUrls: ['./connected-view.component.css']
})
export class ConnectedViewComponent implements OnInit {
  

  constructor(public connectionService: ConnectionService) { }

  ngOnInit(): void {
  }

  disconnect(): void {
    this.connectionService.disconnection();
  }

}

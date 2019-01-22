import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

	private uri: string;

	constructor(
		public global: GlobalService,
		public router: Router
	) {

	}
	ngOnInit() {
	}

	onMenuClick() {
		if(this.global.bodyToggle){
			this.global.bodyToggle = false;
		}
		if(this.global.menuToggle){
			this.global.menuToggle = false;
		}
		this.global.colorToggle = false;
		if(this.global.menuAlive){
			this.global.menuAlive = false;
			if(this.global.signalShowroom){
				this.global.colorToggle = true;
			}
		}
	}
	onHome() {
		if(this.global.menuToggle){
			this.global.menuToggle = false;
		}else{
			this.global.bodyToggle = false;
			this.global.routerToggle = true;
		}
	}
}

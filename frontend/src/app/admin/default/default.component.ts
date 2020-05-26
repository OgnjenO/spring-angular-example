import { Component, OnInit } from '@angular/core';
import { faStar, faPlus, faDownload, faChevronUp, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons';

declare var jQuery:any;

@Component({
	selector: 'app-default',
	templateUrl: './default.component.html',
	styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

	starIcon = faStar;
	plusIcon = faPlus;
	downloadIcon = faDownload;
	chevronUpIcon = faChevronUp;
	timesIcon = faTimes;

	facebookIcon = faFacebook;
	twitterIcon = faTwitter;
	linkedInIcon = faLinkedin;
	dribbbleIcon = faDribbble;

	title:String = "This is just an example";

    public portfolioList = [];

	constructor() { }

	ngOnInit(): void {	
		this.portfolioList.push({title:"Cabin", image:"portfolio/cabin.png"});
		this.portfolioList.push({title:"Cake", image:"portfolio/cake.png"});
		this.portfolioList.push({title:"Circus", image:"portfolio/circus.png"});
		this.portfolioList.push({title:"Game", image:"portfolio/game.png"});
		this.portfolioList.push({title:"Safe", image:"portfolio/safe.png"});
		this.portfolioList.push({title:"Submarine", image:"portfolio/submarine.png"});
	}
}

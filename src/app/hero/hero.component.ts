import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
user;
  constructor(private activeRoutr:ActivatedRoute) {
    this.user=this.activeRoutr.snapshot.paramMap.get("name")

}

  ngOnInit(): void {
  }

}

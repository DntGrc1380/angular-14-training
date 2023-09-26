import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  constructor(private data: ActivatedRoute) { }

  ngOnInit() {
    this.data.params.subscribe(p => {
      console.log('params:',p['id'])
    })
  }

}
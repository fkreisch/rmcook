import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  constructor(){
    document.body.style.backgroundImage = "url('../../assets/img/chef.jpg')";
  }
  ngOnDestroy(){
    document.body.style.backgroundImage = "none";
  }

  ngOnInit() {
    document.body.classList.add('[style.background-image]":"../../assets/img/chef.jpg');
}
}

import {Component, OnInit} from '@angular/core';
import {PostServiceService} from '../post-service.service';
import {Router} from '@angular/router';
import {NgForOf} from '@angular/common';

interface Post {
  id: number;
  titre: string;
  auteur: string;
}

@Component({
  selector: 'app-accueil',
  imports: [
    NgForOf
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent  implements  OnInit{

  allposts : Post[] = []

  constructor( private  service : PostServiceService , private router : Router) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(data=>


      this.allposts = data


    )
  }


}

import { Component } from '@angular/core';
import {PostServiceService} from '../post-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  fdata ={
    titre: "",
    auteur: "",
    image : "",
    categorie : "",
    discription : ""


  }

  constructor(private service : PostServiceService , private router : Router ) {}


  create(){
    this.service.createPost(this.fdata).subscribe({
      next:(data)=>{
        this.router.navigate(['/accueil'])
      }
    })
  }

}

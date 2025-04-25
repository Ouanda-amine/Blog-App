import { Component } from '@angular/core';
import {PostServiceService} from '../post-service.service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create',
  imports: [
    FormsModule
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  data ={
    titre: "",
    auteur: "",
    image : "",
    categorie : "",
    discription : ""


  }

  constructor(private service : PostServiceService , private router : Router ) {}


  create(){
    this.service.createPost(this.data).subscribe({
      next:(data)=>{
        this.router.navigate(['/accueil'])
      }
    })
  }

}

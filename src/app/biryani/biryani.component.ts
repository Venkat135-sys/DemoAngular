import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-biryani',
  templateUrl: './biryani.component.html',
  styleUrls: ['./biryani.component.css']
})
export class BiryaniComponent implements OnInit {

  biryani:Recipe[]=[]
  constructor(private infos:InfoService){}

  ngOnInit(){
    this.biryani= this.infos.getBiryanidata()
  }

  
  
}

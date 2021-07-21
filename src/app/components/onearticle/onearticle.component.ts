import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onearticle',
  templateUrl: './onearticle.component.html',
  styleUrls: ['./onearticle.component.css']
})
export class OnearticleComponent implements OnInit {
  articles: any;
   article: any;
  id = '';


  constructor(private articleService: ArticlesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initialize();

  }
  initialize() {
     this.articleService.getAllArticles().then((res) => {
      this.articles = res;
      console.log(this.articles)
    });
    
     this.route.paramMap.subscribe(
    (value) => {
      this.id = value.get('id') ?? '';
      
      for(let elt of this.articles){
          if(elt.id == +this.id){
            console.log(elt);
          }
      }  
    });
    
  }

}

import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: any;
  responses: any;
  searchForm = this.formBuilder.group({
    parameter: ['', Validators.required]
  });

  constructor(private articleService: ArticlesService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
     this.initialize(); 
  }
  initialize() {
    this.articleService.getAllArticles().then((res) => {
      this.articles = res;
    });
  }
  onSubmitSearch(){

    this.articleService.getAllByParameter(this.searchForm.value)
    .then((res) => {
      this.responses = res;
    })
  }

}

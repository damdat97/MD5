import { Component, OnInit } from '@angular/core';
import {Word} from "../../model/word";
import {Subscription} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {WordService} from "../../service/word.service";

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css']
})
export class WordDetailComponent implements OnInit {
  currentWord: Word | any;
  sub: Subscription | any;

  constructor(private wordService: WordService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const key = paramMap.get('word');
      const value = this.wordService.search(key);
      this.currentWord = {
        word: key,
        meaning: value
      };
      console.log(JSON.stringify(this.currentWord));
    });
  }

}

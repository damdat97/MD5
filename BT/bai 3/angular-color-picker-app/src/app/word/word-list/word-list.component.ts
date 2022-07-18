import { Component, OnInit } from '@angular/core';
import {Word} from "../../model/word";
import {WordService} from "../../service/word.service";

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {

  word: Word | any;

  constructor(private wordService: WordService) {
  }

  ngOnInit(): void {
  }

  search(key: string) {
    const value = this.wordService.search(key);
    this.word = {
      word: key,
      meaning: value
    };
  }

}

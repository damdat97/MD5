import { Injectable } from '@angular/core';
import {Word} from "../model/word";

@Injectable({
  providedIn: 'root'
})
export class WordService {

  private words: Word[] = [
    {
      word: 'hello',
      meaning: 'xin chào'
    },
    {
      word: 'goodbye',
      meaning: 'Tạm biệt'
    },
    {
      word: 'snow',
      meaning: 'Tuyết'
    },
    {
      word: 'provide',
      meaning: 'Cung cấp'
    },
  ]

  constructor() { }

  search(word: string | any): string {
    let w;
    if (!word) {
      return '';
    }
    w = this.words.find(item => item.word === word.toLowerCase());
    if (w) {
      return w.meaning;
    } else {
      return 'Not found';
    }
  }

  getAll(): Word[] {
    return this.words;
  }
}

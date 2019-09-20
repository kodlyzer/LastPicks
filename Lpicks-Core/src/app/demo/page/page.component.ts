import { Component } from '@angular/core';


export const darkTheme = {
  'primary-color': '#455363',
  'background-color': '#1f2935',
  'text-color': '#fff'
};

export const lightTheme = {
  'primary-color': '#fff',
  'background-color': '#e5e5e5',
  'text-color': '#2d2d2d'
};


@Component({
  selector: 'kdi-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {


  title = 'livedemo';
  model = '';
  snippet: boolean = true;
  currentTheme:string;
  oppositeTheme:string;
  constructor() {
    console.clear();
    this.currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    if (this.currentTheme==null) {
      localStorage.setItem('theme','light');
      this.setTheme(lightTheme);
      this.oppositeTheme='dark';
    }
    else{
      this.setTheme(darkTheme);
      this.oppositeTheme='light';
    }
  }

  JsonValue = {
    title: 'Courses',
    items: [
      {
        icon: 'success',
        link: '#',
        name: 'C++'
      },
      {
        icon: 'danger',
        link: '#',
        name: 'Python',
      },
      {
        icon: 'info',
        link: '#',
        name: 'Javascript'
      },
    ]
  };

  get JsonValues() {
    return JSON.stringify(this.JsonValue, null, 2);
  }
  set JsonValues(v) {
    try {
      this.JsonValue = JSON.parse(v);
    } catch (error) {
      console.log('Error while typing JSON');
    }
  }
  snippetActionTrue() {
    this.snippet = true;
    console.log(this.snippet);
  }
  snippetActionFalse() {

    this.snippet = false;
    console.log(this.snippet);
  }


  CopyToClipBoard() {
    let selBox1 = document.getElementById("chkInputTextArea") as HTMLTextAreaElement;
    selBox1.focus();
    selBox1.select();
    document.execCommand('copy');
  }
  outFunc(event) {
    var tooltip = document.getElementById(event.id);
    tooltip.innerHTML = "Copy to clipboard";
    console.log();
  }
  // Submit()
  // {
  //   //console.log(this.model);
  // }


  chngetheme() {
    if (this.currentTheme == 'light') {
      this.currentTheme = 'dark';
      this.setTheme(darkTheme);
      localStorage.setItem('theme','dark');
      this.oppositeTheme='light';
    }
    else {
      this.currentTheme = 'light';
      this.setTheme(lightTheme);
      localStorage.setItem('theme','light');
      this.oppositeTheme='dark';
    }
  }

  private setTheme(theme: {}) {
    Object.keys(theme).forEach(k =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }

}

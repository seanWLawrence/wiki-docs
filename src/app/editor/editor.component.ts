import { Component, OnInit, OnDestroy } from "@angular/core";
import * as marked from "marked";
import { sanitize } from "dompurify";

import DEFAULT_VALUE from "./editor.default";

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.sass"]
})
export class EditorComponent implements OnInit, OnDestroy {
  content = "";
  scrollTop = 0;

  constructor() {}

  ngOnInit(): void {
    this.content = DEFAULT_VALUE;
    window.addEventListener("scroll", this.scrollEvent, true);
  }

  ngOnDestroy() {
    window.removeEventListener("scroll", this.scrollEvent, true);
  }

  scrollEvent = (event: any): void => {
    this.scrollTop = event.srcElement.scrollTop;
  };

  renderMarkdown() {
    return marked(sanitize(this.content), { gfm: true });
  }
}

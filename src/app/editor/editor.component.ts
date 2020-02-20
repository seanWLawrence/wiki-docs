import { Component, OnInit } from "@angular/core";
import * as marked from "marked";
import { sanitize } from "dompurify";

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.sass"]
})
export class EditorComponent implements OnInit {
  content = "Some content";

  constructor() {}

  ngOnInit(): void {}

  renderMarkdown() {
    return marked(sanitize(this.content), { gfm: true });
  }
}

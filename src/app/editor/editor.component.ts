import { Component, OnInit } from "@angular/core";
import * as marked from "marked";
import { sanitize } from "dompurify";

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.sass"]
})
export class EditorComponent implements OnInit {
  content = "";

  constructor() {}

  ngOnInit(): void {
    this.content = window.localStorage.getItem("content") || "Some content...";
  }

  renderMarkdown() {
    return marked(sanitize(this.content), { gfm: true });
  }
}

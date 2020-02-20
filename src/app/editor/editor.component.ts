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

  ngOnDestroy(): void {
    window.removeEventListener("scroll", this.scrollEvent, true);
  }

  scrollEvent = ({ srcElement: { scrollTop } }: any): void => {
    this.scrollTop = scrollTop;
  };

  copyMarkdownToClipboard($element: HTMLTextAreaElement): void {
    $element.select();
    document.execCommand("copy");
    $element.setSelectionRange(0, 0);
  }

  copyHtmlToClipboard(): void {
    const $el = document.createElement("textarea");
    $el.value = this.renderMarkdown();
    document.body.appendChild($el);
    $el.select();
    document.execCommand("copy");
    $el.remove();
  }

  renderMarkdown(): string {
    return marked(sanitize(this.content), { gfm: true });
  }
}

import { Controller, View, Inject, History } from "@slick-for/svelte";
import MainPage from "./docs/main.svelte";
import { ContentService } from "../../test/resource/ContentService";
import { get } from "svelte/store";
import { DynamicStore } from "../../test/resource/writable-store";

import FuzzySearch from "fuzzy-search";

import { Menu } from "../services/docs/menu";
import { SideMenu } from "../services/docs/side-menu";
import { Introduction } from "../services/docs/introduction";
import { GettingStarted } from "../services/docs/GettingStarted";
import { TemplatingLang } from "../services/docs/templating";

import Intro from "./docs/intro.svelte";
import Layout from "./layout/docs-layout.svelte";
import GettingStartedPage from "./docs/getting-started.svelte";
import TemplatingPage from "./docs/templating.svelte";
import ControllerPage from "./docs/controller.svelte";
import ViewPage from "./docs/view.svelte";
import ShortcutPage from "./docs/shortcuts.svelte";
import { ControllerLang } from "../services/docs/controller";
import { Markdown } from "../services/markdown/markdown";

@Controller("/svelte/docs", {
  scope: "Singleton",
  layout: Layout
})
export class DocController {
  constructor(
    private menu: Menu,
    private side: SideMenu,
    private template: TemplatingLang
  ) {}

  @View("/", MainPage)
  async mainPage(@History() history) {
    return history.push("/svelte/docs/introduction");
  }

  @View("/introduction", Intro)
  async Introduction(markdown: Markdown) {
    let html = markdown.getHTML("/general/introduction");
    return {
      menu: this.menu,
      side: this.side,
      html
    };
  }

  @View("/fast-track", TemplatingPage)
  fastTrack(markdown: Markdown) {
    let html = markdown.getHTML("/general/fast-track");
    return {
      menu: this.menu,
      side: this.side,
      html
    };
  }

  @View("/getting-started", GettingStartedPage)
  gettingStarted(markdown: Markdown) {
    let html = markdown.getHTML("/general/getting-started");
    return {
      menu: this.menu,
      side: this.side,
      html
    };
  }

  @View("/template", TemplatingPage)
  templating(markdown: Markdown) {
    let html = markdown.getHTML("/general/templating");
    return {
      menu: this.menu,
      side: this.side,
      html
    };
  }

  @View("/controller", TemplatingPage)
  controller(markdown: Markdown) {
    let html = markdown.getHTML("/general/controller");
    return {
      menu: this.menu,
      side: this.side,
      html
    };
  }

  @View("/view", ViewPage)
  async view(markdown: Markdown) {
    let html = markdown.getHTML("/general/view");
    return {
      menu: this.menu,
      side: this.side,
      html
    };
  }

  @View("/shortcuts", ShortcutPage)
  shortCuts(content: TemplatingLang) {
    return {
      menu: this.menu,
      side: this.side,
      content
    };
  }
}

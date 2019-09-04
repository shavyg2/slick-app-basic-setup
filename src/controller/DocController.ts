import { Controller, View, Inject, History, LayoutProps } from "@slick-for/svelte";
import MainPage from "./docs/main.svelte";

import { NavLabel } from "../services/docs/menu";
import { SideMenu } from "../services/docs/side-menu";

import Intro from "./docs/intro.svelte";
import Layout from "./layout/docs-layout.svelte";
import GettingStartedPage from "./docs/getting-started.svelte";
import TemplatingPage from "./docs/templating.svelte";
import ViewPage from "./docs/view.svelte";
import ShortcutPage from "./docs/shortcuts.svelte";
import { Markdown } from "../services/markdown/markdown";


console.log(LayoutProps)

@Controller("/svelte/docs", {
  scope: "Singleton",
  layout: Layout
})
export class DocController {
  constructor(
    private navigation: NavLabel,
    private side: SideMenu
  ) {}

  @LayoutProps
  layout(){
    return {
      nav:this.navigation,
      side:this.side
    }
  }

  @View("/", MainPage)
  async mainPage(@History() history) {
    history.push("/svelte/docs/introduction");
  }

  @View("/introduction", Intro)
  async Introduction(markdown: Markdown) {
    let html = markdown.getHTML("/general/introduction");
    return {
      html
    };
  }

  @View("/basics", Intro)
  async breakdown(markdown: Markdown) {
    let html = markdown.getHTML("/general/breakdown");
    return {
      html
    };
  }

  @View("/fast-track", TemplatingPage)
  fastTrack(markdown: Markdown) {
    let html = markdown.getHTML("/general/fast-track");
    return {
      html
    };
  }

  @View("/getting-started", GettingStartedPage)
  gettingStarted(markdown: Markdown) {
    let html = markdown.getHTML("/general/getting-started");
    return {
      html
    };
  }

  @View("/template", TemplatingPage)
  templating(markdown: Markdown) {
    let html = markdown.getHTML("/general/templating");
    return {
      html
    };
  }

  @View("/controller", TemplatingPage)
  controller(markdown: Markdown) {
    let html = markdown.getHTML("/general/controller");
    return {
      html
    };
  }

  @View("/view", ViewPage)
  async view(markdown: Markdown) {
    let html = markdown.getHTML("/general/view");
    return {
      html
    };
  }


  @View("/api", ViewPage)
  async api(markdown: Markdown) {
    let html = markdown.getHTML("/general/api");
    return {
      html
    };
  }
}

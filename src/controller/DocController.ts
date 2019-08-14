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



@Controller("/svelte/docs", {
  scope: "Singleton",
  layout: Layout
})
export class DocController {
  constructor(private menu: Menu,private side:SideMenu, private template:TemplatingLang) {}

  @View("/", MainPage)
  async mainPage(cservice: ContentService, @Inject(DynamicStore) store, @History() history) {
      history.push("/svelte/docs/introduction");
    let info = await cservice.getContent();
    store.set(info);

    const updateSearch = (term: string) => {
      const content = get(store);
      const searcher = new FuzzySearch(content, ["title", "description"], {
        caseSensitive: false,
        sort: true
      });
      const result = searcher.search(term);
      console.log(result.toString());
      return result || [];
    };

    return {
        menu:this.menu,
        side:this.side,
      contents: store,
      query: updateSearch
    };
  }

  @View("/introduction", Intro)
  async Introduction(intro: Introduction) {
    return {
      menu: this.menu,
      side:this.side,
      intro
    };
  }


  @View("/getting-started",GettingStartedPage)
  gettingStarted(content:GettingStarted){

    return {
        menu:this.menu,
        side:this.side,
        content:content
    }
  }



  @View("/template",TemplatingPage)
  templating(content:TemplatingLang){
      return {
          menu:this.menu,
          side:this.side,
          content
      }
  }



  @View("/controller",ControllerPage)
  controller(controller:ControllerLang){
      return {
          menu:this.menu,
          side:this.side,
          content:controller
      }
  }



  @View("/view",ViewPage)
  view(content:TemplatingLang){
      return {
          menu:this.menu,
          side:this.side,
          content
      }
  }



  @View("/shortcuts",ShortcutPage)
  shortCuts(content:TemplatingLang){
      return {
          menu:this.menu,
          side:this.side,
          content
      }
  }
}

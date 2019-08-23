import { Injectable } from "@slick-for/svelte";
import faker from "faker";

@Injectable()
export class SideMenu {
  menus = [
    {
      label: "Introduction",
      url: "/svelte/docs/introduction"
    },
    {
      label:"The Basics",
      url:"/svelte/docs/breakdown"
    },
    {
      label: "Fast Track (Advance)",
      url: "/svelte/docs/fast-track"
    },
    {
      label: "Getting Started",
      url: "/svelte/docs/getting-started"
    },
    {
      label: "Templating",
      url: "/svelte/docs/template"
    },
    {
      label: "Controller",
      url: "/svelte/docs/controller"
    },
    {
      label: "Views",
      url: "/svelte/docs/view"
    },
    {
      label: "Param",
      url: "/svelte/docs/param"
    },
    {
      label: "Query",
      url: "/svelte/docs/query"
    }
  ];

  menu1 = "Introduction";
  menu2 = "Getting Started";
  menu3 = "Templating";
  menu4 = "Controller";
  menu5 = "Views";
  menu6 = "Param and Query";
}

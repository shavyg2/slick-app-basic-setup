import { Injectable } from "@slick-for/svelte";
import faker from "faker";

@Injectable()
export class NavLabel {
  menus = [
    { label: "Documentation", url: "https://slick-for.com" },
    {
      label: "Github",
      url: "https://github.com/shavyg2/slick-for-svelte";
    }
  ];
  content1 = "Documentation";
  content2 = "Github";
}

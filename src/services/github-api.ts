import {
  Injectable
} from "@slick-for/svelte";

@Injectable()
export class GithubApi {
  private apiUrl = "https://api.github.com";

  async getUserByName(username: string) {
    let res = await fetch(`${this.apiUrl}/users/${username}`);
    let users = await this.isGood(res);
    return users;
  }

  private async isGood(res: Response) {
    if (res.status - 299 > 0) {
      let text = await res.text();
      let parsed;
      try {
        parsed = JSON.parse(text);
      } catch (e) {
        throw text;
      }

      throw parsed;
    } else {
      return res.json();
    }
  }
}
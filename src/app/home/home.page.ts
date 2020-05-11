import { Component } from "@angular/core";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  iconBackToolbar = faAngleLeft;

  constructor() {}
}

import { Component } from "@angular/core";
import {
  faAngleLeft,
  faBars,
  faCalendar,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  iconBackToolbar = faAngleLeft;
  iconMenuToolbar = faBars;
  iconCalendar = faCalendar;
  iconToCalendar = faCaretRight;

  birthdays = [
    "José da Silva Teixeira",
    "Luiz Carlos Garcia",
    "Maria Aparecida Vieira Couto",
    "Roberto Almeida Spoletti",
    "Ana Maria Cerqueira",
    "Pedro Arthur Nogueira Rispinni",
    "Francine Fonseca Pedrini",
  ];

  constructor() {}
}

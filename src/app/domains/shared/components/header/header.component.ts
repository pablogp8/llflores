import { CommonModule } from '@angular/common';
import { Component, signal} from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);

  toogleSideMenu(){
    this.hideSideMenu.update(prevstate => !prevstate);
  }
}

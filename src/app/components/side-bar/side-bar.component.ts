import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  @Input() categoriesRecupDeLaHome!: string[];
  checkedCategorie: string[] = [];

  onCheckCategory(e: Event) {
    const target = e.target as HTMLInputElement;
    console.log('Valeur de la checkbox', target.value);
    console.log('Est elle cochée ? : ', target.checked);

    if (target.checked) {
      if (
        this.checkedCategorie.length === this.categoriesRecupDeLaHome.length
      ) {
        this.checkedCategorie = [];
      }
      this.checkedCategorie.push(target.value);
    } else {
      this.checkedCategorie = this.checkedCategorie.filter(
        (x) => x != target.value
      );
    }

    if (this.checkedCategorie.length === 0) {
      this.checkedCategorie = [...this.categoriesRecupDeLaHome];
    }
    console.log(this.checkedCategorie);
  }

  constructor() {}

  ngOnInit(): void {}
}

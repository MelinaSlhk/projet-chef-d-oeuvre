import { Component, OnInit } from '@angular/core';
import { Paint } from 'src/app/models/paint';
import { PaintsService } from 'src/app/services/paints.service';

@Component({
  selector: 'app-page-my-painting',
  templateUrl: './page-my-painting.component.html',
  styleUrls: ['./page-my-painting.component.css'],
})
export class PageMyPaintingComponent implements OnInit {
  // [x: string]: any;
  allPaints: Paint[] = [];
  paintsToDisplay!: Paint[];
  categories!: string[];
  userInput!: string;
  categoriesChecked!: string[];
  constructor(private paintsService: PaintsService) {}

  ngOnInit() {
    this.loadPaint();

    // this.paintsService.getPaints().subscribe((paints: Paint[]) => {
    //   this.paintsToDisplay = paints;
    //   console.log(this.paintsToDisplay);
    // });
  }

  loadPaint() {
    this.paintsService.getPaints().subscribe((paint) => {
      this.paintsToDisplay = [...paint];
      this.allPaints = [...paint];
      this.categories = [
        ...new Set(this.paintsToDisplay.map((paint) => paint.categorie)),
      ];
      console.log(paint);
    });
  }
  ecouteDeLenfant(categoryDeLenfant: string[]) {
    console.log('categoryDeLenfant', categoryDeLenfant);

    this.paintsToDisplay = this.allPaints.filter((paint) =>
      categoryDeLenfant.includes(paint.categorie)
    );
  }
  onSearchDesParents(e: Event) {
    const onSearchDesParentsElement = e.target as HTMLInputElement;
    this.paintsToDisplay = this.allPaints.filter((paint) => {
      if (
        paint.nom
          .toLowerCase()
          .includes(onSearchDesParentsElement.value.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });
  }

  AlecouteDeLaRecherche(resultUserSearch: string) {
    this.userInput = resultUserSearch;
    this.onUserInteractionFiltre();
  }

  onUserInteractionFiltre() {
    this.paintsToDisplay = [...this.allPaints];
    if (this.userInput) {
      this.paintsToDisplay = this.paintsToDisplay.filter((paint) =>
        paint.nom.toLowerCase().includes(this.userInput.toLocaleLowerCase())
      );
    }
    if (this.categoriesChecked) {
      this.paintsToDisplay = this.paintsToDisplay.filter((paint) =>
        this.categoriesChecked.includes(paint.categorie)
      );
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { PaintsService } from '../../services/paints.service';
import { Paint } from 'src/app/models/paint';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css'],
})
export class PageHomeComponent implements OnInit {
  [x: string]: any;
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

  AlecouteDeLaRecherche(resultUserSearch: string){
    this.userInput = resultUserSearch;
    this.onUserInteractionFiltre()
    }

      onUserInteractionFiltre() {
        this.paintsToDisplay = [...this.allPaints];
        if(this.userInput){
          this.paintsToDisplay = this.paintsToDisplay.filter((paint)=> paint.nom.toLowerCase().includes(this.userInput.toLocaleLowerCase()))}
        if(this.categoriesChecked){
          this.paintsToDisplay = this.paintsToDisplay.filter((paint) => this.categoriesChecked.includes(paint.categorie))
        }
    }
  }
  
  


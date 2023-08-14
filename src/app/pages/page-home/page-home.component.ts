import { Component, OnInit } from '@angular/core';
import { PaintsService } from '../../services/paints.service';
import { Paint } from 'src/app/models/paint';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css'],
})
export class PageHomeComponent implements OnInit {
  paintsToDisplay!: Paint[];

  constructor(private paintsService: PaintsService) {}
  
  ngOnInit() {
   
    this.loadPaint();

    // this.paintsService.getPaints().subscribe((paints: Paint[]) => {
    //   this.paintsToDisplay = paints;
    //   console.log(this.paintsToDisplay);
    // });
  }

  loadPaint(){
    this.paintsService.getPaints().subscribe((paint)=> {
      this.paintsToDisplay = paint;
      console.log(this.paintsToDisplay);
      
    })
  }
}

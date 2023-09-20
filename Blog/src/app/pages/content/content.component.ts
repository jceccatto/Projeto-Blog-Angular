import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  // @Input ()
  photoCover:string = "https://uploads.jovemnerd.com.br/wp-content/uploads/2019/07/robert-downey-jr-comenta-evolucao-de-tony-stark-ao-longo-do-mcu.jpg"
  // @Input ()
  contentTitle:string = "MINHA NOTICIA"
  // @Input ()
  contentDescription:string = "Aqui vou adiiconar alguma noticia blablablablabla"

  constructor(
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }

}

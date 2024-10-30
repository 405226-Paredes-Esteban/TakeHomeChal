import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Character } from '../../model/character';
import { CharacterService } from '../../services/character.service';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, FormControl} from '@angular/forms';
import { CharacterModalComponent } from '../character-modal/character-modal.component';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit{
  characterLst:Character[]=[];
  private readonly characterService = inject(CharacterService);
  private readonly modalService = inject(NgbModal);
  currentPage = 0;
  totalPages = 0;
  
  filterForm:FormGroup= new FormGroup({name:new FormControl('')})

  previousPage(){
    if(this.currentPage!=1){
      this.currentPage--;
      this.getCharacters();
    }
  }

  nextPage(){
    if(this.currentPage<this.totalPages){
      this.currentPage++;
      this.getCharacters();
    } 
  }

  getCharacters(){
    let name = this.filterForm.controls['name'].value;
    this.characterService.getCharacters(name,this.currentPage).subscribe((data)=>{
      console.log(data);
      this.totalPages=data.info.pages;
      this.characterLst=data.results;
    })
  }

  ngOnInit(): void {
    this.currentPage=1;
    this.getCharacters();
  }

  viewCharacter(c:Character){
    const modalRef = this.modalService.open(CharacterModalComponent);
    modalRef.componentInstance.character = c
  }
}

import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Character } from '../../model/character';
import { CharacterService } from '../../services/character.service';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, FormControl} from '@angular/forms';
import { CharacterModalComponent } from '../character-modal/character-modal.component';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap'
import { debounceTime, distinctUntilChanged } from 'rxjs';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { NotFoundModalComponent } from '../not-found-modal/not-found-modal.component';

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
  isLoading:boolean = false;
  searchFilter:FormControl = new FormControl('');

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
    let name = this.searchFilter.value;
    this.isLoading=true;
    this.characterService.getCharacters(name,this.currentPage).subscribe(
      (data)=>{
        this.totalPages=data.info.pages;
        this.characterLst=data.results;
      },
      (error)=>{
        this.modalService.open(NotFoundModalComponent);
      }
    );
    this.isLoading=false;
  }

  ngOnInit(): void {
    this.setupNameSubscription();
    this.currentPage=1;
    this.getCharacters();
  }

  viewCharacter(c:Character){
    const modalRef = this.modalService.open(CharacterModalComponent);
    modalRef.componentInstance.character = c
  }

  private setupNameSubscription(): void {
    this.searchFilter.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(() => this.getCharacters());
  }

  exportPdf() {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });
  
    const title = 'Character List';
    doc.setFontSize(20);
    doc.setTextColor(40, 40, 40);
    doc.text(title, doc.internal.pageSize.getWidth() / 2, 20, { align: 'center' });
    const tableColumn = ['Name', 'Status', 'Species', 'Type', 'Gender','Origin','Location','Created At'];
    const tableRows: any[][] = [];
    
    this.characterLst.forEach(char => {
      const createdAt = new Date(char.created).toISOString().split('T')[0];
        const [year, month, day] = createdAt.split('-');
        const formattedDate = `${day}/${month}/${year}`;
  
      const charData = [
        char.name,
        char.status,
        char.species,
        char.type,
        char.gender,
        char.origin.name,
        char.location.name,
        createdAt
      ];
      tableRows.push(charData);
    });
  
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 25
    });
    
    doc.save('character-list.pdf');
  }
  
}

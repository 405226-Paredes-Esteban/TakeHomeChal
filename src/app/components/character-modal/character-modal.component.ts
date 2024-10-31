import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Character } from '../../model/character';
import { Subscription } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-character-modal',
  standalone: true,
  imports: [],
  templateUrl: './character-modal.component.html',
  styleUrl: './character-modal.component.css'
})
export class CharacterModalComponent{
  @Input() character:Character|undefined;
  @Input() activeModal:NgbActiveModal;

  constructor(activeModal:NgbActiveModal) {
    this.activeModal=activeModal;
  }

  close() {
    this.activeModal.close();
  }
} 

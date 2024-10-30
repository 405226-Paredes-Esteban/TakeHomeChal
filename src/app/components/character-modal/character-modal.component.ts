import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Character } from '../../model/character';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-modal',
  standalone: true,
  imports: [],
  templateUrl: './character-modal.component.html',
  styleUrl: './character-modal.component.css'
})
export class CharacterModalComponent{
  @Input() character:Character|undefined;
} 

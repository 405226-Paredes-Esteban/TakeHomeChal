import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Character } from '../../model/character';
import { LocationService } from '../../services/location.service';
import { Location } from '../../model/location';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-modal',
  standalone: true,
  imports: [],
  templateUrl: './character-modal.component.html',
  styleUrl: './character-modal.component.css'
})
export class CharacterModalComponent implements OnInit, OnDestroy{
  @Input() character:Character|undefined;

  private readonly locationService = inject(LocationService);
  private subscription = new Subscription();
  origin:Location|undefined;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    if(this.character!=undefined){
      this.subscription.add(this.locationService.getLocation(this.character.origin.url).subscribe((data)=>{
        this.origin=data;
      })
    )}
  }
} 

import { Component } from '@angular/core';
import { JsonFormsControl } from '@jsonforms/angular';
import { isControl, RankedTester, rankWith } from '@jsonforms/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatError } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'material-radio-group-control',
  template: `
    <mat-form-field class="textcontrolrenderer" appearance="outline">
      <mat-label>{{ label }}</mat-label>
      <mat-radio-group [formControl]="form">
        <mat-radio-button *ngFor="let option of options" [value]="option">{{ option }}</mat-radio-button>
      </mat-radio-group>
      <mat-error *ngIf="showError()">
        {{ errorMessage }}
      </mat-error>
    </mat-form-field>
  `,
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatRadioModule, MatFormFieldModule]
})
export class MaterialRadioGroupControlRenderer extends JsonFormsControl {
  get options() {
    return this.scopedSchema?.enum || [];
  }
  // Use the base class label property (no override)
  get errorMessage() {
    return this.error;
  }
  showError() {
    return (this.form.touched || this.form.dirty) && !!this.error;
  }
}

export const materialRadioGroupTester: RankedTester = rankWith(
  10, // higher than default enum
  (uischema, schema) => isControl(uischema) && schema?.type === 'string' && Array.isArray(schema.enum)
);

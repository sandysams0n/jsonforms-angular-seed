
import { Component } from '@angular/core';
import { JsonFormsModule } from '@jsonforms/angular';
import { JsonFormsAngularMaterialModule, angularMaterialRenderers } from '@jsonforms/angular-material';
import uischemaAsset from '../../assets/uischema.json';
import schemaAsset from '../../assets/schema.json';
import dataAsset from '../data';

@Component({
  selector: 'app-it-dept-form',
  templateUrl: './it-dept-form.component.html',
  styleUrls: ['./it-dept-form.component.scss'],
  standalone: true,
  imports: [JsonFormsModule, JsonFormsAngularMaterialModule]
})
export class ItDeptFormComponent {
  renderers = [
    ...angularMaterialRenderers
  ];
  uischema = uischemaAsset;
  schema = schemaAsset;
  data: any;
  submitted = false;
  validationMode: 'ValidateAndHide' | 'ValidateAndShow' = 'ValidateAndHide';

  constructor() {
    this.createNewFormInstance();
  }

  createNewFormInstance() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const currentDate = `${yyyy}-${mm}-${dd}`;
    this.data = { ...dataAsset, doj: currentDate };
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    // Add your save logic here
    this.validationMode = 'ValidateAndShow'
    console.log(this.validationMode, "VAL")
  }
}

import { Component } from '@angular/core';
import { angularMaterialRenderers } from '@jsonforms/angular-material';
import { and, createAjv, isControl, optionIs, rankWith, schemaTypeIs, scopeEndsWith, Tester } from '@jsonforms/core';
import { CustomAutocompleteControlRenderer } from './custom.autocomplete';
import { DataDisplayComponent } from './data.control';
import { LangComponent } from './lang.control';
import uischemaAsset from '../assets/uischema.json';
import schemaAsset from '../assets/schema.json';
import dataAsset from './data';
import { parsePhoneNumber } from 'libphonenumber-js';
import { DateAdapter } from '@angular/material/core';


const departmentTester: Tester = and(
  schemaTypeIs('string'),
  scopeEndsWith('department')
);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  renderers = [
    ...angularMaterialRenderers];
  uischema = uischemaAsset;
  schema = schemaAsset;
  data: any;
  submitted = false;
  // i18n = {locale: 'de-DE'}
  // dateAdapter;
  // ajv = createAjv({
  //   schemaId: 'id',
  //   allErrors: true
  // });
  constructor(dateAdapter: DateAdapter<Date>) {
    this.createNewFormInstance();
    // this.ajv.addFormat('time', '^([0-1][0-9]|2[0-3]):[0-5][0-9]$');
    // this.dateAdapter = dateAdapter;
    // dateAdapter.setLocale(this.i18n.locale);
    // this.ajv.addFormat('tel', maybePhoneNumber => {
    //   try {
    //     parsePhoneNumber(maybePhoneNumber, 'DE');
    //     return true;
    //   } catch (_) {
    //     return false;
    //   }
    // });
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
  }
  // this.ajv.addFormat('time', '^([0-1][0-9]|2[0-3]):[0-5][0-9]$');
  // this.dateAdapter = dateAdapter;
  // dateAdapter.setLocale(this.i18n.locale);
  // this.ajv.addFormat('tel', maybePhoneNumber => {
  //   try {
  //     parsePhoneNumber(maybePhoneNumber, 'DE');
  //     return true;
  //   } catch (_) {
  //     return false;
  //   }
  // });
}

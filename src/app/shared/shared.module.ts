import { NbCardModule, NbSpinnerModule, NbButtonModule, NbIconModule, NbDatepickerModule, NbSelectModule, NbInputModule, NbTabsetModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableFormComponent } from './editable-form/editable-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CertificatesComponent } from './certificates/certificates.component';
import { CertIssueDialogComponent } from './certificates/cert-issue-dialog/cert-issue-dialog.component';
import { CertRevokeDialogComponent } from './certificates/cert-revoke-dialog/cert-revoke-dialog.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ThemeModule } from '../@theme/theme.module';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';
import { XmlEditDialogComponent } from './xml-edit-dialog/xml-edit-dialog.component';
import { InputButtonListComponent } from './input-button-list/input-button-list.component';

@NgModule({
  declarations: [
    EditableFormComponent,
    CertificatesComponent,
    CertIssueDialogComponent,
    CertRevokeDialogComponent,
    LeafletMapComponent,
    XmlEditDialogComponent,
    InputButtonListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbCardModule,
    NbSpinnerModule,
    NbButtonModule,
    NbIconModule,
    NbDatepickerModule,
    NbSelectModule,
    NbInputModule,
    NbTabsetModule,
    ThemeModule,
    Ng2SmartTableModule,
    LeafletModule.forRoot(),
    NbSelectModule,
  ],
  exports: [
    EditableFormComponent,
  ]
})
export class SharedModule { }

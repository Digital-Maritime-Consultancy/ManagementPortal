import { ColumnForEntity } from './../../../models/columnForEntities';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../../@core/data/smart-table';

const capitalize = (s): string => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  entityType: string = 'device';
  title = ' for ';

  ngOnInit(): void {
  }
  settings;
  mySettings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: ColumnForEntity[this.entityType],
  };
  showTables = true;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private router: Router) {
    this.entityType = this.router.url.split("/").pop();
    this.entityType = this.entityType.substr(0,this.entityType.length-1);
    this.mySettings.columns = ColumnForEntity[this.entityType];
    this.settings = Object.assign({}, this.mySettings);
    this.title = this.entityType === 'organization' ?
            capitalize(this.entityType) + " list" 
            : capitalize(this.entityType) + " list for " + "Organization";
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSelect(event): void {
    this.router.navigate([this.router.url, event.data.id]);
  }
}

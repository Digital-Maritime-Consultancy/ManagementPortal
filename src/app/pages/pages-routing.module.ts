import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { AuthGuard } from '../auth/app.guard';
import { IrGuideComponent } from './identity-registry/ir-guide/ir-guide.component';
import { SrSearchComponent } from './service-registry/sr-search/sr-search.component';
import { SrGuideComponent } from './service-registry/sr-guide/sr-guide.component';
import { MsrLedgerSearchComponent } from './msr-ledger/msr-ledger-search/msr-ledger-search.component';
import { LedgerGuideComponent } from './msr-ledger/ledger-guide/ledger-guide.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
  path: '',
  component: PagesComponent,
  canActivate: [AuthGuard],
  children: [
    // identity registry
    {
      path: 'ir/devices',
      loadChildren: () => import('../shared/list-view/list-view.module')
        .then(m => m.ListViewModule),
    },
    {
      path: 'ir/services',
      loadChildren: () => import('../shared/list-view/list-view.module')
        .then(m => m.ListViewModule),
    },
    {
      path: 'ir/users',
      loadChildren: () => import('../shared/list-view/list-view.module')
        .then(m => m.ListViewModule),
    },
    {
      path: 'ir/vessels',
      loadChildren: () => import('../shared/list-view/list-view.module')
        .then(m => m.ListViewModule),
    },
    {
      path: 'ir/organizations',
      loadChildren: () => import('../shared/list-view/list-view.module')
        .then(m => m.ListViewModule),
    },
    {
      path: 'ir/apply-org',
      loadChildren: () => import('../shared/list-view/list-view.module')
        .then(m => m.ListViewModule),
    },
    {
      path: 'ir/orgcandidates',
      loadChildren: () => import('../shared/list-view/list-view.module')
        .then(m => m.ListViewModule),
    },
    {
      path: 'ir/acting',
      loadChildren: () => import('../shared/list-view/list-view.module')
        .then(m => m.ListViewModule),
    },
    {
      path: 'ir/roles',
      loadChildren: () => import('../shared/list-view/list-view.module')
        .then(m => m.ListViewModule),
    },
    {
      path: 'ir/agents',
      loadChildren: () => import('../shared/list-view/list-view.module')
        .then(m => m.ListViewModule),
    },
    {
      path: 'ir/guide',
      component: IrGuideComponent,
    },
    // service registry
    {
      path: 'sr/instances',
      loadChildren: () => import('../shared/list-view/list-view.module')
        .then(m => m.ListViewModule),
    },
    {
      path: 'sr/instanceorg',
      loadChildren: () => import('../shared/list-view/list-view.module')
        .then(m => m.ListViewModule),
    },
    {
      path: 'sr/approve-svc',
      loadChildren: () => import('../shared/list-view/list-view.module')
        .then(m => m.ListViewModule),
    },
    {
      path: 'sr/search',
      component: SrSearchComponent,
    },
    {
      path: 'sr/guide',
      component: SrGuideComponent,
    },
    {
      path: 'ledger/search',
      component: MsrLedgerSearchComponent,
    },
    {
      path: 'ledger/guide',
      component: LedgerGuideComponent,
    },
    {
      path: 'about',
      component: AboutComponent,
    },
    {
      path: '',
      redirectTo: 'ir/guide',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

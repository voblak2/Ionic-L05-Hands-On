import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'one', loadChildren: './one/one.module#OnePageModule' },
  { path: 'two', loadChildren: './two/two.module#TwoPageModule' },
  { path: 'three', loadChildren: './three/three.module#ThreePageModule' },
  { path: 'toc', loadChildren: './toc/toc.module#TOCPageModule' },
  { path: 'page-two', loadChildren: './page-two/page-two.module#PageTwoPageModule' },
  { path: 'page-three', loadChildren: './page-three/page-three.module#PageThreePageModule' },
  { path: 'page-five', loadChildren: './page-five/page-five.module#PageFivePageModule' },
  { path: 'page-seven', loadChildren: './page-seven/page-seven.module#PageSevenPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppLayoutComponent, HeaderComponent, MainComponent],
  imports: [CommonModule, RouterModule],
})
export class LayoutsModule {}

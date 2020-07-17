import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';

@NgModule({
  declarations: [SlidesComponent],
  exports: [SlidesComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}

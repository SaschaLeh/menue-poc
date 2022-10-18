import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContextDirective } from './context.directive';

@NgModule({
    declarations: [ContextDirective],
    imports: [CommonModule],
    exports: [ContextDirective],
})
export class ContextModule {}

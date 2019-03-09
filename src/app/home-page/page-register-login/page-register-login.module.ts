/**
 * Created by root on 3/9/19.
 */
import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';

import { PageRegisterComponent } from './page-register.component';
import { PageLoginComponent } from './page-login.component';

@NgModule({
    declarations: [PageRegisterComponent, PageLoginComponent],
    imports: [
        ShareModule
    ],
    exports: [PageRegisterComponent, PageLoginComponent]
})
export class PageRegisterLoginModule { }

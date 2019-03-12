/**
 * Created by root on 3/12/19.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryPageComponent } from './story-page.component';

const routes: Routes = [
    {
        path: 'story',
        component: StoryPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoryPageRoutingModule { }

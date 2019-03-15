/**
 * Created by root on 3/12/19.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryPageComponent } from './story-page.component';
import { StoryHomeComponent } from './story-home.component';
import { StoryRecommendDetailComponent } from './story-recommend-detail.component';
import { StoryDetailComponent } from './story-detail.component';

const routes: Routes = [
    {
        path: 'story',
        component: StoryPageComponent,
        children: [
            {
                path: 'home',
                component: StoryHomeComponent,
            },
            {
                path: 'recommend/:name',
                component: StoryRecommendDetailComponent,
            },
            {
                path: 'detail/:id',
                component: StoryDetailComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoryPageRoutingModule { }

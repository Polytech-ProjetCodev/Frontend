import { NgModule } from '@angular/core';
import { CardComponent } from './card/card';
import { AboutComponent } from './about/about';
import { RecipeComponent } from './recipe/recipe';
@NgModule({
	declarations: [CardComponent,
    AboutComponent,
    RecipeComponent,
    RecipeComponent,
    RecipeComponent,
    RecipeComponent],
	imports: [],
	exports: [CardComponent,
    AboutComponent,
    RecipeComponent,
    RecipeComponent,
    RecipeComponent,
    RecipeComponent]
})
export class ComponentsModule {}

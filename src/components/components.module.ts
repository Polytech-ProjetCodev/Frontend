import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about';
import { RecipeComponent } from './recipe/recipe';
@NgModule({
	declarations: [
    AboutComponent,
    RecipeComponent,
    RecipeComponent,
    RecipeComponent,
    RecipeComponent],
	imports: [],
	exports: [
    AboutComponent,
    RecipeComponent,
    RecipeComponent,
    RecipeComponent,
    RecipeComponent]
})
export class ComponentsModule {}

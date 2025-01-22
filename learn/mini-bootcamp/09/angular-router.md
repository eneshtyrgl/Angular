# Angular Router

This topic describes how to implement many of the common tasks associated with adding the Angular router to your application.

## Generate an application with routing enabled

The following command uses the Angular CLI to generate a basic Angular application with application routes. The application name in the following example is `routing-app`.

### Adding components for routing

To use the Angular router, an application needs to have at least two components so that it can navigate from one to the other. To create a component using the CLI, enter the following at the command line where `first` is the name of your component:

```bash
ng generate component first
```

Repeat this step for a second component but give it a different name. Here, the new name is `second`.

```bash
ng generate component second
```

The CLI automatically appends `Component`, so if you were to write `first-component`, your component would be `FirstComponentComponent`.

### Importing your new components

To use your new components, import them into `app.routes.ts` at the top of the file, as follows:

```typescript
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
```

## Defining a basic route

There are three fundamental building blocks to creating a route.

Import the routes into `app.config.ts` and add it to the `provideRouter` function. The following is the default `ApplicationConfig` using the CLI.

```typescript
export const appConfig: ApplicationConfig = { providers: [provideRouter(routes)] };
```

The Angular CLI performs this step for you. However, if you are creating an application manually or working with an existing, non-CLI application, verify that the imports and configuration are correct.

### 1. Set up a `Routes` array for your routes

The Angular CLI performs this step automatically.

```typescript
import { Routes } from '@angular/router';
export const routes: Routes = [];
```

### 2. Define your routes in your `Routes` array

Each route in this array is a JavaScript object that contains two properties. The first property, `path`, defines the URL path for the route. The second property, `component`, defines the component Angular should use for the corresponding path.

```typescript
const routes: Routes = [
    { path: 'first-component', component: FirstComponent },
    { path: 'second-component', component: SecondComponent },
];
```

### 3. Add your routes to your application

Now that you have defined your routes, add them to your application. First, add links to the two components. Assign the anchor tag that you want to add the route to the `routerLink` attribute. Set the value of the attribute to the component to show when a user clicks on each link. Next, update your component template to include `<router-outlet>`. This element informs Angular to update the application view with the component for the selected route.

```html
<h1>Angular Router App</h1>
<nav>
    <ul>
        <li><a routerLink="/first-component" routerLinkActive="active" ariaCurrentWhenActive="page">First Component</a></li>
        <li><a routerLink="/second-component" routerLinkActive="active" ariaCurrentWhenActive="page">Second Component</a></li>
    </ul>
</nav>
<!-- The routed views render in the <router-outlet> -->
<router-outlet></router-outlet>
```

You also need to add the `RouterLink`, `RouterLinkActive`, and `RouterOutlet` to the `imports` array of `AppComponent`.

```typescript
@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink, RouterLinkActive],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'routing-app';
}
```

## Resource
For more information, visit the [Angular Router Guide](https://angular.dev/guide/routing/common-router-tasks).

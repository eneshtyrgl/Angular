# Angular 101

## Table of Contents
1. [Angular Architecture Overview](#angular-architecture-overview)
2. [Setting Up Development Environment](#setting-up-development-environment)
3. [Angular CLI Deep Dive](#angular-cli-deep-dive)
4. [Creating Your First Project](#creating-your-first-project)
5. [Building Basic Components](#building-basic-components)

## Angular Architecture Overview

![Angular Architecture Overview](../../../assets/angular-architecture-overview.png)

### Main Building Blocks

- **Modules**: Containers for organizing code, grouping related features and components. Types: Root, Feature, Shared, Core, Routing.
- **Components**: Building blocks of the UI. Contains TypeScript class, HTML template, optional styles. Each has its own logic and view.
- **Templates**: HTML files with Angular syntax. Shows dynamic data, handles user interactions using data binding and directives.
- **Metadata**: Decorators that tell Angular how to process classes. Examples: @Component, @Injectable, @Input, @Output.
- **Data Binding**: Connects component data to template. Types: Interpolation {{data}}, Property binding [], Event binding (), Two-way [(ngModel)].
- **Directives**: Instructions for DOM manipulation. Types: Components, Structural (*ngIf, *ngFor), Attribute (ngStyle, ngClass).
- **Services**: Shared data and logic used across components. Handles business logic and data operations.
- **Dependency Injection**: System for providing dependencies. Makes code reusable and testable, manages service instances.

All these parts work together to create a complete Angular application. Think of it like building blocks where each piece has its specific role and purpose.

### Architecture Diagram
```
Angular Application
├── Modules (NgModule)
│   ├── Declarations (Components, Directives, Pipes)
│   ├── Imports (Other Modules)
│   ├── Providers (Services)
│   └── Bootstrap (Root Component)
│
├── Components
│   ├── Class (TypeScript)
│   ├── Template (HTML)
│   ├── Metadata (@Component)
│   └── Data Binding
│       ├── Interpolation {{}}
│       ├── Property Binding []
│       ├── Event Binding ()
│       └── Two-way Binding [()]
│
├── Services
│   ├── Business Logic
│   ├── Data Access
│   └── Dependency Injection
│
└── Directives
    ├── Components
    ├── Structural (*ngIf, *ngFor)
    └── Attribute ([ngStyle], [ngClass])
```

## Setting Up Development Environment

### Prerequisites
1. Install Node.js (LTS version recommended)
2. Install npm (comes with Node.js)
3. Install Git (optional but recommended)

### Installing Angular CLI
```bash
# Install Angular CLI globally
npm install -g @angular/cli

# Verify installation
ng version
```

### IDE Recommendations
- Visual Studio Code with extensions:
  - Angular Language Service
  - Angular Snippets
  - Angular Console
  - TSLint

## Angular CLI Deep Dive

### Common CLI Commands
```bash
# Create new project
ng new project-name

# Generate components
ng generate component component-name
# or shorter version
ng g c component-name

# Generate services
ng generate service service-name
# or shorter version
ng g s service-name

# Build project
ng build

# Run tests
ng test

# Run linter
ng lint
```

### CLI Configuration
The `angular.json` file contains project configuration:
```json
{
  "projects": {
    "my-app": {
      "architect": {
        "build": {
          "options": {
            "outputPath": "dist/my-app",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json"
          }
        }
      }
    }
  }
}
```

## Creating Your First Project

### Generate New Project
```bash
ng new my-first-app # or
ng new my-first-app --no-standalone

# Answer the following questions:
# ? Would you like to add Angular routing? Yes
# ? Which stylesheet format would you like to use? SCSS
```

## Building Basic Components

First, generate all required components:

```bash
# Generate header component
ng generate component components/header

# Generate main component
ng generate component components/main

# Generate footer component
ng generate component components/footer
```

### Header Component

```html
<!-- src/app/components/header/header.component.html -->
<header>
    <h1>My Angular App</h1>
</header>
```

```typescript
// src/app/components/header/header.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
```

### Main Component

```html
<!-- src/app/components/main/main.component.html -->
<main>
    <h2>Main Content</h2>
    <p>{{content}}</p>
</main>
```

```typescript
// src/app/components/main/main.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  content = 'Welcome to my first Angular application!';
}

```

### Footer Component

```html
<!-- src/app/components/footer/footer.component.html -->
<footer>
    <p>My Angular App</p>
</footer>
```

```typescript
// src/app/components/footer/footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
```

### Connecting Components

Update the app module to include all components:

```typescript
// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Finally, update the app component to use all components:

```typescript
// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
}

```

```html
<!-- src/app/app.component.html -->
<div>
  <app-header></app-header>
  <app-main></app-main>
  <app-footer></app-footer>
</div>
```

To test, run:
```bash
ng serve
```
Visit `http://localhost:4200` to see all components rendered together.
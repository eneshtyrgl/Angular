# Angular Basics

## Components and Templates
Angular applications are built using components and templates. Components are the building blocks of the UI, and each component has its own logic and view. Templates are HTML files with Angular syntax that show dynamic data and handle user interactions using data binding and directives.

### Creating Components
To create a new component, use the Angular CLI command:
```bash
ng generate component component-name
# or shorter version
ng g c component-name
```

### Data Binding
Data binding connects component data to the template. There are four types of data binding in Angular:
1. **Interpolation**: `{{ data }}`
2. **Property Binding**: `[property]="data"`
3. **Event Binding**: `(event)="handler"`
4. **Two-way Binding**: `[(ngModel)]="data"`

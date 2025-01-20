# Angular Directives


## Structural Directives

**Structural directives** are responsible for HTML layout. They shape or reshape the DOM's structure, typically by adding, removing, or manipulating elements. The two most common structural directives in Angular are `*ngIf` and `*ngFor`.

1. **`*ngIf`**: This directive conditionally includes a template based on the value of an expression. If the expression evaluates to true, Angular includes the template; otherwise, it is removed.

```html
<div *ngIf="isVisible">This text is conditionally visible.</div>
```

2. **`ngFor`**: This directive is used to repeat a template for each item in a list. It is similar to a loop in programming.

```html
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```

## Attribute Directives

**Attribute directives**  change the appearance or behavior of an element, component, or another directive. The two common attribute directives are `ngClass` and `ngStyle`.

1. **`ngClass`**: This directive adds and removes a set of CSS classes.

```html
<div [ngClass]="{'active': isActive, 'disabled': isDisabled}">Styled Div</div>
```
2. **`ngStyle`**: This directive allows you to set inline styles dynamically.

```html
<div [ngStyle]="{'color': textColor, 'font-size': fontSize}">Styled Text</div>
```
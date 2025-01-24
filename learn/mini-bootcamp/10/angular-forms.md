# Angular Forms

## Angular Forms Overview

Applications use forms to enable users to log in, update a profile, enter sensitive information, and perform many other data-entry tasks. Angular provides two different approaches to handling user input through forms: reactive and template-driven. Both capture user input events from the view, validate the user input, create a form model and data model to update, and provide a way to track changes.

### Choosing an Approach

Reactive forms and template-driven forms process and manage form data differently. Each approach offers different advantages.

#### Key Differences

The following table summarizes the key differences between reactive and template-driven forms.

| Feature     | Reactive Forms                            | Template-driven Forms                           |
|-------------|-------------------------------------------|-------------------------------------------------|
| Setup       | Explicit, in the component class          | Implicit, in the template                       |
| Data Flow   | Synchronous                               | Asynchronous                                    |
| Testing     | Easier, no need for deep change detection | Requires deep understanding of change detection |
| Scalability | More scalable                             | Less scalable                                   |

### Setting Up the Form Model

Both reactive and template-driven forms track value changes between the form input elements that users interact with and the form data in your component model. The two approaches share underlying building blocks but differ in how you create and manage the common form-control instances.

#### Setup in Reactive Forms

With reactive forms, you define the form model directly in the component class. The `[formControl]` directive links the explicitly created `FormControl` instance to a specific form element in the view.

```typescript
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-reactive-favorite-color',
    template: `Favorite Color: <input type="text" [formControl]="favoriteColorControl">`,
    standalone: false,
})
export class FavoriteColorComponent {
    favoriteColorControl = new FormControl('');
}
```

#### Setup in Template-driven Forms

In template-driven forms, the form model is implicit. The `NgModel` directive creates and manages a `FormControl` instance for a given form element.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-template-favorite-color',
    template: `Favorite Color: <input type="text" [(ngModel)]="favoriteColor">`,
    standalone: false,
})
export class FavoriteColorComponent {
    favoriteColor = '';
}
```

### Data Flow in Forms

When an application contains a form, Angular must keep the view in sync with the component model and the component model in sync with the view. Reactive and template-driven forms differ in how they handle data flowing from the user or from programmatic changes.

#### Data Flow in Reactive Forms

In reactive forms, each form element in the view is directly linked to the form model (a `FormControl` instance). Updates from the view to the model and from the model to the view are synchronous.

#### Data Flow in Template-driven Forms

In template-driven forms, each form element is linked to a directive that manages the form model internally. The data flow is asynchronous and relies on Angular's change detection.

### Form Validation

Validation is an integral part of managing any set of forms. Whether you're checking for required fields or querying an external API for an existing username, Angular provides a set of built-in validators as well as the ability to create custom validators.

| Forms                 | Details                                                                                                  |
|-----------------------|----------------------------------------------------------------------------------------------------------|
| Reactive forms        | Define custom validators as functions that receive a control to validate                                 |
| Template-driven forms | Tied to template directives, and must provide custom validator directives that wrap validation functions |

#### Built-in Validators

Angular provides several built-in validators that can be used with both reactive and template-driven forms. Some of the commonly used validators include:

- `required`: Ensures the control is not empty.
- `minlength` and `maxlength`: Ensure the control's value length falls within a specific range.
- `pattern`: Ensures the control's value matches a regex pattern.
- `email`: Ensures the control's value is a valid email address.

#### Custom Validators

Custom validators can be created to handle specific validation logic. In reactive forms, custom validators are functions that take a control as an argument and return an error object or `null`. In template-driven forms, custom validators are implemented as directives.

##### Example of a Custom Validator in Reactive Forms

```typescript
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
}
```

##### Example of a Custom Validator in Template-driven Forms

```typescript
import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
    selector: '[appForbiddenName]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenNameValidatorDirective, multi: true }]
})
export class ForbiddenNameValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        return forbiddenNameValidator(/bob/i)(control);
    }
}
```

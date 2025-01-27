# Angular Animations

## Getting started

The main Angular modules for animations are `@angular/animations` and `@angular/platform-browser`.

To get started with adding Angular animations to your project, import the animation-specific modules along with standard Angular functionality.

## Enabling the animations module

To use animations in your Angular project, you need to enable the animations module. Import `provideAnimationsAsync` from `@angular/platform-browser/animations/async` and add it to the providers list in the `bootstrapApplication` function call.

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
    providers: [
        provideAnimationsAsync(),
    ]
});
```

### Immediate Animations

If you need to have an animation happen immediately when your application is loaded, you will want to switch to the eagerly loaded animations module. Import `provideAnimations` from `@angular/platform-browser/animations` instead, and use `provideAnimations` in place of `provideAnimationsAsync` in the `bootstrapApplication` function call.

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
    providers: [
        provideAnimations(),
    ]
});
```

### NgModule-based Applications

For NgModule-based applications, import `BrowserAnimationsModule`, which introduces the animation capabilities into your Angular root application module.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule
    ],
    declarations: [],
    bootstrap: []
})
export class AppModule { }
```

## Importing animation functions into component files

If you plan to use specific animation functions in component files, import those functions from `@angular/animations`.

```typescript
import { trigger, state, style, transition, animate } from '@angular/animations';
```

## Adding the animation metadata property

In the component file, add a metadata property called `animations` within the `@Component()` decorator. You put the trigger that defines an animation within the `animations` metadata property.

```typescript
@Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.css'],
    animations: [
        trigger('exampleAnimation', [
            // animation definitions
        ])
    ]
})
export class ExampleComponent { }
```

## Animating a transition

Let's animate a transition that changes a single HTML element from one state to another. Define the states and transitions for your animation.

```typescript
animations: [
    trigger('exampleAnimation', [
        state('start', style({
            opacity: 1
        })),
        state('end', style({
            opacity: 0
        })),
        transition('start => end', [
            animate('1s')
        ]),
        transition('end => start', [
            animate('0.5s')
        ])
    ])
]
```

## Animation state and styles

Use Angular's `state()` function to define different states to call at the end of each transition. Define the styles for each state in your animation.

```typescript
state('start', style({
    opacity: 1,
    transform: 'translateX(0)'
})),
state('end', style({
    opacity: 0,
    transform: 'translateX(100%)'
}))
```

## Transitions and timing

Specify the timing for each transition using the `transition()` and `animate()` functions.

```typescript
transition('start => end', [
    animate('1s ease-in')
]),
transition('end => start', [
    animate('0.5s ease-out')
])
```

## Triggering the animation

An animation requires a trigger, so that it knows when to start. Use the `@triggerName` binding in your template to trigger the animation.

```html
<div [@exampleAnimation]="animationState" (click)="toggleAnimation()">
    Click me to animate
</div>
```

## Defining animations and attaching them to the HTML template

Define the animation state in your component class and create a method to toggle the state.

```typescript
export class ExampleComponent {
    animationState = 'start';

    toggleAnimation() {
        this.animationState = this.animationState === 'start' ? 'end' : 'start';
    }
}
```

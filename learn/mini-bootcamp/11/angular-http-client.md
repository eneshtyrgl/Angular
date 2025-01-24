# Angular HTTP Client

## Introduction
This documentation will guide you through using the Angular HTTP Client to connect to RESTful APIs. The Angular HTTP Client is a powerful tool for making HTTP requests in Angular applications.

## Setting Up
Create a new Angular project using the Angular CLI:
```bash
ng new my-angular-app
cd my-angular-app
```

## Installing HttpClientModule
To use the HTTP Client, you need to provide it using the `provideHttpClient` helper function in your Angular application. Open `app.module.ts` and add the following import:
```typescript
import { provideHttpClient } from '@angular/common/http';

@NgModule({
    declarations: [
        // your components
    ],
    providers: [
        provideHttpClient()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

## Making HTTP Requests
### GET Request
To make a GET request, you need to inject the `HttpClient` service into your component or service:
```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrl = 'https://api.example.com/data';

    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get(this.apiUrl);
    }
}
```

### POST Request
To make a POST request, use the `post` method of the `HttpClient` service:
```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrl = 'https://api.example.com/data';

    constructor(private http: HttpClient) { }

    postData(data: any) {
        return this.http.post(this.apiUrl, data);
    }
}
```

### PUT Request
To make a PUT request, use the `put` method of the `HttpClient` service:
```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrl = 'https://api.example.com/data';

    constructor(private http: HttpClient) { }

    updateData(id: string, data: any) {
        return this.http.put(`${this.apiUrl}/${id}`, data);
    }
}
```

### DELETE Request
To make a DELETE request, use the `delete` method of the `HttpClient` service:
```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrl = 'https://api.example.com/data';

    constructor(private http: HttpClient) { }

    deleteData(id: string) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
```

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { HelloWorldComponent } from './app/hello-world/hello-world.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([{ path: 'hello-world', component: HelloWorldComponent }]),
  ],
}).catch((err) => console.error(err));

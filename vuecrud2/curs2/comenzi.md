# 1. Instalam Angular daca nu este instalat

```
npm install -g @angular/cli
```

# 2. Ne pozitionam in folderul aplicatiei

### cd /...../angularcrud

# 3. Facem un nou proiect

```
ng new frontend
```

### Would you like to add Angular routing? (y/N) y

### Which stylesheet format would you like to use? CSS

# 4. Ne mutam in folderul de proiect

```
cd frontend
```

# 5. Instalam dependentele din proiect si pornim serverul Angular "javascript"

```
ng serve
```

## http://localhost:4200/

# 6. Setting up Angular HttpClient

```
src/app/app.config.ts
withFetch - ca sa putem face cereri fetch
import { provideHttpClient,withFetch } from '@angular/common/http';

 providers: [
   provideHttpClient(withFetch()),
    ...
 ]
```

# 7. User Model

```
ng g i models/user
```

### Adaugam

```
  id: number;
  nume: string;
  prenume: string;
  datanastere: Date; //string
  email: string;
  telefon: string;
  dataadaugare?: Date;
  cnp?: string;
  poza?: string;
  actiune?: string;
  users?: any;
```

# 8. Angular Service

```
 ng generate service api    sau ng g s api
```

### import { HttpClient } from '@angular/common/http';

### Injectam HttpClient ca instanta private httpClient in constructor.

### Acest procedeu se numeste dependency injection.

- https://en.wikipedia.org/wiki/Dependency_injection
- https://angular.io/guide/dependency-injection

# 9. In api.sercice.ts definim metodele CRUD

# 10. Componenta Angular: Admin

```

ng generate component admin sau ng g c admin

```

# 11. Adaugam componenta Admin in route src/app/app.routes.ts

```

const routes: Routes = [  
{ path: 'admin', component: AdminComponent }
];

```

# 12. In app.component.html lasam doar ultimul rand

```

<router-outlet></router-outlet>

```

# 13. Importam "injectam", in AdminComponent : /admin/admin.component.ts, ApiService

# 14. http://localhost:4200/admin

# 15. Optional: Instalam bootstrap 5

```

npm install bootstrap --save


```

### Adaugam in angular.json

```

"styles": [
"node_modules/bootstrap/dist/css/bootstrap.min.css",
"src/styles.css"
],

"scripts": [

    "node_modules/bootstrap/dist/js/bootstrap.min.js"
]

.....

```

# 16. Adaugam cod HTML in admin.component.html

### Sau descarcam aplicatia de pe github

- https://github.com/aadiaconitei/

###

```

npm install
ng serve

```

# 17. Adaugam functionalitati noi

```

ng g c navbar
ng g c footer
ng g c profil
ng g c home

```

### Adaugam navbar si footer in app.componemt.html

```

<app-navbar></app-navbar>
<router-outlet></router-outlet>
<app-footer></app-footer>

```

### Definim rutele in app.routing.ts

### Pozele

```
in backend in server.ts
app.use("/uploads", express.static("dist/uploads"));
apoi testam daca vedem poza din backend
http://localhost:3002/uploads/1748454842298_poza2.png

in frontend
Creează fișierele environment.ts și environment.prod.ts

apoi in angular.json
"configurations": {
  "production": {
    ...
    "fileReplacements": [
      {
        "replace": "src/environments/environment.ts",
        "with": "src/environments/environment.prod.ts"
      }
    ]
  }
}


apoi in componenta sau serviciu
apiUrl = environment.API_URL;

```

### Exportam proiectul

```

ng build --aot

```

```

```

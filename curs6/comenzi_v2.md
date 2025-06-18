## Frontend React CRUD

```
npm create vite@latest frontend -- --template react-ts
cd frontend
npm view react version
npm install
```
##

``` //vite.config.ts
    server: {
        port: 3000,
},
```
```
npm run dev
```



### Instalam modulele necesare

```


npm i --save react-bootstrap@next bootstrap@5.3 react-router-dom axios formik npm date-fns
npm install --save-dev @types/react-router-dom
```
 ###optional
```
npm i --save-dev @babel/plugin-proposal-private-property-in-object
```

###src/main.tsx
```
import 'bootstrap/dist/css/bootstrap.min.css';
```

### Structura 
# Creează directoarele
mkdir -p src/components
mkdir -p src/pages
mkdir -p src/services
mkdir -p src/types

# Componente Creează fișierele în directoare
##### CREATE
touch src/components/UserForm.tsx
touch src/components/CreateUser.tsx
##### Read
touch src/components/UserList.tsx
touch src/components/UserTableRow.tsx
##### Update
touch src/components/EditUser.tsx
##### Pagini
touch src/pages/HomePage.tsx
touch src/pages/NotFound.tsx

touch src/services/api.ts
touch src/types/User.ts
touch src/routes.tsx
touch src/config.ts


### Edit App.tsx


- importam react-router-dom
- importam componentele necesare: CreateUser, EditUser, UserList
- definim meniul si rutele respective

### Edit App.css

### La final

```
npm run build
```

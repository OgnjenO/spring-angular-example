# Instalacija
U terminalu : 
```
node --version
```
- U slucaju da node nije instaliran, instalirati sa https://nodejs.org/en/download
### Prvo pokretanje
1. Klonirate repozitorijum u neki folder : `git clone ***link*** .`
2. Importovati projekat u Eclipse : 
    1. File->Import
    2. Maven->Existing Maven Projects
    3. Browse->***folder u kom se nalazi src, target...***
    4. Finish
3. Promeniti Build path : 
    1. Desni klik na projekat->Build Path->Configure Build Path...
    2. Libraries->JRE System Library->Edit
    3. Izabrati JDK 1.8
    4. Finish
    5. Apply and Close
4. Desni klik->Run as->Maven Install
5. U terminalu doci do `folder_projekta/frontend/`
6. Pokrenuti `npm install` (Instalira sve potrebne module za frontend)
7. Pokrenuti `ng build` (Kompajluje frontend i dodaje u spring aplikaciju)

### Pokretanje same aplikacije
1. Desni klik na projekat->Run as->Java application\
(Izabrati `StudentskaSluzbaApplication - com.sutdentskaSluzba`)
2. Otvoriti aplikaciju na adresi `localhost:8080`

### Pokretanje samo frontend-a
1. U terminalu doci do `folder_projekta/frontend/`
2. Pokrenuti `ng serve`
3. Otvoriti aplikaciju na adresu `localhost:4200`

### Pokretanje aplikacije uz uzivo ocitavanje promena na frontend-u
1. U terminalu doci do `folder_projekta/frontend/`
2. Pokrenuti `ng build --watch`
3. Desni klik na projekat->Run as->Java application\
(Izabrati `StudentskaSluzbaApplication - com.sutdentskaSluzba`)
4. Otvoriti aplikaciju na adresu `localhost:8080`


# Angular
## Svi folderi se nalaze u `folder_projekta/frontend/src/`
- app/app-routing.module.ts

   Koji linkovi vode do kojih komponenti

- app/app.component.html

   Osnovna HTML strana koja se uvek prikazuje\
<app-navbar> ubaca HTML kod od navbar komponente (navedena sledeca u list)
<router-outlet> ubaca HTML kod komponente do koje trenutni link vodi

- app/navigation/navbar/navbar.component.html

   HTML kod za navbar koji se kaci na app.component.html preko <app-navbar> taga. Ime taga se nalazi u istoimenom fajlu kao HTML sa ekstenzijom .ts (`selector: 'app-navbar'`)

- app/admin/default/default.component.html

    HTML kod za pocetnu stranu (odredjena je da je pocetna kroz app-routing.module.rs)\
    Na liniji **4** stoji primer kako Angular prikazuje promenljivu iz JS-a (`default.component.ts`)\
    Na liniji **28-36** stoji primer kako prikazati `for` petljom niz podataka iz JS-a (`default.component.ts`)
# webpack-config

```
├── src                         # główny folder, z którego pobierać będzie pliki źródłowe Webpack
    ├── components
        ├── App
            ├── App.js
            └── App.scss
        ├── Contact
            ├── Contact.js
            └── Contact.scss
        ├── Nav
            ├── Nav.js
            └── Nav.scss
        ├── Users
            ├── User
                └── User.js
            ├── Users.js
            └── Users.scss
        └── UserView
            └── UserView.js
    ├── index.html              # template dla HtmlWebpackPlugin
    └── index.js                # główny plik wejściowy z całą naszą aplikacją
├── .gitignore
├── LICENSE
├── package-lock.json           # lockfile dla npm@5
├── package.json                # indeks dependencji i deklaracje skryptów
├── README.md
├── webpack.config.json         # główny plik konfiguracyjny Webpacka
└── yarn.lock                   # lockfile dla Yarna
```

W `package.json` wypisane są wszystkie potrzebne nam paczki, stąd jedyne co potrzebujemy z nim zrobić to `npm i`/`yarn` i wszystkie dependencje z pliku zostaną automatycznie ściągnięte i wrzucone do `./node_modules`.

`webpack.config.js` zawiera cały config webpackowy, w tym ustawienia dla `webpack-dev-server`. `HtmlWebpackPlugin` automatycznie ładuje zbundlowany JS do podanego pliku HTML (w tym przypadku `./src/index.html`), a `historyApiFallback` zwraca index.html w momencie wystąpienia 404, co pozwala React Routerowi działać poprawnie.

`package-lock.json`/`yarn.lock` - lockfile dla konkretnych wersji paczek, przydatny, żebyśmy wszyscy byli na dokładnie tym samym setupie.

*dlaczego `.js`, a nie `.jsx`?*
(https://github.com/facebookincubator/create-react-app/issues/87)

Instalacja
------
```
npm i
```

lub

```
yarn
```

Uruchomienie
------
```
npm start
```

Budowanie
------
```
npm run build
```

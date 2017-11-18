# webpack-config

## Ahem. No to tak:

W `package.json` wypisane są wszystkie potrzebne nam paczki, stąd jedyne co potrzebujemy z nim zrobić to `npm i`/`npm install` i wszystkie dependencje z pliku zostaną automatycznie ściągnięte i wrzucone do `./node_modules`.

`webpack.config.js` zawiera cały config webpackowy, w tym standardowego watchera (_fuu_), jak i ustawienia dla `webpack-dev-server` (_yaaay_). `HtmlWebpackPlugin` automatycznie ładuje zbundlowany JS do podanego pliku HTML, w tym przypadku `index.html`. Ustawienia `historyApiFallback` będą nam potrzebne przy okazji React Router. **Jedyne co sobie edytujecie to tak naprawdę `entry` i `output.filename` (+ ew. `output.path`, jeśli `dist` Wam z jakiegoś powodu nie leży).**

`package-lock.json` - lockfile dla konkretnych wersji paczek, przydatny, żebyśmy wszyscy byli na dokładnie tym samym setupie. (podziękujcie Mariannie, że mnie przekonała do npm@5, bo bym Was jeszcze męczył Yarnem - a tak serio, warto poczytać o lockfile'ach, czy to w npm@5 czy w Yarnie, _hot shit I tell ya_)

`.gitignore` - well, wiadomka, żebyśmy za każdym razem nie pakowali 100 megów dziadostwa na Gita, `package.json` nam wystarczy. Tak samo `dist` jest nam w repo zbędny.

###TODO: Zobowiązuję się niniejszym do zaktualizowania tego setupu po zakończeniu wszystkich prezek - wywalimy `watch: true;` na dobre i ogarniemy zajebisty `webpack-dev-server` ze wszystkimi fajnymi bajerami (SASSem np.), żeby chociaż projekty końcowe szły sprawniej jeśli chodzi o build \m/

_a, no i z `.jsx`em się pożegnamy na zawsze, srsly - mamy 2017._
https://github.com/facebookincubator/create-react-app/issues/87

Strukturę katalogu sobie śmiało edytujcie, tylko pamiętajcie o zmianach `path`ów we wszystkich configach :)

#### 1.
```
npm i
```

#### 2.
```
webpack-dev-server
```

lub jeśli naprawdę musicie (soniamdisappoint.jpg)

```
webpack
```

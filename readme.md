adat.js: Ez tartalmazza az objektumlistánkatkat, jelen esetben a videókártyák adatait kulcs érték párokkal.

main.js:
pInit(): public init, ez tölti be az egész publikus oldalt(document readiyvel) (index.html)paramétere a lista ami esetünkben az objektumlistám, meghívódik benne a: megjelenit(), select(),szovegSzerint(),kosarBarak(),kosarUrites(),localMentes() metódus.

megjelenit(lista, szuloElem, fv): Ez a metódus felel azért, hogy az admin és a public oldalak is betöltsenek úgy, hogy egy metódust használunk. Paraméterei a lista, szülőElem, amibe majd belekerül a szöveg, és van egy referencia függvény, fv paraméter is, ami az adott oldal elkészítési metódusát fogja tartalmazni.

admin.js:
aInit(): Ez az admin oldalért felel, szinten ő tölti be az egészet (document readiyvel) (admin.html)paramétere a lista ami esetünkben az objektumlistám, meghívódik benne a: megjelenit(), adminrendezesArszerint(),sortorles(),adatFelvisz() metódus.

kartyakeszit.js:
cardkeszit(objektumlista): Ez a függvény felel a kártyák generálásáért. Minden objektumhoz tartozik egy kártya, amely tartalmaz egy képet, egy címet, a gyártó nevét és az árat, valamint egy "Kosárba!" gombot. Paramétere az objektumlista.

tablazatKeszit(objektumlista): Ez a függvény felel a kártyák létrehozásáért. Minden objektumhoz egy sor tartozik a táblázatban, amely tartalmazza az objektum néhány tulajdonságát (Név, Gyártó, Ár), valamint a "Törlés" gombot. Paramétere az objektumlista.

adatfelvisz.js:
adatFelvisz(lista): Ez a metódus lehetővé teszi az új adatok felvitelét egy listába. Az adatokat input elem segítségével veszi fel, és ezeket hozzáadja a megadott listához. Emellett az adatok hozzáadása után az aInit()  metódus is meghívódik hogy a frissített listával töltsön be az oldal.

adminrendez.js:
adminrendezesArszerint(lista): Ez a metódus lehetővé teszi az objektumok listájának rendezését ár szerint. Amikor a felhasználó rákattint az árak oszlopára a táblázatban, meghívodik a rendezArSzerint(lista.katt) metódus,és  a lista az árak szerint növekvő vagy csökkenő sorrendben rendeződik, és frissíti a felületet az aInit()-el.

kosar.js:
beir(elem,elem2): A beir metódus a kiir elembe ír be egy szöveget az általad megadott adatok alapján. Ez ugye a kosár, 2 paramétere van: az egyik hogy melyik kártyát választotta, a másik hogy mennyibe került az adott kártya és ezeket írja bele az elembe.

localurit(): Kiüríti a local storage-et

kosarBarak(lista, koslista): A kosár gombra rakunk egy esemény kezelőt, majd ha ezt a felhasználó megnyomja az elem bekerül a kosárba (kosárlista) és kiírásra kerül. Paraméterei a lista és a kosárlista.

localHozAd(lista): Ez adja hozzá a local storage-hez az adott elemeket. Paramétere a kosárlista.

localMentes(lista): A mentés gomb esemény kezelője, mentésnél berakja a kiválasztott elemeket a local storage-be, meghívódik a fentebb említett localHozAd metódus benne. Paramétere a kosárlista.

rendezesek.js:
rendezArszerint(lista,irany): Rendezi a listát irány szerint a sort funkcióval,paramétere lista, irany.

rendezNevszerint(lista): Rendezi a listát névsorrendben , paramétere: lista.

sortorol.js:
sortorles(objektumlista): Ez  ametódus a törlés gomb esemény kezelőéért felel, az admin felületen a kukára kattintva kitöröl egy egész sort majd ujratölti az oldalt, paramétere:lista.

szuresek.js:
szures(lista,szurtSzoveg): Ez a függvény vissza ad egy szűrt listát a paraméterben kapott szöveg szerint.

szovegSzerint(lista): A keresés mezőnek az eseménykezelője ,'keyup', ha begépelsz egy szöveget a szures() függvény megszűri a listát és már a szűrt elemekkel tölti be újra az oldalt, paramétere a lista.

valasztottrendezes.js:
select(lista): ez a metódus felel a publikus felületen a kiválasztott rendezés lefuttatásáért (select eseménykezelője)igény szerint meghívódik a rendezArszerint() vagy a rendezNevszerint() metódus illetve újratölti az oldalt a pInit()-el, paramétere a lista.

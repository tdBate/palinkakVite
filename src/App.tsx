import BevezetoResz from "./components/BevezetoResz";
import Fejlec from "./components/Fejlec";
import ListaCard from "./components/ListaCard";

function App() {
  return (<>
    <Fejlec></Fejlec>
    <BevezetoResz title="Mit érdemes tudni a pálinkáról?">

      <p>
        A pálinka a magyar gasztronómiai és kulturális hagyományok egyik
        ismert itala. Készítése során erjesztett gyümölcsből lepárlással
        állítanak elő gyümölcspárlatot.
      </p>

      <p>
        A pálinka készítésének egyik fontos alapanyaga a megfelelő
        minőségű, érett gyümölcs. Gyakori alapanyag például az alma, a
        szilva, a körte, a meggy és a kajszibarack.
      </p>

      <p>
        A jó minőségű pálinka készítésénél az alapanyag minősége és a
        megfelelő technológia egyaránt fontos.
      </p>

    </BevezetoResz>

    <ListaCard title="Gyakori alapanyagok" list={["alma", "körte", "asdp"]} numbered={false}></ListaCard>
  </>)
}

export default App;
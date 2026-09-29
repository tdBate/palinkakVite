import BevezetoResz from "./components/BevezetoResz";
import Fejlec from "./components/Fejlec";
import ListaCard from "./components/ListaCard";
import PictureCard from "./components/PictureCard";
import Tabla from "./components/Tabla";

function App() {
  return (<>

    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <Fejlec></Fejlec>
        </div>
      </div>
    </div>

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

    <Tabla lista={["a", "b", "c", "d", "e", "f", "g"]}></Tabla>

    <PictureCard title="Segítség" img_source="/images/birsalma.jpg" text="Haza akarok menni"></PictureCard>
  </>)
}

export default App;
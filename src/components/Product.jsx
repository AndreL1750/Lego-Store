import Cards from "./Cards";
import Filters from "./Filters";

export default function Product() {

    //const labelFilters = ["Architecture", "City", "Marvel", "Angry Birds™", "DUPLO®", "Creator Expert", "Disney™"];
    
    return (
        <main className="Product">
            <div className="filtering">
                <div>A mostrar X produto(s)</div>
                <div className="filter-div">
                    Filter:
                    <select className="filter">
                        <option>Recomendados</option>
                        <option>Preço: Mais baixo a mais alto</option>
                        <option>Preço: Mais alto a mais baixo</option>
                        <option>Classificação</option>
                    </select>
                </div>
            </div>
            <section>
                <Filters />
                <div className="content">
                    <Cards />
                </div>
            </section>
            <div className="next-prev-page">
                <a href="/product" className="chevron"><img src="/images/chevron.svg" alt="" /></a>
                <a href="/product">1</a>
                <a href="/page2">2</a>
                <a href="/page2"><img src="/images/chevron.svg" alt="" /></a>
            </div>
        </main>
    );
}
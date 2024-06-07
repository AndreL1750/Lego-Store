import { NavLink } from "react-router-dom";
import Cards from "./Cards";
import Filters from "./Filters";

export default function Home() {

    return (
        <main className="Home">
            <a href="/product">Page Product</a>
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
                <NavLink to="/product" className="chevron"><img src="/images/chevron.svg" alt="" /></NavLink>
                <NavLink to="/product">1</NavLink>
                <NavLink to="/product/2">2</NavLink>
                <NavLink to="/product/2"><img src="/images/chevron.svg" alt="" /></NavLink>
            </div>
        </main>
    );
}
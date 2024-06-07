import { Link, NavLink, Outlet } from "react-router-dom";
import Filters from "./Filters";

export function Product() {

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
                        <div className="product-list">

                        </div>
                    </div>
                </section>
                <div className="next-prev-page">
                    <Link to="profile" className="chevron"><img src="/images/chevron.svg" alt="" /></Link>
                    <Link to="profile">1</Link>
                    <Link to="profile">2</Link>
                    <Link to="profile"><img src="/images/chevron.svg" alt="" /></Link>
                </div>
            </main>
        
    );
}
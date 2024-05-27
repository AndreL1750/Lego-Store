import { useState } from "react";

export default function Home() {

    const labelFilters = ["Architecture", "City", "Marvel", "Angry Birds™", "DUPLO®", "Creator Expert", "Disney™"];
    
    const [displayFilter, setDisplayFilter] = useState(false);

    console.log("nav " + displayFilter)

    function handleDisplayFilter() {
        if(!displayFilter) {
            setDisplayFilter(true);
        }
        else {
            setDisplayFilter(false);
        }
    }
    
    const filter = (displayFilter) => {

        if(displayFilter) {
            return (
                <div className="category-filter">
                    <div className="checkbox-div">
                        <h2>Theme:</h2>
                        <div className="check-div-div">
                            {
                                labelFilters.map(labelFilter => (
                                    <div>
                                        <label>
                                            <input type="checkbox" />
                                            {labelFilter}
                                        </label>
                                    </div>
                                ) )
                                
                            }
                        </div>
                    </div>
                </div>
            );
        }
    }
    
    return (
        <main className="Home">
            <div className="filter-btn">
                <button type="button" onClick={() => handleDisplayFilter()}>=</button>       
                {filter(displayFilter)}
                <div className="filter-div">
                    Filter:
                    <select className="filter">
                        <option>Relevance</option>
                        <option>Price Up</option>
                        <option>Price Down</option>
                    </select>
                </div>
            </div>
            <div className="content">
                CONTENT
            </div>

        </main>
    );
}
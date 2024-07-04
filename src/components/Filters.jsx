import { useState } from "react";

const FilterSection = ({ title, filters, isOpen, toggleOpen }) => {
    const styles = isOpen ? "rotate(90deg)" : "rotate(270deg)";
    const display = isOpen ? "block" : "none";

    return (
        <div>
            <h3>
                <button type="button" onClick={toggleOpen}>
                    <span>{title}</span>
                    <div className="in-btn-svg">
                        <svg style={{ transform: styles }} width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor" />
                        </svg>
                    </div>
                </button>
            </h3>
            <div style={{ display: display }}>
                <ul>
                    {filters.map((filter, index) => (
                        <li key={index}>
                            <label>
                                <input type="checkbox" />
                                <span>{filter}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default function Filters() {
    const [openSections, setOpenSections] = useState({
        type: true,
        price: true,
        theme: true,
        interest: false,
        age: false,
        availability: false,
        pieces: false,
        featured: false
    });

    const toggleSection = (section) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    const filterData = [
        {
            title: "Tipo de produto",
            section: "type",
            filters: ["Conjuntos", "Para adultos"]
        },
        {
            title: "Preço",
            section: "price",
            filters: ["20 € - 50 €", "50 € - 100 €", "100 € - 200 €", "200 €+"]
        },
        {
            title: "Tema",
            section: "theme",
            filters: ["Architecture"]
        },
        {
            title: "Interesse",
            section: "interest",
            filters: ["Arte, design e música", "Edifícios", "História e viagens"]
        },
        {
            title: "Idade",
            section: "age",
            filters: ["13+", "18+"]
        },
        {
            title: "Disponibilidade",
            section: "availability",
            filters: ["Disponível agora", "Para reserva", "Indisponível"]
        },
        {
            title: "Número de peças",
            section: "pieces",
            filters: ["250 - 499", "500 - 999", "1000 - 1999", "2000+"]
        },
        {
            title: "Em destaque",
            section: "featured",
            filters: ["Difíceis de encontrar", "Exclusivos", "Novidades"]
        }
    ];

    return (
        <div className="filter-wrapper">
            <div className="available-only">
                <label>
                    <input type="checkbox" />
                    <span>Mostrar apenas disponível em stock</span>
                </label>
            </div>
            {filterData.map((filter, index) => (
                <FilterSection
                    key={index}
                    title={filter.title}
                    filters={filter.filters}
                    isOpen={openSections[filter.section]}
                    toggleOpen={() => toggleSection(filter.section)}
                />
            ))}
        </div>
    );
}
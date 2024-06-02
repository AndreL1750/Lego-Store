export default function Footer() {
    return (
        <div className="Footer">
            <div className="footer-wrapper">
                <div>
                    <h3><img src="/images/lego-logo.svg" alt="" /></h3>
                    <button className="location-btn" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="24" viewBox="0 0 17 24" aria-hidden="true"><path d="M8.303.89c2.065 0 3.92.818 5.258 2.156a7.391 7.391 0 012.156 5.257c0 4.906-5.485 11.795-7.414 14.066C6.373 20.097.89 13.21.89 8.303c0-2.065.818-3.92 2.156-5.257A7.391 7.391 0 018.303.89zm0 3.558a3.84 3.84 0 00-2.734 1.12 3.84 3.84 0 00-1.12 2.735 3.84 3.84 0 001.12 2.735 3.84 3.84 0 002.734 1.12 3.84 3.84 0 002.735-1.12 3.84 3.84 0 001.12-2.735 3.84 3.84 0 00-1.12-2.734 3.84 3.84 0 00-2.735-1.12z" stroke="currentColor" stroke-width="1.779" fill="none"></path></svg>
                        Portugal
                    </button>
                    <ul>
                        <li><a href="/">Gift Cards</a></li>
                        <li><a href="/">Encontra inspiração</a></li>
                        <li><a href="/">Catálogos LEGO</a></li>
                        <li><a href="/">Encontre a loja LEGO</a></li> 
                    </ul>
                </div>
                <div>
                    <h3 className="ul-h3">Sobre Nós</h3>
                    <ul>
                        <li><a href="/">Sobre o LEGO Group</a></li>
                        <li><a href="/">Novidades LEGO®</a></li>
                        <li><a href="/">Sustentabilidade</a></li>
                        <li><a href="/">Declaração de <br/> transparência da cadeia de <br/> abastecimento</a></li>
                        <li><a href="/">Certificação de produtos LEGO</a></li>
                        <li><a href="/">Empregos LEGO</a></li>
                        <li><a href="/">Linha de conformidade LEGO</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="ul-h3">Ajuda</h3>
                    <ul>
                        <li><a href="/">Contacta-nos</a></li>
                        <li><a href="/">Encontra instruções de <br/> construção</a></li>
                        <li><a href="/">Peças de substituição</a></li>
                        <li><a href="/">Envios e devoluções</a></li>
                        <li><a href="/">Métodos de pagamento</a></li>
                        <li><a href="/">Termos e Condições</a></li>
                        <li><a href="/">Recolhas de produtos</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="ul-h3">Atrações</h3>
                    <ul>
                        <li><a href="/">LEGO® House</a></li>
                        <li><a href="/">LEGOLAND® Parks</a></li>
                        <li><a href="/">LEGOLAND Discovery Centers</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="ul-h3">Mais Sobre Nós</h3>
                    <ul>
                        <li><a href="/">LEGO® LIFE</a></li>
                        <li><a href="/">LEGO Education</a></li>
                        <li><a href="/">LEGO Ideas</a></li>
                        <li><a href="/">LEGO Foundation</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
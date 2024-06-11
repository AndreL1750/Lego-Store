
export default function Home() {

    return (
        <main className="Home">
           <div className="Banner">
                <img src="/images/Home-Banner.webp" alt="" />
                <div className="Banner-Content">
                    <h2>Compra os nossos conjuntos mais recentes</h2>
                    <p>Vê os lançamentos mais recentes deste mês, como o novo conjunto Rádio Retro.</p>
                    <div>
                        <a href="/">
                            Comprar Agora
                            <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"/></svg>
                        </a>
                    </div>
                </div>
           </div>
           <div className="section2">
                <div className="category-btns">
                    <a href="/">
                        <img src="/images/New.webp" alt="" />
                        <h3>Novidades</h3>
                    </a>
                    <a href="/">
                        <img src="/images/Exclusive.webp" alt="" />
                        <h3>Exclusivos</h3>
                    </a>
                    <a href="/">
                        <img src="/images/Offers.webp" alt="" />
                        <h3>Ofertas</h3>
                    </a>
                    <a href="/">
                        <img src="/images/Ideas.webp" alt="" />
                        <h3>Ideias</h3>
                    </a>
                    <a href="/">
                        <img src="/images/Icons.webp" alt="" />
                        <h3>LEGO® Icons</h3>
                    </a>
                    <a href="/">
                        <img src="/images/Disney.webp" alt="" />
                        <h3>Disney</h3>
                    </a>
                    <a href="/">
                        <img src="/images/GiftCards.webp" alt="" />
                        <h3>Cartões de oferta</h3>
                    </a>
                    <a href="/">
                        <img src="/images/Insiders.webp" alt="" />
                        <h3>LEGO® Insiders</h3>
                    </a>
                </div>
           </div>
           <div className="section3">
                <div className="video-banner">
                    <div className="video-banner-a">
                        <h3>Descobre as inúmeras formas de explorar o espaço</h3>
                        <a href="/">Explorar
                            <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"/></svg>
                        </a>
                        <a href="/">Comprar agora
                            <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"/></svg>
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <video loop autoPlay muted>
                                <source src="/videos/Lego-Planets.mp4" type="video/mp4" />
                            </video>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
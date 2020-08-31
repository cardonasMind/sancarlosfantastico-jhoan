import { Component, Fragment } from "react";

import Link from "next/link";

import { Icon } from "rsuite";

import SimpleCard from "../../src/components/SimpleCard";

export default class extends Component {
    render() {
        return(
            <Fragment>
                <header>
                    <div id="header-overlay">
                        <h1>Números de atención</h1>
                    </div>
                </header>

                <div id="go-home">
                    <Link href="/">
                        <a><Icon icon="back-arrow" /> Volver al inicio</a>
                    </Link>
                </div>

                <main>
                    <Link href="tel:3504434896">
                        <a>
                            <SimpleCard 
                                image="images/help/bomberos.jpg"
                                text="Bomberos"
                            />
                        </a>
                    </Link>

                    <Link href="tel:3146011793">
                        <a>
                            <SimpleCard 
                                image="images/help/hospital.jpg"
                                text="Hospital"
                            />
                        </a>
                    </Link>

                    <Link href="tel:3504017253">
                        <a>
                            <SimpleCard 
                                image="images/help/policia.jpg"
                                text="Policia"
                            />
                        </a>
                    </Link>

                    <Link href="tel:3116413712">
                        <a>
                            <SimpleCard 
                                image="images/help/transito.jpg"
                                text="Transito"
                            />
                        </a>
                    </Link>

                    <Link href="tel:3504991002">
                        <a>
                            <SimpleCard 
                                image="images/help/coonorte.jpg"
                                text="Coonorte"
                            />
                        </a>
                    </Link>
                </main>




                <style jsx global>{`
                    header {
                        background: url("images/help/transito.jpg");
                        background-size: cover;
                    }

                    #header-overlay {
                        padding: 4rem 5rem;
                        background: linear-gradient(transparent, #121212);
                        color: white;
                        text-align: center;
                    }

                    #header-overlay h1 {
                        font-size: 2.2rem;
                    }

                    #go-home {
                        position: sticky;
                        top: 0;
                        z-index: 1;
                    }

                    #go-home a{
                        padding: .4rem 1rem;
                        display: grid;
                        grid-template-columns: auto 1fr;
                        grid-gap: .4rem;
                        align-items: center;
                        color: #ececec;
                        background: #121212;
                    }


                    main {
                        margin: 1rem;
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-gap: 1rem;
                    }

                    main .simpleCard {
                        margin: 1rem 0;
                    }
                
                
                `}</style>
            </Fragment>
        )
    }
}
import { Component, Fragment, useEffect, useState } from "react";

import Link from "next/link";
import Head from "next/head";

import { FactsContext } from "../src/config/FactsProvider";

import { Icon } from "rsuite";

import SimpleCard from "../src/components/SimpleCard";




const FactsPage = ({ hiddeFact }) => {
    const [fact, setFact] = useState();

    useEffect(() => {
        const facts = [
            "La bandera del municipio de San Carlos la ideó el padre Julio Noreña",
            "Un charco del municipio conocido como El Brujo debe su nombre porque se dice que Maria del Pardo, una bruja, arrojó allí unas campanas embrujadas.",
            "La arquitectura de nuestra iglesia está basada en una arquitectura barroca del siglo XVII.",
            "Originalmente el pueblo estaba ubicado en otro lugar, aún se puede llegar allí, pero pocos son los escombros que quedarón de aquél pueblo."
        ];

        setFact(facts[Math.round(Math.random()*3)]);
    });

    return(
        <Fragment>
            <div id="page-content">
                <div id="go-page" onClick={hiddeFact}>
                    Ir al sitio <Icon icon="flag" />
                </div>

                <div id="fact-content">
                    <h1>¿Sabías qué?</h1>
                    <p>{fact}</p>
                </div>

                <p id="developed-by">Terminado de desarrollar el 31/08/2020 (5 horas) por Diego Cardona<br /><br />Imágen por <a href="https://www.instagram.com/vive_sancarlos/">@vive_sancarlos</a></p>
            </div>

            <style jsx global>{`
                body {
                    background-image: url("images/facts-background.jpg");
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    color: white;
                }

                #page {
                    background: linear-gradient(transparent, #121212);
                    display: grid;
                    align-items: end;
                    min-height: 90vh !important;
                }

                #go-page {
                    background: white;
                    color: #121212;
                    position: absolute;
                    top: 2rem;
                    left: 0;
                    padding: .4rem 1rem;
                    display: grid;
                    grid-template-columns: auto 1fr;
                    grid-gap: .4rem;
                    align-items: center;
                    transition: .4s;
                    box-shadow: 0px 0px 8px 0px;
                }
                

                #fact-content {
                    text-align: right;
                    margin-right: 1rem;
                    margin-left: 4rem;
                    margin-bottom: 6rem;
                }

                #fact-content h1 {
                    margin-right: 1rem;
                }

                #fact-content p {
                    color: #ececec;
                }

                

                #developed-by {
                    margin: 2rem 1rem 1rem 1rem;
                    color: #d6d6d6;
                }
            `}</style>
        </Fragment>
    )
}






export default class extends Component {
    static contextType = FactsContext;

    render() {
        const { showFact, hiddeFact } = this.context
        if(showFact) {
            return <FactsPage hiddeFact={hiddeFact} />
        } else {
            return (
                <Fragment>
                    <header>
                        <div id="header-overlay">
                            <h1>San Carlos, lugares fantásticos</h1>
                            <p>Un lugar por conocer</p>
                        </div>
                    </header>
    
                    <main>
                        <Link href="/llamar">
                            <a>
                                <SimpleCard 
                                    image="images/help/hospital.jpg"
                                    text="Números de atención"
                                />
                            </a>
                        </Link>

                        <Link href="/hoteles">
                            <a>
                                <SimpleCard 
                                    image="images/hotels/default.jpg"
                                    text="Hospédate en San Carlos"
                                />
                            </a>
                        </Link>
    
                        <Link href="/lugares">
                            <a>
                                <div id="go-places">
                                    <div id="go-places-overlay">
                                        <h2>Lugares fantásticos</h2>
                                    </div>
                                </div>
                            </a>
                        </Link>

                        <p id="made-for">Página web realizada para proyecto turístico de Jhoan Sebastian Rodríguez Aristizabal</p>
                    </main>
    
                    
    
    
                    <style jsx global>{`
                        header {
                            background: url("images/facts-background.jpg");
                            background-size: cover;
                        }

                        #header-overlay {
                            background: linear-gradient(transparent, #121212);
                            padding: 4rem;
                            color: white;
                        }

                        #header-overlay p {
                            color: #d6d6d6;
                        }


                        main {
                            margin: 1rem;
                            transform: translateY(-4rem);
                        }
    
                        #go-places {
                            background: #f0f0f0;
                            background-image: url("images/places/default.jpg");
                            background-size: cover;
                            background-repeat: no-repeat;
                            height: 16rem;
                            position: relative;
                            margin: 1rem 0;
                        }
    
                        #go-places-overlay {
                            background: linear-gradient(transparent, #121212);
                            color: white;
                            padding: 1rem;
                            position: absolute;
                            top: 0;
                            right: 0;
                            bottom: 0;
                            left: 0;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    

                        #made-for {
                            color: gray;
                        }
                    
                    
                    `}</style>
                </Fragment>
            )
        }
    }
}
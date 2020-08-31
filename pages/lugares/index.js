import { Component, Fragment } from "react";

import Link from "next/link";

import { Icon, Button } from "rsuite";

const PlaceCardComponent = ({ image, title, description }) => {
    return(
        <div className="placeCard">
            <div className="placeCardOverlay">
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>

                    <Button appearance="default" size="sm">Ver lugar</Button>
                </div>
            </div>

            <style jsx>{`
                .placeCard {
                    background: #f0f0f0;
                    background-image: url(${image});
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    min-height: 20rem;
                    position: relative;
                }

                .placeCardOverlay {
                    background: linear-gradient(transparent, #121212);
                    color: white;
                    padding: 1rem;
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    height: 100%;

                    display: grid;
                    align-items: end;
                }

                h2 {
                    margin-bottom: .4rem;
                }

                p {
                    margin-bottom: 2rem;
                }
            `}</style>
        </div>
    )
}

export default class extends Component {
    render() {
        return(
            <Fragment>
                <header>
                    <div id="header-overlay">
                        <h1>Nuestros lugares fantásticos</h1>
                        <p>Imágenes por <a href="https://www.instagram.com/vive_sancarlos/">@vive_sancarlos</a></p>
                    </div>
                </header>

                <div id="go-home">
                    <Link href="/">
                        <a><Icon icon="back-arrow" /> Volver al inicio</a>
                    </Link>
                </div>

                <main>
                    <PlaceCardComponent
                        image="images/places/charco-redondo.jpg"
                        title="Charco Redondo"
                        description="Este espacio y su atractivo natural te enamorará instantáneamente."
                    />

                    <PlaceCardComponent
                        image="images/places/el-indio.jpg"
                        title="El Indio"
                        description="Indio tallado en una piedra por el Ingeniero Gustavo Adolfo Hoyos Pérez, la inició en el año 2002."
                    />

                    <PlaceCardComponent
                        image="images/places/cielo-solo.jpg"
                        title="Cielo Solo"
                        description="Sus aguas te envuelven en un sin fin de emociones, y el verde de su naturaleza te calma el alma."
                    />

                    <PlaceCardComponent
                        image="images/places/la-boca-del-lobo.jpg"
                        title="La Boca del Lobo"
                        description="No dejes que su nombre te asuste... ¿o sí?"
                    />

                    <PlaceCardComponent
                        image="images/places/el-marino.jpg"
                        title="El Marino"
                        description="Río de la memoria de los habitantes del barrio Zulia y muchos sancarlitanos más."
                    />

                    <PlaceCardComponent
                        image="images/places/el-chispero.jpg"
                        title="El Chispero"
                        description="Un lugar tranquilo y con una bonita cascada"
                    />

                    <PlaceCardComponent
                        image="images/places/el-brujo.jpg"
                        title="El Brujo"
                        description="Emblemático por su historia llena de mitos y leyendas que encierran lo mágico del Brujo."
                    />

                </main>


                <style jsx global>{`
                    header {
                        background: url("images/places/default.jpg");
                        background-size: cover;
                    }

                    #header-overlay {
                        padding: 4rem;
                        background: linear-gradient(transparent, #121212);
                        color: white;
                        text-align: center;
                    }

                    #header-overlay h1 {
                        font-size: 2.2rem;
                    }

                    #header-overlay p {
                        color: #d6d6d6;
                    }

                    #go-home {
                        position: sticky;
                        top: 0;
                        z-index: 1;
                    }

                    #go-home a{
                        background: #121212;
                        color: #ececec;
                        padding: .4rem 1rem;
                        display: grid;
                        grid-template-columns: auto 1fr;
                        grid-gap: .4rem;
                        align-items: center;
                    }


                    main {
                        margin: 1rem;
                    }

                    main .placeCard {
                        margin-bottom: 4rem;
                    }
                
                `}</style>
            </Fragment>
        )
    }
}
export default function Personajes({pokemon}) {
    if (!pokemon || pokemon.length === 0) {
        return <div>No hay pokemones disponibles</div>
    }
    return (
        <div>
            {pokemon.map((personajes,index) => (
                <article key ={index}>
                    <h1>{personajes.tittle}</h1>
                    <p>{personajes.description}</p>
                    <div className="sketchfab-embed-wrapper">
                        <iframe
                            title={personajes.description}
                            allowFullScreen
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                            allow="autoplay; fullscreen; xr-spatial-tracking"
                            xr-spatial-tracking="true"
                            execution-while-out-of-viewport="true"
                            execution-while-not-rendered="true"
                            web-share="true"
                            src={personajes.modelUrl}
                        >
                    </iframe>
                    </div>

                </article>
            ))}
        </div>

    )
}
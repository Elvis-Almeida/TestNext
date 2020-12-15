function tempo(props) {
    const tempodinamico = new Date()
    const tempodinamicoString = tempodinamico.toGMTString()

    return (
        <div>
            <div>{tempodinamicoString} (dinâmico)</div>
            <div>{props.tempodinamicoString} (estático)</div>
        </div>
    )

}

export function getStaticProps() {
    const tempodinamico = new Date()
    const tempodinamicoString = tempodinamico.toGMTString()

    return {
        props: {
            tempodinamicoString
        }
    }

}

export default tempo
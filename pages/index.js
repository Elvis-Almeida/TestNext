import Link from 'next/link'

function Home() {
    return (<div>
        <h1>Tá prestando</h1>
            <Link href="/sobre">
                <a>
                    Sobre <br/>
                </a>
            </Link>
            <Link href="/tempo">
                <a>
                    tempo
                </a>
            </Link>
    </div> )
}

export default Home
import Card from './Componentes/Card';
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";

export default function Destaque() {
    const lista = JSON.parse( localStorage.getItem("Lista"));
    let produto = lista.slice(-4);
    let titulo = "Músicas Destaques";

    return(
    <div className="container-xl bg-cinza pt-4">
        
        <Header titulo={titulo}/>
        <h4 className="fw-bold pb-0 mb-0">Músicas em Destaque</h4>
        <div className="container-xl">                
            <div className="row">
                <Card listaMusica={produto} />
            </div>    
        </div>

            
        <Footer />
    </div>
    );
}
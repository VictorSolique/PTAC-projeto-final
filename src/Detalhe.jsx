import { useParams, Link } from "react-router-dom";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";

export default function Detalhe() {
    const { id } = useParams();
    const lista = JSON.parse( localStorage.getItem("Lista"));
    let item = lista.filter((obj) => {
        if(obj.id == id) return obj;
        else return null;
    });
    let titulo = "Músicas Destaques";

    return(
    <div className="container-xl bg-cinza pt-4">
        <Header titulo={titulo}/>        
        <div className="row g-0 position-relative">
        <Link to={"/destaque"} className="btn text-start pb-0 mb-0">&lt;-- Voltar ao Destaque</Link>
            <div className="col-md-7 mb-md-0 p-md-4">
            
            <div className="ratio ratio-16x9">
                <iframe src={"https://www.youtube.com/embed/" + item[0].url.slice(17)} title="YouTube video" allowFullScreen></iframe>   
            </div>
            </div>
            <div className="col-md-5 p-4 ps-md-0">
                <h2 className="mt-0">{item[0].nome}</h2>
                <p><span className="fw-bold">Autor/Canal:</span> {item[0].autor}</p>
                <p><span className="fw-bold">Categoria:</span> {item[0].categoria}</p>
                <p><span className="fw-bold">Descrição:</span> {item[0].descricao}</p>
                <p className="fw-bold mb-0 pb-0">Letra da Música:</p>
                <pre>
                {item[0].letra}
                </pre>
                
            </div>
        </div>

        <Footer />
    </div>

        /*<div className="col-sm-4 my-2">
            <div className="bg-danger ratio ratio-16x9">
                <iframe src={"https://www.youtube.com/embed/" + item.url.slice(17)} title="YouTube video" allowfullscreen></iframe>
            </div>
            <h4 className="fw-normal py-0 mb-0">{item.nome}</h4>
            <a data-bs-toggle="offcanvas" data-bs-target={"#staticBackdrop" + item.id} href="/" aria-controls="staticBackdrop">ver mais</a>
            
            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id={"staticBackdrop" + item.id} aria-labelledby={"staticBackdropLabel" + item.id}>
                <div className="offcanvas-header pb-0 mb-0">
                    <h2 className="offcanvas-title" id={"staticBackdropLabel" + item.id}>{item.nome}</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <p><span className="fw-bold">Autor/Canal:</span> {item.autor}</p>
                        <p><span>Categoria:</span> {item.categoria}</p>
                        <p><span>Descrição:</span> {item.descricao}</p>
                        <p>Letra da Música:</p>
                        <pre>
                        {item.letra}
                        </pre>
                    </div>
                </div>
            </div>

        </div>*/
    );
}
import { Link } from "react-router-dom";

export default function Card({listaMusica}) {
    return(
            listaMusica.map((item) => (
                <div className="col-sm-6 my-2">
                    <div className="bg-danger ratio ratio-16x9">
                        <iframe src={"https://www.youtube.com/embed/" + item.url.slice(17)} title="YouTube video" allowfullscreen></iframe>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div>
                        <h4 className="fw-normal py-0 mb-0">{item.nome}</h4>
                        <h6 className="fw-light py-0 mb-0">{item.autor}</h6>
                        </div>
                        <Link to={"/destaque/" + item.id} className="p-2 pe-3 text-dark">ver mais</Link>
                    </div>

                </div>
            ))
    );
}
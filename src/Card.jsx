export default function Card({listaVideos}) {
    return(
            listaVideos.map((item) => (
                <div className="col-sm-4 my-2">
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

                </div>
            ))
    );
}
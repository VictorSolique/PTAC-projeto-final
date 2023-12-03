export default function Card({listaVideos}) {
    return(
    <div class="row">
            {listaVideos.map((item) => (
                <div class="col-sm-4 my-2">
                    <div class="bg-danger ratio ratio-16x9">
                        <iframe src={"https://www.youtube.com/embed/" + item.url.slice(17)} title="YouTube video" allowfullscreen></iframe>
                    </div>
                    <div>
                    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">Legenda</button>
                    </div>
                    
                    <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="staticBackdropLabel">{item.nome}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div>
                                
                                <p><span>Autor/Canal:</span> {item.autor}</p>
                                <p><span>Categoria:</span> {item.categoria}</p>
                                <p><span>Descrição:</span> {item.descricao}</p>
                                <p>Legenda:</p>
                                <pre>
                                {item.legenda}
                                </pre>
                                
                            </div>
                        </div>
                    </div>

                </div>
            ))}
            
    </div>
    );
}
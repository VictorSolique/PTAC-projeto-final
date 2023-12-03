import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Destaque from "./Destaque";

export default function Registro() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    const[lista, setLista] = useState(listaLocalStorage || []);
    const[nome, setNome] = useState(""); 
    const[id, setId] = useState(listaLocalStorage[listaLocalStorage.length-1]?.id + 1 || 1);
    const[autor, setAutor] = useState("");
    const[legenda, setLegenda] = useState("");
    const[url, setUrl] = useState("");
    const[categoria, setCategoria] = useState("");
    const[descr, setDescr] = useState("");

    useEffect(() => { localStorage.setItem("Lista", JSON.stringify(lista)) },[lista]);
    const salvar = (e) => {
        e.preventDefault();
        if(nome === "" || autor === "") return;
        setLista([...lista, {
            id: id,
            nome: nome,
            autor: autor,
            categoria: categoria,
            descricao: descr,
            legenda: legenda,
            url: url
        }]);
        setId(id+1);
        setNome("");
        setAutor('');
        setCategoria('');
        setDescr('');
        setLegenda('');
        setUrl('');
        console.log("Adicionou compra. Código: " + id, categoria);
    }


    return(
    <div className="container-xl bg-cinza pt-4">
        
        <h1 className="text-start">Registrar Música <span class="px-2 fs-4 fw-normal  bg-danger-subtle">Tema: Sertanejo e Pagode</span></h1>  
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page"><Link to="/destaque">Em Destaque</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Registrar Video</li>
            </ol>
        </nav>
        <hr />
        <div className="container-xl">
            <div className="mx-auto largura-50 pb-5">
                <form onSubmit={salvar}>
                    <h4 className="py-3 fw-normal text-center">Preencha as informações abaixo para enviar o video</h4>

                        <input type="text" class="mb-3 form-control" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome da Música" />
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label mx-3">Categoria:</label>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Sertanejo"  onChange={(e) => setCategoria(e.target.value)} />
                            <label class="form-check-label" for="inlineRadio1">Sertanejo</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Pagode"  onChange={(e) => setCategoria(e.target.value)} />
                            <label class="form-check-label" for="inlineRadio2">Pagode</label>
                        </div>
                    </div>
                        <input type="text" class="mb-3 form-control" value={autor} onChange={(e) => setAutor(e.target.value)} placeholder="Autor/Canal da Música" />
                        <input type="text" class="mb-3 form-control" value={descr} onChange={(e) => setDescr(e.target.value)} placeholder="Descrição sobre a música" />
                        <input type="text" class="mb-3 form-control" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" />
                            <textarea class="mb-3 form-control" value={legenda} onChange={(e) => setLegenda(e.target.value)} placeholder="Legenda (se houver)" rows="10"></textarea>
                    <div className="text-center">
                        <button className="btn btn-success" type="submit">Enviar Vídeo</button>
                    </div>
                </form> 
                
            </div>
        </div>

        <Detalhe />
   
    </div>
    
    );
}
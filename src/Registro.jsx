import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";

export default function Registro() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
    const[lista, setLista] = useState(listaLocalStorage || []);
    const[id, setId] = useState(listaLocalStorage[listaLocalStorage.length-1]?.id + 1 || 1);
    const[nome, setNome] = useState(""); 
    const[autor, setAutor] = useState("");
    const[letra, setLetra] = useState("");
    const[url, setUrl] = useState("");
    const[categoria, setCategoria] = useState("");
    const[descr, setDescr] = useState("");
    let titulo =  "Registrar Música";

    useEffect(() => { localStorage.setItem("Lista", JSON.stringify(lista)) },[lista]);

    const navigate = useNavigate();

    const salvar = async (e) => {
        e.preventDefault();
        if(nome === "" || autor === "" || categoria === "" || descr === "" || url === "") return;
        await setLista([...lista, {
            id: id,
            nome: nome,
            autor: autor,
            categoria: categoria,
            descricao: descr,
            letra: letra,
            url: url
        }]);
        setId(id+1);
        navigate("/");
        setNome("");
        setAutor('');
        setCategoria('');
        setDescr('');
        setLetra('');
        setUrl('');
        
        console.log("Adicionou compra. Código: " + id, categoria);
    }


    return(
    <div className="container-xl bg-cinza pt-4">
        
        <Header titulo={titulo}/>
        <div className="container-xl">
            <div className="mx-auto largura-50 pb-5">
                <form onSubmit={salvar}>
                    <h4 className="py-3 fw-normal text-center">Preencha as informações abaixo para enviar o video</h4>

                        <input type="text" className="mb-3 form-control" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome da Música" id="validationDefault01" required/>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label mx-3">Categoria:</label>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Sertanejo"  onChange={(e) => setCategoria(e.target.value)} />
                            <label className="form-check-label" htmlFor="inlineRadio1">Sertanejo</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Pagode"  onChange={(e) => setCategoria(e.target.value)} />
                            <label className="form-check-label" htmlFor="inlineRadio2">Pagode</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="MPB"  onChange={(e) => setCategoria(e.target.value)} />
                            <label className="form-check-label" htmlFor="inlineRadio3">MPB</label>
                        </div>
                    </div>
                        <input type="text" className="mb-3 form-control" value={autor} onChange={(e) => setAutor(e.target.value)} placeholder="Autor/Canal da Música" id="validationDefault02" required/>
                        <input type="text" className="mb-3 form-control" value={descr} onChange={(e) => setDescr(e.target.value)} placeholder="Descrição sobre a música" id="validationDefault03" required/>
                        <input type="text" className="mb-3 form-control" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" id="validationDefault04" required/>
                        <textarea className="mb-3 form-control" value={letra} onChange={(e) => setLetra(e.target.value)} placeholder="Letra da Música (se houver)" rows="10" id="validationDefault05" />
                    <div className="text-center">
                        <button className="btn btn-success" type="submit">Enviar Vídeo</button>
                    </div>
                </form> 
                
            </div>
        </div>
   
        <Footer />
    </div>
    
    );
}
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer"
import Header from "./Header";

export default function Home() {
    const lista = JSON.parse( localStorage.getItem("Lista"));
    let titulo = "Galeria de Músicas"

    return (
    <div className="container-xl bg-cinza pt-4">
        
        <Header titulo={titulo}/>
        <h4 className="fw-bold pb-0 mb-0">Todos os Vídeos</h4>
        <div className="container text-center">
            <div className="row">
                {lista.map((item) => (
                    <div className="col-sm-4 my-2">
                        <div className="bg-danger ratio ratio-16x9">
                            <iframe src={"https://www.youtube.com/embed/" + item.url.slice(17)} title="YouTube video" allowfullscreen></iframe>
                        </div>
                        <h4 className="fw-normal py-0 mb-0">{item.nome}</h4>
                    </div>
                ))}                
            </div>
        </div>

            
        <Footer />
    </div>
    );
}
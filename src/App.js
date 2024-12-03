import { useState, useEffect } from "react";
import "./style.css";

function App(){

  //construindo a nossa UseState para trabalhamos na requisição do nosso link requisitando os dados
  const [nutri, setNutri] = useState([]);

  useEffect(() => {

    function loadApi(){

      const url = "https://sujeitoprogramador.com/rn-api/?api=posts";

      //Requisitando usando fetch
      fetch(url)
      .then((req) => req.json())
      .then((json) => {
        console.log(json);
        setNutri(json);
      })

    }
    loadApi();
  }, [])

  return(
    <div className="container">
      { nutri.map((item) => {
        return(
          <article key={ item.id } className="post">
            <strong className="titulo">{ item.titulo }</strong>
            <img src={ item.capa } />
          </article>
        )
      })}
    </div>
  )

}

export default App;
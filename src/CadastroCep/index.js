import { useState } from 'react';
import './CadastroCep.css'

const CadastroCep = () => {
    const [endereco, setEndereco] = useState({});

  const manipularEndereco = (evento) => {
    const cep = evento.target.value;

    setEndereco({
      cep
    })

    if(cep && cep.length === 8){
      // Obter o endereco
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(resposta => resposta.json())
      .then(dados => {
        setEndereco({
          cep: cep,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
        })
      })
    }
  }
    return(
        <div className='content'>
            <h1>Hooks useState</h1>
            <input className='content__cep' placeholder='Digite o CEP' onChange={manipularEndereco} />
            <ul className='list'>
                <li>CEP: {endereco.cep}</li>
                <li>Bairro: {endereco.bairro}</li>
                <li>Cidade: {endereco.cidade}</li>
                <li>Estado: {endereco.estado}</li>
            </ul>
        </div>
    )
}

export default CadastroCep
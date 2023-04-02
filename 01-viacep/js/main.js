
const preencherFormulario = (endereco) => {
  // Preencher Rua
  document.querySelector("#logradouro").value = endereco.logradouro
  //Preencher Bairro
  document.querySelector("#bairro").value = endereco.bairro
  //Preencher Cidade
  document.querySelector("#cidade").value = endereco.localidade
//Preencher estado
  document.querySelector("#estado").value = endereco.uf

}

const buscarCep = async () => {
    const cep = document.querySelector("#cep").value;
    const url = `http://viacep.com.br/ws/${cep}/json/`
    const prom = await fetch(url)
    const endereco = await prom.json()
    if (endereco.hasOwnProperty('erro')){
      alert("Inclua um cep valido!")
    }else
    preencherFormulario(endereco)

  }


  
  document.querySelector("#cep").addEventListener('focusout', buscarCep);
  
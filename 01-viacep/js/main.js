
const buscarCep = async () => {
    const cep = document.querySelector("#cep").value;
    const url = `http://viacep.com.br/ws/${cep}/json/`
    const prom = await fetch(url)
    const endereco = await prom.json()
    console.log(endereco)

  }
  
  document.querySelector("#cep").addEventListener('focusout', buscarCep);
  
"use strict";

const pesquisarCep = async () => {
  const cep = document.getElementById("cep").value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then(console.log());

  const dados = await fetch(url);
  const endereco = await dados.json();
  console.log(endereco);
};

document.getElementById("cep").addEventListener("focusout", pesquisarCep);

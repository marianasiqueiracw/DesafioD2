async function fetchContatos() {
  const url = "http://localhost:3000/contatos";
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contatos = await response.json();
    contatos.forEach(contato => {
      console.log(`ID: ${contato.id}, Nome: ${contato.nome}, Telefone: ${contato.telefone}, Nota: ${contato.nota}`);
    });
  } catch (error) {
    console.error('Erro ao buscar contatos:', error);
  }
}

fetchContatos();
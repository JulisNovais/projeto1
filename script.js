// quando nao declaro o tipo de metodo usando o fech, ele entende que é o GET (tras informações)
const response = fetch("https://jsonplaceholder.typicode.com/users")
  //promisse que trata o sucesso é o metodo then()
  //o parametro res recebe o retorno da funcao anterior
  .then((response) => {
    console.log(response);
    return response.json();
  })

  .then((data) => {
    // usamos para inteirar (percorrer o array), o map() que é um metodo para  percorrer todo o array como um for
    data.map((user) => {
      console.log(`Nome: ${user.name}`);
    });
  })

  //promisse que trata o erro é o metodo catch()
  .catch((error) => console.log(error));

//https://jsonplaceholder.typicode.com/ estudar esse site

//12/07/22

const addPost = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      userId: 3,
      title: 'titulo teste',
      body: 'eu fui inserido',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(response => response.json() )
  .then(data => console.log(data))
}

addPost();

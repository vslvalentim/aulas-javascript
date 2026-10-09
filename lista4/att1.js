const usuarios = [
    { nome: 'Ana', ativo: true },
    { nome: 'Beto', ativo: false },
    { nome: 'Caio', ativo: true },
    { nome: 'Duda', ativo: false }
];

const usuariosAtivos = usuarios.filter((usuario) => {
    return usuario.ativo === true;
});

console.log(usuariosAtivos);
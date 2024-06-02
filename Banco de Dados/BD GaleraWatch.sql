create database GaleraWatch;

create table GaleraWatch.Usuarios(
	id int auto_increment,
    nome varchar(45),
    email varchar(45),
    senha varchar(45),
    
    primary key idUsuario(id)

);

create table GaleraWatch.Perfil(
	idPerfil int auto_increment,
    funcao varchar(45),
    personagem1 varchar(45),
    personagem2 varchar(45),
    personagem3 varchar(45),
    mensagem varchar(150),
    fkUsuario int,
    
    primary key idPerfil(idPerfil),
    foreign key fkUsuario(fkUsuario) references Usuarios(id)

) auto_increment = 1000;

select * from GaleraWatch.usuarios;
select * from GaleraWatch.perfil;	

-- -------------------------------------- --

select us.nome,
	   per.funcao,
       per.personagem1,
       per.personagem2,
       per.personagem3,
       per.mensagem
from Galerawatch.usuarios us
inner join Galerawatch.perfil as per on per.fkUsuario = us.id;

select us.nome,
	   per.funcao,
       per.personagem1,
       per.personagem2,
       per.personagem3,
       per.mensagem
from Galerawatch.usuarios us
inner join Galerawatch.perfil as per on per.fkUsuario = us.id
WHERE us.email = 'parana@email.com' AND us.senha = '12345';

-- -------------------------- --

select personagem1,
	   personagem2,
       personagem3
from Galerawatch.perfil;

-- ---

select funcao from Galerawatch.perfil;
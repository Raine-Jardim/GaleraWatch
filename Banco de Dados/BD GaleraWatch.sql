create database GaleraWatch;

create table GaleraWatch.Usuarios(
	id int auto_increment,
    nome varchar(45),
    email varchar(45),
    senha varchar(45),
    
    primary key idUsuario(id)

);

select * from GaleraWatch.usuarios;

create table GaleraWatch.Perfil(
	idPerfil int auto_increment,
    funcao varchar(45),
    personagem1 varchar(45),
    personagem2 varchar(45),
    personagem3 varchar(45),
    descricao varchar(150),
    fkUsuario int,
    
    primary key idPerfil(idPerfil),
    foreign key fkUsuario(fkUsuario) references Usuarios(id)

) auto_increment = 1000;

select * from GaleraWatch.perfil;
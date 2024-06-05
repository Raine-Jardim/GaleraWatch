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

create view Galerawatch.vw_contadorPersonagens
as
select personagem1 nome, count(personagem1) contador from Galerawatch.perfil
group by personagem1
union
select personagem2, count(personagem2) from Galerawatch.perfil
group by personagem2
union
select personagem3, count(personagem3) from Galerawatch.perfil
group by personagem3 order by nome;

-- ----

create view Galerawatch.vw_totalPersonagens
as
select nome, sum(contador) total from Galerawatch.vw_contadorPersonagens
group by nome
order by total desc;

-- ----

select * from Galerawatch.vw_totalPersonagens;

select nome, total from Galerawatch.vw_totalPersonagens
where total >= (select max(total) from Galerawatch.vw_totalPersonagens);

-- -------------

create view Galerawatch.vw_totalFuncoes
as
select 'Taque' Funcao, count(funcao) Contador from Galerawatch.perfil
where funcao like '%Tanque%'
union
select 'Dano 'Funcao, count(funcao) Contador from Galerawatch.perfil
where funcao like '%Dano%'
union
select 'Suporte' Funcao, count(funcao) Contador from Galerawatch.perfil
where funcao like '%Suporte%'
union
select 'Todos' Funcao, count(funcao) Contador from Galerawatch.perfil
where funcao like 'Todos';

select funcao, contador from Galerawatch.vw_totalFuncoes
where contador >= (select max(contador) from Galerawatch.vw_totalFuncoes);

-- ------------------------------


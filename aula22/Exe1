DROP TABLE IF EXISTS contratos;
DROP TABLE IF EXISTS imoveis;
DROP TABLE IF EXISTS proprietarios;
DROP TABLE IF EXISTS locatarios;

CREATE TABLE IF NOT EXISTS proprietarios (
id SERIAL PRIMARY KEY,
	 nome text NOT NULL UNIQUE,
 	cpf text UNIQUE
);

INSERT INTO
proprietarios (nome, cpf)
VALUES
('joão','045.508.789-05'),
('pedro', '023.028.539-60'),
('Maria', '123.456.789-90');

CREATE TABLE IF NOT EXISTS locatarios (
	id SERIAL PRIMARY KEY,
 	nome text NOT NULL UNIQUE,
 	cpf text UNIQUE
);

INSERT INTO
locatarios (nome,cpf)
VALUES
('Virlei','045.508.539-05'),
('Jussara','023.028.539-58'),
('Darlana','789.987.852-17');


CREATE TABLE IF NOT EXISTS imoveis (
	id SERIAL PRIMARY KEY,
	numero_quartos numeric NOT NULL UNIQUE,
	numero_banheiros numeric NOT NULL UNIQUE,
	area text NOT NULL UNIQUE,
	churrasqueira boolean default false,
	piscina boolean default false,
	id_proprietario integer REFERENCES proprietarios
);

INSERT INTO
imoveis (numero_quartos,numero_banheiros,area,piscina,churrasqueira,id_proprietario)
VALUES
(2, 2, 125,false,true,1),
(3,3, 200,true,true,2),
(1,1, 60,false,true,3);

CREATE TABLE IF NOT EXISTS contratos (
	id_locatario integer REFERENCES locatarios,
 	id_imovel integer REFERENCES imoveis,	
 	data_inicio date,
	PRIMARY KEY (id_locatario, id_imovel, data_inicio),
	data_termino date NOT NULL,
	dia_vencimento integer NOT NULL,
	valor numeric NOT NULL,
	observacoes text,
	id_proprietario integer REFERENCES proprietarios
);

INSERT INTO
contratos
VALUES
(1, 1, '2021-02-01', '2021-08-01', 15, 500, null, 1),
(3,3, '2021-03-02', '2022-03-01' ,10, 1500,null,2),
(2,2, '2021-06-18', '2021-12-17' ,08 ,700, null,3);


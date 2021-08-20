DROP TABLE IF EXISTS projetos;
DROP TABLE IF EXISTS departamentos;
DROP TABLE IF EXISTS colaboradores;
DROP TABLE IF EXISTS  colaboradores_projetos;
DROP TABLE IF EXISTS dependentes;

CREATE TABLE NOT IF EXISTS projetos (
	id SERIAL PRIMARY KEY,
	data_inicio DATE NOT NULL,
	data_termino DATE NOT NULL,
	descricao text NOT NULL
);

INSERT INTO
projetos (id_projeto,data_inicio,data_termino,descricao)
VALUES
('1','01-01-2020','01-01-2021','projeto 01'),
('2','02-02-2021','02-02-2022','projeto 02'),
('3','03-03-2022','02-02-2023','projeto 03');

CREATE TABLE NOT IF EXISTS departamentos (
	id SERIAL PRIMARY KEY,
	nome text NOT NULL
);

INSERT INTO
departamentos (nome)
VALUES
('projeto 01'),
('projeto 02'),
('projeto 03');

CREATE TABLE NOT IF EXISTS colaboradores (
	id SERIAL PRIMARY KEY,
	nome text NOT NULL,
	horas_trabalhadas integer NOT NULL,
	total_vendas numeric,
	percentual_comissao numeric,
	valor_hora numeric,
	salario numeric,
	tipo_colaborador text CHECK (tipo_colaborador IN ('assalariado','COMISSIONADO'),
	id_gerente integer REFERENCES colaboradores,
	id_departamento integer REFERENCES departamentos,											   
);

INSERT INTO
departamentos (nome)
VALUES

CREATE TABLE NOT IF EXISTS colaboradores_projetos (
	id_colaborador integer REFERENCES colaboradores,
	id_projeto integer REFERENCES projetos,
	horas_trabalhadas integer,
	PRIMARY KEY (id_colaborador,id_projeto)
);

CREATE TABLE NOT IF EXISTS dependentes (
	id SERIAL PRIMARY KEY,
	nome text NOT NULL,
	tipo_dependente text NOT NULL,
	id_colaborador integer NOT NULL
	
);	


		
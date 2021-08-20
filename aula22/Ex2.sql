DROP TABLE IF EXISTS compras;
DROP TABLE IF EXISTS livros;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS editoras;
-- DROP TABLE tipo_pessoa;

-- CREATE TABLE NOT IF EXISTS tipo_pessoa // pode ser usado simplificado abaixo!!
CREATE TABLE NOT IF EXISTS clientes (
	id SERIAL PRIMARY KEY,
	nome text NOT NULL,
	rua text NOT NULL,
	numero text NOT NULL,
	cidade text NOT NULL,
	sigla_estado text NOT NULL,
	sigla_estado character (2) NOT NULL,
	numero_documento text NOT NULL UNIQUE,
	tipo_pessoa character (2) NOT NULL CHECK (tipo_pessoa IN ('PF','PJ',)),
	pontos integer DEFAULT 0
);

-- a) Exercicios:  Pesquise os itens que foram vendidos sem desconto. As colunas presentes no
-- resultado da consulta são: ID_NF, ID_ITEM, COD_PROD E VALOR_UNIT.??
SELECT
	id_nf,
	id_item,
	cod_prod,
	valor_unit
FROM
	vendas
WHERE
	desconto IS NULL;
	
-- b) Pesquise os itens que foram vendidos com desconto. As colunas presentes no
-- resultado da consulta são: ID_NF, ID_ITEM, COD_PROD, VALOR_UNIT E O VALOR
-- VENDIDO. OBS: O valor vendido é igual ao VALOR_UNIT -
-- (VALOR_UNIT*(DESCONTO/100)).??
SELECT
	id_nf,
	id_item,
	cod_prod,
	valor_unit,
	ROUND(valor_unit - (valor_unit * (desconto / 100)), 2) valor_vendido
FROM
	vendas
WHERE
	desconto IS NOT NULL;
	
-- 	c) Altere o valor do desconto (para zero) de todos os registros onde este campo é nulo.// UPDATE usado para modificar table com o comando SET modificando??
UPDATE
	vendas
SET 
	desconto = 0
WHERE
	desconto IS NULL;
	
-- 	d) Pesquise os itens que foram vendidos. As colunas presentes no resultado da consulta
-- são: ID_NF, ID_ITEM, COD_PROD, VALOR_UNIT, VALOR_TOTAL, DESCONTO,
-- VALOR_VENDIDO. OBS: O VALOR_TOTAL é obtido pela fórmula: 
-- QUANTIDADE * VALOR_UNIT. O VALOR_VENDIDO é igual a VALOR_UNIT -  
-- (VALOR_UNIT*(DESCONTO/100)). ??
SELECT
	id_nf,
	id_item,
	cod_prod,
	valor_unit,	
	desconto,
	ROUND((quantidade * valor_unit), 2) valor_total,
	ROUND(VALOR_UNIT - (VALOR_UNIT*(DESCONTO/100)), 2) valor_vendido
FROM
	vendas;
	
-- -- 	e) Pesquise o valor total das NF e ordene o resultado do maior valor para o menor. As
-- colunas presentes no resultado da consulta são: ID_NF, VALOR_TOTAL.  
-- OBS: O VALOR_TOTAL é obtido pela fórmula: ∑ QUANTIDADE * VALOR_UNIT. Agrupe o
-- resultado da consulta por ID_NF.??
SELECT
	id_nf,	
	sum(quantidade * valor_unit) valor_total
FROM
	vendas
GROUP BY 
	id_nf
ORDER BY 
	valor_total DESC;
	
-- 	f) Pesquise o valor vendido das NF e ordene o resultado do maior valor para o menor. (ORDER BY) 
-- aS colunas presentes no resultado da consulta são: ID_NF, VALOR_VENDIDO.  
-- O VALOR_VENDIDO é igual a ∑ VALOR_UNIT - (VALOR_UNIT*(DESCONTO/100)). Agrupe
-- o resultado da consulta por ID_NF.??
SELECT
	id_nf,	
	ROUND(sum (valor_unit -(valor_unit *(desconto/100))),2) valor_vendido
FROM
	vendas
GROUP BY 
	id_nf
ORDER BY 
	valor_vendido DESC;
	
-- 	g) Consulte o produto que mais vendeu no geral. As colunas presentes no resultado da
-- consulta são: COD_PROD, QUANTIDADE. Agrupe o resultado da consulta por
-- COD_PROD.
SELECT 
	cod_prod,
sum(quantidade) quantidade
FROM
	vendas
GROUP BY 
	cod_prod 
ORDER BY
	quantidade DESC 
LIMIT 1;

-- h) Consulte as NF que foram vendidas mais de 10 unidades de pelo menos um produto.
-- As colunas presentes no resultado da consulta são: ID_NF, COD_PROD, QUANTIDADE.
-- Agrupe (sum) o resultado da consulta por ID_NF, COD_PROD.
SELECT
	id_nf,
	cod_prod,
sum(quantidade) quantidade
FROM
	vendas
GROUP BY
	id_nf, cod_prod
HAVING
	sum(quantidade) > 10;
	
-- i) Pesquise o valor total das NF, onde esse valor seja maior que 500, e ordene o
-- resultado do maior valor para o menor. As colunas presentes no resultado da consulta
-- são: ID_NF, VALOR_TOT. OBS: O VALOR_TOTAL é obtido pela fórmula: ∑ QUANTIDADE
-- * VALOR_UNIT. Agrupe o resultado da consulta por ID_NF.

SELECT
	id_nf,
sum(quantidade * valor_unit) valor_total
FROM
	vendas
GROUP BY
	id_nf
HAVING
	sum(quantidade * valor_unit) > 500;

-- j) Qual o valor médio // ROUND (avg) dos descontos dados por produto. As colunas presentes no
-- resultado da consulta são: COD_PROD, MEDIA. Agrupe o resultado da consulta por
-- COD_PROD.
SELECT
cod_prod,
ROUND(avg(desconto), 2) media
FROM
vendas
GROUP BY
cod_prod;

-- k) Qual o menor, maior e o valor médio dos (descontos)? dados por produto. As colunas
-- presentes no resultado da consulta são: COD_PROD, MENOR, MAIOR, MEDIA. Agrupe
-- o resultado da consulta por COD_PROD.
SELECT
cod_prod,
min(desconto) menor,
max(desconto) maior,
ROUND(avg(desconto), 2) media
FROM
vendas
GROUP BY
cod_prod;


-- l) Quais as NF que possuem: (mais de 3 itens vendidos) ?. As colunas presentes no resultado
-- da consulta são: ID_NF, QTD_ITENS. OBS: NÃO ESTÁ RELACIONADO A QUANTIDADE
-- VENDIDA DO ITEM E SIM A // COUNT(QUANTIDADE DE ITENS) POR (NOTA FISCAL). Agrupe o // GROUP BY
-- resultado da consulta por ID_NF. // count ele vai percorrer a table e contar quantos itens tem nas columas !!!
SELECT 
	id_nf,
	count(id_item) quantidade_itens
FROM
	vendas
GROUP BY
	id_nf
HAVING
	count(id_item) > 3;
	
	









	



	
	
	
	
	



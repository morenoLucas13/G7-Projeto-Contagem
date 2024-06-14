<https://help-dev-docs-2023.vercel.app/>

```bash
npm init
npm i express mysql2 cors
npm i nodemon --save-dev
```
1. buscar por data
2. buscar alunos
3. editar contagem
4. retornar todos
5. buscar por sala
6. quantidade geral
7. relatorio so por turma


SELECT c.*, t. tur_nome , p.p_nome
FROM turmas t, pessoas p, contagens c
WHERE t.idturma = p.idturma 
AND c.cont_data BETWEEN '2024-05-01' AND '2024-05-31'
AND t.idturma = 1
ORDER BY c.cont_data

SELECT u.u_nome, t.idescola, t. tur_nome, t. tur_ano,
t. tur_periodo, p.p_nome, c.*
FROM contagens c, turmas t, usuarios u, pessoas p
WHERE c.idusuario = u. idusuario
AND c.idturma = t. idturma
AND t. idturma = p. idturma
AND t. idturma = 1
AND c. cont_data BETWEEN '2024-05-01' AND '2024-05-31'
ORDER BY c. cont_data

SELECT u.u_nome, e.es_nome, e.es_unid, cid.cid_nome, cid.cid_sigla ,t.tur_nome, t.tur_ano, t.tur_periodo, p.p_nome, c.* 
    FROM contagens c, turmas t, usuarios u, pessoas p, escolas e, cidades cid 
    WHERE c. idusuario = u. idusuario 
    AND c.idturma = t. idturma 
    AND t. idturma = p.idturma 
    AND t.idescola = e. idescola
    AND e.idcidade = cid.idcidade 
    AND t.idturma = ? 
    AND c. cont_data BETWEEN '?' 
    AND '?' ORDER BY c. cont_data;

INSERT INTO pessoas (p_nome, p_cargo, idturma) VALUES ('Alana Silva de Freitas', 'Aluna' ,1),('Ana Lidia de Oliveira Batista','Aluna',1),('Daniel Esteves Gonsales de Oliveira','Aluno',1),('Daniel Lasso Batista Costa','Aluno',1),('Diogo Machado Molina','Aluno',1),('Eduan de Faria Tabar','Aluno',1),('Eduarda Bento Sobral','Aluna',1),('Eduarda Debatin Ribas','Aluna',1),('Eduardo Felix Cardoso dos Santos','Aluno',1),('Emily Peraira da Cruz ','Aluna',1),('Estela Pereira Barbosa','Aluna',1),('Gabriel Cristianini Prado','Aluno',1),('Gabriel Machado da Silva','Aluno',1),('Gustavo Palomo da Fonseca Silva','Aluno',1),('James Calque Santos de Brito','Aluno',1),('Kayk Fernando Saraiva Cardoso','Aluno',1),('Lucas Neponuceno Moreno','Aluno',1),('Manoel Fernando Lucena Junior','Aluno',1),('Maria Eduarda Ribeiro Cunha','Aluna',1),('Maria Heloiza Silva Souza','Aluna',1),('Marianny Alves Floriano dos Santos','Aluna',1),('Mariany da Cunha Oliveira','Aluna',1),('Matheus Balarim de Sant Anna','Aluno',1),('Nicolas Cristianini Prado','Aluno',1),('Pedro Pires Gelasko','Aluno',1),('Raissa Chagas Furlan','Aluna',1),('Rebeca Montes Carreira','Aluna',1),('Suzane Jordal Nagima','Aluna',1),('Victor Lucas Jurasseke Sales','Aluno',1),('Vitória Andrade Damaceno','Aluna',1) 
 
INSERT INTO pessoas (p_nome, p_cargo, idturma) VALUES ('Ricardo Ribeiro Seco', 'Professor' ,1),('Rodrigo Alves Nunes','Professor',1) 


```
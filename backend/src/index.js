const express = require('express');
const cors = require("cors");
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota /Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Busca informação do back-end
  * POST: Cria informação no back-end
  * PUT: Altera informação no back-end
  * DELETE: Deletar informação no back-end
  * 
  */
 /**
  * Tipos de parametros:
  * 
  *     Query: Parametros nomeados enviados na rota após "?" (filtros, paginação)
  *             Parametros utilizados para indentificar recursos
  *         para obter acesso á uma variável iremos passar por parametro ..., dentro da
  *         nossa rota, assim iremos usar ( request.query, dentro do nosso parms )
  *             const parms = request.query;
  *             
  *             console.log(parms) ## mostra no terminal
  * 
  *     Route Parms: Este acessamos através de um (request.parms), para uma variável especifica
  *        app.post('/users/:id',(request, response) => {
  *              const parms = request.parms;
  *             
  *             console.log(parms) ## mostra no terminal
  *             
  *     Request Body: Parametros utilizados para criar ou alterar recursos
  *           app.post('/users',(request, response) => {
        const body  = request.body;

        console.log(body);
  */
 /**
  * 
  *   Banco de dados
  * Existem 3 formas de fazermos a comunicação com o banco de dados
  * 
  *  1- Driver:(instala o drive)
  *  
  *  2-Query Builder: (a vantagem que ele fica pronto para aceitar qualquer banco SQL)
  * 
  *     Knex.js (IREMOS UTILIZAR O QUERY BUILDER KNEX)
  * 
  *   
  * 
  */




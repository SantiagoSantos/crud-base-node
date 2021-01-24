const ContextStrategy = require('./db/strategies/base/contextStrategy');
const MySql = require('./db/strategies/mysql');


const contextMySql = new ContextStrategy(new MySql);
contextMySql.create();
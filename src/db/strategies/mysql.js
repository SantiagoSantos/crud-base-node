const ICrud = require('./interfaces/interfaceCrud');

class MySql extends ICrud{
    constructor(){
        super();
    }

    create(item){
        console.log("Item salvo em MySql!");
    }
}

module.exports = MySql;
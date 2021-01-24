



class Oracle extends ICrud{
    constructor(){
        super();
    }

    create(item){
        console.log("Item salvo em Oracle!");
    }
}



const contextMySql = new ContextStrategy(new MySql);
contextMySql.create();
contextMySql.update();

const contextOracle = new ContextStrategy(new Oracle);
contextOracle.create();
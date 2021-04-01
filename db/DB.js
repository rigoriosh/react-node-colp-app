const { default: axios } = require("axios");
const testData = require('./testData');


class Db {

    constructor() {      
        this.infousers = []
    }

    infoUser(id) {
        return this.infousers.find(e => e.id === Number(id));
    }

    cargarData (){
        axios.get('https://my.api.mockaroo.com/users?key=a0521bd0')
            .then(({data}) => {
                this.infousers = data;
            }).catch(e => {
                console.log('Falla en la petición a mockaroo')
                console.log(e.response.data)
                this.infousers = testData
            });
    }


}


module.exports = Db;
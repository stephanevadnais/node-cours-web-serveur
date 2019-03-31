var  validator = require('validator');


var validationData = (date)=>{

    nouvelleDate =  validator.toDate(date);
    console.log(nouvelleDate)

};
var Date  = "November 2, 2018";

validationData(Date);
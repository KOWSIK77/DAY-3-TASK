let JSONdata = {
    "name" : "john",
    "age" : 21,
    "place" : "chennai",
    "country" : "india",
    "address" : "166,BR main street,Dharapuram,Tirupur",
    "pincode" : 638656 
        
}
 
 let jsonData = JSON.stringify(JSONdata)// make script
 //console.log(jsonData);
 let modifiedJsdata = JSON.parse(jsonData);// make js object
 
 //console.log(modifiedJsdata)
 //for in
         for (let key in modifiedJsdata) { 
            let value;
        
            // get the value
            value = modifiedJsdata[key];
        
            console.log(key + " - " +  value);}



 let JSONdata1 = {
    "address2" : [{
        "city":"chennai",
        "pincode":634576,
       " landmark":"school"
        
    },{
        "city":"dharapuram",
       " pincode":634576,
        "landmark":"shop"
        
    }]
 }         

 let jsonData1 = JSON.stringify(JSONdata1)// make script

 let modifiedJsdata1 = JSON.parse(jsonData1);// make js object
//for of
 for (value of modifiedJsdata1.address2){
    console.log(value)}
//for
    for(let i=0; i<modifiedJsdata1.address2.length; i++){
   
        console.log( modifiedJsdata1.address2[i])
       
    }
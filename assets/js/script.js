/*
//CONVERTIR UN NOMBRE ENTIER = parseInt et parseFloat

parseInt("25")
parseFloat("30")

// les fonctions avec var () sans paramèttre 

var your_thanks = () =>{

  console.log("merci");
  console.log("thanks");
  console.log("salam");
  console.log("shalom");
}

// UNE FONCTION DE LA TABLE DE MULTIPLICATION sans paramèttre
var table_multiplication = () => {
    for (let index = 0; index < 13; index++) {
        console.log(`3 x ${index} = ${index*3}`);
        
    }

}*/

// une autre façon de faire fonction avec (fuction) sans paramèttre 
/*
function  table_multiplication() {
    for (let index = 0; index < 13; index++) {
        console.log(`5 x ${index} = ${index*3}`);
        
    }
}*/

// UNE FONCTION DE LA TABLE DE MULTIPLICATION avec paramèttre
/*
var table_multiplication = (nombre, limit) => {
    console.log("nombre :"+ nombre);
    //console.log("limit :"+ limit);
    if (nombre && typeof(nombre)=== "number") {
        for (let index = 0; index < 13; index++) {
            console.log(` ${nombre} x ${index*nombre}`);
        
    }
 }else{
     console.log("le paramèttre doit etre nombre");
 }

}*/
// UNE FONCTION DE LA TABLE DE MULTIPLICATION avec paramèttre
/*
var table_multiplication = (nombre, limit) => {
    console.log("nombre :"+ nombre);
    //console.log("limit :"+ limit);
    if (nombre && typeof(nombre)=== "number") {
        for (let index = 0; index < 13; index++) {
            console.log(` ${nombre} x ${index*nombre}`);
        
    }
 }else{
     console.log("le paramèttre doit etre nombre");
 }

}*/

// les fonctions le return c'est pour retouner une valeure de nombre
/*
var carree = (nombre) => {
    if (nombre && typeof(nombre)=== "number") {
        return nombre*nombre
    }else{
        return null
    }
}*/

// LES OBJETS EN JAVASCRIPT
//var car = new Object() ou 
/*var car = {}
car._id = 453267
car.name = "kia" 
car.year = 2020*/

var car = {
    id: 453267,
    name:"kia",
    year: 2020,
    color: "red",
    wendow: 5,
    model: "E45"
}

var person = {
    name: "Mlila",
    mail: "mlila@gmain.com",
    phone: "03036933",
    adress: {
        street: "2 rue victor hugo",
        code: "77100",
        city: "mareuil-lès-meaux",
        country: "FRANCE"
    }
}

var person_2 = {
    ...person,
    lastname: "julie",
    firstname: "didassa"
}

var saw_hello = (person) =>{
    console.log(`Hello ${person.firstname}`);
}





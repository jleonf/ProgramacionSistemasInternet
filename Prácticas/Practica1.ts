interface IPerson{
    name: string;
    age: number;
    friends: string[];
    car?: boolean
 
}

const person1: IPerson = {
    name:"Javier",
    age: 21,
    friends: ["Daniel","Pablo","David"],
    car: true,
}

const person2: IPerson = {
    name: "Santiago",
    age: 22,
    friends: ["Javier", "María"]
}

const person3: IPerson = {
    name: "Santiago",
    age: 22,
    friends: ["Javier", "María"]
}

//_____________________________________DEEP PRINT_______________________________________________________
const deepPrint = (p:any) =>{
   Object.keys(p).forEach(key =>{
       if(typeof p[key] !== "object") console.log(key +": "+ p[key]);
       else {
           console.log(key);
           deepPrint(p[key])
       }
   })   
}

deepPrint(person1);

//____________________________________DEEP CLONE______________________________________________________

const deepClone = (p:IPerson):IPerson => {
    if(typeof p !== "object") return p;
    
    const cloned = {...p};
    return cloned;
}

console.log(deepClone(person1));

//_____________________________________DEEP EQUAL________________________________________________________

const deepEqual = (p1:IPerson, p2:IPerson):boolean => {    
    if(Object.keys(p1) == Object.keys(p2)){
        return true;
    }
    return false;
}

if(deepEqual(person2,person3)) console.log("OK");
else console.log("NOT OK");
//Catch Me If You Can
// try {
//     function sum(x, y){
//         return x + y;
//     }
//     if (typeof(sum()) === "number"){
//         throw new Error("error")
//         }
// }
// catch(err){
//   console.log(err)
// }
// finally {
//     console.log("I am running no matter what")
// }

// sum(1,2)


// try{
//     var user = {username: "Sam", password: "123abcd"};
    
//     if (user.username === "sam" && user.password === "123abc"){
//         console.log("login successful")
//     }
   
//     if (!(user.username === "sam") || !(user.password === "123abc")){
//         throw "invalid login attempt"
//     }
//     // if (!(user.password === "123abc")){
//     //     throw "invalid password"
//     // }
// }
// catch(err){
//     console.log(err)
// }
// finally{
//     console.log("you suck")
// }

try{
    var user = {username: "Sam", password: "123abcd"};
    
    if (user.username === "sam" && user.password === "123abc"){
        console.log("login successful")
    } else {
        throw new Error("invalid login attempt")
    }
}
catch(err){
    console.log(err)
}
finally{
    console.log("you suck")
}
let name="老谭";
let address="成都";

let user={
    name,
    address,
    getInfo(){
        return `大家好！${name},我在${address}.`;
    }
}

console.log(user.name,user.address,user.getInfo());

let name2="name";
let user2={
    [name2]:"laotan"
}
console.log(user2.name);
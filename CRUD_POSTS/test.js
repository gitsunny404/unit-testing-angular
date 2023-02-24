const location = ['loc1', 'loc2', 'loc3'];

console.log(location);

let l1 = 'loc1';

let locArray = [];
for(let i = 0; i<location.length;i++){
    console.log(location[i]);

    if(location[i] != l1){
        locArray.push(location[i]);
    }

    console.log("X", locArray[i]);
}




function average(array){
    var sum = 0;
    for (var i = 0; i<array.length; i++) {
    sum += parseInt(array[i])
    }
    var rata = sum / array.length;
    return rata;
}

function median(array){
    var half = Math.floor(array.length / 2);

    array.sort(function(a,b) {return a - b;});

    if (array.length % 2) {
        return array[half]
    } else {
        return (array[half-1] + array[half])/2.0;
    }
}

function highest(array){
    return Math.max(...array);
}

function lowest(array){
    return Math.min(...array);
}

function hitung(){
    var nilai1 = (document.getElementById("nilai1").value);
    var nilai2 = (document.getElementById("nilai2").value);
    var nilai3 = (document.getElementById("nilai3").value);
    var nilai4 = (document.getElementById("nilai4").value);
    var nilai5 = (document.getElementById("nilai5").value);

    let array = [nilai1, nilai2, nilai3, nilai4, nilai5];

    document.getElementById("ratarata").innerHTML = average(array);
    document.getElementById("tengah").innerHTML = median(array);
    document.getElementById("maks").innerHTML = highest(array);
    document.getElementById("mini").innerHTML = lowest(array);
}

function reset(){
    document.getElementById("form").reset();
    document.getElementById("ratarata").innerHTML = " ";
    document.getElementById("tengah").innerHTML = " ";
    document.getElementById("maks").innerHTML = " ";
    document.getElementById("mini").innerHTML = " ";
}
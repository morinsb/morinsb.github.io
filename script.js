$(document).ready(function () {

    $('#table').bootstrapTable({
        //Assigning data to table
        data: data.json
    });
});

/* $.getJSON("data.json", function(data){
    for (var i = 0, len = data.length; i < len; i++) {
        console.log(data[i]);
    }
}); */
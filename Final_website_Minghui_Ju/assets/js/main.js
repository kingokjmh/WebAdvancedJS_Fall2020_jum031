$(()=>{
    loadData();
});


loadData = () =>{
    $.getJSON("data.json", (data)=> {

        console.log("JSON is loaded!");

        console.log(data);

        getWebsites(data);
    })

}

 getWebsites = (temp) =>{
 let source = $("#my-template").html();

 let template = Handlebars.compile(source);

 let results = template(temp);

  $(".websites-list").append(results);

 }

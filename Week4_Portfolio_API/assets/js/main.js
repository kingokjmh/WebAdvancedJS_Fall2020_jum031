$(()=>{
    loadData();
})


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


$(()=>{
    attachEvent();
})

attachEvent = ()=>{
    $("#search-button").click(()=>{
        loadData($("#query").val());
        $("#query").val([]);

    });
}

loadData = ()=>{
    let query = $("#query").val();
if(query !=""){
    $.ajax({
        url:"https://api.unsplash.com/search/photos/?client_id=xWQXEKiXlK2o_JHMGirXDF2uyNwwrCfner2YsY7ZrA4" + "&query=" + query,
        type:"GET",
        dataType:"json",

        success: (data)=>{
                 console.log(data);
                
                for( let i=0; i < 10; i++){
                  let images = data.results[i].urls.small;
                 // let images1 = data.results[1].urls.small;
                

                

                
                

                //empty before putting a new value
                $(".images").empty();
               // $(".images1").empty();

                $(".images").attr("src",images);
               // $(".images1").attr("src",images1);
                }
    
    }
})





}
}

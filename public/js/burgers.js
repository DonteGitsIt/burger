$(function(){
    $(".devour").on("click", function(){
        var id = $(this).data("id")
        console.log(id)
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: id
        }).then(
            function(){
                console.log("ate a burger")

                location.reload()
            }
        )
    })

    $(".create-form").on("submit", function(event){
        event.preventDefault()

        var newBurger = {
            name: $("#burgerName").val().trim()
        }

        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("Made new burger")

                location.reload()
            }
        )
    })
})
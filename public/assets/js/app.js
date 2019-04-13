

// // Make sure we wait to attach our handlers until the DOM is fully loaded.

//     $(".create-form").on("submit", function(event) {
//         // Make sure to preventDefault on a submit event.
//         event.preventDefault();

//         var name = $('#burger-name').val().trim();
        

//             // Send the POST request.
//             $.ajax("/api/burgers", {
//                 type: "POST",
//                 data: {name: name}
//             }).then(function(data) {
//                 console.log(data);
//                 location.reload();
//                 // console.log("created new burger");
//                 // Reload the page to get the updated list
//                 //location.reload();
//             });
//     });

//     $(function() {
//         $(".change-devour").on("click", function(event) {
//             var id = $(this).data("id");
    
//             var newState = {
//                 devoured: 1
//             };
    
//             // Send the PUT request.
//             $.ajax("/api/burgers/" + id, {
//                 type: "PUT",
//                 data: newState
//             }).then(function() {
//                 // console.log("changed devour to", true);
//                 // Reload the page to get the updated list
//                 console.log("Burger devoured");
//                 location.reload();
//             });
//         });  
        

//     $(".deleteburger").on("click", function(event) {
//         var id = $(this).data("id");

//         $.ajax("/api/burgers/" + id, {
//             type: "DELETE"
//         }).then(function() {
//             // Reload the page to get the updated list
//             location.reload();
//         });
//     });  
// });

// /*    $(document).ready(function(){

//     $(".delete-burger").on("click",function(){
//         var id = $(this).data("id");
//         $.ajax({
//             method:"DEVOUR",
//             url:`/api/burger/${id}`
//         }).then(function(data){
//             console.log(data);
//             location.reload();
//         })

//     })

// })*/
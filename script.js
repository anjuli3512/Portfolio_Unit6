/*global $*/
 $("#answer").click(function() {
    alert("Put it on my bill");
 });    
    
$("#answer2").click(function() {
    alert("Gets jalapeno buisness!");
});
    
$("#answer3").click(function() {
    alert("Because seven ate nine!");
 });    
    
$("#answer4").click(function() {
    alert("It gets toad away");
});    
$("#answer5").click(function() {
    alert("Because they're really good at it");
}); 
$("#answer6").click(function() {
    alert("B");
}); 
$("#answer7").click(function() {
    alert("They planet");
}); 
$("#answer8").click(function() {
    alert("Between us, something smells");
});

$("#submit").click(function(){
 var pianoKeys = "36";
 if ($("#keys").val() === pianoKeys) {
 $("p").html("Correct!");
 } else {
 $("p").html("Incorrect");
 }
});

$("#submit2").click(function(){
 var babyRabbit= "Kitten";
 if ($("#rabbit").val() === babyRabbit) {
 $("p2").html("Correct!");
 } else {
 $("p2").html("Incorrect");
 }
});
  
$("#submit3").click(function(){
 var largeCity= "Tokyo";
 if ($("#city").val() === largeCity) {
 $("p3").html("Correct!");
 } else {
 $("p3").html("Incorrect");
 }
});

$("#submit4").click(function(){
 var uglyDuck= "Hans Christian Andersen";
 if ($("#duck").val() === uglyDuck) {
 $("p4").html("Correct!");
 } else {
 $("p4").html("Incorrect");
 }
});




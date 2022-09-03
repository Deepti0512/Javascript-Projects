//Using jquery 
let expression = "";

$('.button').on('click',function(event){
    let val = event.target.innerHTML;
    console.log(val);
    if(val == '='){
        try{
            expression = eval(expression);
            console.log(expression);
            $(".input").css('color','black');
            $(".input").val(expression);
        }
        catch(error){
            expression = "";
            alert('Invalid Input!');
            $(".input").val("");
        }
    }
    else if( val == 'C'){
        expression = "";
        $(".input").css('color','grey');
        $(".input").val(expression);
    }
    else if(val == 'Del'){
        expression = expression.slice(0,-1);
        $(".input").val(expression);
    }
    else{
        expression += val;
        console.log(expression);
        $(".input").val(expression);
    }
});

//Code for changing theme
$('.icon').on('click',function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        $(".icon").attr("src","img/sun.png");
    }else{
        $(".icon").attr("src","img/moon.png");
    }
})
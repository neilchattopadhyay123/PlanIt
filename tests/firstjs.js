document.addEventListener("DOMContentLoaded", function (){
    function btnClicked(type){
        alert("This button is number ${type}");
    }

    window.btnClicked = btnClicked
})
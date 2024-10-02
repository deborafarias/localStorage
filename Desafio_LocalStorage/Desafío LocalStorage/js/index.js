document.getElementById("buttonText").addEventListener("click", function() {

    const string = document.getElementById("inputText").value; 
    localStorage.setItem("dato", string);

});
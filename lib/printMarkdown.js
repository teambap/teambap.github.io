function switchid(id){  
    hideallids();
    showdiv(id);
}

function hideallids(){
    //loop through the array and hide each element by id
    for (var i=0;i<ids.length;i++){
        hidediv(ids[i]);
    }         
}

function hidediv(id) {
    //safe function to hide an element with a specified id
    document.getElementById(id).style.display = 'none';
}

function showdiv(id) {
    //safe function to show an element with a specified id        
    document.getElementById(id).style.display = 'block';
}

function printMarkdownSource() {
    hidediv("source");
    var view = document.getElementById("view");
    var source = document.getElementById("source");
    view.innerHTML = markdown.toHTML(source.innerHTML);
    console.log(source.innerHTML);
}

if (window.addEventListener) {
    window.addEventListener("load", printMarkdownSource, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", printMarkdownSource);
} else {
    window.onload = printMarkdownSource;
}


function viewParent()
{
    // Sparar element-typen i variabeln "parentTag"
    var parentTag = this.parentNode.tagName;
     
    // Sparar elementets id i variabeln "parentId"
    var parentId = this.parentNode.id;
     
    // Skriver ut informationen som samlats in ovan
    alert("Föräldern till denna nod är av element-typen: " + parentTag + "\nOch har id: " + parentId);
}
 
 
function init()
{
 
    // Läggen event-handlers på våra knappar
 
    var button1 = document.getElementById("button1")
    button1.onclick = viewParent;
     
    var button2 = document.getElementById("button2")
    button2.onclick = viewParent;
     
    var button3 = document.getElementById("button3")
    button3.onclick = viewParent;   
}
 
window.onload = init;
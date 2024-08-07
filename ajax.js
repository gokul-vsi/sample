let httpcreate = new XMLHttpRequest();
httpcreate.open('GET',"gokul.txt");
httpcreate.onload = function name(params) {
    alert(this.responseText)
}
httpcreate.send()
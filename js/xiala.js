    function $(id){
        return document.getElementById(id);
    }
    var d=$("dls");
    var l=$("lis");
        l.onclick=function() {
        if(d.style.display=="block"){
            d.style.display='none';
        }else{
            d.style.display="block";
        }
        
    }
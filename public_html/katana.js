var katana = {
    extend: function(e,o){
        if(typeof e == "string") {            
            return document.getElementById(e);}
        for(var name in o){
            e[name] = o[name];
        }        
        return e;
    },
    obt: function(id){
        return katana.extend(document.getElementById(id), katana);
    },
    esc: function(txt){
        return this.innerHTML = txt;
    },
    crear: function(e, id){        
        if (id!== undefined){
            var ele = katana.extend(document.createElement(e), katana);
            ele.id = id;
            return ele;
        }else{        
            return katana.extend(document.createElement(e), katana);
        }        
    },
    metele: function(e){
        return this.appendChild(e);        
    }
};
window.$ = katana;
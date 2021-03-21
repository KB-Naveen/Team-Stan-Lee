function color_change(){
    setTimeout(() => {
        document.getElementById('load').style.display = "none"
        document.getElementById('tweet').style.display = "flex"
    
    }, 3000);
    
};

color_change();
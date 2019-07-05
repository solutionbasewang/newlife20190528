function Button(){
    this.clicked=false;
    this.click=function(){
        this.clicked=true;
        if(button.clicked){
            console.log("the button has been click");
        }
    }
}
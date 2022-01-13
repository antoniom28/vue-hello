let wait = false;
let App = new Vue(
{
    el: "#container",
    data: {
        message : "IMMAGINE CASUALE",
        image : "https://picsum.photos/id/1/200/200",
        imageCounter : 2,
    },
    methods : {
        changeImage : function(){
            if(!wait){
                wait = true;
                setTimeout(() => {
                    wait=false;
                    this.image = `https://picsum.photos/id/${this.imageCounter++}/200/200`;
                }, 1000);
            }
        },
    },
}
);
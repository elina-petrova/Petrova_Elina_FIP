// import AudioComponent from "./components/TheAudioComponent.js";
// import VideoComponent from "./components/TheVideoComponent.js";
// import ImageComponent from "./components/TheImageComponent.js";

import ButtonComponent from "./components/TheButtonComponent.js";
import LightBoxComponent from "./components/TheLightBoxComponent.js";
import { fetchData } from "./components/DataMiner.js";
import { SendMail } from "./components/mailer.js";


(() => {
    const myVM = new Vue({
        data: {
            // activeComponent: VideoComponent
            currentItem: {},
            type: "",
            mediaCollection: []
        },

        mounted: function(){
            fetchData('./includes/index.php').then(data => {
                this.mediaCollection = data;
            })
        },

        methods: {
            // changeComponent(){
            //     this.activeComponent = (this.activeComponent.name==="VideoComponent") ? AudioComponent : VideoComponent;
            //     this.doSomethingElse(this.activeComponent.name);
            // },
            // doSomethingElse(name){
            //     console.log("hi "+name);
            // },

            setComponent(project){
                // this.activeComponent = `${component}Component`;
                this.type = project.type;
                this.currentItem = project;

                document.querySelector('.lightbox').classList.add('show-lightbox');
            }
        },

        components:{
            // AudioComponent,
            // VideoComponent,
            // ImageComponent,
            //when you see the component in marup make it ButtonComponent
            "buttoncomponent" : ButtonComponent,
            "lightbox": LightBoxComponent
        }
    }).$mount("#app");



    //form submition
    let mailSubmit = document.querySelector('.submit-wrapper');

    function processMailFailure(result) {
        console.table(result); 
        alert("Ooops... " + result.message);
    } 

    function processMailSuccess(result) {
        var i = 0;
        for (var keys in result) {
            if (keys != "message" && keys != "inquery" && result[keys]==="" || result[keys] === false) {
                document.querySelector(`.${keys}-error`).innerHTML = `* required.`;
                i += 1;
            } else if (keys != "message" && keys != "inquery") {
                document.querySelector(`.${keys}-error`).innerHTML = '';
            }
        }
        if(i === 0) {
        console.log(i);
        alert('Email sent successfully');
        }
    }

    function processMail(event) {
        event.preventDefault();
        SendMail(this.parentNode)
            .then(data => processMailSuccess(data))
            .catch(err => processMailFailure(err));
    }
    mailSubmit.addEventListener("click", processMail);

    //scrolling effect
    const links = document.querySelectorAll("#homeSection ul li a");

        for (const link of links) {
            link.addEventListener("click", clickHandler);
        }

        function clickHandler(e) {
         e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
}
})();
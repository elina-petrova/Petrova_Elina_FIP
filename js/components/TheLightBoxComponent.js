import Audio from "./TheAudioComponent.js";
import Video from "./TheVideoComponent.js";
import Graphic from "./TheImageComponent.js";

export default {
    props: ["item", "type"],

    template: `
    <section class="lightbox">
        <div class="info-main-wrapper">
        <div class="lb-close close-bt" @click="closelb">═</div>

        <h3 class="title"> {{ item.title}} </h3>
        <div class="info-wrapper">
        <div class="col1">
        <div class="small-heading">{{ item.tagline }} </div
        <p> {{ item.description }} </p>
        </div>

        <div class="col2">
        <div> <div class="small-heading"> year </div> <p> {{ item.year}} </p> </div>
        <div> <div class="small-heading">  type </div>  <p> {{ item.type }} </p> </div>
        <div> <div class="small-heading"> technologies </div>  <p> {{ item.technologies }} </p> </div>
        
        </div>
        </div>
        </div>
    </section>
    `,
    //waiting for changes
    computed: {
        currentComponent: function(){
            return this.type;
        }
    },
    components: {
        Audio,
        Video,
        Graphic
    },

    methods: {
        closelb(){
            document.querySelector('.lightbox').classList.remove('show-lightbox');
        }
    }
}
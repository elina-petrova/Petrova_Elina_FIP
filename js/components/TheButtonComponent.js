export default {
    name: "ButtonComponent",

    props: ['item'],

    // you need to have a root element in template
    // here the root element is <sesction>
    template: `
 
            <div @click="loadMediaComponent" class="button-wrapper" :data-type="item.type">
                <img class="lb-thumb" :src="'images/' + item.thumb" alt="portfolio thumbnail">
                <h4 class="lb-thumb-title"> {{item.title}} </h4>
            </div>
    `,

    methods: {
        loadMediaComponent(){
            // debugger;
            // event.target.dataset.mediatype is an argument that get passed to setcomponent
            this.$emit("setmediatype", this.item);
        }
    }
}
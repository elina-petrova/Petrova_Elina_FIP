export default {
    name: "VideoComponent",
    props: ["work"],

    // you need to have a root element in template
    // here the root element is <sesction>
    template: `
         <section class="video-component">
            <i class="fas fa-film media-icon"></i></i><h1>This is the video component</h1>
            <video :src="'video/' + work.source" controls></video>
            <h4>Video Title</h4>
            <h3>Video Release Date</h3>
            <p>video description goed here...</p>
        </section>
    `
}
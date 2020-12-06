export default {
    name: "AudioComponent",
    props: ["work"],

    template: `
        <section class="audio-component">
            <i class="fas fa-music media-icon"></i>
            <h1>This is the audio component</h1>
            <audio :src="'audio/' + work.source"></audio>
        </section>
    `
}
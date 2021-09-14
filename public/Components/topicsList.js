Vue.component('topic-list', {
    props: {
        topics: Array
    },
    template: `
        <div class="topic-list">
            <div class="topic-card"
                v-for="(topicData, index) of topics" 
                v-on:click="$emit('topic-chosen', topicData)"
                v-bind:key="topicData.topic+index">
                <h2>{{topicData.topic}}</h2>
                <p>Completed: 0/{{topicData.qTags.length}}</p>
            </div>
        </div>
    `
}) 
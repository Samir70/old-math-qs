Vue.component('course-card', {
    props: {
        courseData: Object
    },
    template: `
        <div class="course-card">
        <h1>{{courseData.courseName}}</h1>
        <p>Completed 0 / {{courseData.topics.length}} topics</p>
        <p>Your rating: 1234</p>
        </div>
    `
})
export const MeetupCover = {
  template: `<div class="meetup-cover" v-if="title && link" :style="{'--bg-url' : 'url('+ link +')'}">
        <h1 class="meetup-cover__title">{{title}}</h1>
    </div>`,

  props:{
    link:{
      type: String,
      default: `https://course-vue.javascript.ru/api/images/2`
    },
    title:{
      type: String,
      default: 'Название митапа'
    }
  },
};

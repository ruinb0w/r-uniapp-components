import mtextarea from "../mtextarea/mtextarea.vue";
import selectImage from "../selectImage/selectImage.vue";
import instruction from "../instruction/instruction.vue";
import submit from "../submit/submit.vue";

export default {
  name: 'comment',
  props: {
    disableimage: Boolean
  },
  data(){
    return {
      show_comment: false,
      comment_anime: 'show'
    }
  },
  methods: {
    toggleComment(){
      if(this.show_comment){
        this.comment_anime = 'hide';
        setTimeout(()=>{
          this.show_comment = false;
        }, 500);
      }else{
        this.comment_anime = 'show';
        this.show_comment = true;
      }
    }
  },
  components: {
    mtextarea,
    selectImage,
    instruction,
    submit
  }
}

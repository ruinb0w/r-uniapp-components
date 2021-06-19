import mtextarea from "../mtextarea/mtextarea.vue";
import selectImage from "../selectImage/selectImage.vue";
import instruction from "../instruction/instruction.vue";
import submit from "../submit/submit.vue";

export default {
  name: 'comment',
  data(){
    return {
      show_comment: false
    }
  },
  methods: {
    toggleComment(){
      this.show_comment = !this.show_comment;
    }
  },
  components: {
    mtextarea,
    selectImage,
    instruction,
    submit
  }
}

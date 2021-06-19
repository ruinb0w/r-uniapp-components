import submit from "../submit/submit.vue";

export default {
  name: 'star-box',
  props: {
    theme: String,
    title: String
  },
  data(){
    return {
      star_list: [true, true, true, false, false],
      star_text: '好'
    }
  },
  methods: {
    setStar(index){
      const tmp_star_list = [];
      for(let i = 0; i < this.star_list.length; i++){
        if(i <=index){
          tmp_star_list[i] = true;
        }else{
          tmp_star_list[i] = false;
        }
      }
      this.star_list = tmp_star_list;
      if(index < 2){
        this.star_text = '一般'
      }else if(index < 4){
        this.star_text = '好'
      }else {
        this.star_text = '很好'
      }
    },
    submit(){
      const star_list = this.star_list;
      const star_text = this.star_text;
      this.$emit('submit', {detail: {star_list, star_text}});
    }
  },
  components: {
    submit
  }
}

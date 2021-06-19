export default {
  name: 'single-block',
  props: {
    detail: Object,
    shadow: Boolean
  },
  data(){
    return {
      touch: false
    }
  },
  methods: {
    handleOperation(){
      this.handleTouch();
      const detail = this.detail;
      if(detail.url){
        uni.navigateTo({
          url: detail.url
        })
      }else if(detail.handler){
        this.$emit(detail.handler, detail);
      }
    },
    handleTouch(){
      this.touch = true;
      setTimeout(()=>{
        this.touch = false;
      }, 500)
    }
  }
}

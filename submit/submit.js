export default{
  name: 'submit',
  props: {
    title: String,
    disabled: Boolean
  },
  data(){
    return {
      touch: false
    }
  },
  methods: {
    submit(){
      this.handleTouch();
      if(this.disabled) return;
      this.$emit("submit");
    },
    handleTouch(){
      this.touch = true;
      setTimeout(()=>{
        this.touch = false;
      }, 500)
    }
  }
}

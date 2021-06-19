export default{
  name: 'post-card',
  data(){
    return {
    }
  },
  props: {
    detail: Object,
  },
  methods: {
    emitHandler(e){
      console.log('emitHandler',e);
      this.$emit(e.handler, this.detail);
    }
  }
}

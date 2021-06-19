export default{
  name: 'minput',
  props: {
    title: String,
    type: String,
    placeholder: String,
    is_must: Boolean,
    maxlength: Number,
    value: String,
    disabled: Boolean,
    theme: String,
    arg: String
  },
  data(){
    return {
      component_value: ''
    }
  },
  mounted(){
    if(this.value){
      this.handleInput({detail: {value: this.value, arg: this.arg}});
    }
  },
  methods: {
    handleInput(e){
      console.log('input', e.detail.value);
      const value = e.detail.value;
      const arg = this.arg;
      this.component_value = value;
      this.$emit('input', {value, arg});
    }
  }
}

export default{
  name: 'mtextarea',
  props: {
    is_must: Boolean,
    title: String,
    value: String,
    placeholder: String,
    maxlength: Number,
    disabled: Boolean,
    arg: String,
    theme: String
  },
  data(){
    return {
      compoent_value: ''
    }
  },
  onLoad(){
    console.log('mode', this.mode);
    if(this.value){
      this.handleInput({detail: {value: this.value}});
    }
  },
  methods: {
    handleInput(e){
      console.log('input', e.detail.value);
      const value = e.detail.value;
      this.compoent_value = value;
      this.$emit('input', {value, arg: this.arg});
    }
  }
}

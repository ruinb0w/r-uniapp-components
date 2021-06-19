export default{
  name: 'mselector',
  props: {
    title: String,
    theme: String,
    range: Array,
    is_must: Boolean,
    value: String,
    placeholder: String,
    disabled: Boolean,
    mode: String,
    arg: String
  },
  data(){
    return {
      component_value: '',
      value_index: 0
    }
  },
  methods: {
    handlePicker(e) {
      const mode = this.mode;
      switch (mode) {
        case 'selector':
          this.handleSelector(e);
          break;
        case 'date':
          this.handleDateTime(e);
          break;
        case 'time':
          this.handleDateTime(e);
          break;
        case 'multiSelector':
          this.handleMultiSelector(e);
          break;
        case 'region':
          this.handleRegion(e);
          break;
        default:
          this.handleSelector(e);
          break;
      }
    },
    handleRegion(e){
      console.log("handleSelector", e);
      const value = e.detail.value;
      this.setValue(value.join("-"));
    },
    handleSelector(e) {
      const value = this.range[e.detail.value];
      this.setValue(value);
    },
    handleDateTime(e) {
      const value = e.detail.value;
      this.setValue(value);
    },
    handleMultiSelector(e) {
      const value = e.detail.value;
      const range = this.data.range;
      console.log('range', range);
      let tmp = '';
      value.forEach((item, index) => {
        if (value.length == index + 1) {
          tmp += range[index][item];
        } else {
          tmp += range[index][item] + '-'
        }
      })
      this.setValue(tmp);
    },
    setValue(value) {
      this.component_value = value;
      console.log("components setValue", this.arg, value);
      this.$emit('change', {
        arg: this.arg,
        value
      });
    }
  },
  watch: {
    value() {
      // 用于对mode=selector的选项进行定位
      if(this.mode == "selector"){
        let value_index = this.range.indexOf(this.value);
        if (value_index == -1) {
          value_index = 0
        }
        this.value_index = value_index;
      }
    }
  }
}

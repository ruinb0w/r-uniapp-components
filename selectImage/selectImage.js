export default{
  name: 'select-image',
  props: {
    title: String,
    max: Number,
    value: Array,
    is_must: Boolean,
    size: Number
  },
  data(){
    return {
      pic_list: [],
      component_max: 0
    }
  },
  mounted(){
    this.initMax();
  },
  //
  methods: {
    initMax(){
      if (!this.max) {
        this.component_max = 8;
      }else{
        this.component_max = this.max;
      }
    },
    async addPic(){
      let pic_list = this.pic_list;
      // #ifdef H5
      const res = await uni.chooseImage();
      // #endif
      // #ifdef MP-WEIXIN
      const res = await uni.chooseImage({count: this.max - this.pic_list.length});
      // #endif
      console.log("res", res);
      pic_list = [...pic_list, ...res[1].tempFilePaths]
      this.setValue(pic_list);
    },
    delPic(e){
      const index = e.currentTarget.dataset.index;
      let pic_list = this.pic_list;
      pic_list.splice(index,1);
      console.log('pic_list', pic_list);
      this.setValue(pic_list);
    },
    setValue(value){
      this.pic_list = value;
      const detail = {value}
      this.$emit('change', detail);
    },
  },
  watch: {
    value(){
      this.pic_list = this.value
    }
  }
}

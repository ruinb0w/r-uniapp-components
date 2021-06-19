export default{
  name: 'perform-card',
  props: {
    detail: Object,
    url: String,
    title1: String,
    title2: String,
    operation_list: Array
  },
  data(){
    return {}
  },
  methods: {
    previewImage(e){
      const index = e.currentTarget.dataset.index;
      console.log("previewImage", index);
      const pic_list = this.detail.pic_list;
      uni.previewImage({
        urls: pic_list,
        current: pic_list[index]
      })
    },
    handleOperation(e){
      const index = e.currentTarget.dataset.index;
      const operation_list = this.operation_list;
      const detail = this.detail;
      this.$emit(operation_list[index].handler, {detail});
    }
  }
}

export default{
  name: 'image-grid',
  props: {
    img_list: Array
  },
  data(){
    return {
    }
  },
  methods: {
    previewImage(e){
      const index = e.currentTarget.dataset.index;
      const img_list = this.img_list;
      console.log("previewImage", index);
      uni.previewImage({
        current: img_list[index], 
        urls: img_list
      });
    }
  }
}

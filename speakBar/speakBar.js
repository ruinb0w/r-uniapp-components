export default {
  name: 'speak-bar',
  data(){
    return {
      speak_content: ''
    }
  },
  methods: {
    setValue(e){
      console.log("setValue", e);
      const value = e.detail.value;
      this.speak_content = value;
    },
    async selectImg(){
      const res = await uni.chooseImage({})
      const pic_list = res[1].tempFiles;
      console.log(pic_list);
    }
  }
}

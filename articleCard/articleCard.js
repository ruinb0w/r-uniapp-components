export default{
  name: 'article-card',
  props: {
    detail: Object,
    theme: String
  },
  data(){
    return {
    }
  },
  methods:{
    navigate(){
      if(this.detail.url){
        uni.navigateTo({
          url: this.detail.url
        })
      }
    }
  }
}

export default {
  name: 'search-bar',
  data(){
    return {
      content: ""
    }
  },
  methods: {
    setContent(e){
      const value = e.detail.value;
      this.content = value;
    },
    search(){
      if(this.content.length == 0) return;
      this.$emit("handleSearch", {content: this.content})
    }
  }
}

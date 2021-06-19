export default{
  name: 'vote-box',
  data(){
    return {
      list_to_show: []
    }
  },
  props: {
    type: String,
    list: Array
  },
  methods: {
    select(index){
      let list;
      if(this.type == 'radio'){
        list = this.list_to_show.map(item=>{
          item.active = false;
          return item;
        })
        list[index].active = true;
      }else if(this.type == 'checkbox'){
        list = this.list_to_show;
        list[index].active = !list[index].active;
      }else{
        throw "type must be radio or checkbox"
      }
      this.list_to_show = list;
      this.$emit("select", {detail: list});
    }
  },
  mounted(){
    this.list_to_show = this.list;
  }
}

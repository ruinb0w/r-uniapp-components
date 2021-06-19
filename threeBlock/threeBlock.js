export default {
  name: 'three-block',
  props: {
    block_list: {
      type: Array
    }
  },
  data(){
    return {}
  },
  onLoad(){
    console.log("block_list", block_list);
  }
}

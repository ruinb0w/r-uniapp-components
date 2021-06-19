let current_scroll_left = 0;
let list_width = 0;
let first_item_left = 0;

export default {
  name: 'type-scroll-bar',
  props: {
    url: String,
    list: Array,
    current: Number
  },
  data(){
    return {
      current_index: 0,
      scroll_left: 0
    }
  },
  methods: {
    switchType(e){
      const index = e.currentTarget.dataset.index;
      this.current_index = index; 
      const query = uni.createSelectorQuery().in(this);
      const item = query.select('.item'+index);
      item.fields({
        size: true,
        rect: true
      }, data=>{
        const item_left = data.left;
        const item_width = data.width;
        this.scroll_left = current_scroll_left + item_left + item_width/2 - list_width/2 - first_item_left;
      }).exec();

      this.$emit("switch", {detail: {index}});
    },
    scroll(e){
      current_scroll_left = e.detail.scrollLeft;
    }
  },
  mounted(){
    const query = uni.createSelectorQuery();

    const list = query.select('.type-list');
    list.fields({
      size: true
    }, data=>{
      list_width = data.width.toFixed(0);
    }).exec();

    const item0 = query.select(".item0");
    item0.fields({
      rect: true,
    }, data=>{
      first_item_left = data.left.toFixed(0);
    }).exec();
  },
  watch: {
    current(index){
      this.switchType({currentTarget: {dataset: {index}}});
    }
  }
}

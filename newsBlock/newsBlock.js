import typeScrollBar from "../../components/typeScrollBar/typeScrollBar.vue";
import articleCard from "../../components/articleCard/articleCard.vue";
import empty from "../../components/empty/empty.vue";

export default {
  name: 'news-block',
  props: {
    news_list: Array
  },
  data(){
    return {
      current_news_index:0,
      tab_list: []
    }
  },
  methods: {
    switchNewsType(e){
      this.current_news_index = e.detail.index;
    }
  },
  mounted(){
    this.tab_list = this.news_list.map(item=>{
      return item.title;
    })
    console.log("tab_list", this.tab_list);
  },
  components: {
    typeScrollBar,
    articleCard,
    empty
  }
}

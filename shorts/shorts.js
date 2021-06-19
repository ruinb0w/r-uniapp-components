/*
 * desc: shorts块, 每行4列
 * properties:
 *  short_list = {
 *    title: '标题',
 *    icon: '图标',
 *    url: '要跳转的页面, 不能是tab页',
 *    appid: '要跳转的小程序, appid优先级高于url'
 *  }
 * */

export default{
  name: 'shorts',
  data(){
    return {
    }
  },
  props: {
    shorts_list: Array,
    shadow: Boolean
  },
}

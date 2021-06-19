export default{
  name: 'float-window',
  data(){
    return {
      display: false
    }
  },
  props: {},
  methods: {
    hide(){
      this.display = false;
    },
    show(){
      this.display = true;
    }
  }
}

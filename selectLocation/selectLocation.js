export default{
  name: 'select-location',
  data(){
    return {
      address_name: ''
    }
  },
  props: {
    title: String,
    value: String
  },
  onLoad(){
    if(this.value){
      this.address_name = value;
    }
  },
  methods: {
    async setLocation(){
      const res = await uni.chooseLocation();
      this.address_name = res[1].name;
      console.log("address_name", address_name)
      this.sendDataToPage(res[1]);
    },
    sendDataToPage(data){
      this.$emit('change', {value: data})
    }
  },
}

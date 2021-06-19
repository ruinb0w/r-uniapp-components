export default{
  name: 'time-address-info',
  props: {
    detail: Object
  },
  data(){
    return {
    }

  },
  methods: {
    openLocation(){
      const [longitude, latitude] = this.detail.location.split(":");
      console.log('openLocation', longitude, latitude);
      uni.openLocation({
        longitude: Number(longitude),
        latitude: Number(latitude)
      })
    }
  }
}

export default{
  name: 'mverify-code',
  props: {
    is_must: Boolean,
    phone: String,
    value: String,
    arg: String
  },
  data(){
    return {
      time: -1,
      module_value: ''
    }
  },
  methods: {
    async getVerifyCode() {
      const phone = this.data.phone;
      if (phone.length != 11) {
        uni.myToast('请检查手机号');
        return;
      }
      if (this.data.time != -1) {
        return;
      }

      let res = await uni.myRequest({
        url: `${uni.my_api.get_phone_code}?phone=${phone}`
      })
      if (res.data.code != 10000) {
        uni.myToast('获取失败, 请稍后重试');
        return;
      }else{
        this.setData({
          time: 60
        })
        const interval = setInterval( () => {
          this.setData({
            time: this.data.time - 1
          })
          if (this.data.time == 0) {
            clearInterval(interval);
            this.setData({
              time: -1
            })
          }
        }, 1000)
      }
    },
    handleInput(e) {
      const value = e.detail.value;
      this.setData({
        module_value: value
      })
      const detail = {
        value,
        arg: this.arg
      }
      this.triggerEvent('input', detail);
    }
  }
}

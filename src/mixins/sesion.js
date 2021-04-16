export default{
    created(){
        // const token = JSON.parse(this.$localStorage.get('token'))
        const token = localStorage.getItem('token')
        if (!token) {
          this.$router.push('../pages/login')
        }
      }
}
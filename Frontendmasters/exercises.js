new Vue({
    el:'#calculator',
    data: {
        val1:0,
        val2:0,
        result:0,
    },
    methods: {
      addition(){
          result = this.val1 + this.val2 ;
      },

    },
})
<template>
  <div>

  </div>
<!-- 
    <div class="user">
     <div>User Component</div>
     <div class="image">
       <img :src="user.avatar_url" />
     </div>
     <div class="name">
       {{ user.login }}
     </div>
   </div> -->

</template>

<script>

import axios from "axios";

export default {
  name: 'CrudComponent',
  props: {
    msg: String
  },
  data() {
     return {
       user: {},
     };
   },
   created() {
     this.getUser();
   },
   methods: {
     getUser() {
       axios
         .get("https://api.github.com/users/luizmedeiros00")
         .then((res) => {
           this.user = res.data;
         })
         .catch((error) => {
           console.log(error);
         });
     },
   },
}
</script>

<style lang="scss" scoped>
.table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 960px) {
        align-items: start;
	}
}

.product-image {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.p-dialog .product-image {
    width: 50px;
    margin: 0 auto 2rem auto;
    display: block;
}

.confirmation-content {
    display: flex;
    align-items: center;
    justify-content: center;
}
@media screen and (max-width: 960px) {
	::v-deep(.p-toolbar) {
		flex-wrap: wrap;
        
		.p-button {
            margin-bottom: 0.25rem;
        }
	}
}
</style>
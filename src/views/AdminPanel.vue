<template>
  <div class="p-grid p-nogutter">
    <div class="p-col-fixed sidebar">
      <div class="p-sidebar p-d-flex p-flex-column">
        <div class="p-sidebar-header">
          <h3>Navigation</h3>
        </div>
        <div class="p-sidebar-content">
          <ul class="p-menu p-menu-dynamic p-menu-root">
            <li @click="loadPanel('product')" :class="{ 'text-style': isProductVisible }"> 
                <i class="pi pi-home"></i>
                <span>PRODUCT MANAGE</span>
              
            </li>
            <li @click="loadPanel('category')" :class="{ 'text-style': isCategoryVisible}">
                <i class="pi pi-users"></i>
                <span>CATEGORY MANAGE</span>
            </li>
            <li @click="loadPanel('brand')" :class="{ 'text-style': isBrandVisible }">
                <i class="pi pi-cog"></i>
                <span>BRAND MANAGE</span>
            </li> 
            <li @click="loadPanel('customer')" :class="{ 'text-style': isCustomerVisible }">
                <i class="pi pi-cog"></i>
                <span>CUSTOMER MANAGE</span>
            </li>
          </ul>
          <div class="p-col content">
            <Products v-if="isProductVisible"/>
            <Category v-if="isCategoryVisible"/>
            <Brands v-if="isBrandVisible"/>
            <Customers v-if="isCustomerVisible"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Products from "./Products.vue";
import Category from "./Category.vue";
import Brands from "./Brands.vue";
import Customers from "./Customers.vue";


const isProductVisible=ref(false)
const isBrandVisible=ref(false)
const isCategoryVisible=ref(false)
const isCustomerVisible=ref(false)

const loadPanel=(panel)=>{
  switch (panel) {
    case 'product':
      isProductVisible.value=true
      isBrandVisible.value=false
      isCategoryVisible.value=false
      isCustomerVisible.value=false
      break;
    case 'category':
      isProductVisible.value=false
      isBrandVisible.value=false
      isCategoryVisible.value=true
      isCustomerVisible.value=false
      break;
    case 'brand':
      isProductVisible.value=false
      isBrandVisible.value=true
      isCategoryVisible.value=false
      isCustomerVisible.value=false
      break;
    case 'customer':
      isProductVisible.value=false
      isBrandVisible.value=false
      isCategoryVisible.value=false
      isCustomerVisible.value=true
      break;
    default:
      break;
  }
  if (panel==='product') {
    console.log('log called');
    isProductVisible.value=true
  }
}
</script>

<style>
.text-style{
  text-shadow: 0px 4px 4px #6d746e63;
}
.sidebar {
  width: 100%;
  background-color: #f4f4f4;
}

.p-col-fixed sidebar{
    height: 100%;

}

.sidebar .p-sidebar-content {
  padding: 1rem;
  display: flex;
}

.sidebar .p-menu-root {
  padding: 1rem !important;
  height: 84vh;
  padding: 0;
  margin: 0;
  list-style: none;
}

.sidebar .p-menu-root li{
  cursor: pointer;
  margin-bottom: 0.5rem;
  color: hsla(160, 100%, 37%, 1);

}
.sidebar .p-menu-root li span{
  font-weight: 700 !important;

}
.sidebar .p-menu-root li i{
  font-size: 20px !important;
  margin-right: 15px !important;
}

.sidebar .p-menuitem-link {
  display: flex;
  align-items: center;
}

.sidebar .p-menuitem-link i {
  margin-right: 0.5rem;
}

.p-menu {
  width: 14.5rem !important;
}

.content {
  padding: 1rem;
  margin-left: 1rem;
  width: calc(100% - 15.5rem);
  background: #ffffff;
  color: #495057;
  border: 1px solid #dee2e6;
  border-radius: 6px
}
</style>
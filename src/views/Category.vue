<template>
  <div class="card">
      <TabView>
          <TabPanel header="Category Table">
            <DataTable v-model:filters="filters" :value="categories" paginator :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]" 
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      currentPageReportTemplate="{first} to {last} of {totalRecords} total products "
            stripedRows sortMode="multiple" tableStyle="min-width: 50rem" filterDisplay="row" :loading="loading">
              <template #header>
                  <div class="flex">
                    <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                      <span class="text-xl text-900 font-bold">Products</span>
                  </div>
                  <div class="search-margin-custom flex justify-content-end">
                <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText v-model="filters['global'].value" placeholder="Search product" />
          </span>
                  </div>
                  </div>
                
              </template>
              <Column header="Category-Id" field="id"></Column>
              <Column header="Category Name" field="categoryName"></Column>
              <Column header="Status" field="status"></Column>
              <Column header="Created Date" field="createdDate"></Column>
              <Column header="Modified By" field="lastUpdatedBy"></Column>
              <Column header="Modified Date" field="updatedDate"></Column>

            </DataTable>
          </TabPanel>
          <TabPanel header="Manage Categories">
            <div class="flex mt-3">
              <span class="p-input-icon-left flex m-2 w-5" >
                <i class="pi pi-search"></i>
                <InputText class="w-full" v-model="value1" placeholder="Search by id" />
              </span>
            </div>
            <div class="mt-6  ">
              <div class="flex">
              <div class="flex flex-column gap-2 col-4">
              <label for="productName">Category Name</label>
              <InputText id="productName" v-model="value" aria-describedby="username-help" />
            </div>
            <div class="flex flex-column gap-2 col">
              <label for="username">Status</label>
              <DropDown v-model="selectedBrand" :options="statusList" optionLabel="data" placeholder="" class="w-full" />
            </div>
            <div class="flex flex-column gap-2 col">
              <label for="username">Created Date</label>
              <InputText id="username" v-model="value" disabled  aria-describedby="username-help" placeholder="2023-04-06"/>
            </div>
            </div>
          
            <div class="flex mt-4">
              <div :v-show="false" class="flex flex-column gap-2 col">
                <label for="username"></label>
              </div>
              <div class="flex flex-column gap-2 col">
                <label for="username">Last Modified By</label>
                <InputText id="username" v-model="value" disabled  aria-describedby="username-help" placeholder="admin 01"/>
              </div>
              <div class="flex flex-column gap-2 col">
                <label for="username">Last Modified Date</label>
                <InputText id="username" disabled  v-model="value" aria-describedby="username-help" placeholder="2023-04-06"/>
              </div>
            </div>
            </div>
            <div class="button-section">
              <Button label="Save Product" raised />
              <Button label="Delete Product" raised />
              <Button label="Update Product" raised />
            </div>
          </TabPanel>
          <TabPanel header="Generate Reports">

          </TabPanel>
        </TabView>
</div>

</template>

<script setup>
import getCategories from "../services/categoryService";
import { onMounted, ref } from 'vue';
import getProducts from '../services/productService'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import { FilterMatchMode } from 'primevue/api';


const token = ref('')
const categories =  ref()
const selectedCategory =  ref('')
const selectedBrand =  ref('')
const statusList =  ref([{data:'active'}, {data:'removed'}])

onMounted(() =>{
  token.value = sessionStorage.getItem("jwt")
  getCategories(token.value).then(response=>{
    console.log('category log here', response);
    response.forEach(element => {
      element.createdDate=element.createdDate.split('T')[0]
      element.updatedDate=element.updatedDate.split('T')[0]
    });
    categories.value = response
  })
}) 

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS }
});


</script>

<style>
.p-paginator-bottom{
  margin-top: 13px;
}
.p-sidebar{
  height: 95vh;
}
.sidebar .p-sidebar-content {
padding: 1rem;
}

.search-margin-custom{
margin-left: 855px;

}
.p-paginator{
padding: 0 !important;
}
.p-input-icon-left > i:first-of-type {
z-index: 10;
}
.p-datatable .p-datatable-header {
padding: 0.5rem !important;
}
.p-datatable-wrapper{
height: 63vh;
height: 478px  !important;

}
.p-column-title{
font-weight: 700;
}
.p-tabview .p-tabview-nav li .p-tabview-nav-link{
padding: .5rem !important;
}
.p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus{
border: 0;
}
.p-tabview .p-tabview-panels{
padding: 0 !important;

}
.p-sidebar{
  height: 95vh;
}
.sidebar .p-sidebar-content {
padding: 1rem;
}
.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link{
color: hsla(160, 100%, 37%, 1) !important;
font-weight: 600 !important;
}
.button-section{
margin-top: 184px;
margin-left: 646px;

}
.p-button{
background: hsla(160, 100%, 37%, 1) !important;
  border: 1px solid hsla(160, 100%, 37%, 1) !important;
  margin-left: 1rem !important;
  width: 161px !important;

}
</style>
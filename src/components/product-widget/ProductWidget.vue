<template>
  <v-container>
    <v-card class="product-widget">
      <v-card-title class="product-widget-title">Per product widgets</v-card-title>
      <v-divider class="divider" />
      <v-row no-gutters justify="center">
        <div class="product-widget-content" v-for="product in productList" :key="product.id">
          <v-col xs="1" m="3" lg="12" cols="12">
            <ProductHeader :product="product" />
            <ProductLink :product="product" />
            <ColorChooser :product="product" />
            <div class="activation-section">
              <p class="activate-text">Activate badge</p>
              <v-switch @change="isActive(product.id)" v-model="product.active" class="custo-switch" color="#3B755F" />
            </div>
          </v-col>
        </div>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts" src="./ProductWidget.ts" />

<style scoped>
@import '@/assets/fonts/cabin.css';

.product-widget {
  padding: 16px;
  width: 100%;
  background-color: #F9F9F9;
  min-height: 419px
}

.product-widget-title {
  font-family: Cabin;
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
}

.product-widget-content {
  min-width: 280px;
}

.divider {
  height: 2px;
  width: 100%;
}

.activation-section {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.activate-text {
  font-family: Cabin;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 12px;
  color: #3B755F;
}


:deep(.v-switch__thumb) {
  background-color: white !important;
}
</style>
<template>
  <div :style="{ 'background-color': product.selectedColor }" class="header">
    <div class="logo">
      <img v-if="colorCompare" width="64" height="64" alt="logo" src="@/assets/greenLogo.svg" />
      <img v-else width="64" height="64" alt="logo" src="@/assets/logo.svg" />
    </div>
    <div class="header-text">
      <p class="actionText" :style="{ color: textColor }">This product {{ product.action }}</p>
      <p class="typeText" :style="{ color: textColor }" v-if="product.type !== 'carbon'"> {{ product.amount }} {{
    product.type
  }}</p>
      <p class="typeText" :style="{ color: textColor }" v-else> {{ product.amount }}kgs {{ product.type }}</p>
    </div>
  </div>
</template>

<script lang="ts" src="./ProductHeader.ts"></script>

<style>
@import '@/assets/fonts/cabin.css';

.header {
  display: flex;
  border-radius: 5.95px;
  box-shadow: 0px 4px 4px 0px #00000003;
  padding: 10px 12px;
}

.header-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
}


.actionText {
  font-family: Cabin;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  text-align: left;
}

.typeText {
  font-family: Cabin;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;

}
</style>
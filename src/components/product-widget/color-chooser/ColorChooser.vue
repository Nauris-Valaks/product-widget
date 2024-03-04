<template>
  <div style="display: flex; justify-content: space-between;">
    <p class="badge-text">Badge color</p>
    <div class="color-wrapper" v-if="colorSelection.length > 0">
      <div @click="changeColor(color)" :class="{ 'selected': product.selectedColor === color.value }"
        class="color-selection" v-for="color in colorSelection" :key="color.value" style="width: 16px; height: 16px; "
        :style="{ 'background-color': color.value }"></div>
    </div>
    <div v-else>
      <p>No color options available</p>
    </div>
  </div>
</template>

<script lang="ts" src="./ColorChooser.ts"></script>


<style>
@import '@/assets/fonts/cabin.css';

.color-wrapper {
  display: flex;
}

.badge-text {
  font-family: Cabin;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  color: #3B755F;
}

.color-selection {
  margin-right: 4px;
}

.color-selection:hover {
  opacity: 80%;
  cursor: pointer;
}

.selected {
  border: 3px solid #B0B0B0;
  box-shadow: 0px 8.5px 8.5px 0px #00000003;
}
</style>
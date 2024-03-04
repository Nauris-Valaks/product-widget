<template>
  <div class="link-wrapper">
    <div class="link-content">
      <p class="link-text">Link to Public Profile</p>

      <div class="link-info" @mouseenter="showTooltip" @mouseleave="startHideTimer">
        <v-icon size="small" color="#3B755F">
          mdi-information-slab-circle-outline
        </v-icon>
        <div class="info-card" v-show="tooltipVisible" @mouseenter="cancelHideTimer" @mouseleave="startHideTimer">
          <v-card>
            <p class="info-text">This widget links directly to your public profile so that you can easily share your
              impact with your customers. Turn it off here if you do not want the badge to link to it.</p>
            <v-card-actions>
              <v-btn class="info-action" variant="text" color="#3B755F">View Public Profile</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>

    </div>
    <div class="link-checkbox">
      <v-checkbox v-model="product.linked" color="#3B755F" />
    </div>
  </div>
</template>

<script lang="ts" src="./ProductLink.ts"></script>

<style scoped>
.link-wrapper {
  justify-content: space-between;
  display: flex;
  height: 49px;
}

.link-content {
  text-align: left;
  display: flex;
  position: relative;
  padding-top: 14px;
}

.link-info {
  margin-left: 2px;
  /* Required for positioning the tooltip */
  position: relative;
  cursor: pointer;
}

.info-card {
  position: absolute;
  top: calc(100% - 10px);
  /* Position the tooltip below the icon */
  left: 50%;
  transform: translateX(-50%);
  /* Center the tooltip horizontally */
  z-index: 2;
}

.info-text {
  font-family: Cabin;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  padding: 24px 16px 0 16px;
}

.info-action {
  font-family: Cabin;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: -0.02em;
  text-align: center;
}
</style>
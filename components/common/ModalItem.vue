<template>
  <transition name="modal">
    <div @click="$emit('close')" class="overlay">
      <div @click.stop class="panel">
        <slot />
        <button @click="$emit('close')" class="panel__button">
          閉じる
        </button>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
.overlay {
  background: rgba(0, 0, 0, .8);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
  transition: all .5s ease;
}
.panel {
  width: 70vh;
  height: 50vh;
  background: #fff;
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all .3s ease;
  opacity: 1;
  text-align: center;
}
.modal-enter,
.modal-leave-active {
  opacity: 0;
}

.modal-enter .panel,
.modal-leave-active .panel{
  opacity: 0;
}

.panel__title {
  font-size: 1.3rem;
  margin-bottom: 20px;
  font-weight: bold;
}

.panel__image {
  width: 100%;
}

.panel__button {
  width: 200px;
  padding: 10px;
  background-color: black;
  color: #fff;
  font-size: .9rem;
  margin-top: 20px;
}
</style>

<template>
  <div class="row">
    <div class="col-sm">
      <carousel :data="data" />
    </div>
    <div class="col-sm mt-3 mt-sm-0">
      <carousel :data="data" indicator-type="disc" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        '<div class="example-slide">Slide 1</div>',
        '<div class="example-slide">Slide 2</div>',
        '<div class="example-slide">Slide 3</div>'
      ]
    }
  }
}
</script>

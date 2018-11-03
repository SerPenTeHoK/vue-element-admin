<template>
  <div class="app-container documentation-container">
    <a class="document-btn" target="_blank" href="">{{ $t('documentation.documentation') }}</a>
    <a class="document-btn" target="_blank" href="">{{ $t('documentation.github') }}</a>
    <a class="document-btn" target="_blank" href="">SOME0</a>
    <dropdown-menu :items="outhref" style="float:left;margin-left:50px;" title="Отчёты"/>
  </div>
</template>
<script>
import DropdownMenu from '@/components/Share/dropdownMenu'

export default {
  name: 'DocReports',
  components: { DropdownMenu },
  data() {
    return {
      outhref: [
        { title: 'Отчёт 1', href: '/error' }
      ]
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.documentation-container {
  margin: 50px;
  .document-btn {
    float: left;
    margin-left: 50px;
    display: block;
    cursor: pointer;
    background: black;
    color: white;
    height: 60px;
    width: 200px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
  }
}
</style>

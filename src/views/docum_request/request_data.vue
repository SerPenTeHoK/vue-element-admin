<template>
  <b-card>
    <b-tabs card vertical>
      <b-tab title="Основное" active>
        Tab Contents 1
        <article-detail :is-edit="true"/>
      </b-tab>
      <b-tab title="Документы">
        Tab Contents 2
      </b-tab>
      <b-tab title="Счета, акты">
        Tab Contents 3
      </b-tab>
      <b-tab title="ПЧТР">
        Tab Contents 3
      </b-tab>
      <b-tab title="Этапы">
        Tab Contents 3
      </b-tab>
      <b-tab title="Заключения">
        Tab Contents 3
      </b-tab>
      <b-tab title="Разрешения">
        Tab Contents 3
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
import ArticleDetail from './components/requestData/ArticleDetail'

export default {
  name: 'EditForm',
  components: { ArticleDetail },
  data() {
    return {
      tabIndex: 0
    }
  },
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ['bg-primary', 'text-light']
      } else {
        return ['bg-light', 'text-info']
      }
    }
  }
}
</script>

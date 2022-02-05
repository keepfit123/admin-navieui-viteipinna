<template>

  <n-space justify="center">
    <n-input v-model:value="textvue" type="textarea"  style="width: 80%;height: 80%;" placeholder="基本的 Textarea" />
        <n-button @click="textreplaceAll()" type="primary">全局替换</n-button>
  </n-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useMessage } from 'naive-ui'

export default defineComponent({
  methods: {
    textreplaceAll() {
      // alert('hi')

       let textcontent = this.textvue
      textcontent = textcontent?.replaceAll("(O.S.)", "");
       textcontent = textcontent?.replaceAll("(CONT'D)", "");
        textcontent = textcontent?.replaceAll("(V.O.)", "");
       this.textvue= textcontent
      console.info('Button Clicked')

  
    }
  },
  setup() {
    //  const message = useMessage()
     let textvue=ref('')
    return {
      textvue
    }
  }
})
</script>
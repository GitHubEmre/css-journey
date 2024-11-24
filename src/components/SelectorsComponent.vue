<template>
    <div class="flex space-x-8">
        <CodeComponent @code-changed="codeChanged"/>
        <TableComponent />
        <HtmlComponent :htmlTags="(htmlTags as HtmlTag[])" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { HtmlTag } from '../models/HtmlTag';
import CodeComponent from './CodeComponent.vue';
import HtmlComponent from './HtmlComponent.vue';
import TableComponent from './TableComponent.vue';

export default defineComponent({
    name: 'SelectorsComponent',
    components: {
        CodeComponent,
        TableComponent,
        HtmlComponent
    },
    data() {
        return {
            htmlTags: [
                new HtmlTag('<div class="table">'),
                new HtmlTag('<plate id="white" class="bg-white"/>'),
                new HtmlTag('<plate id="gray" class="bg-gray" />'),
                new HtmlTag('<plate id="green" class="bg-green" />'),
                new HtmlTag('</div>')
            ]
        }
    },
    methods: {
        codeChanged: function(code: string) : void {
            console.log("SelectorsComponent : " + code)
        }
    }
});
</script>

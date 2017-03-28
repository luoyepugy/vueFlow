<template>
    <div>
        hello!{{name}}
        <list :datas="datas"></list>
        <a v-link="{path: '/tab'}">tab页面22e</a>
        <p class="hello">dsf ewaff ddsf <span>i am a span element</span><b>efwefw</b></p>
        <div class="test">dfl;aeofw</div>
    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        data () {
            return {
                name: 'zh',
                datas: [{
                    name: 'dsfewa',
                    id: 1,
                }, {
                    name: '二嘎而过',
                    id: 2,
                }, {
                    name: 'gtrsht',
                    id: 3,
                }]
            }
        },
        components: {
            
        },
        ready() {

        },
        methods: {

        }
    }
</script>

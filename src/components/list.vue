<template>
    <div>
        <ul>
            <li v-for="item in datas" v-link="{name: 'detail', params: {id: item.id}}">{{item.name}}</li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data () {
            return {

            }
        },
        props: {
            datas: {
                default () {
                    return []
                },
                type: Array
            }
        },
        methods: {

        } 
    }
</script>

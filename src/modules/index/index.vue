<template>
    <div>
        hello!{{name}}
        <list :datas="datas"></list>
        <a v-link="{path: '/tab', exact: true, activeClass: 'active'}">tab页面22e</a>
        <p class="hello">dsf ewaff ddsf <span>i am a span element</span><b>efwefw</b></p>
        <div class="test">dfl;aeofw</div>
        <validator name="form">
            <form novalidate>
                <p>姓名：<input name="name" type="text" v-validate:name="{required: {rule:true, message: '请输入姓名啊'}}"></p>
                <p>电话：<input name="tel" type="text" v-validate:tel="{tel: {rule: true, message: '格式不正确啊'}}"></p>
                <p>电话2：<input name="tel" type="text" v-validate:tele="['tel2']"></p>
                <p><input type="button" value="提交保存" @click="saveForm()"></p>
            </form>
        </validator>
        <div v-if="box_1"  transition="expand">aaaa</div>
        <div v-if="box_2" class="animated" transition="bounce">dsfwefferfaweedf</div>
        <div v-if="box_3" class="animated" transition="fat">fat</div>
        <div v-if="box_4" class="animated" :transition="transitionName">bounce1225</div>
        <button @click="change()">点击随机隐藏和显示</button> 
        <ul>
            <li v-for="item in datas" v-link="{name: 'detail', params: {id:item.id}}">{{item.name}}</li>
        </ul>
        <div @click="router.go('detail', params: {id: 1})">测试route.go</div>
        <div @click="getRes()">getRes</div>
    </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import api from '../../config/api'
import rest from '../../config/rest'
import {toast, helper} from '../../config/helper'

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
                }],
                box_1: true,
                box_2: true,
                box_3: true,
                box_4: true,
                transitionName: 'fat'
            }
        },
        components: {
            
        },
        created() {
            Vue.transition('bounce', {
                type: 'animation',
                enterClass: 'bounceInLeft',
                leaveClass: 'bounceOutRight'
            });
        },
        ready() {
            Vue.transition('expand', {
                beforeEnter: function(el) {
                    el.textContent = 'beforeEnter';
                },
                enter: function(el) {
                    el.textContent = 'enter';
                },
                afterEnter: function(el) {
                    el.textContent = 'afterEnter';
                },
                enterCancelled: function(el) {

                },

                beforeLeave: function(el) {
                    el.textContent = 'beforeLeave';
                },
                leave: function(el) {
                    el.textContent = 'leave';
                },
                afterLeave: function(el) {
                    el.textContent = 'afterLeave';
                },
                leaveCancelled: function(el) {

                }
            });
            
        },
        methods: {
            saveForm() {
                console.log(this.$form.invalid);
                if (this.$form.invalid) {
                  console.log(this.$form.errors[0].message)
                  return;
                }
            },
            change() {
                for (var i = 1; i < 5; i++) { 
                    this['box_' + i] = Math.random() > 0.5 ? true : false; 
                } 
            },
            getRes() {
                console.log('测试helper的isNull函数：' + helper.isNull(null));
                console.log(helper.isNull(NaN));
                rest.get(api.index, {'a':'b'}).done(function(res) {
                    console.log('测试rest中的请求函数：' + res);
                });
            }
        }
    }
</script>

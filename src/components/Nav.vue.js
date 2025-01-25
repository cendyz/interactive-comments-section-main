"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var sun_svg_1 = require("@/images/sun.svg");
var moon_svg_1 = require("@/images/moon.svg");
var props = defineProps({
    isChange: Boolean,
});
var currentTheme = (0, vue_1.ref)(localStorage.getItem('theme') || 'light');
var emit = defineEmits(['changeTheme', 'changeIsActive']);
var toggleTheme = function () {
    if (currentTheme.value === 'light') {
        currentTheme.value = 'dark';
        emit('changeTheme', currentTheme);
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        emit('changeIsActive', true);
    }
    else {
        currentTheme.value = 'light';
        emit('changeTheme', currentTheme);
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-theme', 'light');
        emit('changeIsActive', false);
    }
    localStorage.setItem('theme', currentTheme.value);
}; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)(__assign({ class: ("p-[1em] flex justify-center") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: (__VLS_ctx.toggleTheme) }, { class: (([
            'py-[.3em] px-[.4em] w-[4.5em] bg-gray-500 border-[2px] rounded-[2em] border-moderate-blue dark:border-white transition-colors',
            { 'bg-gray-500 border-gray-200': props.isChange },
            { 'bg-yellow-400 border-gray-600': !props.isChange },
        ])) }), { role: ("switch"), type: ("button") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign(__assign({ src: ((props.isChange ? __VLS_ctx.moonIcon : __VLS_ctx.sunIcon)), alt: ((props.isChange ? 'moon icon' : 'sun icon')) }, { class: ("block w-[1.7em] transition-transform") }), { style: (({
            transform: props.isChange
                ? 'translateX(3%)'
                : 'translateX(105%)',
        })) }));
    ['p-[1em]', 'flex', 'justify-center', 'py-[.3em]', 'px-[.4em]', 'w-[4.5em]', 'bg-gray-500', 'border-[2px]', 'rounded-[2em]', 'border-moderate-blue', 'dark:border-white', 'transition-colors', 'bg-gray-500', 'border-gray-200', 'bg-yellow-400', 'border-gray-600', 'block', 'w-[1.7em]', 'transition-transform',];
    var __VLS_slots;
    var $slots;
    var __VLS_inheritedAttrs;
    var $attrs;
    var __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            sunIcon: sun_svg_1.default,
            moonIcon: moon_svg_1.default,
            toggleTheme: toggleTheme,
        };
    },
    emits: {},
    props: {
        isChange: Boolean,
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
    emits: {},
    props: {
        isChange: Boolean,
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */

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
var image_juliusomo_webp_1 = require("@/images/avatars/image-juliusomo.webp");
var nanoid_1 = require("nanoid");
var updatedText = (0, vue_1.ref)('');
var errorBorder = (0, vue_1.ref)(false);
var props = defineProps({
    commentsData: Object
});
var addComment = function () {
    if (updatedText.value !== '') {
        props.commentsData.data.comments.push({
            id: (0, nanoid_1.nanoid)(),
            content: updatedText.value,
            createdAt: 'Now',
            score: 0,
            user: {
                image: {
                    webp: image_juliusomo_webp_1.default,
                },
                username: 'juliusomo',
            },
            replies: [],
        });
        errorBorder.value = false;
        updatedText.value = '';
    }
    else {
        errorBorder.value = true;
    }
}; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("p-8 pr-9 rounded-2xl bg-white dark:bg-whiteDARK text-2xl flex items-start gap-x-2") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.avatar)), alt: ("profile picture") }, { class: ("block w-14") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)(__assign({ value: ((__VLS_ctx.updatedText)) }, { class: (([
            'w-full p-6 mb-3 bg-white text-dark-blue dark:text-darkBlueDARK dark:bg-whiteDARK order-dark-blue dark:border-darkBlueDARK border rounded-xl max-h-[9rem] min-h=[9rem] focus:border-1',
            { 'border-soft-red dark:border-softRedDARK': __VLS_ctx.errorBorder },
            {
                'border-moderate-blue dark:border-moderateBlueDARK': __VLS_ctx.updatedText.length > 0,
            },
        ])) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: (__VLS_ctx.addComment) }, { type: ("button") }), { class: ("py-4 px-8 text-white dark:text-whiteDARK bg-moderate-blue dark:bg-moderateBlueDARK uppercase rounded-2xl") }));
    ['p-8', 'pr-9', 'rounded-2xl', 'bg-white', 'dark:bg-whiteDARK', 'text-2xl', 'flex', 'items-start', 'gap-x-2', 'block', 'w-14', 'w-full', 'p-6', 'mb-3', 'bg-white', 'text-dark-blue', 'dark:text-darkBlueDARK', 'dark:bg-whiteDARK', 'order-dark-blue', 'dark:border-darkBlueDARK', 'border', 'rounded-xl', 'max-h-[9rem]', 'min-h=[9rem]', 'focus:border-1', 'border-soft-red', 'dark:border-softRedDARK', 'border-moderate-blue', 'dark:border-moderateBlueDARK', 'py-4', 'px-8', 'text-white', 'dark:text-whiteDARK', 'bg-moderate-blue', 'dark:bg-moderateBlueDARK', 'uppercase', 'rounded-2xl',];
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
            avatar: image_juliusomo_webp_1.default,
            updatedText: updatedText,
            errorBorder: errorBorder,
            addComment: addComment,
        };
    },
    props: {
        commentsData: Object
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
    props: {
        commentsData: Object
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */

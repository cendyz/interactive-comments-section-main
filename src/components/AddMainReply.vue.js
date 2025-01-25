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
var props = defineProps({
    mainCommentIndex: Number,
    replyIndex: Number,
    data: Object,
    mainCommentValue: Object,
    errorBorder: Boolean,
    replyToMain: Function,
});
var textareaContent = (0, vue_1.ref)('');
var emit = defineEmits(['shareAreaContent']);
var handleReply = function (index) {
    emit('shareAreaContent', textareaContent.value);
    props.replyToMain(index);
    textareaContent.value = '';
}; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-start gap-x-4 mt-4 p-8 bg-white dark:bg-whiteDARK rounded-xl ") }, { key: ((props.mainCommentValue.id)) }));
    __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (props.mainCommentIndex === props.replyIndex) }), null, null);
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((props.data.data.currentUser.image.webp)), alt: ("own profile picture") }, { class: ("w-14") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)(__assign(__assign({ id: ("reply-comment") }, { class: (([
            'p-5 w-full rounded-lg bg-white dark:bg-whiteDARK text-dark-blue dark:text-darkBlueDARK border border-dark-blue dark:border-darkBlueDARK min-h-20 max-h-32 overflow-y-scroll outline-none focus:border-moderate-blue dark:focus:border-moderateBlueDARK',
            { 'error-border': props.errorBorder },
            { 'no-error-border': __VLS_ctx.textareaContent.length > 0 },
        ])) }), { value: ((__VLS_ctx.textareaContent)), modelModifiers: { trim: true, } }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.handleReply(props.mainCommentIndex);
        } }, { type: ("button") }), { class: ("py-4 px-8 text-white dark:text-whiteDARK bg-moderate-blue dark:bg-moderateBlueDARK uppercase rounded-2xl") }));
    ['flex', 'items-start', 'gap-x-4', 'mt-4', 'p-8', 'bg-white', 'dark:bg-whiteDARK', 'rounded-xl', 'w-14', 'p-5', 'w-full', 'rounded-lg', 'bg-white', 'dark:bg-whiteDARK', 'text-dark-blue', 'dark:text-darkBlueDARK', 'border', 'border-dark-blue', 'dark:border-darkBlueDARK', 'min-h-20', 'max-h-32', 'overflow-y-scroll', 'outline-none', 'focus:border-moderate-blue', 'dark:focus:border-moderateBlueDARK', 'error-border', 'no-error-border', 'py-4', 'px-8', 'text-white', 'dark:text-whiteDARK', 'bg-moderate-blue', 'dark:bg-moderateBlueDARK', 'uppercase', 'rounded-2xl',];
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
            textareaContent: textareaContent,
            handleReply: handleReply,
        };
    },
    emits: {},
    props: {
        mainCommentIndex: Number,
        replyIndex: Number,
        data: Object,
        mainCommentValue: Object,
        errorBorder: Boolean,
        replyToMain: Function,
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
    emits: {},
    props: {
        mainCommentIndex: Number,
        replyIndex: Number,
        data: Object,
        mainCommentValue: Object,
        errorBorder: Boolean,
        replyToMain: Function,
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */

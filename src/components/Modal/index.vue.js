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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("@/data");
var vue_1 = require("vue");
var newData = (0, vue_1.reactive)({ data: data_1.data });
var props = defineProps({
    isOpen: Boolean,
    mainIndex: Number,
    secondIndex: Number,
});
var emit = defineEmits([
    'closeModal',
    'resetMainIndex',
    'resetSecondIndex',
]);
var closeModal = function () {
    emit('closeModal', false);
};
var deleteComment = function () {
    if (props.secondIndex === null) {
        newData.data.comments.splice(props.mainIndex, 1);
    }
    else {
        newData.data.comments[props.mainIndex].replies.splice(props.secondIndex, 1);
    }
    emit('closeModal', false);
    emit('resetMainIndex', null);
    emit('resetSecondIndex', null);
}; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    var __VLS_0 = {}.transition;
    /** @type { [typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ] } */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        name: ("fade"),
    }));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
            name: ("fade"),
        }], __VLS_functionalComponentArgsRest(__VLS_1), false));
    var __VLS_6 = {};
    if (props.isOpen) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.dialog, __VLS_intrinsicElements.dialog)(__assign({ open: ((props.isOpen)) }, { class: ("fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] border-0 p-7 rounded-2xl bg-white z-20 md:w-[350px]") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: ("mb-5 text-dark-blue first-letter:capitalize font-bolder text-3xl") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-grayish-blue") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("mt-7 flex justify-between") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: (__VLS_ctx.closeModal) }, { class: ("py-3 px-5 mb-2 text-2xl bg-grayish-blue text-white uppercase rounded-xl font-bold w-56") }), { type: ("button") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: (__VLS_ctx.deleteComment) }, { class: ("y-3 px-5 mb-1 text-2xl bg-soft-red text-white uppercase rounded-xl font-bold w-56") }), { type: ("button") }));
    }
    __VLS_5.slots.default;
    var __VLS_5;
    ['fixed', 'left-1/2', 'top-1/2', '-translate-x-1/2', '-translate-y-1/2', 'w-[92%]', 'border-0', 'p-7', 'rounded-2xl', 'bg-white', 'z-20', 'md:w-[350px]', 'mb-5', 'text-dark-blue', 'first-letter:capitalize', 'font-bolder', 'text-3xl', 'text-grayish-blue', 'mt-7', 'flex', 'justify-between', 'py-3', 'px-5', 'mb-2', 'text-2xl', 'bg-grayish-blue', 'text-white', 'uppercase', 'rounded-xl', 'font-bold', 'w-56', 'y-3', 'px-5', 'mb-1', 'text-2xl', 'bg-soft-red', 'text-white', 'uppercase', 'rounded-xl', 'font-bold', 'w-56',];
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
            closeModal: closeModal,
            deleteComment: deleteComment,
        };
    },
    emits: {},
    props: {
        isOpen: Boolean,
        mainIndex: Number,
        secondIndex: Number,
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
    emits: {},
    props: {
        isOpen: Boolean,
        mainIndex: Number,
        secondIndex: Number,
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */

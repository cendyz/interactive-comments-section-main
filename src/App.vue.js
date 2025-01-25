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
var vue_1 = require("vue");
var index_vue_1 = require("./components/CommentBox/index.vue");
var index_vue_2 = require("@/components/Modal/index.vue");
var isOpen = (0, vue_1.ref)(false);
var isChange = (0, vue_1.ref)(false);
var mainIndex = (0, vue_1.ref)(null);
var secondIndex = (0, vue_1.ref)(null);
var currentTheme = (0, vue_1.ref)(localStorage.getItem('theme') || 'light');
var Nav_vue_1 = require("./components/Nav.vue");
if (currentTheme.value === 'dark') {
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    isChange.value = true;
}
else {
    document.documentElement.classList.remove('dark');
    document.documentElement.setAttribute('data-theme', 'light');
    isChange.value = false;
}
(0, vue_1.watchEffect)(function () {
    if (isOpen.value) {
        document.body.style.overflow = 'hidden';
    }
    else {
        document.body.style.overflow = 'visible';
    }
}); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    // @ts-ignore
    /** @type { [typeof Nav, ] } */ ;
    // @ts-ignore
    var __VLS_0 = __VLS_asFunctionalComponent(Nav_vue_1.default, new Nav_vue_1.default(__assign(__assign({ 'onChangeTheme': {} }, { 'onChangeIsActive': {} }), { isChange: ((__VLS_ctx.isChange)) })));
    var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([__assign(__assign({ 'onChangeTheme': {} }, { 'onChangeIsActive': {} }), { isChange: ((__VLS_ctx.isChange)) })], __VLS_functionalComponentArgsRest(__VLS_0), false));
    var __VLS_5;
    var __VLS_6 = {
        onChangeTheme: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.currentTheme = $event;
        }
    };
    var __VLS_7 = {
        onChangeIsActive: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.isChange = $event;
        }
    };
    var __VLS_2;
    var __VLS_3;
    var __VLS_4;
    var __VLS_8 = {}.transition;
    /** @type { [typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ] } */ ;
    // @ts-ignore
    var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
        name: ("shadow"),
    }));
    var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([{
            name: ("shadow"),
        }], __VLS_functionalComponentArgsRest(__VLS_9), false));
    if (__VLS_ctx.isOpen) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("SHADOW absolute top-0 left-0 w-full h-full bg-black/30 z-10 dark:bg-white/30") }));
    }
    __VLS_13.slots.default;
    var __VLS_13;
    // @ts-ignore
    /** @type { [typeof CommentBox, ] } */ ;
    // @ts-ignore
    var __VLS_14 = __VLS_asFunctionalComponent(index_vue_1.default, new index_vue_1.default(__assign(__assign(__assign({ 'onChangeIsOpen': {} }, { 'onPassMainIndex': {} }), { 'onPassSecondIndex': {} }), { isOpen: ((__VLS_ctx.isOpen)) })));
    var __VLS_15 = __VLS_14.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onChangeIsOpen': {} }, { 'onPassMainIndex': {} }), { 'onPassSecondIndex': {} }), { isOpen: ((__VLS_ctx.isOpen)) })], __VLS_functionalComponentArgsRest(__VLS_14), false));
    var __VLS_19;
    var __VLS_20 = {
        onChangeIsOpen: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.isOpen = $event;
        }
    };
    var __VLS_21 = {
        onPassMainIndex: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.mainIndex = $event;
        }
    };
    var __VLS_22 = {
        onPassSecondIndex: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.secondIndex = $event;
        }
    };
    var __VLS_16;
    var __VLS_17;
    var __VLS_18;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("shadow") }));
    __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.isOpen === true) }), null, null);
    var __VLS_23 = {}.Teleport;
    /** @type { [typeof __VLS_components.Teleport, typeof __VLS_components.Teleport, ] } */ ;
    // @ts-ignore
    var __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({
        to: ("body"),
    }));
    var __VLS_25 = __VLS_24.apply(void 0, __spreadArray([{
            to: ("body"),
        }], __VLS_functionalComponentArgsRest(__VLS_24), false));
    // @ts-ignore
    /** @type { [typeof Modal, ] } */ ;
    // @ts-ignore
    var __VLS_29 = __VLS_asFunctionalComponent(index_vue_2.default, new index_vue_2.default(__assign(__assign(__assign({ 'onCloseModal': {} }, { 'onResetSecondIndex': {} }), { 'onResetMainIndex': {} }), { isOpen: ((__VLS_ctx.isOpen)), mainIndex: ((__VLS_ctx.mainIndex)), secondIndex: ((__VLS_ctx.secondIndex)) })));
    var __VLS_30 = __VLS_29.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onCloseModal': {} }, { 'onResetSecondIndex': {} }), { 'onResetMainIndex': {} }), { isOpen: ((__VLS_ctx.isOpen)), mainIndex: ((__VLS_ctx.mainIndex)), secondIndex: ((__VLS_ctx.secondIndex)) })], __VLS_functionalComponentArgsRest(__VLS_29), false));
    var __VLS_34;
    var __VLS_35 = {
        onCloseModal: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.isOpen = $event;
        }
    };
    var __VLS_36 = {
        onResetSecondIndex: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.secondIndex = $event;
        }
    };
    var __VLS_37 = {
        onResetMainIndex: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.mainIndex = $event;
        }
    };
    var __VLS_31;
    var __VLS_32;
    var __VLS_33;
    __VLS_28.slots.default;
    var __VLS_28;
    ['SHADOW', 'absolute', 'top-0', 'left-0', 'w-full', 'h-full', 'bg-black/30', 'z-10', 'dark:bg-white/30', 'shadow',];
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
            CommentBox: index_vue_1.default,
            Modal: index_vue_2.default,
            isOpen: isOpen,
            isChange: isChange,
            mainIndex: mainIndex,
            secondIndex: secondIndex,
            currentTheme: currentTheme,
            Nav: Nav_vue_1.default,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */

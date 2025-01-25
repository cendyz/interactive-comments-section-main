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
var icon_reply_svg_1 = require("@/images/icon-reply.svg");
var icon_delete_svg_1 = require("@/images/icon-delete.svg");
var icon_edit_svg_1 = require("@/images/icon-edit.svg");
var isEdit = (0, vue_1.ref)(false);
var textAreaText = (0, vue_1.ref)('');
var errorBorder = (0, vue_1.ref)(false);
var props = defineProps({
    secondValue: Object,
    secondIndex: Number,
    mainIndex: Number,
    handleReplyVote: Function,
    handleCommentReply: Function,
    openModal: Function,
    updatedText: String,
    commentsData: Object,
});
var emit = defineEmits([
    'letsUpdateText',
    'updateCommentText',
    'cleanUpdatedText',
]);
var handleReplyVote = function (secIndex, firstIndex, type) {
    props.handleReplyVote(secIndex, firstIndex, type);
};
var handleCommentReply = function (index) {
    emit('cleanUpdatedText', '');
    props.handleCommentReply(props.secondIndex, props.mainIndex, index);
};
var openModal = function (mainIndex, secondIndex) {
    props.openModal(mainIndex, secondIndex);
};
var handleEdit = function () {
    textAreaText.value =
        props.commentsData.data.comments[props.mainIndex].replies[props.secondIndex].content;
    emit('letsUpdateText', textAreaText.value);
    isEdit.value = true;
};
var updateComment = function (mainIndex, secondIndex) {
    if (props.updatedText !== '') {
        emit('updateCommentText', props.commentsData.data.comments[mainIndex].replies[secondIndex].content);
        emit('cleanUpdatedText', '');
        isEdit.value = false;
        errorBorder.value = false;
    }
    else {
        errorBorder.value = true;
    }
}; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("p-8 pr-9 rounded-2xl bg-white dark:bg-whiteDARK text-2xl md:flex md:items-start") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("md:flex md:flex-col md:order-2 md:w-full") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center mb-7 gap-x-5") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((props.secondValue.user.image.webp)), alt: ("profile picture") }, { class: ("block w-14") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-dark-blue dark:text-darkBlueDARK font-bold") }));
    (props.secondValue.user.username);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("px-3 pt-1 pb-[5px] bg-moderate-blue dark:text-whiteDARK text-white dark:bg-moderateBlueDARK text-2xl rounded-lg") }));
    __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (props.secondValue.user.username === 'juliusomo') }), null, null);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-grayish-blue") }));
    (props.secondValue.createdAt);
    if (props.secondValue.user.username !== 'juliusomo') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!((props.secondValue.user.username !== 'juliusomo')))
                    return;
                __VLS_ctx.handleCommentReply(props.secondIndex);
            } }, { class: ("items-center gap-x-3 hidden md:flex md:ml-auto") }), { type: ("button") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ((__VLS_ctx.replyIcon)),
            alt: ("reply icon"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("text-2xl text-moderate-blue dark:text-moderateBlueDARK font-bold") }));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("gap-x-8 hidden md:inline-flex md:ml-auto") }));
    __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (props.secondValue.user.username === 'juliusomo') }), null, null);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.openModal(props.mainIndex, props.secondIndex);
        } }, { class: ("flex items-center") }), { type: ("button") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
        src: ((__VLS_ctx.deleteIcon)),
        alt: ("trash icon"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("ml-2 font-bold text-soft-red dark:text-softRedDARK") }));
    if (!__VLS_ctx.isEdit) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ class: ("flex items-center") }, { type: ("button") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ((__VLS_ctx.editIcon)),
            alt: ("arrow icon"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ onClick: (__VLS_ctx.handleEdit) }, { class: ("ml-2 font-bold text-moderate-blue dark:text-moderateBlueDARK") }));
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!(!((!__VLS_ctx.isEdit))))
                    return;
                __VLS_ctx.updateComment(props.mainIndex, props.secondIndex);
            } }, { class: ("flex items-center gap-x-3") }), { type: ("button") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ((__VLS_ctx.replyIcon)),
            alt: ("reply icon"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("text-2xl text-moderate-blue dark:text-moderateBlueDARK font-bold") }));
    }
    if (__VLS_ctx.isEdit) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)(__assign({ value: ((props.updatedText)), id: ("updateReply") }, { class: (([
                'w-full p-6 mb-3 bg-white text-dark-blue dark:text-darkBlueDARK dark:bg-whiteDARK border-b-light-grayish-blue dark:border-b-lightGrayishBlueDARK border rounded-xl h-[9rem] max-h-[25rem] min-h=[9rem] outline-none focus:border-dark-blue dark:focus:border-darkBlueDARK focus:border-2',
                { 'bg-soft-red dark:bg-softRedDARK': __VLS_ctx.errorBorder },
                {
                    'border-moderate-blue dark:border-moderateBlueDARK': props.updatedText.length > 0,
                },
            ])) }));
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-grayish-blue mb-8 dark:text-grayishBlueDARK") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("font-bold text-moderate-blue dark:text-moderateBlueDARK") }));
        (props.secondValue.replyingTo);
        (props.secondValue.content);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center justify-between") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center bg-light-gray dark:bg-lightGrayDARK rounded-2xl min-w-32 justify-center md:flex-col md:min-w-[2.5em] mr-[1.5em]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.handleReplyVote(props.secondIndex, props.mainIndex, 'up');
        } }, { class: ("font-bold text-2xl text-dark-blue dark:text-darkBlueDARK py-3 px-5") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("font-bold text-2xl text-moderate-blue dark:text-moderateBlueDARK") }));
    (props.secondValue.score);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.handleReplyVote(props.secondIndex, props.mainIndex, 'down');
        } }, { class: ("font-bold text-2xl text-dark-blue dark:text-darkBlueDARK py-3 px-5") }));
    if (props.secondValue.user.username !== 'juliusomo') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!((props.secondValue.user.username !== 'juliusomo')))
                    return;
                __VLS_ctx.handleCommentReply(props.secondIndex);
            } }, { class: ("flex items-center gap-x-3 md:hidden") }), { type: ("button") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ((__VLS_ctx.replyIcon)),
            alt: ("reply icon"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("text-2xl text-moderate-blue dark:text-moderateBlueDARK font-bold") }));
    }
    if (props.secondValue.user.username === 'juliusomo') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex gap-x-8 md:hidden") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!((props.secondValue.user.username === 'juliusomo')))
                    return;
                __VLS_ctx.openModal(props.mainIndex, props.secondIndex);
            } }, { class: ("flex items-center") }), { type: ("button") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ((__VLS_ctx.deleteIcon)),
            alt: ("trash icon"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("ml-2 font-bold text-soft-red dark:text-softRedDARK") }));
        if (!__VLS_ctx.isEdit) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ class: ("flex items-center") }, { type: ("button") }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
                src: ((__VLS_ctx.editIcon)),
                alt: ("arrow icon"),
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ onClick: (__VLS_ctx.handleEdit) }, { class: ("ml-2 font-bold text-moderate-blue dark:text-moderateBlueDARK") }));
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: function () {
                    var _a = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _a[_i] = arguments[_i];
                    }
                    var $event = _a[0];
                    if (!((props.secondValue.user.username === 'juliusomo')))
                        return;
                    if (!(!((!__VLS_ctx.isEdit))))
                        return;
                    __VLS_ctx.updateComment(props.mainIndex, props.secondIndex);
                } }, { class: ("flex items-center gap-x-3") }), { type: ("button") }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
                src: ((__VLS_ctx.replyIcon)),
                alt: ("reply icon"),
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("text-2xl text-moderate-blue dark:text-moderateBlueDARK font-bold") }));
        }
    }
    ['p-8', 'pr-9', 'rounded-2xl', 'bg-white', 'dark:bg-whiteDARK', 'text-2xl', 'md:flex', 'md:items-start', 'md:flex', 'md:flex-col', 'md:order-2', 'md:w-full', 'flex', 'items-center', 'mb-7', 'gap-x-5', 'block', 'w-14', 'text-dark-blue', 'dark:text-darkBlueDARK', 'font-bold', 'px-3', 'pt-1', 'pb-[5px]', 'bg-moderate-blue', 'dark:text-whiteDARK', 'text-white', 'dark:bg-moderateBlueDARK', 'text-2xl', 'rounded-lg', 'text-grayish-blue', 'items-center', 'gap-x-3', 'hidden', 'md:flex', 'md:ml-auto', 'text-2xl', 'text-moderate-blue', 'dark:text-moderateBlueDARK', 'font-bold', 'gap-x-8', 'hidden', 'md:inline-flex', 'md:ml-auto', 'flex', 'items-center', 'ml-2', 'font-bold', 'text-soft-red', 'dark:text-softRedDARK', 'flex', 'items-center', 'ml-2', 'font-bold', 'text-moderate-blue', 'dark:text-moderateBlueDARK', 'flex', 'items-center', 'gap-x-3', 'text-2xl', 'text-moderate-blue', 'dark:text-moderateBlueDARK', 'font-bold', 'w-full', 'p-6', 'mb-3', 'bg-white', 'text-dark-blue', 'dark:text-darkBlueDARK', 'dark:bg-whiteDARK', 'border-b-light-grayish-blue', 'dark:border-b-lightGrayishBlueDARK', 'border', 'rounded-xl', 'h-[9rem]', 'max-h-[25rem]', 'min-h=[9rem]', 'outline-none', 'focus:border-dark-blue', 'dark:focus:border-darkBlueDARK', 'focus:border-2', 'bg-soft-red', 'dark:bg-softRedDARK', 'border-moderate-blue', 'dark:border-moderateBlueDARK', 'text-grayish-blue', 'mb-8', 'dark:text-grayishBlueDARK', 'font-bold', 'text-moderate-blue', 'dark:text-moderateBlueDARK', 'flex', 'items-center', 'justify-between', 'flex', 'items-center', 'bg-light-gray', 'dark:bg-lightGrayDARK', 'rounded-2xl', 'min-w-32', 'justify-center', 'md:flex-col', 'md:min-w-[2.5em]', 'mr-[1.5em]', 'font-bold', 'text-2xl', 'text-dark-blue', 'dark:text-darkBlueDARK', 'py-3', 'px-5', 'font-bold', 'text-2xl', 'text-moderate-blue', 'dark:text-moderateBlueDARK', 'font-bold', 'text-2xl', 'text-dark-blue', 'dark:text-darkBlueDARK', 'py-3', 'px-5', 'flex', 'items-center', 'gap-x-3', 'md:hidden', 'text-2xl', 'text-moderate-blue', 'dark:text-moderateBlueDARK', 'font-bold', 'flex', 'gap-x-8', 'md:hidden', 'flex', 'items-center', 'ml-2', 'font-bold', 'text-soft-red', 'dark:text-softRedDARK', 'flex', 'items-center', 'ml-2', 'font-bold', 'text-moderate-blue', 'dark:text-moderateBlueDARK', 'flex', 'items-center', 'gap-x-3', 'text-2xl', 'text-moderate-blue', 'dark:text-moderateBlueDARK', 'font-bold',];
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
            replyIcon: icon_reply_svg_1.default,
            deleteIcon: icon_delete_svg_1.default,
            editIcon: icon_edit_svg_1.default,
            isEdit: isEdit,
            errorBorder: errorBorder,
            handleReplyVote: handleReplyVote,
            handleCommentReply: handleCommentReply,
            openModal: openModal,
            handleEdit: handleEdit,
            updateComment: updateComment,
        };
    },
    emits: {},
    props: {
        secondValue: Object,
        secondIndex: Number,
        mainIndex: Number,
        handleReplyVote: Function,
        handleCommentReply: Function,
        openModal: Function,
        updatedText: String,
        commentsData: Object,
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
    emits: {},
    props: {
        secondValue: Object,
        secondIndex: Number,
        mainIndex: Number,
        handleReplyVote: Function,
        handleCommentReply: Function,
        openModal: Function,
        updatedText: String,
        commentsData: Object,
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */

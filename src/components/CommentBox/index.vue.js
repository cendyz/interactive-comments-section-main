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
var data_1 = require("@/data");
var nanoid_1 = require("nanoid");
var AddMainReply_vue_1 = require("../AddMainReply.vue");
var MainReply_vue_1 = require("../MainReply.vue");
var ReplyReply_vue_1 = require("../ReplyReply.vue");
var icon_reply_svg_1 = require("@/images/icon-reply.svg");
var image_juliusomo_webp_1 = require("@/images/avatars/image-juliusomo.webp");
var AddComment_vue_1 = require("../AddComment.vue");
var icon_delete_svg_1 = require("@/images/icon-delete.svg");
var icon_edit_svg_1 = require("@/images/icon-edit.svg");
var commentsData = (0, vue_1.reactive)({ data: data_1.data });
var replyIndex = (0, vue_1.ref)(null);
var replyCommentIndex = (0, vue_1.ref)(null);
var textareaContent = (0, vue_1.ref)('');
var activeEditindex = (0, vue_1.ref)(null);
var updatedText = (0, vue_1.ref)('');
var errorBorder = (0, vue_1.ref)(false);
var passedMainIndex = (0, vue_1.ref)(null);
var passedSecondIndex = (0, vue_1.ref)(null);
var isEdit = (0, vue_1.ref)(false);
var emit = defineEmits([
    'changeIsOpen',
    'closeModal',
    'passMainIndex',
    'passSecondIndex',
    'cleanUpdateText',
]);
var handleToggle = function (actualRef, otherRef, index) {
    errorBorder.value = false;
    otherRef.value = null;
    actualRef.value = actualRef.value === index ? null : index;
};
var handleReply = function (index) {
    textareaContent.value = '';
    emit('cleanUpdateText', '');
    handleToggle(replyIndex, replyCommentIndex, index);
};
var handleCommentReply = function (index) {
    textareaContent.value = '';
    handleToggle(replyCommentIndex, replyIndex, index);
};
var handleEdit = function (mainIndex) {
    textareaContent.value = commentsData.data.comments[mainIndex].content;
    updatedText.value = textareaContent.value;
    activeEditindex.value = mainIndex;
    isEdit.value = true;
};
var addReply = function (index, reply) {
    if (textareaContent.value !== '') {
        data_1.data.comments[index].replies.push({
            id: (0, nanoid_1.nanoid)(),
            content: textareaContent.value,
            createdAt: 'Now',
            score: 0,
            replyingTo: reply,
            user: {
                image: {
                    webp: image_juliusomo_webp_1.default,
                },
                username: data_1.data.currentUser.username,
            },
            activePlus: false,
            activeMinus: false,
        });
        replyIndex.value = null;
        replyCommentIndex.value = null;
        textareaContent.value = '';
        errorBorder.value = false;
    }
    else {
        errorBorder.value = true;
    }
};
var updateComment = function (mainIndex) {
    if (updatedText.value !== '') {
        commentsData.data.comments[mainIndex].content = updatedText.value;
        updatedText.value = '';
        isEdit.value = false;
        errorBorder.value = false;
        activeEditindex.value = null;
    }
    else {
        errorBorder.value = true;
    }
};
// const formatTimeAgo = (timestamp: number) => {
// 	const seconds = Math.floor((Date.now() - timestamp) / 1000)
// 	if (seconds < 60) {
// 		return `${seconds} seconds ago`
// 	} else if (seconds < 3600) {
// 		const minutes = Math.floor(seconds / 60)
// 		return `${minutes} minutes ago`
// 	} else if (seconds < 86400) {
// 		const hours = Math.floor(seconds / 3600)
// 		return `${hours} hours ago`
// 	} else {
// 		const days = Math.floor(seconds / 86400)
// 		return `${days} days ago`
// 	}
// }
var replyToMain = function (mainIndex) {
    var reply = data_1.data.comments[mainIndex].user.username;
    addReply(mainIndex, reply);
};
var replyToReply = function (mainIndex, replyIndex) {
    var newReply = data_1.data.comments[mainIndex].replies[replyIndex].user.username;
    addReply(mainIndex, newReply);
};
var handleVote = function (item, type) {
    if (type === 'up') {
        if (!item.plusActive && !item.minusActive) {
            item.score++;
            item.plusActive = true;
        }
        else if (item.minusActive) {
            item.score++;
            item.minusActive = false;
        }
    }
    else if (type === 'down') {
        if (!item.plusActive && !item.minusActive) {
            item.score--;
            item.minusActive = true;
        }
        else if (item.plusActive) {
            item.score--;
            item.plusActive = false;
        }
    }
};
var handleMainCommentVote = function (index, type) {
    var comment = commentsData.data.comments[index];
    handleVote(comment, type);
};
var handleReplyVote = function (index, mainIndex, type) {
    var comment = commentsData.data.comments[mainIndex].replies[index];
    handleVote(comment, type);
};
var openModal = function (mainIndex, secondIndex) {
    emit('changeIsOpen', true);
    passedMainIndex.value = mainIndex;
    passedSecondIndex.value = secondIndex || null;
    emit('passMainIndex', passedMainIndex.value);
    emit('passSecondIndex', passedSecondIndex.value);
}; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ class: ("grid gap-y-4 p-6 md:w-[680px] md:mx-auto") }));
    var _loop_1 = function (cbValue, cbIndex) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((cbValue.id)),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("p-8 pr-9 rounded-2xl bg-white dark:bg-whiteDARK text-2xl md:flex md:items-start md:gap-x-[1.5em]") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("md:flex md:flex-col md:order-2 md:w-full") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center mb-7 gap-x-7") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((cbValue.user.image.webp)), alt: ("profile picture") }, { class: ("block w-14") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-dark-blue dark:text-darkBlueDARK") }));
        (cbValue.user.username);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("px-3 pt-1 pb-[5px] bg-moderate-blue dark:text-whiteDARK text-white dark:bg-moderateBlueDARK text-2xl rounded-lg") }));
        __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (cbValue.user.username === 'juliusomo') }), null, null);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-grayish-blue dark:text-grayishBlueDARK") }));
        (cbValue.createdAt);
        if (cbValue.user.username !== 'juliusomo') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: function () {
                    var _a = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _a[_i] = arguments[_i];
                    }
                    var $event = _a[0];
                    if (!((cbValue.user.username !== 'juliusomo')))
                        return;
                    __VLS_ctx.handleReply(cbIndex);
                } }, { class: ("hidden md:flex md:ml-auto items-center gap-x-3") }), { type: ("button") }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
                src: ((__VLS_ctx.replyIcon)),
                alt: ("reply icon"),
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("font-bold text-2xl text-moderate-blue dark:text-moderateBlueDARK") }));
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("gap-x-8 hidden md:flex md:ml-auto") }));
        __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (cbValue.user.username === 'juliusomo') }), null, null);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.openModal(cbIndex, null);
            } }, { class: ("flex items-center") }), { type: ("button") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ((__VLS_ctx.deleteIcon)),
            alt: ("trash icon"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("ml-2 font-bold text-soft-red dark:text-softRedDARK") }));
        if (cbIndex !== __VLS_ctx.activeEditindex) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ class: ("flex items-center") }, { type: ("button") }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
                src: ((__VLS_ctx.editIcon)),
                alt: ("arrow icon"),
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ onClick: function () {
                    var _a = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _a[_i] = arguments[_i];
                    }
                    var $event = _a[0];
                    if (!((cbIndex !== __VLS_ctx.activeEditindex)))
                        return;
                    __VLS_ctx.handleEdit(cbIndex);
                } }, { class: ("ml-2 font-bold text-moderate-blue dark:text-moderateBlueDARK") }));
        }
        else if (cbIndex === __VLS_ctx.activeEditindex) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: function () {
                    var _a = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _a[_i] = arguments[_i];
                    }
                    var $event = _a[0];
                    if (!(!((cbIndex !== __VLS_ctx.activeEditindex))))
                        return;
                    if (!((cbIndex === __VLS_ctx.activeEditindex)))
                        return;
                    __VLS_ctx.updateComment(cbIndex);
                } }, { class: ("flex items-center gap-x-3") }), { type: ("button") }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
                src: ((__VLS_ctx.replyIcon)),
                alt: ("reply icon"),
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("text-2xl text-moderate-blue dark:text-moderateBlueDARK font-bold") }));
        }
        if (__VLS_ctx.isEdit && cbIndex === __VLS_ctx.activeEditindex) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)(__assign({ value: ((__VLS_ctx.updatedText)), id: ("mainReply") }, { class: (([
                    'w-full p-6 mb-3 border-b-light-grayish-blue bg-white dark:bg-whiteDARK text-dark-blue dark:text-darkBlueDARK dark:border-b-lightGrayishBlueDARK border rounded-xl max-h-[9rem] min-h=[9rem] outline-none focus:border-dark-blue dark:focus:border-darkBlueDARK focus:border-2',
                    { 'border-soft-red dark:border-softRedDARK': __VLS_ctx.errorBorder },
                    {
                        'border-moderate-blue dark:border-moderateBlueDARK': __VLS_ctx.updatedText.length > 0,
                    },
                ])) }));
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-grayish-blue dark:text-grayishBlueDARK mb-8") }));
            (cbValue.content);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center justify-between") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center bg-light-gray dark:bg-lightGrayDARK rounded-2xl min-w-32 justify-center md:flex-col md:min-w-[2.5em]") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.handleMainCommentVote(cbIndex, 'up');
            } }, { class: (([
                'font-bold text-2xl text-dark-blue dark:text-darkBlueDARK py-3 px-5',
            ])) }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("font-bold text-2xl text-moderate-blue dark:text-moderateBlueDARK") }));
        (cbValue.score);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.handleMainCommentVote(cbIndex, 'down');
            } }, { class: ("font-bold text-2xl text-dark-blue dark:text-darkBlueDARK py-3 px-5") }));
        if (cbValue.user.username !== 'juliusomo') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: function () {
                    var _a = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _a[_i] = arguments[_i];
                    }
                    var $event = _a[0];
                    if (!((cbValue.user.username !== 'juliusomo')))
                        return;
                    __VLS_ctx.handleReply(cbIndex);
                } }, { class: ("flex items-center gap-x-3 md:hidden") }), { type: ("button") }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
                src: ((__VLS_ctx.replyIcon)),
                alt: ("reply icon"),
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("font-bold text-2xl text-moderate-blue dark:text-moderateBlueDARK") }));
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex gap-x-8 md:hidden") }));
        __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (cbValue.user.username === 'juliusomo') }), null, null);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.openModal(cbIndex, null);
            } }, { class: ("flex items-center") }), { type: ("button") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ((__VLS_ctx.deleteIcon)),
            alt: ("trash icon"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("ml-2 font-bold text-soft-red dark:text-softRedDARK") }));
        if (cbIndex !== __VLS_ctx.activeEditindex) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ class: ("flex items-center") }, { type: ("button") }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
                src: ((__VLS_ctx.editIcon)),
                alt: ("arrow icon"),
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ onClick: function () {
                    var _a = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _a[_i] = arguments[_i];
                    }
                    var $event = _a[0];
                    if (!((cbIndex !== __VLS_ctx.activeEditindex)))
                        return;
                    __VLS_ctx.handleEdit(cbIndex);
                } }, { class: ("ml-2 font-bold text-moderate-blue dark:text-moderateBlueDARK") }));
        }
        else if (cbIndex === __VLS_ctx.activeEditindex) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: function () {
                    var _a = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _a[_i] = arguments[_i];
                    }
                    var $event = _a[0];
                    if (!(!((cbIndex !== __VLS_ctx.activeEditindex))))
                        return;
                    if (!((cbIndex === __VLS_ctx.activeEditindex)))
                        return;
                    __VLS_ctx.updateComment(cbIndex);
                } }, { class: ("flex items-center gap-x-3") }), { type: ("button") }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
                src: ((__VLS_ctx.replyIcon)),
                alt: ("reply icon"),
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("text-2xl text-moderate-blue dark:text-moderateBlueDARK font-bold") }));
        }
        // @ts-ignore
        /** @type { [typeof AddMainReply, ] } */ ;
        // @ts-ignore
        var __VLS_0 = __VLS_asFunctionalComponent(AddMainReply_vue_1.default, new AddMainReply_vue_1.default(__assign({ 'onShareAreaContent': {} }, { mainCommentIndex: ((cbIndex)), replyIndex: ((__VLS_ctx.replyIndex)), data: ((__VLS_ctx.commentsData)), mainCommentValue: ((cbValue)), errorBorder: ((__VLS_ctx.errorBorder)), replyToMain: ((__VLS_ctx.replyToMain)) })));
        var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([__assign({ 'onShareAreaContent': {} }, { mainCommentIndex: ((cbIndex)), replyIndex: ((__VLS_ctx.replyIndex)), data: ((__VLS_ctx.commentsData)), mainCommentValue: ((cbValue)), errorBorder: ((__VLS_ctx.errorBorder)), replyToMain: ((__VLS_ctx.replyToMain)) })], __VLS_functionalComponentArgsRest(__VLS_0), false));
        var __VLS_5 = void 0;
        var __VLS_6 = {
            onShareAreaContent: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.textareaContent = $event;
            }
        };
        var __VLS_2 = void 0;
        var __VLS_3 = void 0;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("pl-5 border-l-4 md:pl-[3em] md:ml-[2.5em] border-light-gray dark:border-lightGrayDARK rounded-md") }));
        if (cbValue.replies.length > 0) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("mt-5") }));
            for (var _c = 0, _d = __VLS_getVForSourceType((__VLS_ctx.commentsData.data.comments[cbIndex].replies)); _c < _d.length; _c++) {
                var _e = _d[_c], rpValue = _e[0], rpIndex = _e[1];
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("mb-5") }));
                // @ts-ignore
                /** @type { [typeof MainReply, ] } */ ;
                // @ts-ignore
                var __VLS_7 = __VLS_asFunctionalComponent(MainReply_vue_1.default, new MainReply_vue_1.default(__assign(__assign(__assign({ 'onLetsUpdateText': {} }, { 'onUpdateCommentText': {} }), { 'onCleanUpdatedText': {} }), { secondValue: ((rpValue)), secondIndex: ((rpIndex)), mainIndex: ((cbIndex)), handleReplyVote: ((__VLS_ctx.handleReplyVote)), handleCommentReply: ((__VLS_ctx.handleCommentReply)), openModal: ((__VLS_ctx.openModal)), commentsData: ((__VLS_ctx.commentsData)), updatedText: ((__VLS_ctx.updatedText)) })));
                var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([__assign(__assign(__assign({ 'onLetsUpdateText': {} }, { 'onUpdateCommentText': {} }), { 'onCleanUpdatedText': {} }), { secondValue: ((rpValue)), secondIndex: ((rpIndex)), mainIndex: ((cbIndex)), handleReplyVote: ((__VLS_ctx.handleReplyVote)), handleCommentReply: ((__VLS_ctx.handleCommentReply)), openModal: ((__VLS_ctx.openModal)), commentsData: ((__VLS_ctx.commentsData)), updatedText: ((__VLS_ctx.updatedText)) })], __VLS_functionalComponentArgsRest(__VLS_7), false));
                var __VLS_12 = void 0;
                var __VLS_13 = {
                    onLetsUpdateText: function () {
                        var _a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            _a[_i] = arguments[_i];
                        }
                        var $event = _a[0];
                        if (!((cbValue.replies.length > 0)))
                            return;
                        __VLS_ctx.updatedText = $event;
                    }
                };
                var __VLS_14 = {
                    onUpdateCommentText: function () {
                        var _a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            _a[_i] = arguments[_i];
                        }
                        var $event = _a[0];
                        if (!((cbValue.replies.length > 0)))
                            return;
                        __VLS_ctx.updatedText = $event;
                    }
                };
                var __VLS_15 = {
                    onCleanUpdatedText: function () {
                        var _a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            _a[_i] = arguments[_i];
                        }
                        var $event = _a[0];
                        if (!((cbValue.replies.length > 0)))
                            return;
                        __VLS_ctx.updatedText = $event;
                    }
                };
                var __VLS_9 = void 0;
                var __VLS_10 = void 0;
                // @ts-ignore
                /** @type { [typeof ReplyReply, ] } */ ;
                // @ts-ignore
                var __VLS_16 = __VLS_asFunctionalComponent(ReplyReply_vue_1.default, new ReplyReply_vue_1.default(__assign({ 'onShareAreaContent': {} }, { data: ((__VLS_ctx.commentsData)), secondIndex: ((rpIndex)), replyCommentIndex: ((__VLS_ctx.replyCommentIndex)), mainIndex: ((cbIndex)), replyToReply: ((__VLS_ctx.replyToReply)), errorBorder: ((__VLS_ctx.errorBorder)) })));
                var __VLS_17 = __VLS_16.apply(void 0, __spreadArray([__assign({ 'onShareAreaContent': {} }, { data: ((__VLS_ctx.commentsData)), secondIndex: ((rpIndex)), replyCommentIndex: ((__VLS_ctx.replyCommentIndex)), mainIndex: ((cbIndex)), replyToReply: ((__VLS_ctx.replyToReply)), errorBorder: ((__VLS_ctx.errorBorder)) })], __VLS_functionalComponentArgsRest(__VLS_16), false));
                var __VLS_21 = void 0;
                var __VLS_22 = {
                    onShareAreaContent: function () {
                        var _a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            _a[_i] = arguments[_i];
                        }
                        var $event = _a[0];
                        if (!((cbValue.replies.length > 0)))
                            return;
                        __VLS_ctx.textareaContent = $event;
                    }
                };
                var __VLS_18 = void 0;
                var __VLS_19 = void 0;
            }
        }
    };
    var __VLS_4, __VLS_11, __VLS_20;
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.commentsData.data.comments)); _i < _a.length; _i++) {
        var _b = _a[_i], cbValue = _b[0], cbIndex = _b[1];
        _loop_1(cbValue, cbIndex);
    }
    // @ts-ignore
    /** @type { [typeof AddComment, ] } */ ;
    // @ts-ignore
    var __VLS_23 = __VLS_asFunctionalComponent(AddComment_vue_1.default, new AddComment_vue_1.default({
        commentsData: ((__VLS_ctx.commentsData)),
    }));
    var __VLS_24 = __VLS_23.apply(void 0, __spreadArray([{
            commentsData: ((__VLS_ctx.commentsData)),
        }], __VLS_functionalComponentArgsRest(__VLS_23), false));
    ['grid', 'gap-y-4', 'p-6', 'md:w-[680px]', 'md:mx-auto', 'p-8', 'pr-9', 'rounded-2xl', 'bg-white', 'dark:bg-whiteDARK', 'text-2xl', 'md:flex', 'md:items-start', 'md:gap-x-[1.5em]', 'md:flex', 'md:flex-col', 'md:order-2', 'md:w-full', 'flex', 'items-center', 'mb-7', 'gap-x-7', 'block', 'w-14', 'text-dark-blue', 'dark:text-darkBlueDARK', 'px-3', 'pt-1', 'pb-[5px]', 'bg-moderate-blue', 'dark:text-whiteDARK', 'text-white', 'dark:bg-moderateBlueDARK', 'text-2xl', 'rounded-lg', 'text-grayish-blue', 'dark:text-grayishBlueDARK', 'hidden', 'md:flex', 'md:ml-auto', 'items-center', 'gap-x-3', 'font-bold', 'text-2xl', 'text-moderate-blue', 'dark:text-moderateBlueDARK', 'gap-x-8', 'hidden', 'md:flex', 'md:ml-auto', 'flex', 'items-center', 'ml-2', 'font-bold', 'text-soft-red', 'dark:text-softRedDARK', 'flex', 'items-center', 'ml-2', 'font-bold', 'text-moderate-blue', 'dark:text-moderateBlueDARK', 'flex', 'items-center', 'gap-x-3', 'text-2xl', 'text-moderate-blue', 'dark:text-moderateBlueDARK', 'font-bold', 'w-full', 'p-6', 'mb-3', 'border-b-light-grayish-blue', 'bg-white', 'dark:bg-whiteDARK', 'text-dark-blue', 'dark:text-darkBlueDARK', 'dark:border-b-lightGrayishBlueDARK', 'border', 'rounded-xl', 'max-h-[9rem]', 'min-h=[9rem]', 'outline-none', 'focus:border-dark-blue', 'dark:focus:border-darkBlueDARK', 'focus:border-2', 'border-soft-red', 'dark:border-softRedDARK', 'border-moderate-blue', 'dark:border-moderateBlueDARK', 'text-grayish-blue', 'dark:text-grayishBlueDARK', 'mb-8', 'flex', 'items-center', 'justify-between', 'flex', 'items-center', 'bg-light-gray', 'dark:bg-lightGrayDARK', 'rounded-2xl', 'min-w-32', 'justify-center', 'md:flex-col', 'md:min-w-[2.5em]', 'font-bold', 'text-2xl', 'text-dark-blue', 'dark:text-darkBlueDARK', 'py-3', 'px-5', 'font-bold', 'text-2xl', 'text-moderate-blue', 'dark:text-moderateBlueDARK', 'font-bold', 'text-2xl', 'text-dark-blue', 'dark:text-darkBlueDARK', 'py-3', 'px-5', 'flex', 'items-center', 'gap-x-3', 'md:hidden', 'font-bold', 'text-2xl', 'text-moderate-blue', 'dark:text-moderateBlueDARK', 'flex', 'gap-x-8', 'md:hidden', 'flex', 'items-center', 'ml-2', 'font-bold', 'text-soft-red', 'dark:text-softRedDARK', 'flex', 'items-center', 'ml-2', 'font-bold', 'text-moderate-blue', 'dark:text-moderateBlueDARK', 'flex', 'items-center', 'gap-x-3', 'text-2xl', 'text-moderate-blue', 'dark:text-moderateBlueDARK', 'font-bold', 'pl-5', 'border-l-4', 'md:pl-[3em]', 'md:ml-[2.5em]', 'border-light-gray', 'dark:border-lightGrayDARK', 'rounded-md', 'mt-5', 'mb-5',];
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
            $emit: emit,
            AddMainReply: AddMainReply_vue_1.default,
            MainReply: MainReply_vue_1.default,
            ReplyReply: ReplyReply_vue_1.default,
            replyIcon: icon_reply_svg_1.default,
            AddComment: AddComment_vue_1.default,
            deleteIcon: icon_delete_svg_1.default,
            editIcon: icon_edit_svg_1.default,
            commentsData: commentsData,
            replyIndex: replyIndex,
            replyCommentIndex: replyCommentIndex,
            textareaContent: textareaContent,
            activeEditindex: activeEditindex,
            updatedText: updatedText,
            errorBorder: errorBorder,
            isEdit: isEdit,
            handleReply: handleReply,
            handleCommentReply: handleCommentReply,
            handleEdit: handleEdit,
            updateComment: updateComment,
            replyToMain: replyToMain,
            replyToReply: replyToReply,
            handleMainCommentVote: handleMainCommentVote,
            handleReplyVote: handleReplyVote,
            openModal: openModal,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            $emit: emit,
        };
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */

var ne=Object.defineProperty;var T=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var y=(u,r,o)=>r in u?ne(u,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):u[r]=o,f=(u,r)=>{for(var o in r||(r={}))se.call(r,o)&&y(u,o,r[o]);if(T)for(var o of T(r))ie.call(r,o)&&y(u,o,r[o]);return u};(function(){"use strict";var u={data:function(){return{isLoading:!1,replaceKirbyLangs:!0,translationStatuses:[],translationUrls:{},deletable:!1,revertable:!1,isInHeader:!1,showLoader:!1,compactMode:!1,showEditLanguage:!0,label:null,contentID:null}},async created(){await this.reload()},computed:{apiUrl(){var t,a,n;let e=(n=(a=(t=this.$view)==null?void 0:t.props)==null?void 0:a.model)==null?void 0:n.link;return e&&e!=""?""+e+"/translations-info":"plugin-translations/load-header"}},methods:{reload(){this.isLoading=!0,this.name;let e=this;this.load().then(function(t){e.onLoad(t)}).catch(t=>{console.log("ERROR! on loading translations =",t,", component = ",e)}).finally(()=>{this.isLoading=!1})},onLoad(e){var t,a,n,i,s,h,_,l,g,p;((a=(t=e.options)==null?void 0:t.header)==null?void 0:a.replaceKirbyLanguages)>=0&&(this.replaceKirbyLangs=e.options.header.replaceKirbyLanguages),((i=(n=e.options)==null?void 0:n.header)==null?void 0:i.deletable)!=null&&(this.deletable=e.options.header.deletable),((h=(s=e.options)==null?void 0:s.header)==null?void 0:h.revertable)!=null&&(this.revertable=e.options.header.revertable),((l=(_=e.options)==null?void 0:_.header)==null?void 0:l.compactMode)!=null&&(this.compactMode=e.options.header.compactMode),((p=(g=e.options)==null?void 0:g.header)==null?void 0:p.showEditLanguage)!=null&&(this.showEditLanguage=e.options.header.showEditLanguage),e.translations!=null&&(this.translationStatuses=e.translations),e.id!=null&&(this.contentID=e.id),e.previewUrls!=null&&(this.translationUrls=e.previewUrls),e.deletable!=null&&(this.deletable=e.deletable),e.revertable!=null&&(this.revertable=e.revertable),e.compactMode!=null&&(this.compactMode=e.compactMode),e.label!=null&&(this.label=e.label),e.showEditLanguage&&(this.showEditLanguage=e.showEditLanguage)},getTranslationsProviderPropsBinding(){return{translationStatuses:this.translationStatuses,isInHeader:this.isInHeader,showLoader:this.showLoader,isLoading:this.isLoading,replaceKirbyLangs:this.replaceKirbyLangs,deletable:this.deletable,revertable:this.revertable,label:this.label,translationUrls:this.translationUrls,showEditLanguage:this.showEditLanguage,compactMode:this.compactMode}}}},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"k-translations-section"},[e.label?a("h2",[e._v(e._s(e.label))]):e._e(),a("k-translations",e._b({ref:"translations",scopedSlots:e._u([{key:"extrabuttons",fn:function(n){return[e.revertable&&!n.actualLanguage.default?a("k-button",{staticClass:"k-translations-button",attrs:{text:"Revert "+n.actualLanguage.name,icon:"refresh",theme:"warning"},on:{click:function(i){return i.stopPropagation(),e.$refs.translations.revertTranslationOpen(n.actualLanguage)}}}):e._e(),e.deletable&&!n.actualLanguage.default?a("k-button",{staticClass:"k-translations-button",attrs:{text:"Delete "+n.actualLanguage.name,icon:"trash",theme:"negative"},on:{click:function(i){return i.stopPropagation(),e.$refs.translations.deleteTranslationOpen(n.actualLanguage)}}}):e._e()]}}])},"k-translations",e.getTranslationsProviderPropsBinding(),!1))],1)},o=[],le="";function c(e,t,a,n,i,s,h,_){var l=typeof e=="function"?e.options:e;t&&(l.render=t,l.staticRenderFns=a,l._compiled=!0),n&&(l.functional=!0),s&&(l._scopeId="data-v-"+s);var g;if(h?(g=function(d){d=d||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!d&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(d=__VUE_SSR_CONTEXT__),i&&i.call(this,d),d&&d._registeredComponents&&d._registeredComponents.add(h)},l._ssrRegister=g):i&&(g=_?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),g)if(l.functional){l._injectStyles=g;var p=l.render;l.render=function(ae,w){return g.call(w),p(ae,w)}}else{var $=l.beforeCreate;l.beforeCreate=$?[].concat($,g):[g]}return{exports:e,options:l}}const C=f({},u),M={data:function(){return{deletable:!0,revertable:!0}},mixins:[C],created(){}},v={};var x=c(M,r,o,!1,S,null,null,null);function S(e){for(let t in v)this[t]=v[t]}var E=function(){return x.exports}(),U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.hasMenu?a("k-dropdown",{key:e.language.code},[a("k-button",{ref:"translations-button-"+e.language.code,class:e.getLangButtonClasses(),attrs:{"data-langcode":e.language.code,icon:e.language.icon,theme:e.language.theme,responsive:e.hasMenu,click:e.languageClick}},[a("span",{staticClass:"longname"},[e._v(e._s(e.language.name))]),a("span",{staticClass:"shortname"},[e._v(e._s(e.language.code))]),e.hasMenu?a("span",{staticClass:"k-translations-menu-icon-link",on:{click:function(n){return n.stopPropagation(),e.toggleMenu.apply(null,arguments)}}},[a("k-icon",{staticClass:"k-translations-menu-icon",attrs:{type:"angle-down"}})],1):e._e()]),e.hasMenu?a("k-dropdown-content",{ref:"menu-toggle-"+e.language.code,staticClass:"k-translations-options",attrs:{"data-theme":"light"}},[a("k-button",{staticClass:"k-dropdown-item k-translations-menu-title k-translations-button no-focus",attrs:{icon:"globe",disabled:!0},on:{click:function(n){n.stopPropagation()}}},[a("h3",[e._v(e._s(e.language.name)+" ("+e._s(e.language.code)+") "),e.language.default?a("span",{staticClass:"k-translations-tag"},[e._v(e._s(e.$t("daandelange.translations.default")))]):e._e(),e.language.isCurrent?a("span",{staticClass:"k-translations-tag"},[e._v(e._s(e.$t("daandelange.translations.current")))]):e._e()])]),e.menuItems&&e.menuItems.length>0?a("hr"):e._e(),e._l(e.menuItems,function(n){return[a("k-dropdown-item",{staticClass:"k-translations-button",attrs:{click:function(){n.click&&n.click()},icon:n.icon,link:n.link,target:n.target,theme:n.theme,disabled:!(n.link||n.click),focus:function(){}}},[e._v(" "+e._s(n.text)+" ")])]}),e.language.isDeleteable||e.language.isRevertable?a("hr"):e._e(),e.language.isDeleteable?a("k-dropdown-item",{staticClass:"k-translations-button",attrs:{icon:"trash",theme:"warning"},on:{click:function(n){return n.stopPropagation(),e.deleteTranslation()}}},[e._v(" "+e._s(e.$t("delete"))+" "+e._s(e.language.code.toUpperCase())+" ")]):e._e(),e.language.isRevertable?a("k-dropdown-item",{staticClass:"k-translations-button",attrs:{icon:"refresh",theme:"negative"},on:{click:function(n){return n.stopPropagation(),e.revertTranslation()}}},[e._v(" "+e._s(e.$t("revert"))+" "+e._s(e.language.code.toUpperCase())+" ")]):e._e()],2):e._e()],1):a("k-button",{key:e.language.code,class:e.getLangButtonClasses(),attrs:{"data-langcode":e.language.code,icon:e.computedLanguage.icon,theme:e.language.theme,responsive:e.hasMenu,click:e.languageClick}},[a("span",{staticClass:"longname"},[e._v(e._s(e.language.name))]),a("span",{staticClass:"shortname"},[e._v(e._s(e.language.code))])])},P=[],re="";const B={name:"k-translations-button",props:{language:{type:Array|Object,required:!0},allowMenu:{type:Boolean,default:!1},compactMode:{type:Boolean,default:!1}},computed:{hasMenu(){return this.allowMenu},menuItems(){var t;let e=[];return this.language.isCurrent||e.push({icon:"edit",text:"Switch to "+this.language.name,click:()=>this.languageClick(this.language)}),((t=this.$permissions.pages)==null?void 0:t.preview)&&this.language.previewUrl&&e.push({icon:"preview",text:"Visit this page in "+this.language.name,link:this.language.previewUrl,target:"_blank"}),this.$permissions.languages.create&&this.language.showEditLanguage&&e.push({icon:"cog",text:"Edit language in panel",link:"languages?language="+this.$translation.code}),e.push({icon:"document",text:"Status: "+(this.language.isTranslated===!0?"Translated":this.language.isTranslated===!1?"Not translated":"Unknown"),theme:this.language.isTranslated===!0?"positive":this.language.isTranslated===!1?"negative":"unknown"}),e},computedLanguage(){return this.language}},methods:{getLangButtonClasses(e={}){var t,a;return this.language?f({"k-translations-default":this.language.default,"k-translations-active":(t=this.language.isCurrent)!=null?t:!1,"k-translations-button":!0,["k-translations-button-"+this.language.code]:((a=this.language.code)==null?void 0:a.length)>0,"k-translations-button-compact":this.allowMenu||this.compactMode},e):e},toggleMenu(){var e;return this.hasMenu&&((e=this.$refs["menu-toggle-"+this.language.code])==null||e.toggle()),!1},closeMenu(){var e;this.hasMenu&&((e=this.$refs["menu-toggle-"+this.language.code])==null||e.close())},revertTranslation(){this.$emit("revertLanguage",this.language)},deleteTranslation(){this.$emit("deleteLanguage",this.language)},languageClick(){this.language.isCurrent?this.hasMenu&&this.toggleMenu():this.$emit("changeLanguage",this.language)}}},m={};var R=c(B,U,P,!1,I,null,null,null);function I(e){for(let t in m)this[t]=m[t]}var O=function(){return R.exports}(),H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{"k-translations":!0,"k-translations-header":e.isInHeader,"k-button-group":e.isInHeader}},[e.isInHeader?e._e():e._t("above",null,{defaultLanguage:e.formattedDefaultLanguage,actualLanguage:e.formattedActualLanguage,allLanguages:e.allLanguages,alternativeLanguages:e.alternativeLanguages}),e.isLoading&&e.showLoader?a("button",{staticClass:"k-button k-translations-loader"},[a("k-loader",{staticClass:"k-translations-loader-icon"}),a("span",{staticClass:"k-button-text"},[e._v(e._s(e.$t("daandelange.translations.loading")))])],1):e.replaceKirbyLangs?a("k-button-group",{staticClass:"k-translations-buttons"},[e._l(e.allLanguages,function(n){return e.allLanguages?a("k-translations-button",{key:"btn-"+n.code,attrs:{language:n,allowMenu:e.allowMenus||e.isInHeader,compactMode:e.compactModeEnabled},on:{changeLanguage:function(i){return e.change(n)},deleteLanguage:function(i){return e.deleteTranslationOpen(n)},revertLanguage:function(i){return e.revertTranslationOpen(n)}}}):e._e()}),e._t("extrabuttons",null,{defaultLanguage:e.formattedDefaultLanguage,actualLanguage:e.formattedActualLanguage,allLanguages:e.allLanguages,alternativeLanguages:e.alternativeLanguages})],2):a("k-original-languages-dropdown"),e.$scopedSlots.below&&!e.isInHeader?a("div",{staticClass:"k-translations-below"},[e._t("below",null,{defaultLanguage:e.formattedDefaultLanguage,actualLanguage:e.formattedActualLanguage,allLanguages:e.allLanguages,alternativeLanguages:e.alternativeLanguages})],2):e._e(),a("k-dialog",{ref:"deleteDialog",attrs:{button:e.$t("delete"),theme:"negative",icon:"trash"},on:{submit:function(n){return e.deleteTranslationSubmit(e.dialogLanguage)}}},[a("k-text",{domProps:{innerHTML:e._s(e.$t("daandelange.translations.delete.confirm",{code:e.language.code.toUpperCase()}))}})],1),a("k-dialog",{ref:"revertDialog",attrs:{button:e.$t("revert"),theme:"negative",icon:"refresh"},on:{submit:function(n){return e.revertTranslationSubmit(e.dialogLanguage)}}},[a("k-text",{domProps:{innerHTML:e._s(e.$t("daandelange.translations.revert.confirm",{code:e.language.code.toUpperCase()}))}})],1)],2)},D=[],oe="";const F={extends:"k-languages-dropdown",data(){return{dialogLanguage:null}},components:{"k-translations-button":O},props:{allowMenus:{type:Boolean,default:!1},isInHeader:{type:Boolean,default:!1},showLoader:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},replaceKirbyLangs:{type:Boolean,default:!1},deletable:{type:Boolean,default:!1},revertable:{type:Boolean,default:!1},compactMode:{type:Boolean,default:!1},showEditLanguage:{type:Boolean,default:!0},translationStatuses:{type:Array,default:function(){return[]}},translationUrls:{type:Object,default:function(){return{}}}},computed:{alternativeLanguages(){var e;return this.formatLanguages(this.sortLanguages((e=this.languages)!=null?e:[]))},allLanguages(){var e;return this.formatLanguages([this.defaultLanguage,...this.sortLanguages((e=this.languages)!=null?e:[])])},formattedDefaultLanguage(){return this.formatLanguages([this.defaultLanguage],!0)},formattedActualLanguage(){return this.formatLanguages([this.language],!0)},hasFiber(){return window.panel&&window.panel.$languages},canDelete(){return this.deletable},canRevert(){return this.revertable},compactModeEnabled(){var e;return(e=this.compactMode)!=null?e:!1},modelUrl(){var t,a,n;let e=(n=(a=(t=this.$view)==null?void 0:t.props)==null?void 0:a.model)==null?void 0:n.link;return e&&e!=""?""+e+"":null}},methods:{sortLanguages(e){return e.sort((t,a)=>t.default?-999:a.default?1:t.name<a.name?-1:t.name>a.name?1:0)},languageIsTranslated(e){var t;return e.default?!0:!this.translationStatuses||!(this.translationStatuses.length>0)?null:(t=this.translationStatuses)==null?void 0:t.some(a=>a.code===e.code&&a.file)},formatLanguages(e,t=!1){var a,n,i;if(e&&e.length){for(let s=0;s<e.length;s++)if(e[s].isTranslated=this.languageIsTranslated(e[s]),e[s].isTranslated===!0?(e[s].icon="toggle-on",e[s].theme="positive"):e[s].isTranslated===!1?(e[s].icon="toggle-off",e[s].theme="negative"):(e[s].icon="globe",e[s].theme="unknown"),e[s].isCurrent=this.language.code===e[s].code,e[s].isDeleteable=this.canDelete&&!e[s].default&&e[s].isTranslated,e[s].isRevertable=this.canRevert&&!e[s].default,e[s].showEditLanguage=this.$permissions.languages.create&&this.showEditLanguage,e[s].previewUrl=(i=this.translationUrls[e[s].code])!=null?i:(n=(a=this.$view.props)==null?void 0:a.model)==null?void 0:n.previewUrl,t)return e[s];return e}return t?null:[]},deleteTranslationOpen(e){var t;this.dialogLanguage=e,(t=this.$refs.deleteDialog)==null||t.open()},deleteTranslationSubmit(e){!(e==null?void 0:e.code)||this.$api.post("plugin-translations/delete",{id:this.modelUrl,languageCode:e.code}).then(t=>{this.$refs.deleteDialog.close(),t.code===200?(this.$store.dispatch("notification/success",t.text),this.change(this.defaultLanguage)):this.$store.dispatch("notification/error",t.text)}).catch(t=>{this.$store.dispatch("notification/error",t)})},revertTranslationOpen(e){var t;this.dialogLanguage=e,(t=this.$refs.revertDialog)==null||t.open()},revertTranslationSubmit(e){!(e==null?void 0:e.code)||(this.$api.post("plugin-translations/revert",{id:this.modelUrl,languageCode:e.code}).then(t=>{this.$refs.revertDialog.close(),t.code===200?(this.$store.dispatch("notification/success",t.text),this.hasFiber&&this.$go(this.$view.path)):this.$store.dispatch("notification/error",t.text)}).catch(t=>{this.$store.dispatch("notification/error",t)}),this.hasFiber||this.$router.go())}}},b={};var K=c(F,H,D,!1,A,null,null,null);function A(e){for(let t in b)this[t]=b[t]}var j=function(){return K.exports}(),N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("k-translations",e._b({},"k-translations",e.getTranslationsProviderPropsBinding(),!1))},V=[],ue="";const W={mixins:[f({},u)],name:"k-languages-dropdown",data:function(){return{replaceKirbyLangs:!0,isInHeader:!0,showLoader:!0,deletable:!0,revertable:!0,showEditLanguage:!0}},props:{devInfo:{type:String,default:`Warning: I'm not the default k-languages-dropdown.
 I have been replaced by a k-translations-dropdown !`}},methods:{load(){return this.$api.get(this.apiUrl)}}},k={};var X=c(W,N,V,!1,q,null,null,null);function q(e){for(let t in k)this[t]=k[t]}var z=function(){return X.exports}(),G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"k-translations-field"},[e.label?a("h2",[e._v(e._s(e.label))]):e._e(),a("k-translations",e._b({ref:"translations",scopedSlots:e._u([{key:"extrabuttons",fn:function(n){return[a("k-button",{staticClass:"k-translations-button",attrs:{text:"Revert "+n.actualLanguage.name,icon:"refresh",theme:"warning"},on:{click:function(i){return i.stopPropagation(),e.$refs.translations.revertTranslationOpen(n.actualLanguage)}}}),a("k-button",{staticClass:"k-translations-button",attrs:{text:"Delete "+n.actualLanguage.name,icon:"trash",theme:"negative"},on:{click:function(i){return i.stopPropagation(),e.$refs.translations.deleteTranslationOpen(n.actualLanguage)}}})]}}])},"k-translations",e.getTranslationsProviderPropsBinding(),!1))],1)},J=[],de="";const Q=f({},u),Y={name:"k-translations-field",mixins:[Q]},L={};var Z=c(Y,G,J,!1,ee,null,null,null);function ee(e){for(let t in L)this[t]=L[t]}var te=function(){return Z.exports}();panel.plugin("daandelange/translations",{components:{"k-original-languages-dropdown":{extends:"k-languages-dropdown"},"k-translations":j,"k-languages-dropdown":z,"k-button-link":{extends:"k-button-link",methods:{focus:function(){this.$el.focus()}}}},sections:{translations:E},fields:{translations:te}})})();

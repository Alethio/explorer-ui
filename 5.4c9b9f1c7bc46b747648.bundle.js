(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1010:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return ContractIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_util_react_SvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(965);class ContractIcon extends react__WEBPACK_IMPORTED_MODULE_0__.Component{render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_react_SvgIcon__WEBPACK_IMPORTED_MODULE_1__.a,Object.assign({},this.props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("polygon",{points:"0 0 24 0 24 24 0 24"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12,4 L14,6 L16,6 C17.1,6 18,6.9 18,8 L18,18 C18,19.1 17.1,20 16,20 L8,20 C6.9,20 6,19.1 6,18 L6.01,6 C6.01,4.9 6.9,4 8,4 L12,4 Z M8,16 L8,17 L16,17 L16,16 L8,16 Z M8,13 L8,14 L16,14 L16,13 L8,13 Z M8,10 L8,11 L16,11 L16,10 L8,10 Z",fill:"currentColor",fillRule:"nonzero"})))}}},1018:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return ByteSize});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_util_internal_locale_NumberFormatter__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(977);class ByteSize extends react__WEBPACK_IMPORTED_MODULE_0__.Component{render(){return this.props.format.replace(/%d/,(new _util_internal_locale_NumberFormatter__WEBPACK_IMPORTED_MODULE_1__.a).format(this.props.children,this.props.locale))}}},1057:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),ValueBox=__webpack_require__(967),Hash=__webpack_require__(976),tslib_es6=__webpack_require__(7),TooltipBase=__webpack_require__(980),styled_components=__webpack_require__(961);const TooltipTextRoot=Object(styled_components.b)("div").withConfig({displayName:"TooltipTextRoot",componentId:"sc-aisw5k"})`
    font-size: 16px;
    line-height: 32px;
    font-weight: 500;
    letter-spacing: normal;

    color: ${props=>props.textColor?props.textColor:"black"};
`;class TooltipText_TooltipText extends react.Component{render(){return react.createElement(TooltipTextRoot,{textColor:this.props.textColor},this.props.children)}}const TooltipContent=styled_components.b.div.withConfig({displayName:"TooltipContent",componentId:"sc-117jsy"})`
    padding: 4px 16px;
`;class Tooltip_Tooltip extends react.Component{render(){let _a=this.props,{content:content,children:children}=_a,other=Object(tslib_es6.c)(_a,["content","children"]);return react.createElement(TooltipBase.a,Object.assign({},other,{content:react.createElement(TooltipContent,null,react.createElement(TooltipText_TooltipText,null,content))}),children)}}Tooltip_Tooltip.defaultProps={offset:8};var mobx_module=__webpack_require__(4),index_module=__webpack_require__(31);class Clipboard{constructor(document){this.document=document}copy(text){let document=this.document,textarea=document.createElement("textarea");textarea.value=text,textarea.style.position="fixed",textarea.style.top="0px",textarea.style.left="0px",textarea.style.opacity="0",textarea.style.pointerEvents="none",document.body.appendChild(textarea),textarea.focus(),textarea.select(),document.execCommand("copy"),document.body.removeChild(textarea)}}var IconButton=__webpack_require__(981),SvgIcon=__webpack_require__(965);class CopyIcon_CopyIcon extends react.Component{render(){return react.createElement(SvgIcon.a,null,react.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},react.createElement("polygon",{points:"0 0 24 0 24 24 0 24"}),react.createElement("path",{d:"M15,4 L6,4 C4.9,4 4,4.9 4,6 L4,14 L6,14 L6,6 L15,6 L15,4 Z M18,8 L10,8 C8.9,8 8,8.9 8,10 L8,18 C8,19.1 8.9,20 10,20 L18,20 C19.1,20 20,19.1 20,18 L20,10 C20,8.9 19.1,8 18,8 Z M18,18 L10,18 L10,10 L18,10 L18,18 Z",fill:"currentColor",fillRule:"nonzero"})))}}class StatusOkIcon_StatusOkIcon extends react.PureComponent{render(){return react.createElement(SvgIcon.a,Object.assign({},this.props),react.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},react.createElement("g",{transform:"translate(0.000000, 1.000000)"},react.createElement("polygon",{points:"0 0 24 0 24 24 0 24"}),react.createElement("polygon",{fill:"currentColor",fillRule:"nonzero",points:"10 14.17 5.83 10 4.41 11.41 10 17 20 7 18.59 5.59"}))))}}class StatusConfirmedIcon_StatusConfirmedIcon extends react.PureComponent{render(){return react.createElement(StatusOkIcon_StatusOkIcon,Object.assign({},this.props))}}let CopyValueButton_CopyValueButton=class CopyValueButton extends react.Component{constructor(){super(...arguments),this.confirmationVisible=!1,this.copyValue=()=>{(this.props.clipboard||new Clipboard(document)).copy(this.props.value),this.confirmationVisible=!0,this.confirmationHideId=setTimeout(()=>this.confirmationVisible=!1,this.props.confirmationVisibleFor)}}render(){return react.createElement(IconButton.a,{className:this.props.className,Icon:this.confirmationVisible?StatusConfirmedIcon_StatusConfirmedIcon:CopyIcon_CopyIcon,color:theme=>theme.colors.copyIcon,onClick:this.copyValue})}componentDidUpdate(prevProps){prevProps.value!==this.props.value&&this.confirmationVisible&&(this.confirmationVisible=!1,this.confirmationHideId&&(clearTimeout(this.confirmationHideId),this.confirmationHideId=void 0))}componentWillUnmount(){this.confirmationHideId&&clearTimeout(this.confirmationHideId)}};CopyValueButton_CopyValueButton.defaultProps={confirmationVisibleFor:3e3},Object(tslib_es6.b)([mobx_module.observable],CopyValueButton_CopyValueButton.prototype,"confirmationVisible",void 0),CopyValueButton_CopyValueButton=Object(tslib_es6.b)([index_module.observer],CopyValueButton_CopyValueButton);const CopyValueButtonWrapper=styled_components.b.div.withConfig({displayName:"CopyValueButtonWrapper",componentId:"sc-1jsbxem"})`
    margin: 0 0 0 16px;
`;class CopyValueTooltip_CopyValueTooltip extends react.Component{render(){return react.createElement(Tooltip_Tooltip,{content:react.createElement("div",{style:{display:"flex",alignItems:"center"}},react.createElement("div",null,this.props.value),react.createElement(CopyValueButtonWrapper,null,react.createElement(CopyValueButton_CopyValueButton,{value:this.props.value,clipboard:this.props.clipboard})))},this.props.children)}}__webpack_require__.d(__webpack_exports__,"a",function(){return HashValueBox_HashValueBox});class HashValueBox_HashValueBox extends react.Component{render(){let{children:children,clipboard:clipboard}=this.props,box=react.createElement(ValueBox.a,{variant:this.props.variant,colors:this.props.colors,Icon:this.props.Icon},react.createElement(Hash.a,null,children));return this.props.noTooltip?box:react.createElement(CopyValueTooltip_CopyValueTooltip,{value:"0x"+children.replace(/^0x/,""),clipboard:clipboard},box)}}},1062:function(module,__webpack_exports__,__webpack_require__){"use strict";var tslib_es6=__webpack_require__(7),react=__webpack_require__(0),styled_components=__webpack_require__(961);const LayoutRowWrapper=Object(styled_components.b)(class LayoutRowWrapper_$LayoutRowWrapper extends react.Component{constructor(){super(...arguments),this.divWidth=0,this.onResize=()=>{this.props.onResize&&this.props.onResize(this.divWidth)},this.handleResize=()=>{this.divElement&&(this.divWidth=this.divElement.clientWidth,this.onResize())}}render(){return react.createElement("div",{className:this.props.className,ref:r=>{this.divElement=r}},this.props.children)}componentDidMount(){window.addEventListener("resize",this.handleResize),this.handleResize()}componentWillUnmount(){window.removeEventListener("resize",this.handleResize)}}).withConfig({displayName:"LayoutRowWrapper",componentId:"sc-5qxa5u"})`
    display: ${({smallScreen:smallScreen})=>smallScreen?"block":"flex"};
    ${({centerContent:centerContent})=>centerContent?styled_components.a`
        justify-content: center;
    `:""};
`;var mobx_module=__webpack_require__(4),index_module=__webpack_require__(31);__webpack_require__.d(__webpack_exports__,"a",function(){return LayoutRow_LayoutRow});let LayoutRow_LayoutRow=class LayoutRow extends react.Component{constructor(){super(...arguments),this.smallScreen=!1,this.isFirstLabelIgnored=!1,this.onResize=width=>{this.smallScreen=!!this.props.minWidth&&width<=this.props.minWidth,this.props.responsive&&this.props.responsive.ignoreFirstLabel&&(this.isFirstLabelIgnored="forLowRes"===this.props.responsive.ignoreFirstLabel&&width<540||"forMobile"===this.props.responsive.ignoreFirstLabel&&width<460)}}isLayoutRowItemInstance(c){let childIsLayoutRowItem=!1;try{childIsLayoutRowItem="layoutRowItem"===c.type._brand}catch(e){}return childIsLayoutRowItem}render(){let i=0;return this.smallScreen?react.Children.map(this.props.children,c=>{if(null==c)return c;const childIsLayoutRowItem=this.isLayoutRowItemInstance(c);return react.createElement(LayoutRowWrapper,{smallScreen:this.smallScreen,onResize:this.onResize,centerContent:this.isFirstLabelIgnored},childIsLayoutRowItem?react.cloneElement(c,{isBeginningOfRow:!0,fullRow:!0,ignoreFirstLabel:this.isFirstLabelIgnored}):c)}):react.createElement(LayoutRowWrapper,{smallScreen:this.smallScreen,onResize:this.onResize,centerContent:this.isFirstLabelIgnored},react.Children.map(this.props.children,c=>{if(null==c)return c;return this.isLayoutRowItemInstance(c)?react.cloneElement(c,{isBeginningOfRow:!i++||this.smallScreen,ignoreFirstLabel:this.isFirstLabelIgnored}):c}))}};Object(tslib_es6.b)([mobx_module.observable],LayoutRow_LayoutRow.prototype,"smallScreen",void 0),Object(tslib_es6.b)([mobx_module.observable],LayoutRow_LayoutRow.prototype,"isFirstLabelIgnored",void 0),LayoutRow_LayoutRow=Object(tslib_es6.b)([index_module.observer],LayoutRow_LayoutRow)},1063:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components=__webpack_require__(961);const LayoutBoxItem=Object(styled_components.b)(({children:children,className:className})=>react.createElement("div",{className:className},children)).withConfig({displayName:"LayoutBoxItem",componentId:"sc-14wcdux"})`
    display: flex;
    align-items: center;
    /* put this to auto for tx alignment */
    height: ${({autoHeight:autoHeight,baseHeight:baseHeight})=>autoHeight?"auto":baseHeight?baseHeight+"px":"48px"};
    padding: 0 8px;
    /* flex: 0 0 auto; put this to 1 1 for tx wrapping */
    flex: ${({autoHeight:autoHeight})=>autoHeight?"1 1":"0 0"} auto;
    width: ${props=>props.isBeginningOfRow&&!props.autoWidth?"200px":"auto"};
    justify-content: ${props=>props.justifyContent?props.justifyContent:props.isBeginningOfRow?"flex-end":"inherit"};

    @media ${props=>props.theme.media.mAndBelow} {
        width: auto;
        min-width: ${props=>props.isBeginningOfRow&&!props.autoWidth?"125px":"auto"};
    }

    @media ${props=>props.theme.media.xs} {
        width: auto;
        min-width: ${props=>props.isBeginningOfRow&&!props.autoWidth?"95px":"auto"};
    }
`;var react_is=__webpack_require__(94);__webpack_require__.d(__webpack_exports__,"a",function(){return LayoutRowItem_LayoutRowItem});const LayoutRowItemWrapper=Object(styled_components.b)(({children:children,className:className})=>react.createElement("div",{className:className},children)).withConfig({displayName:"LayoutRowItemWrapper",componentId:"sc-wtu36n"})`
    display: flex;
    flex: ${props=>props.fullRow?"1 1":"0 0"} auto;
`,LayoutInfoBoxItem=Object(styled_components.b)(({children:children,className:className})=>react.createElement("div",{className:className},children)).withConfig({displayName:"LayoutInfoBoxItem",componentId:"sc-1vg80ci"})`
    display: flex;
    flex: ${({fullRow:fullRow})=>fullRow?"1 1":"0 1"} auto;
    flex-wrap: wrap;
`;class LayoutRowItem_LayoutRowItem extends react.PureComponent{render(){const childrenArray=react.Children.toArray(this.props.children).reduce((outArr,child)=>(react_is.isFragment(child)?outArr.push(...react.Children.map(child.props.children,c=>react_is.isElement(c)?react.cloneElement(c,{}):(console.error("Fragment passed to LayoutRowItem contains a child that is not a React.Element.",c),c))):outArr.push(child),outArr),[]),labelElement=childrenArray.shift();return react.createElement(LayoutRowItemWrapper,{fullRow:this.props.fullRow},this.props.ignoreFirstLabel?null:react.createElement(LayoutBoxItem,{isBeginningOfRow:this.props.isBeginningOfRow,baseHeight:this.props.baseHeight,autoWidth:this.props.autoWidth},labelElement),1===childrenArray.length?this.childrenArrayRender(childrenArray):react.createElement(LayoutInfoBoxItem,{fullRow:this.props.fullRow},this.childrenArrayRender(childrenArray)))}childrenArrayRender(children){return children.map((c,idx)=>react.createElement(LayoutBoxItem,{baseHeight:this.props.baseHeight,autoHeight:this.props.autoHeight,autoWidth:this.props.autoWidth,key:idx},c))}}LayoutRowItem_LayoutRowItem._brand="layoutRowItem"},1064:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components=__webpack_require__(961);const Spacer=Object(styled_components.b)(({children:children,className:className})=>react.createElement("div",{className:className},children)).withConfig({displayName:"Spacer",componentId:"sc-1mxw6rv"})`
    height: ${props=>props.height};
    flex: 0 0 auto;
`;__webpack_require__.d(__webpack_exports__,"a",function(){return LayoutSection_LayoutSection});const LayoutSectionWrapper=styled_components.b.div.withConfig({displayName:"LayoutSectionWrapper",componentId:"sc-i5kslb"})`
    flex: 1 1 auto;
    box-sizing: border-box;
`;class LayoutSection_LayoutSection extends react.Component{render(){return react.Children.toArray(this.props.children).length?react.createElement(react.Fragment,null,this.props.useWrapper?react.createElement(LayoutSectionWrapper,null,this.props.children):this.props.children,react.createElement(Spacer,{height:"48px"})):null}}},961:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return css}),__webpack_require__.d(__webpack_exports__,"c",function(){return withTheme});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(44);const{default:styled,css:css,injectGlobal:injectGlobal,keyframes:keyframes,ThemeProvider:ThemeProvider,withTheme:withTheme}=styled_components__WEBPACK_IMPORTED_MODULE_0__;__webpack_exports__.b=styled},962:function(module,exports,__webpack_require__){"use strict";__webpack_require__(2),Object.defineProperty(exports,"__esModule",{value:!0}),exports.EVENT_ID=exports.PANEL_ID=exports.ADDON_ID=void 0;var ADDON_ID="storybook/storysource";exports.ADDON_ID=ADDON_ID;var PANEL_ID="".concat(ADDON_ID,"/panel");exports.PANEL_ID=PANEL_ID;var EVENT_ID="".concat(ADDON_ID,"/set");exports.EVENT_ID=EVENT_ID},963:function(module,exports,__webpack_require__){"use strict";(function(module){__webpack_require__(2),Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"ADDON_ID",{enumerable:!0,get:function get(){return _events.ADDON_ID}}),Object.defineProperty(exports,"PANEL_ID",{enumerable:!0,get:function get(){return _events.PANEL_ID}}),Object.defineProperty(exports,"EVENT_ID",{enumerable:!0,get:function get(){return _events.EVENT_ID}}),Object.defineProperty(exports,"withStorySource",{enumerable:!0,get:function get(){return _preview.withStorySource}});var _events=__webpack_require__(962),_preview=__webpack_require__(964);module&&module.hot&&module.hot.decline&&module.hot.decline()}).call(this,__webpack_require__(98)(module))},964:function(module,exports,__webpack_require__){"use strict";__webpack_require__(2),Object.defineProperty(exports,"__esModule",{value:!0}),exports.withStorySource=function withStorySource(source){var locationsMap=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(storyFn,context){return function setStorySource(context,source,locationsMap){var currentLocation=getLocation(context,locationsMap);_addons.default.getChannel().emit(_events.EVENT_ID,{source:source,currentLocation:currentLocation,locationsMap:locationsMap})}(context,source,locationsMap),storyFn()}};var _addons=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(186)),_events=__webpack_require__(962);var getLocation=function getLocation(context,locationsMap){return locationsMap[context.id]}},965:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return SvgIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);class SvgIcon extends react__WEBPACK_IMPORTED_MODULE_0__.Component{render(){let size=this.props.size,viewBoxSize=this.props.viewBoxSize;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:size+"px",height:size+"px",style:{display:"block"},viewBox:`0 0 ${viewBoxSize} ${viewBoxSize}`,version:"1.1",xmlns:"http://www.w3.org/2000/svg"},this.props.children)}}SvgIcon.defaultProps={size:24,viewBoxSize:24}},966:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return DomNodeProxy});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(55);class DomNodeProxy extends react__WEBPACK_IMPORTED_MODULE_0__.Component{render(){let child=react__WEBPACK_IMPORTED_MODULE_0__.Children.only(this.props.children);return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child,{ref:r=>{this.innerRef=r instanceof Element?r:react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(r)}})}componentDidMount(){this.props.onMount(this.innerRef)}componentWillUnmount(){this.props.onUnmount&&this.props.onUnmount(this.innerRef)}}},967:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return ValueBox});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(978),_styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(961);const ValueBox=Object(_styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(({children:children,className:className,Icon:Icon,iconPlacement:iconPlacement,variant:variant,colors:colors,fullWidth:fullWidth,theme:theme})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box__WEBPACK_IMPORTED_MODULE_1__.a,{className:className,metrics:theme.spacing.valueBoxMetrics[variant],colors:"string"==typeof colors?theme.colors.valueBox[colors]:colors,Icon:Icon,iconPlacement:iconPlacement,fullWidth:fullWidth},children));ValueBox.defaultProps={variant:"normal",colors:"primary"}},968:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Popover});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(55),react_popper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(131),mobx_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(31),_util_react_DomNodeProxy__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(966);let Popover=class Popover extends react__WEBPACK_IMPORTED_MODULE_1__.Component{render(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_popper__WEBPACK_IMPORTED_MODULE_3__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_popper__WEBPACK_IMPORTED_MODULE_3__.c,null,({ref:ref})=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_util_react_DomNodeProxy__WEBPACK_IMPORTED_MODULE_5__.a,{onMount:el=>ref(el),onUnmount:el=>ref(null)},this.props.children)),this.props.visible?react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal(react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_popper__WEBPACK_IMPORTED_MODULE_3__.b,Object.assign({placement:this.props.placement,modifiers:Object.assign({offset:{offset:`${this.props.alignmentOffset+"px"||!1}, ${this.props.offset}px`}},this.props.noFlip?{flip:{enabled:!1}}:{})},this.props.referenceElement?{referenceElement:this.createReferenceObject()}:{}),({ref:ref,style:style,placement:placement,arrowProps:arrowProps})=>react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{ref:ref,onClick:e=>e.stopPropagation(),style:Object.assign(Object.assign({},style),this.props.style),"data-placement":placement},"function"==typeof this.props.content?this.props.content(placement,arrowProps):this.props.content)),document.body):null)}createReferenceObject(){let referenceEl=this.props.referenceElement;if("function"!=typeof referenceEl)return referenceEl;const getWrapperEl=referenceEl;return{getBoundingClientRect:()=>getWrapperEl()?getWrapperEl().getBoundingClientRect():{bottom:0,left:0,right:0,top:0,height:0,width:0},get clientWidth(){return getWrapperEl()?getWrapperEl().clientWidth:0},get clientHeight(){return getWrapperEl()?getWrapperEl().clientHeight:0}}}};Popover.defaultProps={placement:"top",offset:0},Popover=Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)([mobx_react__WEBPACK_IMPORTED_MODULE_4__.observer],Popover)},973:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return MultiHover});var _puzzl_core_lib_event_EventDispatcher__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(75);const defaultOpts={enterDelay:400,leaveDelay:400};class MultiHover{constructor(opts={}){this.hoveredElements=0,this._onActiveChange=new _puzzl_core_lib_event_EventDispatcher__WEBPACK_IMPORTED_MODULE_0__.a,this.options=Object.assign(Object.assign({},defaultOpts),opts)}get onActiveChange(){return this._onActiveChange.asEvent()}applyOpts(opts){this.options=Object.assign(Object.assign({},this.options),opts)}enter(item){this.hoveredElements++,this.hideTimeoutId&&(clearTimeout(this.hideTimeoutId),this.hideTimeoutId=void 0),this.showTimeoutId=setTimeout(()=>this._onActiveChange.dispatch(this,item),this.options.enterDelay)}leave(){this.hoveredElements--,this.hoveredElements>0||(this.showTimeoutId&&(clearTimeout(this.showTimeoutId),this.showTimeoutId=void 0),this.hideTimeoutId&&clearTimeout(this.hideTimeoutId),this.hideTimeoutId=setTimeout(()=>this._onActiveChange.dispatch(this,void 0),this.options.leaveDelay))}}},975:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),NumberFormatter=__webpack_require__(977);function getNumberSeparator(locale,separatorType){let numberFormat=Intl.NumberFormat(locale);return numberFormat.formatToParts?numberFormat.formatToParts(1000.1).find(part=>part.type===separatorType).value:"group"===separatorType?1e3.toLocaleString().replace(/[0-9]/g,""):1.1.toLocaleString().replace(/[0-9]/g,"")}class BigNumberFormatter_BigNumberFormatter{static getBnFormat(locale){let fmt=this.formats.get(locale);return fmt||(fmt={decimalSeparator:getNumberSeparator(locale,"decimal"),groupSeparator:getNumberSeparator(locale,"group"),groupSize:3},this.formats.set(locale,fmt)),fmt}format(num,locale,options={}){let fmt=BigNumberFormatter_BigNumberFormatter.getBnFormat(locale);if(num=num.decimalPlaces(void 0!==options.maximumFractionDigits?options.maximumFractionDigits:3),void 0!==options.minimumFractionDigits){if(num.decimalPlaces()<options.minimumFractionDigits)return num.toFormat(options.minimumFractionDigits,fmt)}return num.toFormat(fmt)}}BigNumberFormatter_BigNumberFormatter.formats=new Map,__webpack_require__.d(__webpack_exports__,"a",function(){return Number_Number});class Number_Number extends react.Component{render(){let{value:value,locale:locale}=this.props;return"number"!=typeof value?(new BigNumberFormatter_BigNumberFormatter).format(value,locale):(new NumberFormatter.a).format(value,locale)}}},976:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components=__webpack_require__(961);__webpack_require__.d(__webpack_exports__,"a",function(){return Hash_Hash});const HiddenHashPartWrapper=styled_components.b.span.withConfig({displayName:"HiddenHashPartWrapper",componentId:"sc-1cvzrqx"})`
    &:before {
        content: " ... ";
    }
`,HiddenHashPart=styled_components.b.strong.withConfig({displayName:"HiddenHashPart",componentId:"sc-1nxisa2"})`
    display: inline-block;
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
    font-size: 0;
`;class Hash_Hash extends react.PureComponent{constructor(){super(...arguments),this.handleCopy=e=>{e.preventDefault(),e.clipboardData.setData("text/plain","0x"+this.props.children)}}render(){let{children:children}=this.props,hash="0x"+children.replace(/^0x/,""),chars=this.props.ellipsisChars,hashParts=function splitLongHash(hash,threshold,charsShown){return!(hash.length<=threshold||threshold<2*charsShown)&&[hash.substr(0,charsShown),hash.substr(charsShown,hash.length-2*charsShown),hash.substr(-charsShown)]}(hash,this.props.ellipsisThreshold,chars);return react.createElement("span",{onCopy:this.handleCopy},this.props.useEllipsis&&hashParts?react.createElement(react.Fragment,null,hashParts[0],react.createElement(HiddenHashPartWrapper,null,react.createElement(HiddenHashPart,null,hashParts[1])),hashParts[2]):hash)}}Hash_Hash.defaultProps={ellipsisThreshold:20,ellipsisChars:6,useEllipsis:!0}},977:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return NumberFormatter});class NumberFormatter{format(value,locale){return value.toLocaleString(locale)}}},978:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Box});var _styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(961),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0);const IconRoot=_styled_components__WEBPACK_IMPORTED_MODULE_0__.b.div.withConfig({displayName:"IconRoot",componentId:"sc-f5tt8o"})`
    display: block;
    /* Let the parent element handle mouse events (
        because SVG is special and causes problems when used in menu layer with document click outside detection
    ) */
    pointer-events: none;
`,ContentRoot=Object(_styled_components__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"ContentRoot",componentId:"sc-fyzi41"})`
    padding-top: ${props=>props.paddingTop}px;
    white-space: nowrap;

    ${props=>props.fullWidth?_styled_components__WEBPACK_IMPORTED_MODULE_0__.a`
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    `:""}
`,getColors=(colors,theme)=>"function"==typeof colors?colors(theme):colors,Box=Object(_styled_components__WEBPACK_IMPORTED_MODULE_0__.b)(({children:children,className:className,Icon:Icon,iconPlacement:iconPlacement,metrics:metrics,fullWidth:fullWidth})=>{let icon=Icon?react__WEBPACK_IMPORTED_MODULE_1__.createElement(IconRoot,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(Icon,{size:metrics.iconSize})):null,iconIsLeft="left"===iconPlacement;return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:className},iconIsLeft&&icon,void 0!==children?react__WEBPACK_IMPORTED_MODULE_1__.createElement(ContentRoot,{fullWidth:fullWidth,paddingTop:metrics.textPaddingTop},children):null,!iconIsLeft&&icon)}).withConfig({displayName:"Box",componentId:"sc-an678j"})`
    display: flex;
    font-size: ${props=>props.metrics.fontSize}px;
    line-height: ${props=>props.metrics.lineHeight}px;
    height: ${props=>props.metrics.height}px;

    ${props=>props.fullWidth?_styled_components__WEBPACK_IMPORTED_MODULE_0__.a`
    width: 100%;
    `:""}

    padding: 0 ${props=>props.metrics.textPaddingX-1}px;

    ${props=>{if(!props.Icon)return;let hasText=void 0!==props.children,iconTextSpacing=Math.floor(props.metrics.textPaddingX/2),iconMarginY=Math.max(0,(props.metrics.height-props.metrics.iconSize)/2-1),iconMarginX=hasText?iconTextSpacing:iconMarginY,iconIsLeft="left"===props.iconPlacement;return _styled_components__WEBPACK_IMPORTED_MODULE_0__.a`
            ${iconIsLeft?_styled_components__WEBPACK_IMPORTED_MODULE_0__.a`
                padding-left: ${iconMarginX}px;
                    ${hasText?"":_styled_components__WEBPACK_IMPORTED_MODULE_0__.a`
                    padding-right: ${iconMarginX}px;
                    `}
                `:_styled_components__WEBPACK_IMPORTED_MODULE_0__.a`
                padding-right: ${iconMarginX}px;
                    ${hasText?"":_styled_components__WEBPACK_IMPORTED_MODULE_0__.a`
                    padding-left: ${iconMarginX}px;
                    `}
            `}

            & ${IconRoot} {
                margin-top: ${iconMarginY}px;

                ${hasText?_styled_components__WEBPACK_IMPORTED_MODULE_0__.a`
                    ${iconIsLeft?_styled_components__WEBPACK_IMPORTED_MODULE_0__.a`
                        margin-right: ${iconTextSpacing}px;
                        `:_styled_components__WEBPACK_IMPORTED_MODULE_0__.a`
                        margin-left: ${iconTextSpacing}px;`}
                `:""}
            }
        `}}

    font-weight: ${props=>props.metrics.fontWeight};
    letter-spacing: ${props=>props.metrics.letterSpacing};
    box-sizing: border-box;
    vertical-align: middle;

    border: ${1}px solid ${props=>getColors(props.colors,props.theme).border||getColors(props.colors,props.theme).background||"transparent"};
    border-radius: ${props=>props.theme.spacing.borderRadius.thin}px;
    background-color: ${props=>getColors(props.colors,props.theme).background||"transparent"};
    color: ${props=>getColors(props.colors,props.theme).text};
`},979:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Label});var _styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(961),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0);const Label=Object(_styled_components__WEBPACK_IMPORTED_MODULE_0__.b)(({children:children,className:className})=>react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:className},children)).withConfig({displayName:"Label",componentId:"sc-1obk20v"})`
    font-size: 12px;
    line-height: 12px;
    height: 12px;
    text-transform: ${props=>props.uppercase?"uppercase":"none"};
    background-color: ${props=>props.arrow?props.disabled?props.theme.colors.label.disabled:props.theme.colors.base.highlight.color:"transparent"};
    font-weight: 600;
    letter-spacing: .5px;
    padding: 4px 8px;
    margin-right: ${props=>props.arrow?"10px":"0"};
    color: ${props=>props.arrow?props.theme.colors.base.highlight.contrast:props.strong?props.disabled?props.theme.colors.label.disabled:props.theme.colors.label.strong:props.disabled?props.theme.colors.label.disabled:props.theme.colors.label.default};

    /**
     * When is the first label in a row the width of the container (LayoutRowItemWrapper) is 200px + 2*8px padding,
     * and the display: flex along with justify-content: flex-end ensures that the label is right aligned.
     * However, if the label is long enough (bigger than 200px) to wrap, the Label div will occupy all the container
     * width, and the text will be aligned to right thanks to the rule below.
     */
    text-align: right;

    ${props=>props.arrow?_styled_components__WEBPACK_IMPORTED_MODULE_0__.a`
    position: relative;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: -10px;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid ${props.disabled?props.theme.colors.label.disabled:props.theme.colors.base.highlight.color};
        transform: scaleX(.8);
        transform-origin: center left;
    }
    `:""}
`;Label.defaultProps={uppercase:!0}},980:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return TooltipBase});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),mobx_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(31),mobx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),_Popover__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(968),_util_react_DomNodeProxy__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(966),_util_react_MultiHover__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(973);let TooltipBase=class TooltipBase extends react__WEBPACK_IMPORTED_MODULE_1__.Component{constructor(props){super(props),this.visible=!1,this.handleMouseEnter=()=>{this.multiHover.enter(!0)},this.handleMouseLeave=()=>{this.multiHover.leave()},this.multiHover=new _util_react_MultiHover__WEBPACK_IMPORTED_MODULE_6__.a({enterDelay:this.props.showDelay,leaveDelay:this.props.hideDelay}),this.multiHover.onActiveChange.subscribe(visible=>this.visible=visible||!1)}componentDidUpdate(prevProps){this.props.showDelay!==prevProps.showDelay&&this.multiHover.applyOpts({enterDelay:this.props.showDelay}),this.props.hideDelay!==prevProps.hideDelay&&this.multiHover.applyOpts({leaveDelay:this.props.hideDelay})}render(){let _a=this.props,{showDelay:_unused,hideDelay:_unused2,content:content}=_a,otherProps=Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(_a,["showDelay","hideDelay","content"]),target=react__WEBPACK_IMPORTED_MODULE_1__.Children.only(this.props.children);return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Popover__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({visible:this.visible,content:()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},content),style:{background:this.props.backgroundColor,boxShadow:"0 2px 6px 0 rgba(0, 0, 0, .08)",border:this.props.borderColor?"1px solid "+this.props.borderColor:void 0,boxSizing:"border-box",pointerEvents:this.props.nonInteractive?"none":void 0}},otherProps),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_util_react_DomNodeProxy__WEBPACK_IMPORTED_MODULE_5__.a,{onMount:el=>{el.addEventListener("mouseenter",this.handleMouseEnter),el.addEventListener("mouseleave",this.handleMouseLeave)},onUnmount:el=>{el.removeEventListener("mouseenter",this.handleMouseEnter),el.removeEventListener("mouseleave",this.handleMouseLeave)}},target))}};TooltipBase.defaultProps={showDelay:400,hideDelay:400,backgroundColor:"#fff"},Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)([mobx__WEBPACK_IMPORTED_MODULE_3__.observable],TooltipBase.prototype,"visible",void 0),TooltipBase=Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)([mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer],TooltipBase)},981:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return IconButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(961);const IconButtonRoot=Object(_styled_components__WEBPACK_IMPORTED_MODULE_1__.b)("button").withConfig({displayName:"IconButtonRoot",componentId:"sc-99n0e5"})`
    display: block;
    background-color: transparent;
    border: none; /* Remove borders */
    color: ${({buttonColor:buttonColor,theme:theme})=>buttonColor};
    cursor: pointer;
    outline: none;
    padding: 0px;
`;const IconButton=Object(_styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(class $IconButton extends react__WEBPACK_IMPORTED_MODULE_0__.Component{render(){let Icon=this.props.Icon,theme=this.props.theme,iconSize=this.props.iconSize,color="function"==typeof this.props.color?this.props.color(theme):this.props.color;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconButtonRoot,{onClick:this.props.onClick,className:this.props.className,buttonColor:color},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon,{color:color,size:iconSize}))}})}}]);
//# sourceMappingURL=5.4c9b9f1c7bc46b747648.bundle.js.map
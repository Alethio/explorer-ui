(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1009:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return HighlightFields});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),mobx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4);class HighlightFields{getFields(){return this.fields}getSelectedField(){return this.selectedField}setSelectedField(key){const field=this.fields.find(f=>key===f.key);field&&(this.selectedField=field)}}Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)([mobx__WEBPACK_IMPORTED_MODULE_1__.observable],HighlightFields.prototype,"selectedField",void 0),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)([mobx__WEBPACK_IMPORTED_MODULE_1__.action],HighlightFields.prototype,"setSelectedField",null)},1058:function(module,__webpack_exports__,__webpack_require__){"use strict";var tslib_es6=__webpack_require__(7),react=__webpack_require__(0),react_default=__webpack_require__.n(react),index_module=__webpack_require__(31),Dropdown=__webpack_require__(995),Menu=__webpack_require__(989),mobx_module=__webpack_require__(4),styled_components=__webpack_require__(961),data_Number=__webpack_require__(975),SvgIcon=__webpack_require__(965);class ArrowDownIcon_ArrowDownIcon extends react.Component{render(){return react.createElement(SvgIcon.a,Object.assign({},this.props),react.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},react.createElement("polygon",{points:"0 0 24 0 24 24 0 24"}),react.createElement("polygon",{fill:"currentColor",fillRule:"nonzero",points:"16.59 8.59 12 13.17 7.41 8.59 6 10 12 16 18 10"})))}}const ExpanderIconRoot=Object(styled_components.b)("div").withConfig({displayName:"ExpanderIconRoot",componentId:"sc-15ubz3y"})`
    display: inline-block;
    color: ${props=>props.expanded?props.theme.colors.expanderOpenIcon:props.theme.colors.expanderIcon};
    padding: 2px 8px 2px 8px;
    ${props=>props.getColor?styled_components.a`
    background-color: ${props.getColor(props.theme)}
    border: 1px solid ${props.getColor(props.theme)}
    border-radius: 0 2px 2px 0;
    `:""}
`,Icon=Object(styled_components.b)("div").withConfig({displayName:"Icon",componentId:"sc-7y2jrc"})`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform .2s ease-in-out;
    ${props=>props.expanded?styled_components.a`
    transform: rotate(-180deg);
    `:""}
`;class ExpanderBaseIcon_ExpanderBaseIcon extends react.PureComponent{render(){return react.createElement(ExpanderIconRoot,Object.assign({},this.props),react.createElement(Icon,Object.assign({},this.props),react.createElement(ArrowDownIcon_ArrowDownIcon,null)))}}const getColors=(colors,theme)=>"function"==typeof colors?colors(theme):colors,ExpanderRoot=Object(styled_components.b)("div").withConfig({displayName:"ExpanderRoot",componentId:"sc-15uud0b"})`
    display: flex;
    cursor: ${props=>props.disabled?"default":"pointer"};
    user-select: none;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.04);
    transition: background-color .2s ease-in-out, border-color .2s ease-in-out;

    font-size: ${props=>props.theme.spacing.expander.fontSize}px;
    line-height: ${props=>props.theme.spacing.expander.lineHeight}px;
    font-weight: ${props=>props.theme.spacing.expander.fontWeight};
    letter-spacing: ${props=>props.theme.spacing.expander.letterSpacing};

    border: 1px solid ${props=>getColors(props.colors,props.theme).border||getColors(props.colors,props.theme).background||"transparent"};
    border-radius: ${props=>props.theme.spacing.borderRadius.thin}px;
    align-items: center;
    color: ${props=>getColors(props.colors,props.theme).text};
    background-color: ${props=>getColors(props.colors,props.theme).background||"transparent"};

    & > * { margin-left: 16px;}
`,ExpanderLabel=Object(styled_components.b)("div").withConfig({displayName:"ExpanderLabel",componentId:"sc-2fxby7"})`
    ${props=>props.fullWidth?styled_components.a`
    width: 100%;
    `:""}
    margin-right: 20px;
`,ExpanderValue=Object(styled_components.b)("span").withConfig({displayName:"ExpanderValue",componentId:"sc-1ux38r5"})`
    color: ${props=>props.disabled?props.theme.colors.expanderDisabled:props.open?props.theme.colors.expanderOpenValue:props.theme.colors.expanderValue};
    margin-left: 8px; /* these could be also 16px */
    margin-right: 8px; /* these could be also 16px */
`,ExpanderContent=Object(styled_components.b)("div").withConfig({displayName:"ExpanderContent",componentId:"sc-ge5xjv"})`
    display: flex;
    align-items: center;
    ${props=>props.fullWidth?styled_components.a`
    width: 100%;

    & ${ExpanderValue} {
        flex-grow: 1;
        text-align: right;
    }
    `:""}
`,hasPropsWithValue=props=>void 0!==props.value;class ExpanderBase_ExpanderBase extends react.Component{constructor(){super(...arguments),this.handleClick=()=>{this.props.onClick&&!this.props.disabled&&this.props.onClick()}}render(){let value,locale;hasPropsWithValue(this.props)&&(value=this.props.value,locale=this.props.locale);let{label:label,open:open,disabled:disabled,colors:colors,iconColor:iconColor}=this.props;return react.createElement(ExpanderRoot,{onClick:this.handleClick,disabled:disabled,colors:colors},react.createElement(ExpanderContent,{fullWidth:this.props.fullWidth},react.createElement(ExpanderLabel,{fullWidth:this.props.fullWidth},label),void 0!==value?react.createElement(ExpanderValue,{open:open,disabled:disabled},react.createElement(data_Number.a,{locale:locale,value:value})):null,react.createElement(ExpanderBaseIcon_ExpanderBaseIcon,{expanded:open,getColor:iconColor})))}componentDidUpdate(prevProps){if(prevProps.label!==this.props.label||prevProps.value!==this.props.value){const onResize=this.props.onResize;onResize&&setTimeout(onResize)}}}const ExpanderSelect_hasPropsWithValue=props=>void 0!==props.value;class ExpanderSelect_ExpanderSelect extends react_default.a.Component{render(){let value,locale,{label:label,open:open,disabled:disabled,onClick:onClick,fullWidth:fullWidth}=this.props;return ExpanderSelect_hasPropsWithValue(this.props)&&(value=this.props.value,locale=this.props.locale),react_default.a.createElement(ExpanderBase_ExpanderBase,{label:label,open:open,fullWidth:fullWidth,onClick:onClick,value:value,locale:locale,disabled:disabled,colors:theme=>({background:open?theme.colors.select.expander.openBg:theme.colors.select.expander.bg,border:disabled?theme.colors.select.expander.disabled:theme.colors.select.expander.border,text:disabled?theme.colors.select.expander.disabled:open?theme.colors.select.expander.openLabel:theme.colors.select.expander.label}),iconColor:theme=>open?theme.colors.select.expander.openIcon:theme.colors.select.expander.Icon})}}class EmptyIcon_EmptyIcon extends react.Component{render(){return react.createElement(SvgIcon.a,Object.assign({},this.props),react.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},react.createElement("rect",{x:"0",y:"0",width:"24",height:"24"})))}}let Select_Select=class Select extends react.Component{constructor(props){super(props),this.getOptionLabel=value=>{let{children:children}=this.props,selectedOption=react.Children.toArray(children).find(option=>option.props.value===value);return selectedOption?selectedOption.props.children:""},this.updateSelectValue(props.value,props.children)}componentDidUpdate(prevProps){this.props.value===prevProps.value&&this.props.children===prevProps.children||this.updateSelectValue(this.props.value,this.props.children)}updateSelectValue(value,children){if(void 0===value){let selectedOption=react.Children.toArray(children).find(option=>option.props.selected);value=selectedOption?selectedOption.props.value:""}this.selected=value}render(){let{placeholder:placeholder,fullWidth:fullWidth,disabled:disabled,children:children}=this.props,isIconPresent=!!react.Children.toArray(children).find(option=>option.props.Icon);return react.createElement(Dropdown.a,{renderMenu:onSelectItem=>react.createElement(Menu.a,null,react.Children.map(children,option=>react.cloneElement(option,{Icon:isIconPresent?option.props.Icon||EmptyIcon_EmptyIcon:option.props.Icon,selected:option.props.value===this.selected,onClick:()=>onSelectItem(option)}))),popoverProps:{style:{zIndex:this.props.menuZIndex}},onSelect:option=>{this.selected=option.props.value,this.props.onSelect&&this.props.onSelect(this.selected)}},({requestToggle:requestToggle,isOpen:isOpen})=>react.createElement(ExpanderSelect_ExpanderSelect,{open:isOpen,onClick:requestToggle,fullWidth:fullWidth,disabled:disabled,label:this.selected&&this.getOptionLabel(this.selected)||placeholder}))}};Select_Select.defaultProps={placeholder:"Choose an option",menuZIndex:9999},Object(tslib_es6.b)([mobx_module.observable],Select_Select.prototype,"selected",void 0),Select_Select=Object(tslib_es6.b)([index_module.observer],Select_Select);var MenuItem=__webpack_require__(996);class Option_Option extends react.Component{render(){return react.createElement(MenuItem.a,Object.assign({},this.props))}}__webpack_require__.d(__webpack_exports__,"a",function(){return TxHighlightSelector_TxHighlightSelector});let TxHighlightSelector_TxHighlightSelector=class TxHighlightSelector extends react.Component{constructor(){super(...arguments),this.onCheckboxChange=value=>this.props.fields.setSelectedField(value)}render(){let{translation:tr}=this.props;return react.createElement(Select_Select,{disabled:this.props.disabled,value:this.props.fields.getSelectedField().key,onSelect:this.onCheckboxChange},()=>this.props.fields.getFields().map(f=>react.createElement(Option_Option,{key:f.key,value:f.key},f.getLabel(tr))))}};TxHighlightSelector_TxHighlightSelector=Object(tslib_es6.b)([index_module.observer],TxHighlightSelector_TxHighlightSelector);try{TxHighlightSelector_TxHighlightSelector.displayName="TxHighlightSelector",TxHighlightSelector_TxHighlightSelector.__docgenInfo={description:"",displayName:"TxHighlightSelector",props:{fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"HighlightFields<TItem, THighlightFieldKey>"}},translation:{defaultValue:null,description:"",name:"translation",required:!0,type:{name:"ITranslation"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/blockTxs/txHighlight/TxHighlightSelector.tsx#TxHighlightSelector"]={docgenInfo:TxHighlightSelector_TxHighlightSelector.__docgenInfo,name:"TxHighlightSelector",path:"src/blockTxs/txHighlight/TxHighlightSelector.tsx#TxHighlightSelector"})}catch(__react_docgen_typescript_loader_error){}},953:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"withStorySource",function(){return withStorySource}),__webpack_require__.d(__webpack_exports__,"__STORY__",function(){return __STORY__}),__webpack_require__.d(__webpack_exports__,"__ADDS_MAP__",function(){return __ADDS_MAP__});var TxHighlightFieldKey,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(99),_TxHighlightSelector__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1058),_HighlightFields__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1009),_alethio_cms__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(416),withStorySource=__webpack_require__(963).withStorySource,__STORY__="import React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport { TxHighlightSelector } from './TxHighlightSelector';\nimport { HighlightFields } from './HighlightFields';\nimport { Translation } from '@alethio/cms';\n\nenum TxHighlightFieldKey {\n  Value = 'value',\n}\n\ninterface ITxData {\n  hash: string;\n  value: number;\n}\n\nclass TxHighlightFields extends HighlightFields<ITxData, TxHighlightFieldKey> {\n  constructor() {\n    super();\n    this.fields = [\n      {\n        key: TxHighlightFieldKey.Value,\n        getLabel: t => t.get('value'),\n        getData: d => d.value,\n      },\n    ];\n    this.setSelectedField(TxHighlightFieldKey.Value);\n  }\n}\n\nlet translation = new Translation({\n  value: 'Value',\n});\n\nstoriesOf('block txs/' + TxHighlightSelector.name, module)\n  .addDecorator(s => <div style={{ display: 'flex', padding: 16 }}>{s()}</div>)\n  .add('default', () => (\n    <TxHighlightSelector\n      fields={new TxHighlightFields()}\n      translation={translation}\n    ></TxHighlightSelector>\n  ));\n",__ADDS_MAP__={};!function(TxHighlightFieldKey){TxHighlightFieldKey.Value="value"}(TxHighlightFieldKey||(TxHighlightFieldKey={}));class TxHighlightFields extends _HighlightFields__WEBPACK_IMPORTED_MODULE_3__.a{constructor(){super(),this.fields=[{key:TxHighlightFieldKey.Value,getLabel:t=>t.get("value"),getData:d=>d.value}],this.setSelectedField(TxHighlightFieldKey.Value)}}let translation=new _alethio_cms__WEBPACK_IMPORTED_MODULE_4__.b({value:"Value"});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("block txs/"+_TxHighlightSelector__WEBPACK_IMPORTED_MODULE_2__.a.name,module).addDecorator(withStorySource(__STORY__,__ADDS_MAP__)).addDecorator(s=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{display:"flex",padding:16}},s())).add("default",()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TxHighlightSelector__WEBPACK_IMPORTED_MODULE_2__.a,{fields:new TxHighlightFields,translation:translation}))}.call(this,__webpack_require__(185)(module))}}]);
//# sourceMappingURL=14.4c9b9f1c7bc46b747648.bundle.js.map
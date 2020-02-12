(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1028:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return GridFields});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),mobx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4);class GridFields{get gridFields(){return this.fields}get selectedGridFields(){return this.fields.filter(f=>f.selected)}setColumnSelect(key,select){const field=this.fields.find(f=>key===f.fieldKey);field&&(field.selected=select)}get defaultSortedField(){}}Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)([mobx__WEBPACK_IMPORTED_MODULE_1__.observable],GridFields.prototype,"fields",void 0),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)([mobx__WEBPACK_IMPORTED_MODULE_1__.computed],GridFields.prototype,"gridFields",null),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)([mobx__WEBPACK_IMPORTED_MODULE_1__.computed],GridFields.prototype,"selectedGridFields",null),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)([mobx__WEBPACK_IMPORTED_MODULE_1__.action],GridFields.prototype,"setColumnSelect",null)},1029:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return GridSortingOptions});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),mobx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_GridSortingOrder__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(982);class GridSortingOptions{constructor(field){this._sortField=void 0,this._sortOrder=_GridSortingOrder__WEBPACK_IMPORTED_MODULE_2__.a.Default,this.orderCycle=[_GridSortingOrder__WEBPACK_IMPORTED_MODULE_2__.a.Ascending,_GridSortingOrder__WEBPACK_IMPORTED_MODULE_2__.a.Descending,_GridSortingOrder__WEBPACK_IMPORTED_MODULE_2__.a.Default],field&&(this.field=field,this.order=field.defaultSortOrder?field.defaultSortOrder:_GridSortingOrder__WEBPACK_IMPORTED_MODULE_2__.a.Ascending)}get field(){return this._sortField}set field(k){this._sortField=k}get order(){return this._sortOrder}set order(o){this._sortOrder=o}resetField(){this._sortField=void 0}setAscendingOrder(){this._sortOrder=_GridSortingOrder__WEBPACK_IMPORTED_MODULE_2__.a.Ascending}setDescendingOrder(){this._sortOrder=_GridSortingOrder__WEBPACK_IMPORTED_MODULE_2__.a.Descending}setNextOrder(){const idx=this.orderCycle.indexOf(this._sortOrder);this._sortOrder=this.orderCycle[(idx+1)%this.orderCycle.length]}}Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)([mobx__WEBPACK_IMPORTED_MODULE_1__.observable],GridSortingOptions.prototype,"_sortField",void 0),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)([mobx__WEBPACK_IMPORTED_MODULE_1__.observable],GridSortingOptions.prototype,"_sortOrder",void 0)},1031:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return HashRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_Hash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(976);class HashRenderer{constructor(gridFieldDataGetter){this.gridFieldDataGetter=gridFieldDataGetter}render(f){let hash=this.gridFieldDataGetter(f);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Hash__WEBPACK_IMPORTED_MODULE_1__.a,null,hash)}}},1056:function(module,__webpack_exports__,__webpack_require__){"use strict";var tslib_es6=__webpack_require__(7),react=__webpack_require__(0),styled_components=__webpack_require__(961),index_module=__webpack_require__(31),mobx_module=__webpack_require__(4);const GridLayout=Object(styled_components.b)("div").withConfig({displayName:"GridLayout",componentId:"sc-aptxge"})`
    overflow-x: auto;
    display: grid;
    grid-template-columns: auto ${({numberOfFields:numberOfFields})=>{if(0===numberOfFields)return"";if(1===numberOfFields)return"max-content";return"repeat( "+(numberOfFields-1)+", max-content 1px) max-content"}} auto;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: .2px;
`;var GridSortingOrder=__webpack_require__(982),SvgIcon=__webpack_require__(965);class AddIcon_AddIcon extends react.Component{render(){return react.createElement(SvgIcon.a,Object.assign({},this.props),react.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},react.createElement("polygon",{points:"0 0 24 0 24 24 0 24"}),react.createElement("path",{d:"M19,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 Z M17,13 L13,13 L13,17 L11,17 L11,13 L7,13 L7,11 L11,11 L11,7 L13,7 L13,11 L17,11 L17,13 Z",fill:"currentColor",fillRule:"nonzero"})))}}var Dropdown=__webpack_require__(995),Menu=__webpack_require__(989),MenuItem=__webpack_require__(996),IconButton=__webpack_require__(981);class CheckboxOnIcon_CheckboxOnIcon extends react.Component{render(){return react.createElement(SvgIcon.a,Object.assign({},this.props),react.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},react.createElement("polygon",{points:"0 0 24 0 24 24 0 24"}),react.createElement("path",{d:"M9.1277704,4 L14.8722296,4 C16.6552671,4 17.3018396,4.18565122 17.9536914,4.53426541 C18.6055433,4.88287959 19.1171204,5.39445674 19.4657346,6.04630859 C19.8143488,6.69816044 20,7.34473292 20,9.1277704 L20,14.8722296 C20,16.6552671 19.8143488,17.3018396 19.4657346,17.9536914 C19.1171204,18.6055433 18.6055433,19.1171204 17.9536914,19.4657346 C17.3018396,19.8143488 16.6552671,20 14.8722296,20 L9.1277704,20 C7.34473292,20 6.69816044,19.8143488 6.04630859,19.4657346 C5.39445674,19.1171204 4.88287959,18.6055433 4.53426541,17.9536914 C4.18565122,17.3018396 4,16.6552671 4,14.8722296 L4,9.1277704 C4,7.34473292 4.18565122,6.69816044 4.53426541,6.04630859 C4.88287959,5.39445674 5.39445674,4.88287959 6.04630859,4.53426541 C6.69816044,4.18565122 7.34473292,4 9.1277704,4 Z M15,8.5 L10.51,13 L8.5,11 L7,12.5 L10.51,16 L16.5,10 L15,8.5 Z",fill:"currentColor",fillRule:"nonzero"})))}}class CheckboxOffIcon_CheckboxOffIcon extends react.Component{render(){return react.createElement(SvgIcon.a,Object.assign({},this.props),react.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},react.createElement("polygon",{points:"0 0 24 0 24 24 0 24"}),react.createElement("path",{d:"M9.1277704,4 L14.8722296,4 C16.6552671,4 17.3018396,4.18565122 17.9536914,4.53426541 C18.6055433,4.88287959 19.1171204,5.39445674 19.4657346,6.04630859 C19.8143488,6.69816044 20,7.34473292 20,9.1277704 L20,14.8722296 C20,16.6552671 19.8143488,17.3018396 19.4657346,17.9536914 C19.1171204,18.6055433 18.6055433,19.1171204 17.9536914,19.4657346 C17.3018396,19.8143488 16.6552671,20 14.8722296,20 L9.1277704,20 C7.34473292,20 6.69816044,19.8143488 6.04630859,19.4657346 C5.39445674,19.1171204 4.88287959,18.6055433 4.53426541,17.9536914 C4.18565122,17.3018396 4,16.6552671 4,14.8722296 L4,9.1277704 C4,7.34473292 4.18565122,6.69816044 4.53426541,6.04630859 C4.88287959,5.39445674 5.39445674,4.88287959 6.04630859,4.53426541 C6.69816044,4.18565122 7.34473292,4 9.1277704,4 Z M8.5638852,6 C7.67236646,6 7.34908022,6.09282561 7.0231543,6.2671327 C6.69722837,6.4414398 6.4414398,6.69722837 6.2671327,7.0231543 C6.09282561,7.34908022 6,7.67236646 6,8.5638852 L6,15.4361148 C6,16.3276335 6.09282561,16.6509198 6.2671327,16.9768457 C6.4414398,17.3027716 6.69722837,17.5585602 7.0231543,17.7328673 C7.34908022,17.9071744 7.67236646,18 8.5638852,18 L15.4361148,18 C16.3276335,18 16.6509198,17.9071744 16.9768457,17.7328673 C17.3027716,17.5585602 17.5585602,17.3027716 17.7328673,16.9768457 C17.9071744,16.6509198 18,16.3276335 18,15.4361148 L18,8.5638852 C18,7.67236646 17.9071744,7.34908022 17.7328673,7.0231543 C17.5585602,6.69722837 17.3027716,6.4414398 16.9768457,6.2671327 C16.6509198,6.09282561 16.3276335,6 15.4361148,6 L8.5638852,6 Z",fill:"currentColor"})))}}const StyledInput=styled_components.b.input.withConfig({displayName:"StyledInput",componentId:"sc-yey14m"})`
    pointer-events: none;
    opacity: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
`,ToggleInputWrapper=styled_components.b.div.withConfig({displayName:"ToggleInputWrapper",componentId:"sc-15nef3q"})`
    padding: 4px 0 4px 24px;
    min-height: 24px;
    box-sizing: border-box;
    position: relative;
`,ToggleInputLabel=styled_components.b.label.withConfig({displayName:"ToggleInputLabel",componentId:"sc-swbdu1"})`
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: ${({theme:theme,disabled:disabled})=>disabled?theme.colors.base.disabled:theme.colors.base.primary.color};
`,ToggleInputLabelText=styled_components.b.div.withConfig({displayName:"ToggleInputLabelText",componentId:"sc-13s0bxy"})`
    margin-left: 4px;
`,ToggleInputIconWrapper=styled_components.b.div.withConfig({displayName:"ToggleInputIconWrapper",componentId:"sc-1wd0gtq"})`
    position: absolute;
    top: 0;
    left: 0;
    color: ${({theme:theme,disabled:disabled,checked:checked})=>disabled?theme.colors.base.disabled:checked?theme.colors.base.accent.color:theme.colors.base.primary.color};
`;class ToggleInput_ToggleInput extends react.PureComponent{constructor(){super(...arguments),this.onChange=event=>{this.props.onChange&&!this.props.disabled&&this.props.onChange(event,"radio"===this.props.type||!this.props.checked,this.props.name,this.props.value)}}render(){let{id:id,type:type,name:name,value:value,required:required,disabled:disabled,checked:checked,Icon:Icon,children:children}=this.props;return react.createElement(ToggleInputWrapper,null,react.createElement(ToggleInputLabel,{disabled:disabled,checked:checked||!1},react.createElement(ToggleInputIconWrapper,{disabled:disabled,checked:checked||!1},react.createElement(StyledInput,{type:type,id:id,name:name,value:value,checked:checked||!1,required:required,disabled:disabled,onChange:this.onChange}),Icon(checked||!1)),children&&react.createElement(ToggleInputLabelText,null,children)))}}class Checkbox_Checkbox extends react.PureComponent{render(){return react.createElement(ToggleInput_ToggleInput,Object.assign({},this.props,{type:"checkbox",Icon:checked=>checked?react.createElement(CheckboxOnIcon_CheckboxOnIcon,null):react.createElement(CheckboxOffIcon_CheckboxOffIcon,null)}))}}class GridColumnSelector_GridColumnSelector extends react.PureComponent{render(){return react.createElement("div",{style:{padding:"4px"}},react.createElement(Dropdown.a,{renderMenu:onSelectItem=>react.createElement(Menu.a,null,this.props.fields.map(f=>react.createElement(MenuItem.a,{Icon:()=>react.createElement(Checkbox_Checkbox,{checked:f.selected,disabled:f.alwaysVisible}),key:f.fieldKey,onClick:()=>onSelectItem(f),disabled:f.alwaysVisible},f.label))),onSelect:this.props.onChange,closeOnSelect:!1},({requestToggle:requestToggle})=>react.createElement(IconButton.a,{Icon:AddIcon_AddIcon,color:theme=>theme.colors.gridColumnSelector,onClick:requestToggle})))}}const HeaderSpacer=styled_components.b.div.withConfig({displayName:"HeaderSpacer",componentId:"sc-10aqbav"})`
    border-bottom: 1px solid ${props=>props.theme.colors.gridBorder};
    background-color: ${props=>props.theme.colors.gridEvenRowBg};
    display: flex;
`,HeaderSpacerLeft=Object(styled_components.b)(HeaderSpacer).withConfig({displayName:"HeaderSpacerLeft",componentId:"sc-x5n45g"})``,HeaderSpacerRight=Object(styled_components.b)(HeaderSpacer).withConfig({displayName:"HeaderSpacerRight",componentId:"sc-ldb37k"})`
    justify-content: flex-end;
`,HeaderVertBorder=styled_components.b.div.withConfig({displayName:"HeaderVertBorder",componentId:"sc-k77cvl"})`
    background-color: ${props=>props.theme.colors.gridBorder};
    height: 100%;
    align-self: end;
`;class GridHeader_GridHeader extends react.PureComponent{render(){const propsChildren=react.Children.toArray(this.props.children),resultChildren=propsChildren.reduce((acc,c,i)=>(acc.push(react.createElement("span",{key:-i-1},c)),i!==propsChildren.length-1&&acc.push(react.createElement(HeaderVertBorder,{key:i+1})),acc),[react.createElement(HeaderSpacerLeft,{key:0},react.createElement(GridColumnSelector_GridColumnSelector,{onChange:field=>{this.props.onFieldsChange(field)},fields:this.props.fields}),this.props.extraElements&&this.props.extraElements.left)]);return resultChildren.push(react.createElement(HeaderSpacerRight,{key:propsChildren.length+1},this.props.extraElements&&this.props.extraElements.right)),resultChildren}}const Spacer=Object(styled_components.b)("div").withConfig({displayName:"Spacer",componentId:"sc-rbtu2a"})`
    background-color: ${({odd:odd,theme:theme})=>odd?theme.colors.gridOddRowBg:theme.colors.gridEvenRowBg};
`,Item=Object(styled_components.b)("div").withConfig({displayName:"Item",componentId:"sc-533s6z"})`
    padding: ${8}px ${32}px;
    background-color: ${({odd:odd,theme:theme})=>odd?theme.colors.gridOddRowBg:theme.colors.gridEvenRowBg};
`,VertBorder=styled_components.b.div.withConfig({displayName:"VertBorder",componentId:"sc-1gjw8rh"})`
    background-color: ${props=>props.theme.colors.gridBorder};
`;class GridRow_GridRow extends react.PureComponent{render(){const propsChildren=react.Children.toArray(this.props.children),resultChildren=propsChildren.reduce((acc,c,i)=>(acc.push(react.createElement(Item,{odd:this.props.odd,key:-i-1},c)),i!==propsChildren.length-1&&acc.push(react.createElement(VertBorder,{key:i+1})),acc),[react.createElement(Spacer,{odd:this.props.odd,key:0})]);return resultChildren.push(react.createElement(Spacer,{odd:this.props.odd,key:propsChildren.length+1})),resultChildren}}var Label=__webpack_require__(979);const GridHeaderHitBox=styled_components.b.div.withConfig({displayName:"GridHeaderHitBox",componentId:"sc-1b5w8mr"})`
`,HeaderItem=Object(styled_components.b)("div").withConfig({displayName:"HeaderItem",componentId:"sc-1xk67nx"})`
    background: ${props=>props.theme.colors.gridEvenRowBg};
    padding: 10px 8px 10px 32px;
    border-bottom: 1px solid ${props=>props.theme.colors.gridBorder};
    cursor: ${props=>props.isSortable?"pointer":"default"};
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${props=>props.isSortable?styled_components.a`
        & ${Label.a} {
            padding: 0;
            ${GridHeaderHitBox}:hover & {
                color: ${props.theme.colors.gridHeaderHover};
            }
        }
    `:styled_components.a`
        & ${Label.a} {
            padding: 0;
        }
    `}
`,ArrowDown=styled_components.b.div.withConfig({displayName:"ArrowDown",componentId:"sc-1h5wflz"})`
    border-top: 5px solid ${props=>props.theme.colors.selectBoxArrow};
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    margin: 0 7px;
    ${GridHeaderHitBox}:hover & {
        border-top-color: ${props=>props.theme.colors.gridHeaderHover};;
    }
`,ArrowUp=styled_components.b.div.withConfig({displayName:"ArrowUp",componentId:"sc-7i1cva"})`
    border-bottom: 5px solid ${props=>props.theme.colors.selectBoxArrow};
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    margin: 0 7px;
    ${GridHeaderHitBox}:hover & {
        border-bottom-color: ${props=>props.theme.colors.gridHeaderHover};;
    }
`,NoArrow=styled_components.b.div.withConfig({displayName:"NoArrow",componentId:"sc-bp2nzo"})`
    width: 24px;
`;let GridHeaderItem_GridHeaderItem=class GridHeaderItem extends react.Component{constructor(){super(...arguments),this.onClick=()=>{this.props.onClick&&this.props.onClick(this.props.field)}}render(){return react.createElement(GridHeaderHitBox,null,react.createElement(HeaderItem,{onClick:this.onClick,isSortable:this.props.field.isSortable},react.createElement(Label.a,null,this.props.children),this.getHeaderSortArrow()))}getHeaderSortArrow(){return this.props.sortingOptions&&this.props.sortingOptions.field===this.props.field?this.props.sortingOptions.order===GridSortingOrder.a.Ascending?react.createElement(ArrowUp,null):this.props.sortingOptions.order===GridSortingOrder.a.Descending?react.createElement(ArrowDown,null):react.createElement(NoArrow,null):react.createElement(NoArrow,null)}};GridHeaderItem_GridHeaderItem=Object(tslib_es6.b)([index_module.observer],GridHeaderItem_GridHeaderItem);const Wrapper=styled_components.b.div.withConfig({displayName:"Wrapper",componentId:"sc-wfj9sf"})`
    border-top: 1px solid ${props=>props.theme.colors.gridBorder};
    border-bottom: 1px solid ${props=>props.theme.colors.gridBorder};
`,GridWrapper=({children:children})=>react.createElement(Wrapper,null,children),GridData=Object(styled_components.b)("div").withConfig({displayName:"GridData",componentId:"sc-nc0gfp"})`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: ${({dataType:dataType})=>"number"===dataType?"flex-end":"auto"};
`;__webpack_require__.d(__webpack_exports__,"a",function(){return Grid_Grid});const LoadMoreRows=styled_components.b.div.withConfig({displayName:"LoadMoreRows",componentId:"sc-t370f6"})`
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    padding: 8px;
    cursor: pointer;
`,NoRowsAvailable=styled_components.b.div.withConfig({displayName:"NoRowsAvailable",componentId:"sc-1ngfcy9"})`
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    padding: 8px;
`;let Grid_Grid=class Grid extends react.Component{constructor(props){super(props),this.dataItemRenderer=(f,row)=>{if(f.renderer)return react.createElement(GridData,{key:f.fieldKey,dataType:f.type},"function"==typeof f.renderer?f.renderer(row.data):f.renderer.render(row.data));let data=f.getFieldValue(row.data).toString();return react.createElement(GridData,{key:f.fieldKey,dataType:f.type},data)},this.changeSorting=field=>{this.props.sortingOptions.field!==field?this.props.sortingOptions.setAscendingOrder():this.props.sortingOptions.setNextOrder(),void 0!==field&&(this.props.sortingOptions.field=field)},this.setColumnSelect=field=>{this.props.fields.setColumnSelect(field.fieldKey,!field.selected)},this.loadMoreRows=()=>{this.visibleRows<this.props.rows.length&&(this.visibleRows+=50)},this.updateVisibleRows()}componentDidUpdate(prevProps){this.props.limitRows===prevProps.limitRows&&this.props.maxVisibleRows===prevProps.maxVisibleRows||this.updateVisibleRows()}updateVisibleRows(){this.visibleRows=this.props.limitRows?this.props.maxVisibleRows:Number.POSITIVE_INFINITY}render(){const sortedRows=this.getSortedRows();return react.createElement(react.Fragment,null,react.createElement(GridWrapper,null,react.createElement(GridLayout,{numberOfFields:this.props.fields.selectedGridFields.length},react.createElement(GridHeader_GridHeader,{onFieldsChange:this.setColumnSelect,fields:this.props.fields.gridFields,extraElements:this.props.extraHeaderElements},this.props.fields.selectedGridFields.map(f=>react.createElement(GridHeaderItem_GridHeaderItem,{key:f.fieldKey,field:f,onClick:f.isSortable?this.changeSorting:void 0,sortingOptions:this.props.sortingOptions},f.label))),sortedRows.slice(0,this.visibleRows).map((row,idx)=>react.createElement(GridRow_GridRow,{odd:!(idx%2),key:row.key},this.props.fields.selectedGridFields.map(f=>this.dataItemRenderer(f,row)))))),this.visibleRows<this.props.rows.length?react.createElement(LoadMoreRows,{onClick:this.loadMoreRows},this.props.loadMoreText):null,0===this.props.rows.length?react.createElement(NoRowsAvailable,null,this.props.noDataText):null)}getSortedRows(){const sortOpts=this.props.sortingOptions;return void 0===sortOpts.field||sortOpts.order===GridSortingOrder.a.Default?this.props.rows:[...this.props.rows].sort((a,b)=>{if(void 0===sortOpts.field||sortOpts.order===GridSortingOrder.a.Default)return-1;const aValue=sortOpts.field.getFieldValue(a.data),bValue=sortOpts.field.getFieldValue(b.data),compResult="string"!=typeof aValue&&"number"!=typeof aValue?aValue.comparedTo(bValue):this.defaultComparator(aValue,bValue);return sortOpts.order===GridSortingOrder.a.Ascending?compResult:-1*compResult})}defaultComparator(a,b){return a===b?0:a<b?-1:1}};Grid_Grid.defaultProps={maxVisibleRows:50,limitRows:!0},Object(tslib_es6.b)([mobx_module.observable],Grid_Grid.prototype,"visibleRows",void 0),Grid_Grid=Object(tslib_es6.b)([index_module.observer],Grid_Grid)},976:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components=__webpack_require__(961);__webpack_require__.d(__webpack_exports__,"a",function(){return Hash_Hash});const HiddenHashPartWrapper=styled_components.b.span.withConfig({displayName:"HiddenHashPartWrapper",componentId:"sc-1cvzrqx"})`
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
`;class Hash_Hash extends react.PureComponent{constructor(){super(...arguments),this.handleCopy=e=>{e.preventDefault(),e.clipboardData.setData("text/plain","0x"+this.props.children)}}render(){let{children:children}=this.props,hash="0x"+children.replace(/^0x/,""),chars=this.props.ellipsisChars,hashParts=function splitLongHash(hash,threshold,charsShown){return!(hash.length<=threshold||threshold<2*charsShown)&&[hash.substr(0,charsShown),hash.substr(charsShown,hash.length-2*charsShown),hash.substr(-charsShown)]}(hash,this.props.ellipsisThreshold,chars);return react.createElement("span",{onCopy:this.handleCopy},this.props.useEllipsis&&hashParts?react.createElement(react.Fragment,null,hashParts[0],react.createElement(HiddenHashPartWrapper,null,react.createElement(HiddenHashPart,null,hashParts[1])),hashParts[2]):hash)}}Hash_Hash.defaultProps={ellipsisThreshold:20,ellipsisChars:6,useEllipsis:!0}},979:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Label});var _styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(961),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0);const Label=Object(_styled_components__WEBPACK_IMPORTED_MODULE_0__.b)(({children:children,className:className})=>react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:className},children)).withConfig({displayName:"Label",componentId:"sc-1obk20v"})`
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
`;Label.defaultProps={uppercase:!0}},981:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return IconButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(961);const IconButtonRoot=Object(_styled_components__WEBPACK_IMPORTED_MODULE_1__.b)("button").withConfig({displayName:"IconButtonRoot",componentId:"sc-99n0e5"})`
    display: block;
    background-color: transparent;
    border: none; /* Remove borders */
    color: ${({buttonColor:buttonColor,theme:theme})=>buttonColor};
    cursor: pointer;
    outline: none;
    padding: 0px;
`;const IconButton=Object(_styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(class $IconButton extends react__WEBPACK_IMPORTED_MODULE_0__.Component{render(){let Icon=this.props.Icon,theme=this.props.theme,iconSize=this.props.iconSize,color="function"==typeof this.props.color?this.props.color(theme):this.props.color;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconButtonRoot,{onClick:this.props.onClick,className:this.props.className,buttonColor:color},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon,{color:color,size:iconSize}))}})},982:function(module,__webpack_exports__,__webpack_require__){"use strict";var GridSortingOrder;__webpack_require__.d(__webpack_exports__,"a",function(){return GridSortingOrder}),function(GridSortingOrder){GridSortingOrder[GridSortingOrder.Ascending=0]="Ascending",GridSortingOrder[GridSortingOrder.Descending=1]="Descending",GridSortingOrder[GridSortingOrder.Default=2]="Default"}(GridSortingOrder||(GridSortingOrder={}))}}]);
//# sourceMappingURL=10.4c9b9f1c7bc46b747648.bundle.js.map
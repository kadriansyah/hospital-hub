/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-list.js
 */

import {IronResizableBehavior} from '@polymer/iron-resizable-behavior/iron-resizable-behavior.js';

import {IronScrollTargetBehavior} from '@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js';

import {OptionalMutableDataBehavior} from '@polymer/polymer/lib/legacy/mutable-data-behavior.js';

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';

import {dom} from '@polymer/polymer/lib/legacy/polymer.dom.js';

import {Templatizer} from '@polymer/polymer/lib/legacy/templatizer-behavior.js';

import {animationFrame, idlePeriod, microTask} from '@polymer/polymer/lib/utils/async.js';

import {Debouncer} from '@polymer/polymer/lib/utils/debounce.js';

import {enqueueDebouncer, flush} from '@polymer/polymer/lib/utils/flush.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {matches, translate} from '@polymer/polymer/lib/utils/path.js';

import {TemplateInstanceBase} from '@polymer/polymer/lib/utils/templatize.js';

import {LegacyElementMixin} from '@polymer/polymer/lib/legacy/legacy-element-mixin.js';

/**
 * `iron-list` displays a virtual, 'infinite' list. The template inside
 * the iron-list element represents the DOM to create for each list item.
 * The `items` property specifies an array of list item data.
 *
 * For performance reasons, not every item in the list is rendered at once;
 * instead a small subset of actual template elements *(enough to fill the
 * viewport)* are rendered and reused as the user scrolls. As such, it is important
 * that all state of the list template is bound to the model driving it, since the
 * view may be reused with a new model at any time. Particularly, any state that
 * may change as the result of a user interaction with the list item must be bound
 * to the model to avoid view state inconsistency.
 *
 * ### Sizing iron-list
 *
 * `iron-list` must either be explicitly sized, or delegate scrolling to an
 * explicitly sized parent. By "explicitly sized", we mean it either has an
 * explicit CSS `height` property set via a class or inline style, or else is sized
 * by other layout means (e.g. the `flex` or `fit` classes).
 *
 * #### Flexbox - [jsbin](https://jsbin.com/vejoni/edit?html,output)
 *
 * ```html
 * <template is="x-list">
 *   <style>
 *     :host {
 *       display: block;
 *       height: 100vh;
 *       display: flex;
 *       flex-direction: column;
 *     }
 *
 *     iron-list {
 *       flex: 1 1 auto;
 *     }
 *   </style>
 *   <app-toolbar>App name</app-toolbar>
 *   <iron-list items="[[items]]">
 *     <template>
 *       <div>
 *         ...
 *       </div>
 *     </template>
 *   </iron-list>
 * </template>
 * ```
 * #### Explicit size - [jsbin](https://jsbin.com/vopucus/edit?html,output)
 * ```html
 * <template is="x-list">
 *   <style>
 *     :host {
 *       display: block;
 *     }
 *
 *     iron-list {
 *       height: 100vh; /* don't use % values unless the parent element is sized.
 * \/
 *     }
 *   </style>
 *   <iron-list items="[[items]]">
 *     <template>
 *       <div>
 *         ...
 *       </div>
 *     </template>
 *   </iron-list>
 * </template>
 * ```
 * #### Main document scrolling -
 * [jsbin](https://jsbin.com/wevirow/edit?html,output)
 * ```html
 * <head>
 *   <style>
 *     body {
 *       height: 100vh;
 *       margin: 0;
 *       display: flex;
 *       flex-direction: column;
 *     }
 *
 *     app-toolbar {
 *       position: fixed;
 *       top: 0;
 *       left: 0;
 *       right: 0;
 *     }
 *
 *     iron-list {
 *       /* add padding since the app-toolbar is fixed at the top *\/
 *       padding-top: 64px;
 *     }
 *   </style>
 * </head>
 * <body>
 *   <app-toolbar>App name</app-toolbar>
 *   <iron-list scroll-target="document">
 *     <template>
 *       <div>
 *         ...
 *       </div>
 *     </template>
 *   </iron-list>
 * </body>
 * ```
 *
 * `iron-list` must be given a `<template>` which contains exactly one element. In
 * the examples above we used a `<div>`, but you can provide any element (including
 * custom elements).
 *
 * ### Template model
 *
 * List item templates should bind to template models of the following structure:
 *
 * ```js
 * {
 *   index: 0,        // index in the item array
 *   selected: false, // true if the current item is selected
 *   tabIndex: -1,    // a dynamically generated tabIndex for focus management
 *   item: {}         // user data corresponding to items[index]
 * }
 * ```
 *
 * Alternatively, you can change the property name used as data index by changing
 * the `indexAs` property. The `as` property defines the name of the variable to
 * add to the binding scope for the array.
 *
 * For example, given the following `data` array:
 *
 * ##### data.json
 *
 * ```js
 * [
 *   {"name": "Bob"},
 *   {"name": "Tim"},
 *   {"name": "Mike"}
 * ]
 * ```
 *
 * The following code would render the list (note the name property is bound from
 * the model object provided to the template scope):
 *
 * ```html
 * <iron-ajax url="data.json" last-response="{{data}}" auto></iron-ajax>
 * <iron-list items="[[data]]" as="item">
 *   <template>
 *     <div>
 *       Name: [[item.name]]
 *     </div>
 *   </template>
 * </iron-list>
 * ```
 *
 * ### Grid layout
 *
 * `iron-list` supports a grid layout in addition to linear layout by setting
 * the `grid` attribute.  In this case, the list template item must have both fixed
 * width and height (e.g. via CSS). Based on this, the number of items
 * per row are determined automatically based on the size of the list viewport.
 *
 * ### Accessibility
 *
 * `iron-list` automatically manages the focus state for the items. It also
 * provides a `tabIndex` property within the template scope that can be used for
 * keyboard navigation. For example, users can press the up and down keys to move
 * to previous and next items in the list:
 *
 * ```html
 * <iron-list items="[[data]]" as="item">
 *   <template>
 *     <div tabindex$="[[tabIndex]]">
 *       Name: [[item.name]]
 *     </div>
 *   </template>
 * </iron-list>
 * ```
 *
 * ### Styling
 *
 * You can use the `--iron-list-items-container` mixin to style the container of
 * items:
 *
 * ```css
 * iron-list {
 *  --iron-list-items-container: {
 *     margin: auto;
 *   };
 * }
 * ```
 *
 * ### Resizing
 *
 * `iron-list` lays out the items when it receives a notification via the
 * `iron-resize` event. This event is fired by any element that implements
 * `IronResizableBehavior`.
 *
 * By default, elements such as `iron-pages`, `paper-tabs` or `paper-dialog` will
 * trigger this event automatically. If you hide the list manually (e.g. you use
 * `display: none`) you might want to implement `IronResizableBehavior` or fire
 * this event manually right after the list became visible again. For example:
 *
 * ```js
 * document.querySelector('iron-list').fire('iron-resize');
 * ```
 *
 * ### When should `<iron-list>` be used?
 *
 * `iron-list` should be used when a page has significantly more DOM nodes than the
 * ones visible on the screen. e.g. the page has 500 nodes, but only 20 are visible
 * at a time. This is why we refer to it as a `virtual` list. In this case, a
 * `dom-repeat` will still create 500 nodes which could slow down the web app, but
 * `iron-list` will only create 20.
 *
 * However, having an `iron-list` does not mean that you can load all the data at
 * once. Say you have a million records in the database, you want to split the data
 * into pages so you can bring in a page at the time. The page could contain 500
 * items, and iron-list will only render 20.
 */
interface IronListElement extends Templatizer, IronResizableBehavior, IronScrollTargetBehavior, OptionalMutableDataBehavior, LegacyElementMixin, HTMLElement {
  readonly _defaultScrollTarget: any;

  /**
   * An array containing items determining how many instances of the template
   * to stamp and that that each template instance should bind to.
   */
  items: any[]|null|undefined;

  /**
   * The name of the variable to add to the binding scope for the array
   * element associated with a given template instance.
   */
  as: string|null|undefined;

  /**
   * The name of the variable to add to the binding scope with the index
   * for the row.
   */
  indexAs: string|null|undefined;

  /**
   * The name of the variable to add to the binding scope to indicate
   * if the row is selected.
   */
  selectedAs: string|null|undefined;

  /**
   * When true, the list is rendered as a grid. Grid items must have
   * fixed width and height set via CSS. e.g.
   *
   * ```html
   * <iron-list grid>
   *   <template>
   *      <div style="width: 100px; height: 100px;"> 100x100 </div>
   *   </template>
   * </iron-list>
   * ```
   */
  grid: boolean|null|undefined;

  /**
   * When true, tapping a row will select the item, placing its data model
   * in the set of selected items retrievable via the selection property.
   *
   * Note that tapping focusable elements within the list item will not
   * result in selection, since they are presumed to have their * own action.
   */
  selectionEnabled: boolean|null|undefined;

  /**
   * When `multiSelection` is false, this is the currently selected item, or
   * `null` if no item is selected.
   */
  selectedItem: object|null|undefined;

  /**
   * When `multiSelection` is true, this is an array that contains the
   * selected items.
   */
  selectedItems: object|null|undefined;

  /**
   * When `true`, multiple items may be selected at once (in this case,
   * `selected` is an array of currently selected items).  When `false`,
   * only one item may be selected at a time.
   */
  multiSelection: boolean|null|undefined;

  /**
   * The offset top from the scrolling element to the iron-list element.
   * This value can be computed using the position returned by
   * `getBoundingClientRect()` although it's preferred to use a constant value
   * when possible.
   *
   * This property is useful when an external scrolling element is used and
   * there's some offset between the scrolling element and the list. For
   * example: a header is placed above the list.
   */
  scrollOffset: number|null|undefined;

  /**
   * The ratio of hidden tiles that should remain in the scroll direction.
   * Recommended value ~0.5, so it will distribute tiles evenly in both
   * directions.
   *    
   */
  _ratio: number;

  /**
   * The padding-top value for the list.
   *    
   */
  _scrollerPaddingTop: number;

  /**
   * This value is the same as `scrollTop`.
   *    
   */
  _scrollPosition: number;

  /**
   * The sum of the heights of all the tiles in the DOM.
   *    
   */
  _physicalSize: number;

  /**
   * The average `offsetHeight` of the tiles observed till now.
   *    
   */
  _physicalAverage: number;

  /**
   * The number of tiles which `offsetHeight` > 0 observed until now.
   *    
   */
  _physicalAverageCount: number;

  /**
   * The Y position of the item rendered in the `_physicalStart`
   * tile relative to the scrolling list.
   *    
   */
  _physicalTop: number;

  /**
   * The number of items in the list.
   *    
   */
  _virtualCount: number;

  /**
   * The estimated scroll height based on `_physicalAverage`
   *    
   */
  _estScrollHeight: number;

  /**
   * The scroll height of the dom node
   *    
   */
  _scrollHeight: number;

  /**
   * The height of the list. This is referred as the viewport in the context of
   * list.
   *    
   */
  _viewportHeight: number;

  /**
   * The width of the list. This is referred as the viewport in the context of
   * list.
   *    
   */
  _viewportWidth: number;

  /**
   * An array of DOM nodes that are currently in the tree
   */
  _physicalItems: TemplateInstanceBase[]|null;

  /**
   * An array of heights for each item in `_physicalItems`
   */
  _physicalSizes: number[]|null;

  /**
   * A cached value for the first visible index.
   * See `firstVisibleIndex`
   */
  _firstVisibleIndexVal: number|null;

  /**
   * A cached value for the last visible index.
   * See `lastVisibleIndex`
   */
  _lastVisibleIndexVal: number|null;

  /**
   * The max number of pages to render. One page is equivalent to the height of
   * the list.
   *    
   */
  _maxPages: number;

  /**
   * The currently focused physical item.
   *    
   */
  _focusedItem: null;

  /**
   * The virtual index of the focused item.
   *    
   */
  _focusedVirtualIndex: any;

  /**
   * The physical index of the focused item.
   *    
   */
  _focusedPhysicalIndex: any;

  /**
   * The item that backfills the `_offscreenFocusedItem` in the physical items
   * list when that item is moved offscreen.
   *    
   */
  _focusBackfillItem: null;

  /**
   * The maximum items per row
   *    
   */
  _itemsPerRow: number;

  /**
   * The width of each grid item
   *    
   */
  _itemWidth: number;

  /**
   * The height of the row in grid layout.
   *    
   */
  _rowHeight: number;

  /**
   * The cost of stamping a template in ms.
   *    
   */
  _templateCost: number;

  /**
   * Needed to pass event.model property to declarative event handlers -
   * see polymer/polymer#4339.
   *    
   */
  _parentModel: boolean;

  /**
   * The bottom of the physical content.
   *    
   */
  readonly _physicalBottom: any;

  /**
   * The bottom of the scroll.
   *    
   */
  readonly _scrollBottom: any;

  /**
   * The n-th item rendered in the last physical item.
   *    
   */
  readonly _virtualEnd: any;

  /**
   * The height of the physical content that isn't on the screen.
   *    
   */
  readonly _hiddenContentSize: any;

  /**
   * The parent node for the _userTemplate.
   *    
   */
  readonly _itemsParent: any;

  /**
   * The maximum scroll top value.
   *    
   */
  readonly _maxScrollTop: any;

  /**
   * The largest n-th value for an item such that it can be rendered in
   * `_physicalStart`.
   *    
   */
  readonly _maxVirtualStart: any;
  _virtualStart: any;
  _physicalStart: any;

  /**
   * The k-th tile that is at the bottom of the scrolling list.
   *    
   */
  readonly _physicalEnd: any;
  _physicalCount: any;

  /**
   * An optimal physical size such that we will have enough physical items
   * to fill up the viewport and recycle when the user scrolls.
   *
   * This default value assumes that we will at least have the equivalent
   * to a viewport of physical items above and below the user's viewport.
   *    
   */
  readonly _optPhysicalSize: any;

  /**
   * True if the current list is visible.
   *    
   */
  readonly _isVisible: any;

  /**
   * Gets the index of the first visible item in the viewport.
   */
  readonly firstVisibleIndex: any;

  /**
   * Gets the index of the last visible item in the viewport.
   */
  readonly lastVisibleIndex: any;
  readonly _virtualRowCount: any;
  readonly _estRowsInView: any;
  readonly _physicalRows: any;
  readonly _scrollOffset: any;
  attached(): void;
  detached(): void;

  /**
   * Recycles the physical items when needed.
   */
  _scrollHandler(): void;
  ready(): void;

  /**
   * Set the overflow property if this element has its own scrolling region
   */
  _setOverflow(scrollTarget: any): void;

  /**
   * Invoke this method if you dynamically update the viewport's
   * size or CSS padding.
   */
  updateViewportBoundaries(): void;

  /**
   * Returns an object that contains the indexes of the physical items
   * that might be reused and the physicalTop.
   *
   * @param fromTop If the potential reusable items are above the scrolling region.
   */
  _getReusables(fromTop: boolean): any;

  /**
   * Update the list of items, starting from the `_virtualStart` item.
   */
  _update(itemSet?: number[], movingUp?: number[]): void;

  /**
   * Creates a pool of DOM elements and attaches them to the local dom.
   *
   * @param size Size of the pool
   */
  _createPool(size: number): any;
  _isClientFull(): any;

  /**
   * Increases the pool size.
   */
  _increasePoolIfNeeded(count: any): void;

  /**
   * Renders the a new list.
   */
  _render(): void;

  /**
   * Templetizes the user template.
   */
  _ensureTemplatized(): void;
  _gridChanged(newGrid: any, oldGrid: any): void;

  /**
   * Called when the items have changed. That is, reassignments
   * to `items`, splices or updates to a single item.
   */
  _itemsChanged(change: any): void;
  _forwardItemPath(path: any, value: any): void;
  _adjustVirtualIndex(splices: object[]): void;
  _removeItem(item: any): void;

  /**
   * Executes a provided function per every physical index in `itemSet`
   * `itemSet` default value is equivalent to the entire set of physical
   * indexes.
   */
  _iterateItems(fn: (p0: number, p1: number) => any, itemSet?: number[]): any;

  /**
   * Returns the virtual index for a given physical index
   *
   * @param pidx Physical index
   */
  _computeVidx(pidx: number): number;

  /**
   * Assigns the data models to a given set of items.
   */
  _assignModels(itemSet?: number[]): void;

  /**
   * Updates the height for a given set of items.
   */
  _updateMetrics(itemSet?: number[]): void;
  _updateGridMetrics(): void;

  /**
   * Updates the position of the physical items.
   */
  _positionItems(): void;
  _getPhysicalSizeIncrement(pidx: any): any;

  /**
   * Returns, based on the current index,
   * whether or not the next index will need
   * to be rendered on a new row.
   *
   * @param vidx Virtual index
   */
  _shouldRenderNextRow(vidx: number): boolean;

  /**
   * Adjusts the scroll position when it was overestimated.
   */
  _adjustScrollPosition(): void;

  /**
   * Sets the position of the scroll.
   */
  _resetScrollPosition(pos: any): void;

  /**
   * Sets the scroll height, that's the height of the content,
   *
   * @param forceUpdate If true, updates the height no matter what.
   */
  _updateScrollerSize(forceUpdate?: boolean): void;

  /**
   * Scroll to a specific item in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @param item The item to be scrolled to
   */
  scrollToItem(item: object|null): any;

  /**
   * Scroll to a specific index in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @param idx The index of the item
   */
  scrollToIndex(idx: number): void;

  /**
   * Reset the physical average and the average count.
   */
  _resetAverage(): void;

  /**
   * A handler for the `iron-resize` event triggered by `IronResizableBehavior`
   * when the element is resized.
   */
  _resizeHandler(): void;

  /**
   * Selects the given item.
   *
   * @param item The item instance.
   */
  selectItem(item: object|null): any;

  /**
   * Selects the item at the given index in the items array.
   *
   * @param index The index of the item in the items array.
   */
  selectIndex(index: number): void;

  /**
   * Deselects the given item.
   *
   * @param item The item instance.
   */
  deselectItem(item: object|null): any;

  /**
   * Deselects the item at the given index in the items array.
   *
   * @param index The index of the item in the items array.
   */
  deselectIndex(index: number): void;

  /**
   * Selects or deselects a given item depending on whether the item
   * has already been selected.
   *
   * @param item The item object.
   */
  toggleSelectionForItem(item: object|null): any;

  /**
   * Selects or deselects the item at the given index in the items array
   * depending on whether the item has already been selected.
   *
   * @param index The index of the item in the items array.
   */
  toggleSelectionForIndex(index: number): void;

  /**
   * Clears the current selection in the list.
   */
  clearSelection(): void;

  /**
   * Add an event listener to `tap` if `selectionEnabled` is true,
   * it will remove the listener otherwise.
   */
  _selectionEnabledChanged(selectionEnabled: any): void;

  /**
   * Select an item from an event object.
   */
  _selectionHandler(e: any): void;
  _multiSelectionChanged(multiSelection: any): void;

  /**
   * Updates the size of a given list item.
   *
   * @param item The item instance.
   */
  updateSizeForItem(item: object|null): any;

  /**
   * Updates the size of the item at the given index in the items array.
   *
   * @param index The index of the item in the items array.
   */
  updateSizeForIndex(index: number): any;

  /**
   * Creates a temporary backfill item in the rendered pool of physical items
   * to replace the main focused item. The focused item has tabIndex = 0
   * and might be currently focused by the user.
   *
   * This dynamic replacement helps to preserve the focus state.
   */
  _manageFocus(): void;

  /**
   * Converts a random index to the index of the item that completes it's row.
   * Allows for better order and fill computation when grid == true.
   */
  _convertIndexToCompleteRow(idx: any): any;
  _isIndexRendered(idx: any): any;
  _isIndexVisible(idx: any): any;
  _getPhysicalIndex(vidx: any): any;
  focusItem(idx: any): void;
  _focusPhysicalItem(idx: any): void;
  _removeFocusedItem(): void;
  _createFocusBackfillItem(): void;
  _restoreFocusedItem(): void;
  _didFocus(e: any): void;
  _keydownHandler(e: any): void;
  _clamp(v: any, min: any, max: any): any;
  _debounce(name: any, cb: any, asyncModule: any): void;
  _forwardProperty(inst: any, name: any, value: any): void;

  /**
   * Templatizer bindings for v2
   */
  _forwardHostPropV2(prop: any, value: any): void;
  _notifyInstancePropV2(inst: any, prop: any, value: any): void;

  /**
   * Templatizer bindings for v1
   */
  _getStampedChildren(): any;
  _forwardInstancePath(inst: any, path: any, value: any): void;
  _forwardParentPath(path: any, value: any): void;
  _forwardParentProp(prop: any, value: any): void;

  /**
   * Gets the activeElement of the shadow root/host that contains the list.
   */
  _getActiveElement(): any;
}

export {IronListElement};

declare global {

  interface HTMLElementTagNameMap {
    "iron-list": IronListElement;
  }
}

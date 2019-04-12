/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-input-behavior.js
 */

import {IronA11yKeysBehavior} from '@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js';

import {IronControlState} from '@polymer/iron-behaviors/iron-control-state.js';

import {dom} from '@polymer/polymer/lib/legacy/polymer.dom.js';

import {PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * Use `PaperInputBehavior` to implement inputs with `<paper-input-container>`.
 * This behavior is implemented by `<paper-input>`. It exposes a number of
 * properties from `<paper-input-container>` and `<input is="iron-input">` and
 * they should be bound in your template.
 *
 * The input element can be accessed by the `inputElement` property if you need
 * to access properties or methods that are not exposed.
 */
interface PaperInputBehavior extends IronControlState, IronA11yKeysBehavior {

  /**
   * Set to true to disable this input. If you're using PaperInputBehavior to
   * implement your own paper-input-like element, bind this to
   * both the `<paper-input-container>`'s and the input's `disabled` property.
   */
  disabled: boolean|null|undefined;
  keyBindings: object;

  /**
   * The label for this input. If you're using PaperInputBehavior to
   * implement your own paper-input-like element, bind this to
   * `<label>`'s content and `hidden` property, e.g.
   * `<label hidden$="[[!label]]">[[label]]</label>` in your `template`
   */
  label: string|null|undefined;

  /**
   * The value for this input. If you're using PaperInputBehavior to
   * implement your own paper-input-like element, bind this to
   * the `<iron-input>`'s `bindValue`
   * property, or the value property of your input that is `notify:true`.
   */
  value: any;

  /**
   * Returns true if the value is invalid. If you're using PaperInputBehavior
   * to implement your own paper-input-like element, bind this to both the
   * `<paper-input-container>`'s and the input's `invalid` property.
   *
   * If `autoValidate` is true, the `invalid` attribute is managed
   * automatically, which can clobber attempts to manage it manually.
   */
  invalid: boolean|null|undefined;

  /**
   * Set this to specify the pattern allowed by `preventInvalidInput`. If
   * you're using PaperInputBehavior to implement your own paper-input-like
   * element, bind this to the `<input is="iron-input">`'s `allowedPattern`
   * property.
   */
  allowedPattern: string|null|undefined;

  /**
   * The type of the input. The supported types are the
   * [native input's
   * types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_<input>_types).
   * If you're using PaperInputBehavior to implement your own paper-input-like
   * element, bind this to the (Polymer 1) `<input is="iron-input">`'s or
   * (Polymer 2)
   * `<iron-input>`'s `type` property.
   */
  type: string|null|undefined;

  /**
   * The datalist of the input (if any). This should match the id of an
   * existing `<datalist>`. If you're using PaperInputBehavior to implement
   * your own paper-input-like element, bind this to the `<input
   * is="iron-input">`'s `list` property.
   */
  list: string|null|undefined;

  /**
   * A pattern to validate the `input` with. If you're using
   * PaperInputBehavior to implement your own paper-input-like element, bind
   * this to the `<input is="iron-input">`'s `pattern` property.
   */
  pattern: string|null|undefined;

  /**
   * Set to true to mark the input as required. If you're using
   * PaperInputBehavior to implement your own paper-input-like element, bind
   * this to the `<input is="iron-input">`'s `required` property.
   */
  required: boolean|null|undefined;

  /**
   * The error message to display when the input is invalid. If you're using
   * PaperInputBehavior to implement your own paper-input-like element,
   * bind this to the `<paper-input-error>`'s content, if using.
   */
  errorMessage: string|null|undefined;

  /**
   * Set to true to show a character counter.
   */
  charCounter: boolean|null|undefined;

  /**
   * Set to true to disable the floating label. If you're using
   * PaperInputBehavior to implement your own paper-input-like element, bind
   * this to the `<paper-input-container>`'s `noLabelFloat` property.
   */
  noLabelFloat: boolean|null|undefined;

  /**
   * Set to true to always float the label. If you're using PaperInputBehavior
   * to implement your own paper-input-like element, bind this to the
   * `<paper-input-container>`'s `alwaysFloatLabel` property.
   */
  alwaysFloatLabel: boolean|null|undefined;

  /**
   * Set to true to auto-validate the input value. If you're using
   * PaperInputBehavior to implement your own paper-input-like element, bind
   * this to the `<paper-input-container>`'s `autoValidate` property.
   */
  autoValidate: boolean|null|undefined;

  /**
   * Name of the validator to use. If you're using PaperInputBehavior to
   * implement your own paper-input-like element, bind this to
   * the `<input is="iron-input">`'s `validator` property.
   */
  validator: string|null|undefined;

  /**
   * If you're using PaperInputBehavior to implement your own paper-input-like
   * element, bind this to the `<input is="iron-input">`'s `autocomplete`
   * property.
   */
  autocomplete: string|null|undefined;

  /**
   * If you're using PaperInputBehavior to implement your own paper-input-like
   * element, bind this to the `<input is="iron-input">`'s `autofocus`
   * property.
   */
  autofocus: boolean|null|undefined;

  /**
   * If you're using PaperInputBehavior to implement your own paper-input-like
   * element, bind this to the `<input is="iron-input">`'s `inputmode`
   * property.
   */
  inputmode: string|null|undefined;

  /**
   * The minimum length of the input value.
   * If you're using PaperInputBehavior to implement your own paper-input-like
   * element, bind this to the `<input is="iron-input">`'s `minlength`
   * property.
   */
  minlength: number|null|undefined;

  /**
   * The maximum length of the input value.
   * If you're using PaperInputBehavior to implement your own paper-input-like
   * element, bind this to the `<input is="iron-input">`'s `maxlength`
   * property.
   */
  maxlength: number|null|undefined;

  /**
   * The minimum (numeric or date-time) input value.
   * If you're using PaperInputBehavior to implement your own paper-input-like
   * element, bind this to the `<input is="iron-input">`'s `min` property.
   */
  min: string|null|undefined;

  /**
   * The maximum (numeric or date-time) input value.
   * Can be a String (e.g. `"2000-01-01"`) or a Number (e.g. `2`).
   * If you're using PaperInputBehavior to implement your own paper-input-like
   * element, bind this to the `<input is="iron-input">`'s `max` property.
   */
  max: string|null|undefined;

  /**
   * Limits the numeric or date-time increments.
   * If you're using PaperInputBehavior to implement your own paper-input-like
   * element, bind this to the `<input is="iron-input">`'s `step` property.
   */
  step: string|null|undefined;

  /**
   * If you're using PaperInputBehavior to implement your own paper-input-like
   * element, bind this to the `<input is="iron-input">`'s `name` property.
   */
  name: string|null|undefined;

  /**
   * A placeholder string in addition to the label. If this is set, the label
   * will always float.
   */
  placeholder: string|null|undefined;

  /**
   * If you're using PaperInputBehavior to implement your own paper-input-like
   * element, bind this to the `<input is="iron-input">`'s `readonly`
   * property.
   */
  readonly: boolean|null|undefined;

  /**
   * If you're using PaperInputBehavior to implement your own paper-input-like
   * element, bind this to the `<input is="iron-input">`'s `size` property.
   */
  size: number|null|undefined;

  /**
   * If you're using PaperInputBehavior to implement your own paper-input-like
   * element, bind this to the `<input is="iron-input">`'s `autocapitalize`
   * property.
   */
  autocapitalize: string;

  /**
   * If you're using PaperInputBehavior to implement your own paper-input-like
   * element, bind this to the `<input is="iron-input">`'s `autocorrect`
   * property.
   */
  autocorrect: string|null|undefined;

  /**
   * If you're using PaperInputBehavior to implement your own paper-input-like
   * element, bind this to the `<input is="iron-input">`'s `autosave`
   * property, used with type=search.
   */
  autosave: string|null|undefined;

  /**
   * If you're using PaperInputBehavior to implement your own paper-input-like
   * element, bind this to the `<input is="iron-input">`'s `results` property,
   * used with type=search.
   */
  results: number|null|undefined;

  /**
   * If you're using PaperInputBehavior to implement your own paper-input-like
   * element, bind this to the `<input is="iron-input">`'s `accept` property,
   * used with type=file.
   */
  accept: string|null|undefined;

  /**
   * If you're using PaperInputBehavior to implement your own paper-input-like
   * element, bind this to the`<input is="iron-input">`'s `multiple` property,
   * used with type=file.
   */
  multiple: boolean|null|undefined;

  /**
   * Returns a reference to the input element.
   */
  readonly inputElement: HTMLElement;

  /**
   * Returns a reference to the focusable element.
   */
  readonly _focusableElement: HTMLElement;

  /**
   * Forward focus to inputElement. Overriden from IronControlState.
   */
  _focusBlurHandler(event: any): void;
  attached(): void;
  created(): void;
  _appendStringWithSpace(str: any, more: any): any;
  _onAddonAttached(event: any): void;

  /**
   * Validates the input element and sets an error style if needed.
   */
  validate(): boolean;

  /**
   * Handler that is called when a shift+tab keypress is detected by the menu.
   *
   * @param event A key combination event.
   */
  _onShiftTabDown(event: CustomEvent|null): void;

  /**
   * If `autoValidate` is true, then validates the element.
   */
  _handleAutoValidate(): void;

  /**
   * Restores the cursor to its original position after updating the value.
   *
   * @param newValue The value that should be saved.
   */
  updateValueAndPreserveCaret(newValue: string): void;
  _computeAlwaysFloatLabel(alwaysFloatLabel: any, placeholder: any): any;
  _updateAriaLabelledBy(): void;
  _generateInputId(): void;
  _onChange(event: any): void;
  _autofocusChanged(): void;
}

declare const PaperInputBehavior: object;

export {PaperInputBehavior};

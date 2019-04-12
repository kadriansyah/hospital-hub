/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-fab.js
 */

import {PaperButtonBehavior} from '@polymer/paper-behaviors/paper-button-behavior.js';

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {LegacyElementMixin} from '@polymer/polymer/lib/legacy/legacy-element-mixin.js';

/**
 * Material design: [Floating Action
 * Button](https://www.google.com/design/spec/components/buttons-floating-action-button.html)
 *
 * `paper-fab` is a floating action button. It contains an image placed in the
 * center and comes in two sizes: regular size and a smaller size by applying the
 * attribute `mini`. When the user touches the button, a ripple effect emanates
 * from the center of the button.
 *
 * You may import `iron-icons` to use with this element, or provide a URL to a
 * custom icon. See `iron-iconset` for more information about how to use a custom
 * icon set.
 *
 * Example:
 *
 *     <script type="module">
 *       import '@polymer/iron-icons/iron-icons.js';
 *     </script>
 *
 *     <paper-fab icon="add"></paper-fab>
 *     <paper-fab mini icon="favorite"></paper-fab>
 *     <paper-fab src="star.png"></paper-fab>
 *
 *
 * ### Styling
 *
 * The following custom properties and mixins are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--paper-fab-background` | The background color of the button | `--accent-color`
 * `--paper-fab-keyboard-focus-background` | The background color of the button when focused | `--paper-pink-900`
 * `--paper-fab-disabled-background` | The background color of the button when it's disabled | `--paper-grey-300`
 * `--paper-fab-disabled-text` | The text color of the button when it's disabled | `--paper-grey-500`
 * `--paper-fab` | Mixin applied to the button | `{}`
 * `--paper-fab-mini` | Mixin applied to a mini button | `{}`
 * `--paper-fab-disabled` | Mixin applied to a disabled button | `{}`
 * `--paper-fab-iron-icon` | Mixin applied to the iron-icon within the button | `{}`
 * `--paper-fab-label` | Mixin applied to the label within the button | `{}`
 */
interface PaperFabElement extends PaperButtonBehavior, LegacyElementMixin, HTMLElement {

  /**
   * The URL of an image for the icon. If the src property is specified,
   * the icon property should not be.
   */
  src: string|null|undefined;

  /**
   * Specifies the icon name or index in the set of icons available in
   * the icon's icon set. If the icon property is specified,
   * the src property should not be.
   */
  icon: string|null|undefined;

  /**
   * Set this to true to style this is a "mini" FAB.
   */
  mini: boolean|null|undefined;

  /**
   * The label displayed in the badge. The label is centered, and ideally
   * should have very few characters.
   */
  label: string|null|undefined;
  _labelChanged(): void;
  _computeIsIconFab(icon: any, src: any): any;
}

export {PaperFabElement};

declare global {

  interface HTMLElementTagNameMap {
    "paper-fab": PaperFabElement;
  }
}
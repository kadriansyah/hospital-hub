/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-image.js
 */

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {resolveUrl} from '@polymer/polymer/lib/utils/resolve-url.js';

import {LegacyElementMixin} from '@polymer/polymer/lib/legacy/legacy-element-mixin.js';

/**
 * `iron-image` is an element for displaying an image that provides useful sizing and
 * preloading options not found on the standard `<img>` tag.
 *
 * The `sizing` option allows the image to be either cropped (`cover`) or
 * letterboxed (`contain`) to fill a fixed user-size placed on the element.
 *
 * The `preload` option prevents the browser from rendering the image until the
 * image is fully loaded.  In the interim, either the element's CSS `background-color`
 * can be be used as the placeholder, or the `placeholder` property can be
 * set to a URL (preferably a data-URI, for instant rendering) for an
 * placeholder image.
 *
 * The `fade` option (only valid when `preload` is set) will cause the placeholder
 * image/color to be faded out once the image is rendered.
 *
 * Examples:
 *
 *   Basically identical to `<img src="...">` tag:
 *
 *     <iron-image src="http://lorempixel.com/400/400"></iron-image>
 *
 *   Will letterbox the image to fit:
 *
 *     <iron-image style="width:400px; height:400px;" sizing="contain"
 *       src="http://lorempixel.com/600/400"></iron-image>
 *
 *   Will crop the image to fit:
 *
 *     <iron-image style="width:400px; height:400px;" sizing="cover"
 *       src="http://lorempixel.com/600/400"></iron-image>
 *
 *   Will show light-gray background until the image loads:
 *
 *     <iron-image style="width:400px; height:400px; background-color: lightgray;"
 *       sizing="cover" preload src="http://lorempixel.com/600/400"></iron-image>
 *
 *   Will show a base-64 encoded placeholder image until the image loads:
 *
 *     <iron-image style="width:400px; height:400px;" placeholder="data:image/gif;base64,..."
 *       sizing="cover" preload src="http://lorempixel.com/600/400"></iron-image>
 *
 *   Will fade the light-gray background out once the image is loaded:
 *
 *     <iron-image style="width:400px; height:400px; background-color: lightgray;"
 *       sizing="cover" preload fade src="http://lorempixel.com/600/400"></iron-image>
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--iron-image-placeholder` | Mixin applied to #placeholder | `{}`
 * `--iron-image-width` | Sets the width of the wrapped image | `auto`
 * `--iron-image-height` | Sets the height of the wrapped image | `auto`
 */
interface IronImageElement extends LegacyElementMixin, HTMLElement {

  /**
   * The URL of an image.
   */
  src: string|null|undefined;

  /**
   * A short text alternative for the image.
   */
  alt: string|null|undefined;

  /**
   * CORS enabled images support:
   * https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
   */
  crossorigin: string|null|undefined;

  /**
   * When true, the image is prevented from loading and any placeholder is
   * shown.  This may be useful when a binding to the src property is known to
   * be invalid, to prevent 404 requests.
   */
  preventLoad: boolean|null|undefined;

  /**
   * Sets a sizing option for the image.  Valid values are `contain` (full
   * aspect ratio of the image is contained within the element and
   * letterboxed) or `cover` (image is cropped in order to fully cover the
   * bounds of the element), or `null` (default: image takes natural size).
   */
  sizing: string|null|undefined;

  /**
   * When a sizing option is used (`cover` or `contain`), this determines
   * how the image is aligned within the element bounds.
   */
  position: string|null|undefined;

  /**
   * When `true`, any change to the `src` property will cause the
   * `placeholder` image to be shown until the new image has loaded.
   */
  preload: boolean|null|undefined;

  /**
   * This image will be used as a background/placeholder until the src image
   * has loaded.  Use of a data-URI for placeholder is encouraged for instant
   * rendering.
   */
  placeholder: string|null|undefined;

  /**
   * When `preload` is true, setting `fade` to true will cause the image to
   * fade into place.
   */
  fade: boolean|null|undefined;

  /**
   * Read-only value that is true when the image is loaded.
   */
  readonly loaded: boolean|null|undefined;

  /**
   * Read-only value that tracks the loading state of the image when the
   * `preload` option is used.
   */
  readonly loading: boolean|null|undefined;

  /**
   * Read-only value that indicates that the last set `src` failed to load.
   */
  readonly error: boolean|null|undefined;

  /**
   * Can be used to set the width of image (e.g. via binding); size may also
   * be set via CSS.
   */
  width: number|null|undefined;

  /**
   * Can be used to set the height of image (e.g. via binding); size may also
   * be set via CSS.
   */
  height: number|null|undefined;
  created(): void;
  _imgOnLoad(): void;
  _imgOnError(): void;
  _computePlaceholderHidden(): any;
  _computePlaceholderClassName(): any;
  _computeImgDivHidden(): any;
  _computeImgDivARIAHidden(): any;
  _computeImgDivARIALabel(): any;
  _computeImgHidden(): any;
  _widthChanged(): void;
  _heightChanged(): void;
  _loadStateObserver(src: any, preventLoad: any): void;
  _placeholderChanged(): void;
  _transformChanged(): void;
  _resolveSrc(testSrc: any): any;
}

export {IronImageElement};

declare global {

  interface HTMLElementTagNameMap {
    "iron-image": IronImageElement;
  }
}
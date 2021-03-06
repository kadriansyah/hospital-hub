/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   neon-shared-element-animation-behavior.js
 */

import {NeonAnimationBehavior} from './neon-animation-behavior.js';

/**
 * Use `NeonSharedElementAnimationBehavior` to implement shared element
 * animations.
 */
interface NeonSharedElementAnimationBehavior extends NeonAnimationBehavior {

  /**
   * Cached copy of shared elements.
   */
  sharedElements: object|null|undefined;

  /**
   * Finds shared elements based on `config`.
   */
  findSharedElements(config: any): any;
}

declare const NeonSharedElementAnimationBehavior: object;

export {NeonSharedElementAnimationBehavior};

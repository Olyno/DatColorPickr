[![](https://img.shields.io/npm/v/@datcolorpickr/svelte?style=for-the-badge)](https://www.npmjs.com/package/@datcolorpickr/svelte) ![](https://img.shields.io/bundlephobia/min/@datcolorpickr/svelte?label=size&style=for-the-badge)

# @datcolorpickr/svelte

 * A color picker for [Svelte](https://svelte.dev)
 * Compatible with IE11
 * Support ES module and UMD formats.

# Install

Using npm:

```
npm install @datcolorpickr/svelte --save-dev
```

# Usage

```html
<!-- index.svelte -->
<script>
    import Pickr from '@datcolorpickr/svelte';
</script>

<Pickr />
```

# Options

Here is the list of all props you have available:

```js
{
    // Which theme you want to use. Can be 'classic', 'monolith' or 'nano'
    theme: 'classic',

    // Nested scrolling is currently not supported and as this would be really sophisticated to add this
    // it's easier to set this to true which will hide pickr if the user scrolls the area behind it.
    closeOnScroll: false,

    // Custom class which gets added to the pcr-app. Can be used to apply custom styles.
    appClass: 'custom-class',

    // Don't replace 'el' Element with the pickr-button, instead use 'el' as a button.
    // If true, appendToBody will also be automatically true.
    useAsButton: false,

    // Size of gap between pickr (widget) and the corresponding reference (button) in px
    padding: 8,

    // If true pickr won't be floating, and instead will append after the in el resolved element.
    // It's possible to hide it via .hide() anyway.
    inline: false,

    // If true, pickr will be repositioned automatically on page scroll or window resize.
    // Can be set to false to make custom positioning easier.
    autoReposition: true,

    // Defines the direction in which the knobs of hue and opacity can be moved.
    // 'v' => opacity- and hue-slider can both only moved vertically.
    // 'hv' => opacity-slider can be moved horizontally and hue-slider vertically.
    // Can be used to apply custom layouts
    sliders: 'v',

    // Start state. If true 'disabled' will be added to the button's classlist.
    disabled: false,

    // If true, the user won't be able to adjust any opacity.
    // Opacity will be locked at 1 and the opacity slider will be removed.
    // The HSVaColor object also doesn't contain an alpha, so the toString() methods just
    // print HSV, HSL, RGB, HEX, etc.
    lockOpacity: false,

    // Precision of output string (only effective if components.interaction.input is true)
    outputPrecision: 0,

    // Defines change/save behavior:
    // - to keep current color in place until Save is pressed, set to `true`,
    // - to apply color to button and preview (save) in sync with each change
    //   (from picker or palette), set to `false`.
    comparison: true,

    // Default color. If you're using a named color such as red, white ... set
    // a value for defaultRepresentation too as there is no button for named-colors.
    defaultColor: '#42445a',

    // Optional color swatches. When null, swatches are disabled.
    // Types are all those which can be produced by pickr e.g. hex(a), hsv(a), hsl(a), rgb(a), cmyk, and also CSS color names like 'magenta'.
    // Example: swatches: ['#F44336', '#E91E63', '#9C27B0', '#673AB7'],
    swatches: null,

    // Default color representation of the input/output textbox.
    // Valid options are `HEX`, `RGBA`, `HSVA`, `HSLA` and `CMYK`.
    defaultRepresentation: 'HEX',

    // Option to keep the color picker always visible.
    // You can still hide / show it via 'pickr.hide()' and 'pickr.show()'.
    // The save button keeps its functionality, so still fires the onSave event when clicked.
    showAlways: false,

    // Close pickr with a keypress.
    // Default is 'Escape'. Can be the event key or code.
    // (see: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
    closeWithKey: 'Escape',

    // Defines the position of the color-picker.
    // Any combinations of top, left, bottom or right with one of these optional modifiers: start, middle, end
    // Examples: top-start / right-end
    // If clipping occurs, the color picker will automatically choose its position.
    position: 'bottom-middle',

    // Enables the ability to change numbers in an input field with the scroll-wheel.
    // To use it set the cursor on a position where a number is and scroll, use ctrl to make steps of five
    adjustableNumbers: true
}
```

# Events

 * init
 * hide
 * show
 * save
 * clear
 * change
 * changeStop
 * cancel
 * swatchSelect
 * mount

# Example

```html
<!-- index.svelte -->
<script>

    import Pickr from '@datcolorpickr/svelte';

    function colorChanged() {
        console.log('Color changed!');
    }

</script>

<Pickr defaultColor={'#465f87'} closeOnScroll={true} on:change={colorChanged} />
```

# Meta

[LICENSE (GPL-3)](https://github.com/Olyno/DatColorPickr/blob/master/LICENSE)
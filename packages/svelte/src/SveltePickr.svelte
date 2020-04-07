<script>

    import Pickr from '@simonwep/pickr';
    import { onMount, createEventDispatcher } from 'svelte';
    import { error } from './utils';

    export let container = 'body';
    export let theme = 'classic';
    export let closeOnScroll = false;
    export let appClass;
    export let useAsButton = false;
    export let padding = 8;
    export let inline = false;
    export let autoReposition = true;
    export let sliders = 'v';
    export let disabled = false;
    export let lockOpacity = false;
    export let outputPrecision = 0;
    export let comparison = true;
    export let defaultColor = '#42445a';
    export let swatches = [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ];
    export let defaultRepresentation = 'HEX';
    export let showAlways = false;
    export let closeWithKey = 'Escape';
    export let position = 'bottom-middle';
    export let adjustableNumbers = true;

    let colorPicker;
    const themes = ['classic', 'monolisth', 'nano'];
    const dispatch = createEventDispatcher();

    theme = theme.toLowerCase();

    if (!themes.includes(theme)) {
        error('The theme "' + theme + '" doesn\'t exist.');
    }

    onMount(() => {

        colorPicker = Pickr.create({
            el: '.color-picker',
            container,
            theme,
            closeOnScroll,
            appClass,
            useAsButton,
            padding,
            inline,
            autoReposition,
            sliders,
            disabled,
            lockOpacity,
            outputPrecision,
            comparison,
            default: defaultColor,
            swatches,
            defaultRepresentation,
            showAlways,
            closeWithKey,
            position,
            adjustableNumbers,
            components: {

                // Main components
                preview: true,
                opacity: true,
                hue: true,

                // Input / output Options
                interaction: {
                    hex: true,
                    rgba: true,
                    hsla: false,
                    hsva: false,
                    cmyk: false,
                    input: true,
                    clear: true,
                    save: true
                }
            }
        });

        colorPicker.on('init', () => {
            dispatch('init');
        }).on('hide', () => {
            dispatch('hide');
        }).on('show', () => {
            dispatch('show');
        }).on('save', () => {
            dispatch('save');
        }).on('clear', () => {
            dispatch('clear');
        }).on('change', () => {
            dispatch('change');
        }).on('changestop', () => {
            dispatch('changeStop');
        }).on('cancel', () => {
            dispatch('cancel');
        }).on('swatchselect', () => {
            dispatch('swatchSelect');
        })

        dispatch('mount', colorPicker);

    })

</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/themes/{theme}.min.css"/>
</svelte:head>

<div class="color-picker"></div>
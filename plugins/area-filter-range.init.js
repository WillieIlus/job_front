import { useNuxtApp } from '#app'

export default defineNuxtPlugin(() => {
    const nuxtApp = useNuxtApp()

    // var slider1 = document.getElementById('slider1');

    // noUiSlider.create(slider1, {
    //     start: [9],
    //     step: 1,
    //     range: {
    //         'min': [1],
    //         'max': [15]
    //     }
    // });

    // var slider1Value = document.getElementById('slider1-span');

    // slider1.noUiSlider.on('update', function (values, handle) {
    //     slider1Value.innerHTML = values[handle];
    // });
})
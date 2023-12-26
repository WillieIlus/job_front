import { useNuxtApp } from '#app'

export default defineNuxtPlugin(() => {
    const nuxtApp = useNuxtApp()
    if (document.querySelectorAll('.alert-dismissible')) {
        var alertDismiss = document.querySelectorAll('.alert-dismissible');

        Array.from(alertDismiss).forEach(function (item) {
            item.querySelector(".alert-close").addEventListener('click', function () {
                item.classList.add('hidden');
            });
        });
    }
})
/**
 * Created by jonathan on 7/5/20.
 */




export default {

    get_language() {

        let url = window.location.href;

        if (url.includes('en.')) {
            return 'en'
        }

        if (url.includes('de.')) {
            return 'de'
        }

        return 'nl';
    },


    add_script_tag(src, on_load) {
        let script_element = document.createElement('script');
        script_element.setAttribute('src', src);
        script_element.setAttribute('crossorigin', '');
        script_element.setAttribute('charset', 'utf-8');

        document.body.appendChild(script_element);


        script_element.addEventListener('load', function () {
            on_load()
        });
    },

    add_style_tag(src, on_load) {
        var head = document.head;
        var link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = src;

        head.appendChild(link);

        if (on_load) {
            link.addEventListener('load', function () {
                on_load()
            });
        }

    },

    init() {

        let hide = !!document.querySelector('#dont_show_cookie_modal_on_page');

        if (hide) {
            console.log('Dont show cookie modal on this page');
            return;
        }

        //init style
        const link = 'https://cdn.jsdelivr.net/npm/cookie-consent-box@2.4.0/dist/cookie-consent-box.min.css'
        this.add_style_tag(link, null)

        // init widget
        let lang = this.get_language();
        const options = {
            backgroundColor: '#012359',
            cookieKey: 'cookie-consent'
        }

        if (lang !== 'nl') {
            options.language = lang
        } else {
            const content = {
                title: 'Cookiemelding',
                content: 'Wij gebruiken cookies om uw ervaring op onze website te optimaliseren.',
                accept: 'Accepteren',
                learnMore: 'AAKJHGHJKJHGF',
            }

            options.content = content;
        }


        window.CookieBoxConfig = options;

        const url = 'https://cdn.jsdelivr.net/npm/cookie-consent-box@2.4.0/dist/cookie-consent-box.min.js'

        this.add_script_tag(url, () => {
            console.log('OMG')
        })


    }


}
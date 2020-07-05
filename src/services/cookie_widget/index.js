/**
 * Created by jonathan on 7/5/20.
 */


export default {

    get_language(){

        let url = window.location.href;

        if (url.includes('en.')) {
            return 'en'
        }

        if (url.includes('de.')) {
            return 'de'
        }

        return 'nl';
    },


    add_script_tag(src, on_load){
        let script_element = document.createElement('script');
        script_element.setAttribute('src', src);
        script_element.setAttribute('crossorigin', '');
        script_element.setAttribute('charset', 'utf-8');

        document.body.appendChild(script_element);

        script_element.addEventListener('load', function () {
            on_load()
        });
    },

    init(){


        let hide = !!document.querySelector('#dont_show_cookie_modal_on_page');

        if (hide) {
            console.log('Dont shot cookie modal on this page');
            window.Metomic('ConsentManager:hide');
            return;
        }
        let lang = this.get_language();


        window.Metomic('configure', {
            language: lang,
        })

        return
        //
        // console.log('Set up for language', lang)
        //
        // let language_id_mapping = {
        //     'NL': 'prj:1511a01a-48af-4566-8d5c-f21bebbc2c96',
        //     'DE': 'prj:12a1dca9-85f0-4854-9661-b84848d24bd5',
        //     'EN': 'prj:ffaeeacc-3eaa-4344-a5af-57f1e8611b08',
        //
        // };
        //
        //
        //
        //
        // let id = language_id_mapping[lang];
        //
        //
        // //
        // // let config_script_url = `https://config.metomic.io/config.js?id=${id}`;
        // // let base_script_url = `https://consent-manager.metomic.io/embed.js`;
        // //
        // // this.add_script_tag(config_script_url, ()=> {
        // //     console.log('config script loaded')
        // // });
        // //
        // //
        // // this.add_script_tag(base_script_url, ()=> {
        // //     console.log('Base script loaded')
        // //     window.Metomic('ConsentManager:show')
        // //     console.log("METOMIC", window.Metomic)
        // // });
        // //
        //
        //
        //
        // console.log('Scripts added to head')

    }


}
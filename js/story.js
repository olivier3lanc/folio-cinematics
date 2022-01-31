const story = {
    scenes: {
        'harry_potter_hogwarts_dementors_a': { layout: 'second' },
        'hp_clock_clouds': { layout: 'second' },
        'hp_dementor_opening_door': { layout: 'second' },
        'hp_diagon_alley': { layout: 'second' },
        'hp_door': { layout: 'second' },
        'hp_drago_severus': { layout: 'second' },
        'hp_dumbledore_falling': { layout: 'second' },
        'hp_empty_broken_great_hall': { layout: 'second' },
        'hp_flower_hand': { layout: 'second' },
        'hp_flying_hats': { layout: 'second' },
        'hp_great_hall_fire_goblet': { layout: 'second' },
        'hp_great_hall_halloween': { layout: 'second' },
        'hp_great_hall_snow_ceiling': { layout: 'second' },
        'hp_guardians': { layout: 'second' },
        'hp_harry_dumbledore': { layout: 'second' },
        'hp_harry_voldemort': { layout: 'second' },
        'hp_hogwarts_dementors_b': { layout: 'second' },
        'hp_hogwarts_express': { layout: 'second' },
        'hp_hogwarts_express_hagrid': { layout: 'second' },
        'hp_hogwarts_night': { layout: 'second' },
        'hp_hogwarts_protection': { layout: 'second' },
        'hp_hogwarts_protection_fail': { layout: 'second' },
        'hp_hogwarts_scenery': { layout: 'second' },
        'hp_hogwarts_snow_day': { layout: 'second' },
        'hp_hogwarts_stairs': { layout: 'second' },
        'hp_hogwarts_sunset': { layout: 'second' },
        'hp_hogwarts_thunder': { layout: 'second' },
        'hp_hogwarts_under_attack': { layout: 'second' },
        'hp_hogwarts_under_attack_b': { layout: 'second' },
        'hp_opening_credits_azkaban': { layout: 'second' },
        'hp_opening_credits_goblet': { layout: 'second' },
        'hp_opening_credits_hallows_a': { layout: 'second' },
        'hp_opening_credits_hallows_b': { layout: 'second' },
        'hp_opening_credits_phenix': { layout: 'second' },
        'hp_opening_credits_prince': { layout: 'second' },
        'hp_opening_credits_secrets': { layout: 'second' },
        'hp_opening_credits_stone': { layout: 'second' },
        'hp_pensieve': { layout: 'second' },
        'hp_pensieve_ink': { layout: 'second' },
        'hp_quidditch_stadium': { layout: 'second' },
        'hp_severus_back': { layout: 'second' },
        'hp_severus_minerva': { layout: 'second' },
        'hp_severus_patronus_a': { layout: 'second' },
        'hp_severus_patronus_b': { layout: 'second' },
        'hp_severus_transportation': { layout: 'second' },
        'hp_slughorn_stealing': { layout: 'second' },
        'hp_students_on_boats': { layout: 'second' },
        'hp_voldemort_hogwarts_attack': { layout: 'second' },
        'hp_voldemort_hogwarts_attack_b': { layout: 'second' },
        'hp_voldemort_terminated': { layout: 'second' },
        'hp_walking_great_hall': { layout: 'second' },
        'hp_wand_choice': { layout: 'second' },
        'hp_wand_thunder': { layout: 'second' },
        'hp_wands_up': { layout: 'second' },
        'hp_whomping_willow_hogwarts': { layout: 'second' },
        'hp_whomping_willow_hogwarts_bird': { layout: 'second' },
        'hp_whomping_willow_hogwarts_winter': { layout: 'second' },
        'hp_wisley_fireworks': { layout: 'second' },
        'mad_max_fury_road_opening_scene_a': { layout: 'second' },
        'matrix_blue_pill': { layout: 'second' },
        'matrix_bullet_time_a': { layout: 'second' },
        'matrix_bullet_time_b': { layout: 'second' },
        'matrix_bullets_sockets': { layout: 'second' },
        'matrix_children_magic': { layout: 'second' },
        'matrix_deja_vu': { layout: 'second' },
        'matrix_end_credits': { layout: 'second' },
        'matrix_fire_a': { layout: 'second' },
        'matrix_keanu_reeves': { layout: 'second' },
        'matrix_matrix_full': { layout: 'second' },
        'matrix_matrix_full_alt': { layout: 'second' },
        'matrix_matrix_system_failure': { layout: 'second' },
        'matrix_morpheus_come_on': { layout: 'second' },
        'matrix_morpheus_energy': { layout: 'second' },
        'matrix_morpheus_neo_crowd_a': { layout: 'second' },
        'matrix_morpheus_neo_crowd_b': { layout: 'second' },
        'matrix_morpheus_running_out': { layout: 'second' },
        'matrix_morpheus_smith_a': { layout: 'second' },
        'matrix_neo_arrested': { layout: 'second' },
        'matrix_neo_bullets_down': { layout: 'second' },
        'matrix_neo_come_on': { layout: 'second' },
        'matrix_neo_flying': { layout: 'second' },
        'matrix_neo_fusioning_smith': { layout: 'second' },
        'matrix_neo_grabbing_bullet': { layout: 'second' },
        'matrix_neo_grabbing_bullets': { layout: 'second' },
        'matrix_neo_looks_up': { layout: 'second' },
        'matrix_neo_matrix_smiths': { layout: 'second' },
        'matrix_neo_morpheus_a': { layout: 'second' },
        'matrix_neo_opening_eyes': { layout: 'second' },
        'matrix_neo_questioning': { layout: 'second' },
        'matrix_neo_smith_subway_a': { layout: 'second' },
        'matrix_neo_spoon': { layout: 'second' },
        'matrix_neo_stopping_bullets': { layout: 'second' },
        'matrix_phone': { layout: 'second' },
        'matrix_pills_a': { layout: 'second' },
        'matrix_pills_b': { layout: 'second' },
        'matrix_rain_car': { layout: 'second' },
        'matrix_rain_car_b': { layout: 'second' },
        'matrix_smith_half_turn': { layout: 'second' },
        'matrix_stairs_a': { layout: 'second' },
        'matrix_trinity_hanging_explosion': { layout: 'second' }
    },
    getRandomQuote: function() {
        const random_float = Math.random();
        const amount_of_quotes = Object.keys(story.quotes).length;
        const random_index = Math.ceil(amount_of_quotes * random_float) - 1;
        const random_quote = story.quotes[random_index];
        return random_quote;
    },
    getNextSceneId: function(current_scene_id) {
        const scenes_id = Object.keys(story.scenes);
        const next_index = scenes_id.indexOf(current_scene_id) + 1;
        const next_scene_id = scenes_id[next_index];
        return next_scene_id;
    },
    getPreviousSceneId: function(current_scene_id) {
        const scenes_id = Object.keys(story.scenes);
        const previous_index = scenes_id.indexOf(current_scene_id) - 1;
        const previous_scene_id = scenes_id[previous_index];
        return previous_scene_id;
    },
    elements: {
        loader: window.parent.document.querySelector('#app_loader'),
        main: document.querySelector('main'),
        progress: document.getElementById('app_progress')
    },
    layouts: {
        first: function(data) {
            let markup = story.includes.css_video_frames(data.scene_current_id);
            markup += story.includes.navigation(data.scene_current_id);
            markup += story.includes.onboarding();
            return markup;
        },
        second: function(data) {
            let markup = story.includes.css_video_frames_alt(data.scene_current_id);
            markup += story.includes.scroll_frames('json/'+data.scene_current_id+'.json');
            markup += story.includes.navigation_alt(data.scene_current_id);
            markup += story.includes.onboarding_scroll();
            return markup;
        },
        fourth: function(data) {
            let markup = story.includes.css_video_frames('matter-j');
            var xhr = new XMLHttpRequest();
            xhr.onload = function() {
                story.elements.main.innerHTML = markup + this.responseXML.body.innerHTML;
            }
            xhr.open("GET", "about.html");
            xhr.responseType = "document";
            xhr.send();
        }
    },
    includes: {
        scroll_frames: function(jsonURL) {
            return `
                <article class="c-position m-sticky m-top-0 u-h-100vh">
                    <figure class="u-w-100 u-h-100vh u-brep-no-repeat u-bpos-center u-m-none u-p-none"
                        style="will-change: background-image, background-size;" 
                        scroll-frames="scene"
                        scroll-frames-detector="app_scene_detector" 
                        data-json="${jsonURL}">
                    </figure>
                    <div class="c-position m-fixed m-top-0 u-w-100 u-h-100vh u-pe-none u-faded u-bg-stripes" u-none="sm"></div>
                </article>
                <div id="app_scene_detector"></div>
                <div id="app_screen_height" class="u-h-100vh"></div>
            `
        },
        navigation: function(current_scene_id) {
            return `
                <nav class="c-position m-fixed m-bottom-md m-left-0 c-grid m-center m-nowrap u-w-100" m-bottom-25="sm" role="navigation">
                    <a href="scene.html?scene=${story.getPreviousSceneId(current_scene_id)}" class="c-btn m-thin m-transparent c-effect m-span-180-core-x m-span-180-rotate u-lh-0 u-fs-lg" u-p-sm="sm" u-fs-md="sm" title="Previous scene">
                        <span><span class="c-shape m-chevron-left"></span></span>
                    </a>
                    <a href="scene.html?scene=${story.getNextSceneId(current_scene_id)}" class="c-btn m-thin c-effect m-span-180-core-x m-span-180-rotate u-lh-0 u-fs-lg" u-p-sm="sm" u-fs-md="sm" title="Next scene">
                        <span><span class="c-shape m-chevron-right"></span></span>
                    </a>
                </nav>
            `;
        },
        navigation_alt: function(current_scene_id) {
            return `
                <nav class="c-position m-relative c-grid m-center m-nowrap u-w-100 u-bg-gradient-vertical u-pb-xxl" u-pb-lg="sm" role="navigation">
                    <a href="scene.html?scene=${story.getPreviousSceneId(current_scene_id)}" class="c-btn m-thin m-transparent c-effect m-span-180-core-x m-span-180-rotate u-lh-0 u-fs-lg" u-p-sm="sm" u-fs-md="sm" title="Previous scene">
                        <span><span class="c-shape m-chevron-left"></span></span>
                    </a>
                    <a href="scene.html?scene=${story.getNextSceneId(current_scene_id)}" class="c-btn m-thin c-effect m-span-180-core-x m-span-180-rotate u-lh-0 u-fs-lg" u-p-sm="sm" u-fs-md="sm" title="Next scene">
                        <span><span class="c-shape m-chevron-right"></span></span>
                    </a>
                </nav>
            `;
        },
        onboarding_scroll: function() {
            return `
                <div class="c-position m-fixed m-middle-center m-anchor-top-center c-grid m-nowrap m-center u-ta-center u-mt-xl"
                    scroll-btween="app_scene_onboarding_mouse"
                    scroll-btween-detector="app_scene_detector" 
                    data-opacity="|0:1 to 15:0 to 100:0|"
                    u-mt-md="sm">
                    <div class="c-spacing m-w-6 u-p-xxs">
                        <span class="c-shape m-mouse u-fs-xl" u-fs-lg="sm"></span> 
                        <p class="u-fs-xs u-m-none u-ff-lead u-c-primary-max u-lh-1">Scroll down</p>
                    </div>
                    <div class="c-spacing m-w-6 u-p-xxs u-orient-portrait" u-none="md,xl">
                        <span class="c-shape m-orientation-landscape u-fs-xl" u-fs-lg="sm"></span> 
                        <p class="u-fs-xs u-m-none u-ff-lead u-c-primary-max u-lh-1">Landscape orientation recommended</p>
                    </div>
                </div>
            `
        },
        onboarding: function() {
            return `
                <div class="c-position m-fixed m-middle-center m-anchor-top-center u-ta-center u-mt-xl" u-mt-md="sm">
                    <div class="u-p-xxs u-orient-portrait" u-none="md,xl">
                        <span class="c-shape m-orientation-landscape u-fs-xl" u-fs-lg="sm"></span><br>
                        <p class="u-fs-xs u-m-none u-ff-lead u-c-primary-max u-lh-1">Landscape orientation recommended</p>
                    </div>
                </div>
            `
        },
        css_video_frames_alt: function(id) {

            // <div class="c-position m-fixed m-top-0 u-w-100 u-h-100vh u-bc-primary-rev u-pe-none u-faded"></div>
            // <div class="c-position m-fixed m-top-0 u-w-100 u-h-100vh u-pe-none u-faded u-bg-stripes" u-none="sm"></div>
            return `
                <link rel="stylesheet" href="css/${id}.css">
                <div class="c-position m-relative">
                    <div id="${id}" class="u-minh-100vh u-minw-100vw"></div>
                    <div class="c-position m-fixed m-top-0 u-w-100 u-h-100vh u-pe-none u-bg-stripes"></div>
                </div>
            `
        },
        css_video_frames: function(id) {

            // <div class="c-position m-fixed m-top-0 u-w-100 u-h-100vh u-bc-primary-rev u-pe-none u-faded"></div>
            // <div class="c-position m-fixed m-top-0 u-w-100 u-h-100vh u-pe-none u-faded u-bg-stripes" u-none="sm"></div>
            return `
                <link rel="stylesheet" href="css/${id}.css">
                <div class="c-grid c-position m-fixed m-middle-center m-anchor-middle-center">
                    <div id="${id}" class="u-minh-100vh u-minw-100vw"></div>
                </div>
                <div class="c-position m-fixed m-top-0 u-w-100 u-h-100vh u-pe-none u-bg-stripes"></div>
            `
        }
    },
    update: function() {
        const gets = new URLSearchParams(location.search);
        let scene_current_id = gets.get('scene');
        console.log(scene_current_id);
        // Build the scene content
        if (scene_current_id === null) {
            scene_current_id = Object.keys(story.scenes)[0];
        }
        const scene = {
            scene_current_id: scene_current_id,
            scene_layout: story.scenes[scene_current_id].layout,
            scene_data: story.scenes[scene_current_id].data
        };
        console.log(scene);
        // Insert HTML
        const markup = this.layouts[scene.scene_layout](scene);
        this.elements.main.innerHTML = markup;
        if (this.elements.loader !== null) {
            // Scene loaded
            window.addEventListener('load', function() {
                // Reveal scene once loaded
                story.elements.loader.classList.add('u-transparent');
                // Remove all click effect nodes
                window.parent.document.querySelectorAll('.effect-click').forEach(function(el) {
                    el.remove();
                });
            });
        }
        // Manage smooth transitions between scenes
        document.querySelectorAll('a[href^="scene.html"]').forEach(function(el) {
            el.addEventListener('click', function(e) {
                e.preventDefault();
                story.elements.loader.classList.remove('u-transparent');
                const target_url = e.target.getAttribute('href');
                setTimeout(function() {
                    location.href = target_url;
                }, 500);
            });
        });
    }
}
story.update();

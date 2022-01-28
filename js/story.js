const story = {
    scenes: {
        'hp_diagon_alley': { layout: 'first'},
        'hp_dementor_opening_door': { layout: 'first'},
        'hp_clock_clouds': { layout: 'first'},
        'mad_max_fury_road_opening_scene_a': {
            layout: 'first'
        },
        'harry_potter_hogwarts_dementors_a': {
            layout: 'first'
        },
        'about': {
            layout: 'first'
        }
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
        let gets = new URLSearchParams(location.search);
        const scene_current_id = gets.get('scene');
        console.log(scene_current_id);
        // Build the scene content
        if (scene_current_id !== null) {
            const scene = {
                scene_current_id: scene_current_id,
                scene_layout: story.scenes[scene_current_id].layout,
                scene_data: story.scenes[scene_current_id].data
            };
            if (typeof scene == 'object') {
                // Insert HTML
                const markup = this.layouts[scene.scene_layout](scene);
                this.elements.main.innerHTML = markup;
                
            }
        }
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

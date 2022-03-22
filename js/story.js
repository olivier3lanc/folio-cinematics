const story = {
    includes: {
        scroll_frames: function(scene_id, amount) {
            return `
                <article class="c-position m-sticky m-top-0 u-h-100vh">
                    <figure class="u-w-100 u-h-100vh u-brep-no-repeat u-bpos-center u-m-none u-p-none"
                        style="will-change: background-image, background-size;" 
                        scroll-frames="scene"
                        data-detector="app_scene_detector" 
                        data-url-mask="https://olivier3lanc.github.io/cinematics-resources/${scene_id}/${scene_id}_|1 to ${amount}|.webp">
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
        onboarding_scroll: function() {
            return `
                <div class="c-position m-fixed m-bottom-center m-anchor-bottom-center c-grid m-nowrap m-center u-ta-center u-pb-md">
                    <div class="c-spacing m-w-6 c-grid m-column m-middle">
                        <span class="c-shape m-mouse u-fs-xl u-mb-xs" u-fs-lg="sm"></span> 
                        <p class="u-fs-xs u-m-none u-ff-lead u-c-primary-max u-lh-1" u-fs-xxs="sm">Scroll down and up</p>
                    </div>
                    <div class="c-spacing m-w-6 c-grid m-column m-middle u-orient-portrait" u-none="md,xl">
                        <span class="c-shape m-orientation-landscape u-fs-xl u-mb-xs" u-fs-lg="sm"></span> 
                        <p class="u-fs-xs u-m-none u-ff-lead u-c-primary-max u-lh-1" u-fs-xxs="sm">Landscape orientation recommended</p>
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
        }
    },
    update: function() {
        const gets = new URLSearchParams(location.search);
        let scene_current_id = gets.get('scene');
        let amount = gets.get('amount');
        if (scene_current_id !== null && amount !== null) {
            console.log(scene_current_id, amount);
            // Insert HTML
            let markup = story.includes.scroll_frames(scene_current_id, amount);
            markup += story.includes.onboarding_scroll();
            document.querySelector('main').innerHTML = markup;
        }
    }
}
story.update();

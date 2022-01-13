let app = {
    defaults: {
        el_audio_player: document.getElementById('app_audio_player'),
        el_play_pause_button: document.getElementById('app_play_pause'),
        el_audio_previous_button: document.getElementById('app_audio_previous'),
        el_audio_next_button: document.getElementById('app_audio_next'),
        el_audio_artist: document.getElementById('app_audio_artist'),
        el_audio_title: document.getElementById('app_audio_title'),
        el_loader: document.getElementById('app_loader'),
        el_scenes: document.getElementById('app_scenes'),
        el_icon_fs_enter: document.getElementById('app_icon_fs_enter'),
        el_icon_fs_exit: document.getElementById('app_icon_fs_exit'),
        el_fullscreen: document.getElementById('app_fullscreen'),
        el_effect_click: document.getElementById('app_effect_click'),
        isFullscreen: false,
        songs: {
            'audio/apparat-goodbye.mp3': {
                artist: 'Apparat',
                title: 'Goodbye'
            },
            'audio/teho-teardo-blixa-bargeld-a-quiet-life.mp3': {
                artist: 'Teho Teardo & Blixa Bargeld',
                title: 'A Quiet Life'
            },
            'audio/fever-ray-keep-the-streets-empty-for-me.mp3': {
                artist: 'Fever Ray',
                title: 'Keep the Streets Empty for Me'
            },
            'audio/apparat-joel.mp3': {
                artist: 'Apparat',
                title: 'Joel'
            },
            'audio/agnes-obel-familiar.mp3': {
                artist: 'Agnes Obel',
                title: 'Familiar'
            },
            'audio/chris-avantgarde-feat-red-rosamond-inside.mp3': {
                artist: 'Chris Avantgarde feat. Red Rosamond',
                title: 'Inside'
            },
            'audio/may-the-muse-bad-kingdom.mp3': {
                artist: 'May The Muse and Robot Koch',
                title: 'Bad Kingdom'
            },
            'audio/hozier-in-the-woods-somewhere.mp3': {
                artist: 'Hozier',
                title: 'In The Woods Somewhere'
            },
            'audio/bloc-party-the-pioneers-m83-remix.mp3': {
                artist: 'Bloc Party',
                title: 'The Pioneers (M83 Remix)'
            },
            'audio/peter-gabriel-my-body-is-a-cage.mp3': {
                artist: 'Peter Gabriel',
                title: 'My Body Is A Cage'
            },
            'audio/raury-god-s-whisper.mp3': {
                artist: 'Raury',
                title: 'God\'s Whisper'
            },
            'audio/ry-x-thunder.mp3': {
                artist: 'RY X',
                title: 'Thunder'
            }
        } 
    },
    seekAudio: function(cmd) {
        if (cmd == 'next' || cmd == 'previous') {
            // Get current
            const current_song_path = app.defaults.el_audio_player.getAttribute('src');
            const songs_paths = Object.keys(app.defaults.songs);
            const current_index = songs_paths.indexOf(current_song_path);
            let index_offset = 0;
            if (cmd == 'next') {
                index_offset = 1;
            }
            if (cmd == 'previous') {
                index_offset = -1;
            }
            const new_index = current_index + index_offset;
            if (new_index >= 0 && new_index <= songs_paths.length - 1) {
                // Pause
                this.pauseAudio();
                const new_song_path = songs_paths[new_index];
                // Replace file
                app.defaults.el_audio_player.setAttribute('src', new_song_path);
                // Load file
                app.defaults.el_audio_player.load();
                // Play
                this.playAudio();
                // Seek commands
                this.defaults.el_audio_previous_button.classList.add('u-pe-auto');
                this.defaults.el_audio_previous_button.classList.remove('u-faded');
                this.defaults.el_audio_next_button.classList.add('u-pe-auto');
                this.defaults.el_audio_next_button.classList.remove('u-faded');
            }
            if (new_index <= 0) {
                this.defaults.el_audio_previous_button.classList.add('u-faded');
                this.defaults.el_audio_previous_button.classList.remove('u-pe-auto');
            }
            if (new_index >= songs_paths.length - 1) {
                this.defaults.el_audio_next_button.classList.add('u-faded');
                this.defaults.el_audio_next_button.classList.remove('u-pe-auto');
            }
        }
    },
    showAudioInfo: function() {
        // Get current audio played
        const current_song = app.defaults.el_audio_player.getAttribute('src');
        const artist = app.defaults.songs[current_song].artist;
        const title = app.defaults.songs[current_song].title;
        app.defaults.el_audio_artist.innerText = artist;
        app.defaults.el_audio_title.innerText = title;
    },
    playAudio: function() {
        this.defaults.el_audio_player.play();
        this.defaults.el_play_pause_button.innerHTML = '<span class="c-shape m-pause u-anim-fade-in"></span>';
        this.defaults.el_play_pause_button.setAttribute('title', '[PAUSE] soundtrack');
        window.app_audio_player_paused = false;
        // console.log('playing '+this.defaults.el_audio_player.src);
        this.showAudioInfo();
        this.defaults.el_audio_next_button.classList.remove('u-none');
        this.defaults.el_audio_previous_button.classList.remove('u-none');
    },
    pauseAudio: function() {
        this.defaults.el_audio_player.pause();
        this.defaults.el_play_pause_button.innerHTML = '<span class="c-shape m-play u-anim-fade-in"></span>';
        this.defaults.el_play_pause_button.setAttribute('title', '[PLAY] soundtrack');
        window.app_audio_player_paused = true;
    },
    playPauseAudio: function() {
        if (this.defaults.el_audio_player !== null && this.defaults.el_play_pause_button !== null) {
            if (this.defaults.el_audio_player.paused) {
                this.playAudio();
            } else {
                this.pauseAudio();
            }
        }
    },
    toggleFullScreen: function() {
        const elem = document.body;
        if (this.defaults.isFullscreen) {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
            this.defaults.isFullscreen = false;
            this.defaults.el_icon_fs_enter.classList.remove('u-none');
            this.defaults.el_icon_fs_exit.classList.add('u-none');
            this.defaults.el_fullscreen.setAttribute('title', 'Enter fullscreen');
        } else {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            }
            this.defaults.isFullscreen = true;
            this.defaults.el_icon_fs_enter.classList.add('u-none');
            this.defaults.el_icon_fs_exit.classList.remove('u-none');
            this.defaults.el_fullscreen.setAttribute('title', 'Exit fullscreen');
        }
    },
    effectClick: function(e) {
        const el_effect_click = window.parent.document.createElement('div');
        el_effect_click.classList.add('c-position', 'm-fixed', 'c-shape', 'm-dot', 'u-transparent', 'u-fs-xl', 'u-pe-none', 'effect-click');
        el_effect_click.style.top = e.clientY+'px';
        el_effect_click.style.left = e.clientX+'px';
        el_effect_click.classList.remove('u-transparent');
        el_effect_click.classList.add('u-anim-click');
        setTimeout(function() {
            el_effect_click.remove();
        }, 1000);
        window.parent.document.body.appendChild(el_effect_click);
    },
    runOnceWindowLoaded: function() {
        document.body.style.opacity = 1;
        document.body.addEventListener('click', app.effectClick, {passive: true});
    },
    update: function() {
        window.app_audio_player_paused = true;
        window.addEventListener('load', app.runOnceWindowLoaded);
    }
}
app.update();
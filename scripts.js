// 音频混音器类
class AudioMixer {
    constructor() {
        this.audioCategories = [
            {
                title: '旋律素材',
                icon: '🎼',
                items: [
                    { title: '夏日旋律1', url: 'https://assets.mixkit.co/sfx/preview/mixkit-summer-fun-13.mp3' },
                    { title: '梦幻旋律1', url: 'https://assets.mixkit.co/sfx/preview/mixkit-fairy-flute-play-585.mp3' },
                    { title: '流行旋律1', url: 'https://assets.mixkit.co/sfx/preview/mixkit-cool-interface-click-tone-2568.mp3' },
                    { title: '电子旋律1', url: 'https://assets.mixkit.co/sfx/preview/mixkit-game-notification-wave-alarm-987.mp3' },
                    { title: '夏日旋律2', url: 'https://assets.mixkit.co/sfx/preview/mixkit-summer-fun-13.mp3' },
                    { title: '梦幻旋律2', url: 'https://assets.mixkit.co/sfx/preview/mixkit-fairy-flute-play-585.mp3' },
                    { title: '流行旋律2', url: 'https://assets.mixkit.co/sfx/preview/mixkit-cool-interface-click-tone-2568.mp3' },
                    { title: '电子旋律2', url: 'https://assets.mixkit.co/sfx/preview/mixkit-game-notification-wave-alarm-987.mp3' },
                    { title: '夏日旋律3', url: 'https://assets.mixkit.co/sfx/preview/mixkit-summer-fun-13.mp3' },
                    { title: '梦幻旋律3', url: 'https://assets.mixkit.co/sfx/preview/mixkit-fairy-flute-play-585.mp3' },
                    { title: '流行旋律3', url: 'https://assets.mixkit.co/sfx/preview/mixkit-cool-interface-click-tone-2568.mp3' },
                    { title: '电子旋律3', url: 'https://assets.mixkit.co/sfx/preview/mixkit-game-notification-wave-alarm-987.mp3' },
                    { title: '夏日旋律4', url: 'https://assets.mixkit.co/sfx/preview/mixkit-summer-fun-13.mp3' },
                    { title: '梦幻旋律4', url: 'https://assets.mixkit.co/sfx/preview/mixkit-fairy-flute-play-585.mp3' },
                    { title: '流行旋律4', url: 'https://assets.mixkit.co/sfx/preview/mixkit-cool-interface-click-tone-2568.mp3' },
                    { title: '电子旋律4', url: 'https://assets.mixkit.co/sfx/preview/mixkit-game-notification-wave-alarm-987.mp3' },
                    { title: '夏日旋律5', url: 'https://assets.mixkit.co/sfx/preview/mixkit-summer-fun-13.mp3' },
                    { title: '梦幻旋律5', url: 'https://assets.mixkit.co/sfx/preview/mixkit-fairy-flute-play-585.mp3' },
                    { title: '流行旋律5', url: 'https://assets.mixkit.co/sfx/preview/mixkit-cool-interface-click-tone-2568.mp3' },
                    { title: '电子旋律5', url: 'https://assets.mixkit.co/sfx/preview/mixkit-game-notification-wave-alarm-987.mp3' }
                ]
            },
            {
                title: '节奏素材',
                icon: '🥁',
                items: [
                    { title: '电子节奏1', url: 'https://assets.mixkit.co/sfx/preview/mixkit-electronic-retro-block-hit-2185.mp3' },
                    { title: '舞曲节奏1', url: 'https://assets.mixkit.co/sfx/preview/mixkit-tribal-dry-drum-558.mp3' },
                    { title: '摇滚节奏1', url: 'https://assets.mixkit.co/sfx/preview/mixkit-drum-bass-hit-2294.mp3' },
                    { title: '拉丁节奏1', url: 'https://assets.mixkit.co/sfx/preview/mixkit-drum-and-percussion-545.mp3' },
                    { title: '电子节奏2', url: 'https://assets.mixkit.co/sfx/preview/mixkit-electronic-retro-block-hit-2185.mp3' },
                    { title: '舞曲节奏2', url: 'https://assets.mixkit.co/sfx/preview/mixkit-tribal-dry-drum-558.mp3' },
                    { title: '摇滚节奏2', url: 'https://assets.mixkit.co/sfx/preview/mixkit-drum-bass-hit-2294.mp3' },
                    { title: '拉丁节奏2', url: 'https://assets.mixkit.co/sfx/preview/mixkit-drum-and-percussion-545.mp3' },
                    { title: '电子节奏3', url: 'https://assets.mixkit.co/sfx/preview/mixkit-electronic-retro-block-hit-2185.mp3' },
                    { title: '舞曲节奏3', url: 'https://assets.mixkit.co/sfx/preview/mixkit-tribal-dry-drum-558.mp3' },
                    { title: '摇滚节奏3', url: 'https://assets.mixkit.co/sfx/preview/mixkit-drum-bass-hit-2294.mp3' },
                    { title: '拉丁节奏3', url: 'https://assets.mixkit.co/sfx/preview/mixkit-drum-and-percussion-545.mp3' },
                    { title: '电子节奏4', url: 'https://assets.mixkit.co/sfx/preview/mixkit-electronic-retro-block-hit-2185.mp3' },
                    { title: '舞曲节奏4', url: 'https://assets.mixkit.co/sfx/preview/mixkit-tribal-dry-drum-558.mp3' },
                    { title: '摇滚节奏4', url: 'https://assets.mixkit.co/sfx/preview/mixkit-drum-bass-hit-2294.mp3' },
                    { title: '拉丁节奏4', url: 'https://assets.mixkit.co/sfx/preview/mixkit-drum-and-percussion-545.mp3' },
                    { title: '电子节奏5', url: 'https://assets.mixkit.co/sfx/preview/mixkit-electronic-retro-block-hit-2185.mp3' },
                    { title: '舞曲节奏5', url: 'https://assets.mixkit.co/sfx/preview/mixkit-tribal-dry-drum-558.mp3' },
                    { title: '摇滚节奏5', url: 'https://assets.mixkit.co/sfx/preview/mixkit-drum-bass-hit-2294.mp3' },
                    { title: '拉丁节奏5', url: 'https://assets.mixkit.co/sfx/preview/mixkit-drum-and-percussion-545.mp3' }
                ]
            },
            {
                title: '贝斯素材',
                icon: '🎸',
                items: [
                    { title: '低音贝斯1', url: 'https://assets.mixkit.co/sfx/preview/mixkit-bass-guitar-single-note-2331.mp3' },
                    { title: '电贝斯1', url: 'https://assets.mixkit.co/sfx/preview/mixkit-deep-bass-hit-2294.mp3' },
                    { title: '摇滚贝斯1', url: 'https://assets.mixkit.co/sfx/preview/mixkit-happy-guitar-chords-2319.mp3' },
                    { title: '爵士贝斯1', url: 'https://assets.mixkit.co/sfx/preview/mixkit-cool-guitar-riff-2321.mp3' },
                    { title: '低音贝斯2', url: 'https://assets.mixkit.co/sfx/preview/mixkit-bass-guitar-single-note-2331.mp3' },
                    { title: '电贝斯2', url: 'https://assets.mixkit.co/sfx/preview/mixkit-deep-bass-hit-2294.mp3' },
                    { title: '摇滚贝斯2', url: 'https://assets.mixkit.co/sfx/preview/mixkit-happy-guitar-chords-2319.mp3' },
                    { title: '爵士贝斯2', url: 'https://assets.mixkit.co/sfx/preview/mixkit-cool-guitar-riff-2321.mp3' },
                    { title: '低音贝斯3', url: 'https://assets.mixkit.co/sfx/preview/mixkit-bass-guitar-single-note-2331.mp3' },
                    { title: '电贝斯3', url: 'https://assets.mixkit.co/sfx/preview/mixkit-deep-bass-hit-2294.mp3' },
                    { title: '摇滚贝斯3', url: 'https://assets.mixkit.co/sfx/preview/mixkit-happy-guitar-chords-2319.mp3' },
                    { title: '爵士贝斯3', url: 'https://assets.mixkit.co/sfx/preview/mixkit-cool-guitar-riff-2321.mp3' },
                    { title: '低音贝斯4', url: 'https://assets.mixkit.co/sfx/preview/mixkit-bass-guitar-single-note-2331.mp3' },
                    { title: '电贝斯4', url: 'https://assets.mixkit.co/sfx/preview/mixkit-deep-bass-hit-2294.mp3' },
                    { title: '摇滚贝斯4', url: 'https://assets.mixkit.co/sfx/preview/mixkit-happy-guitar-chords-2319.mp3' },
                    { title: '爵士贝斯4', url: 'https://assets.mixkit.co/sfx/preview/mixkit-cool-guitar-riff-2321.mp3' },
                    { title: '低音贝斯5', url: 'https://assets.mixkit.co/sfx/preview/mixkit-bass-guitar-single-note-2331.mp3' },
                    { title: '电贝斯5', url: 'https://assets.mixkit.co/sfx/preview/mixkit-deep-bass-hit-2294.mp3' },
                    { title: '摇滚贝斯5', url: 'https://assets.mixkit.co/sfx/preview/mixkit-happy-guitar-chords-2319.mp3' },
                    { title: '爵士贝斯5', url: 'https://assets.mixkit.co/sfx/preview/mixkit-cool-guitar-riff-2321.mp3' }
                ]
            },
            {
                title: '钢琴素材',
                icon: '🎹',
                items: [
                    { title: '钢琴和弦1', url: 'https://assets.mixkit.co/sfx/preview/mixkit-piano-kit-682.mp3' },
                    { title: '古典钢琴1', url: 'https://assets.mixkit.co/sfx/preview/mixkit-piano-falling-tone-2259.mp3' },
                    { title: '爵士钢琴1', url: 'https://assets.mixkit.co/sfx/preview/mixkit-piano-hit-with-medium-echo-2269.mp3' },
                    { title: '流行钢琴1', url: 'https://assets.mixkit.co/sfx/preview/mixkit-happy-piano-falling-tones-2260.mp3' },
                    { title: '钢琴和弦2', url: 'https://assets.mixkit.co/sfx/preview/mixkit-piano-kit-682.mp3' },
                    { title: '古典钢琴2', url: 'https://assets.mixkit.co/sfx/preview/mixkit-piano-falling-tone-2259.mp3' },
                    { title: '爵士钢琴2', url: 'https://assets.mixkit.co/sfx/preview/mixkit-piano-hit-with-medium-echo-2269.mp3' },
                    { title: '流行钢琴2', url: 'https://assets.mixkit.co/sfx/preview/mixkit-happy-piano-falling-tones-2260.mp3' },
                    { title: '钢琴和弦3', url: 'https://assets.mixkit.co/sfx/preview/mixkit-piano-kit-682.mp3' },
                    { title: '古典钢琴3', url: 'https://assets.mixkit.co/sfx/preview/mixkit-piano-falling-tone-2259.mp3' },
                    { title: '爵士钢琴3', url: 'https://assets.mixkit.co/sfx/preview/mixkit-piano-hit-with-medium-echo-2269.mp3' },
                    { title: '流行钢琴3', url: 'https://assets.mixkit.co/sfx/preview/mixkit-happy-piano-falling-tones-2260.mp3' },
                    { title: '钢琴和弦4', url: 'https://assets.mixkit.co/sfx/preview/mixkit-piano-kit-682.mp3' },
                    { title: '古典钢琴4', url: 'https://assets.mixkit.co/sfx/preview/mixkit-piano-falling-tone-2259.mp3' },
                    { title: '爵士钢琴4', url: 'https://assets.mixkit.co/sfx/preview/mixkit-piano-hit-with-medium-echo-2269.mp3' },
                    { title: '流行钢琴4', url: 'https://assets.mixkit.co/sfx/preview/mixkit-happy-piano-falling-tones-2260.mp3' },
                    { title: '钢琴和弦5', url: 'https://assets.mixkit.co/sfx/preview/mixkit-piano-kit-682.mp3' },
                    { title: '古典钢琴5', url: 'https://assets.mixkit.co/sfx/preview/mixkit-piano-falling-tone-2259.mp3' },
                    { title: '爵士钢琴5', url: 'https://assets.mixkit.co/sfx/preview/mixkit-piano-hit-with-medium-echo-2269.mp3' },
                    { title: '流行钢琴5', url: 'https://assets.mixkit.co/sfx/preview/mixkit-happy-piano-falling-tones-2260.mp3' }
                ]
            },
            {
                title: '鼓点素材',
                icon: '🥁',
                items: [
                    { title: '鼓点循环1', url: 'https://assets.mixkit.co/sfx/preview/mixkit-drum-bass-hit-2294.mp3' },
                    { title: '电子鼓1', url: 'https://assets.mixkit.co/sfx/preview/mixkit-drumsticks-tap-2251.mp3' },
                    { title: '摇滚鼓1', url: 'https://assets.mixkit.co/sfx/preview/mixkit-tribal-dry-drum-558.mp3' },
                    { title: '嘻哈鼓1', url: 'https://assets.mixkit.co/sfx/preview/mixkit-house-needle-drop-hit-2473.mp3' },
                    { title: '鼓点循环2', url: 'https://assets.mixkit.co/sfx/preview/mixkit-drum-bass-hit-2294.mp3' },
                    { title: '电子鼓2', url: 'https://assets.mixkit.co/sfx/preview/mixkit-drumsticks-tap-2251.mp3' },
                    { title: '摇滚鼓2', url: 'https://assets.mixkit.co/sfx/preview/mixkit-tribal-dry-drum-558.mp3' },
                    { title: '嘻哈鼓2', url: 'https://assets.mixkit.co/sfx/preview/mixkit-house-needle-drop-hit-2473.mp3' },
                    { title: '鼓点循环3', url: 'https://assets.mixkit.co/sfx/preview/mixkit-drum-bass-hit-2294.mp3' },
                    { title: '电子鼓3', url: 'https://assets.mixkit.co/sfx/preview/mixkit-drumsticks-tap-2251.mp3' },
                    { title: '摇滚鼓3', url: 'https://assets.mixkit.co/sfx/preview/mixkit-tribal-dry-drum-558.mp3' },
                    { title: '嘻哈鼓3', url: 'https://assets.mixkit.co/sfx/preview/mixkit-house-needle-drop-hit-2473.mp3' },
                    { title: '鼓点循环4', url: 'https://assets.mixkit.co/sfx/preview/mixkit-drum-bass-hit-2294.mp3' },
                    { title: '电子鼓4', url: 'https://assets.mixkit.co/sfx/preview/mixkit-drumsticks-tap-2251.mp3' },
                    { title: '摇滚鼓4', url: 'https://assets.mixkit.co/sfx/preview/mixkit-tribal-dry-drum-558.mp3' },
                    { title: '嘻哈鼓4', url: 'https://assets.mixkit.co/sfx/preview/mixkit-house-needle-drop-hit-2473.mp3' },
                    { title: '鼓点循环5', url: 'https://assets.mixkit.co/sfx/preview/mixkit-drum-bass-hit-2294.mp3' },
                    { title: '电子鼓5', url: 'https://assets.mixkit.co/sfx/preview/mixkit-drumsticks-tap-2251.mp3' },
                    { title: '摇滚鼓5', url: 'https://assets.mixkit.co/sfx/preview/mixkit-tribal-dry-drum-558.mp3' },
                    { title: '嘻哈鼓5', url: 'https://assets.mixkit.co/sfx/preview/mixkit-house-needle-drop-hit-2473.mp3' }
                ]
            },
            {
                title: '环境音效',
                icon: '🌿',
                items: [
                    { title: '环境音效1', url: 'https://assets.mixkit.co/sfx/preview/mixkit-forest-bird-singing-2432.mp3' },
                    { title: '海浪声1', url: 'https://assets.mixkit.co/sfx/preview/mixkit-sea-waves-loop-1196.mp3' },
                    { title: '雨声1', url: 'https://assets.mixkit.co/sfx/preview/mixkit-rain-and-thunder-storm-2390.mp3' },
                    { title: '城市环境1', url: 'https://assets.mixkit.co/sfx/preview/mixkit-traffic-street-ambience-2431.mp3' },
                    { title: '环境音效2', url: 'https://assets.mixkit.co/sfx/preview/mixkit-forest-bird-singing-2432.mp3' },
                    { title: '海浪声2', url: 'https://assets.mixkit.co/sfx/preview/mixkit-sea-waves-loop-1196.mp3' },
                    { title: '雨声2', url: 'https://assets.mixkit.co/sfx/preview/mixkit-rain-and-thunder-storm-2390.mp3' },
                    { title: '城市环境2', url: 'https://assets.mixkit.co/sfx/preview/mixkit-traffic-street-ambience-2431.mp3' },
                    { title: '环境音效3', url: 'https://assets.mixkit.co/sfx/preview/mixkit-forest-bird-singing-2432.mp3' },
                    { title: '海浪声3', url: 'https://assets.mixkit.co/sfx/preview/mixkit-sea-waves-loop-1196.mp3' },
                    { title: '雨声3', url: 'https://assets.mixkit.co/sfx/preview/mixkit-rain-and-thunder-storm-2390.mp3' },
                    { title: '城市环境3', url: 'https://assets.mixkit.co/sfx/preview/mixkit-traffic-street-ambience-2431.mp3' },
                    { title: '环境音效4', url: 'https://assets.mixkit.co/sfx/preview/mixkit-forest-bird-singing-2432.mp3' },
                    { title: '海浪声4', url: 'https://assets.mixkit.co/sfx/preview/mixkit-sea-waves-loop-1196.mp3' },
                    { title: '雨声4', url: 'https://assets.mixkit.co/sfx/preview/mixkit-rain-and-thunder-storm-2390.mp3' },
                    { title: '城市环境4', url: 'https://assets.mixkit.co/sfx/preview/mixkit-traffic-street-ambience-2431.mp3' },
                    { title: '环境音效5', url: 'https://assets.mixkit.co/sfx/preview/mixkit-forest-bird-singing-2432.mp3' },
                    { title: '海浪声5', url: 'https://assets.mixkit.co/sfx/preview/mixkit-sea-waves-loop-1196.mp3' },
                    { title: '雨声5', url: 'https://assets.mixkit.co/sfx/preview/mixkit-rain-and-thunder-storm-2390.mp3' },
                    { title: '城市环境5', url: 'https://assets.mixkit.co/sfx/preview/mixkit-traffic-street-ambience-2431.mp3' }
                ]
            }
        ];
        this.currentAudio = new Map(); // 使用Map存储音频对象
        this.trackQueue = [];
        this.currentTime = 0;
        this.timelineInterval = null;
        this.isPaused = false;
        this.masterVolume = 1;
        this.trackVolumes = {}; // 存储各个音轨的音量
        this.trackCount = 4; // 默认创建4条音轨
        
        this.init();
    }

    init() {
        this.calculateScrollbarWidth();
        this.initializeAudioGrid();
        this.initializeTimeAxis();
        this.initializeTracks();
        this.setupEventListeners();
        this.setupDragAndDrop();
    }

    calculateScrollbarWidth() {
        // 创建一个带滚动条的div
        const outer = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.overflow = 'scroll';
        document.body.appendChild(outer);
        
        // 创建一个内部div
        const inner = document.createElement('div');
        outer.appendChild(inner);
        
        // 计算滚动条宽度（外部div宽度减内部div宽度）
        const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
        
        // 清理临时元素
        outer.parentNode.removeChild(outer);
        
        // 设置CSS变量
        document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
    }

    initializeAudioGrid() {
        const audioGrid = document.getElementById('audioGrid');
        audioGrid.innerHTML = ''; // 清空现有内容
        
        this.audioCategories.forEach((category) => {
            // 创建分类容器
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'audio-category';
            
            // 创建分类标题
            const titleDiv = document.createElement('div');
            titleDiv.className = 'audio-category-title';
            titleDiv.innerHTML = `
                <span><span class="audio-category-icon">${category.icon}</span> ${category.title}</span>
                <i class="fas fa-chevron-down audio-category-toggle"></i>
            `;
            categoryDiv.appendChild(titleDiv);
            
            // 创建音频项目容器
            const itemsContainer = document.createElement('div');
            itemsContainer.className = 'audio-items-container';
            
            // 直接添加所有音频项目到容器
            category.items.forEach((item) => {
                const div = document.createElement('div');
                div.className = 'audio-item';
                div.draggable = true;
                div.innerHTML = `<span>${item.title}</span>`;
                div.dataset.url = item.url;
                div.dataset.title = item.title;
                
                div.addEventListener('dragstart', (e) => this.handleDragStart(e));
                itemsContainer.appendChild(div);
            });
            
            categoryDiv.appendChild(itemsContainer);
            
            // 添加点击事件
            categoryDiv.addEventListener('click', (e) => {
                // 阻止事件传播到音频项目
                if (e.target.closest('.audio-item') || e.target.classList.contains('audio-item')) {
                    return;
                }
                
                // 关闭所有其他分类
                document.querySelectorAll('.audio-category').forEach(otherCategory => {
                    if (otherCategory !== categoryDiv && otherCategory.classList.contains('expanded')) {
                        otherCategory.classList.remove('expanded');
                    }
                });
                
                // 切换当前分类的展开状态
                categoryDiv.classList.toggle('expanded');
            });
            
            audioGrid.appendChild(categoryDiv);
        });
    }

    initializeTimeAxis() {
        const timeAxis = document.getElementById('timeAxis');
        timeAxis.innerHTML = '';
        
        // 生成更精细的时间刻度
        for (let i = 0; i <= 30; i++) {
            const timeMarker = document.createElement('span');
            const minutes = Math.floor(i / 60);
            const seconds = i % 60;
            timeMarker.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            timeMarker.style.left = `${(i / 30) * 100}%`;
            timeAxis.appendChild(timeMarker);
        }
    }

    initializeTracks() {
        const trackContainer = document.getElementById('trackContainer');
        trackContainer.innerHTML = '';
        
        for (let i = 1; i <= this.trackCount; i++) {
            // 创建音轨
            const trackLane = document.createElement('div');
            trackLane.className = 'track-lane';
            trackLane.id = `track${i}`;
            trackLane.dataset.trackName = `音轨 ${i}`;
            
            // 创建音量控制器
            const volumeControl = document.createElement('div');
            volumeControl.className = 'track-volume-control';
            volumeControl.innerHTML = `
                <i class="fas fa-volume-up volume-icon"></i>
                <input type="range" class="volume-slider" min="0" max="100" value="100" data-track="${i}">
            `;
            
            trackLane.appendChild(volumeControl);
            trackContainer.appendChild(trackLane);
            
            // 初始化音轨音量
            this.trackVolumes[`track${i}`] = 1.0;
        }
        
        // 为所有音轨音量滑块添加事件监听
        document.querySelectorAll('.track-volume-control .volume-slider').forEach(slider => {
            slider.addEventListener('input', (e) => {
                const trackId = `track${e.target.dataset.track}`;
                const volume = e.target.value / 100;
                this.trackVolumes[trackId] = volume;
                this.updateTrackVolumeIcon(e.target);
                this.updateAllAudioVolumes();
            });
        });
    }

    updateTrackVolumeIcon(slider) {
        const volume = slider.value / 100;
        const icon = slider.previousElementSibling;
        
        if (volume === 0) {
            icon.className = 'fas fa-volume-mute volume-icon';
        } else if (volume < 0.5) {
            icon.className = 'fas fa-volume-down volume-icon';
        } else {
            icon.className = 'fas fa-volume-up volume-icon';
        }
    }

    setupEventListeners() {
        // 播放控制
        document.getElementById('playTrack').addEventListener('click', () => this.togglePlayback());
        document.getElementById('stop').addEventListener('click', () => this.stopAll());
        
        // 主音量控制
        document.getElementById('masterVolume').addEventListener('input', (e) => {
            this.masterVolume = e.target.value / 100;
            this.updateMasterVolumeIcon(e.target);
            this.updateAllAudioVolumes();
        });

        // 完整添加播放指示器拖动功能
        this.setupPlaybackIndicatorDrag();
    }

    // 更新主音量图标
    updateMasterVolumeIcon(slider) {
        const volume = slider.value / 100;
        const icon = slider.previousElementSibling;
        
        if (volume === 0) {
            icon.className = 'fas fa-volume-mute';
        } else if (volume < 0.5) {
            icon.className = 'fas fa-volume-down';
        } else {
            icon.className = 'fas fa-volume-up';
        }
    }

    setupDragAndDrop() {
        const trackArea = document.getElementById('trackArea');
        
        trackArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            trackArea.style.backgroundColor = 'rgba(168, 164, 255, 0.05)';
        });

        trackArea.addEventListener('dragleave', () => {
            trackArea.style.backgroundColor = 'transparent';
        });

        document.querySelectorAll('.track-lane').forEach(track => {
            this.setupTrackDragAndDrop(track);
        });
    }

    setupTrackDragAndDrop(track) {
        track.addEventListener('dragover', (e) => {
            e.preventDefault();
            track.style.backgroundColor = 'rgba(168, 164, 255, 0.1)';
        });

        track.addEventListener('dragleave', () => {
            track.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        });

        track.addEventListener('drop', (e) => {
            e.preventDefault();
            track.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            const data = JSON.parse(e.dataTransfer.getData('text/plain'));
            this.addTrackToTimeline(data, track);
        });
    }

    handleDragStart(e) {
        e.dataTransfer.setData('text/plain', JSON.stringify({
            url: e.target.dataset.url,
            title: e.target.dataset.title
        }));
    }

    addTrackToTimeline(data, targetTrack) {
        // 查找可用位置
        const position = this.findAvailablePosition(targetTrack);
        if (!position) {
            this.showNotification('轨道已满，请清理一些音频片段');
            return;
        }

        const trackItem = this.createTrackItem(data, position);
        targetTrack.appendChild(trackItem);
        this.makeTrackItemDraggable(trackItem, targetTrack);
        this.trackQueue.push({...data, trackId: targetTrack.id});

        // 预加载音频
        this.preloadAudio(data.url);
    }

    findAvailablePosition(track) {
        const existingItems = Array.from(track.querySelectorAll('.track-item'));
        const occupiedPositions = new Set();

        existingItems.forEach(item => {
            const start = parseInt(item.style.gridColumnStart);
            const end = parseInt(item.style.gridColumnEnd);
            for (let i = start; i < end; i++) {
                occupiedPositions.add(i);
            }
        });

        // 查找第一个可用的5格空间
        for (let i = 1; i <= 26; i++) {
            let available = true;
            for (let j = 0; j < 5; j++) {
                if (occupiedPositions.has(i + j)) {
                    available = false;
                    break;
                }
            }
            if (available) return i;
        }

        return null;
    }

    createTrackItem(data, position) {
        const trackItem = document.createElement('div');
        trackItem.className = 'track-item';
        trackItem.innerHTML = `
            <span style="min-width: 80px">${data.title}</span>
            <div class="track-controls">
                <button class="remove-btn" title="删除">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        trackItem.dataset.url = data.url;
        trackItem.dataset.duration = 5;
        trackItem.style.gridColumnStart = position;
        trackItem.style.gridColumnEnd = position + 5;
        trackItem.style.gridRowStart = "1";
        trackItem.style.gridRowEnd = "2";

        // 设置删除按钮
        const removeBtn = trackItem.querySelector('.remove-btn');
        removeBtn.addEventListener('click', () => this.removeTrack(trackItem));

        return trackItem;
    }

    makeTrackItemDraggable(trackItem, trackLane) {
        let isDragging = false;
        let startX, startLeft, gridSize;
        let lastValidPosition = 1;

        const onMouseDown = (e) => {
            if (e.target.classList.contains('remove-btn') || 
                e.target.closest('.remove-btn')) {
                return;
            }

            isDragging = true;
            startX = e.clientX;
            const rect = trackLane.getBoundingClientRect();
            gridSize = rect.width / 30;
            startLeft = parseInt(trackItem.style.gridColumnStart || 1);
            lastValidPosition = startLeft;

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
            e.preventDefault();
        };

        const onMouseMove = (e) => {
            if (!isDragging) return;

            // 移除防抖，提高拖动体验
            const deltaX = e.clientX - startX;
            const gridDelta = Math.round(deltaX / gridSize);
            let newStart = startLeft + gridDelta;
            newStart = Math.max(1, Math.min(26, newStart));

            if (this.isPositionAvailable(trackLane, newStart, trackItem)) {
                trackItem.style.gridColumnStart = newStart;
                trackItem.style.gridColumnEnd = newStart + 5;
                lastValidPosition = newStart;
            } else {
                // 如果新位置不可用，保持最后一个有效位置
                trackItem.style.gridColumnStart = lastValidPosition;
                trackItem.style.gridColumnEnd = lastValidPosition + 5;
            }
        };

        const onMouseUp = () => {
            if (!isDragging) return;
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            this.reorganizeTrackItems(trackLane);
        };

        trackItem.addEventListener('mousedown', onMouseDown);
    }

    /* 完整添加播放指示器拖动功能 */
    setupPlaybackIndicatorDrag() {
        const indicator = document.getElementById('playbackIndicator');
        const trackArea = document.getElementById('trackArea');
        let isDragging = false;
        let wasPaused = false;
        
        // 处理鼠标移动
        const handleMouseMove = (e) => {
            if (!isDragging) return;
            // 移除所有过渡动画，确保拖动平滑
            indicator.style.transition = 'none';
            this.updateIndicatorPosition(e.clientX);
        };
        
        // 处理鼠标释放
        const handleMouseUp = () => {
            if (!isDragging) return;
            isDragging = false;
            
            // 修复：拖动后不自动播放，保持暂停状态
            // 确保定时器停止
            if (this.timelineInterval) {
                clearInterval(this.timelineInterval);
                this.timelineInterval = null;
            }
            
            // 移除事件监听
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
        
        // 按下鼠标
        indicator.addEventListener('mousedown', (e) => {
            isDragging = true;
            wasPaused = this.isPaused; // 记录当前是否暂停状态
            
            // 如果正在播放，暂停播放
            if (!this.isPaused) {
                this.pausePlayback();
            }
            
            // 阻止事件冒泡和默认行为
            e.preventDefault();
            e.stopPropagation();
            
            // 添加移动和释放事件监听
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            
            // 立即根据点击位置更新指示器
            this.updateIndicatorPosition(e.clientX);
        });
        
        // 点击轨道区域任意位置也可以移动指示器
        trackArea.addEventListener('click', (e) => {
            // 排除点击音频项目和播放指示器的情况
            if (e.target.closest('.track-item') || e.target.closest('.playback-indicator')) {
                return;
            }
            
            // 记录当前状态
            const wasPaused = this.isPaused;
            
            // 如果正在播放，暂停播放
            if (!wasPaused) {
                this.pausePlayback();
            }
            
            // 更新指示器位置
            indicator.style.transition = 'none';
            this.updateIndicatorPosition(e.clientX);
            
            // 修复：点击区域后也不自动播放
            // 保持暂停状态
        });
    }
    
    // 修改continuePlayback方法，确保从当前位置开始播放
    continuePlayback() {
        this.isPaused = false;
        this.updatePlayButtonIcon();
        
        // 停止当前所有音频
        this.currentAudio.forEach(audio => {
            audio.pause();
        });
        this.currentAudio.clear();
        
        // 从当前时间点开始检查并播放轨道
        this.checkTracksAtCurrentTime();
        
        // 重新启动时间线定时器，从当前时间点开始
        this.startTimelineInterval();
    }

    /* 添加更新指示器位置的方法 */
    updateIndicatorPosition(clientX) {
        const trackArea = document.getElementById('trackArea');
        const indicator = document.getElementById('playbackIndicator');
        
        // 获取轨道区域的边界
        const trackRect = trackArea.getBoundingClientRect();
        
        // 获取计算后的样式以获取精确的padding值
        const computedStyle = window.getComputedStyle(trackArea);
        const leftPadding = parseFloat(computedStyle.paddingLeft);
        const rightPadding = parseFloat(computedStyle.paddingRight);
        
        // 计算指示器在内容区域内的位置
        const contentWidth = trackRect.width - leftPadding - rightPadding;
        
        // 计算相对于内容区域的x位置
        let relativeX = clientX - trackRect.left - leftPadding;
        
        // 确保不超出内容区域边界
        relativeX = Math.max(0, Math.min(relativeX, contentWidth));
        
        // 更新指示器位置
        indicator.style.left = `${leftPadding + relativeX}px`;
        
        // 计算并更新当前时间
        const maxTime = 30; // 总时长为30秒
        this.currentTime = (relativeX / contentWidth) * maxTime;
        
        // 检查是否应该在新位置播放轨道
        this.checkTracksAtCurrentTime();
    }

    /* 添加在新位置检查和播放轨道的方法 */
    checkTracksAtCurrentTime() {
        // 停止当前所有音频
        this.currentAudio.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
        this.currentAudio.clear();
        
        // 检查所有轨道项目，如果应该在当前时间播放则开始播放
        document.querySelectorAll('.track-lane').forEach(track => {
            track.querySelectorAll('.track-item').forEach(trackItem => {
                const startPosition = parseInt(trackItem.style.gridColumnStart || 1);
                const startTime = (startPosition - 1);
                const duration = parseInt(trackItem.dataset.duration || 5);
                
                if (this.currentTime >= startTime && this.currentTime <= startTime + duration) {
                    const url = trackItem.dataset.url;
                    const trackId = track.id;
                    const elapsedTime = this.currentTime - startTime;
                    
                    // 加载并播放音频
                    this.preloadAudio(url).then(audio => {
                        // 设置播放位置
                        audio.currentTime = Math.min(elapsedTime, audio.duration);
                        
                        // 设置音量
                        const trackVolume = this.trackVolumes[trackId] || 1;
                        audio.volume = this.masterVolume * trackVolume;
                        
                        // 修改：只有在非暂停状态下才播放音频
                        if (!this.isPaused) {
                            audio.play();
                        }
                        
                        this.currentAudio.set(url, audio);
                    }).catch(error => {
                        this.showNotification(`无法播放音频: ${trackItem.dataset.title}`);
                    });
                }
            });
        });
    }

    updatePlaybackIndicator() {
        const indicator = document.getElementById('playbackIndicator');
        const trackArea = document.getElementById('trackArea');
        
        // 获取计算后的样式以获取精确的padding值
        const computedStyle = window.getComputedStyle(trackArea);
        const leftPadding = parseFloat(computedStyle.paddingLeft);
        const rightPadding = parseFloat(computedStyle.paddingRight);
        
        // 内容区域宽度 = 总宽度 - 左padding - 右padding
        const contentWidth = trackArea.offsetWidth - leftPadding - rightPadding;
        
        // 计算位置并确保不超出轨道区域
        const maxTime = 30; // 最大时间（秒）
        const normalizedTime = Math.min(this.currentTime, maxTime);
        
        // 计算指示器位置 - 只在内容区域内移动
        const relativePosition = (normalizedTime / maxTime) * contentWidth;
        const position = leftPadding + relativePosition;
        
        // 指示器不应超过内容区域右边界
        const indicatorWidth = 4; // 指示器本身宽度
        const maxPosition = trackArea.offsetWidth - rightPadding - indicatorWidth;
        const clampedPosition = Math.min(position, maxPosition);
        
        // 设置指示器位置，不使用transition
        indicator.style.transition = 'none';
        indicator.style.left = `${clampedPosition}px`;
    }

    // 确保isPositionAvailable方法正确定义
    isPositionAvailable(trackLane, newStart, excludeItem) {
        const otherItems = Array.from(trackLane.querySelectorAll('.track-item'))
            .filter(item => item !== excludeItem);

        return !otherItems.some(item => {
            const itemStart = parseInt(item.style.gridColumnStart || 1);
            const itemEnd = parseInt(item.style.gridColumnEnd || (itemStart + 5));
            return newStart < itemEnd && (newStart + 5) > itemStart;
        });
    }

    // 确保reorganizeTrackItems方法正确定义
    reorganizeTrackItems(trackLane) {
        const items = Array.from(trackLane.querySelectorAll('.track-item'));
        items.sort((a, b) => {
            return parseInt(a.style.gridColumnStart) - parseInt(b.style.gridColumnStart);
        });

        items.forEach(item => {
            item.style.gridRowStart = "1";
            item.style.gridRowEnd = "2";
        });
    }

    // 确保removeTrack方法正确定义
    removeTrack(trackItem) {
        const url = trackItem.dataset.url;
        const audio = this.currentAudio.get(url);
        
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
            this.currentAudio.delete(url);
        }

        const trackLane = trackItem.parentElement;
        trackItem.remove();
        this.trackQueue = this.trackQueue.filter(item => item.url !== url);
        this.reorganizeTrackItems(trackLane);
    }

    // 确保togglePlayback方法正确定义
    togglePlayback() {
        if (this.isPaused) {
            this.continuePlayback();
            this.isPaused = false;
            this.updatePlayButtonIcon();
        } else if (this.timelineInterval) {
            this.pausePlayback();
        } else {
            this.currentTime = 0;
            this.isPaused = false;
            this.updatePlayButtonIcon();
            this.playTrackSequence();
        }
    }

    // 确保pausePlayback方法正确定义
    pausePlayback() {
        if (this.timelineInterval) {
            clearInterval(this.timelineInterval);
            this.timelineInterval = null;
        }

        this.currentAudio.forEach(audio => {
            if (audio) {
                audio.pause();
            }
        });

        this.isPaused = true;
        // 更新播放按钮图标
        this.updatePlayButtonIcon();
    }

    // 添加更新播放按钮图标的方法
    updatePlayButtonIcon() {
        const playIcon = document.getElementById('playIcon');
        if (this.isPaused) {
            playIcon.classList.remove('fa-pause');
            playIcon.classList.add('fa-play');
        } else {
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-pause');
        }
    }

    // 确保startTimelineInterval方法正确定义
    startTimelineInterval() {
        const timeInterval = 0.1;
        const totalDuration = 30;

        // 确保先清除可能存在的计时器
        if (this.timelineInterval) {
            clearInterval(this.timelineInterval);
        }

        this.timelineInterval = setInterval(() => {
            this.currentTime += timeInterval;

            if (this.currentTime >= totalDuration) {
                this.stopAll();
                return;
            }

            this.updatePlaybackIndicator();
            this.checkAndPlayTracks(timeInterval);
        }, timeInterval * 1000);
    }

    // 确保playTrackSequence方法正确定义
    playTrackSequence() {
        if (this.timelineInterval) {
            clearInterval(this.timelineInterval);
            this.timelineInterval = null;
        }
        
        this.currentAudio.forEach(audio => {
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        });
        
        this.currentAudio.clear();
        this.isPaused = false;
        this.currentTime = 0;
        this.updatePlaybackIndicator();
        this.startTimelineInterval();
    }

    // 确保checkAndPlayTracks方法正确定义
    checkAndPlayTracks(timeInterval) {
        document.querySelectorAll('.track-lane').forEach(track => {
            track.querySelectorAll('.track-item').forEach(trackItem => {
                const startPosition = parseInt(trackItem.style.gridColumnStart || 1);
                const startTime = (startPosition - 1);
                
                // 改进：使用更精确的时间检测逻辑
                if (this.currentTime >= startTime && this.currentTime < startTime + timeInterval) {
                    this.playTrackItem(trackItem);
                }
            });
        });
    }

    // 确保playTrackItem方法正确定义
    async playTrackItem(trackItem) {
        const url = trackItem.dataset.url;
        const trackId = trackItem.closest('.track-lane').id;
        const trackVolume = this.trackVolumes[trackId] || 1;
        
        this.preloadAudio(url).then(audio => {
            audio.currentTime = 0;
            
            // 设置音量 - 使用主音量和音轨音量的组合
            audio.volume = this.masterVolume * trackVolume;
            
            audio.play();

            const duration = 5; // 5秒固定时长
            setTimeout(() => {
                audio.pause();
                audio.currentTime = 0;
            }, duration * 1000);

            this.currentAudio.set(url, audio);
        }).catch(error => {
            this.showNotification(`无法播放音频: ${trackItem.dataset.title}`);
        });
    }

    // 确保updateAllAudioVolumes方法正确定义
    updateAllAudioVolumes() {
        this.currentAudio.forEach((audio, url) => {
            // 从URL中查找对应的trackItem
            const trackItem = document.querySelector(`.track-item[data-url="${url}"]`);
            if (trackItem) {
                const trackId = trackItem.closest('.track-lane').id;
                const trackVolume = this.trackVolumes[trackId] || 1;
                // 应用主音量和音轨音量的组合
                audio.volume = this.masterVolume * trackVolume;
            } else {
                audio.volume = this.masterVolume;
            }
        });
    }

    // 确保stopAll方法正确定义
    stopAll() {
        if (this.timelineInterval) {
            clearInterval(this.timelineInterval);
            this.timelineInterval = null;
        }

        // 停止并重置所有音频
        this.currentAudio.forEach(audio => {
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        });

        this.currentAudio.clear();
        this.currentTime = 0;
        this.isPaused = true;
        this.updatePlayButtonIcon();

        // 重置播放指示器位置
        this.updatePlaybackIndicator();
        
        // 仅当通过停止按钮停止时才显示通知
        if (!arguments.callee.caller.name.includes('playTrackSequence')) {
            this.showNotification('播放已停止');
        }
    }

    // 确保showNotification方法正确定义
    showNotification(message) {
        // 创建通知元素
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        // 2秒后移除通知
        setTimeout(() => {
            notification.remove();
        }, 2000);
    }

    // 修复preloadAudio方法
    async preloadAudio(url) {
        if (this.currentAudio.has(url)) {
            return this.currentAudio.get(url);
        }

        try {
            // 使用Promise包装audio的加载过程
            return new Promise((resolve, reject) => {
                const audio = new Audio();
                
                // 添加错误处理
                audio.onerror = () => {
                    console.warn(`音频 ${url} 加载失败，使用默认音频替代`);
                    const defaultAudio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');
                    this.currentAudio.set(url, defaultAudio);
                    defaultAudio.load();
                    resolve(defaultAudio);
                };
                
                audio.oncanplaythrough = () => {
                    this.currentAudio.set(url, audio);
                    resolve(audio);
                };
                
                audio.src = url;
                audio.load();
            });
        } catch (error) {
            this.showNotification(`音频加载失败: ${url}`);
            throw error;
        }
    }
}

// 初始化音频混音器
const audioMixer = new AudioMixer();
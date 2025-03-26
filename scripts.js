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
        this.audioCache = new Map(); // 音频缓存，避免重复加载
        this.trackQueue = [];
        this.currentTime = 0;
        this.timelineInterval = null;
        this.animationFrameId = null; // 新增animationFrame ID
        this.isPaused = false;
        this.masterVolume = 1;
        this.trackVolumes = {}; // 存储各个音轨的音量
        this.trackCount = 4; // 默认创建4条音轨
        this.loadingCount = 0; // 跟踪正在加载的音频数量
        
        // 设置定期清理缓存的计时器
        this.cacheCleanupInterval = setInterval(() => this.cleanupCache(), 60000); // 每分钟清理一次
        
        // 创建防抖函数
        this.debouncedReorganize = this.debounce(this.reorganizeAllTracks.bind(this), 300);
        
        this.init();
    }

    init() {
        // 设置加载指示器
        this.loadingIndicator = document.getElementById('loadingIndicator');
        
        this.calculateScrollbarWidth();
        this.initializeAudioGrid();
        this.initializeTimeAxis();
        this.initializeTracks();
        this.setupEventListeners();
        this.setupDragAndDrop();
        
        // 添加页面卸载时的资源清理
        window.addEventListener('beforeunload', () => this.releaseResources());
    }

    // 释放资源的方法
    releaseResources() {
        // 清除所有计时器
        if (this.timelineInterval) {
            clearInterval(this.timelineInterval);
            this.timelineInterval = null;
        }
        
        if (this.cacheCleanupInterval) {
            clearInterval(this.cacheCleanupInterval);
            this.cacheCleanupInterval = null;
        }
        
        // 停止所有音频播放
        this.currentAudio.forEach(audio => {
            if (audio) {
                audio.pause();
                audio.src = '';
            }
        });
        this.currentAudio.clear();
        
        // 清空缓存
        this.audioCache.forEach(audio => {
            if (audio) {
                audio.src = '';
            }
        });
        this.audioCache.clear();
        
        console.log('音频混音器资源已释放');
    }

    // 显示加载指示器
    showLoading() {
        this.loadingCount++;
        if (this.loadingCount === 1) {
            this.loadingIndicator.style.display = 'flex';
        }
    }
    
    // 隐藏加载指示器
    hideLoading() {
        this.loadingCount = Math.max(0, this.loadingCount - 1);
        if (this.loadingCount === 0) {
            this.loadingIndicator.style.display = 'none';
        }
    }

    // 验证URL安全性，增强安全检查
    isValidAudioUrl(url) {
        try {
            // 检查是否是合法URL
            const parsed = new URL(url);
            
            // 只允许https协议 
            if (parsed.protocol !== 'https:') {
                console.error('URL协议不安全:', url);
                return false;
            }
            
            // 检查已知的安全音频域名
            const allowedDomains = [
                'assets.mixkit.co',
                'cloudfront.net',
                'amazonaws.com'
            ];
            
            // 检查域名是否在白名单中
            const isDomainAllowed = allowedDomains.some(domain => 
                parsed.hostname === domain || 
                parsed.hostname.endsWith('.' + domain)
            );
            
            if (!isDomainAllowed) {
                console.error('URL域名不在白名单中:', url);
                return false;
            }
            
            // 检查文件扩展名
            const fileExtensions = ['.mp3', '.wav', '.ogg', '.m4a', '.aac'];
            const hasValidExtension = fileExtensions.some(ext => 
                parsed.pathname.toLowerCase().endsWith(ext)
            );
            
            if (!hasValidExtension) {
                console.warn('URL可能不是音频文件:', url);
                // 允许没有扩展名的URL，因为有些服务可能不直接在URL中显示扩展名
                // 但仍记录警告信息
            }
            
            return true;
        } catch (e) {
            console.error('URL格式无效:', url, e.message);
            return false;
        }
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
        
        // 使用文档片段减少DOM操作
        const fragment = document.createDocumentFragment();
        
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
                // 验证URL
                if (!this.isValidAudioUrl(item.url)) {
                    console.warn(`跳过不安全的URL: ${item.url}`);
                    return;
                }
                
                const div = document.createElement('div');
                div.className = 'audio-item';
                div.draggable = true;
                div.innerHTML = `<span>${item.title}</span>`;
                div.dataset.url = item.url;
                div.dataset.title = item.title;
                
                // 不再为每个元素单独添加事件，后面会使用事件委托
                itemsContainer.appendChild(div);
            });
            
            categoryDiv.appendChild(itemsContainer);
            fragment.appendChild(categoryDiv);
        });
        
        // 一次性添加所有元素到DOM
        audioGrid.appendChild(fragment);
        
        // 使用事件委托，为audioGrid添加单个点击事件处理程序
        audioGrid.addEventListener('click', (e) => {
            const categoryDiv = e.target.closest('.audio-category');
            const audioItem = e.target.closest('.audio-item');
            
            // 如果点击的是音频项
            if (audioItem) {
                return; // 不要展开/折叠分类
            }
            
            // 如果点击的是分类
            if (categoryDiv && !e.target.closest('.audio-item')) {
                // 关闭所有其他分类
                document.querySelectorAll('.audio-category').forEach(otherCategory => {
                    if (otherCategory !== categoryDiv && otherCategory.classList.contains('expanded')) {
                        otherCategory.classList.remove('expanded');
                    }
                });
                
                // 切换当前分类的展开状态
                categoryDiv.classList.toggle('expanded');
            }
        });
        
        // 拖拽事件已移至setupDragAndDrop方法中处理
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

        // 添加播放指示器拖动功能
        this.setupPlaybackIndicatorDrag();
    }

    // 增强的播放指示器拖动功能，添加触摸支持
    setupPlaybackIndicatorDrag() {
        const indicator = document.getElementById('playbackIndicator');
        const trackArea = document.getElementById('trackArea');
        let isDragging = false;
        
        // 处理指针移动（鼠标或触摸）
        const handlePointerMove = (e) => {
            if (!isDragging) return;
            // 移除所有过渡动画，确保拖动平滑
            indicator.style.transition = 'none';
            // 从事件中获取正确的客户端X坐标
            const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
            this.updateIndicatorPosition(clientX);
        };
        
        // 处理指针释放
        const handlePointerUp = () => {
            if (!isDragging) return;
            isDragging = false;
            
            // 确保定时器停止
            if (this.timelineInterval) {
                clearInterval(this.timelineInterval);
                this.timelineInterval = null;
            }
            
            // 移除事件监听
            document.removeEventListener('mousemove', handlePointerMove);
            document.removeEventListener('touchmove', handlePointerMove);
            document.removeEventListener('mouseup', handlePointerUp);
            document.removeEventListener('touchend', handlePointerUp);
        };
        
        // 处理指针按下事件
        const handlePointerDown = (e) => {
            isDragging = true;
            
            // 如果正在播放，暂停播放
            if (!this.isPaused) {
                this.pausePlayback();
            }
            
            // 阻止事件冒泡和默认行为
            e.preventDefault();
            e.stopPropagation();
            
            // 添加移动和释放事件监听
            document.addEventListener('mousemove', handlePointerMove);
            document.addEventListener('touchmove', handlePointerMove, { passive: false });
            document.addEventListener('mouseup', handlePointerUp);
            document.addEventListener('touchend', handlePointerUp);
            
            // 立即根据点击位置更新指示器
            const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
            this.updateIndicatorPosition(clientX);
        };
        
        // 添加鼠标和触摸事件监听
        indicator.addEventListener('mousedown', handlePointerDown);
        indicator.addEventListener('touchstart', handlePointerDown, { passive: false });
        
        // 点击轨道区域任意位置也可以移动指示器
        const handleTrackAreaClick = (e) => {
            // 排除点击音频项目和播放指示器的情况
            if (e.target.closest('.track-item') || e.target.closest('.playback-indicator')) {
                return;
            }
            
            // 如果正在播放，暂停播放
            if (!this.isPaused) {
                this.pausePlayback();
            }
            
            // 更新指示器位置
            indicator.style.transition = 'none';
            const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
            this.updateIndicatorPosition(clientX);
        };
        
        trackArea.addEventListener('click', handleTrackAreaClick);
        trackArea.addEventListener('touchend', (e) => {
            // 避免滑动后触发点击
            if (!isDragging) {
                handleTrackAreaClick(e);
            }
        });
    }
    
    // 添加更新指示器位置的方法
    updateIndicatorPosition(clientX) {
        const trackArea = document.getElementById('trackArea');
        const indicator = document.getElementById('playbackIndicator');
        
        // 获取轨道区域的边界
        const trackRect = trackArea.getBoundingClientRect();
        
        // 获取计算后的样式以获取精确的padding值
        const computedStyle = window.getComputedStyle(trackArea);
        const leftPadding = parseFloat(computedStyle.paddingLeft);
        const rightPadding = parseFloat(computedStyle.paddingRight);
        const borderWidth = parseFloat(computedStyle.borderRightWidth) || 0;
        
        // 计算指示器在内容区域内的位置
        const contentWidth = trackRect.width - leftPadding - rightPadding;
        
        // 计算相对于内容区域的x位置
        let relativeX = clientX - trackRect.left - leftPadding;
        
        // 考虑指示器的实际视觉宽度（主体+把手）
        const indicatorWidth = 4; // 指示器本身宽度
        const handleWidth = 16; // 指示器把手的宽度
        const handleOffset = 6; // 把手左偏移量
        
        // 计算指示器整体视觉右边界超出部分
        const indicatorRightOverflow = Math.max(0, handleWidth - handleOffset - indicatorWidth);
        
        // 精确边界修正值计算 - 让指示器可以覆盖右边框
        const screenWidth = window.innerWidth;
        const baseBoundaryCorrection = borderWidth + 2; // 基础修正值包含边框宽度
        const extraCorrection = screenWidth >= 2000 ? Math.ceil(screenWidth / 1000) : 0;
        const boundaryCorrection = baseBoundaryCorrection + extraCorrection;
        
        // 确保不超出内容区域边界（考虑指示器宽度和右侧超出部分，并添加修正值）
        // 修改计算方式，使指示器可以精确覆盖右边框
        const maxRelativeX = contentWidth - indicatorWidth - indicatorRightOverflow + boundaryCorrection;
        relativeX = Math.max(0, Math.min(relativeX, maxRelativeX));
        
        // 更新指示器位置
        indicator.style.left = `${leftPadding + relativeX}px`;
        
        // 计算并更新当前时间
        const maxTime = 30; // 总时长为30秒
        this.currentTime = (relativeX / contentWidth) * maxTime;
        
        // 检查是否应该在新位置播放轨道
        this.checkTracksAtCurrentTime();
    }
    
    // 添加在新位置检查和播放轨道的方法
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
                
                // 检查当前时间是否在音频项的播放范围内
                if (this.currentTime >= startTime && this.currentTime < startTime + duration) {
                    const url = trackItem.dataset.url;
                    const trackId = track.id;
                    const elapsedTime = this.currentTime - startTime;
                    const title = trackItem.dataset.title;
                    
                    // 加载并播放音频
                    this.preloadAudio(url).then(audio => {
                        // 设置播放位置
                        audio.currentTime = Math.min(elapsedTime, audio.duration);
                        
                        // 设置音量
                        const trackVolume = this.trackVolumes[trackId] || 1;
                        audio.volume = this.masterVolume * trackVolume;
                        
                        // 添加ended事件监听
                        audio.onended = () => {
                            this.currentAudio.delete(url);
                        };
                        
                        // 添加错误处理
                        audio.onerror = (e) => {
                            this.handleAudioError(e.error || new Error('音频播放错误'), url, title);
                            this.currentAudio.delete(url);
                        };
                        
                        // 只有在非暂停状态下才播放音频
                        if (!this.isPaused) {
                            audio.play().catch(err => {
                                this.handleAudioError(err, url, title);
                            });
                        }
                        
                        this.currentAudio.set(url, audio);
                    }).catch(error => {
                        this.handleAudioError(error, url, title);
                    });
                }
            });
        });
    }
    
    // 添加更新播放指示器的方法
    updatePlaybackIndicator() {
        const indicator = document.getElementById('playbackIndicator');
        const trackArea = document.getElementById('trackArea');
        
        // 获取计算后的样式以获取精确的padding值
        const computedStyle = window.getComputedStyle(trackArea);
        const leftPadding = parseFloat(computedStyle.paddingLeft);
        const rightPadding = parseFloat(computedStyle.paddingRight);
        const borderWidth = parseFloat(computedStyle.borderRightWidth) || 0;
        
        // 内容区域宽度 = 总宽度 - 左padding - 右padding - 边框
        const contentWidth = trackArea.offsetWidth - leftPadding - rightPadding - borderWidth;
        
        // 计算位置并确保不超出轨道区域
        const maxTime = 30; // 最大时间（秒）
        const normalizedTime = Math.min(this.currentTime, maxTime);
        
        // 计算指示器位置 - 只在内容区域内移动
        const relativePosition = (normalizedTime / maxTime) * contentWidth;
        
        // 计算考虑左边距的位置
        const position = leftPadding + relativePosition;
        
        // 考虑指示器的实际视觉宽度（主体+把手）
        const indicatorWidth = 4; // 指示器本身宽度
        const handleWidth = 16; // 指示器把手的宽度
        const handleOffset = 6; // 把手左偏移量
        
        // 计算指示器整体视觉右边界（主体右边界 + 把手右侧超出部分）
        const indicatorRightOverflow = Math.max(0, handleWidth - handleOffset - indicatorWidth);
        
        // 精确边界修正值计算 - 让指示器可以覆盖右边框
        const screenWidth = window.innerWidth;
        const baseBoundaryCorrection = borderWidth + 2; // 基础修正值包含边框宽度
        const extraCorrection = screenWidth >= 2000 ? Math.ceil(screenWidth / 1000) : 0;
        const boundaryCorrection = baseBoundaryCorrection + extraCorrection;
        
        // 最大位置应当确保整个指示器（包括把手）都在区域内
        // 修改计算方式，使指示器可以精确覆盖右边框
        const maxPosition = trackArea.offsetWidth - rightPadding - indicatorWidth - indicatorRightOverflow + boundaryCorrection;
        const clampedPosition = Math.min(position, maxPosition);
        
        // 设置指示器位置，不使用transition
        indicator.style.transition = 'none';
        indicator.style.left = `${clampedPosition}px`;
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
        const trackContainer = document.getElementById('trackContainer');
        const audioGrid = document.getElementById('audioGrid');
        
        // 确保音频项可以被正确拖拽
        audioGrid.addEventListener('dragstart', (e) => {
            const audioItem = e.target.closest('.audio-item');
            if (audioItem) {
                e.dataTransfer.setData('text/plain', JSON.stringify({
                    url: audioItem.dataset.url,
                    title: audioItem.dataset.title
                }));
                // 添加拖拽效果
                e.dataTransfer.effectAllowed = 'copy';
            }
        });
        
        // 使用事件委托，为整个轨道区域添加拖拽事件
        trackArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            // 允许拖放
            e.dataTransfer.dropEffect = 'copy';
            trackArea.style.backgroundColor = 'rgba(168, 164, 255, 0.05)';
        });

        trackArea.addEventListener('dragleave', () => {
            trackArea.style.backgroundColor = 'transparent';
        });
        
        // 使用事件委托处理所有轨道的拖拽事件
        trackContainer.addEventListener('dragover', (e) => {
            e.preventDefault();
            // 允许拖放
            e.dataTransfer.dropEffect = 'copy';
            const trackLane = e.target.closest('.track-lane');
            if (trackLane) {
                trackLane.style.backgroundColor = 'rgba(168, 164, 255, 0.1)';
            }
        });
        
        trackContainer.addEventListener('dragleave', (e) => {
            const trackLane = e.target.closest('.track-lane');
            if (trackLane) {
                trackLane.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            }
        });
        
        trackContainer.addEventListener('drop', (e) => {
            e.preventDefault();
            const trackLane = e.target.closest('.track-lane');
            if (trackLane) {
                trackLane.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                try {
                    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
                    // 确保数据有效
                    if (data && data.url && data.title) {
                        this.addTrackToTimeline(data, trackLane);
                    } else {
                        this.showErrorNotification('无效的音频数据');
                    }
                } catch (err) {
                    console.error('拖放数据解析错误:', err);
                    this.showErrorNotification('音频数据解析失败');
                }
            }
        });
        
        // 使用事件委托处理轨道项目的点击操作
        trackContainer.addEventListener('click', (e) => {
            // 处理删除按钮点击
            const removeBtn = e.target.closest('.remove-btn');
            if (removeBtn) {
                const trackItem = removeBtn.closest('.track-item');
                if (trackItem) {
                    this.removeTrack(trackItem);
                }
            }
        });
    }
    
    // 优化音频缓存管理
    MAX_CACHE_SIZE = 30; // 减少最大缓存数量，避免内存泄漏
    
    // 添加到缓存，使用LRU策略 (Least Recently Used)
    addToCache(url, audio) {
        // 如果缓存已满，移除最早没使用的项
        if (this.audioCache.size >= this.MAX_CACHE_SIZE) {
            // 找出最早的项 - 确保不是正在播放的音频
            const keys = Array.from(this.audioCache.keys());
            for (const key of keys) {
                if (!this.currentAudio.has(key)) {
                    // 释放资源
                    const oldAudio = this.audioCache.get(key);
                    if (oldAudio) {
                        oldAudio.pause();
                        oldAudio.src = ''; // 释放媒体资源
                        oldAudio.load(); // 强制释放
                    }
                    
                    this.audioCache.delete(key);
                    console.log(`缓存已满，释放资源: ${key}`);
                    break;
                }
            }
        }
        
        // 添加新项到缓存
        this.audioCache.set(url, audio);
    }
    
    // 从缓存获取，并更新使用顺序
    getFromCache(url) {
        if (!this.audioCache.has(url)) {
            return null;
        }
        
        // 获取音频
        const audio = this.audioCache.get(url);
        
        // 更新LRU顺序（删除后重新添加到最后）
        this.audioCache.delete(url);
        this.audioCache.set(url, audio);
        
        return audio;
    }
    
    // 更积极地清理缓存
    cleanupCache() {
        console.log(`当前缓存大小: ${this.audioCache.size}, 当前播放: ${this.currentAudio.size}`);
        
        // 始终保留一些空闲缓存空间
        const targetSize = Math.floor(this.MAX_CACHE_SIZE * 0.7);
        
        if (this.audioCache.size > targetSize) {
            const keysToDelete = this.audioCache.size - targetSize;
            const keys = Array.from(this.audioCache.keys());
            let deletedCount = 0;
            
            for (let i = 0; i < keys.length && deletedCount < keysToDelete; i++) {
                // 检查是否在当前播放中
                if (!this.currentAudio.has(keys[i])) {
                    // 释放资源
                    const oldAudio = this.audioCache.get(keys[i]);
                    if (oldAudio) {
                        oldAudio.pause();
                        oldAudio.src = '';
                        oldAudio.load();
                    }
                    
                    this.audioCache.delete(keys[i]);
                    deletedCount++;
                }
            }
            
            console.log(`已清理 ${deletedCount} 个缓存项`);
            
            // 触发垃圾回收
            if (window.gc) {
                try {
                    window.gc();
                } catch (e) {
                    console.log('无法直接调用垃圾回收');
                }
            }
        }
    }
    
    // 替换createTrackItem方法，提高安全性和效率
    createTrackItem(data, position) {
        // 过滤HTML，避免XSS攻击
        const safeTitle = this.sanitizeHTML(data.title);
        
        const trackItem = document.createElement('div');
        trackItem.className = 'track-item';
        trackItem.innerHTML = `
            <span style="min-width: 80px">${safeTitle}</span>
            <div class="track-controls">
                <button class="remove-btn" title="删除">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        trackItem.dataset.url = data.url;
        trackItem.dataset.title = safeTitle;
        
        // 先加载音频以确定正确的持续时间
        this.preloadAudio(data.url)
            .then(audio => {
                const duration = audio.duration ? Math.ceil(audio.duration) : 5;
                trackItem.dataset.duration = duration;
                
                // 根据实际音频长度设置网格长度，但不超过可用空间
                const maxLength = 30 - position + 1;
                const itemLength = Math.min(duration, maxLength);
                
                trackItem.style.gridColumnStart = position;
                trackItem.style.gridColumnEnd = position + itemLength;
                
                // 在布局中更新视觉外观
                this.reorganizeTrackItems(trackItem.closest('.track-lane'));
            })
            .catch(() => {
                // 加载失败时使用默认长度
                trackItem.dataset.duration = 5;
                trackItem.style.gridColumnStart = position;
                trackItem.style.gridColumnEnd = position + 5;
            });
            
        trackItem.style.gridRowStart = "1";
        trackItem.style.gridRowEnd = "2";

        return trackItem;
    }
    
    // 添加简单的HTML净化方法
    sanitizeHTML(str) {
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    }

    // 优化makeTrackItemDraggable方法，添加触摸支持和更好的视觉反馈
    makeTrackItemDraggable(trackItem, trackLane) {
        let isDragging = false;
        let startX, startLeft, gridSize;
        let lastValidPosition = 1;
        
        // 处理开始拖动
        const handleTrackItemDrag = (e) => {
            // 如果是删除按钮或拖拽事件，不处理
            if (e.target.closest('.remove-btn')) {
                return;
            }

            isDragging = true;
            startX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
            const rect = trackLane.getBoundingClientRect();
            gridSize = rect.width / 30;
            startLeft = parseInt(trackItem.style.gridColumnStart || 1);
            lastValidPosition = startLeft;

            // 添加移动和结束事件
            document.addEventListener('mousemove', handleDragMove);
            document.addEventListener('touchmove', handleDragMove, { passive: false });
            document.addEventListener('mouseup', handleDragEnd);
            document.addEventListener('touchend', handleDragEnd);
            
            // 阻止事件默认行为，避免其他拖放冲突
            e.preventDefault();
            
            // 添加正在拖动的样式
            trackItem.classList.add('dragging');
            document.body.style.cursor = 'grabbing';
            
            // 显示辅助提示
            this.showNotification('拖动以调整音频位置');
        };
        
        // 处理拖动中
        const handleDragMove = (e) => {
            if (!isDragging) return;
            
            // 获取事件对应的坐标
            const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
            
            // 阻止页面滚动（对触摸事件）
            if (e.touches) e.preventDefault();
            
            // 计算新位置
            const deltaX = clientX - startX;
            const gridDelta = Math.round(deltaX / gridSize);
            let newStart = startLeft + gridDelta;
            newStart = Math.max(1, Math.min(26, newStart));

            // 检查新位置是否可用
            if (this.isPositionAvailable(trackLane, newStart, trackItem)) {
                const duration = parseInt(trackItem.dataset.duration || 5);
                trackItem.style.gridColumnStart = newStart;
                trackItem.style.gridColumnEnd = newStart + duration;
                lastValidPosition = newStart;
                
                // 更新视觉效果 - 有效位置时显示绿色边框
                trackItem.style.borderColor = '#4CAF50';
            } else {
                // 如果新位置不可用，保持最后一个有效位置
                trackItem.style.gridColumnStart = lastValidPosition;
                trackItem.style.gridColumnEnd = lastValidPosition + parseInt(trackItem.dataset.duration || 5);
                
                // 更新视觉效果 - 无效位置时显示红色边框
                trackItem.style.borderColor = '#FF5252';
            }
        };
        
        // 处理拖动结束
        const handleDragEnd = () => {
            if (!isDragging) return;
            isDragging = false;
            
            // 移除事件监听
            document.removeEventListener('mousemove', handleDragMove);
            document.removeEventListener('touchmove', handleDragMove);
            document.removeEventListener('mouseup', handleDragEnd);
            document.removeEventListener('touchend', handleDragEnd);
            
            // 恢复原样式
            trackItem.classList.remove('dragging');
            trackItem.style.borderColor = '';
            document.body.style.cursor = '';
            
            // 重新组织轨道项目
            this.reorganizeTrackItems(trackLane);
        };
        
        // 添加鼠标和触摸事件监听
        trackItem.addEventListener('mousedown', handleTrackItemDrag);
        trackItem.addEventListener('touchstart', handleTrackItemDrag, { passive: false });
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
        this.preloadAudio(data.url).catch(error => {
            this.handleAudioError(error, data.url, data.title);
        });
        
        // 使用防抖重组所有轨道
        this.debouncedReorganize();
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

    // 增强isPositionAvailable方法，考虑实际音频长度
    isPositionAvailable(trackLane, newStart, excludeItem) {
        // 获取当前项目的长度
        let itemDuration = 5;
        if (excludeItem) {
            itemDuration = parseInt(excludeItem.dataset.duration || 5);
        }
        
        // 确保新位置不会超出时间轴边界
        if (newStart < 1 || newStart + itemDuration > 31) {
            return false;
        }
        
        // 检查与其他项目的冲突
        const otherItems = Array.from(trackLane.querySelectorAll('.track-item'))
            .filter(item => item !== excludeItem);

        return !otherItems.some(item => {
            const itemStart = parseInt(item.style.gridColumnStart || 1);
            const itemEnd = parseInt(item.style.gridColumnEnd || (itemStart + parseInt(item.dataset.duration || 5)));
            return newStart < itemEnd && (newStart + itemDuration) > itemStart;
        });
    }

    // 增强轨道项布局方法，处理长度不一致和潜在的重叠
    reorganizeTrackItems(trackLane) {
        const items = Array.from(trackLane.querySelectorAll('.track-item'));
        if (items.length === 0) return;
        
        // 首先按开始位置排序
        items.sort((a, b) => {
            return parseInt(a.style.gridColumnStart) - parseInt(b.style.gridColumnStart);
        });
        
        // 检查并修复可能的重叠
        for (let i = 1; i < items.length; i++) {
            const currentItem = items[i];
            const previousItem = items[i-1];
            
            const currentStart = parseInt(currentItem.style.gridColumnStart);
            const previousEnd = parseInt(previousItem.style.gridColumnEnd);
            
            // 如果当前项目与前一个项目重叠
            if (currentStart < previousEnd) {
                // 尝试移动当前项目到前一个项目之后
                const newStart = previousEnd;
                const duration = parseInt(currentItem.dataset.duration || 5);
                
                // 检查新位置是否超出轨道边界
                if (newStart + duration <= 31) {
                    currentItem.style.gridColumnStart = newStart;
                    currentItem.style.gridColumnEnd = newStart + duration;
                } else {
                    // 如果会超出边界，尝试调整持续时间
                    const adjustedDuration = 31 - newStart;
                    if (adjustedDuration > 0) {
                        currentItem.style.gridColumnStart = newStart;
                        currentItem.style.gridColumnEnd = 31;
                        // 更新显示的时长
                        currentItem.dataset.duration = adjustedDuration;
                    } else {
                        // 没有空间，移除此项目
                        currentItem.remove();
                        items.splice(i, 1);
                        i--; // 调整索引
                        this.showNotification('由于空间不足，部分音频片段被移除');
                    }
                }
            }
        }

        // 设置正确的网格行
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

    // 添加继续播放的方法
    continuePlayback() {
        // 从当前时间点继续播放
        this.isPaused = false;
        
        // 重新播放当前时间点的音频
        this.checkTracksAtCurrentTime();
        
        // 重新启动时间线
        this.startTimelineInterval();
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
            this.checkTracksAtCurrentTime();
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

    // 修改 playTrackItem 方法，使用音频文件的实际长度并添加事件监听而不是setTimeout
    async playTrackItem(trackItem) {
        const url = trackItem.dataset.url;
        const trackId = trackItem.closest('.track-lane').id;
        const trackVolume = this.trackVolumes[trackId] || 1;
        const title = trackItem.dataset.title;
        
        try {
            const audio = await this.preloadAudio(url);
            audio.currentTime = 0;
            
            // 设置音量 - 使用主音量和音轨音量的组合
            audio.volume = this.masterVolume * trackVolume;
            
            // 添加ended事件监听，而不是使用setTimeout
            audio.onended = () => {
                audio.pause();
                audio.currentTime = 0;
                this.currentAudio.delete(url);
            };
            
            // 添加错误处理
            audio.onerror = (e) => {
                this.handleAudioError(e.error || new Error('音频播放错误'), url, title);
                this.currentAudio.delete(url);
            };
            
            await audio.play();

            // 使用音频的实际长度，而不是固定的5秒
            const duration = audio.duration ? audio.duration : 5; // 如果获取不到时长，默认为5秒
            
            // 更新trackItem的持续时间数据（用于未来显示）
            if (audio.duration && audio.duration !== 5) {
                trackItem.dataset.duration = Math.ceil(audio.duration);
                // 如果音频实际长度与轨道项显示长度不匹配，则更新轨道项长度
                const currentEnd = parseInt(trackItem.style.gridColumnEnd);
                const currentStart = parseInt(trackItem.style.gridColumnStart);
                if (currentEnd - currentStart !== Math.ceil(audio.duration)) {
                    const newLength = Math.min(Math.ceil(audio.duration), 30 - currentStart + 1);
                    trackItem.style.gridColumnEnd = currentStart + newLength;
                    // 更新后重新组织轨道项，确保没有重叠
                    this.debouncedReorganize();
                }
            }

            this.currentAudio.set(url, audio);
        } catch (error) {
            this.handleAudioError(error, url, title);
        }
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

    // 改进音频预加载方法
    async preloadAudio(url) {
        // 首先进行URL安全检查
        if (!this.isValidAudioUrl(url)) {
            this.showErrorNotification(`不安全的音频URL: ${url}`);
            return Promise.reject(new Error('不安全的音频URL'));
        }
    
        // 如果当前正在播放，直接返回
        if (this.currentAudio.has(url)) {
            return this.currentAudio.get(url);
        }
        
        // 如果已缓存，从缓存返回
        const cachedAudio = this.getFromCache(url);
        if (cachedAudio) {
            this.currentAudio.set(url, cachedAudio);
            return cachedAudio;
        }

        try {
            // 显示加载指示器
            this.showLoading();
            
            // 使用Promise包装audio的加载过程
            return new Promise((resolve, reject) => {
                const audio = new Audio();
                
                // 添加丰富的错误处理
                audio.onerror = (e) => {
                    // 记录详细错误信息
                    const errorCode = audio.error ? audio.error.code : '未知';
                    const errorMessage = this.getAudioErrorMessage(errorCode);
                    console.error(`音频加载失败: ${url}, 错误代码: ${errorCode}, 错误信息: ${errorMessage}`);
                    
                    // 显示错误通知
                    this.showErrorNotification(`音频 ${url.split('/').pop()} 加载失败: ${errorMessage}`);
                    
                    // 使用默认音频代替
                    const defaultAudio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');
                    this.addToCache(url, defaultAudio);
                    this.currentAudio.set(url, defaultAudio);
                    
                    defaultAudio.load();
                    
                    // 隐藏加载指示器
                    this.hideLoading();
                    
                    resolve(defaultAudio);
                };
                
                // 音频可以播放时
                audio.oncanplaythrough = () => {
                    // 缓存音频
                    this.addToCache(url, audio);
                    this.currentAudio.set(url, audio);
                    
                    // 隐藏加载指示器
                    this.hideLoading();
                    
                    resolve(audio);
                };
                
                // 设置URL并加载
                audio.src = url;
                audio.load();
                
                // 设置加载超时
                setTimeout(() => {
                    if (!audio.readyState) {
                        audio.onerror(new ErrorEvent('timeout'));
                    }
                }, 10000); // 10秒超时
            });
        } catch (error) {
            // 隐藏加载指示器
            this.hideLoading();
            
            this.showErrorNotification(`音频加载异常: ${error.message}`);
            console.error('音频加载异常:', error);
            throw error;
        }
    }
    
    // 获取音频错误信息
    getAudioErrorMessage(errorCode) {
        switch (errorCode) {
            case 1: return '加载过程被中止';
            case 2: return '网络错误';
            case 3: return '解码失败';
            case 4: return '格式不支持';
            default: return '未知错误';
        }
    }
    
    // 显示错误通知
    showErrorNotification(message) {
        // 创建通知元素
        const notification = document.createElement('div');
        notification.className = 'notification error-message';
        notification.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            ${message}
            <button class="close-btn">
                <i class="fas fa-times"></i>
            </button>
        `;
        document.body.appendChild(notification);

        // 添加关闭按钮功能
        const closeBtn = notification.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => {
            notification.remove();
        });

        // 5秒后自动移除
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.remove();
            }
        }, 5000);
    }

    // 添加防抖函数工具
    debounce(func, delay) {
        let timerId;
        return function(...args) {
            clearTimeout(timerId);
            timerId = setTimeout(() => func.apply(this, args), delay);
        };
    }
    
    // 添加所有轨道的重组方法
    reorganizeAllTracks() {
        document.querySelectorAll('.track-lane').forEach(lane => {
            this.reorganizeTrackItems(lane);
        });
    }
    
    // 改进错误处理方法
    handleAudioError(error, url, title) {
        console.error('音频处理错误:', error);
        
        // 根据错误类型显示不同的提示
        let message = '';
        if (error.name === 'NotSupportedError') {
            message = `不支持的音频格式: ${title}`;
        } else if (error.name === 'NotAllowedError') {
            message = '浏览器阻止了自动播放，请点击界面后再试';
        } else if (error.name === 'AbortError') {
            message = '音频加载被中断';
        } else if (error.name === 'NetworkError' || error.message.includes('network')) {
            message = '网络错误，请检查您的连接';
        } else {
            message = `无法播放音频: ${title}`;
        }
        
        this.showErrorNotification(message);
        
        // 记录详细错误信息
        const errorDetails = {
            url: url,
            title: title,
            error: {
                name: error.name,
                message: error.message,
                stack: error.stack
            },
            time: new Date().toISOString()
        };
        
        console.log('详细错误信息:', errorDetails);
        
        // 可以在这里添加错误上报逻辑
    }
}

// 初始化音频混音器
const audioMixer = new AudioMixer();
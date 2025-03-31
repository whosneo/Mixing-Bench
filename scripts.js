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
        this.cacheAccessOrder = []; // 缓存访问顺序数组初始化
        this.trackQueue = [];
        this.currentTime = 0;
        this.timelineInterval = null;
        this.animationFrameId = null; // 新增animationFrame ID
        this.isPaused = false;
        this.masterVolume = 1;
        this.trackVolumes = {}; // 存储各个音轨的音量
        this.trackCount = 4; // 默认创建4条音轨
        this.loadingCount = 0; // 跟踪正在加载的音频数量
        
        // 添加操作标识符，用于防止过时操作影响状态
        this.operationCounter = 0;
        this.activeOperations = new Map(); // 跟踪活跃的音频操作
        
        // 用于跟踪所有创建的MutationObserver实例
        this.activeObservers = [];
        
        // 用于跟踪添加的事件监听器
        this.eventHandlers = {
            trackArea: {
                click: null,
                touchstart: null,
                touchend: null
            },
            playbackIndicator: {
                mousedown: null,
                touchstart: null
            }
        };
        
        // 音频缓存大小限制
        this.MAX_CACHE_SIZE = 30; // 减少最大缓存数量，避免内存泄漏
        
        // 设置定期清理缓存的计时器
        this.cacheCleanupInterval = setInterval(() => this.cleanupCache(), 60000); // 每分钟清理一次
        
        // 创建防抖函数
        this.debouncedReorganize = this.debounce(this.reorganizeAllTracks.bind(this), 300);
        
        // 初始化通知系统
        this.notifications = [];
        this.notificationContainer = null;
        
        this._justFinishedDragging = false;  // 初始化拖动完成标记
        
        this.init();
    }

    init() {
        // 设置WebAudio上下文
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // 初始化混音器状态
        this.isPaused = true;
        this.currentTime = 0;
        this.trackVolumes = {};
        this.masterVolume = 1;
        
        // 初始化时计算滚动条宽度
        this.calculateScrollbarWidth();
        
        // 初始化音频网格
        this.initializeAudioGrid();
        
        // 初始化时间轴
        this.initializeTimeAxis();
        
        // 初始化轨道
        this.initializeTracks();
        
        // 设置事件监听器
        this.setupEventListeners();
        
        // 设置拖放功能
        this.setupDragAndDrop();
        
        // 添加页面卸载前的清理
        this._handleBeforeUnload = () => {
            // 确保清理所有资源，包括取消可能正在进行的动画帧
            if (this.animationFrameId) {
                cancelAnimationFrame(this.animationFrameId);
                this.animationFrameId = null;
            }
            this.releaseResources();
        };
        
        window.addEventListener('beforeunload', this._handleBeforeUnload);
        
        console.log('音频混音器已初始化');
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
        
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
        
        // 先取消所有活跃操作
        if (this.activeOperations) {
            // 遍历所有活跃操作，确保它们被正确终止
            for (const [key, operation] of this.activeOperations.entries()) {
                if (operation && operation.isActive) {
                    // 标记操作为非活跃
                    operation.isActive = false;
                    
                    // 如果操作关联的音频正在播放，停止它
                    const audio = this.currentAudio.get(operation.url);
                    if (audio) {
                        try {
                            audio.pause();
                            audio.currentTime = 0;
                        } catch (error) {
                            console.error('停止活跃操作音频时出错:', error);
                        }
                    }
                }
            }
            // 清空活跃操作Map
            this.activeOperations.clear();
        }
        
        // 停止所有音频播放并释放资源
        this.currentAudio.forEach(audio => {
            if (audio) {
                try {
                    audio.pause();
                    // 移除所有事件监听器
                    audio.oncanplaythrough = null;
                    audio.onerror = null;
                    audio.onended = null;
                    audio.onloadedmetadata = null;
                    audio.onpause = null;
                    audio.onplay = null;
                    // 清空src属性释放媒体资源
                    audio.src = '';
                    audio.load();
                } catch (error) {
                    console.error('释放当前音频资源时出错:', error);
                }
            }
        });
        this.currentAudio.clear();
        
        // 清理所有音频缓存资源
        this.audioCache.forEach((audio, url) => {
            if (audio) {
                try {
                    audio.pause();
                    audio.oncanplaythrough = null;
                    audio.onerror = null;
                    audio.onended = null;
                    audio.onloadedmetadata = null;
                    audio.onpause = null;
                    audio.onplay = null;
                    audio.src = '';
                    audio.load();
                } catch (error) {
                    console.error('释放缓存音频资源时出错:', error);
                }
            }
        });
        this.audioCache.clear();
        this.cacheAccessOrder = []; // 同步清空cacheAccessOrder数组
        
        // 断开所有MutationObserver连接
        try {
            if (this.activeObservers && this.activeObservers.length > 0) {
                console.log(`断开 ${this.activeObservers.length} 个MutationObserver连接`);
                this.activeObservers.forEach(observer => {
                    if (observer) {
                        observer.disconnect();
                    }
                });
                this.activeObservers = [];
            }
        } catch (error) {
            console.error('断开MutationObserver连接时出错:', error);
        }
        
        // 清理挂起的音频加载
        if (this.pendingAudioLoads) {
            this.pendingAudioLoads.clear();
        }
        
        // 移除DOM事件监听器
        this.removeAllEventListeners();
        
        console.log('音频混音器资源已释放');
    }
    
    // 移除所有事件监听器的辅助方法
    removeAllEventListeners() {
        try {
            // 移除全局事件监听器（使用存储的事件处理函数引用）
            if (this._handleBeforeUnload) {
                window.removeEventListener('beforeunload', this._handleBeforeUnload);
                this._handleBeforeUnload = null;
            }
            
            // 移除轨道区域的特定事件监听器
            const trackArea = document.getElementById('trackArea');
            if (trackArea) {
                // 移除保存的事件处理函数
                if (this.eventHandlers.trackArea.click) {
                    trackArea.removeEventListener('click', this.eventHandlers.trackArea.click);
                    this.eventHandlers.trackArea.click = null;
                }
                
                if (this.eventHandlers.trackArea.touchstart) {
                    trackArea.removeEventListener('touchstart', this.eventHandlers.trackArea.touchstart);
                    this.eventHandlers.trackArea.touchstart = null;
                }
                
                if (this.eventHandlers.trackArea.touchend) {
                    trackArea.removeEventListener('touchend', this.eventHandlers.trackArea.touchend);
                    this.eventHandlers.trackArea.touchend = null;
                }
                
                // 然后替换整个节点，以确保清理所有可能的内联监听器
                const newTrackArea = trackArea.cloneNode(true);
                trackArea.parentNode.replaceChild(newTrackArea, trackArea);
            }
            
            // 移除播放指示器事件监听器
            const playbackIndicator = document.getElementById('playbackIndicator');
            if (playbackIndicator) {
                // 移除保存的事件处理函数
                if (this.eventHandlers.playbackIndicator.mousedown) {
                    playbackIndicator.removeEventListener('mousedown', this.eventHandlers.playbackIndicator.mousedown);
                    this.eventHandlers.playbackIndicator.mousedown = null;
                }
                
                if (this.eventHandlers.playbackIndicator.touchstart) {
                    playbackIndicator.removeEventListener('touchstart', this.eventHandlers.playbackIndicator.touchstart);
                    this.eventHandlers.playbackIndicator.touchstart = null;
                }
                
                // 然后替换整个节点
                const newPlaybackIndicator = playbackIndicator.cloneNode(true);
                playbackIndicator.parentNode.replaceChild(newPlaybackIndicator, playbackIndicator);
            }
            
            // 移除拖放相关事件监听器
            const audioGrid = document.getElementById('audioGrid');
            if (audioGrid) {
                const newAudioGrid = audioGrid.cloneNode(true);
                audioGrid.parentNode.replaceChild(newAudioGrid, audioGrid);
            }
            
            // 移除控制按钮事件监听器
            const playTrack = document.getElementById('playTrack');
            const stop = document.getElementById('stop');
            const masterVolume = document.getElementById('masterVolume');
            
            if (playTrack) {
                const newPlayTrack = playTrack.cloneNode(true);
                playTrack.parentNode.replaceChild(newPlayTrack, playTrack);
            }
            
            if (stop) {
                const newStop = stop.cloneNode(true);
                stop.parentNode.replaceChild(newStop, stop);
            }
            
            if (masterVolume) {
                const newMasterVolume = masterVolume.cloneNode(true);
                masterVolume.parentNode.replaceChild(newMasterVolume, masterVolume);
            }
            
            // 移除音轨音量控制事件监听器
            document.querySelectorAll('.track-volume-control .volume-slider').forEach(slider => {
                const newSlider = slider.cloneNode(true);
                slider.parentNode.replaceChild(newSlider, slider);
            });
            
        } catch (error) {
            console.error('移除事件监听器时出错:', error);
        }
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
            const categoryTitleDiv = document.createElement('div');
            categoryTitleDiv.className = 'audio-category-title';
            
            // 创建图标
            const iconSpan = document.createElement('span');
            iconSpan.className = 'audio-category-icon';
            // 对图标进行安全处理，防止可能的注入
            const safeIcon = this.sanitizeHTML(category.icon);
            iconSpan.textContent = safeIcon;
            categoryTitleDiv.appendChild(iconSpan);
            
            // 创建标题
            const titleSpan = document.createElement('span');
            // 对分类标题进行安全处理
            const safeCategoryTitle = this.sanitizeHTML(category.title);
            titleSpan.textContent = safeCategoryTitle;
            categoryTitleDiv.appendChild(titleSpan);
            
            // 创建展开/折叠图标
            const toggleIcon = document.createElement('i');
            toggleIcon.className = 'fas fa-chevron-down audio-category-toggle';
            categoryTitleDiv.appendChild(toggleIcon);
            
            categoryDiv.appendChild(categoryTitleDiv);
            
            // 创建音频项目容器
            const itemsContainer = document.createElement('div');
            itemsContainer.className = 'audio-items-container';
            
            // 使用文档片段批量添加音频项目
            const itemsFragment = document.createDocumentFragment();
            category.items.forEach((item) => {
                // 验证URL
                if (!this.isValidAudioUrl(item.url)) {
                    console.warn(`跳过不安全的URL: ${item.url}`);
                    return;
                }
                
                const div = document.createElement('div');
                div.className = 'audio-item';
                div.draggable = true;
                
                // 创建标题文本
                const titleSpan = document.createElement('span');
                // 对标题进行安全处理
                const safeTitle = this.sanitizeHTML(item.title);
                titleSpan.textContent = safeTitle;
                div.appendChild(titleSpan);
                
                // 设置数据属性
                div.dataset.url = item.url;
                div.dataset.title = safeTitle; // 保存安全处理后的标题
                
                itemsFragment.appendChild(div);
            });
            
            itemsContainer.appendChild(itemsFragment);
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
    }

    initializeTimeAxis() {
        const timeAxis = document.getElementById('timeAxis');
        timeAxis.innerHTML = '';
        
        // 使用文档片段批量添加时间刻度
        const fragment = document.createDocumentFragment();
        
        // 生成更精细的时间刻度
        for (let i = 0; i <= 30; i++) {
            const timeMarker = document.createElement('span');
            const minutes = Math.floor(i / 60);
            const seconds = i % 60;
            timeMarker.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            timeMarker.style.left = `${(i / 30) * 100}%`;
            fragment.appendChild(timeMarker);
        }
        
        // 一次性添加所有时间刻度到DOM
        timeAxis.appendChild(fragment);
    }

    initializeTracks() {
        const trackContainer = document.getElementById('trackContainer');
        
        // 保存现有轨道的内容
        const existingTracks = {};
        
        // 收集现有轨道上的所有轨道项目
        for (let i = 1; i <= this.trackCount + 1; i++) {
            const trackId = `track${i}`;
            const trackLane = document.getElementById(trackId);
            if (trackLane) {
                // 保存该轨道上的所有轨道项
                const trackItems = Array.from(trackLane.querySelectorAll('.track-item'));
                if (trackItems.length > 0) {
                    existingTracks[trackId] = trackItems.map(item => {
                        return {
                            element: item.cloneNode(true),
                            style: {
                                gridColumnStart: item.style.gridColumnStart,
                                gridColumnEnd: item.style.gridColumnEnd,
                                gridRowStart: item.style.gridRowStart,
                                gridRowEnd: item.style.gridRowEnd
                            },
                            dataset: { ...item.dataset }
                        };
                    });
                }
            }
        }
        
        // 清空轨道容器
        trackContainer.innerHTML = '';
        
        // 使用文档片段批量添加音轨
        const fragment = document.createDocumentFragment();
        
        for (let i = 1; i <= this.trackCount; i++) {
            // 创建音轨
            const trackLane = document.createElement('div');
            trackLane.className = 'track-lane';
            trackLane.id = `track${i}`;
            trackLane.dataset.trackName = `音轨 ${i}`;
            
            // 创建音量控制器
            const volumeControl = document.createElement('div');
            volumeControl.className = 'track-volume-control';
            
            // 创建音量图标
            const volumeIcon = document.createElement('i');
            volumeIcon.className = 'fas fa-volume-up volume-icon';
            volumeControl.appendChild(volumeIcon);
            
            // 创建音量滑块
            const volumeSlider = document.createElement('input');
            volumeSlider.type = 'range';
            volumeSlider.className = 'volume-slider';
            volumeSlider.min = '0';
            volumeSlider.max = '100';
            volumeSlider.value = '100';
            volumeSlider.dataset.track = i.toString();
            volumeControl.appendChild(volumeSlider);
            
            // 添加到轨道
            trackLane.appendChild(volumeControl);
            fragment.appendChild(trackLane);
            
            // 初始化音轨音量
            this.trackVolumes[`track${i}`] = 1.0;
        }
        
        // 一次性添加所有音轨到DOM
        trackContainer.appendChild(fragment);
        
        // 恢复保存的轨道项目
        for (let i = 1; i <= this.trackCount; i++) {
            const trackId = `track${i}`;
            const trackLane = document.getElementById(trackId);
            
            if (trackLane && existingTracks[trackId]) {
                // 恢复该轨道上的所有项目
                existingTracks[trackId].forEach(savedItem => {
                    const newItem = savedItem.element;
                    
                    // 恢复样式
                    Object.keys(savedItem.style).forEach(prop => {
                        newItem.style[prop] = savedItem.style[prop];
                    });
                    
                    // 恢复数据属性
                    Object.keys(savedItem.dataset).forEach(key => {
                        newItem.dataset[key] = savedItem.dataset[key];
                    });
                    
                    // 添加到轨道
                    trackLane.appendChild(newItem);
                    
                    // 重新设置可拖动功能
                    this.makeTrackItemDraggable(newItem, trackLane);
                });
            }
        }
        
        // 使用事件委托，为trackContainer添加音量控制事件监听
        trackContainer.addEventListener('input', (e) => {
            const slider = e.target.closest('.volume-slider');
            if (slider) {
                const trackId = `track${slider.dataset.track}`;
                const volume = slider.value / 100;
                this.trackVolumes[trackId] = volume;
                this.updateTrackVolumeIcon(slider);
                this.updateAllAudioVolumes();
            }
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

        // 添加音轨管理功能
        document.getElementById('addTrack').addEventListener('click', () => this.addTrack());
        document.getElementById('removeTrack').addEventListener('click', () => this.removeLastTrack());

        // 添加播放指示器拖动功能
        this.setupPlaybackIndicatorDrag();
    }

    // 新增添加音轨方法
    addTrack() {
        // 限制最大音轨数量为8条
        if (this.trackCount >= 8) {
            this.showNotification('最多只能添加8条音轨');
            return;
        }
        
        this.trackCount++;
        this.initializeTracks();
        this.showNotification(`已添加音轨 ${this.trackCount}`);
    }

    // 新增删除音轨方法
    removeLastTrack() {
        // 限制最小音轨数量为1条
        if (this.trackCount <= 1) {
            this.showNotification('至少需要保留1条音轨');
            return;
        }
        
        // 检查最后一条音轨是否有内容
        const trackLane = document.getElementById(`track${this.trackCount}`);
        if (trackLane && trackLane.querySelectorAll('.track-item').length > 0) {
            this.showNotification('无法删除有内容的音轨，请先清空该音轨');
            return;
        }
        
        // 移除最后一条轨道关联的所有Observers
        if (trackLane) {
            // 找到与此轨道关联的所有观察者
            const observersToRemove = [];
            
            for (let i = 0; i < this.activeObservers.length; i++) {
                const observer = this.activeObservers[i];
                try {
                    // 暂时断开连接
                    observer.disconnect();
                    
                    // 尝试重新连接到最后一条轨道
                    observer.observe(trackLane, { childList: true });
                    
                    // 如果成功，说明这个观察者是关联到最后一条轨道的
                    observersToRemove.push(observer);
                } catch (e) {
                    // 不是关联到最后一条轨道的观察者，重新连接到它原来的元素
                    try {
                        // 对于其他观察者，我们无法确定它们原来观察的是什么
                        // 所以暂时不做任何操作，等待垃圾回收处理
                    } catch (innerError) {
                        console.error('重新连接观察者时出错:', innerError);
                    }
                }
            }
            
            // 断开所有找到的观察者
            observersToRemove.forEach(observer => {
                const index = this.activeObservers.indexOf(observer);
                if (index !== -1) {
                    this.activeObservers.splice(index, 1);
                }
                observer.disconnect();
            });
        }
        
        // 减少轨道计数并重新初始化
        this.trackCount--;
        this.initializeTracks();
        
        // 通知用户
        this.showNotification(`已删除音轨 ${this.trackCount + 1}`);
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
            
            // 设置刚完成拖动的标记，防止触发点击
            this._justFinishedDragging = true;
            
            // 短暂延时后重置标记
            setTimeout(() => {
                this._justFinishedDragging = false;
            }, 50);
            
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
        
        // 保存事件处理函数引用
        this.eventHandlers.playbackIndicator.mousedown = handlePointerDown;
        this.eventHandlers.playbackIndicator.touchstart = handlePointerDown;
        
        // 添加鼠标和触摸事件监听
        indicator.addEventListener('mousedown', handlePointerDown);
        indicator.addEventListener('touchstart', handlePointerDown, { passive: false });
        
        // 点击轨道区域任意位置也可以移动指示器，但增加判断条件
        const handleTrackAreaClick = (e) => {
            // 如果刚刚完成了拖动操作，不处理点击
            if (this._justFinishedDragging) {
                return;
            }
            
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
            // 优化触摸事件坐标获取，同时处理touches和changedTouches
            const clientX = e.clientX || 
                (e.touches && e.touches[0] ? e.touches[0].clientX : 
                (e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : 0));
            this.updateIndicatorPosition(clientX);
        };
        
        // 保存事件处理函数引用
        this.eventHandlers.trackArea.click = handleTrackAreaClick;
        
        // 添加事件监听器
        trackArea.addEventListener('click', handleTrackAreaClick);
        
        // 触摸相关变量
        let touchStartX = 0;
        let touchStartTime = 0;
        
        // 添加触摸开始事件监听，记录开始位置
        const handleTouchStart = (e) => {
            if (!e.target.closest('.track-item') && !e.target.closest('.playback-indicator') && !isDragging) {
                touchStartX = e.touches[0].clientX;
                touchStartTime = Date.now();
            }
        };
        
        // 保存事件处理函数引用
        this.eventHandlers.trackArea.touchstart = handleTouchStart;
        
        // 添加事件监听器
        trackArea.addEventListener('touchstart', handleTouchStart, { passive: true });
        
        // 添加触摸结束事件监听
        const handleTouchEnd = (e) => {
            // 避免滑动后触发点击，以及拖动操作后的点击
            if (!isDragging && !this._justFinishedDragging) {
                // 计算触摸滑动距离和持续时间
                const touchEndX = e.changedTouches[0].clientX;
                const touchDuration = Date.now() - touchStartTime;
                const touchDistance = Math.abs(touchEndX - touchStartX);
                
                // 仅当滑动距离小且时间短时才视为点击
                if (touchDistance < 10 && touchDuration < 300) {
                    handleTrackAreaClick(e);
                }
            }
        };
        
        // 保存事件处理函数引用
        this.eventHandlers.trackArea.touchend = handleTouchEnd;
        
        // 添加事件监听器
        trackArea.addEventListener('touchend', handleTouchEnd);
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
        
        // 获取当前操作的时间戳，用于跟踪哪些是新操作
        const operationTimestamp = Date.now();
        const operationId = ++this.operationCounter;
        
        // 清理过期的操作
        for (const [key, op] of this.activeOperations.entries()) {
            if (op.timestamp < operationTimestamp - 10000) { // 10秒前的操作视为过期
                this.activeOperations.delete(key);
            }
        }
        
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
                    
                    // 创建此次操作的唯一标识符
                    const audioOperationId = `${url}_${operationId}`;
                    
                    // 记录此操作为活跃操作
                    this.activeOperations.set(audioOperationId, {
                        url,
                        timestamp: operationTimestamp,
                        trackId,
                        isActive: true
                    });
                    
                    // 加载并播放音频
                    this.preloadAudio(url).then(audio => {
                        // 如果操作已经不是活跃操作，则不处理
                        if (!this.activeOperations.has(audioOperationId) || 
                            !this.activeOperations.get(audioOperationId).isActive) {
                            return;
                        }
                        
                        // 设置播放位置
                        audio.currentTime = Math.min(elapsedTime, audio.duration);
                        
                        // 设置音量
                        const trackVolume = this.trackVolumes[trackId] || 1;
                        audio.volume = this.masterVolume * trackVolume;
                        
                        // 使用自定义属性标记这个音频对象
                        audio._operationId = audioOperationId;
                        audio._trackId = trackId;
                        audio._url = url;
                        
                        // 添加ended事件监听
                        audio.onended = () => {
                            // 只有当操作仍然是活跃的，才操作Map
                            if (this.activeOperations.has(audioOperationId) && 
                                this.activeOperations.get(audioOperationId).isActive) {
                                this.currentAudio.delete(url);
                                this.activeOperations.delete(audioOperationId);
                            }
                        };
                        
                        // 添加错误处理
                        audio.onerror = (e) => {
                            if (this.activeOperations.has(audioOperationId) && 
                                this.activeOperations.get(audioOperationId).isActive) {
                                this.handleAudioError(e.error || new Error('音频播放错误'), url, title);
                                this.currentAudio.delete(url);
                                this.activeOperations.delete(audioOperationId);
                            }
                        };
                        
                        // 只有在非暂停状态下才播放音频
                        if (!this.isPaused) {
                            audio.play().catch(err => {
                                if (this.activeOperations.has(audioOperationId) && 
                                    this.activeOperations.get(audioOperationId).isActive) {
                                    this.handleAudioError(err, url, title);
                                    this.activeOperations.delete(audioOperationId);
                                }
                            });
                        }
                        
                        // 安全地更新Map
                        this.currentAudio.set(url, audio);
                    }).catch(error => {
                        // 错误时也要清理操作状态
                        if (this.activeOperations.has(audioOperationId)) {
                            this.activeOperations.delete(audioOperationId);
                        }
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
    
    // 优化的音频缓存管理
    
    // 改进的缓存添加方法，使用LRU策略 (Least Recently Used)并防止重复添加
    addToCache(url, audio) {
        // 如果URL已在缓存中且是同一个音频对象，直接返回，避免重复操作
        if (this.audioCache.has(url) && this.audioCache.get(url) === audio) {
            // 更新LRU顺序，将此项移动到"最近使用"位置
            this.updateCacheOrder(url);
            return;
        }
        
        // 如果URL已在缓存中但是不同的音频对象，先释放旧对象资源
        if (this.audioCache.has(url)) {
            const oldAudio = this.audioCache.get(url);
            if (oldAudio && oldAudio !== audio) {
                try {
                    // 仅当不在当前播放列表中才释放资源
                    if (!this.currentAudio.has(url) || this.currentAudio.get(url) !== oldAudio) {
                        oldAudio.pause();
                        oldAudio.oncanplaythrough = null;
                        oldAudio.onerror = null;
                        oldAudio.onended = null;
                        oldAudio.onloadedmetadata = null;
                        oldAudio.onpause = null;
                        oldAudio.onplay = null;
                        oldAudio.src = '';
                        oldAudio.load();
                    }
                } catch (error) {
                    console.error('释放旧音频资源时出错:', error);
                }
            }
            this.audioCache.delete(url);
        }
        
        // 检查缓存容量并根据需要清理
        if (this.audioCache.size >= this.MAX_CACHE_SIZE) {
            this.removeOldestCacheItem();
        }
        
        // 添加新项到缓存
        this.audioCache.set(url, audio);
        
        // 将新添加的项添加到访问顺序数组的末尾（表示最近使用）
        // 先确保没有重复
        const existingIndex = this.cacheAccessOrder.indexOf(url);
        if (existingIndex !== -1) {
            this.cacheAccessOrder.splice(existingIndex, 1);
        }
        this.cacheAccessOrder.push(url);
        
        console.log(`已添加到缓存: ${url}, 当前缓存大小: ${this.audioCache.size}`);
    }
    
    // 从缓存获取，并显式更新LRU顺序
    getFromCache(url) {
        if (!this.audioCache.has(url)) {
            return null;
        }
        
        // 获取音频
        const audio = this.audioCache.get(url);
        
        // 更新LRU顺序
        this.updateCacheOrder(url);
        
        console.log(`缓存命中: ${url}`);
        return audio;
    }
    
    // 移除最旧的缓存项（真正的LRU实现）
    removeOldestCacheItem() {
        // 确保访问顺序数组有数据
        if (this.cacheAccessOrder.length === 0) {
            // 如果为空，则重建
            this.rebuildCacheAccessOrder();
            
            // 如果仍然为空，则无法继续
            if (this.cacheAccessOrder.length === 0) {
                console.warn('无法确定最旧的缓存项，缓存可能已空');
                return;
            }
        }
        
        // 从顺序数组的开始位置（最旧的项）开始检查
        let oldestKeyIndex = 0;
        let oldestKey = null;
        
        // 查找不在当前播放的最旧项
        while (oldestKeyIndex < this.cacheAccessOrder.length) {
            const key = this.cacheAccessOrder[oldestKeyIndex];
            
            // 跳过不存在于缓存中的键（可能已被删除）
            if (!this.audioCache.has(key)) {
                this.cacheAccessOrder.splice(oldestKeyIndex, 1);
                continue;
            }
            
            // 如果这个项目不在当前播放中，我们可以删除它
            if (!this.currentAudio.has(key)) {
                oldestKey = key;
                break;
            }
            
            // 否则检查下一个项目
            oldestKeyIndex++;
        }
        
        // 如果所有项都在播放中，则移除最旧的项（即使它在播放中）
        if (oldestKey === null && this.cacheAccessOrder.length > 0) {
            oldestKey = this.cacheAccessOrder[0];
        }
        
        // 如果找到要移除的项
        if (oldestKey) {
            const oldestAudio = this.audioCache.get(oldestKey);
            
            try {
                // 仅当不在当前播放列表中才释放资源
                if (oldestAudio && (!this.currentAudio.has(oldestKey) || this.currentAudio.get(oldestKey) !== oldestAudio)) {
                    oldestAudio.pause();
                    oldestAudio.oncanplaythrough = null;
                    oldestAudio.onerror = null;
                    oldestAudio.onended = null;
                    oldestAudio.onloadedmetadata = null;
                    oldestAudio.onpause = null;
                    oldestAudio.onplay = null;
                    oldestAudio.src = '';
                    oldestAudio.load();
                }
                
                // 从缓存和访问顺序中移除
                this.audioCache.delete(oldestKey);
                const orderIndex = this.cacheAccessOrder.indexOf(oldestKey);
                if (orderIndex !== -1) {
                    this.cacheAccessOrder.splice(orderIndex, 1);
                }
                
                console.log(`缓存已满，释放资源: ${oldestKey}`);
            } catch (error) {
                console.error('释放缓存资源时出错:', error);
                
                // 即使出错，也从缓存中移除，避免不可用的资源占用缓存位置
                this.audioCache.delete(oldestKey);
                const orderIndex = this.cacheAccessOrder.indexOf(oldestKey);
                if (orderIndex !== -1) {
                    this.cacheAccessOrder.splice(orderIndex, 1);
                }
            }
        }
    }
    
    // 更新缓存项的LRU顺序
    updateCacheOrder(url) {
        // 从访问顺序中移除此URL（如果存在），然后添加到末尾（表示最近使用）
        const index = this.cacheAccessOrder.indexOf(url);
        if (index !== -1) {
            this.cacheAccessOrder.splice(index, 1);
        }
        this.cacheAccessOrder.push(url);
    }
    
    // 重建缓存访问顺序数组
    rebuildCacheAccessOrder() {
        // 创建一个新的访问顺序数组，包含当前缓存中的所有键
        this.cacheAccessOrder = Array.from(this.audioCache.keys());
    }
    
    // 更积极地清理缓存
    cleanupCache() {
        console.log(`当前缓存大小: ${this.audioCache.size}, 当前播放: ${this.currentAudio.size}`);
        
        // 记录清理前的内存使用情况
        if (window.performance && window.performance.memory) {
            console.log(`清理前内存使用: ${Math.round(window.performance.memory.usedJSHeapSize / 1048576)}MB`);
        }
        
        // 始终保留一些空闲缓存空间
        const targetSize = Math.floor(this.MAX_CACHE_SIZE * 0.7);
        
        if (this.audioCache.size > targetSize) {
            const keysToDelete = this.audioCache.size - targetSize;
            let deletedCount = 0;
            
            // 使用增强的LRU逻辑多次移除最旧的项
            for (let i = 0; i < keysToDelete; i++) {
                const initialSize = this.audioCache.size;
                this.removeOldestCacheItem();
                
                // 检查是否成功删除了一项
                if (this.audioCache.size < initialSize) {
                    deletedCount++;
                } else {
                    // 如果没有删除成功，可能是因为所有项都在使用中
                    break;
                }
            }
            
            console.log(`已清理 ${deletedCount} 个缓存项`);
            
            // 记录清理后的内存使用情况
            if (window.performance && window.performance.memory) {
                console.log(`清理后内存使用: ${Math.round(window.performance.memory.usedJSHeapSize / 1048576)}MB`);
            }
        }
    }
    
    // 替换createTrackItem方法，提高安全性和效率
    createTrackItem(data, position) {
        // 过滤HTML，避免XSS攻击
        const safeTitle = this.sanitizeHTML(data.title);
        
        const trackItem = document.createElement('div');
        trackItem.className = 'track-item';
        
        // 创建标题span
        const titleSpan = document.createElement('span');
        titleSpan.style.minWidth = '80px';
        titleSpan.textContent = safeTitle;
        trackItem.appendChild(titleSpan);
        
        // 创建控制按钮容器
        const controlsDiv = document.createElement('div');
        controlsDiv.className = 'track-controls';
        
        // 创建删除按钮
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.title = '删除';
        
        // 创建删除图标
        const removeIcon = document.createElement('i');
        removeIcon.className = 'fas fa-times';
        removeBtn.appendChild(removeIcon);
        
        controlsDiv.appendChild(removeBtn);
        trackItem.appendChild(controlsDiv);
        
        // 设置数据属性
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
    
    // 优化的HTML净化方法，使用纯JavaScript实现
    sanitizeHTML(str) {
        // 如果输入不是字符串，转换为字符串
        str = String(str);
        
        // 使用纯JavaScript字符替换，避免DOM操作
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    // 优化makeTrackItemDraggable方法，添加触摸支持和更好的视觉反馈
    makeTrackItemDraggable(trackItem, trackLane) {
        let isDragging = false;
        let startX, startLeft, gridSize;
        let lastValidPosition = 1;
        let hasMoved = false; // 新增变量，用于跟踪是否真正发生了拖动
        
        // 添加事件监听器引用，方便后续移除
        let boundHandleDragMove;
        let boundHandleDragEnd;
        
        // 移除所有事件监听器的辅助函数
        const removeEventListeners = () => {
            if (boundHandleDragMove) {
                document.removeEventListener('mousemove', boundHandleDragMove);
                document.removeEventListener('touchmove', boundHandleDragMove);
            }
            if (boundHandleDragEnd) {
                document.removeEventListener('mouseup', boundHandleDragEnd);
                document.removeEventListener('touchend', boundHandleDragEnd);
            }
        };
        
        // 处理拖动中
        const handleDragMove = (e) => {
            if (!isDragging) return;
            
            // 标记已发生移动
            hasMoved = true;
            
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
        const handleDragEnd = (e) => {
            if (!isDragging) return;
            
            // 阻止事件冒泡，避免触发trackArea的点击事件
            e.stopPropagation();
            
            // 阻止默认行为
            e.preventDefault();
            
            // 如果真正发生了拖动，防止点击事件传播
            if (hasMoved) {
                // 设置全局标记来指示刚刚完成了拖动操作
                this._justFinishedDragging = true;
                
                // 在短暂延时后重置标记，以便未来的正常点击可以工作
                setTimeout(() => {
                    this._justFinishedDragging = false;
                }, 50);
            }
            
            isDragging = false;
            hasMoved = false; // 重置移动标记
            
            // 移除事件监听
            removeEventListeners();
            
            // 恢复原样式
            trackItem.classList.remove('dragging');
            trackItem.style.borderColor = '';
            document.body.style.cursor = '';
            
            // 重新组织轨道项目
            if (trackLane && document.body.contains(trackLane)) {
                this.reorganizeTrackItems(trackLane);
            }
        };
        
        // 为事件处理函数创建绑定版本
        boundHandleDragMove = handleDragMove.bind(this);
        boundHandleDragEnd = handleDragEnd.bind(this);
        
        // 处理开始拖动
        const handleTrackItemDrag = (e) => {
            // 如果是删除按钮或拖拽事件，不处理
            if (e.target.closest('.remove-btn')) {
                return;
            }
            
            // 如果已经在拖动中，先终止当前拖动
            if (isDragging) {
                removeEventListeners();
                trackItem.classList.remove('dragging');
                trackItem.style.borderColor = '';
                document.body.style.cursor = '';
            }

            isDragging = true;
            startX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
            const rect = trackLane.getBoundingClientRect();
            gridSize = rect.width / 30;
            startLeft = parseInt(trackItem.style.gridColumnStart || 1);
            lastValidPosition = startLeft;

            // 添加移动和结束事件
            document.addEventListener('mousemove', boundHandleDragMove);
            document.addEventListener('touchmove', boundHandleDragMove, { passive: false });
            document.addEventListener('mouseup', boundHandleDragEnd);
            document.addEventListener('touchend', boundHandleDragEnd);
            
            // 阻止事件默认行为，避免其他拖放冲突
            e.preventDefault();
            
            // 添加正在拖动的样式
            trackItem.classList.add('dragging');
            document.body.style.cursor = 'grabbing';
            
            // 显示辅助提示
            this.showNotification('拖动以调整音频位置');
        };
        
        // 确保在元素销毁前清理所有事件监听器
        const cleanupTrackItem = () => {
            if (isDragging) {
                removeEventListeners();
                isDragging = false;
            }
            
            // 安全移除事件监听器
            if (trackItem) {
                try {
                    trackItem.removeEventListener('mousedown', handleTrackItemDrag);
                    trackItem.removeEventListener('touchstart', handleTrackItemDrag);
                } catch (e) {
                    console.error('移除轨道项事件监听器时出错:', e);
                }
            }
            
            // 移除这个MutationObserver
            if (observer) {
                try {
                    // 从跟踪数组中移除
                    const observerIndex = this.activeObservers.indexOf(observer);
                    if (observerIndex > -1) {
                        this.activeObservers.splice(observerIndex, 1);
                    }
                    observer.disconnect();
                    observer = null;
                } catch (e) {
                    console.error('断开MutationObserver连接时出错:', e);
                }
            }
        };
        
        // 为轨道项添加唯一ID，用于标识
        if (!trackItem.dataset.itemId) {
            trackItem.dataset.itemId = 'track_item_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
        }
        
        // 使用MutationObserver监听元素是否被移除
        let observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.type === 'childList' && mutation.removedNodes.length > 0) {
                    // 只关心包含当前轨道项的变化
                    for (let i = 0; i < mutation.removedNodes.length; i++) {
                        const removedNode = mutation.removedNodes[i];
                        // 检查是否是当前轨道项或包含当前轨道项
                        if (removedNode === trackItem || 
                            (removedNode.contains && removedNode.contains(trackItem))) {
                            console.log(`MutationObserver: 检测到轨道项 ${trackItem.dataset.itemId} 被移除`);
                            cleanupTrackItem();
                            break;
                        }
                    }
                }
            }
        });
        
        // 开始观察父元素
        if (trackLane) {
            try {
                observer.observe(trackLane, { childList: true, subtree: false });
                
                // 保存到该轨道项的数据集中，便于后续引用
                trackItem.dataset.observerId = this.activeObservers.length;
                
                // 将observer添加到跟踪数组中
                this.activeObservers.push(observer);
            } catch (e) {
                console.error('设置MutationObserver时出错:', e);
            }
        }
        
        // 添加鼠标和触摸事件监听
        trackItem.addEventListener('mousedown', handleTrackItemDrag);
        trackItem.addEventListener('touchstart', handleTrackItemDrag, { passive: false });
    }

    addTrackToTimeline(data, targetTrack) {
        // 确保目标轨道有效
        if (!targetTrack || !document.body.contains(targetTrack)) {
            this.showErrorNotification('无效的目标轨道');
            return;
        }
        
        // 记录轨道ID，以便后续操作可以正确引用
        const trackId = targetTrack.id;
        
        // 查找可用位置
        const position = this.findAvailablePosition(targetTrack);
        if (!position) {
            this.showNotification('轨道已满，请清理一些音频片段');
            return;
        }

        // 创建轨道项目并设置属性
        const trackItem = this.createTrackItem(data, position);
        
        // 确保轨道项拥有轨道ID属性，便于后续操作引用
        trackItem.dataset.trackId = trackId;
        
        // 添加到DOM
        targetTrack.appendChild(trackItem);
        
        // 设置拖拽功能
        this.makeTrackItemDraggable(trackItem, targetTrack);
        
        // 添加到轨道队列，确保包含轨道ID
        const trackData = {...data, trackId: trackId};
        this.trackQueue.push(trackData);

        // 预加载音频，并优化错误处理
        this.preloadAudio(data.url)
            .then(audio => {
                // 记录此音频与轨道的关联，以便在removeTrack时能够正确处理
                if (audio) {
                    audio.dataset = audio.dataset || {};
                    audio.dataset.trackId = trackId;
                }
            })
            .catch(error => {
                this.handleAudioError(error, data.url, data.title);
            });
        
        // 使用防抖重组所有轨道
        if (this.debouncedReorganize) {
            this.debouncedReorganize();
        } else {
            this.reorganizeTrackItems(targetTrack);
        }
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
        // 检查trackLane是否存在，防止对已销毁DOM的操作
        if (!trackLane || !document.body.contains(trackLane)) {
            console.warn('尝试重组不存在的轨道元素');
            return;
        }
        
        const items = Array.from(trackLane.querySelectorAll('.track-item'));
        if (items.length === 0) return;
        
        // 首先按开始位置排序
        items.sort((a, b) => {
            return parseInt(a.style.gridColumnStart) - parseInt(b.style.gridColumnStart);
        });
        
        // 批量更新DOM
        const updates = [];
        let hasUpdates = false;
        
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
                    updates.push({
                        element: currentItem,
                        start: newStart,
                        end: newStart + duration,
                        duration: duration
                    });
                    hasUpdates = true;
                } else {
                    // 如果会超出边界，尝试调整持续时间
                    const adjustedDuration = 31 - newStart;
                    if (adjustedDuration > 0) {
                        updates.push({
                            element: currentItem,
                            start: newStart,
                            end: 31,
                            duration: adjustedDuration
                        });
                        hasUpdates = true;
                    } else {
                        // 没有空间，移除此项目
                        updates.push({
                            element: currentItem,
                            remove: true
                        });
                        items.splice(i, 1);
                        i--; // 调整索引
                        hasUpdates = true;
                        this.showNotification('由于空间不足，部分音频片段被移除');
                    }
                }
            }
        }

        // 批量应用更新
        if (hasUpdates) {
            // 取消之前的animationFrame，如果有的话
            if (this.animationFrameId) {
                cancelAnimationFrame(this.animationFrameId);
                this.animationFrameId = null;
            }
            
            // 在请求新的animationFrame前保存一份引用以便在页面卸载时使用
            const self = this;
            const safeUpdates = updates.map(update => ({...update}));
            
            // 使用requestAnimationFrame优化视觉更新，并保存返回的ID
            this.animationFrameId = requestAnimationFrame(() => {
                // 安全检查：确保DOM元素仍存在于文档中
                safeUpdates.forEach(update => {
                    try {
                        if (!update.element || !document.body.contains(update.element)) {
                            return; // 跳过已移除的元素
                        }
                        
                        if (update.remove) {
                            update.element.remove();
                        } else {
                            update.element.style.gridColumnStart = update.start;
                            update.element.style.gridColumnEnd = update.end;
                            if (update.duration !== parseInt(update.element.dataset.duration)) {
                                update.element.dataset.duration = update.duration;
                            }
                        }
                    } catch (error) {
                        console.error('更新轨道项时出错:', error);
                    }
                });
                
                // 完成后清空ID
                if (self.animationFrameId) {
                    self.animationFrameId = null;
                }
            });
        }

        // 设置正确的网格行
        items.forEach(item => {
            if (item && document.body.contains(item)) {
                item.style.gridRowStart = "1";
                item.style.gridRowEnd = "2";
            }
        });
    }

    // 确保removeTrack方法正确定义
    removeTrack(trackItem) {
        if (!trackItem || !document.body.contains(trackItem)) {
            console.error('尝试删除不存在的轨道项');
            return;
        }
        
        // 存储需要删除的项目的原始引用
        const originalTrackItem = trackItem;
        
        // 获取用于音频和操作识别的URL和轨道信息
        const url = trackItem.dataset.url;
        const trackLane = trackItem.parentElement;
        const trackId = trackLane ? trackLane.id : trackItem.dataset.trackId;
        
        console.log(`正在删除轨道项: URL=${url}, 轨道ID=${trackId}`);
        
        // 查找此轨道项的MutationObserver并先断开连接
        // 这样可以防止触发其他轨道项的事件处理程序
        const observerToRemove = this.findObserverForTrackItem(trackItem);
        if (observerToRemove) {
            const observerIndex = this.activeObservers.indexOf(observerToRemove);
            if (observerIndex > -1) {
                this.activeObservers.splice(observerIndex, 1);
            }
            observerToRemove.disconnect();
            console.log('已断开轨道项的MutationObserver连接');
        }
        
        // 清理与此特定轨道项相关的音频资源
        if (this.currentAudio.has(url)) {
            const audio = this.currentAudio.get(url);
            // 检查音频是否与当前轨道关联
            const audioTrackId = audio.dataset && audio.dataset.trackId;
            
            // 只处理与当前轨道相关的音频
            if (audio && (!audioTrackId || audioTrackId === trackId)) {
                // 先暂停播放
                audio.pause();
                
                // 只有当没有其他轨道使用此URL时才释放资源
                if (!this.isUrlBeingUsedElsewhere(url, originalTrackItem)) {
                    audio.oncanplaythrough = null;
                    audio.onerror = null;
                    audio.onended = null;
                    audio.onloadedmetadata = null;
                    audio.onpause = null;
                    audio.onplay = null;
                    audio.currentTime = 0;
                    audio.src = '';
                    audio.load();
                    this.currentAudio.delete(url);
                    console.log('已清理音频资源');
                } else {
                    console.log('音频仍被其他轨道使用，保留资源');
                }
            }
        }
        
        // 清理与此特定元素相关的活跃操作
        const operationsToRemove = [];
        for (const [key, operation] of this.activeOperations.entries()) {
            // 只清理确实匹配当前轨道项的操作
            const isMatchingOperation = 
                operation.url === url && 
                (operation.trackId === trackId || 
                 operation.trackItem === originalTrackItem ||
                 (operation.trackItem && operation.trackItem.isSameNode && operation.trackItem.isSameNode(originalTrackItem)));
                
            if (isMatchingOperation) {
                operation.isActive = false;
                operationsToRemove.push(key);
                console.log(`标记操作${key}为删除`);
            }
        }
        
        // 从Map中删除标记的操作
        operationsToRemove.forEach(key => {
            this.activeOperations.delete(key);
            console.log(`已删除操作: ${key}`);
        });
        
        // 从轨道队列中移除，但只移除匹配当前轨道的项目
        const originalQueueSize = this.trackQueue.length;
        this.trackQueue = this.trackQueue.filter(item => 
            !(item.url === url && item.trackId === trackId));
        console.log(`从轨道队列中移除了 ${originalQueueSize - this.trackQueue.length} 个项目`);
        
        // 直接移除元素，确保移除的是正确的元素
        try {
            // 我们先移除DOM元素，这会触发自定义MutationObserver进行正确的清理
            if (trackLane && trackLane.contains(originalTrackItem)) {
                // 从trackLane中直接移除，避免任何其他干扰
                trackLane.removeChild(originalTrackItem);
                console.log('已从DOM中移除轨道项');
            } else if (originalTrackItem.parentElement) {
                // 备用方法，如果trackLane引用不正确
                originalTrackItem.parentElement.removeChild(originalTrackItem);
                console.log('已使用备用方法从DOM中移除轨道项');
            } else {
                console.warn('轨道项没有父元素，可能已被移除');
            }
        } catch (error) {
            console.error('移除轨道项时出错:', error);
        }
        
        // 重新组织剩余的轨道项目（只影响当前轨道）
        if (trackLane && document.body.contains(trackLane)) {
            console.log('重新组织轨道布局');
            this.reorganizeTrackItems(trackLane);
        }
        
        // 检查轨道中是否还有其他项目，如果没有，可以添加一个视觉提示
        if (trackLane && trackLane.querySelectorAll('.track-item').length === 0) {
            console.log('轨道现在为空');
        }
    }
    
    // 新方法：根据trackItem查找对应的MutationObserver
    findObserverForTrackItem(trackItem) {
        if (!this.activeObservers || !this.activeObservers.length) {
            return null;
        }
        
        // 遍历活跃的观察者
        for (const observer of this.activeObservers) {
            // MutationObserver没有直接的方法来检查它监视哪个元素
            // 但我们可以通过观察一个临时元素并检查是否触发来判断
            
            // 这是一个启发式方法：
            // 我们尝试断开后重新连接，如果它正在监视trackItem的父元素，就找到了
            if (trackItem.parentElement) {
                try {
                    // 临时断开连接
                    observer.disconnect();
                    
                    // 重新连接到trackItem的父元素
                    observer.observe(trackItem.parentElement, { childList: true });
                    
                    // 假设这是正确的观察者
                    return observer;
                } catch (e) {
                    // 这不是正确的观察者，继续尝试
                    continue;
                }
            }
        }
        
        return null;
    }
    
    // 优化的检查URL是否被其他轨道项使用的方法
    isUrlBeingUsedElsewhere(url, excludeItem) {
        if (!url) return false;
        
        try {
            // 检查是否有其他轨道项使用此URL
            const trackItems = document.querySelectorAll('.track-item[data-url="' + this.sanitizeHTML(url) + '"]');
            console.log(`查找使用URL=${url}的轨道项: 找到${trackItems.length}个`);
            
            for (const item of trackItems) {
                // 排除当前正在删除的项目
                if (item !== excludeItem) {
                    console.log('找到其他轨道项使用相同URL');
                    return true;
                }
            }
        } catch (error) {
            console.error('检查URL使用时出错:', error);
            // 保险起见，返回true以避免释放可能仍在使用的资源
            return true;
        }
        
        console.log('没有其他轨道项使用此URL');
        return false;
    }
    
    // 保留现有的isUrlBeingUsed方法用于缓存管理
    isUrlBeingUsed(url) {
        // 检查是否在当前播放的音频中
        if (this.currentAudio.has(url)) {
            return true;
        }
        
        // 检查轨道队列中是否有该URL
        if (this.trackQueue.some(item => item.url === url)) {
            return true;
        }
        
        // 检查DOM中是否还有使用此URL的轨道项
        const trackItems = document.querySelectorAll('.track-item');
        for (const item of trackItems) {
            if (item.dataset.url === url) {
                return true;
            }
        }
        
        return false;
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
        if (!trackItem || !document.body.contains(trackItem)) {
            console.error('尝试播放无效的轨道项');
            return;
        }
        
        const url = trackItem.dataset.url;
        const trackLane = trackItem.closest('.track-lane');
        const trackId = trackLane ? trackLane.id : trackItem.dataset.trackId;
        const trackVolume = this.trackVolumes[trackId] || 1;
        const title = trackItem.dataset.title;
        
        // 创建操作ID
        const operationId = ++this.operationCounter;
        const audioOperationId = `${url}_${operationId}`;
        
        // 记录此操作
        this.activeOperations.set(audioOperationId, {
            url,
            timestamp: Date.now(),
            isActive: true,
            trackId: trackId, // 保存轨道ID
            trackItem: trackItem // 保存对轨道项的引用
        });
        
        try {
            // 添加播放动画
            trackItem.classList.add('playing');
            
            // 首先尝试从缓存获取音频
            let audio = null;
            
            // 检查是否已在当前播放列表中
            if (this.currentAudio.has(url)) {
                audio = this.currentAudio.get(url);
                if (audio.error) {
                    this.currentAudio.delete(url);
                    audio = null;
                }
            }
            
            // 如果当前没有可用的音频，从缓存或尝试加载新的
            if (!audio) {
                try {
                    audio = await this.preloadAudio(url);
                    
                    // 保存轨道ID关联
                    audio.dataset = audio.dataset || {};
                    audio.dataset.trackId = trackId;
                    
                    // 添加到当前播放列表
                    this.currentAudio.set(url, audio);
                } catch (error) {
                    // 如果加载失败，移除播放动画并退出
                    trackItem.classList.remove('playing');
                    this.handleAudioError(error, url, title);
                    
                    // 标记操作为非活跃
                    const operation = this.activeOperations.get(audioOperationId);
                    if (operation) {
                        operation.isActive = false;
                    }
                    
                    return;
                }
            }
            
            // 重置音频状态
            audio.currentTime = 0;
            audio.volume = trackVolume * (this.masterVolume / 100);
            
            // 确保移除之前可能存在的事件监听器
            audio.onended = null;
            
            // 添加结束事件处理
            audio.onended = () => {
                // 移除播放动画
                trackItem.classList.remove('playing');
                
                // 标记操作为非活跃
                const operation = this.activeOperations.get(audioOperationId);
                if (operation) {
                    operation.isActive = false;
                }
            };
            
            // 播放音频
            try {
                await audio.play();
            } catch (playError) {
                // 处理播放错误
                trackItem.classList.remove('playing');
                this.handleAudioError(playError, url, title);
                
                // 标记操作为非活跃
                const operation = this.activeOperations.get(audioOperationId);
                if (operation) {
                    operation.isActive = false;
                }
            }
        } catch (error) {
            // 处理其他错误
            trackItem.classList.remove('playing');
            this.handleAudioError(error, url, title);
            
            // 标记操作为非活跃
            const operation = this.activeOperations.get(audioOperationId);
            if (operation) {
                operation.isActive = false;
            }
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

        // 先取消所有活跃操作
        this.activeOperations.clear();

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

    // 创建或获取通知容器
    getNotificationContainer() {
        if (!this.notificationContainer) {
            // 创建通知容器
            this.notificationContainer = document.createElement('div');
            this.notificationContainer.className = 'notification-container';
            
            // 设置容器样式
            this.notificationContainer.style.position = 'fixed';
            this.notificationContainer.style.top = '20px';
            this.notificationContainer.style.right = '20px';
            this.notificationContainer.style.zIndex = '1000';
            this.notificationContainer.style.display = 'flex';
            this.notificationContainer.style.flexDirection = 'column';
            this.notificationContainer.style.gap = '10px';
            
            // 添加到文档
            document.body.appendChild(this.notificationContainer);
        }
        
        return this.notificationContainer;
    }

    // 重新定位所有通知
    repositionNotifications() {
        // 过滤掉已移除的通知
        this.notifications = this.notifications.filter(n => 
            document.body.contains(n.element) || this.notificationContainer.contains(n.element));
            
        // 重新设置位置
        this.notifications.forEach((notification, index) => {
            notification.element.style.position = 'relative';
            notification.element.style.top = '0';
            notification.element.style.right = '0';
        });
    }

    // 确保showNotification方法正确定义
    showNotification(message) {
        // 获取通知容器
        const container = this.getNotificationContainer();
        
        // 创建通知元素
        const notification = document.createElement('div');
        notification.className = 'notification';
        
        // 对消息进行安全处理，防止潜在的XSS攻击
        const safeMessage = this.sanitizeHTML(message);
        notification.textContent = safeMessage;
        
        // 添加到容器和通知列表
        container.appendChild(notification);
        this.notifications.push({
            element: notification,
            isError: false
        });
        
        // 重新定位所有通知
        this.repositionNotifications();
        
        // 2秒后移除通知
        setTimeout(() => {
            if (container.contains(notification)) {
                notification.classList.add('fade-out');
                setTimeout(() => {
                    if (container.contains(notification)) {
                        container.removeChild(notification);
                        this.repositionNotifications();
                    }
                }, 300); // 淡出动画时间
            }
        }, 2000);
    }
    
    // 显示错误通知
    showErrorNotification(message) {
        // 获取通知容器
        const container = this.getNotificationContainer();
        
        // 创建通知元素
        const notification = document.createElement('div');
        notification.className = 'notification error-message';
        
        // 使用sanitizeHTML过滤message内容，防止XSS攻击
        const safeMessage = this.sanitizeHTML(message);
        notification.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            ${safeMessage}
            <button class="close-btn">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // 添加到容器和通知列表
        container.appendChild(notification);
        this.notifications.push({
            element: notification,
            isError: true
        });
        
        // 重新定位所有通知
        this.repositionNotifications();

        // 添加关闭按钮功能
        const closeBtn = notification.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => {
            notification.classList.add('fade-out');
            setTimeout(() => {
                if (container.contains(notification)) {
                    container.removeChild(notification);
                    this.repositionNotifications();
                }
            }, 300); // 淡出动画时间
        });

        // 5秒后自动移除
        setTimeout(() => {
            if (container.contains(notification)) {
                notification.classList.add('fade-out');
                setTimeout(() => {
                    if (container.contains(notification)) {
                        container.removeChild(notification);
                        this.repositionNotifications();
                    }
                }, 300); // 淡出动画时间
            }
        }, 5000);
    }

    // 改进的音频预加载方法，优化缓存复用
    async preloadAudio(url) {
        // 首先进行URL标准化，确保相同资源使用相同的缓存键
        const normalizedUrl = url.trim();
        
        // 首先进行URL安全检查
        if (!this.isValidAudioUrl(normalizedUrl)) {
            this.showErrorNotification(`不安全的音频URL: ${normalizedUrl}`);
            return Promise.reject(new Error('不安全的音频URL'));
        }
    
        // 创建一个检查是否已存在加载中的相同URL请求的Map
        if (!this.pendingAudioLoads) {
            this.pendingAudioLoads = new Map();
        }
        
        // 如果相同URL已在加载中，返回现有的Promise
        if (this.pendingAudioLoads.has(normalizedUrl)) {
            console.log(`复用正在加载中的音频Promise: ${normalizedUrl}`);
            return this.pendingAudioLoads.get(normalizedUrl);
        }
        
        // 如果当前正在播放，创建一个新的引用（克隆）避免直接修改正在播放的音频
        if (this.currentAudio.has(normalizedUrl)) {
            console.log(`复用当前播放中的音频: ${normalizedUrl}`);
            const playingAudio = this.currentAudio.get(normalizedUrl);
            // 返回一个Promise，解析为当前播放的音频，但不影响当前播放状态
            return Promise.resolve(playingAudio);
        }
        
        // 如果已缓存，从缓存返回（更新LRU顺序）
        const cachedAudio = this.getFromCache(normalizedUrl);
        if (cachedAudio) {
            console.log(`使用缓存的音频: ${normalizedUrl}`);
            
            // 检查音频是否可以播放（非错误状态）
            if (cachedAudio.error) {
                console.warn(`缓存的音频存在错误，重新加载: ${normalizedUrl}`);
                this.audioCache.delete(normalizedUrl);
                
                // 同步从访问顺序数组中删除
                const orderIndex = this.cacheAccessOrder.indexOf(normalizedUrl);
                if (orderIndex !== -1) {
                    this.cacheAccessOrder.splice(orderIndex, 1);
                }
            } else {
                // 重置音频状态
                cachedAudio.currentTime = 0;
                return cachedAudio;
            }
        }

        try {
            // 显示加载指示器
            this.showLoading();
            
            // 创建加载Promise
            const audioLoadPromise = new Promise((resolve, reject) => {
                const audio = new Audio();
                
                // 设置超时变量和ID
                let isTimedOut = false;
                let timeoutId = null;
                
                // 清理函数，避免内存泄漏
                const cleanup = () => {
                    if (timeoutId) {
                        clearTimeout(timeoutId);
                        timeoutId = null;
                    }
                    
                    // 从挂起加载列表中移除
                    this.pendingAudioLoads.delete(normalizedUrl);
                    
                    // 移除所有事件监听器
                    audio.oncanplaythrough = null;
                    audio.onerror = null;
                    audio.onload = null;
                    audio.onloadedmetadata = null;
                };
                
                // 添加错误处理
                audio.onerror = (e) => {
                    cleanup();
                    
                    // 记录详细错误信息
                    const errorCode = audio.error ? audio.error.code : '未知';
                    const errorMessage = this.getAudioErrorMessage(errorCode);
                    console.error(`音频加载失败: ${normalizedUrl}, 错误代码: ${errorCode}, 错误信息: ${errorMessage}`);
                    
                    // 显示错误通知
                    this.showErrorNotification(`音频 ${normalizedUrl.split('/').pop()} 加载失败: ${errorMessage}`);
                    
                    // 隐藏加载指示器
                    this.hideLoading();
                    
                    // 直接返回错误，不再加载默认音频
                    reject(new Error(`音频加载失败: ${errorMessage}`));
                };
                
                // 音频可以播放时
                audio.oncanplaythrough = () => {
                    if (isTimedOut) return;
                    
                    cleanup();
                    
                    // 缓存音频
                    this.addToCache(normalizedUrl, audio);
                    
                    // 隐藏加载指示器
                    this.hideLoading();
                    
                    resolve(audio);
                };
                
                // 设置URL并加载
                audio.src = normalizedUrl;
                audio.load();
                
                // 设置加载超时
                timeoutId = setTimeout(() => {
                    isTimedOut = true;
                    cleanup();
                    
                    // 创建自定义错误事件
                    const timeoutError = new Error('音频加载超时');
                    console.error(`音频加载超时: ${normalizedUrl}`);
                    
                    // 显示错误通知
                    this.showErrorNotification(`音频 ${normalizedUrl.split('/').pop()} 加载超时`);
                    
                    // 隐藏加载指示器
                    this.hideLoading();
                    
                    // 直接返回错误，不再加载默认音频
                    reject(timeoutError);
                }, 10000); // 10秒超时
            });
            
            // 存储挂起的音频加载Promise
            this.pendingAudioLoads.set(normalizedUrl, audioLoadPromise);
            
            // 为Promise添加finally处理器，确保无论成功或失败都会清理挂起状态
            const enhancedPromise = audioLoadPromise.finally(() => {
                // 确保即使在Promise链的其他地方发生错误，也清理挂起状态
                if (this.pendingAudioLoads && this.pendingAudioLoads.has(normalizedUrl)) {
                    this.pendingAudioLoads.delete(normalizedUrl);
                }
            });
            
            // 更新存储的Promise为增强版本
            this.pendingAudioLoads.set(normalizedUrl, enhancedPromise);
            
            // 返回增强的Promise
            return enhancedPromise;
        } catch (error) {
            // 从挂起加载列表中移除
            if (this.pendingAudioLoads) {
                this.pendingAudioLoads.delete(normalizedUrl);
            }
            
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
        
        // 安全处理标题和URL
        const safeTitle = this.sanitizeHTML(title || '未知音频');
        const safeUrl = url ? this.sanitizeHTML(url.split('/').pop()) : '未知文件';
        
        // 根据错误类型显示不同的提示
        let message = '';
        let suggestedAction = '';
        
        // 确定错误类型和相应的提示信息
        if (error instanceof MediaError || (error.target && error.target.error instanceof MediaError)) {
            const mediaError = error instanceof MediaError ? error : error.target.error;
            const errorCode = mediaError ? mediaError.code : 0;
            
            // 根据MediaError代码确定错误类型
            switch (errorCode) {
                case MediaError.MEDIA_ERR_ABORTED:
                    message = `播放被中断: ${safeTitle}`;
                    suggestedAction = '请重试播放';
                    break;
                case MediaError.MEDIA_ERR_NETWORK:
                    message = `网络错误，无法加载: ${safeTitle}`;
                    suggestedAction = '请检查您的网络连接并重试';
                    break;
                case MediaError.MEDIA_ERR_DECODE:
                    message = `音频解码失败: ${safeTitle}`;
                    suggestedAction = '音频文件可能已损坏，请尝试其他音频';
                    break;
                case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                    message = `不支持的音频格式: ${safeTitle}`;
                    suggestedAction = '请尝试其他格式，如MP3或WAV';
                    break;
                default:
                    message = `播放错误(${errorCode}): ${safeTitle}`;
                    suggestedAction = '请重试或选择其他音频';
            }
        } else {
            // 处理其他类型的错误
            if (error.name === 'NotSupportedError') {
                message = `不支持的音频格式: ${safeTitle}`;
                suggestedAction = '请尝试其他格式，如MP3或WAV';
            } else if (error.name === 'NotAllowedError') {
                message = `浏览器阻止了自动播放: ${safeTitle}`;
                suggestedAction = '请点击页面后再次尝试播放';
            } else if (error.name === 'AbortError') {
                message = `音频加载被中断: ${safeTitle}`;
                suggestedAction = '请重试播放';
            } else if (error.name === 'NetworkError' || (error.message && error.message.includes('network'))) {
                message = `网络错误，无法加载: ${safeTitle}`;
                suggestedAction = '请检查您的网络连接并重试';
            } else if (error.name === 'TimeoutError' || (error.message && error.message.includes('timeout'))) {
                message = `音频加载超时: ${safeTitle}`;
                suggestedAction = '请检查网络速度或尝试较小的音频文件';
            } else if (error.name === 'QuotaExceededError') {
                message = `存储空间不足: ${safeTitle}`;
                suggestedAction = '请关闭一些浏览器标签页释放内存';
            } else {
                message = `无法播放音频: ${safeTitle}`;
                suggestedAction = '请重试或选择其他音频';
            }
        }
        
        // 组合错误信息和建议操作
        const fullMessage = `${message}。${suggestedAction}`;
        this.showErrorNotification(fullMessage);
        
        // 记录详细错误信息用于调试
        const errorDetails = {
            url: url,
            title: safeTitle,
            error: {
                name: error.name || 'Unknown',
                message: error.message || 'No message',
                code: error.code || (error.target && error.target.error ? error.target.error.code : 'No code'),
                stack: error.stack || 'No stack'
            },
            time: new Date().toISOString(),
            browser: navigator.userAgent
        };
        
        console.log('详细错误信息:', errorDetails);
        
        // 尝试清理相关资源
        this.cleanupAfterError(url);
        
        // 返回错误详情，方便调用者进一步处理
        return errorDetails;
    }
    
    // 添加错误后的资源清理方法
    cleanupAfterError(url) {
        if (!url) return;
        
        // 清理当前播放的音频
        if (this.currentAudio.has(url)) {
            const audio = this.currentAudio.get(url);
            if (audio) {
                try {
                    audio.pause();
                    audio.oncanplaythrough = null;
                    audio.onerror = null;
                    audio.onended = null;
                    audio.onloadedmetadata = null;
                    audio.onpause = null;
                    audio.onplay = null;
                    audio.src = '';
                    audio.load();
                } catch (e) {
                    console.error('清理错误音频资源时出错:', e);
                }
                this.currentAudio.delete(url);
            }
        }
        
        // 清理挂起的加载请求
        if (this.pendingAudioLoads && this.pendingAudioLoads.has(url)) {
            this.pendingAudioLoads.delete(url);
        }
        
        // 考虑从缓存中移除错误的音频
        if (this.audioCache.has(url)) {
            const cachedAudio = this.audioCache.get(url);
            if (cachedAudio) {
                try {
                    cachedAudio.src = '';
                    cachedAudio.load();
                } catch (e) {
                    console.error('清理错误缓存音频时出错:', e);
                }
                this.audioCache.delete(url);
                
                // 同步从访问顺序数组中删除
                const orderIndex = this.cacheAccessOrder.indexOf(url);
                if (orderIndex !== -1) {
                    this.cacheAccessOrder.splice(orderIndex, 1);
                }
            }
        }
        
        // 如果正在显示加载指示器，隐藏它
        this.hideLoading();
    }
}

// 初始化音频混音器
const audioMixer = new AudioMixer();
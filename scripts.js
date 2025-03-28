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
        
        // 清空缓存
        this.audioCache.forEach(audio => {
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
                    console.error('释放缓存音频资源时出错:', error);
                }
            }
        });
        this.audioCache.clear();
        
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
            const titleDiv = document.createElement('div');
            titleDiv.className = 'audio-category-title';
            
            // 创建标题内容
            const titleContent = document.createElement('span');
            
            // 创建图标
            const iconSpan = document.createElement('span');
            iconSpan.className = 'audio-category-icon';
            iconSpan.textContent = category.icon;
            titleContent.appendChild(iconSpan);
            
            // 添加标题文本
            const titleText = document.createTextNode(` ${category.title}`);
            titleContent.appendChild(titleText);
            
            titleDiv.appendChild(titleContent);
            
            // 创建展开/折叠图标
            const toggleIcon = document.createElement('i');
            toggleIcon.className = 'fas fa-chevron-down audio-category-toggle';
            titleDiv.appendChild(toggleIcon);
            
            categoryDiv.appendChild(titleDiv);
            
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
                titleSpan.textContent = item.title;
                div.appendChild(titleSpan);
                
                // 设置数据属性
                div.dataset.url = item.url;
                div.dataset.title = item.title;
                
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
            
            trackLane.appendChild(volumeControl);
            fragment.appendChild(trackLane);
            
            // 初始化音轨音量
            this.trackVolumes[`track${i}`] = 1.0;
        }
        
        // 一次性添加所有音轨到DOM
        trackContainer.appendChild(fragment);
        
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
            let oldestKey = null;
            let oldestAudio = null;
            
            // 使用双重循环策略：首先尝试删除非当前播放项，然后再考虑所有项
            // 首先查找不在当前播放的项目
            for (const [key, cachedAudio] of this.audioCache.entries()) {
                if (!this.currentAudio.has(key)) {
                    oldestKey = key;
                    oldestAudio = cachedAudio;
                    break;
                }
            }
            
            // 如果所有项都在播放中，则移除最旧的项（仅作为后备策略）
            if (oldestKey === null) {
                oldestKey = this.audioCache.keys().next().value;
                oldestAudio = this.audioCache.get(oldestKey);
            }
            
            // 如果找到要移除的项
            if (oldestKey && oldestAudio) {
                try {
                    // 仅当不在当前播放列表中才释放资源
                    if (!this.currentAudio.has(oldestKey) || this.currentAudio.get(oldestKey) !== oldestAudio) {
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
                    
                    this.audioCache.delete(oldestKey);
                    console.log(`缓存已满，释放资源: ${oldestKey}`);
                } catch (error) {
                    console.error('释放缓存资源时出错:', error);
                }
            }
        }
        
        // 添加新项到缓存
        this.audioCache.set(url, audio);
        console.log(`已添加到缓存: ${url}, 当前缓存大小: ${this.audioCache.size}`);
    }
    
    // 从缓存获取，并显式更新LRU顺序
    getFromCache(url) {
        if (!this.audioCache.has(url)) {
            return null;
        }
        
        // 获取音频
        const audio = this.audioCache.get(url);
        
        // 更新LRU顺序 - 明确地将项移动到"最近使用"位置
        this.audioCache.delete(url);
        this.audioCache.set(url, audio);
        
        console.log(`缓存命中: ${url}`);
        return audio;
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
            const keys = Array.from(this.audioCache.keys());
            let deletedCount = 0;
            
            for (let i = 0; i < keys.length && deletedCount < keysToDelete; i++) {
                // 检查是否在当前播放中
                if (!this.currentAudio.has(keys[i])) {
                    // 释放资源
                    const oldAudio = this.audioCache.get(keys[i]);
                    if (oldAudio) {
                        try {
                            // 停止播放
                            oldAudio.pause();
                            
                            // 移除所有事件监听器
                            oldAudio.oncanplaythrough = null;
                            oldAudio.onerror = null;
                            oldAudio.onended = null;
                            oldAudio.onloadedmetadata = null;
                            oldAudio.onpause = null;
                            oldAudio.onplay = null;
                            
                            // 清空src属性释放媒体资源
                            oldAudio.src = '';
                            oldAudio.load();
                            
                            // 从缓存中移除
                            this.audioCache.delete(keys[i]);
                            deletedCount++;
                        } catch (error) {
                            console.error('清理音频资源时出错:', error);
                        }
                    }
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
            this.reorganizeTrackItems(trackLane);
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
            trackItem.removeEventListener('mousedown', handleTrackItemDrag);
            trackItem.removeEventListener('touchstart', handleTrackItemDrag);
            // 移除这个MutationObserver
            if (observer) {
                // 从跟踪数组中移除
                const observerIndex = this.activeObservers.indexOf(observer);
                if (observerIndex > -1) {
                    this.activeObservers.splice(observerIndex, 1);
                }
                observer.disconnect();
                observer = null;
            }
        };
        
        // 使用MutationObserver监听元素是否被移除
        let observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.type === 'childList' && 
                    Array.from(mutation.removedNodes).includes(trackItem)) {
                    cleanupTrackItem();
                    break;
                }
            }
        });
        
        // 开始观察父元素
        observer.observe(trackLane, { childList: true });
        
        // 将observer添加到跟踪数组中
        this.activeObservers.push(observer);
        
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
        
        // 创建操作ID
        const operationId = ++this.operationCounter;
        const audioOperationId = `${url}_${operationId}`;
        
        // 记录此操作
        this.activeOperations.set(audioOperationId, {
            url,
            timestamp: Date.now(),
            trackId,
            isActive: true
        });
        
        try {
            const audio = await this.preloadAudio(url);
            
            // 检查操作是否仍然有效
            if (!this.activeOperations.has(audioOperationId) || 
                !this.activeOperations.get(audioOperationId).isActive) {
                return;
            }
            
            audio.currentTime = 0;
            
            // 设置音量 - 使用主音量和音轨音量的组合
            audio.volume = this.masterVolume * trackVolume;
            
            // 使用自定义属性标记这个音频对象
            audio._operationId = audioOperationId;
            audio._trackId = trackId;
            audio._url = url;
            
            // 添加ended事件监听，而不是使用setTimeout
            audio.onended = () => {
                // 只有当操作仍然是活跃的，才操作Map
                if (this.activeOperations.has(audioOperationId) && 
                    this.activeOperations.get(audioOperationId).isActive) {
                    audio.pause();
                    audio.currentTime = 0;
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
            
            await audio.play();

            // 检查操作是否仍然有效
            if (!this.activeOperations.has(audioOperationId) || 
                !this.activeOperations.get(audioOperationId).isActive) {
                audio.pause();
                return;
            }

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

            // 安全地更新Map
            this.currentAudio.set(url, audio);
        } catch (error) {
            // 错误时清理操作状态
            if (this.activeOperations.has(audioOperationId)) {
                this.activeOperations.delete(audioOperationId);
            }
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
        notification.textContent = message;
        
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
            
            // 返回Promise
            return audioLoadPromise;
        } catch (error) {
            // 从挂起加载列表中移除
            this.pendingAudioLoads.delete(normalizedUrl);
            
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
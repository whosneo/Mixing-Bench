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
        this.MAX_TRACK_COUNT = 6; // 最大音轨数量
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
        
        // 添加新的缓存管理结构 - 使用Map存储访问时间
        this.cacheAccessTimes = new Map();
        
        this.init();
    }

    init() {
        // 设置WebAudio上下文
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // 初始化加载指示器
        this.loadingIndicator = document.getElementById('loadingIndicator');
        
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
        
        // 设置自动播放辅助
        this.setupAutoplayHelper();
        
        console.log('音频混音器已初始化');
    }
    
    // 添加自动播放辅助功能，解决浏览器自动播放策略限制
    setupAutoplayHelper() {
        // 检测音频上下文状态
        if (this.audioContext.state === 'suspended') {
            // 显示一个友好的提示，告诉用户需要交互
            this.showNotification('点击或触摸页面以启用音频播放');
            
            // 创建一个静默的音频元素
            const silentAudio = new Audio();
            silentAudio.src = 'data:audio/mp3;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV';
            silentAudio.loop = true;
            silentAudio.autoplay = false;
            silentAudio.volume = 0.001; // 几乎无声的音量
            
            // 用户交互事件处理函数
            const resumeAudioContext = () => {
                // 尝试播放静默音频
                const playPromise = silentAudio.play();
                
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        console.log('用户交互后成功恢复音频上下文');
                        
                        // 恢复音频上下文
                        this.audioContext.resume().then(() => {
                            this.showNotification('音频播放已启用');
                        }).catch(e => {
                            console.error('无法恢复音频上下文', e);
                        });
                    }).catch(e => {
                        console.warn('尝试播放静默音频失败', e);
                    });
                }
                
                // 只需处理一次交互
                document.removeEventListener('click', resumeAudioContext);
                document.removeEventListener('touchstart', resumeAudioContext);
                document.removeEventListener('keydown', resumeAudioContext);
            };
            
            // 监听用户交互事件
            document.addEventListener('click', resumeAudioContext);
            document.addEventListener('touchstart', resumeAudioContext);
            document.addEventListener('keydown', resumeAudioContext);
        }
    }

    // 释放资源的方法
    releaseResources() {
        console.log('开始释放所有资源...');
        
        // 清除所有计时器
        if (this.timelineInterval) {
            clearInterval(this.timelineInterval);
            this.timelineInterval = null;
            console.log('已清理时间线计时器');
        }
        
        if (this.cacheCleanupInterval) {
            clearInterval(this.cacheCleanupInterval);
            this.cacheCleanupInterval = null;
            console.log('已清理缓存清理计时器');
        }
        
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
            console.log('已取消动画帧请求');
        }
        
        // 清理所有通知及其定时器
        if (this.notifications && this.notifications.length > 0) {
            console.log(`清理 ${this.notifications.length} 个通知及其相关定时器`);
            
            // 复制一份通知列表，避免在迭代过程中修改原列表
            const notificationsToRemove = [...this.notifications];
            
            notificationsToRemove.forEach(notification => {
                const notificationElement = notification.element;
                
                // 清除通知的计时器
                if (notificationElement._timeoutId) {
                    clearTimeout(notificationElement._timeoutId);
                    notificationElement._timeoutId = null;
                }
                
                // 移除事件监听器
                const closeBtn = notificationElement.querySelector('.close-btn');
                if (closeBtn && notificationElement._closeHandler) {
                    closeBtn.removeEventListener('click', notificationElement._closeHandler);
                }
                
                // 从DOM中移除
                if (notificationElement.parentNode) {
                    notificationElement.parentNode.removeChild(notificationElement);
                }
            });
            
            // 清空通知列表
            this.notifications = [];
            
            // 如果容器存在，也移除它
            if (this.notificationContainer && this.notificationContainer.parentNode) {
                this.notificationContainer.parentNode.removeChild(this.notificationContainer);
                this.notificationContainer = null;
            }
        }
        
        // 清理所有活跃操作(复用提取的方法)
        this._cleanupActiveOperations();
        
        // 停止所有音频播放并释放资源
        const currentAudioCount = this.currentAudio.size;
        if (currentAudioCount > 0) {
            console.log(`正在释放 ${currentAudioCount} 个当前播放的音频资源`);
        }
        
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
        const audioCacheCount = this.audioCache.size;
        if (audioCacheCount > 0) {
            console.log(`正在释放 ${audioCacheCount} 个缓存的音频资源`);
        }
        
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
        
        // 清空缓存时间戳
        if (this.cacheAccessTimes) {
            this.cacheAccessTimes.clear();
        }
        
        // 清理挂起的音频加载
        if (this.pendingAudioLoads) {
            const pendingLoadsCount = this.pendingAudioLoads.size;
            if (pendingLoadsCount > 0) {
                console.log(`正在取消 ${pendingLoadsCount} 个挂起的音频加载`);
            }
            this.pendingAudioLoads.clear();
        }
        
        // 清理所有轨道项(复用提取的方法)
        this._cleanupTrackItems();
        
        // 断开音频上下文
        if (this.audioContext) {
            try {
                // 不要关闭上下文，只需暂停它，因为关闭后无法重新打开
                this.audioContext.suspend().catch(e => {
                    console.error('暂停音频上下文时出错:', e);
                });
            } catch (error) {
                console.error('处理音频上下文时出错:', error);
            }
        }
        
        // 断开所有MutationObserver连接
        try {
            if (this.activeObservers && this.activeObservers.length > 0) {
                console.log(`断开 ${this.activeObservers.length} 个MutationObserver连接`);
                
                // 复制数组避免在迭代时修改
                const observers = [...this.activeObservers];
                
                // 断开所有观察者
                observers.forEach(observer => {
                    if (observer) {
                        try {
                            observer.disconnect();
                        } catch (error) {
                            console.error('断开MutationObserver时出错:', error);
                        }
                    }
                });
                
                // 清空数组
        this.activeObservers = [];
            }
        } catch (error) {
            console.error('断开MutationObserver连接时出错:', error);
        }
        
        // 清理挂起的请求
        if (window.AbortController && this._abortControllers) {
            for (const controller of this._abortControllers) {
                try {
                    controller.abort();
                } catch (error) {
                    console.error('中止请求时出错:', error);
                }
            }
        this._abortControllers = [];
        }
        
        // 移除DOM事件监听器
        this.removeAllEventListeners();
        
        console.log('所有资源已释放');
    }
    
    // 移除所有事件监听器的辅助方法
    removeAllEventListeners() {
        try {
            console.log('开始移除所有事件监听器...');
            
            // 移除全局事件监听器（使用存储的事件处理函数引用）
            if (this._handleBeforeUnload) {
                window.removeEventListener('beforeunload', this._handleBeforeUnload);
                this._handleBeforeUnload = null;
                console.log('已移除beforeunload事件监听器');
            }
            
            // 移除visibilitychange事件监听器
            if (this._handleVisibilityChange) {
                document.removeEventListener('visibilitychange', this._handleVisibilityChange);
                this._handleVisibilityChange = null;
                console.log('已移除visibilitychange事件监听器');
            }
            
            // 移除移动设备上的orientationchange事件监听器
            if (this._handleOrientationChange) {
                window.removeEventListener('orientationchange', this._handleOrientationChange);
                this._handleOrientationChange = null;
                console.log('已移除orientationchange事件监听器');
            }
            
            // 移除resize事件监听器
            if (this._handleResize) {
                window.removeEventListener('resize', this._handleResize);
                this._handleResize = null;
                console.log('已移除resize事件监听器');
            }
            
            // 移除页面全局键盘事件监听器
            if (this._handleKeyDown) {
                document.removeEventListener('keydown', this._handleKeyDown);
                this._handleKeyDown = null;
                console.log('已移除keydown事件监听器');
            }
            
            // 移除轨道区域的特定事件监听器
            const trackArea = document.getElementById('trackArea');
            if (trackArea) {
                // 移除保存的事件处理函数
                if (this.eventHandlers && this.eventHandlers.trackArea) {
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
                    
                    if (this.eventHandlers.trackArea.pointerdown) {
                        trackArea.removeEventListener('pointerdown', this.eventHandlers.trackArea.pointerdown);
                        this.eventHandlers.trackArea.pointerdown = null;
                    }
                    
                    console.log('已移除trackArea所有事件监听器');
                }
                
                // 然后替换整个节点，以确保清理所有可能的内联监听器
                const newTrackArea = trackArea.cloneNode(true);
                trackArea.parentNode.replaceChild(newTrackArea, trackArea);
            }
            
            // 移除播放指示器事件监听器
            const playbackIndicator = document.getElementById('playbackIndicator');
            if (playbackIndicator) {
                // 移除保存的事件处理函数
                if (this.eventHandlers && this.eventHandlers.playbackIndicator) {
                    if (this.eventHandlers.playbackIndicator.mousedown) {
                        playbackIndicator.removeEventListener('mousedown', this.eventHandlers.playbackIndicator.mousedown);
                        this.eventHandlers.playbackIndicator.mousedown = null;
                    }
                    
                    if (this.eventHandlers.playbackIndicator.touchstart) {
                        playbackIndicator.removeEventListener('touchstart', this.eventHandlers.playbackIndicator.touchstart);
                        this.eventHandlers.playbackIndicator.touchstart = null;
                    }
                    
                    if (this.eventHandlers.playbackIndicator.pointerdown) {
                        playbackIndicator.removeEventListener('pointerdown', this.eventHandlers.playbackIndicator.pointerdown);
                        this.eventHandlers.playbackIndicator.pointerdown = null;
                    }
                    
                    console.log('已移除playbackIndicator所有事件监听器');
                }
                
                // 然后替换整个节点
                const newPlaybackIndicator = playbackIndicator.cloneNode(true);
                playbackIndicator.parentNode.replaceChild(newPlaybackIndicator, playbackIndicator);
            }
            
            // 移除全局指针事件监听器
            // 这些监听器通常在拖动过程中添加到document，而不是特定元素
            if (this._handlePointerMove) {
                document.removeEventListener('pointermove', this._handlePointerMove);
                document.removeEventListener('mousemove', this._handlePointerMove);
                this._handlePointerMove = null;
                console.log('已移除全局pointermove/mousemove事件监听器');
            }
            
            if (this._handlePointerUp) {
                document.removeEventListener('pointerup', this._handlePointerUp);
                document.removeEventListener('mouseup', this._handlePointerUp);
                this._handlePointerUp = null;
                console.log('已移除全局pointerup/mouseup事件监听器');
            }
            
            if (this._handleTouchMove) {
                document.removeEventListener('touchmove', this._handleTouchMove);
                this._handleTouchMove = null;
                console.log('已移除全局touchmove事件监听器');
            }
            
            // 移除拖放相关事件监听器
            const audioGrid = document.getElementById('audioGrid');
            if (audioGrid) {
                const newAudioGrid = audioGrid.cloneNode(true);
                audioGrid.parentNode.replaceChild(newAudioGrid, audioGrid);
                console.log('已替换audioGrid元素并清理其事件监听器');
            }
            
            // 移除控制按钮事件监听器
            const controlButtons = [
                { id: 'playTrack', handlerRef: '_playTrackHandler' },
                { id: 'stop', handlerRef: '_stopHandler' },
                { id: 'addTrack', handlerRef: '_addTrackHandler' },
                { id: 'removeTrack', handlerRef: '_removeTrackHandler' }
            ];
            
            controlButtons.forEach(btn => {
                const element = document.getElementById(btn.id);
                if (element) {
                    // 移除特定的事件处理程序
                    if (this[btn.handlerRef]) {
                        element.removeEventListener('click', this[btn.handlerRef]);
                        this[btn.handlerRef] = null;
                    }
                    
                    // 替换元素以清除所有潜在的内联事件处理程序
                    const newElement = element.cloneNode(true);
                    element.parentNode.replaceChild(newElement, element);
                    console.log(`已替换${btn.id}元素并清理其事件监听器`);
                }
            });
            
            // 移除音量滑块事件监听器
            const masterVolume = document.getElementById('masterVolume');
            if (masterVolume) {
                if (this._masterVolumeHandler) {
                    masterVolume.removeEventListener('input', this._masterVolumeHandler);
                    this._masterVolumeHandler = null;
                }
                
                const newMasterVolume = masterVolume.cloneNode(true);
                masterVolume.parentNode.replaceChild(newMasterVolume, masterVolume);
                console.log('已替换masterVolume元素并清理其事件监听器');
            }
            
            // 移除音轨音量控制事件监听器
            document.querySelectorAll('.track-volume-control .volume-slider').forEach(slider => {
                // 如果存储了音轨音量滑块的引用，移除它们
                if (slider._volumeHandler) {
                    slider.removeEventListener('input', slider._volumeHandler);
                    slider._volumeHandler = null;
                }
                
                const newSlider = slider.cloneNode(true);
                slider.parentNode.replaceChild(newSlider, slider);
            });
            console.log('已替换所有音轨音量滑块并清理其事件监听器');
            
            // 清空事件处理程序存储对象
            this.eventHandlers = { trackArea: {}, playbackIndicator: {} };
            
            console.log('所有事件监听器移除完成');
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

    // 增强的URL安全验证方法
    isValidAudioUrl(url) {
        // 处理null或undefined输入
        if (!url) {
            console.error('URL不能为空');
            return false;
        }
        
        try {
            // 标准化URL字符串
            url = url.trim();
            
            // 检查URL长度限制
            if (url.length > 2048) {
                console.error('URL长度超出安全限制:', url.length);
                return false;
            }
            
            // 检查是否是合法URL
            const parsed = new URL(url);
            
            // 只允许安全的HTTP协议 
            if (parsed.protocol !== 'https:') {
                console.error('URL协议不安全，仅支持HTTPS:', url);
                return false;
            }
            
            // 检查已知的安全音频域名 - 维护严格的白名单
            const allowedDomains = [
                'assets.mixkit.co',
                'cloudfront.net',
                'amazonaws.com',
                's3.amazonaws.com',
                'd3bos5qkac5jmx.cloudfront.net'
            ];
            
            // 更严格的域名白名单验证
            const isDomainAllowed = allowedDomains.some(domain => {
                // 完全匹配
                if (parsed.hostname === domain) {
                    return true;
                }
                
                // 子域名匹配 (确保格式为 something.alloweddomain.com)
                if (domain.includes('.') && parsed.hostname.endsWith('.' + domain)) {
                    return true;
                }
                
                // 对于没有子域名的域，检查是否为其直接子域名
                if (!domain.includes('.')) {
                    const parts = parsed.hostname.split('.');
                    return parts.length >= 2 && parts[parts.length - 2] === domain;
                }
                
                return false;
            });
            
            if (!isDomainAllowed) {
                console.error('URL域名不在白名单中:', parsed.hostname);
                return false;
            }
            
            // 检查路径是否包含敏感或可疑字符
            const suspiciousPathPatterns = [
                /\.\./, // 目录遍历攻击
                /[<>]/, // HTML注入
                /[\(\)]/, // 可能的命令注入
                /[\{\}]/, // 可能的模板注入
                /%00/, // 空字节注入
                /%0[a-f0-9]/ // 潜在的编码攻击
            ];
            
            for (const pattern of suspiciousPathPatterns) {
                if (pattern.test(parsed.pathname)) {
                    console.error('URL路径包含可疑字符:', parsed.pathname);
                    return false;
                }
            }
            
            // 检查文件扩展名 - 确保是合法的音频文件
            const fileExtensions = ['.mp3', '.wav', '.ogg', '.m4a', '.aac', '.flac'];
            const hasValidExtension = fileExtensions.some(ext => 
                parsed.pathname.toLowerCase().endsWith(ext)
            );
            
            if (!hasValidExtension) {
                const filenameParts = parsed.pathname.split('/').pop().split('.');
                const extension = filenameParts.length > 1 ? '.' + filenameParts.pop().toLowerCase() : '';
                
                if (extension && !fileExtensions.includes(extension)) {
                    console.error('URL包含不支持的文件类型:', extension);
                    return false;
                } else if (!extension) {
                    // 有些API返回的URL可能没有文件扩展名，只发出警告，不阻止
                    console.warn('URL没有指定文件扩展名, 可能不是音频文件:', url);
                }
            }
            
            // 检查查询参数和哈希是否包含可疑内容
            if (parsed.search || parsed.hash) {
                const fullQueryAndHash = (parsed.search || '') + (parsed.hash || '');
                
                // 检查XSS攻击向量
                if (/script|eval|cookie|document|window|alert|confirm|prompt/i.test(fullQueryAndHash)) {
                    console.error('URL查询参数或哈希包含可疑JavaScript关键字:', fullQueryAndHash);
                    return false;
                }
                
                // 检查SQL注入向量
                if (/select|union|insert|update|delete|drop|alter|exec|--|\/\*/i.test(fullQueryAndHash)) {
                    console.error('URL查询参数或哈希包含可疑SQL关键字:', fullQueryAndHash);
                    return false;
                }
            }
            
            return true;
        } catch (e) {
            console.error('URL格式无效或发生错误:', e.message, url);
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
        // 限制最大音轨数量
        if (this.trackCount >= this.MAX_TRACK_COUNT) {
            this.showNotification('最多只能添加' + this.MAX_TRACK_COUNT + '条音轨');
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

    // 改进的播放指示器拖动设置方法，优化移动设备体验
    setupPlaybackIndicatorDrag() {
        const indicator = document.getElementById('playbackIndicator');
        const trackArea = document.getElementById('trackArea');
        
        if (!indicator || !trackArea) return;
        
        // 存储状态变量
        let isDragging = false;
        let startX = 0;
        let lastX = 0;
        let velocityX = 0;
        let lastTimestamp = 0;
        let animationFrameId = null;
        let positions = []; // 用于计算惯性
        
        // 使用指针事件API以统一处理触摸和鼠标
        const handlePointerMove = (e) => {
            if (!isDragging) return;
            
            // 阻止默认行为，如页面滚动
            e.preventDefault();
            
            // 获取当前坐标
            const clientX = e.clientX;
            lastX = clientX;
            
            // 计算速度（用于惯性）
            const now = Date.now();
            const dt = now - lastTimestamp;
            
            if (dt > 0) {
                // 记录位置用于惯性计算
                positions.push({
                    x: clientX,
                    time: now
                });
                
                // 只保留最近的5个点用于计算速度
                if (positions.length > 5) {
                    positions.shift();
                }
                
                lastTimestamp = now;
            }
            
            // 更新指示器位置
            this.updateIndicatorPosition(clientX);
            
            // 检查播放头位置的音轨并更新UI
            this.checkTracksAtCurrentTime();
        };
        
        // 处理指针释放，添加惯性效果
        const handlePointerUp = () => {
            if (!isDragging) return;
            isDragging = false;
            
            // 移除所有监听器
            document.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('pointerup', handlePointerUp);
            document.removeEventListener('touchmove', handlePointerMove, { passive: false });
            document.removeEventListener('touchend', handlePointerUp);
            
            // 计算惯性速度
            if (positions.length >= 2) {
                const last = positions[positions.length - 1];
                const first = positions[0];
                const dx = last.x - first.x;
                const dt = last.time - first.time;
                
                if (dt > 0) {
                    velocityX = dx / dt; // 像素/毫秒
                    
                    // 应用惯性效果
                    let lastTime = Date.now();
                    const applyInertia = () => {
                        const now = Date.now();
                        const elapsed = now - lastTime;
                        lastTime = now;
                        
                        // 减少速度（模拟摩擦）
                        velocityX *= 0.95;
                        
                        // 如果速度足够大，继续移动
                        if (Math.abs(velocityX) > 0.01) {
                            // 计算新位置
                            lastX += velocityX * elapsed;
                            
                            // 应用新位置
                            this.updateIndicatorPosition(lastX);
                            this.checkTracksAtCurrentTime();
                            
                            // 继续动画
                            animationFrameId = requestAnimationFrame(applyInertia);
                        } else {
                            // 速度太小，停止动画
                            cancelAnimationFrame(animationFrameId);
                            animationFrameId = null;
                        }
                    };
                    
                    // 只对足够快的滑动启用惯性
                    if (Math.abs(velocityX) > 0.05) {
                        animationFrameId = requestAnimationFrame(applyInertia);
                    }
                }
            }
            
            // 重置位置数组
            positions = [];
            
            // 更新光标样式
            document.body.style.cursor = '';
            indicator.style.cursor = 'grab';
        };
        
        // 使用指针事件处理开始拖动
        const handlePointerDown = (e) => {
            // 如果有正在进行的动画，取消它
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
            
            // 阻止默认行为，避免触发其他事件
            e.preventDefault();
            
            // 获取起始坐标
            startX = e.clientX;
            lastX = startX;
            lastTimestamp = Date.now();
            positions = [{x: startX, time: lastTimestamp}];
            velocityX = 0;
            
            // 设置拖动状态
            isDragging = true;
            
            // 添加移动和释放事件监听器
            document.addEventListener('pointermove', handlePointerMove);
            document.addEventListener('pointerup', handlePointerUp);
            
            // 处理现代浏览器
            document.addEventListener('touchmove', handlePointerMove, { passive: false });
            document.addEventListener('touchend', handlePointerUp);
            
            // 更新光标样式
            document.body.style.cursor = 'grabbing';
            indicator.style.cursor = 'grabbing';
            
            // 保存引用以便后续清理
            this.eventHandlers.playbackIndicator.pointerdown = handlePointerDown;
            this._handlePointerMove = handlePointerMove;
            this._handlePointerUp = handlePointerUp;
        };
        
        // 处理轨道区域点击
        const handleTrackAreaClick = (e) => {
            // 如果刚刚完成拖动操作，忽略此点击
            if (this._justFinishedDragging) return;
            
            // 如果点击了指示器本身，不要处理
            if (e.target === indicator || indicator.contains(e.target)) return;
            
            const rect = trackArea.getBoundingClientRect();
            const clickX = e.clientX;
            
            // 转换为时间线位置百分比
            const containerWidth = rect.width;
            const offsetX = clickX - rect.left;
            const percent = Math.min(Math.max(offsetX / containerWidth, 0), 1);
            
            // 计算当前时间（秒）
            const duration = 30; // 总时长30秒
            const newTime = percent * duration;
            
            // 保存新时间
            this.currentTime = newTime;
            
            // 更新播放指示器
            this.updatePlaybackIndicator();
            
            // 检查这个时间点的音轨
            this.checkTracksAtCurrentTime();
        };
        
        // 针对移动设备的触摸处理
        let touchStartX = 0;
        let touchStartTime = 0;
        let isTapNotDrag = true;
        
        // 触摸开始
        const handleTouchStart = (e) => {
            // 如果点击了播放指示器，让handlePointerDown处理
            if (e.target === indicator || indicator.contains(e.target)) return;
            
            isTapNotDrag = true;
            touchStartX = e.touches[0].clientX;
            touchStartTime = Date.now();
        };
        
        // 触摸移动 - 检测是否为拖动而非点击
        const handleTouchMove = (e) => {
            if (e.target === indicator || indicator.contains(e.target)) return;
            
            const touchCurrentX = e.touches[0].clientX;
            const touchDistance = Math.abs(touchCurrentX - touchStartX);
            
            // 如果移动超过10像素，认为是拖动而非点击
            if (touchDistance > 10) {
                isTapNotDrag = false;
            }
        };
        
        // 触摸结束 - 处理点击操作
        const handleTouchEnd = (e) => {
            // 如果点击了播放指示器，让其他处理程序处理
            if (e.target === indicator || indicator.contains(e.target)) return;
            
            // 计算时长和距离，检查是否是有效的点击
            const touchEndX = e.changedTouches[0].clientX;
            const touchDuration = Date.now() - touchStartTime;
            const touchDistance = Math.abs(touchEndX - touchStartX);
            
            // 如果是快速点击而非拖动
            if (isTapNotDrag && touchDuration < 300 && touchDistance < 10) {
                // 模拟点击事件
                handleTrackAreaClick({
                    clientX: touchEndX,
                    target: e.target
                });
            }
        };
        
        // 添加事件监听器
        indicator.addEventListener('pointerdown', handlePointerDown);
        
        // 保存引用以便后续清理
        this.eventHandlers.playbackIndicator.pointerdown = handlePointerDown;
        
        // 添加额外触摸事件支持，以处理不同的浏览器
        indicator.addEventListener('touchstart', handlePointerDown, { passive: false });
        this.eventHandlers.playbackIndicator.touchstart = handlePointerDown;
        
        // 处理轨道区域点击，跳转到指定位置
        trackArea.addEventListener('click', handleTrackAreaClick);
        this.eventHandlers.trackArea.click = handleTrackAreaClick;
        
        // 添加优化的触摸事件处理
        trackArea.addEventListener('touchstart', handleTouchStart, { passive: true });
        trackArea.addEventListener('touchmove', handleTouchMove, { passive: true });
        trackArea.addEventListener('touchend', handleTouchEnd);
        
        // 保存事件处理程序引用以便清理
        this.eventHandlers.trackArea.touchstart = handleTouchStart;
        this.eventHandlers.trackArea.touchmove = handleTouchMove;
        this.eventHandlers.trackArea.touchend = handleTouchEnd;
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
        const audioGrid = document.getElementById('audioGrid');
        const trackContainer = document.getElementById('trackContainer');
        
        if (!audioGrid || !trackContainer) return;
        
        // 状态变量
        let draggedItem = null;
        let dragPreview = null;
        let touchActive = false;
        let lastTouch = { x: 0, y: 0 };
        
        // 检测设备类型
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        // 创建拖动预览元素
        const createDragPreview = (item) => {
            const preview = document.createElement('div');
            preview.className = 'audio-item drag-preview';
            preview.style.position = 'fixed';
            preview.style.zIndex = '9999';
            preview.style.opacity = '0.8';
            preview.style.pointerEvents = 'none';
            preview.style.background = '#6c5ce7';
            preview.style.color = 'white';
            preview.style.borderRadius = '10px';
            preview.style.padding = '10px 15px';
            preview.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            preview.style.width = '150px';
            preview.style.transform = 'translate(-50%, -50%)';
            preview.textContent = item.dataset.title || '音频项';
            
            document.body.appendChild(preview);
            return preview;
        };
        
        // 更新拖动预览位置
        const updateDragPreviewPosition = (x, y) => {
            if (!dragPreview) return;
            
            dragPreview.style.left = `${x}px`;
            dragPreview.style.top = `${y}px`;
        };
        
        // 删除拖动预览
        const removeDragPreview = () => {
            if (dragPreview && dragPreview.parentNode) {
                dragPreview.parentNode.removeChild(dragPreview);
                dragPreview = null;
            }
        };
        
        // 检查元素是否在可放置区域内
        const isOverDropZone = (x, y) => {
            const trackRect = trackContainer.getBoundingClientRect();
            return (
                x >= trackRect.left &&
                x <= trackRect.right &&
                y >= trackRect.top &&
                y <= trackRect.bottom
            );
        };
        
        // 高亮显示目标轨道
        const highlightTargetTrack = (x, y) => {
            const trackLanes = trackContainer.querySelectorAll('.track-lane');
            let targetTrack = null;
            
            // 重置所有轨道的高亮状态
            trackLanes.forEach(lane => {
                lane.classList.remove('drop-target');
            });
            
            // 确定鼠标/触摸位置下的轨道
            for (const lane of trackLanes) {
                const rect = lane.getBoundingClientRect();
                if (y >= rect.top && y <= rect.bottom) {
                    lane.classList.add('drop-target');
                    targetTrack = lane;
                    break;
                }
            }
            
            return targetTrack;
        };
        
        // 标准拖放API处理函数 - 用于桌面浏览器
        const handleDragStart = (e) => {
            if (!e.target.classList.contains('audio-item')) return;
            
            draggedItem = e.target;
            
            // 设置拖动数据
            e.dataTransfer.setData('text/plain', JSON.stringify({
                url: draggedItem.dataset.url,
                title: draggedItem.dataset.title
            }));
            
            // 调整光标样式
            e.dataTransfer.effectAllowed = 'copy';
            
            // 添加拖动中样式
            draggedItem.classList.add('dragging');
            
            // 显示用户提示
            this.showNotification('拖放到轨道区域以添加音频');
        };
        
        const handleDragEnd = (e) => {
            if (!draggedItem) return;
            
            // 移除拖动样式
            draggedItem.classList.remove('dragging');
            
            // 重置选中项
            draggedItem = null;
            
            // 移除所有高亮轨道
            trackContainer.querySelectorAll('.track-lane').forEach(lane => {
                lane.classList.remove('drop-target');
            });
        };
        
        const handleDragOver = (e) => {
            // 防止默认行为，允许放置
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
            
            // 高亮显示目标轨道
            highlightTargetTrack(e.clientX, e.clientY);
        };
        
        const handleDragEnter = (e) => {
            e.preventDefault();
            trackContainer.classList.add('drag-over');
        };
        
        const handleDragLeave = (e) => {
            // 只有当鼠标离开整个轨道容器时，才移除高亮
            const rect = trackContainer.getBoundingClientRect();
            if (
                e.clientX <= rect.left ||
                e.clientX >= rect.right ||
                e.clientY <= rect.top ||
                e.clientY >= rect.bottom
            ) {
                trackContainer.classList.remove('drag-over');
                trackContainer.querySelectorAll('.track-lane').forEach(lane => {
                    lane.classList.remove('drop-target');
                });
            }
        };
        
        const handleDrop = (e) => {
            e.preventDefault();
            
            // 移除拖放状态
            trackContainer.classList.remove('drag-over');
            
            try {
                // 获取拖动的数据
                const data = JSON.parse(e.dataTransfer.getData('text/plain'));
                
                // 找到目标轨道
                const targetTrack = highlightTargetTrack(e.clientX, e.clientY);
                
                if (targetTrack && data.url) {
                    // 添加到目标轨道
                    this.addTrackToTimeline(data, targetTrack);
                    
                    // 提示添加成功
                    this.showNotification(`已添加音频: ${data.title || '未命名音频'}`);
                }
            } catch (error) {
                console.error('拖放操作出错:', error);
                this.showErrorNotification('拖放操作失败，请重试');
            } finally {
                // 移除所有高亮轨道
                trackContainer.querySelectorAll('.track-lane').forEach(lane => {
                    lane.classList.remove('drop-target');
                });
            }
        };
        
        // 触摸设备的处理函数
        const handleTouchStart = (e) => {
            // 确保触发元素是音频项
            if (!e.target.closest('.audio-item')) return;
            
            const item = e.target.closest('.audio-item');
            
            // 记录开始状态
            touchActive = true;
            draggedItem = item;
            lastTouch.x = e.touches[0].clientX;
            lastTouch.y = e.touches[0].clientY;
            
            // 创建拖动预览
            setTimeout(() => {
                if (touchActive) {
                    // 创建预览元素
                    dragPreview = createDragPreview(item);
                    updateDragPreviewPosition(lastTouch.x, lastTouch.y);
                    
                    // 添加视觉反馈
                    item.classList.add('dragging');
                    
                    // 显示提示
                    this.showNotification('拖放到轨道区域以添加音频');
                    
                    // 震动反馈(如果设备支持)
                    if (navigator.vibrate) {
                        navigator.vibrate(50);
                    }
                }
            }, 200); // 短暂延迟，区分点击和拖动
        };
        
        const handleTouchMove = (e) => {
            if (!touchActive || !draggedItem) return;
            
            // 防止页面滚动
            e.preventDefault();
            
            // 更新触摸位置
            lastTouch.x = e.touches[0].clientX;
            lastTouch.y = e.touches[0].clientY;
            
            // 更新拖动预览位置
            updateDragPreviewPosition(lastTouch.x, lastTouch.y);
            
            // 检查是否在可放置区域上，并高亮目标轨道
            if (isOverDropZone(lastTouch.x, lastTouch.y)) {
                trackContainer.classList.add('drag-over');
                highlightTargetTrack(lastTouch.x, lastTouch.y);
            } else {
                trackContainer.classList.remove('drag-over');
                trackContainer.querySelectorAll('.track-lane').forEach(lane => {
                    lane.classList.remove('drop-target');
                });
            }
        };
        
        const handleTouchEnd = (e) => {
            if (!touchActive || !draggedItem) return;
            
            // 获取最后触摸位置
            const touch = e.changedTouches[0];
            const x = touch.clientX;
            const y = touch.clientY;
            
            // 重置状态
            touchActive = false;
            draggedItem.classList.remove('dragging');
            
            // 检查是否在可放置区域上
            if (isOverDropZone(x, y)) {
                const targetTrack = highlightTargetTrack(x, y);
                
                if (targetTrack) {
                    // 添加到目标轨道
                    this.addTrackToTimeline({
                        url: draggedItem.dataset.url,
                        title: draggedItem.dataset.title
                    }, targetTrack);
                    
                    // 提示添加成功
                    this.showNotification(`已添加音频: ${draggedItem.dataset.title || '未命名音频'}`);
                    
                    // 震动反馈
                    if (navigator.vibrate) {
                        navigator.vibrate([50, 50, 50]);
                    }
                }
            }
            
            // 移除高亮状态
            trackContainer.classList.remove('drag-over');
            trackContainer.querySelectorAll('.track-lane').forEach(lane => {
                lane.classList.remove('drop-target');
            });
            
            // 移除拖动预览
            removeDragPreview();
            
            // 重置变量
            draggedItem = null;
        };
        
        // 处理触摸取消
        const handleTouchCancel = () => {
            touchActive = false;
            
            if (draggedItem) {
                draggedItem.classList.remove('dragging');
                draggedItem = null;
            }
            
            // 移除高亮状态
            trackContainer.classList.remove('drag-over');
            trackContainer.querySelectorAll('.track-lane').forEach(lane => {
                lane.classList.remove('drop-target');
            });
            
            // 移除拖动预览
            removeDragPreview();
        };
        
        // 标准拖放API（桌面设备）
        audioGrid.addEventListener('dragstart', handleDragStart);
        audioGrid.addEventListener('dragend', handleDragEnd);
        
        trackContainer.addEventListener('dragover', handleDragOver);
        trackContainer.addEventListener('dragenter', handleDragEnter);
        trackContainer.addEventListener('dragleave', handleDragLeave);
        trackContainer.addEventListener('drop', handleDrop);
        
        // 触摸事件（移动设备）
        if (isTouchDevice) {
            audioGrid.addEventListener('touchstart', handleTouchStart, { passive: true });
            audioGrid.addEventListener('touchmove', handleTouchMove, { passive: false });
            audioGrid.addEventListener('touchend', handleTouchEnd);
            audioGrid.addEventListener('touchcancel', handleTouchCancel);
            
            // 禁用原生拖放，避免混淆
            audioGrid.querySelectorAll('.audio-item').forEach(item => {
                item.draggable = false;
            });
        }
        
        // 将事件引用保存起来，以便后续清理
        this._dragAndDropHandlers = {
            dragStart: handleDragStart,
            dragEnd: handleDragEnd,
            dragOver: handleDragOver,
            dragEnter: handleDragEnter,
            dragLeave: handleDragLeave,
            drop: handleDrop,
            touchStart: handleTouchStart,
            touchMove: handleTouchMove,
            touchEnd: handleTouchEnd,
            touchCancel: handleTouchCancel
        };
    }
    
    // 优化的音频缓存管理
    
    // 改进的缓存添加方法，使用LRU策略 (Least Recently Used)并防止重复添加
    addToCache(url, audio) {
        // 如果URL已在缓存中且是同一个音频对象，直接更新访问时间
        if (this.audioCache.has(url) && this.audioCache.get(url) === audio) {
            this.cacheAccessTimes.set(url, Date.now());
            
            // 同时更新原有的访问顺序数组（作为后备）
            const index = this.cacheAccessOrder.indexOf(url);
            if (index !== -1) {
                this.cacheAccessOrder.splice(index, 1);
            }
            this.cacheAccessOrder.push(url);
            
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
            this.cacheAccessTimes.delete(url);
        }
        
        // 检查缓存容量并根据需要清理
        if (this.audioCache.size >= this.MAX_CACHE_SIZE) {
            this.removeOldestCacheItem();
        }
        
        // 添加新项到缓存
        this.audioCache.set(url, audio);
        this.cacheAccessTimes.set(url, Date.now());
        
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
        
        // 更新访问时间
        this.cacheAccessTimes.set(url, Date.now());
        
        // 同时更新原有的访问顺序数组（作为后备）
        const index = this.cacheAccessOrder.indexOf(url);
        if (index !== -1) {
            this.cacheAccessOrder.splice(index, 1);
        }
        this.cacheAccessOrder.push(url);
        
        console.log(`缓存命中: ${url}`);
        return audio;
    }
    
    // 移除最旧的缓存项（真正的LRU实现）
    removeOldestCacheItem() {
        // 检查缓存是否为空
        if (this.audioCache.size === 0) {
            // 如果为空，则重建后备数组
            this.rebuildCacheAccessOrder();
            
            // 如果仍然为空，则无法继续
            if (this.cacheAccessOrder.length === 0) {
                console.warn('无法确定最旧的缓存项，缓存可能已空');
                return;
            }
        }
        
        // 使用时间戳找出最旧的缓存项
        let oldestKey = null;
        let oldestTime = Infinity;
        
        // 首先尝试找到不在当前播放列表中的最旧项
        for (const [url, time] of this.cacheAccessTimes.entries()) {
            // 跳过不在缓存中的URL（同步清理）
            if (!this.audioCache.has(url)) {
                this.cacheAccessTimes.delete(url);
                continue;
            }
            
            // 跳过当前正在播放的项
            if (this.currentAudio.has(url)) {
                continue;
            }
            
            // 找到更旧的项目
            if (time < oldestTime) {
                oldestTime = time;
                oldestKey = url;
            }
        }
        
        // 如果没有找到可移除的项（都在播放中），则尝试使用原有的方法作为后备
        if (oldestKey === null) {
            // 如果时间戳方法失败，则尝试原有的数组方法作为后备
            if (this.cacheAccessOrder.length > 0) {
                let oldestKeyIndex = 0;
                
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
                
                // 如果所有项都在播放中，则选择最旧的
                if (oldestKey === null && this.cacheAccessOrder.length > 0) {
                    oldestKey = this.cacheAccessOrder[0];
                }
            }
            
            // 如果仍然没有找到，则作为最后手段找到任何可移除的项目
            if (oldestKey === null) {
                // 找出任何一个最旧的项，即使它正在播放
                for (const [url, time] of this.cacheAccessTimes.entries()) {
                    if (this.audioCache.has(url) && time < oldestTime) {
                        oldestTime = time;
                        oldestKey = url;
                    }
                }
            }
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
                
                // 从缓存和访问记录中移除
                this.audioCache.delete(oldestKey);
                this.cacheAccessTimes.delete(oldestKey);
                
                // 同步更新原有的访问顺序数组
                const orderIndex = this.cacheAccessOrder.indexOf(oldestKey);
                if (orderIndex !== -1) {
                    this.cacheAccessOrder.splice(orderIndex, 1);
                }
                
                console.log(`缓存已满，释放资源: ${oldestKey}`);
            } catch (error) {
                console.error('释放缓存资源时出错:', error);
                
                // 即使出错，也从缓存中移除，避免不可用的资源占用缓存位置
                this.audioCache.delete(oldestKey);
                this.cacheAccessTimes.delete(oldestKey);
                
                // 同步更新原有数组
                const orderIndex = this.cacheAccessOrder.indexOf(oldestKey);
                if (orderIndex !== -1) {
                    this.cacheAccessOrder.splice(orderIndex, 1);
                }
            }
        }
    }
    
    // 更新缓存项的LRU顺序
    updateCacheOrder(url) {
        // 更新访问时间
        this.cacheAccessTimes.set(url, Date.now());
        
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
        
        // 同时确保时间戳Map包含所有缓存键
        const now = Date.now();
        for (const url of this.audioCache.keys()) {
            if (!this.cacheAccessTimes.has(url)) {
                this.cacheAccessTimes.set(url, now);
            }
        }
    }
    
    // 更积极地清理缓存
    cleanupCache() {
        console.log(`当前缓存大小: ${this.audioCache.size}, 当前播放: ${this.currentAudio.size}`);
        
        // 记录清理前的内存使用情况
        if (window.performance && window.performance.memory) {
            console.log(`清理前内存使用: ${Math.round(window.performance.memory.usedJSHeapSize / 1048576)}MB`);
        }
        
        // 同步缓存状态 - 确保数据结构一致性
        // 1. 删除时间Map中不存在于缓存的项目
        for (const url of this.cacheAccessTimes.keys()) {
            if (!this.audioCache.has(url)) {
                this.cacheAccessTimes.delete(url);
            }
        }
        
        // 2. 确保所有缓存项都有时间戳
        for (const url of this.audioCache.keys()) {
            if (!this.cacheAccessTimes.has(url)) {
                this.cacheAccessTimes.set(url, Date.now());
            }
        }
        
        // 3. 同步原始访问顺序数组
        this.rebuildCacheAccessOrder();
        
        // 始终保留一些空闲缓存空间
        const targetSize = Math.floor(this.MAX_CACHE_SIZE * 0.7);
        
        if (this.audioCache.size > targetSize) {
            // 收集所有缓存项并按访问时间排序
            const cacheItems = Array.from(this.cacheAccessTimes.entries())
                .filter(([url]) => this.audioCache.has(url) && !this.currentAudio.has(url))
                .sort(([, timeA], [, timeB]) => timeA - timeB);
            
            // 要删除的项目数量
            const itemsToDelete = Math.min(
                this.audioCache.size - targetSize,
                cacheItems.length
            );
            
            // 批量删除最旧的项目
            let deletedCount = 0;
            for (let i = 0; i < itemsToDelete; i++) {
                if (i >= cacheItems.length) break;
                
                const [url] = cacheItems[i];
                
                // 删除资源
                const audio = this.audioCache.get(url);
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
                        console.error('清理缓存资源时出错:', e);
                    }
                }
                
                // 从缓存结构中删除
                this.audioCache.delete(url);
                this.cacheAccessTimes.delete(url);
                
                // 同步更新原有数组
                const orderIndex = this.cacheAccessOrder.indexOf(url);
                if (orderIndex !== -1) {
                    this.cacheAccessOrder.splice(orderIndex, 1);
                }
                
                deletedCount++;
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
    
    // 优化的HTML净化方法，更强大的XSS防御实现
    sanitizeHTML(str) {
        // 处理非字符串输入
        if (str === null || str === undefined) {
            return '';
        }
        
        // 确保输入是字符串
        str = String(str);
        
        // 如果字符串为空，直接返回
        if (!str.length) {
            return '';
        }
        
        // 第一步：标准HTML实体转换，处理基本的HTML注入
        let safeStr = str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
        
        // 第二步：处理可能被用于XSS的特殊Unicode字符
        safeStr = safeStr
            // 零宽空格和其他不可见控制字符
            .replace(/[\u0000-\u001F\u007F-\u009F\u200B-\u200D\uFEFF]/g, '')
            // 处理可能规避过滤器的同形异义字符(lookalike characters)
            .replace(/[\u2028\u2029]/g, ' ')
            // 处理JavaScript跨域注入可能使用的字符
            .replace(/[\\`\*_\[\]]/g, '\\$&');
        
        // 第三步：防止URL中的javascript:协议
        // 注意：此正则表达式使用了较为复杂的模式来匹配javascript和data协议
        safeStr = safeStr.replace(
            /(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:)/gi, 
            'invalid:'
        );
        
        // 第四步：防止CSS注入
        safeStr = safeStr.replace(
            /(e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n|u\s*r\s*l)\s*\(/gi, 
            'invalid('
        );
        
        // 第五步：处理潜在的HTML属性注入
        safeStr = safeStr.replace(/on\w+\s*=/gi, 'invalid=');
        
        return safeStr;
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
            if (trackItem._removalObserver) {
                trackItem._removalObserver.disconnect();
                delete trackItem._removalObserver;
            }
        };
        
        // 为轨道项添加唯一ID，用于标识
        if (!trackItem.dataset.itemId) {
            trackItem.dataset.itemId = 'track_item_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
        }
        
        // 如果已有观察者，先断开连接
        if (trackItem._removalObserver) {
            const index = this.activeObservers.indexOf(trackItem._removalObserver);
            if (index !== -1) {
                this.activeObservers.splice(index, 1);
            }
            trackItem._removalObserver.disconnect();
            trackItem._removalObserver = null;
        }
        
        // 创建新的观察者
        const removalObserver = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.type === 'childList') {
                    for (const removed of mutation.removedNodes) {
                        if (removed === trackItem || (removed.contains && removed.contains(trackItem))) {
                            console.log(`检测到轨道项 ${trackItem.dataset.itemId} 被移除`);
                            cleanupTrackItem();
                            removalObserver.disconnect();
                            
                            // 从活跃观察者列表中移除
                            const index = this.activeObservers.indexOf(removalObserver);
                            if (index !== -1) {
                                this.activeObservers.splice(index, 1);
                            }
                            return;
                        }
                    }
                }
            }
        });
        
        // 开始观察
        if (trackLane) {
            removalObserver.observe(trackLane, { childList: true });
            
            // 添加到活跃观察者数组中
            this.activeObservers.push(removalObserver);
            
            // 存储到轨道项上
            trackItem._removalObserver = removalObserver;
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
        // 安全检查
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
        
        // 批量更新 - 先计算所有更改，然后一次性应用
        const updates = [];
        let hasUpdates = false;
        
        // 检查并计算需要的调整
        for (let i = 1; i < items.length; i++) {
            const currentItem = items[i];
            const previousItem = items[i-1];
            
            const currentStart = parseInt(currentItem.style.gridColumnStart);
            const previousEnd = parseInt(previousItem.style.gridColumnEnd);
            
            // 如果当前项目与前一个项目重叠
            if (currentStart < previousEnd) {
                // 计算新位置
                const newStart = previousEnd;
                const duration = parseInt(currentItem.dataset.duration || 5);
                
                // 检查新位置是否在有效范围内
                if (newStart + duration <= 31) {
                    updates.push({
                        element: currentItem,
                        start: newStart,
                        end: newStart + duration,
                        duration: duration
                    });
                    hasUpdates = true;
                } else {
                    // 超出范围，调整持续时间或移除
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
                        updates.push({
                            element: currentItem,
                            remove: true
                        });
                        hasUpdates = true;
                    }
                }
            }
        }

        // 只有在有更改时才应用批量更新
        if (hasUpdates) {
            // 取消之前的animationFrame
            if (this.animationFrameId) {
                cancelAnimationFrame(this.animationFrameId);
            }
            
            // 使用对象池而非直接创建新对象
            const safeUpdates = updates;
            
            // 批量应用所有更改
            this.animationFrameId = requestAnimationFrame(() => {
                // 1. 创建文档片段存储所有更改
                const fragment = document.createDocumentFragment();
                const itemsToRemove = [];
                
                // 2. 应用所有更改
                safeUpdates.forEach(update => {
                    try {
                        if (!update.element || !document.body.contains(update.element)) {
                            return;
                        }
                        
                        if (update.remove) {
                            itemsToRemove.push(update.element);
                        } else {
                            // 批量设置样式，减少重排
                            update.element.style.cssText = `
                                grid-column-start: ${update.start};
                                grid-column-end: ${update.end};
                                grid-row-start: 1;
                                grid-row-end: 2;
                                ${update.element.style.cssText.replace(/grid-(column|row)-(start|end)[^;]+;/g, '')}
                            `;
                            
                            if (update.duration !== parseInt(update.element.dataset.duration)) {
                                update.element.dataset.duration = update.duration;
                            }
                        }
                    } catch (error) {
                        console.error('更新轨道项时出错:', error);
                    }
                });
                
                // 3. 批量移除需要删除的元素
                itemsToRemove.forEach(item => {
                    if (item.parentNode) {
                        item.parentNode.removeChild(item);
                    }
                });
                
                // 完成后清除ID
                this.animationFrameId = null;
                
                // 如果有元素被删除，显示通知
                if (itemsToRemove.length > 0) {
                    this.showNotification('由于空间不足，部分音频片段被移除');
                }
            });
        } else {
            // 即使没有需要重叠调整的项目，也确保所有项目有正确的行设置
            requestAnimationFrame(() => {
                items.forEach(item => {
                    if (item && document.body.contains(item)) {
                        if (item.style.gridRowStart !== "1" || item.style.gridRowEnd !== "2") {
                            item.style.gridRowStart = "1";
                            item.style.gridRowEnd = "2";
                        }
                    }
                });
            });
        }
    }

    // 确保removeTrack方法正确定义
    removeTrack(trackItem) {
        if (!trackItem || !document.body.contains(trackItem)) {
            console.error('尝试删除不存在的轨道项');
            return;
        }
        
        // 断开观察者连接
        if (trackItem._removalObserver) {
            trackItem._removalObserver.disconnect();
            
            // 从活跃观察者数组中移除
            const index = this.activeObservers.indexOf(trackItem._removalObserver);
            if (index !== -1) {
                this.activeObservers.splice(index, 1);
            }
            
            // 清除引用
            trackItem._removalObserver = null;
        }
        
        // 存储需要删除的项目的原始引用
        const originalTrackItem = trackItem;
        
        // 获取用于音频和操作识别的URL和轨道信息
        const url = trackItem.dataset.url;
        const trackLane = trackItem.parentElement;
        const trackId = trackLane ? trackLane.id : trackItem.dataset.trackId;
        
        console.log(`正在删除轨道项: URL=${url}, 轨道ID=${trackId}`);
        
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
            audio.volume = trackVolume * this.masterVolume;
            
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

        // 创建关闭函数, 避免重复代码
        const removeNotification = () => {
            // 清除可能存在的超时
            if (notification._timeoutId) {
                clearTimeout(notification._timeoutId);
                notification._timeoutId = null;
            }
            
            // 移除事件监听器
            if (closeBtn && notification._closeHandler) {
                closeBtn.removeEventListener('click', notification._closeHandler);
            }
            
            // 添加淡出动画
            notification.classList.add('fade-out');
            
            // 动画结束后移除元素
            setTimeout(() => {
                if (container.contains(notification)) {
                    container.removeChild(notification);
                    this.repositionNotifications();
                    
                    // 从通知列表中移除
                    const index = this.notifications.findIndex(n => n.element === notification);
                    if (index !== -1) {
                        this.notifications.splice(index, 1);
                    }
                }
            }, 300); // 淡出动画时间
        };

        // 添加关闭按钮功能
        const closeBtn = notification.querySelector('.close-btn');
        const handleCloseClick = () => removeNotification();
        closeBtn.addEventListener('click', handleCloseClick);
        
        // 保存引用
        notification._closeHandler = handleCloseClick;

        // 5秒后自动移除
        notification._timeoutId = setTimeout(() => {
            removeNotification();
        }, 5000);
        
        return notification;
    }

    // 改进的音频预加载方法，优化缓存复用，添加自动重试功能
    async preloadAudio(url, retryCount = 0) {
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
                
                // 同步从缓存时间Map中删除
                if (this.cacheAccessTimes && this.cacheAccessTimes.has(normalizedUrl)) {
                    this.cacheAccessTimes.delete(normalizedUrl);
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
                    
                    // 尝试重试加载
                    const maxRetries = 2; // 最大重试次数
                    if (retryCount < maxRetries) {
                        console.log(`尝试重新加载音频(${retryCount + 1}/${maxRetries}): ${normalizedUrl}`);
                        
                        // 隐藏加载指示器
                        this.hideLoading();
                        
                        // 使用递增延迟重试，以给网络恢复的时间
                        setTimeout(() => {
                            this.preloadAudio(normalizedUrl, retryCount + 1)
                                .then(resolve)
                                .catch(reject);
                        }, (retryCount + 1) * 1000); // 延迟逐次增加
                    } else {
                        // 超过最大重试次数，显示错误通知
                        this.showErrorNotification(`音频 ${normalizedUrl.split('/').pop()} 加载失败: ${errorMessage}`);
                        
                        // 隐藏加载指示器
                        this.hideLoading();
                        
                        // 返回错误
                        reject(new Error(`音频加载失败: ${errorMessage}`));
                    }
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
                    
                    // 尝试重试加载
                    const maxRetries = 2; // 最大重试次数
                    if (retryCount < maxRetries) {
                        console.log(`音频加载超时，尝试重新加载(${retryCount + 1}/${maxRetries}): ${normalizedUrl}`);
                        
                        // 隐藏加载指示器
                        this.hideLoading();
                        
                        // 使用递增延迟重试
                        setTimeout(() => {
                            this.preloadAudio(normalizedUrl, retryCount + 1)
                                .then(resolve)
                                .catch(reject);
                        }, (retryCount + 1) * 1000); // 延迟逐次增加
                    } else {
                        // 超过最大重试次数，显示错误通知
                        this.showErrorNotification(`音频 ${normalizedUrl.split('/').pop()} 加载超时`);
                        
                        // 隐藏加载指示器
                        this.hideLoading();
                        
                        // 创建自定义错误事件
                        const timeoutError = new Error('音频加载超时');
                        console.error(`音频加载超时: ${normalizedUrl}`);
                        
                        // 返回错误
                        reject(timeoutError);
                    }
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
            
            // 尝试重试加载
            const maxRetries = 2; // 最大重试次数
            if (retryCount < maxRetries) {
                console.log(`加载异常，尝试重新加载(${retryCount + 1}/${maxRetries}): ${normalizedUrl}`);
                
                // 使用递增延迟重试
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        this.preloadAudio(normalizedUrl, retryCount + 1)
                            .then(resolve)
                            .catch(reject);
                    }, (retryCount + 1) * 1000); // 延迟逐次增加
                });
            } else {
                // 超过最大重试次数，显示错误通知
                this.showErrorNotification(`音频加载异常: ${error.message}`);
                console.error('音频加载异常:', error);
                throw error;
            }
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
            } else if (error.name === 'DOMException' && error.message.includes('play')) {
                message = `播放受限: ${safeTitle}`;
                suggestedAction = '请先与页面交互后再播放音频';
            } else if (error.message && error.message.includes('permission')) {
                message = `权限错误: ${safeTitle}`;
                suggestedAction = '请允许网站访问音频功能';
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
        
        console.log(`开始清理URL为 ${url} 的错误资源...`);
        
        // 清理当前播放的音频
        if (this.currentAudio.has(url)) {
            const audio = this.currentAudio.get(url);
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
                
                // 同步从缓存时间Map中删除
                if (this.cacheAccessTimes && this.cacheAccessTimes.has(url)) {
                    this.cacheAccessTimes.delete(url);
                }
            }
        }
        
        // 清理所有与此URL相关的活跃操作
        this._cleanupActiveOperations(url);
        
        // 清理与此URL相关的轨道项
        this._cleanupTrackItems(url);
        
        // 如果正在显示加载指示器，隐藏它
        this.hideLoading();
        
        console.log(`URL为 ${url} 的错误资源清理完成`);
    }
    
    // 提取清理活跃操作的私有方法
    _cleanupActiveOperations(url) {
        if (!this.activeOperations) return;
        
        // 找出所有与此URL相关的操作
        const operationsToRemove = [];
        
        for (const [key, operation] of this.activeOperations.entries()) {
            if (operation && (!url || operation.url === url)) {
                operation.isActive = false;
                operationsToRemove.push(key);
            }
        }
        
        // 删除找到的操作
        operationsToRemove.forEach(key => {
            this.activeOperations.delete(key);
        });
        
        if (operationsToRemove.length > 0) {
            console.log(`已清理 ${operationsToRemove.length} 个${url ? `与URL ${url} 相关的` : ''}操作`);
        }
    }
    
    // 提取清理轨道项的私有方法
    _cleanupTrackItems(url) {
        // 如果提供了URL，只清理与该URL相关的轨道项
        const selector = url ? 
            `.track-item[data-url="${this.sanitizeHTML(url)}"]` : 
            '.track-item';
            
        document.querySelectorAll(selector).forEach(trackItem => {
            // 移除播放动画类
            trackItem.classList.remove('playing');
            
            if (url) {
                // 向用户表明此音频项目无法播放
                trackItem.classList.add('error');
                
                // 在一段时间后移除错误标记，避免永久标记为错误
                setTimeout(() => {
                    if (document.body.contains(trackItem)) {
                        trackItem.classList.remove('error');
                    }
                }, 5000);
            }
        });
    }
}

// 初始化音频混音器
const audioMixer = new AudioMixer();

// 添加设备检测和提示功能
(function() {
    // 检测小屏幕设备
    function checkDeviceSize() {
        // 定义最小支持的宽度（例如，平板及以上尺寸）
        const minSupportedWidth = 768; // 单位：像素
        
        // 获取当前视口宽度
        const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        
        // 如果设备宽度小于最小支持宽度，显示提示
        if (windowWidth < minSupportedWidth) {
            // 检查提示是否已经存在
            if (!document.getElementById('device-warning')) {
                createDeviceWarning();
            }
        } else {
            // 如果设备宽度合适，移除提示（如果存在）
            const warning = document.getElementById('device-warning');
            if (warning) {
                warning.parentNode.removeChild(warning);
            }
        }
    }
    
    // 创建设备警告提示
    function createDeviceWarning() {
        const warningOverlay = document.createElement('div');
        warningOverlay.id = 'device-warning';
        warningOverlay.className = 'device-warning-overlay';
        
        // 创建内容容器
        const content = document.createElement('div');
        content.className = 'device-warning-content';
        
        // 添加图标
        const icon = document.createElement('i');
        icon.className = 'fas fa-desktop warning-icon';
        content.appendChild(icon);
        
        // 添加标题
        const title = document.createElement('h2');
        title.textContent = '请使用更大屏幕的设备';
        content.appendChild(title);
        
        // 添加说明文本
        const message = document.createElement('p');
        message.textContent = 'Mixing Bench混音工具需要更宽的屏幕以提供最佳体验。请使用平板、笔记本或台式电脑访问。';
        content.appendChild(message);
        
        // 添加按钮（可选，允许用户仍然访问，但不推荐）
        const continueButton = document.createElement('button');
        continueButton.className = 'warning-button secondary';
        continueButton.textContent = '我已了解，继续访问';
        continueButton.addEventListener('click', function() {
            warningOverlay.parentNode.removeChild(warningOverlay);
            // 存储用户选择，避免再次显示提示
            try {
                localStorage.setItem('device-warning-dismissed', 'true');
            } catch (e) {
                console.error('存储用户选择时出错:', e);
            }
        });
        content.appendChild(continueButton);
        
        warningOverlay.appendChild(content);
        document.body.appendChild(warningOverlay);
    }
    
    // 在页面加载和窗口大小改变时检查
    window.addEventListener('load', function() {
        // 检查用户是否已经关闭过提示
        try {
            if (localStorage.getItem('device-warning-dismissed') === 'true') {
                return; // 用户已关闭提示，不再显示
            }
        } catch (e) {
            console.error('读取存储时出错:', e);
        }
        
        checkDeviceSize();
    });
    
    window.addEventListener('resize', checkDeviceSize);
})();
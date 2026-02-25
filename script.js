// 1. 文字文案数组
const messages = [
    "不管发生什么，丞相还在！💪",
    "你笑起来的样子最好看了，快笑一个！😊",
    "今天允许你吃一顿大餐犒劳自己，我可以请客！🍔",
    "还记得你的喵喵子民吗，他们都在希望你开心哦",
    "你是这个世界上独一无二的！🌟",
    "深呼吸~ 呼~ 烦恼通通飞走啦！💨",
    "如果觉得太累了，就什么都别想，好好睡一觉吧，晚安。🌙",
    "喵喵喵🐈",
	"允许自己偶尔不开心，也允许我随时给你个隔空抱抱！🫂",
	"无论世界怎么糟糕，在我这里你永远是满分！💯",
	"就算今天全是乌云，你也是藏在云层后最亮的那颗星。✨",
	"慢慢来也没关系，即使停在原地休息，我也陪着你。🐌",
	"不要怀疑自己，你比你想象的要优秀一万倍！💖",
	"把不开心的事都留在昨天吧，今天是个崭新的你。🌅"
];

// 2. 新增：表情包图片文件名数组
// 【重要】请把这里换成你实际放入文件夹的图片文件名
const memeImages = [
    "gifs/meme_1.gif",
    "gifs/meme_2.gif",
    "gifs/meme_3.gif",
    "gifs/meme_4.gif",
    "gifs/meme_5.gif",
    "gifs/meme_6.gif",
    "gifs/meme_7.gif",
    "gifs/meme_8.gif",
    "gifs/meme_9.gif",
    "gifs/meme_10.gif",
    "gifs/meme_11.gif",
    "gifs/meme_12.gif",
    "gifs/meme_13.gif",
    "gifs/meme_14.gif",
    "gifs/meme_15.gif",
    "gifs/meme_16.gif",
    "gifs/meme_17.gif"
];

// 获取HTML里的元素
const btn = document.getElementById('magicBtn');
const messageBox = document.getElementById('messageBox');
const bgMusic = document.getElementById('bgMusic');
const imageContainer = document.getElementById('imageContainer');
const memeImageEl = document.getElementById('memeImage');

// 设置音量
if (bgMusic) {
    bgMusic.volume = 2;
}

btn.addEventListener('click', () => {
    // --- 1. 播放音乐 ---
    if (bgMusic && bgMusic.paused) {
        bgMusic.play().catch(e => console.log("等待用户交互后播放音乐"));
    }

    // --- 2. 触发彩纸特效 ---
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff7eb3', '#ff758c', '#ffd700', '#00bcd4']
        });
    }

    // --- 3. 随机抽取并显示文字 (已修复Bug ✅) ---
    const textIndex = Math.floor(Math.random() * messages.length);
    messageBox.textContent = messages[textIndex];
    messageBox.classList.remove('hidden');
    messageBox.style.opacity = '1';

    // --- 4. 随机抽取并显示图片 ---
    if (memeImages.length > 0) {
        const imgIndex = Math.floor(Math.random() * memeImages.length);
        memeImageEl.src = memeImages[imgIndex];
        imageContainer.classList.remove('hidden');
        setTimeout(() => {
            imageContainer.style.opacity = '1';
        }, 10);
    }
});
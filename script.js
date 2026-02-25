// 这里可以换成任何你想对她说的话、你们的搞笑回忆，或者土味情话！
const messages = [
    "不管发生什么，丞相还在！💪",
    "你笑起来的样子最好看了，快笑一个！😊",
    "今天允许你吃一顿大餐犒劳自己，我可以请客！🍔",
    "还记得你的喵喵子民吗，他们都在希望你开心哦",
    "你是这个世界上独一无二的！🌟",
    "深呼吸~ 呼~ 烦恼通通飞走啦！💨",
    "如果觉得太累了，就什么都别想，好好睡一觉吧，晚安。🌙",
    "喵喵喵🐈"
];

const btn = document.getElementById('magicBtn');
const messageBox = document.getElementById('messageBox');

btn.addEventListener('click', () => {
    // 触发彩纸特效
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff7eb3', '#ff758c', '#ffd700', '#00bcd4']
    });

    // 随机抽取一句话
    const randomIndex = Math.floor(Math.random() * messages.length);
    
    // 显示句子
    messageBox.textContent = messages[randomIndex];
    messageBox.classList.remove('hidden');
    messageBox.style.opacity = '1';
});
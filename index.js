const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'snapfun.minefort.com', // Aapka Minefort IP
        port: 25565,                  // Aapka Java Port
        username: 'Snapfun_Bot',       // Bot ka naam
        version: '1.21.1'             // Aapka Minecraft Version
    });

    bot.on('spawn', () => {
        console.log('Bot successfully joined snapfun server!');
    });

    // Agar bot kisi wajah se disconnect ho jaye, toh yeh automatic reconnect karega
    bot.on('end', () => {
        console.log('Bot disconnected. Reconnecting in 10 seconds...');
        setTimeout(createBot, 10000);
    });

    bot.on('error', (err) => console.log('Error:', err));
}

createBot();

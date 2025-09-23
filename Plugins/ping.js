const config = require('../config');
const { cmd } = require('../command');

// ======= PING COMMAND =======
cmd({
    pattern: "ping",
    alias: ["pong", "ping2"],
    use: "main",
    desc: "Check bot's response time.",
    category: "speed",
    react: "⚡",
    filename: __filename
}, 
async (bot, message, args, { from, quoted, sender, reply }) => {
    try {
        const startTime = Date.now();

        // Emoji sets
        const reactionEmojis = ['🔥', '⚡', '🚀', '💨', '🎯', '🎉', '🌟', '💥', '🕐', '🔹'];
        const mainEmojis = ['💎', '🏆', '⚡️', '🚀', '🎶', '🌠', '🌀', '🔱', '🛡️', '✨'];

        // Pick random emojis
        const reactEmoji = reactionEmojis[Math.floor(Math.random() * reactionEmojis.length)];
        let mainEmoji = mainEmojis[Math.floor(Math.random() * mainEmojis.length)];

        // Ensure mainEmoji != reactEmoji
        while (mainEmoji === reactEmoji) {
            mainEmoji = mainEmojis[Math.floor(Math.random() * mainEmojis.length)];
        }

        // React to user message
        await bot.sendMessage(from, {
            react: { text: mainEmoji, key: message.key }
        });

        const latency = ((Date.now() - startTime) / 1000).toFixed(2); // seconds

        // Styled ping response
        const pingMessage = `
╭━━━〔 *⚡ PING STATUS ⚡* 〕━━━┈⊷
┃◈ *Bot:* YOUNGFABOE-XMD
┃◈ *Speed:* ${latency}s ${reactEmoji}
┃◈ *User:* @${sender.split('@')[0]}
╰━━━━━━━━━━━━━━┈⊷
        `.trim();

        await bot.sendMessage(
            from,
            {
                text: pingMessage,
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 1000,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363315949714553@newsletter',
                        newsletterName: 'YOUNGFABOE-XMD',
                        serverMessageId: 143
                    }
                }
            },
            {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast"
                    },
                    message: {
                        contactMessage: {
                            displayName: "YOUNGFABOE-XMD",
                            vcard: `
BEGIN:VCARD
VERSION:3.0
N:YOUNGFABOE-XMD;BOT;;;
FN: YOUNGFABOE-XMD
item1.TEL;waid=255759005297:+255759268584
item1.X-ABLabel:Bot
END:VCARD
                            `.trim()
                        }
                    }
                }
            }
        );

    } catch (error) {
        console.error("Error in ping command:", error);
        reply(`❌ An error occurred: ${error.message}`);
    }
});

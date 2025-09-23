const { cmd } = require('../command');
const config = require('../config');
const johso = "https://files.catbox.moe/bhtyyr.jpg"
cmd({
    pattern: "donate",
    alias: ["support", "pay", "donation"],
    desc: "Get bot donation/payment details",
    category: "main",
    react: "💖",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        const donateMessage = `
╭───〔 *${config.BOT_NAME} - DONATE* 〕───◉
│💖 Thank you for supporting me!
│
│📲 *VODA-MPESSA:* ${config.VODA_NUMBER || "*0759005296*"}
│💳 *Account Name:* ${config.NAME_ACCOUNT || "*PAULO MAGESA MASUBI*"}
│🌐 *PayPal:* ${config.PAYPAL_EMAIL || "Not Available"}
│
│🙏 Every donation helps keep the bot running and updated!
╰────────────────────◉
> Thank you for your generosity!
`;

        // Buttons
        const buttons = [
            { buttonId: `${config.PREFIX}menu`, buttonText: { displayText: "📂 MENU" }, type: 1 },
            { buttonId: `${config.PREFIX}owner`, buttonText: { displayText: "👑 OWNER" }, type: 1 },
            { buttonId: `${config.PREFIX}support`, buttonText: { displayText: "💖 DONATE" }, type: 1 },
        ];

        await conn.sendMessage(from, {
            image: { url: johso }, // optional image
            caption: donateMessage,
            footer: "© Power by YOUNGFABOE-𝐓𝐙🇹🇿",
            buttons: buttons,
            headerType: 4 // image + buttons
        }, { quoted: mek });

    } catch (err) {
        console.error(err);
        await conn.sendMessage(from, { react: { text: "❌", key: m.key } });
        reply("❌ An error occurred while fetching donation details.");
    }
});





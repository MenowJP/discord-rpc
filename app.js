const clientId = "1091261217043132526"
const discordRPC = require('discord-rpc');
const RPC = new discordRPC.Client({ transport: 'ipc'});

discordRPC.register(clientId);

async function setActivity() {
    if (!RPC) return
    RPC.setActivity({
        details: `Shimeii Server Admin`,
        state: `Learning English`,
        startTimestamp: Date.now(),
        largeImageKey: 'unreal-engine',
        largeImageText: `UE Developer`,
        smallImageKey: `aviutl`,
        smallImageText: `Aviutl Editor`,
        instance: false,
        buttons: [
            {
                label: `My Twitter!`,
                url: `https://twitter.com/menow_vfx`
            },
            {
                label: `My YouTube!`,
                url: `https://www.youtube.com/@menowofficial`
            },
        ]
    });
};

RPC.on('ready', async () => {
    setActivity();

    setInterval(() => {
         setActivity();
    }, 15 * 1000);
});

RPC.login({ clientId }).catch(err => console.error(err));
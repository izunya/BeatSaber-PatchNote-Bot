# izuna's BeatSaber patchnote discord bot

## Installation

```bash
git clone https://github.com/izunya/BeatSaber-PatchNote-Bot.git
cd BeatSaber-PatchNote-Bot
npm install
```

## ENV

```env
TOKEN="BOT TOKEN"
WEBHOOKS="WEBHOOKS LINK"
```

## Start

```bash
npm run server
npm run start
node index.js
```

## Events

When you first run the bot, it automatically sends patch notes.
Every hour and 00 minutes, it checks to see if new patch notes exist, and if so, it sends them.

처음 봇을 실행시키면 자동으로 패치노트를 전송합니다.
매시간 00분 마다 새로운 패치노트가 존재하는지 확인 후 , 존재한다면 해당 패치노트를 전송합니다.

## Commands

```Chat
p!patchnote - Sending patchnote to Message channel
p!phs - Same as p!patchnote

/patchnote - Sending patchnote to Interaction channel

/webhookpatchnote - Sending patchnote to Webhooks channel

```

## Config
```javascript
module.exports = {
    ownerID: "", // Fill to your ID
    prefix: ["p!"], // Prefix
    izuna: "Created By. Izuna_1", // Do not change :/
}
```

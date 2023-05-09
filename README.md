# izuna's BeatSaber patchnote discord bot

## Installation

```bash
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
p!phs - Sending patchnote to Message channel

/ps - Sending patchnote to Interaction channel

/psw - Sending patchnote to Webhooks channel

```

## Config
```javascript
module.exports = {
    ownerID: "380629788940959746", // Change to your ID
    prefix: ["p!"], // Prefix
    izuna: "Created By. Izuna_1", // Do not change :/
}
```

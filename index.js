const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.argv.length == 2 ? process.env.token : "";
const moment = require("moment");
require("moment-duration-format");
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "님 께서 들어오셨습니다.";
const byeChannelComment = "님 께서 나가셨습니다.";

client.on('ready', () => {
  console.log('실행완료');
  client.user.setPresence({ game: { name: 'https://discord.gg/UbUrxUY' }, status: 'online' })
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == ""));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == 'ㅇwreete3ygewsfveryhgrethegreyrtutyujtyhergerht') {
    return message.reply('https://discord.gg/Ga2aURm');
  }

  if(message.content == './././...././././e/te.t/.tetegwgreherd``1`2') {
    let embed = new Discord.RichEmbed()
    let img = '';
    var duration = moment.duration(client.uptime).format("");
    embed.setColor('')
    embed.setAuthor('')
    embed.setFooter(``)
    embed.addBlankField()
    embed.addField('',    `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true);
    embed.addField('', `${duration}`, true);
    embed.addField('',         `${client.users.size.toLocaleString()}`, true);
    embed.addField('r',       `${client.guilds.size.toLocaleString()}`, true);
    // embed.addField('channel',      `${client.channels.size.toLocaleString()}`, true);
    embed.addField('Discord.js',   `v${Discord.version}`, true);
    embed.addField('Node',         `${process.version}`, true);
    
    let arr = client.guilds.array();
    let list = '';
    list = `\`\`\`css\n`;
    
    for(let i=0;i<arr.length;i++) {
      // list += `${arr[i].name} - ${arr[i].id}\n`
      list += `${arr[i].name}\n`
    }
    list += `\`\`\`\n`
    embed.addField('list:',        `${list}`);

    embed.setTimestamp()
    message.channel.send(embed);
  }

  if(message.content == 'efgerghevfrgyhehygergfreyrtyghregfwe') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('')
      .setURL('')
      .setAuthor('')
      .setThumbnail(img)
      .addBlankField()
      .addField('미정', '미정')
      .addField('미정', '미정', true)
      .addField('미정', '미정', true)
      .addField('미정', '미정', true)
      .addField('미정', '미정')
      .addBlankField()
      .setTimestamp()
      .setFooter('')

    message.channel.send(embed)
  } else if(message.content == 'wefwereyhergfeqrfewyregvdscfrygthy') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: '/help 명령어', desc: '사용가능한 명령어리스트를 보여줍니다.'},
      {name: '/노래방', desc: '노래방의 초대코드를 줍니다.'},
      {name: '/help 대화목록', desc: '대화할수있는 명령어 목록을 띄워줍니다.'},
      {name: '/전체공지 [내용]', desc: '프라이빗 메시지로 모두에게 공지를 전송합니다.'},
      {name: '/안내대기방', desc: '슬기로운 안내대기방의 주소를 줍니다.'},
      {name: '/청소 [수]', desc: '자신이 쓴글 말고도 모든글을 수만큼 삭제합니다.'},     
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('')
      .setColor('red')
      .setFooter(``)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  } else if(message.content == 'dsdsfdgtrjeugireognbienibeninerhbn') {
    client.guilds.array().forEach(x => {
      x.channels.find(x => x.type == 'text').createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
        .then(invite => {
          message.channel.send(invite.url)
        })
        .catch((err) => {
          if(err.code == 50013) {
            message.channel.send('**'+x.channels.find(x => x.type == 'text').guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
          }
        })
    });
  } else if(message.content == 'sdsdswreetesgregeeryhethbddddddddddddddddddddddddddddddddddddddddddsfgb') {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    message.guild.channels.get(message.channel.id).createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
      .then(invite => {
        message.channel.send(invite.url)
      })
      .catch((err) => {
        if(err.code == 50013) {
          message.channel.send('**'+message.guild.channels.get(message.channel.id).guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
        }
      })
  } else if(message.content.startsWith('rqe3ewgrgvfrdhgegerhgyeyh')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('ㅇㅇㅇㅇwrwrwfwdw'.length);
      let embed = new Discord.RichEmbed()
        .setAuthor('')
        .setColor('#186de6')
        .setFooter(``)
        .setTimestamp()
  
      embed.addField('공지: ', contents);
  
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(embed)
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content.startsWith('/전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('/전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 성공적으로 전송했습니다.');
    } else {
      return message.reply('채널에서만 실행해주세요.');
    }
  } else if(message.content.startsWith('/청소')) {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어입니다.');
    }
    
    if(message.channel.type != 'dm' && checkPermission(message)) return

    var clearLine = message.content.slice('/청소 '.length);
    var isNum = !isNaN(clearLine)

    if(isNum && (clearLine <= 0 || 100 < clearLine)) {
      message.channel.send("1부터 100까지의 숫자만 입력해주세요.")
      return;
    } else if(!isNum) { // c @나긋해 3
      if(message.content.split('<@').length == 2) {
        if(isNaN(message.content.split(' ')[2])) return;

        var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
        var count = parseInt(message.content.split(' ')[2])+1;
        let _cnt = 0;

        message.channel.fetchMessages().then(collected => {
          collected.every(msg => {
            if(msg.author.id == user) {
              msg.delete();
              ++_cnt;
            }
            return !(_cnt == count);
          });
        });
      }
    } else {
      message.channel.bulkDelete(parseInt(clearLine)+1)
        .then(() => {
          AutoMsgDelete(message, `<@${message.author.id}> ` + parseInt(clearLine) + "개의 메시지를 삭제했습니다. (이 메세지는 잠시 후에 사라집니다.)");
        })
        .catch(console.error)
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "관리자 권한이 존재하지 않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}

async function AutoMsgDelete(message, str, delay = 3000) {
  let msg = await message.channel.send(str);

  setTimeout(() => {
    msg.delete();
  }, delay);
}


client.login(token);
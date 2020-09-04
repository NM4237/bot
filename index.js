const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "😉ㅣ입장채널";
const byeChannelName = "😢ㅣ퇴장채널";
const welcomeChannelComment = "이(가) 이곳에 도착하셨어요! 환영합니다!";
const byeChannelComment = "이(가) 떠나네요..ㅠㅠ 그데 꼭 돌아와줘요!ㅠㅠ";

client.on('ready', () => {
  console.log('봇 활성화');
  client.user.setPresence({ game: { name: '슬기로운 로보트 생활' }, status: 'online' })
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '슬기로운 들어갈래') {
    return message.reply('https://discord.gg/Ga2aURm');
  }
  
  if(message.content == '슬기로운 무서워') {
    return message.reply('무서우시다고요?..||쾅!||놀라셨나요? ㅋㅋ장난이죠.');
  }

  if(message.content == '슬기로운 즐거워') {
    return message.reply('`저도 즐거워요! 우후~`');
  }

  if(message.content == '슬기로운 인사해') {
    return message.reply('님도 다른분들도 다 안녕하세요!');
  }


  if(message.content == '슬기로운 봇') {
    return message.reply('님 네! 왜요?');
  }


  if(message.content == '슬기로운 슬퍼') {
    return message.reply('아무리 힘들고 지치고 억울해도 다음일을 생각하세요. 당신의 기회의 보석은 아직 남아있다는걸 기억하세요.');
  }

  if(message.content == '슬기로운 프리') {
    return message.reply('프리님은 무료를 좋아하시는 슬기로운에 흥문관이세요.');
  }

  
  if(message.content == '슬기로운 ㅗ') {
    return message.reply('반사~');
  }

  if(message.content == '슬기로운 겨울') {
    return message.reply('겨울엔 역시 김장이죠.');
  }

  if(message.content == '슬기로운') {
    return message.reply('`슬기로운 도움말`을 쳐보세요!');
  }

  if(message.content == '슬기로운 배추') {
    return message.reply('배추는 역시 김장해야죠.그쵸?');
  }

  if(message.content == '슬기로운 바니바니바니') {
    return message.reply('```당근당근당근!!```');
  }

  if(message.content == '슬기로운 너 아빠없지') {
    return message.reply('제 아버지는 절 만들어 주신 슬기로운 엔엠님이에요.');
  }

  if(message.content == '슬기로운 너 엄마없지') {
    return message.reply('그걸굳이꼭...(또륵)');
  }

  if(message.content == '슬기로운 미안해') {
    return message.reply('`괜찮아요 그럴수도 있죠!`');
  }

  if(message.content == '슬기로운 너의 정보') {
    return message.reply('저는 저인데 왜 궁금하시죠?..');
  }

  if(message.content == '슬기로운 사랑해') {
    return message.reply('저도요!!');
  }

  if(message.content == '슬기로운 꺼져') {
    return message.reply('그건..저희부서가 아니고요 관리진부서에 가서 빼달라고 하신면 됩니다. 연결해드릴까요?..');
  }

  if(message.content == '슬기로운 미워') {
    return message.reply('난니 좋아할줄 알았니?');
  }

  if(message.content == '슬기로운 엿머거') {
    return message.reply('아휴~ 달다. 너도 머거 ㅗ 맛있니?ㅋㅋ');
  }

  if(message.content == '슬기로운 물결') {
    return message.reply('물결님은 항상 잘 일해주시는 슬기로운의 종친부세요.');
  }

 if(message.content == '슬기로운 바니') {
    return message.reply('가문을 뒷짐지고 앞장서는 멋진 가문장이십니다!');
  }

  if(message.content == '슬기로운 가위바위보') {
    return message.reply('너 찌 나 묵 너짐 ㅋ');
  }

  if(message.content == '슬기로운 MEE6') {
    return message.reply('MEE6? 우리 대장!');
  }

  if(message.content == '슬기로운 마냥') {
    return message.reply('`야용!`');
  }

  if(message.content == '슬기로운 배추봇') {
    return message.reply('```겨울이봇 ㅎ```');
  }



  if(message.content == '슬기로운 엔엠') {
    return message.reply('아빠?..');
  }

  if(message.content == '슬기로운 슬기로운') {
    return message.reply('슬기로운!');
  }
  
  if(message.content == '슬기로운 ㅎㅎ') {
    return message.reply('기분이 좋아보이시네요.');
  }

  if(message.content == '슬기로운 ㅈ까') {
    return message.reply('반사~');
  }

  if(message.content == '슬기로운 시발') {
    return message.reply('ㅎㅎ 갠디로 따라와라');
  }

  if(message.content == '슬기로운 너의 이름은') {
    return message.reply('저의 이름은 슬.기.로.운.봇 입.니.다.삐릭?');
  }

  if(message.content == '슬기로운 버드') {
    return message.reply('시비충 사칭쟁이입니디만?');
  }

  if(message.content == '슬기로운 재민') {
    return message.reply('재민은 재민입니다.');
  }

  if(message.content == '슬기로운 야생') {
    return message.reply('이링크로 들어가세요. https://discord.gg/fkmWbHH')
  }

  if(message.content == '슬기로운 화풀이모드') {
    return message.reply('갠디로 저에게 모든욕을 내뱉어 주세요..')
  }

 
  if(message.content == '슬기로운 대화') {
    return message.reply('봇과 대화를 시도하는겁니까 휴먼?');
  }

  if(message.content == '슬기로운 인성문제있어?') {
    return message.reply('님은 님팀버려요?..');
  }

  if(message.content == '슬기로운 화나') {
    return message.reply('화가 나시면 한번 크게 외쳐봐요 ||씨발|| 외치면 속이 후련해질꺼에요.');
  }

  if(message.content == '슬기로운 떠났어') {
    return message.reply('많은이가..떠났고..슬기로운에 나간이들이 잊혀지지않도록합시다..');
  }

  if(message.content == '슬기로운 안녕') {
    return message.reply('님 안녕하세요!');
  }


  if(message.content == '슬기로운 포소') {
    return message.reply('꿀벌 왜 울어..');
  }

  if(message.content == '슬기로운 외로워') {
    return message.reply('많은이가 당신을 위해 위로해줄거에요..');
  }

  if(message.content == '슬기로운 잘있어') {
    return message.reply('님도 잘가요!보고싶을거에요!');
  }


  if(message.content == '슬기로운 고미') {
    return message.reply('???:슬기로운은 고미꺼!!');
  }

  if(message.content == '슬기로운 백랑') {
    return message.reply('???:슬기로운은 백랑이랑 고미가 머글꺼야!');
  }

  if(message.content == '슬기로운 유자') {
    return message.reply('유자는 아빠와 같은 슬기로운의 통례원이세요. ㅎ');
  }

  if(message.content == '슬기로운 나이') {
    return message.reply('전 봇이라 나이가 없답니다. 이것도 모르신건 아니죠?');
  }
  
  if(message.content == '슬기로운 짜증나') {
    return message.reply('짜증나시면 `슬기로운 화풀이모드` 를 입력해보세요.');
  }

  if(message.content == '슬기로운 신나') {
    return message.reply('저도 매우 신이나네요.GOD FLY HAHA!!');
  }
  
  if(message.content == '슬기로운 대화목록') {
    return message.reply('비하인드 처리시 욕설포함.. 슬기로운 ||ㅗ||,슬기로운 바니바니바니,슬기로운 너 ||아빠(엄마)||없지,슬기로운 미안해,슬기로운 너의 정보,슬기로운 사랑해,슬기로운 ||꺼져||,슬기로운 미워,슬기로운 ||엿||머거,슬기로운 좋아해,슬기로운 가위바위보,슬기로운 슬기로운,슬기로운 ㅎㅎ,슬기로운 ||ㅈ까||,슬기로운 ||시발||,슬기로운 너의 이름은,슬기로운 야생,슬기로운 대화,슬기로운 인성문제있어?,슬기로운 나이,슬기로운 화나,슬기로운 화풀이모드,슬기로운 무서워,슬기로운 즐거워,슬기로운 신나,슬기로운 짜증나');
  }
  
  if(message.content == 'embed') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('슬기로운 살려줘')
      .setURL('?')
      .setAuthor('살려줘', img, '당근')
      .setThumbnail(img)
      .addBlankField()
      .addField('Inline field title', 'Some value here')
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here1\nSome value here2\nSome value here3\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('졸라힘드네', img)

    message.channel.send(embed)
  } else if(message.content == '슬기로운 도움말') {
    let helpImg = '';
    let commandList = [
      {name: '슬기로운 들어갈래', desc: '슬기로운 안내방 링크를 보냅니다.'},
      {name: '슬기로운 슬퍼', desc: '봇이 당신을 위해 따듯한 위로를 해줍니다.'},
      {name: '슬기로운 대화목록', desc: '슬기로운 봇과 대화할수있는 커맨드를 알려줍니다!'},
      {name: '슬기로운 전체공지', desc: '서버에 있는 사람의 DM으로 공지를 보내줍니다.'},
      {name: '슬기로운 청소', desc: '입력한 만큼 전체의 채팅을 청소해요.'},  
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('', helpImg)
      .setColor('Blue')
      .setFooter(``)
      .setTimestamp()
     
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content.startsWith('슬기로운 전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('슬기로운 전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  }

if(message.content.startsWith('슬기로운 청소')) {
  if(checkPermission(message)) return

  var clearLine = message.content.slice('슬기로운 청소'.length);
  var isNum = !isNaN(clearLine)

  if(isNum && (clearLine <= 0 || 100 < clearLine)) {
    message.channel.send("1부터 100까지의 숫자만 입력해주세요.")
    return;
  } else if(!isNum) { // c @나긋해 3
    if(message.content.split('<@').length == 2) {
      if(isNaN(message.content.split(' ')[2])) return;

      var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
      var count = parseInt(message.content.split(' ')[2])+1;
      const _limit = 10;
      let _cnt = 0;

      message.channel.fetchMessages({limit: _limit}).then(collected => {
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
        AutoMsgDelete(message, `<@${message.author.id}> ` + parseInt(clearLine) + "개의 메시지를 삭제했습니다. (이 메시지는 잠시 후에 사라집니다.)");
      })
      .catch(console.error)
  }
}
});

function checkPermission(message) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) {
  message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
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

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "오류 : 당신은 이 명령어를 사용할수 없습니다. [사유:권한미소지]")
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


client.login(token);
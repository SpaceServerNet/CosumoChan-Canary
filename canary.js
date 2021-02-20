const Discord = require('discord.js')
const client = new Discord.Client()
const request = require('request')

const now = new Date();
const year = now.getFullYear();
const mon = now.getMonth() + 1;
const day = now.getDate();
const hour = now.getHours();
const min = now.getMinutes();

var SpaceDay
SpaceDay = "今日は『宇宙の日』！全鯖民対象に獲得経験値にブーストがかかってます！"
var PrefixVer
PrefixVer = "Type /help｜Ver3.2"
var Ver
Ver = "Ver3.2"
var Developer
Developer = '<@586824421470109716>'
var GoodServer
GoodServer = "システムオールグリーン\n全てのサービスは正常に稼働しています。"
var BadServer
BadServer = "システムに障害あり\n一部のサービスに障害が発生しています。"
var UpdateDays
UpdateDays = year + "年 3月"
var normalcolor
normalcolor = 0x6f56cc
var Ename
Ename = "CosumoSystem"
var devcommand1
devcommand1 = "開発者専用コマンドを使用しました。"
var devcommand2
devcommand2 = "__使用コマンド：__"
var Eurl
Eurl = 'https://github.com/SpaceServerNet/Cosumo-Chan'
var Eil
Eil = 'https://media.discordapp.net/attachments/785901170253627392/812736467335249960/PSX_20210221_022355.jpg'
var hutuunochat
hutuunochat = '630431888661676042'
var merutan
merutan = '586824421470109716'

client.once('ready', () => {
    var PrefixVer
    PrefixVer = "Type /help｜Ver3.2"

    var Ver
    Ver = "Ver3.2"

    console.log(`${client.user.tag} Ready.｜` + Ver)

    client.user.setActivity(PrefixVer + '｜' + `Ping: ${client.ws.ping}`)
})

client.on('message', msg => {
    switch(msg.content) {
        case '/help':
            msg.channel.send({
                embed: {
                    author: {
                        name: "CosumoSystem",
                        url: 'https://github.com/SpaceServerNet/Cosumo-Chan',
                        icon_url: 'https://media.discordapp.net/attachments/785901170253627392/812736467335249960/PSX_20210221_022355.jpg'
                    },
                    title: "コマンドリファレンス",
                    url: 'https://github.com/SpaceServerNet/Cosumo-Chan/blob/master/PatchNotes/Hotfix-3.2.md',
                    description: "このBotを利用するには全てのコマンドの先頭に`/`をつけてください。" + "｜" + Ver + "｜開発者：" + Developer,
                    color: normalcolor,
                    timestamp: new Date(),
                    footer: {
                        text: "開発元：める"
                    },
                    image: {
                        url: 'https://media.discordapp.net/attachments/785901170253627392/812736467553878056/840_560.jpeg?width=804&height=536'
                    },
                    fields: [
                        {
                            name: ":robot: Bot：",
                            value: "`help`,`about`,`ping`,`url`",
                            inline: true
                        },
                        {
                            name: ":wrench: Tool：",
                            value: "`saigai`,`aikon`",
                            inline: true
                        },
                        {
                            name: ":file_cabinet: Server：",
                            value: "`downinfo`,`rank`",
                            inline: true
                        },
                        {
                            name: ":dollar: Fun：",
                            value: "`SpinySong`",
                            inline: true
                        },
                        {
                            name: ":gear: Developer：",
                            value: "`task-kill`",
                            inline: true
                        },
                        {
                            name: ":pencil: Report(レポート機能)【β版】",
                            value: "`/report <UserId> <Reason>`\n   - 指定したユーザーに対しての通報を行います。"
                        },
                    ]
                }
            })
            break;
        case '/about':
            msg.channel.send({
                embed: {
                    author: {
                        name: Ename,
                        url: Eurl,
                        icon_url: Eil,
                    },
                    title: "詳細情報",
                    url: "https://github.com/SpaceServerNet/Cosumo-Chan/blob/master/README.md",
                    description: "このBotの詳細情報を表示します。",
                    color: 0x48c7c7,
                    timestamp: new Date(),
                    fields: [
                        {
                            name: "> __**バージョン**__",
                            value: "**Hotfix:** `3.1`\n**Build:** `2021.02`",
                            inline: true
                        },
                        {
                            name: "> __**開発者**__",
                            value: "・<@586824421470109716>\n・<@664098761705914399>",
                            inline: true
                        },
                        {
                            name: "> __**ライブラリ**__",
                            value: "・discord.js\n・node.js",
                            inline: true
                        },
                        {
                            name: "> __**SpecialThanks!**__",
                            value: "__◆リファクタリング__\n・Apartkktrainさん\n__◆すぴにーのうた提供・アイコン提供__\n・<@566553555033653268>\n・<@483100337570316332>\n__◆導入のご協力__\n・<@366612034672132107>\n及び、宇宙鯖スタッフ の皆さん。"
                        },
                    ]
                }
            })
            break;
        case '/ping':
            msg.channel.send({

                embed: {
                    author: {
                        name: Ename,
                        url: Eurl,
                        icon_url: Eil,
                    },
                    title: "Ping / 接続状況",
                    url: "https://fast.com/ja/",
                    description: "このBotの接続状況を確認します。",
                    color: 0x48c7c7,
                    timestamp: new Date(),
                    footer: {
                        text: "Pingが高いのは仕様です。",
                    },
                    fields: [
                        {
                            name: "Pong!",
                            value: ":ping_pong: " + `${client.ws.ping}ms`
                        }
                    ]
                }
            })
            break;
        case '/url':
            msg.channel.send({
                embed: {
                    author: {
                        name: Ename,
                        url: Eurl,
                        icon_url: Eil,
                    },
                    title: "URL集",
                    url: "https://discord.com/channels/774301569654980609/795649253309022249/795726042698219570",
                    description: "New!SpaceServerに関するURL集です。",
                    color: 0x48c7c7,
                    timestamp: new Date(),
                    fields:[
                        {
                            name: "> __**公式ホームページ**__",
                            value: "https://yurisi.space/"
                        },
                        {
                            name: "> __**公式Discord**__",
                            value: "https://discord.gg/F3C4QJV"
                        },
                        {
                            name: "> **__公式リポジトリ(issue)__**",
                            value: "https://github.com/yurisi0212/SpaceServerIssue/issues"
                        },
                        {
                            name: "> __**開発日誌**__",
                            value: "https://yurisi.space/blog/"
                        },
                        {
                            name: "> **__宇宙鯖（裏）__**",
                            value: "https://discord.gg/2deVjGeyWA"
                        },
                    ]
                }
            })
            break;
        case '/downinfo':
            /**
             * 【ここの変数】
             * GoodServer = 全て稼働
             * BadServer = 一部稼働なし
            */
            msg.channel.send({
                embed: {
                    author: {
                        name: Ename,
                        url: Eurl,
                        icon_url: Eil,
                    },
                    title: "障害情報",
                    description: "New!SpaceServerに関する障害情報です。",
                    color: 0x48c7c7,
                    timestamp: new Date(),
                    fields:[
                        {
                            name: GoodServer,
                            value: "障害情報はありません。"
                        }
                    ]
                }
            })
            break;
        case '/rank':
            msg.channel.send({
                embed: {
                    author: {
                        name: Ename,
                        url: Eurl,
                        icon_url: Eil,
                    },
                    title: "サーバーランキング【月間】",
                    description: "New!SpaceServerの一部のランキングはここでも見れます。",
                    color: 0x48c7c7,
                    timestamp: new Date(),
                    fields:[
                        {
                            name: "> __**MEE6 発言ランキング**__",
                            value: "`/rank-1`\nMEE6の発言ランキングを閲覧できます。"
                        },
                        {
                            name: "> __**サーバー内の所持金ランキング**__",
                            value: "`/rank-2`\nサーバー内の所持金ランキングを閲覧できます。"
                        }
                    ]
                }
            })
            break;
        /**ここから /rankのランキング */
        case '/rank-1':
            msg.channel.send({
                embed: {
                    author: {
                        name: Ename,
                        url: Eurl,
                        icon_url: Eil,
                    },
                    title: "MEE6 発言ランキング【2月】",
                    url: "https://mee6.xyz/leaderboard/366613089694777355",
                    description: "MEE6の発言ランキングを確認できます。\n10位以上\n次回更新:" + UpdateDays,
                    color: 0x48c7c7,
                    timestamp: new Date(),
                    fields: [
                        {
                            name: "**__1位__** Nemuke47｜Lv 52",
                            value: "メッセージ数：15.6k｜経験値：312.7k"
                        },
                        {
                            name: "**__2位__** Meru7｜Lv 51",
                            value: "メッセージ数：14.7k｜経験値：294.3k"
                        },
                        {
                            name: "**__3位__** yurisi｜Lv 51",
                            value: "メッセージ数：14.5k｜経験値：289.4k"
                        },
                        {
                            name: "**4位** FiguringTable 318｜Lv 47",
                            value: "メッセージ数：15.6k｜経験値：312.7k"
                        },
                        {
                            name: "**5位** 荳肴迸ｭ｜Lv 45",
                            value: "メッセージ数：10.4k｜経験値：207.4k"
                        },
                        {
                            name: "**6位** pyouyu｜Lv 39",
                            value: "メッセージ数：7.1k｜経験値：142.7k"
                        },
                        {
                            name: "**7位** meyason｜Lv 38",
                            value: "メッセージ数：6.6k｜経験値：132.8k"
                        },
                        {
                            name: "**8位** ドブ達磨｜Lv 38",
                            value: "メッセージ数：6.6k｜経験値：131.2k"
                        },
                        {
                            name: "**9位** ApateticFoil114(可愛い女の子)｜Lv 38",
                            value: "メッセージ数：6.6k｜経験値：131.2k"
                        },
                        {
                            name: "**10位** trksp｜Lv 37",
                            value: "メッセージ数：6.3k｜経験値：125.8k"
                        },
                    ]
                }
            })
            break;
        case '/rank-2':
            msg.channel.send({
                embed: {
                    author: {
                        name: Ename,
                        url: Eurl,
                        icon_url: Eil,
                    },
                    title: "サーバー内の所持金ランキング【2月】",
                    description: "サーバー内の所持金ランキングです。\n5位以上\n次回更新:" + UpdateDays,
                    color: 0x48c7c7,
                    timestamp: new Date(),
                    fields: [
                        {
                            name: "**__1位__： ApateticFoil114**",
                            value: "所持金：65760757.87￥"
                        },
                        {
                            name: "**__2位__： Kuro83060**",
                            value: "所持金：35710583.93￥"
                        },
                        {
                            name: "**__3位__**： FiguringTable72",
                            value: "所持金：20352691.19￥"
                        },
                        {
                            name: "**4位**：Hikaru130",
                            value: "所持金：18631727￥"
                        },
                        {
                            name: "**5位**: okaze92",
                            value: "所持金：18474038￥"
                        },
                    ]
                }
            })
            break;
        case '/aikon':
            message.channel.send({
                embed: {
                    author: {
                        name: Ename,
                        url: Eurl,
                        icon_url: Eil,
                    },
                    title: "アイコンダウンロード",
                    url: "https://www.pixiv.net/",
                    description: "あなたが現在アカウントにアップロードしたアイコンをファイル化してメッセージ送信します。",
                    color: 0x48c7c7,
                    timestamp: new Date(),
                    footer: {
                        name: "アイコンはいつものファイルの保存方法で保存できます。"
                    },
                    fields: [
                        {
                            name: "> __**アイコンのダウンロードについて**__",
                            value: "画像をタップしてダウンロードしましょう。"
                        }
                    ]
                }
            })
            message.reply(message.author.displayAvatarURL());
            break;
        case '/spinysongs':
            message.channel.send({
                embed: {
                    author: {
                        name: Ename,
                        url: Eurl,
                        icon_url: Eil,
                    },
                    title: "すぴにーのうた　- すぴにーP",
                    url: "https://github.com/SpaceServerNet/Cosumo-Chan/issues?q=is%3Aissue+label%3A%E3%81%99%E3%81%B4%E3%81%AB%E3%83%BC%E3%81%AE%E3%81%86%E3%81%9F+is%3Aclosed",
                    description: "すぴにーPによる高クオリティーの曲を楽しめます。",
                    color: 0x48c7c7,
                    timestamp: new Date(),
                    fields: [
                        {
                            name: "> __**花瓶に触れた【スピニー】**__",
                            value: "By <@483100337570316332>\nhttps://youtu.be/7facISD76-o"
                        },
                        {
                            name: "> __**もったいないらんど【スピニー】**__",
                            value: "By <@483100337570316332>\nhttps://youtu.be/mhTBCwaIS6U"
                        },
                        {
                            name: "> __**かまいたち【スピニーロイド】**__",
                            value: "By <@483100337570316332>\nhttps://youtu.be/jknWtYo9-Pc"
                        },
                        {
                            name: "> __**花瓶に角虫れたスピニー**__",
                            value: "By <@566553555033653268>\nhttps://www.youtube.com/watch?v=EzJVW2MQg9c"
                        },
                        {
                            name: "> __**【うたってみた！】ひとつうえのおとこ【すぴにーまうす。】**__",
                            value: "By <@566553555033653268>\nhttps://youtu.be/DZ6u6QBGkrI"
                        }
                    ]
                }
            })
            break;
    }
})

client.on('message', message => {
    switch(message.content){
        case '&.uchu':
            client.channels.cache.get(hutuunochat).send({
                embed: {
                    title: "Today's SpaceDay!!",
                    color: 0x48c7c7,
                    timestamp: new Date(),
                    fields:[
                        {
                            name: '今日は' + year + '年' + mon + '月' + day + '日' + '(' + hour + '時' + min + '分' + ')',
                            value: "**5,10,15,20,25,30**のつく日は経験値が増えるお得な宇宙の日！"
                        },
                        {
                            name: "> __**経験値のブースト**__",
                            value: "**一般プレイヤー：** 2倍\n**課金(寄付)プレイヤー：** 実質4倍"
                        },
                        {
                            name: "> __**課金(寄付)の案内**__",
                            value: "宇宙の日で4倍になるブーストは課金することで獲得できます。\n・詳しい情報は <#748550814905401365>\n・課金コースは <#647766493261463562>\n・課金履歴は <#663706232162615297>"
                        },
                        {
                            name: "> __**課金をする！**__",
                            value: "課金は基本**銀行振り込み**です。\n課金の手続きは <@366612034672132107> まで！"
                        }
                    ]
                    }
                })

            client.user.setActivity(SpaceDay + "｜" + PrefixVer);

            client.users.cache.get(merutan).send({
                embed: {
                    title: devcommand1,
                    color: normalcolor,
                    fields: [
                        {
                            name: "**使用を確認しました。**",
                            value: devcommand2 + "**/uchu**"
                        }
                    ]
                }
            })
            break;
        case '/uchu-setA':
            client.user.setActivity(SpaceDay + "｜" + PrefixVer);

            client.users.cache.get(merutan).send({
                embed: {
                    title: devcommand1,
                    color: normalcolor,
                    fields: [
                        {
                            name: "**使用を確認しました。**",
                            value: devcommand2 + "**/uchu**"
                        }
                    ]
                }
            })
            break;
        case '/maintenance-start':
            client.channels.cache.get(hutuunochat).send({
                embed: {
                    author: {
                        name: Ename,
                        url: Eurl,
                        icon_url: Eil,
                    },
                    title: "メンテナンスが開始されました。",
                    color: 0x48c7c7,
                    timestamp: new Date(),
                    fields: [
                        {
                            name: "**終了時のアナウンスについて：**",
                            value: "終了時は『SpaceServer｜裏』・<#639459581654859799> でお知らせします。"
                        }
                    ]
                }
            })

            client.user.setStatus('idle')


            client.user.setActivity("メンテナンス中.....｜" + SpaceDay + "｜" + PrefixVer);

            client.users.cache.get(merutan).send({
                embed: {
                    title: devcommand1,
                    color: normalcolor,
                    fields: [
                        {
                            name: "**使用を確認しました。**",
                            value: devcommand2 + "**/maintenance-start**"
                        }
                    ]
                }
            })
            break;
        case '/maintenance-end':
            client.channels.cache.get(hutuunochat).send({
                embed: {
                    author: {
                        name: Ename,
                        url: Eurl,
                        icon_url: Eil,
                    },
                    title: "メンテナンスが終了しました。",
                    color: 0x48c7c7,
                    timestamp: new Date(),
                    fields: [
                        {
                            name: "**メンテナンスのアナウンスについて：**",
                            value: "開始時は『SpaceServer｜裏』・<#639459581654859799> でお知らせします。"
                        }
                    ]
                }
            })
            client.user.setStatus('online')

            client.user.setActivity(SpaceDay + "｜" + PrefixVer);


            client.users.cache.get(merutan).send({
                embed: {
                    title: devcommand1,
                    color: normalcolor,
                    fields: [
                        {
                            name: "**使用を確認しました。**",
                            value: devcommand2 + "**/maintenance-end**"
                        }
                    ]
                }
            })
            break;
    }
})

client.on('message', async msg => {
    if(msg.content === "/saigai"){
        msg.channel.send({
            embed: {
                author: {
                    name: "Tool > 災害情報(最新情報)"
                },
                title: "最新の地震情報を表示します。",
                url: "https://www.jma.go.jp/",
                description: "最新情報はTitleをクリックして気象庁のHPから確認してください。\n災害発生直後は当Botのコマンドは利用せず、**テレビなどの信頼できる情報から確保してください。**",
                color: 0x42f569,
                timestamp: new Date()
            }
        })
        function callback(error, response, body){
            if(!error && response.statusCode == 200){
                var res = JSON.parse(body);
                var time = res[0].time;
                var code = res[0].code;
                if(code === 5610){
                    var count = res[0].count;
                    for(var key in res[0].areas){
                        var area = key;
                    }
                    msg.channel.send("```\n集計済み地震感知情報\n集計件数：" + count + "\n感知時刻：" + time + "\n感知エリア：" + area + "\n```");
                }else if(code === 551){
                    var source = res[0].issue.source;
                    var timing = res[0].earthquake.time;
                    var place = res[0].earthquake.hypocenter.name;
                    var depth = res[0].earthquake.hypocenter.depth;
                    var magnitude = res[0].earthquake.hypocenter.magnitude;
                    var m = res[0].earthquake.maxScale;
                    var t = res[0].earthquake.domesticTsunami;
                    if(m === 0){
                        var maxScale = "なし";
                    }else if(m === 10){
                        var maxScale = "震度1";
                    }else if(m === 20){
                        var maxScale = "震度2";
                    }else if(m === 30){
                        var maxScale = "震度3";
                    }else if(m === 40){
                        var maxScale = "震度4";
                    }else if(m === 45){
                        var maxScale = "震度5弱(-5)";
                    }else if(m === 50){
                        var maxScale = "震度5強(+5)";
                    }else if(m === 55){
                        var maxScale = "震度6弱(-6)";
                    }else if(m === 60){
                        var maxScale = "震度6強(+6)";
                    }else if(m === 70){
                        var maxScale = "震度7";
                    }
                    if(t === "None"){
                        var tsunami = "この地震による津波の心配はありません。";
                    }else if(t === "Unknown"){
                        var tsunami = "不明";
                    }else if(t === "Checking"){
                        var tsunami = "調査中";
                    }else if(t === "NonEffective"){
                        var tsunami = "若干の海面変動(被害の心配はなし)";
                    }else if(t === "Watch"){
                        var tsunami = "津波注意報";
                    }else if(t === "Warning"){
                        var tsunami = "津波予報(種類不明)";
                    }
                    msg.channel.send("```発生日時：" + timing + "\n発生場所：" + place + "\n深さ：" + depth + "\nマグニチュード：" + magnitude + "\n最大震度：" + maxScale + "\n津波の有無：" + tsunami + "```");
                }else if(code === 552){
                    var cancel = res[0].cancelled;
                    if(cancel === "true"){
                        msg.channel.send("```津波予報は解除されました。```");
                        return false;
                    }
                    var areaname = res[0].areas[0].name;
                    var grade = res[0].areas[0].grade;
                    msg.channel.send("```津波予報発表区域：" + areaname + "```");
                }
            }
        }
        request.get('https://api.p2pquake.net/v1/human-readable', callback);
    }

    if(msg.content === '/task-kill'){
        if(msg.author.id === merutan){
            var alertmsg = function (){
                process.exit(1);
            };
            msg.channel.send({
                embed: {
                    author: {
                        name: "Developer > 緊急タスクキル",
                    },
                    title: "開発者モード：緊急タスクキル",
                    color: 0xfffb00,
                    fields: [
                        {
                            name: "緊急タスクキルを実行しました。",
                            value: "ターミナルを確認してください。\n再実行は`node index.js`です。"
                        }
                    ]
                }
            });
            setTimeout(alertmsg, 3000);
        }else{
            msg.channel.send({
                embed: {
                    author: {
                        name: "Developer > 緊急タスクキル\nエラー:Cosumo.Developer.Mode.Permission",
                    },
                    title: "開発者モード：緊急タスクキル",
                    description: "エラーによりこの処理をタイムアウトしました。",
                    color: 0xFF0000,
                    timestamp: new Date(),
                    fields: [
                        {
                            name: "**CosumoSystem.Permission.Error-01**",
                            value: "あなたはこのコマンドは実行できません。"
                        },
                        {
                            name: "**実行可能ユーザーID:**",
                            value: "・<@586824421470109716>"
                        }
                    ]
                }
            });
        }
    }
})
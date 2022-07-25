(async () => {
    let process = require('process');
    process.on('uncaughtException', function(err) {
        console.log(`Error!`);
        console.log(err);
    });
    const ShsHSjJSjSJSJSGHkkhdjdmns = ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'STREAM', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'CONNECT', 'SPEAK', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'USE_APPLICATION_COMMANDS', 'REQUEST_TO_SPEAK', 'MANAGE_THREADS', 'USE_PUBLIC_THREADS', 'CREATE_PUBLIC_THREADS', 'USE_PRIVATE_THREADS', 'CREATE_PRIVATE_THREADS', 'USE_EXTERNAL_STICKERS', 'SEND_MESSAGES_IN_THREADS', 'START_EMBEDDED_ACTIVITIES'











    ]
    const events = require('events');
    const {
        exec
    } = require("child_process")
    const S4D_APP_RUN_BUTTON = false
    let Discord = require("discord.js")
    let Database = require("easy-json-database")
    let {
        MessageEmbed,
        MessageButton,
        MessageActionRow,
        Intents,
        Permissions,
        MessageSelectMenu
    } = require("discord.js")
    let logs = require("discord-logs")
    const QRCode = require('qrcode')
    const akinator = require("discord.js-akinator");
    const os = require("os-utils");
    let URL = require('url')
    const ms = require("ms")
    let canvas = require("discord-canvas")
    let https = require("https")
    const {
        weirdToNormalChars
    } = require('weird-to-normal-chars')
    const jimp = require('jimp')
    const S4D_APP_NOBLOX = require("noblox.js");
    const dootabase = require("easy-db-json");
    dootabase.setFile("./database.json");
    const synchronizeSlashCommands = require('@frostzzone/discord-sync-commands');
    let fs = require('fs');
    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const s4d = {
        Discord,
        database: new Database(`./database.json`),
        fire: null,
        joiningMember: null,
        reply: null,
        tokenInvalid: false,
        tokenError: null,
        player: null,
        manager: null,
        Inviter: null,
        message: null,
        notifer: null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };
    s4d.client = new s4d.Discord.Client({
        intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
        partials: ["REACTION", "CHANNEL"]
    });
    s4d.client.on('ready', () => {
        console.log(s4d.client.user.tag + " is alive!")
    })
    logs(s4d.client);
    const discordModals = require('discord-modals');
    discordModals(s4d.client);
    const {
        Modal,
        TextInputComponent,
        showModal
    } = require('discord-modals');
    var Leveling, object_formanswer, giftcards, Total_XP_of_member, giftcardlist, member_unix, Object_USER_ID, LOG, current_level_of_message_author, How_much_XP_has_message_author, author, Object_Economy, economy, channel, cooldown, list_economy, giftcard, random_numb;

    function mathRandomInt(a, b) {
        if (a > b) {
            // Swap a and b to ensure a is smaller.
            var c = a;
            a = b;
            b = c;
        }
        return Math.floor(Math.random() * (b - a + 1) + a);
    }

    function colourRandom() {
        var num = Math.floor(Math.random() * Math.pow(2, 24));
        return '#' + ('00000' + num.toString(16)).substr(-6);
    }


    s4d.player.on("trackStart", async (queue, track) => {
        var embed = new Discord.MessageEmbed()
        embed.setTitle((['now playing ', track.title, '\n', 'author: ', track.author, '\n', 'url: ', track.url, '\n', 'views: ', track.views, '\n', 'duration: ', track.duration].join('')));
        embed.setImage((track.thumbnail));
        (queue.metadata.channel).send({
            embeds: [embed]
        });


    })

    s4d.client.on('ready', async () => {
        if (!s4d.database.has(String('Levels'))) {
            s4d.database.set(String('Levels'), (new Object()));
        }
        Leveling = s4d.database.get(String('Levels'));

    });

    s4d.player.on("queueEnd", async (queue) => {
        (queue.metadata.channel).send({
            content: String('queue finished')
        });

    })

    s4d.player.on("trackAdd", async (queue, track) => {
        (queue.metadata.channel).send({
            content: String((['music ', track.title, 'added to queue'].join('')))
        });

    })

    await s4d.client.login((process.env.token)).catch((e) => {
        s4d.tokenInvalid = true;
        s4d.tokenError = e;
        if (e.toString().toLowerCase().includes("token")) {
            throw new Error("An invalid token was provided!")
        } else {
            throw new Error("Intents are not turned on!")
        }
    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ('Bot is now stopped' == (s4dmessage.content) && ((s4dmessage.author).bot)) {
            s4d.client.user.setPresence({
                status: "offline",
                activities: [{
                    name: 'while shutting down.',
                    type: "LISTENING"
                }]
            });
            s4d.client.destroy();
            console.log('Bickybot is down.');
            return
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (s4dmessage.author.bot) {
            return;
        }
        Leveling = s4d.database.get(String('Levels'));
        if ((Leveling[String((s4dmessage.member.id))]) != null) {
            Total_XP_of_member = (Leveling[String((s4dmessage.member.id))]);
        } else {
            Total_XP_of_member = 0;
        }
        Leveling[String((s4dmessage.member.id))] = (Total_XP_of_member + 1)
        Object_USER_ID = (Leveling[String((s4dmessage.member.id))]);
        console.log(Leveling);
        current_level_of_message_author = Math.round(Object_USER_ID / 100) + 0;
        How_much_XP_has_message_author = 0 + (Object_USER_ID - current_level_of_message_author * 100);
        s4d.database.set(String('Levels'), Leveling);
        if ((Object_USER_ID / 100) % 1 === 0) {
            if ((current_level_of_message_author / 10) % 1 === 0) {
                giftcards = s4d.database.get(String('Giftcards'));
                var JimpImageBlock = 'https://media.discordapp.net/attachments/948270697019494422/994178350660714546/Schermafbeelding_2022-07-06_113057.png?width=903&height=517';
                await jimp.read('https://media.discordapp.net/attachments/948270697019494422/994178350660714546/Schermafbeelding_2022-07-06_113057.png?width=903&height=517', async (err, image) => {
                    if (err) throw err;
                    giftcard = mathRandomInt(1000000, 9999999);
                    giftcards[String(giftcard)] = 10
                    await jimp.loadFont(jimp.FONT_SANS_64_BLACK).then(async font => {
                        await image.print(font, Number(75), Number(400), String(giftcard));
                    });
                    s4d.database.set(String('Giftcards'), giftcards);
                    await image.writeAsync((String(giftcard) + '.png'));
                    author = (s4dmessage.author);
                    await author.send({
                        files: [('./' + String(String(giftcard) + '.png'))],
                        components: [],
                        content: String('here is your giftcard!')
                    });
                    fs.unlinkSync(('./' + String(String(giftcard) + '.png')), async function(err) {
                        if (err) {
                            console.log((err));
                        }

                    });

                });
            }
            s4d.client.channels.cache.get('993178844133605406').send({
                content: 'A member has ranked up! Congratulate him/her in <#974927577712033815>!',
                files: [{
                    attachment: (await new canvas.RankCard().setLevel(current_level_of_message_author).setUsername((s4dmessage.member.user.username)).setAvatar(((s4d.client.users.cache.get(String((s4dmessage.member.id)))).displayAvatarURL({
                        format: "png"
                    }))).setXP("current", How_much_XP_has_message_author).setXP("needed", 100).setAddon("Reputation", false).setAddon("Rank", false).setBackground('https://cdn.discordapp.com/attachments/925814329851412524/993935420188545105/unknown.png').setRankName((((s4dmessage.member).roles.highest).name)).setOpacity("Background-Bar", 100).toAttachment()).toBuffer()
                }]
            });
        } else if (((s4dmessage.content) || '').startsWith('!rank' || '')) {
            channel = (s4dmessage.channel);
            channel.send({
                content: 'Here is your rank!',
                files: [{
                    attachment: (await new canvas.RankCard().setBackground('https://cdn.discordapp.com/attachments/925814329851412524/993935420188545105/unknown.png').setLevel(current_level_of_message_author).setUsername((s4dmessage.member.user.username)).setAvatar(((s4d.client.users.cache.get(String((s4dmessage.member.id)))).displayAvatarURL({
                        format: "png"
                    }))).setXP("current", How_much_XP_has_message_author).setXP("needed", 100).setAddon("Reputation", false).setAddon("Rank", false).setOpacity("Background-Bar", 100).setRankName((weirdToNormalChars((((s4dmessage.member).roles.highest).name)))).toAttachment()).toBuffer()
                }]
            });
            console.log((weirdToNormalChars((((s4dmessage.member).roles.highest).name))));
        } else if ((((s4dmessage.content) || '').startsWith('!reset' || '')) && (s4dmessage.member).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
            let Comfirmation = new MessageButton()
            Comfirmation.setLabel('Are you sure you want to do this?');
            Comfirmation.setStyle("DANGER");
            Comfirmation.setCustomId('sjdqq');
            s4dmessage.channel.send({
                content: String('WARNING: '),
                components: [new MessageActionRow().addComponents(Comfirmation)],

                embeds: [new MessageEmbed()
                    .setTitle(String("Are you sure?"))
                    .setDescription(String('This will reset everything'))
                ]

            });
        } else if (((s4dmessage.content) || '').startsWith('!ping' || '')) {

            os.cpuUsage(async function(v) {
                var obj = v * 100
                s4dmessage.channel.send({
                    content: String((String(s4d.client.ws.ping)))
                });

            });
        } else if (((s4dmessage.content) || '').startsWith('!bal' || '')) {
            author = (s4dmessage.author);
            Object_Economy = s4d.database.get(String('Economy'));
            s4dmessage.channel.send({
                content: String(('You have currently: ' + String(Object_Economy[String((author.tag))])))
            });
        } else if (((s4dmessage.content) || '').startsWith('!aki' || '')) {
            (s4dmessage.channel).send({
                embeds: [new MessageEmbed()
                    .setTitle(String('Akinator.'))
                    .setDescription(String('Akinator is a function that you can get by paying 1 coin each time. If you wish to continue then type start. Else type anything.'))
                ]
            }).then(() => {
                (s4dmessage.channel).awaitMessages({
                    filter: (m) => m.author.id === (s4dmessage.member).id,
                    time: (5 * 60 * 1000),
                    max: 1
                }).then(async (collected) => {
                    s4d.reply = collected.first().content;
                    s4d.message = collected.first();
                    Object_Economy = s4d.database.get(String('Economy'));
                    list_economy = (Object.getOwnPropertyNames(Object_Economy));
                    if (list_economy.includes((s4dmessage.author.tag))) {
                        economy = (Object_Economy[String((s4dmessage.author.tag))]);
                    } else {
                        economy = 0;
                    }
                    if (((s4d.reply) || '').startsWith('start' || '')) {
                        if (1 < economy) {
                            economy = (typeof economy === 'number' ? economy : 0) + -1;
                            Object_Economy[String((s4dmessage.author.tag))] = economy
                            s4d.database.set(String('Economy'), Object_Economy);
                            akinator(s4dmessage, {
                                language: "en",
                                childMode: true,
                                gameType: ('character'),
                                useButtons: true
                            })
                        } else {
                            s4dmessage.channel.send({
                                content: String('You do not have enough coins.')
                            });
                        }
                    } else {
                        s4dmessage.channel.send({
                            content: String('Canceled.')
                        });
                    }

                    s4d.reply = null;
                }).catch(async (e) => {
                    console.error(e);
                    s4dmessage.channel.send({
                        content: String('Canceled.')
                    });
                });
            })
        } else if (((s4dmessage.content) || '').startsWith('!work' || '')) {
            cooldown = (new Object());
            Object_Economy = s4d.database.get(String('Economy'));
            list_economy = (Object.getOwnPropertyNames(Object_Economy));
            if (list_economy.includes((s4dmessage.author.tag))) {
                economy = (Object_Economy[String((s4dmessage.author.tag))]);
            } else {
                economy = 0;
            }
            random_numb = mathRandomInt(1e-13, 1);
            if (random_numb > 0.001) {
                random_numb = mathRandomInt(1e-13, 1);
                economy = (typeof economy === 'number' ? economy : 0) + random_numb;
                s4dmessage.channel.send({
                    content: String((['You made ', random_numb, ' <:bickycoin:996390771785728041>'].join('')))
                });
            } else if (economy > random_numb) {
                economy = (typeof economy === 'number' ? economy : 0) + -0.001;
                s4dmessage.channel.send({
                    content: String(('Error: you messed something up and got fined 1' + '<:bickycoin:996390771785728041>.'))
                });
            } else {
                s4dmessage.channel.send({
                    content: String('Error, you messed up but you do not have any money.')
                });
            }
            Object_Economy[String((s4dmessage.author.tag))] = economy
            s4d.database.set(String('Economy'), Object_Economy);
        } else if (((s4dmessage.content) || '').startsWith('!qr ' || '')) {
            try {
                QRCode.toString((String((s4dmessage.content)).replaceAll('!qr ', String(''))), {
                    type: "image"
                }, async (err, QR) => {
                    if (err) return console.warn('There was an error while creating the QR code')
                    s4dmessage.channel.send({
                        embeds: [new MessageEmbed()
                            .setTitle(String('__**QR RESULT:**__'))
                            .setDescription(String((QR)))
                        ]
                    });

                })
            } catch (err) {
                console.log((err));
                s4dmessage.channel.send({
                    content: String((err))
                });

            };
        }

    });

    s4d.client.on('modalSubmit', async (i) => {
        let member = i.guild.members.cache.get(i.member.user.id)
        dootabase.setFile("./" + 'forms' + ".json");
        object_formanswer = (new Object());
        object_formanswer[String('test1')] = ((i.getTextInputValue('test1')))
        object_formanswer[String('test2')] = ((i.getTextInputValue('test2')))
        object_formanswer[String('author')] = ((i.member.user).tag)
        dootabase.set(String((String(mathRandomInt(1, 199999999)))), object_formanswer);
        author = (s4d.client.users.cache.get(String('767041966549499925')));
        author.send({
            content: String((['```json', '\n', JSON.stringify(object_formanswer), '```'].join('')))
        });
        await i.reply({
            content: String('Thank you for applying!'),
            ephemeral: false
        })
    });

    s4d.client.on('ready', async () => {
        if (S4D_APP_RUN_BUTTON) {
            s4d.client.user.setPresence({
                status: "idle",
                activities: [{
                    name: 'in test mode.',
                    type: "PLAYING"
                }]
            });
        } else {
            s4d.client.user.setPresence({
                status: "idle",
                activities: [{
                    name: 'with Emiles brain!',
                    type: "PLAYING"
                }]
            });
        }

    });

    const http = require('http');
    const server = http.createServer((req, res) => {
        res.writeHead(200);
        res.end('Potato');
    });
    server.listen(3000);

    s4d.client.on('interactionCreate', async (i) => {
        let member = i.guild.members.cache.get(i.member.user.id)
        let interaction = i;
        if (!(i.isButton())) return;
        if (((i.member)).permissions.has(Permissions.FLAGS.ADMINISTRATOR) && ((i.customId)) == 'sjdqq') {
            Leveling = s4d.database.get(String('Levels'));
            ((i.channel)).send({
                content: String('Preparing logs.')
            });
            LOG = (new Object());
            LOG[String('author')] = (((i.member.user)).tag)
            LOG[String('levels')] = Leveling
            dootabase.setFile("./" + 'logs' + ".json");
            dootabase.set(String(([(new Date().getSeconds()), '_', (new Date().getMinutes()), '_', (new Date().getHours()), '_', (new Date().getDate()), '_', (new Date().getMonth()), '_', (new Date().getFullYear())].join(''))), LOG);
            ((i.channel)).send({
                content: String('Log\'s done!')
            });
            ((i.channel)).send({
                content: String('Reseting stats.')
            });
            s4d.database.set(String('Levels'), (new Object()));
            ((i.channel)).send({
                content: String('Reseting stats done!')
            });
            ((i.channel)).send({
                content: String('Restarting bot!')
            });
            s4d.client.destroy();
            await s4d.client.login('OTgyOTU2NjUyODAwMTQ3NDc2.Gb4BDj.ZUgXy2OVh5SNI7kpabOXarYU4i1lmC1PSkXBLI').catch((e) => {
                s4d.tokenInvalid = true;
                s4d.tokenError = e;
                if (e.toString().toLowerCase().includes("token")) {
                    throw new Error("An invalid token was provided!")
                } else {
                    throw new Error("Intents are not turned on!")
                }
            });
        }

    });

    s4d.client.on('interactionCreate', async (interaction) => {
        let member = interaction.guild.members.cache.get(interaction.member.user.id)
        if ((interaction.commandName) == 'setxp') {
            Leveling[String(((interaction.member.user).id))] = (interaction.options.getInteger('xp'))
            s4d.database.set(String('Levels'), Leveling);
            await interaction.reply({
                content: 'Done!',
                ephemeral: false || false,
                components: []
            });
        } else if ((interaction.commandName) == 'claim') {
            giftcards = s4d.database.get(String('Giftcards'));
            giftcardlist = (Object.getOwnPropertyNames(giftcards));
            console.log(giftcardlist);
            if (giftcardlist.includes((String(interaction.options.getInteger('number'))))) {
                if ((giftcards[String((String(interaction.options.getInteger('number'))))]) != 0) {
                    Object_Economy = s4d.database.get(String('Economy'));
                    if ((Object_Economy[String(((interaction.member.user).tag))]) != null) {
                        economy = (Object_Economy[String(((interaction.member.user).tag))]);
                    } else {
                        economy = 0;
                    }
                    Object_Economy[String(((interaction.member.user).tag))] = ((giftcards[String((String(interaction.options.getInteger('number'))))]) + economy)
                    giftcards[String((String(interaction.options.getInteger('number'))))] = 0
                    s4d.database.set(String('Giftcards'), giftcards);
                    s4d.database.set(String('Economy'), Object_Economy);
                    await interaction.reply({
                        content: 'Done!',
                        ephemeral: false || false,
                        components: []
                    });
                } else {
                    await interaction.reply({
                        content: 'Giftcard has been used.',
                        ephemeral: false || false,
                        components: []
                    });
                }
            } else {
                await interaction.reply({
                    content: 'Giftcard not found.',
                    ephemeral: false || false,
                    components: []
                });
            }
        } else if ((interaction.commandName) == 'apply') {
            let testing = new Modal()
                .setCustomId('e')
                .setTitle('Tester')
                .addComponents(
                    new TextInputComponent()
                    .setCustomId('test1')
                    .setLabel('Why should we pick you?')
                    .setStyle(('LONG'))
                    .setMinLength()
                    .setMaxLength()
                    .setRequired(true)
                    .setPlaceholder('Do not say why not.'),
                    new TextInputComponent()
                    .setCustomId('test2')
                    .setLabel('How active are you?')
                    .setStyle(('LONG'))
                    .setMinLength()
                    .setMaxLength()
                    .setRequired(true)
                    .setPlaceholder('If you say yes then you mean that you are always active.'),
                );
            showModal(testing, {
                client: s4d.client,
                interaction: interaction
            })
        } else if ((interaction.commandName) == 'startsession') {
            if ('shift' == (interaction.options.getString('type'))) {
                member_unix = colourRandom();
                s4d.client.channels.cache.get('974967498917179442').send({
                    embeds: [new MessageEmbed()
                        .setTitle(String('A session is commencing.'))
                        .setColor(String((colourRandom())))
                        .setDescription(String((String(`A new session is commencing. When you have joined, please STS at the place your host selected. Hardworking staff will get noticed and/or promoted.

            URL: `) + String(interaction.options.getString('url')))))
                    ],
                    content: "<@&974985607262658610>"
                });
            } else {
                s4d.client.channels.cache.get('974967498917179442').send({
                    embeds: [new MessageEmbed()
                        .setTitle(String('A session is commencing.'))
                        .setDescription(String((String(`A new training is commencing. Awaiting training's can join in and get trained for any role.

            [Staff notice: MR+ is allowed to assist or lead in the training.]

            URL: `) + String(interaction.options.getString('url')))))
                    ],
                    content: "<@&974985607262658610>"
                });
            }
            await interaction.reply({
                content: 'Done.',
                ephemeral: true || false,
                components: []
            });
        } else if ((interaction.commandName) == 'concludesession') {
            S4D_APP_NOBLOX.setCookie(String((process.env.roblox_cookie))).then(async function(roblox_currentUser) {

            })
            s4d.client.channels.cache.get('974967498917179442').messages.fetch(s4d.database.get(String('latest shift message'))).then(async (s4dmessage) => {
                (s4dmessage).delete()

            });
            await interaction.reply({
                content: 'Done.',
                ephemeral: true || false,
                components: []
            });
        }

    });

    synchronizeSlashCommands(s4d.client, [{
        name: 'setxp',
        description: 'Sets XP of user. Only works if you are admin.',
        options: [{
            type: 4,
            name: 'xp',
            description: 'How much XP will the user get?',
            required: true,
            choices: [

            ]
        }, ]
    }, {
        name: 'claim',
        description: 'Claim your giftcard!',
        options: [{
            type: 4,
            name: 'number',
            description: 'What is your giftcard number?',
            required: true,
            choices: [

            ]
        }, ]
    }, {
        name: 'apply',
        description: 'Apply for the current application.',
        options: [

        ]
    }, {
        name: 'startsession',
        description: 'Start a session. (HR+)',
        options: [{
            type: 3,
            name: 'url',
            description: 'The URL of the session.',
            required: true,
            choices: [

            ]
        }, {
            type: 3,
            name: 'type',
            description: 'The type of the session.',
            required: true,
            choices: [{
                name: String('Shift.'),
                value: String('shift')
            }, {
                name: String('Training'),
                value: String('training')
            }, ]
        }, ]
    }, {
        name: 'concludesession',
        description: 'Conclude a session.',
        options: [

        ]
    }, ], {
        debug: false,

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (((s4dmessage).embeds != null && (s4dmessage).embeds.length > 0) && (s4dmessage.author) == (s4d.client.users.cache.get(String('982956652800147476')))) {
            if ('A session is commencing.' == (String((s4dmessage).embeds[0].title))) {
                s4d.database.set(String('latest shift message'), (s4dmessage.id));
            }
        }

    });

    return s4d
})();

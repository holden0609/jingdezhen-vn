/* global monogatari */

// 自訂繁體中文的 UI 介面文字
monogatari.translation ('繁體中文', {
    'Start': '開啟傳奇',
    'Load': '尋回記憶',
    'Settings': '機關設置',
    'Credits': '匠人名錄'
});

// 補上這段元數據，否則引擎不認得 '繁體中文'
monogatari.languageMetadata ('繁體中文', {
    code: 'zh-TW',
    icon: '🇹🇼'
});

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});

// 定義遊戲變數儲存區
monogatari.storage ({
    player_name: '',
    player_gender: 'female', // 預設為女性形象，稍後會由玩家自選改寫
    kiln_result: ''
});

// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// 定義音效（請確保檔案放在 assets/sounds/ 資料夾中）
monogatari.assets ('sounds', {
    'shao_success': 'porcelain_success.mp3',
    'shao_fail': 'porcelain_fail.mp3'
});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
    'background_pottery_shop': 'b_001.png',
    'background_imperial_kiln': 'b_002.png',
    'background_kiln_interior': 'b_003.png',
    'black': '#000000'
});

// Define the Characters
monogatari.characters ({
    'y': {
        name: '{{player_name}}',
        color: '#5bc0de',
        sprites: {
            'male_normal': 'boy_001.png',
            'male_happy': 'boy_003.png',
            'male_shocked': 'boy_002.png',
            
            'female_normal': 'g_001.png',
            'female_happy': 'g_003.png',
            'female_shocked': 'g_002.png'
        }
    },
    'm': {
        name: '大師傅',
        color: '#f0ad4e',
        sprites: { 
            'normal': 'c_001.png',
            'happy': 'c_002.png',
            'shocked': 'c_003.png'
         }
    },
    's': {
        name: '薩利姆 (西域商人)',
        color: '#5cb85c',
        sprites: { 'normal': 's_001.png' }
    }
});

monogatari.script ({
    // ===== 第一幕：開端與形象選擇 =====
    'Start': [
        'show scene black with fadeIn', 
        'centered 明朝，景德鎮。昌江之畔，窯煙裊裊。',
        'centered 你是一名剛入窯場的年輕學徒，今天，是決定你命運的開端。',
        'centered 遊戲開始前，請選擇你在景德鎮修業的角色形象：',
        
        {
            'Choice': {
                'Dialog': '請選擇你的角色形象：',
                'Select_Male': {
                    'Text': '少年工匠 (男性形象)',
                    'Do': () => {
                        monogatari.storage({ player_gender: 'male' });
                        return true; 
                    }
                },
                'Select_Female': {
                    'Text': '少女工匠 (女性形象)',
                    'Do': () => {
                        monogatari.storage({ player_gender: 'female' });
                        return true; 
                    }
                }
            }
        },
        
        'y 很好，這就是我在景德鎮的新身分了！',
        'jump Ask_Name'
    ],

    'Ask_Name': [
        {
            'Input': {
                'Text': '年輕人，告訴大師傅你叫什麼名字？',
                'Validation': function (input) {
                    return input.trim ().length > 0;
                },
                'Save': function (input) {
                    monogatari.storage ({ player_name: input });
                    return true;
                },
                'Warning': '你必須輸入一個名字！'
            }
        },
        'jump Story_Start'
    ],

    'Story_Start': [
        'show scene background_pottery_shop with fadeIn', 

        // 大師傅登場
        () => {
            monogatari.run ('show character m normal at left');
            setTimeout (() => {
                const masterSprite = document.querySelector ('[data-character="m"]');
                if (masterSprite) {
                    masterSprite.style.position = 'absolute'; masterSprite.style.left = '0%'; masterSprite.style.bottom = '0px';      
                    masterSprite.style.height = '110vh'; masterSprite.style.width = 'auto'; masterSprite.style.objectFit = 'contain'; 
                    masterSprite.style.overflow = 'visible'; masterSprite.style.transformOrigin = 'bottom left'; masterSprite.style.zIndex = '10';       
                }
            }, 50);
            return true;
        },

        // 主角登場
        () => {
            const currentGender = monogatari.storage('player_gender'); 
            monogatari.run (`show character y ${currentGender}_normal at right`);
            setTimeout (() => {
                const playerSprite = document.querySelector ('[data-character="y"]');
                if (playerSprite) {
                    playerSprite.style.position = 'absolute'; playerSprite.style.right = '0%'; playerSprite.style.bottom = '0px';        
                    playerSprite.style.height = '110vh'; playerSprite.style.width = 'auto'; playerSprite.style.objectFit = 'contain'; 
                    playerSprite.style.overflow = 'visible'; playerSprite.style.transformOrigin = 'bottom right'; playerSprite.style.zIndex = '10';
                }
            }, 50);
            return true;
        },

        'm 孩子，你既然來到了景德鎮，就要知道這裡的瓷器能冠絕天下，全在一個「變」字。',
        'm 今日是你開展考驗的第一步。若要燒製出耐高溫、不變形的精美瓷器，你該去尋哪兩種原料？',

        {
            'Choice': {
                'Dialog': 'm 告訴我，完美瓷器的骨肉是由什麼組成的？',
                'Option1': { 'Text': '純用普通的稻田黏土', 'Do': 'jump choice_wrong' },
                'Option2': { 'Text': '高嶺土 與 瓷石（二元配方）', 'Do': 'jump choice_right' }
            }
        }
    ],

    'choice_wrong': [
        'm 糊塗！單用普通黏土，進了千度高窯只會塌成一攤廢泥！',
        'm 記住了，無「瓷石」不立其體，無「高嶺土」不挺其骨。去重新想清楚！',
        'jump Start' 
    ],

    'choice_right': [
        'm 很好！瓷石引領釉色與塑形，高嶺土耐得住高溫。這便是傳承至今的「二元配方」。',
        'y 弟子明白了！有了骨肉，接下來便是為瓷器披上青翠的衣裳。',
        'm 記性不錯。去吧，去御窯廠那邊瞧瞧，今天那裡正熱鬧，有從西域來的稀罕物。',
        'jump Scene_Two' 
    ],

    // ===== 第二幕：御窯廠的藍色秘密 =====
    'Scene_Two': [
        'hide character m with fadeOut',
        'show scene background_imperial_kiln with fadeIn',
        'centered 景德鎮御窯廠。這裡專為皇室燒製瓷器，此時正聚集了許多來自各國的商賈。',
        'y 哇！這裡就是御窯廠……那些擺在桌上的瓷器，上面的藍色花紋好深邃，簡直像星空一樣。',
        'm 突然，窯爐深處傳來一聲清脆的裂響！',
        
        () => {
            const gender = monogatari.storage ('player_gender'); 
            monogatari.run (`show character y ${gender}_shocked at left`); 
            setTimeout (() => {
                const playerSprite = document.querySelector ('[data-character="y"]');
                if (playerSprite) {
                    playerSprite.style.position = 'absolute'; playerSprite.style.left = '0%'; playerSprite.style.bottom = '0px';
                    playerSprite.style.height = '110vh'; playerSprite.style.width = 'auto'; playerSprite.style.objectFit = 'contain';
                    playerSprite.style.overflow = 'visible'; playerSprite.style.transformOrigin = 'bottom right'; playerSprite.style.zIndex = '10';
                }
            }, 50);
            return true;
        },
        
        'y 糟糕！難道是溫度升得太急，胚體承受不住開裂了？！',
        
        () => {
            monogatari.run ('show character s normal at right');
            setTimeout (() => {
                const salimSprite = document.querySelector ('[data-character="s"]');
                if (salimSprite) {
                    salimSprite.style.position = 'absolute'; salimSprite.style.right = '0%'; salimSprite.style.bottom = '0px';        
                    salimSprite.style.height = '110vh'; salimSprite.style.width = 'auto'; salimSprite.style.objectFit = 'contain'; 
                    salimSprite.style.overflow = 'visible'; salimSprite.style.transformOrigin = 'bottom right'; salimSprite.style.zIndex = '10';         
                }
            }, 50);
            return true;
        },

        's 喔！年輕的瓷器學徒，你也在欣賞這完美的「青花瓷」嗎？',
        'y 您是……從西域來的商人？',
        's 沒錯，我叫薩利姆。我們商隊橫渡沙漠、乘風破浪，就是為了將這些寶物帶回西方。',
        's 你知道嗎？這漂亮的藍色，用的可不是你們中原當地的泥料，而是我們家鄉帶來的神祕寶石！',
        
        {
            'Choice': {
                'Dialog': 's 哈哈，博學的年輕人，你知道這種讓青花瓷發出濃郁靛藍、帶有鐵鏽斑的進口青料，叫作什麼名字嗎？',
                'Option1': { 'Text': '平等青（明代中期國產青料）', 'Do': 'jump choice_blue_wrong' },
                'Option2': { 'Text': '蘇麻離青（中東進口鈷料）', 'Do': 'jump choice_blue_right' }
            }
        }
    ],

    'choice_blue_wrong': [
        's 噢，不對不對！平等青雖然呈色文雅，但沒辦法燒出這種濃烈、帶有墨斑的霸氣藍色。',
        's 再猜一次！這可是透過鄭和下西洋才大量帶回中國的無價之寶！',
        'jump Scene_Two' 
    ],

    'choice_blue_right': [
        's 啪啪啪（鼓掌）！太厲害了！就是「蘇麻離青」！',
        's 這種青料富含鐵質，在窯爐裡燒製後，會在花紋邊緣形成獨特的「暈散」與「鐵鏽斑」，我們西方的貴族看了都為之瘋狂！',
        'y 原來如此……這美麗的藍色，居然是中原工藝與西域原料「中西融合」的奇蹟。',
        's 沒錯！原料和花紋準備好了，接下來，就看你們景德鎮最核心的魔法——「火候」了。',
        'y 謝謝你，薩利姆！我感覺到我的完美瓷器已經快要誕生了！',
        'jump Scene_Three' 
    ],

    // ===== 第三幕：掌控火候與完美開窯（動態小遊戲版） =====
    'Scene_Three': [
        'show scene black with fadeIn',
        'centered 第二幕【御窯廠的藍色秘密】完成！',
        'centered 接下來，主角將回到窯房，進行最後的難關：【掌控火候與完美開窯】……',
        
        'show scene background_kiln_interior with fadeIn',
        'centered 鎮窯內部，窯爐前。此時，窯爐已封好爐門，熱浪陣陣。大師傅再次登場。',
        
        () => {
            monogatari.run ('show character m normal at left');
            setTimeout (() => {
                const masterSprite = document.querySelector ('[data-character="m"]');
                if (masterSprite) {
                    masterSprite.style.position = 'absolute'; masterSprite.style.left = '0%'; masterSprite.style.bottom = '0px';
                    masterSprite.style.height = '110vh'; masterSprite.style.width = 'auto'; masterSprite.style.objectFit = 'contain'; 
                    masterSprite.style.overflow = 'visible'; masterSprite.style.transformOrigin = 'bottom left'; masterSprite.style.zIndex = '10';
                }
            }, 50);
            return true;
        },

        'm 哈哈哈！終於到了最關鍵的「投柴燒窯」階段了！',
        'y 這次使用的是極為珍貴的「蘇麻離青」釉料，火候必須分毫不差。如果溫度不夠，青花發色會發暗；溫度太高，釉面就會流淌崩壞！',
        'm 聽好了！當火候指針進入中央的「金色節點」時，立刻按下控溫機關！',

        // 🎮 核心小遊戲代碼注入
        function () {
            const gameOverlay = document.createElement('div');
            gameOverlay.id = 'kiln-game-overlay';
            gameOverlay.innerHTML = `
                <div class="game-box">
                    <h3>🔥 御窯火候控制 🔥</h3>
                    <p>在指標抵達【黃金核心區】時按下按鈕！</p>
                    <div class="bar-container">
                        <div class="target-zone"></div>
                        <div id="game-pointer"></div>
                    </div>
                    <button id="fire-btn">🎛️ 鎖定火候！</button>
                </div>
            `;
            document.body.appendChild(gameOverlay);

            const pointer = document.getElementById('game-pointer');
            const btn = document.getElementById('fire-btn');
            let position = 0;
            let direction = 1;
            
            // 💡 修正點 1：降低移動速度。數值越小越慢，1.2 ~ 1.5 是比較人性化的反應時間
            const speed = 1.2; 

            function animatePointer() {
                if (!document.getElementById('kiln-game-overlay')) return; 
                position += speed * direction;
                if (position >= 100 || position <= 0) {
                    direction *= -1; 
                }
                pointer.style.left = position + '%';
                requestAnimationFrame(animatePointer);
            }
            requestAnimationFrame(animatePointer);

            btn.addEventListener('click', () => {
                if (position >= 42 && position <= 58) {
                    // 🎉 成功判定
                    // 💡 修正點 2：改用原生 HTML5 Audio 播放，確保 100% 能夠出聲
                    const soundSuccess = new Audio('assets/sounds/porcelain_success.mp3');
                    soundSuccess.play().catch(e => console.log("音效播放失敗，請檢查路徑是否有該檔案:", e));

                    gameOverlay.classList.add('game-success-flash'); 
                    btn.disabled = true;
                    btn.innerText = "✨ 燒製成功！✨";
                    monogatari.storage({ kiln_result: 'perfect' });

                    setTimeout(() => {
                        gameOverlay.remove(); 
                        monogatari.next(); 
                    }, 1500);

                } else {
                    // 💥 失敗判定
                    // 💡 修正點 2：失敗音效同樣改用原生 HTML5 Audio
                    const soundFail = new Audio('assets/sounds/porcelain_fail.mp3');
                    soundFail.play().catch(e => console.log("音效播放失敗，請檢查路徑是否有該檔案:", e));

                    gameOverlay.classList.add('game-fail-shake'); 
                    btn.disabled = true;
                    btn.innerText = "💥 溫度失控！瓷器裂開了！💥";
                    monogatari.storage({ kiln_result: 'failed' });

                    setTimeout(() => {
                        gameOverlay.remove();
                        monogatari.next(); 
                    }, 1800);
                }
            });

            return false; // 讓故事先暫停，等待玩家點擊小遊戲
        },

        // 邏輯分歧檢查點
        function() {
            const result = monogatari.storage('kiln_result');
            if (result === 'perfect') {
                monogatari.run('jump Act3_Success');
            } else {
                monogatari.run('jump Act3_Fail');
            }
            return true;
        }
    ],

    // 🏆 結局 A：完美燒製成功
    'Act3_Success': [
        'centered 隨著窯門緩緩開啟，那尊青花瓷盤胎質細品，釉色濃翠，宛如大洋深處凝聚的邃藍。',
        'y 成功了！這就是青花瓷的極致美感！這批瓷器絕對能在滿剌加與西洋各國換得最上等的香料！',
        'show scene background_pottery_shop with fadeIn', 
        'show character m happy at left', 
        () => {
            setTimeout (() => {
                const masterSprite = document.querySelector ('[data-character="m"]');
                if (masterSprite) {
                    masterSprite.style.position = 'absolute'; masterSprite.style.left = '0%'; masterSprite.style.bottom = '0px';
                    masterSprite.style.height = '110vh'; masterSprite.style.width = 'auto'; masterSprite.style.objectFit = 'contain';
                    masterSprite.style.overflow = 'visible'; masterSprite.style.transformOrigin = 'bottom left'; masterSprite.style.zIndex = '10';
                }
            }, 50);
            return true;
        },
        'm 哈哈哈！快看啊！匣缽開了！',
        
        () => {
            const gender = monogatari.storage ('player_gender');
            monogatari.run (`show character y ${gender}_happy at right`); 
            setTimeout (() => {
                const playerSprite = document.querySelector ('[data-character="y"]');
                if (playerSprite) {
                    playerSprite.style.position = 'absolute'; playerSprite.style.right = '0%'; playerSprite.style.bottom = '0px';
                    playerSprite.style.height = '110vh'; playerSprite.style.width = 'auto'; playerSprite.style.objectFit = 'contain';
                    playerSprite.style.overflow = 'visible'; playerSprite.style.transformOrigin = 'bottom right'; playerSprite.style.zIndex = '10';
                }
            }, 50);
            return true;
        },
        'y 哇……成功了！好美……',
        'centered 當匣缽蓋揭開的那一瞬，一道內斂而深邃的寶光映滿了整個窯房。',
        'centered 高嶺土與瓷石完美化合，胎骨潔白細膩如玉；釉下的蘇麻離青在高溫還原下，綻放出如璀璨星空般的靛藍色，邊緣隱隱帶著墨斑與鐵鏽暈散。',
        'm 妙啊！骨肉端正，衣冠華美！這尊青花瓷器，堪稱御窯級的神品！',
        'm 從今天起，你不再是個小學徒了。景德鎮的下一代傳奇大師傅，非你莫屬！',
        'show scene black with fadeIn',
        'centered 【景德鎮・大工匠傳奇】— 完 —',
        'end' 
    ],

    // ❌ 結局 B：燒裂失敗（體貼重來）
    'Act3_Fail': [
        'centered 伴隨著一聲清脆的裂響，窯內的溫度計指針徹底爆表，滾燙的熱浪中夾雜著瓷器崩碎的悲鳴。',
        'm 唉……火候終究是急躁了一些，整窯的胚體全都成了廢瓷碎片……',
        'm 別氣餒，匠人精神就是從失敗中站起來，我們重新清理窯爐，再來一次！',
        'jump Scene_Three' // 💡 修正點：失敗後重新挑戰第三幕小遊戲
    ]
});
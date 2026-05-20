/* global monogatari */

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
    player_gender: 'female' // 預設為女性形象，稍後會由玩家自選改寫
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

// Define the sounds used in the game.
monogatari.assets ('sounds', {

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
    // 遊戲從 Start 開始
    'Start': [
        'show scene black with fadeIn', // 黑幕
        'centered 明朝，景德鎮。昌江之畔，窯煙裊裊。',
        'centered 你是一名剛入窯場的年輕學徒，今天，是決定你命運的開端。',
        
        'centered 遊戲開始前，請選擇你在景德鎮修業的角色形象：',
        
        // 🟢 性別形象選擇支
        {
            'Choice': {
                'Dialog': '請選擇你的角色形象：',
                'Select_Male': {
                    'Text': '少年工匠 (男性形象)',
                    'Do': () => {
                        // 將變數改寫為 male
                        monogatari.storage({ player_gender: 'male' });
                        return true; // 繼續往下執行劇本
                    }
                },
                'Select_Female': {
                    'Text': '少女工匠 (女性形象)',
                    'Do': () => {
                        // 將變數改寫為 female
                        monogatari.storage({ player_gender: 'female' });
                        return true; 
                    }
                }
            }
        },
        
        'y 很好，這就是我在景德鎮的新身分了！',
        'jump Ask_Name'
    ], // 🔴 修正點 1：補上右中括號與逗號，完美閉合 Start 陣列

    // 🟢 詢問名字
    'Ask_Name': [
        {
            'Input': {
                'Text': '年輕人，告訴大師傅你叫什麼名字？',
                'Validation': function (input) {
                    return input.trim ().length > 0;
                },
                'Save': function (input) {
                    // 🔴 修正點 2：直接將輸入存入扁平化的 player_name，安全絕不崩潰
                    monogatari.storage ({
                        player_name: input
                    });
                    return true;
                },
                'Warning': '你必須輸入一個名字！'
            }
        },
        'jump Story_Start' // 名字存好後，正式進入故事
    ],

    // 🟢 正式進入故事劇情
    'Story_Start': [
        // 顯示古風窯鋪背景
        'show scene background_pottery_shop with fadeIn', 

        // 大師傅在左側登場（防裁切控制）
        () => {
            monogatari.run ('show character m normal at left');
            setTimeout (() => {
                const masterSprite = document.querySelector ('[data-character="m"]');
                if (masterSprite) {
                    masterSprite.style.position = 'absolute';
                    masterSprite.style.left = '0%';         
                    masterSprite.style.bottom = '0px';      
                    masterSprite.style.height = '110vh';    
                    masterSprite.style.width = 'auto';      
                    masterSprite.style.objectFit = 'contain'; 
                    masterSprite.style.overflow = 'visible';
                    masterSprite.style.transformOrigin = 'bottom left';
                    masterSprite.style.zIndex = '10';       
                }
            }, 50);
            return true;
        },

        // 🔴 修正點 3：動態呼叫主角立繪（自動依玩家選的性別在右側亮麗登場，並維持 110vh 同等比例）
        () => {
            const currentGender = monogatari.storage('player_gender'); 
            monogatari.run (`show character y ${currentGender}_normal at right`);
            setTimeout (() => {
                const playerSprite = document.querySelector ('[data-character="y"]');
                if (playerSprite) {
                    playerSprite.style.position = 'absolute';
                    playerSprite.style.right = '0%';         
                    playerSprite.style.bottom = '0px';        
                    playerSprite.style.height = '110vh'; // 與大師傅等高比例
                    playerSprite.style.width = 'auto';        
                    playerSprite.style.objectFit = 'contain'; 
                    playerSprite.style.overflow = 'visible';
                    playerSprite.style.transformOrigin = 'bottom right';
                    playerSprite.style.zIndex = '10';
                }
            }, 50);
            return true;
        },

        'm 孩子，你既然來到了景德鎮，就要知道這裡的瓷器能冠絕天下，全在一個「變」字。',
        'm 今日是你開展考驗的第一步。若要燒製出耐高溫、不變形的精美瓷器，你該去尋哪兩種原料？',

        // 跳出二元配方的選擇題
        {
            'Choice': {
                'Dialog': 'm 告訴我，完美瓷器的骨肉是由什麼組成的？',
                'Option1': {
                    'Text': '純用普通的稻田黏土',
                    'Do': 'jump choice_wrong'
                },
                'Option2': {
                    'Text': '高嶺土 與 瓷石（二元配方）',
                    'Do': 'jump choice_right'
                }
            }
        }
    ],

    // 選錯的分支
    'choice_wrong': [
        'm 糊塗！單用普通黏土，進了千度高窯只會塌成一攤廢泥！',
        'm 記住了，無「瓷石」不立其體，無「高嶺土」不挺其骨。去重新想清楚！',
        'jump Start' 
    ],

    // 選對的分支
    'choice_right': [
        'm 很好！瓷石引領釉色與塑形，高嶺土耐得住高溫。這便是傳承至今的「二元配方」。',
        'y 弟子明白了！有了骨肉，接下來便是為瓷器披上青翠的衣裳。',
        'm 記性不錯。去吧，去御窯廠那邊瞧瞧，今天那裡正熱鬧，有從西域來的稀罕物。',
        'jump Scene_Two' 
    ],

    // 第二幕暫存錨點
    'Scene_Two': [
        'hide character m with fadeOut',
        'show scene background_imperial_kiln with fadeIn',
        'centered 景德鎮御窯廠。這裡專為皇室燒製瓷器，此時正聚集了許多來自各國的商賈。',
        
        'y 哇！這裡就是御窯廠……那些擺在桌上的瓷器，上面的藍色花紋好深邃，簡直像星空一樣。',

        'm 突然，窯爐深處傳來一聲清脆的裂響！',
        
        // 測試:讓主角變成「驚訝」表情
        () => {
            const gender = monogatari.storage ('player_gender'); // 抓取性別 (male/female)
            
            // 🟢 動態組合成 male_shocked 或 female_shocked
            monogatari.run (`show character y ${gender}_shocked at left`); 
            
            setTimeout (() => {
                const playerSprite = document.querySelector ('[data-character="y"]');
                if (playerSprite) {
                    playerSprite.style.position = 'absolute';
                    playerSprite.style.left = '0%';
                    playerSprite.style.bottom = '0px';
                    playerSprite.style.height = '110vh'; // 保持防裁切大立繪
                    playerSprite.style.width = 'auto';
                    playerSprite.style.objectFit = 'contain';
                    playerSprite.style.overflow = 'visible';
                    playerSprite.style.transformOrigin = 'bottom right';
                    playerSprite.style.zIndex = '10';
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
                    salimSprite.style.position = 'absolute';
                    salimSprite.style.right = '0%';         
                    salimSprite.style.bottom = '0px';        
                    salimSprite.style.height = '110vh';    
                    salimSprite.style.width = 'auto';        
                    salimSprite.style.objectFit = 'contain'; 
                    salimSprite.style.overflow = 'visible';
                    salimSprite.style.transformOrigin = 'bottom right'; 
                    salimSprite.style.zIndex = '10';         
                }
            }, 50);
            return true;
        },

        's 喔！年輕的瓷器學徒，你也在欣賞這完美的「青花瓷」嗎？',
        'y 您是……從西域來的商人？',
        's 沒錯，我叫薩利姆。我們商隊橫渡沙漠、乘風破浪，就是為了將這些寶物帶回西方。',
        's 你知道嗎？這漂亮的藍色，用的可不是你們中原當地的泥料，而是我們家鄉帶來的神祕寶石！',
        
        // 互動問答：考驗青花瓷原料知識
        {
            'Choice': {
                'Dialog': 's 哈哈，博學的年輕人，你知道這種讓青花瓷發出濃郁靛藍、帶有鐵鏽斑的進口青料，叫作什麼名字嗎？',
                'Option1': {
                    'Text': '平等青（明代中期國產青料）',
                    'Do': 'jump choice_blue_wrong'
                },
                'Option2': {
                    'Text': '蘇麻離青（中東進口鈷料）',
                    'Do': 'jump choice_blue_right'
                }
            }
        }
    ],

    // 第二幕選錯
    'choice_blue_wrong': [
        's 噢，不對不對！平等青雖然呈色文雅，但沒辦法燒出這種濃烈、帶有墨斑的霸氣藍色。',
        's 再猜一次！這可是透過鄭和下西洋才大量帶回中國的無價之寶！',
        'jump Scene_Two' 
    ],

    // 第二幕選對
    'choice_blue_right': [
        's 啪啪啪（鼓掌）！太厲害了！就是「蘇麻離青」！',
        's 這種青料富含鐵質，在窯爐裡燒製後，會在花紋邊緣形成獨特的「暈散」與「鐵鏽斑」，我們西方的貴族看了都為之瘋狂！',
        'y 原來如此……這美麗的藍色，居然是中原工藝與西域原料「中西融合」的奇蹟。',
        's 沒錯！原料和花紋準備好了，接下來，就看你們景德鎮最核心的魔法——「火候」了。',
        'y 謝謝你，薩利姆！我感覺到我的完美瓷器已經快要誕生了！',
        'jump Scene_Three' 
    ],

    // 第三幕暫存錨點
// 🟢 第三幕：掌控火候與完美開窯
    'Scene_Three': [
        'show scene black with fadeIn',
        'centered 第二幕【御窯廠的藍色秘密】完成！',
        'centered 接下來，主角將回到窯房，進行最後的難關：【掌控火候與完美開窯】……',
        
        'show scene background_kiln_interior with fadeIn',
        'centered 鎮窯內部，窯爐前。此時，窯爐已封好爐門，熱浪陣陣。大師傅再次登場。',
        
        // 呼叫大師傅（正常表情）
        () => {
            monogatari.run ('show character m normal at left');
            setTimeout (() => {
                const masterSprite = document.querySelector ('[data-character="m"]');
                if (masterSprite) {
                    masterSprite.style.position = 'absolute';
                    masterSprite.style.left = '0%';
                    masterSprite.style.bottom = '0px';
                    masterSprite.style.height = '110vh';    
                    masterSprite.style.width = 'auto';
                    masterSprite.style.objectFit = 'contain'; 
                    masterSprite.style.overflow = 'visible';
                    masterSprite.style.transformOrigin = 'bottom left';
                    masterSprite.style.zIndex = '10';
                }
            }, 50);
            return true;
        },

        'm 孩子，瓷器要成器，必須經過這一「火」的考驗。若火力不均或控溫不當，你之前的努力皆是徒勞。',
        'm 此時，窯內溫度正處於中溫（約1000°C），投柴口松柴熊熊。你該採取何種控溫措施？',

        // 🟢 控溫二選一互動
        {
            'Choice': {
                'Dialog': 'm 告訴我，此時該如何調整進風與火候，才能讓釉下的蘇麻離青顯現最純正的星空靛藍？',
                'Option1': {
                    'Text': '加大進風，全開窯門，讓松柴徹底燃燒（氧化燒成）',
                    'Do': 'jump choice_fire_wrong'
                },
                'Option2': {
                    'Text': '減少進風，適度封閉窯門與投柴口，逼出濃煙缺氧燃燒（還原燒成）',
                    'Do': 'jump choice_fire_right'
                }
            }
        }
    ],

   // ❌ 第三幕選錯：燒製失敗分支
    'choice_fire_wrong': [
        // 主角變驚訝表情
        () => {
            const gender = monogatari.storage ('player_gender');
            monogatari.run (`show character y ${gender}_shocked at right`); 
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
        'y 哇啊！煙囪冒出了清煙，火光太刺眼了……大師傅，這樣對嗎？',
        'm （頓足大嘆）糊塗啊！這般猛火直燒，窯內全是正氧！釉料裡的鐵與鈷全被氧化了！',
        
        'show scene black with fadeIn', // 💡 修正點：改成這行，畫面就會正常變黑，且不會跳出代碼文字！
        'centered 幾日後，窯爐冷卻。當你滿懷期待地敲開匣缽——',
        'centered 原本該是深邃靛藍的青花紋飾，因氧化過度，全變成了死寂的焦黃與灰綠。這窯瓷器，全廢了。',
        
        'm 煆燒之功，功虧一簣。記住，千度高溫之際，必須缺氧還原！回去重新讀熟火候經！',
        'jump Start' 
    ],

    // ⭕ 第三幕選對：大獲成功・大結局分支
    'choice_fire_right': [
        'y 必須減少進風！大師傅，快隨我封上部分窯門，讓松柴的松脂化為滾滾濃煙，逼出還原焰！',
        'm （眼中閃過讚許之色）好小子，有膽識！聽你的，封爐！',
        
        'show scene black with fadeIn', // 💡 修正點：加上 show，並改用標準 black 變數
        'centered 窯房內煙燻火燎，你與大師傅徹夜未眠，死死守著火標與觀火窗。',
        'centered 兩日煆燒，三日冷卻。今天，終於到了開窯的日子。',
        
        'show scene background_pottery_shop with fadeIn', // 回到鋪子

        // 🔧 修正點：讓大師傅的指令獨立排隊，不塞在 function 裡面
        'show character m happy at left', 
        () => {
            setTimeout (() => {
                const masterSprite = document.querySelector ('[data-character="m"]');
                if (masterSprite) {
                    masterSprite.style.position = 'absolute'; masterSprite.style.left = '0%'; masterSprite.style.bottom = '0px';
                    masterSprite.style.height = '110vh'; masterSprite.style.width = 'auto'; masterSprite.style.objectFit = 'contain';
                    masterSprite.style.overflow = 'visible'; masterSprite.style.transformOrigin = 'bottom left'; masterSprite.style.zIndex = '10';
                }
            }, 50); // 這裡只需 50ms 即可，因為指令順序已經對了
            return true;
        },
        'm 哈哈哈！快看啊！匣缽開了！',

        // 主角切換為「開心」表情
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
        'end' // 遊戲正式結束
    ]
});
/* global monogatari */

// 自訂繁體中文的 UI 介面文字
monogatari.translation ('繁體中文', {
    'Help': '操作提示',
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
    "策展計劃者": {
        "程式編輯、網站架置": "陳泓綸",
        "美術、音樂":"陳泓綸、gemini AI",
        "文本協作": "王信傑、鄭予涵、黃以撒",
        "文物審定": "中央研究院歷史語言研究所全體教授（沒有參與）、第八組"
    },
    "策展理念以及主題": {
        "說明":"本次主題旨在以瓷器作為線索，重走明代跨越海洋，遠赴重洋的藝術交流之路。大洋不僅象徵明代永樂時期鄭和船隊七下西洋的偉大壯舉，也是大航海時代中歐洲商船開闢的遠樣航線。在這時代大背景之下，瓷風既是乘風破浪的貿易之風，同時也是吹拂東西海岸的審美之風，在整個貿易史上有著極為厚重的文明氣息。早在十五世紀初，明成祖朱棣遣鄭和率大船隊七下西洋，瓷器做為其中最為重要的外交禮物與貿易商品，被大量運往東南亞、南亞等地區。這種中國青花瓷所輸出的天青色風暴首次席捲了整個南洋地區，為海上絲綢之路開啟了一段瓷器貿易的鼎盛時期。與此同時，伊斯蘭世界對中國青花瓷的紋飾與造型同樣也產生了深刻影響與思路，催生出永宣青花瓷獨特的異域風貌，綻開了中西兩方的藝術對話。到了十六世紀，葡萄牙船隊抵達中國沿海，進一步開啟中歐之間的海上貿易，擴大中西藝術交流面向。在這個時間段中，景德鎮窯工為了適應歐洲市場的審美，設計出開光紋飾特徵的克拉克瓷器。這些青花瓷器跨越半個地球登陸歐洲，引發了歐洲的中國風收集。從宮廷貴族到市民階層，無不將之當成了財富、地位的象徵，深刻影響了歐洲的陶瓷產業的發展。歐洲人在此種處境下，也開始仿製中國瓷器，並孕育出了歐洲本土的瓷器革命。本次展覽擷取明代各時期的精品瓷器與相關文物，圍繞著大明氣象的朝貢與國禮、中西交融的貿易與審美和中國禮儀的器用與風尚，呈現瓷器在不同區域中的流通、仿製與融合，從而揭示瓷器背後東西文明相遇、碰撞和共榮的深層故事。"
    },
    "友站連結、學習更多": {
        "故宮典藏資料檢索": '<a href="https://digitalarchive.npm.gov.tw/" target="_blank" rel="noopener noreferrer" style="color: #da9e47; text-decoration: underline; font-weight: bold;">點此前往網站</a>', 
        "河南博物院典藏資料檢索": '<a href="https://www.chnmus.net/" target="_blank" rel="noopener noreferrer" style="color: #da9e47; text-decoration: underline; font-weight: bold;">點此前往網站</a>',
        "適於心—明代永樂皇帝的瓷器": '<a href="https://theme.npm.edu.tw/exh106/yongleporcelain/ch/" target="_blank" rel="noopener noreferrer" style="color: #da9e47; text-decoration: underline; font-weight: bold;">點此前往網站</a>'
    },
    "回饋表單": {
        "請給我們五星好評!?": '<a href="https://forms.gle/iJ3XCsru5isrqeBa8" target="_blank" rel="noopener noreferrer" style="color: #da9e47; text-decoration: underline; font-weight: bold;">點此前往填答</a>', 
        },
    "導覽影片": {
        "影片連結": '<a href="https://www.youtube.com/watch?v=hzLmsU1deSo" target="_blank" rel="noopener noreferrer" style="color: #da9e47; text-decoration: underline; font-weight: bold;">點此前往觀看</a>', 
        },
    "參考資料": {
        "一": "鄒培姍，〈19 世紀上半葉的中國南洋陶瓷貿易─ 從院藏泰興號沉船出水青花瓷說起〉，《故宮文物月刊》第490期（台北：2024）" ,
        "二": "王光堯，〈關於泰興號沉船與所載船貨的思考—海外考古調查札記（五）〉，《福建文博》第2期（福建：2022）" ,
        "三": "彭曉雲，〈19 世紀上半葉中國陶瓷對外貿易發展及相關問題研究〉，《故宮博物院院刊》第2期（台北：2023）" ,
        "四": "盧泰康，〈台灣考古出土十七至十九世紀貿易陶瓷的發現與研究〉，《貿易陶瓷研究》第34期（台北：2014）" ,
        },  
});

// 定義遊戲變數儲存區
monogatari.storage ({
    player_name: '',
    player_gender: 'female', // 預設為女性形象，稍後會由玩家自選改寫
    kiln_result: '',
    route_master_completed: false,   /* 大師傅線 */
    route_merchant_completed: false, /* 西域商人線 */
    route_explore_completed: false,/* 鑑賞線 */
});

// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets('music', {
    'mainTheme': 'mainThemeSong.mp3',
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// 定義音效（請確保檔案放在 assets/sounds/ 資料夾中）
monogatari.assets ('sounds', {
    'shao_success': 'porcelain_success.mp3',
    'shao_fail': 'porcelain_fail.mp3',
});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
    'gallery_001': 'china_001.webp',
    'gallery_002': 'china_002.webp',
    'gallery_003': 'china_003.webp',
    'gallery_004': 'china_004.webp',
    'gallery_005': 'china_005.webp',
    'gallery_006': 'china_006.webp',
    'gallery_007': 'china_007.webp',
    'gallery_008': 'china_008.webp',
    'gallery_009': 'use_001.webp',
    'gallery_010': 'use_002.webp',
    'gallery_011': 'use_003.webp',
    'gallery_012': 'use_004.webp',
    'gallery_013': 'use_005.webp',
    'gallery_014': 'use_006.webp',
    'gallery_015': 'use_007.webp',
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
    'background_pottery_shop': 'b_001.webp',
    'background_imperial_kiln': 'b_002.webp',
    'background_kiln_interior': 'b_003.webp',
    'background_heaven': 'b_004.webp',
    'background_horbor': 'b_005.webp',
    'background_temple': 'b_006.webp',
    'background_final': 'b_007.webp',
    'main_menu_bg': '00181.webp',
    'black': '#000000'
});

// Define the Characters
monogatari.characters ({
    'y': {
        name: '{{player_name}}',
        color: '#5bc0de',
        sprites: {
            'male_normal': 'boy_001.webp',
            'male_happy': 'boy_003.webp',
            'male_shocked': 'boy_002.webp',
            'male_nowadays': 'boy_004.webp',
                        
            'female_normal': 'g_001.webp',
            'female_happy': 'g_003.webp',
            'female_shocked': 'g_002.webp',
            'female_nowadays': 'g_004.webp'
        }
    },
    'm': {
        name: '大師傅',
        color: '#f0ad4e',
        sprites: { 
            'normal': 'c_001.webp',
            'happy': 'c_002.webp',
            'shocked': 'c_003.webp'
         }
    },
    's': {
        name: '薩利姆 (西域商人)',
        color: '#5cb85c',
        sprites: { 'normal': 's_001.webp' }
    },
    'g': {
        name: '女神',
        color: '#a9207c',
        sprites: { 
            'normal': 'god_001.webp', 
            'happy': 'god_002.webp',
        }
    },
    'w': {
        name: '汪大人',
        color: '#f4e438',
        sprites: { 
            'normal': 'ccy_001.webp', }
    },
});

monogatari.script ({
    // ===== 第一幕：開端與形象選擇 =====
    'Start': [
        // 🌟 每次重新開局，強制將所有路線進度清空歸零

        function () {
            monogatari.storage({
                route_master_completed: false,
                route_merchant_completed: false,
                route_explore_completed: false
            });
            return true;
        },

        'show scene black with fadeIn',
        'play music mainTheme with volume 100 loop fade 2',
        'centered 有一日，你正在房間裡面埋頭趕著報告時',
        'centered 突然感到一陣心悸，眼前一黑，便倒在了電腦前...',
        'centered 在朦朧中，你聽到了一個溫暖而又威嚴的聲音在呼喚你',
        'centered 「年輕人，醒醒！現在你有重大的任務呢！」',
        'centered 於是乎，你慢慢地睜開了眼睛，發現自己處在一片炫目的光芒中...',
        'show scene background_heaven with fadeIn',
        'show character g normal',
        'g 年輕人！你終於醒了啊～不過在我說明這一切之前...',
        'g 請先讓我認識你一下吧？',

        {
            'Choice': {
                'Dialog': '請選擇你的角色形象：',
                'Select_Male': {
                    'Text': '男性形象',
                    'Do': () => {
                        monogatari.storage({ player_gender: 'male' });
                        return true; 
                    }
                },
                'Select_Female': {
                    'Text': '女性形象',
                    'Do': () => {
                        monogatari.storage({ player_gender: 'female' });
                        return true; 
                    }
                }
            }
        },
        
        'y 很好，就這麼朝向未知的旅途進發吧！',
        'jump Ask_Name'
    ],
    'Ask_Name': [
        {
            'Input': {
                'Text': '年輕人，告訴我你叫什麼名字？',
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
        'jump Story_scene110'
    ],
    'Story_scene110': [
        'g 原來這就是你的名字啊～',
        'y 這、這裡是……哪裡？',
        'g 這裡靈魂的交匯之地，命運的轉折點！',
        'g 至於你為什麼會來到這邊嘛，其實是因為有一個非你不可的任務在等著你喔！',
        'y 妳妳妳，到底是什麼意思啊？！我在哪裡？我為什麼會在這裡？！',
        'g 別慌張嘛，你只需要去探索關於瓷器的知識，集齊所有知識，就能夠回到現實世界了！',
        'y 我完全不懂你在說些什麼啊！？瓷器？知識？集齊？回到現實世界？這些話聽起來好像是謎語一樣！',
        '女神沒有再說些什麼，揮了揮手中的魔杖，一道光芒包裹了她全身...',
        '你的雙腳也感覺灌了鉛似得愈發沉重，似乎要被拖往什麼地方去...',
        'show character g happy',
        'g 這是一個充滿挑戰的旅程，但我相信你一定能夠成功的！',
        'y 我完全不懂你在說些什麼啊！話說你怎麼突然變裝了！',
        'g 神界的事情你不要多管閒事啦～',
        'g 祝福你能夠順利地回到這裡囉？',
        'jump Story_Start'],

    'Story_Start': [
        'show scene background_temple with fadeIn', 

        // 大師傅登場
        'show character m normal at master-giant-left',

        // 主角登場
        () => {
            const currentGender = monogatari.storage('player_gender') || 'female'; 
            monogatari.run (`show character y ${currentGender}_normal at player-giant-right`);
            return true;
        },

        'm 哼...看來我昨天夢的沒錯，果然有個年輕人倒在這荒郊野嶺的破廟內...',
        'y (猛烈咳嗽，揉了揉眼睛)咳咳……這、這是哪裡？',
        'm （扠腰走近，眉頭深鎖，聲如洪鐘）哪裡來的黃毛小子，毛毛躁躁！趕緊起來，完成你的任務！',
        'y 我的...任務？根本沒有人跟我說明什麼啊...',
        'm 今日是你開展考驗的第一步。若想回去你的世界，便老老實實經歷完考驗吧！',
        'y (嘀咕:這老頭在兇什麼兇...)好吧...那我該怎麼做呢？',
        'm 嗯...天機不可洩漏，你便自己選擇吧！反正最終你都會經歷的...',
        'm 那麼，你想先去哪邊作為你的第一個考驗？',
        'jump RouteHub',
    ],

    'RouteHub': [
        'show scene background_pottery_shop with fadeIn', // 每次回到 Hub 時刷新背景
        
        // 檢查機制：如果三條路線都通關了，就自動跳轉到最終大結局
        function () {
            // 🌟 修正點：使用 . 屬性讀取儲存變數
            const master = monogatari.storage ().route_master_completed;
            const explore = monogatari.storage ().route_explore_completed;
            const merchant = monogatari.storage ().route_merchant_completed;
            
            if (master && explore && merchant) {
                monogatari.run ('jump Label_Final_Ending'); // 請確保你有在劇本中建立這個大結局 Label
                return false; 
            }
            return true;
        },

        'y 接下來，我該往哪個方向深入調查呢？',

        {
            'Choice': {
                'Dialog': '請選擇你接下來要探索的路線：',
                
                // --- 路線一：大師傅線 ---
                'Route_Master': {
                    'Text': '土與骨的交織（瓷器的製作原料與技術）',
                    'Do': 'jump Label_MasterRoute_Start',
                    // 🌟 修正點：改為 () => !monogatari.storage ().route_master_completed
                    'Condition': () => !monogatari.storage ().route_master_completed
                },
                
                // --- 路線二：獨自探秘線 ---
                'Route_Explore': {
                    'Text': '青與彩的盛宴（分類與欣賞）',
                    'Do': 'jump Label_ExploreRoute_Start', 
                    // 🌟 修正點
                    'Condition': () => !monogatari.storage ().route_explore_completed
                },
                
                // --- 路線三：西域商人線 ---
                'Route_Merchant': {
                    'Text': '萬里流芳的藍（瓷器的異國結合與交流）',
                    'Do': 'jump Label_MerchantRoute_Start', 
                    // 🌟 修正點
                    'Condition': () => !monogatari.storage ().route_merchant_completed
                }
            }
        }
    ],

    // ===== 土與骨的交織（瓷器的製作原料與技術) =====
    'Label_MasterRoute_Start': [
        'show scene background_pottery_shop with fadeIn',
        'centered 你首先注意到的是味道，空氣中瀰漫著濃郁的泥土和燒窯的煙燻味，讓人彷彿置身於自然的懷抱中。',
        'centered 這裡似乎是個陶瓷作坊，四周堆滿了各式各樣的陶土、瓷石和未完成的胚體。許多人正在專注地調配著泥料。',
        'y 哇！這裡就是燒製瓷器的地方，早聽說明朝的瓷器赫赫有名，沒想到今日可以親眼見證了!',
        '突然，呼喊聲從你側面傳來',
        
        'show character m normal at master-giant-left',
        () => {
            const currentGender = monogatari.storage('player_gender') || 'female'; 
            monogatari.run (`show character y ${currentGender}_normal at player-giant-right`);
            return true;
        },
        
        'm 此處乃御器廠淘泥重地，若非窯工，休要在此礙手礙腳！',
        'y 啊！我不是...我只是對這裡的陶土和瓷石很感興趣，想要了解一下他們是怎麼製作成瓷器的！',
        'm 黃毛小子！原來是你，幾日未見不知你是否成長了？',
        'm 既然你對陶瓷有興趣，那就好好學習吧！從最基本的泥料開始認識起！',
        'y (小聲嘀咕:才不是有興趣呢，根本是被女神綁架來了...)',
        'm (似乎讀的到心聲一樣)想回到原本的世界就少抱怨！給我好好幹活！',
        'm 瞧你細皮嫩肉，手上半點泥香也無。今日正值調配上等瓷泥之期，你若能幫我配出適當的比例，這關便算你過！',
        'y 這……我似乎有讀過...景德鎮之所以能燒製出體積巨大卻不變形的瓷器，',
        'y 是因為一項偉大的技術革命……叫什麼配方來著？',
        'm 哦？你竟知道這點。元代以降，我景德鎮便採用了「二元配方」。',
        'm 又有言說：一為骨，一為肉。你且說說，這兩者如何調配？',
        'y 二元配方……「骨」與「肉」？（思索）啊！我記起來了！',
        'y 「高嶺土」耐高溫，乃是瓷器之「骨」；「瓷石」易熔，乃是瓷器之「肉」。',
        'y 高嶺土是負責塑形，而瓷石則是固定最終的形狀！',
        'm 不錯！若骨多肉少，則瓷胎乾澀、難以拉坯成型，且燒結溫度過高，容易開裂！',
        'm 若肉多骨少，則在高溫下骨架支撐不住，易軟塌變形，前功盡棄！',
        'y 那麼這高嶺土...可以直接使用嗎？',
        'm 還早呢！首先要把採集來的瓷石與高嶺土進行敲碎、淘洗、磨細、除雜 ，再加水揉勻成均勻細膩的瓷泥，這個步驟稱作「練泥」，是為了排除多餘的空氣，防止瓷器在燒製過程中破裂。',
        '此時，大師指著一旁巨大的坯體，問出了問題。',
        'jump Label_Ask_Ratio'
    ],

    'Label_Ask_Ratio': [
        {
            'Choice': {
                'Dialog': 'm 今欲燒製一尊大型青花大罐，你認為高嶺土（骨）與瓷石（肉）的比例該如何調配？',
                'Option1': { 'Text': '大器需要極強的支撐力，高嶺土（骨）必須多加一些！', 'Do': 'jump choice_burn_right' },
                'Option2': { 'Text': '為了追求細緻溫潤的胎質，瓷石（肉）應該多加一些！', 'Do': 'jump choice_burn_wrong' }
            }
        }
    ],

    'choice_burn_wrong': [
        'show character m shocked at master-giant-left',
        
        // 🎯 完美運作組合：有執行立繪，且精準煞車不吞字
        () => {
            const currentGender = monogatari.storage ().player_gender || 'female'; 
            // 1. 執行變更立繪
            monogatari.run (`show character y ${currentGender}_shocked at player-giant-right`);
            // 2. 立刻踩煞車，抵消 double advance
            return false; 
        },
        
        'm 差之毫釐，謬以千里！瓷石過多，大罐在窯內一受熱便會骨架酥軟、塌陷成泥！', // 🌟 這句也會完美出現！
        'm 此乃『骨肉失衡』之大忌！再給你一次機會，重新思索！',
        'jump Label_Ask_Ratio' 
    ],

    'choice_burn_right': [
        'show character m happy at master-giant-left',
        
        () => {
            const currentGender = monogatari.storage ().player_gender || 'female'; 
            monogatari.run (`show character y ${currentGender}_happy at player-giant-right`);
            return false; 
        },
        
        'm 不錯，大器需骨堅。若骨質不足，高溫下必塌。你這小子，倒還有些慧根。',
        'y 呼……好險。原來這看似平常的泥土，底子裡是一場物理與化學的完美博弈。',
        'm 很好！既然理論懂了，那就親手試試看！來人，把揉泥凳抬上來！',
        'show image gallery_009 center with fadeIn',
        'y 這個又是什麼呢？（指著眼前的器具）',
        'm 就是這個腳踢轆轤，工匠一邊轉動圓盤，一邊用雙手將泥料塑形！',
        'hide image gallery_009 with fadeOut',
        'm 今日御器廠要趕製兩批瓷器，你且來幫我把這「骨」與「肉」的比例給調配均勻！',

        // =========================================================================
        // 🎮 嵌入小遊戲：泥料大作戰（配比滑桿 - 碎裂懲罰版）
        // =========================================================================
        function () {
            // 1. 動態注入小遊戲專屬的精美 CSS 樣式（完美自適應補強，防擠壓爆版）
            if (!document.getElementById('clay-game-style')) {
                const style = document.createElement('style');
                style.id = 'clay-game-style';
                style.innerHTML = `
                    /* 🛡️ 核心防護：確保所有 Padding 與邊框計算不會撐擠爆版面 */
                    #clay-game-overlay *, #clay-game-overlay *::before, #clay-game-overlay *::after {
                        box-sizing: border-box;
                    }

                    #clay-game-overlay {
                        position: fixed; top: 0; left: 0; right: 0; bottom: 0;
                        background: rgba(0, 0, 0, 0.85); z-index: 9999;
                        display: flex; justify-content: center; align-items: center;
                        font-family: 'PingFang TC', 'Microsoft JhengHei', sans-serif;
                        color: #fff;
                        padding: 15px;
                    }
                    .clay-box {
                        background: rgba(25, 25, 25, 0.95); width: 100%; max-width: 550px; padding: 30px;
                        border-radius: 16px; border: 2px solid #da9e47; text-align: center;
                        box-shadow: 0 15px 40px rgba(0,0,0,0.8); position: relative;
                        max-height: 95vh; overflow-y: auto; /* 預防矮螢幕或手機橫放時內容被裁切 */
                    }
                    .clay-title { color: #da9e47; margin-bottom: 5px; font-size: 1.6rem; letter-spacing: 2px; font-weight: bold; }
                    .task-card {
                        background: rgba(255,255,255,0.08); border-left: 4px solid #da9e47;
                        padding: 12px; margin: 15px 0; border-radius: 4px; text-align: left;
                    }
                    .task-name { font-weight: bold; color: #5bc0de; font-size: 1.1rem; }
                    .task-target { font-size: 0.9rem; color: #ccc; margin-top: 4px; }
                    
                    /* 🏺 泥體視覺呈現區 */
                    .clay-display-container {
                        height: 180px; display: flex; justify-content: center; align-items: center;
                        margin: 20px 0; background: rgba(0,0,0,0.4); border-radius: 12px; position: relative; overflow: hidden;
                    }
                    .clay-body {
                        width: 100px; height: 100px; background: #b0a496; 
                        transition: all 0.2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
                        box-shadow: inset -10px -10px 20px rgba(0,0,0,0.3);
                    }
                    .shape-bowl { border-bottom-left-radius: 50% 80%; border-bottom-right-radius: 50% 80%; border-top-left-radius: 10%; border-top-right-radius: 10%; width: 120px; height: 70px; }
                    .shape-vat { border-radius: 15px 15px 30px 30px; width: 110px; height: 110px; }
                    
                    /* 狀態視覺變化效果 */
                    .state-wet { transform: scaleY(0.4) scaleX(1.5) translateY(40px) !important; background: #8e8172 !important; border-radius: 40% 40% 50% 50% !important; }
                    .state-dry { transform: scale(0.95) !important; box-shadow: inset -10px -10px 20px rgba(0,0,0,0.5) !important; }
                    .clay-cracks {
                        position: absolute; width: 100%; height: 100%; top: 0; left: 0;
                        background: radial-gradient(circle, transparent 30%, rgba(0,0,0,0.2) 70%);
                        opacity: 0; transition: opacity 0.2s; pointer-events: none;
                        display: flex; justify-content: center; align-items: center; font-size: 2.5rem; color: #503f35; font-weight: bold;
                    }
                    .state-dry .clay-cracks { opacity: 0.7; }
                    
                    /* 🌟 完美旋轉發光成型 */
                    @keyframes spin-glow {
                        0% { transform: rotate(0deg); box-shadow: 0 0 30px rgba(255,223,118,0.8); }
                        100% { transform: rotate(360deg); box-shadow: 0 0 30px rgba(255,223,118,0.8); }
                    }
                    .state-perfect { animation: spin-glow 1.5s linear infinite !important; background: #eadecc !important; border: 2px solid #fff; }
                    
                    /* 💥 劇烈震動並瞬間碎裂消失的動畫 */
                    @keyframes shatter-burst {
                        0% { transform: translate(0, 0) scale(1); filter: brightness(1.2); }
                        10% { transform: translate(-4px, 3px) rotate(-2deg); }
                        20% { transform: translate(4px, -3px) rotate(3deg); }
                        30% { transform: translate(-3px, -2px) rotate(-3deg); }
                        40% { transform: translate(3px, 3px) rotate(2deg); }
                        50% { transform: scale(1.1); background: #554d44; }
                        100% { transform: scale(0) rotate(15deg); opacity: 0; filter: contrast(2); }
                    }
                    .state-shattered { animation: shatter-burst 0.7s ease-in forwards !important; }
                    
                    /* 🎛️ 滑桿控制區 */
                    .slider-group { margin: 20px 0; }
                    .slider-row { display: flex; align-items: center; margin: 12px 0; }
                    .slider-label { width: 120px; text-align: left; font-size: 1rem; font-weight: bold; shrink: 0; }
                    .slider-input { flex: 1; accent-color: #da9e47; cursor: pointer; height: 8px; min-width: 0; }
                    .slider-val { width: 60px; text-align: right; font-family: monospace; font-size: 1.1rem; color: #da9e47; shrink: 0; }
                    
                    /* 🎯 按鈕 */
                    .clay-btn {
                        background: linear-gradient(135deg, #da9e47, #b57c2b); border: none;
                        padding: 12px 40px; font-size: 1.1rem; color: white; font-weight: bold;
                        border-radius: 30px; cursor: pointer; box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                        transition: all 0.2s; margin-top: 10px; width: 100%;
                    }
                    .clay-btn:hover { transform: translateY(-2px); box-shadow: 0 7px 20px rgba(218,158,71,0.4); }
                    .clay-btn:disabled { background: #555; color: #888; cursor: not-allowed; transform: none; box-shadow: none; linear-gradient: none; }
                    
                    .success-tip { color: #5cb85c; font-size: 1.4rem; font-weight: bold; margin-top: 15px; display: none; min-height: 33px;}
                    .fail-tip { color: #d9534f; font-size: 1.2rem; font-weight: bold; margin-top: 15px; display: none; min-height: 33px; }

                    /* ======================================================= */
                    /* 📱【窄螢幕行動端專屬 RWD 響應規則，優化文字與滑桿體驗】 */
                    /* ======================================================= */
                    @media (max-width: 500px) {
                        .clay-box { padding: 20px 15px; }
                        .clay-title { font-size: 1.3rem; }
                        .task-card { padding: 10px; margin: 12px 0; }
                        .task-name { font-size: 1rem; }
                        .task-target { font-size: 0.8rem; }
                        
                        /* 縮小行動端拉坯展示槽，騰出垂直空間 */
                        .clay-display-container { height: 140px; margin: 15px 0; }
                        
                        /* 💡 重點優化：縮短標籤與數值寬度，釋放滑桿長度，讓手指更好微調配比 */
                        .slider-label { width: 90px; font-size: 0.9rem; }
                        .slider-val { width: 45px; font-size: 1rem; }
                        .slider-row { margin: 8px 0; }
                        
                        .clay-btn { padding: 10px 20px; font-size: 1rem; }
                        .success-tip { font-size: 1.2rem; }
                        .fail-tip { font-size: 1rem; }
                    }
                `;
                document.head.appendChild(style);
            }

            // 2. 建立小遊戲的 UI 結構
            const gameOverlay = document.createElement('div');
            gameOverlay.id = 'clay-game-overlay';
            gameOverlay.innerHTML = `
                <div class="clay-box">
                    <div class="clay-title">🏺 泥料大作戰 🏺</div>
                    <div style="font-size:0.85rem; color:#aaa;">二元配方：骨肉相稱，方能成器</div>
                    
                    <div class="task-card">
                        <div id="task-title" class="task-name">任務一：【脫胎換骨薄胎碗】</div>
                        <div id="task-desc" class="task-target">工藝要求：追求極致透光與細緻。請將【瓷石（肉）】控制在 60% - 65% 之間。</div>
                    </div>
                    
                    <div class="clay-display-container">
                        <div id="clay-viewport" class="clay-body shape-bowl">
                            <div class="clay-cracks">⚡</div>
                        </div>
                    </div>
                    
                    <div class="slider-group">
                        <div class="slider-row">
                            <span class="slider-label" style="color:#eac494;">高嶺土 (骨)</span>
                            <input type="range" id="kaolin-range" class="slider-input" min="0" max="100" value="50">
                            <span id="kaolin-txt" class="slider-val">50%</span>
                        </div>
                        <div class="slider-row">
                            <span class="slider-label" style="color:#a8dcd1;">瓷石 (肉)</span>
                            <input type="range" id="stone-range" class="slider-input" min="0" max="100" value="50">
                            <span id="stone-txt" class="slider-val">50%</span>
                        </div>
                    </div>
                    
                    <button id="clay-confirm-btn" class="clay-btn">鎖定配比，開始拉坯！</button>
                    <div id="clay-success-msg" class="success-tip">✨ 配比完美！✨</div>
                    <div id="clay-fail-msg" class="fail-tip">💥 坯體碎裂！配比不當導致拉坯失敗，請重新調配！ 💥</div>
                </div>
            `;
            document.body.appendChild(gameOverlay);

            // 3. 綁定 DOM 元件與遊戲邏輯變數
            const kSlider = document.getElementById('kaolin-range');
            const sSlider = document.getElementById('stone-range');
            const kTxt = document.getElementById('kaolin-txt');
            const sTxt = document.getElementById('stone-txt');
            const clay = document.getElementById('clay-viewport');
            const confirmBtn = document.getElementById('clay-confirm-btn');
            const successMsg = document.getElementById('clay-success-msg');
            const failMsg = document.getElementById('clay-fail-msg');
            const taskTitle = document.getElementById('task-title');
            const taskDesc = document.getElementById('task-desc');

            let currentStage = 1; 
            let isPerfect = false;

            // 🎵 成功音效：清脆銅鈴聲
            function playBellChime() {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                if (!AudioContext) return;
                const ctx = new AudioContext();
                const osc1 = ctx.createOscillator(); const gain1 = ctx.createGain();
                osc1.type = 'sine'; osc1.frequency.setValueAtTime(1200, ctx.currentTime);
                osc1.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.4);
                const osc2 = ctx.createOscillator(); const gain2 = ctx.createGain();
                osc2.type = 'triangle'; osc2.frequency.setValueAtTime(880, ctx.currentTime);
                gain1.gain.setValueAtTime(0.4, ctx.currentTime); gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
                gain2.gain.setValueAtTime(0.15, ctx.currentTime); gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
                osc1.connect(gain1); gain1.connect(ctx.destination);
                osc2.connect(gain2); gain2.connect(ctx.destination);
                osc1.start(); osc1.stop(ctx.currentTime + 1.2); osc2.start(); osc2.stop(ctx.currentTime + 0.8);
            }

            // 🎵 Web Audio API 模擬「陶瓷激烈碎裂聲」
            function playShatterSound() {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                if (!AudioContext) return;
                const ctx = new AudioContext();
                
                // 1. 碎裂主音（多重不和諧高頻）
                const freqs = [1800, 2400, 3100, 4300];
                freqs.forEach((f, index) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = index % 2 === 0 ? 'sawtooth' : 'triangle'; // 鋸齒波增加沙啞撕裂感
                    osc.frequency.setValueAtTime(f, ctx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.3); // 快速下滑
                    
                    gain.gain.setValueAtTime(0.2, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3 + (index * 0.05));
                    
                    osc.connect(gain); gain.connect(ctx.destination);
                    osc.start(); osc.stop(ctx.currentTime + 0.5);
                });

                // 2. 落地散落低頻雜音
                const oscLow = ctx.createOscillator(); const gainLow = ctx.createGain();
                oscLow.type = 'square'; oscLow.frequency.setValueAtTime(150, ctx.currentTime);
                gainLow.gain.setValueAtTime(0.15, ctx.currentTime);
                gainLow.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
                oscLow.connect(gainLow); gainLow.connect(ctx.destination);
                oscLow.start(); oscLow.stop(ctx.currentTime + 0.2);
            }

            // ⚖️ 即時演算視覺變化函數
            function updateClayVisuals() {
                if (clay.classList.contains('state-shattered')) return; // 碎裂中不響應即時更動
                
                const kVal = parseInt(kSlider.value);
                const sVal = parseInt(sSlider.value);
                
                clay.className = `clay-body ${currentStage === 1 ? 'shape-bowl' : 'shape-vat'}`;
                isPerfect = false;

                if (currentStage === 1) {
                    if (sVal >= 60 && sVal <= 65) {
                        isPerfect = true;
                        clay.classList.add('state-perfect');
                    } else if (sVal > 65) {
                        clay.classList.add('state-wet');
                    } else if (sVal < 60) {
                        clay.classList.add('state-dry');
                    }
                } else {
                    if (kVal >= 55 && kVal <= 60) {
                        isPerfect = true;
                        clay.classList.add('state-perfect');
                    } else if (kVal < 55) {
                        clay.classList.add('state-wet');
                    } else if (kVal > 60) {
                        clay.classList.add('state-dry');
                    }
                }
            }

            // 雙向滑桿聯動綁定（相加為 100%）
            kSlider.addEventListener('input', () => {
                sSlider.value = 100 - kSlider.value;
                kTxt.innerText = kSlider.value + '%';
                sTxt.innerText = sSlider.value + '%';
                updateClayVisuals();
            });

            sSlider.addEventListener('input', () => {
                kSlider.value = 100 - sSlider.value;
                kTxt.innerText = kSlider.value + '%';
                sTxt.innerText = sSlider.value + '%';
                updateClayVisuals();
            });

            // 點擊驗證鎖定按鈕
            confirmBtn.addEventListener('click', () => {
                // ❌ 觸發失敗分支：直接碎裂！
                if (!isPerfect) {
                    playShatterSound(); // 播放程式化碎裂聲
                    
                    // 鎖定 UI 避免重複點擊
                    confirmBtn.disabled = true;
                    kSlider.disabled = true;
                    sSlider.disabled = true;
                    
                    // 執行碎裂特效與動畫
                    clay.className = `clay-body ${currentStage === 1 ? 'shape-bowl' : 'shape-vat'} state-shattered`;
                    failMsg.style.display = 'block';

                    // 1.5秒後重置，強迫重新拉坯
                    setTimeout(() => {
                        failMsg.style.display = 'none';
                        confirmBtn.disabled = false;
                        kSlider.disabled = false;
                        sSlider.disabled = false;
                        
                        // 狀態與滑桿全部復歸 50%
                        kSlider.value = 50;
                        sSlider.value = 50;
                        kTxt.innerText = '50%';
                        sTxt.innerText = '50%';
                        
                        // 清除碎裂樣式，重新凝聚胚體
                        clay.className = `clay-body ${currentStage === 1 ? 'shape-bowl' : 'shape-vat'}`;
                        updateClayVisuals();
                    }, 1500);
                    return;
                }

                // 🎉 配比成功分支
                playBellChime(); 
                successMsg.style.display = 'block';
                confirmBtn.disabled = true;
                kSlider.disabled = true;
                sSlider.disabled = true;

                setTimeout(() => {
                    if (currentStage === 1) {
                        currentStage = 2;
                        isPerfect = false;
                        successMsg.style.display = 'none';
                        confirmBtn.disabled = false;
                        kSlider.disabled = false;
                        sSlider.disabled = false;
                        
                        kSlider.value = 50;
                        sSlider.value = 50;
                        kTxt.innerText = '50%';
                        sTxt.innerText = '50%';
                        
                        taskTitle.innerText = '任務二：【大明宣德龍紋缸】';
                        taskDesc.innerText = '工藝要求：追求大器高溫下的高強度支撐力。請將【高嶺土（骨）】控制在 55% - 60% 之間。';
                        
                        updateClayVisuals();
                    } else {
                        gameOverlay.style.transition = 'opacity 0.5s';
                        gameOverlay.style.opacity = '0';
                        setTimeout(() => {
                            gameOverlay.remove();
                            monogatari.next(); 
                        }, 500);
                    }
                }, 2000);
            });

            updateClayVisuals();
            return false; 
},

        // =========================================================================
        // 🎬 小遊戲通關後的後續對話與分流
        // =========================================================================
        'y 呼……好險！手都快拉酸了，終於把薄胎碗和龍紋缸的泥料比例都完美調配出來了！',
        'show character m happy at master-giant-left',
        'm 哈哈哈！做的好！骨肉調和，手藝精進！這才像我御器廠合格的弟子！',
        'm 這關考驗，便算你實至名歸地通過了！接著去準備下一項挑戰吧！',
        
        function () {
            monogatari.storage ({ route_master_completed: true }); 
            monogatari.run ('jump RouteHub');                  
            return false;                                       
        }
    ],

    // ===== 青與彩的盛宴（分類與欣賞） =====
    'Label_ExploreRoute_Start': [        
        'show scene background_imperial_kiln with fadeIn',
        'centered 你走進了御窯廠的後方，這裡堆滿了各式各樣的青花瓷，每一件都散發著獨特的韻味。',
        'centered 你注意到一位衣著華麗的中年人，正盯著眾瓷器搖頭晃腦、一臉陶醉。',

        'show character w normal at salem-giant-right',
        () => {
            const currentGender = monogatari.storage('player_gender') || 'female'; 
            monogatari.run (`show character y ${currentGender}_normal at player-giant-left`);
            return true;
        },

        'w 妙！真是妙不可言！這泥水工藝，配上這等清新雅致的色彩，若是有機會流落民間...怕是世人皆甘願奉上千兩白銀啊！',
        'y 這裡便是景德鎮的御窯場，專門燒製供皇室使用的瓷器。這些青花瓷不僅是工藝品，更是藝術品呢...',
        'w 喔？來者何人？這處可是皇家重地，何敢擅闖！',
        'y 大、大人！小的是幾日前隨大師傅習塑胚之徒...非我自己擅闖！',
        'w 喔？我曉得你，你就是當日那名學徒。本官乃這御窯場督陶官，負責監造此處所有瓷器。所謂無事不登三寶殿，今日汝前來，所為何事？',
        'y 就是對這瓷器樣式著實好奇，望大人不計身分，指點一二！',
        'w 好！念你學習心切，本大人便帶你走訪這皇家重地！',
        'w 想在景德鎮混口飯吃，可得先分得清「釉下彩」、「釉上彩」與「單色釉」!',
        'w 要是連這都分不清，那可就跟俗人無異啦！',
        'y 釉下、釉上、單色釉……這些詞彙...能斗膽請大人拿實物說明一番嗎？', 
        'w 得咧！今日便讓你開開眼界！',
        'show image gallery_001 with fadeIn', 
        'y 這瓶子顏色怎會如此特別！？我一直以為景德鎮只產青花瓷！',
        'w 小瞧了！此乃本朝洪武年間所燒製的釉裡紅三友帶蓋瓷梅瓶。使用釉下彩技法燒製而成，所謂釉下彩，就是用銅紅料或青花料先在生胎上繪畫，而後塗上透明釉，之後以還原焰進行燒成！',
        'hide image gallery_001 with fadeOut',
        'y 原來如此...這就是釉下彩！那麼釉上彩又是如何呢？',
        'show image gallery_010 with fadeIn',
        'w 且看這件。所謂釉上彩，便是先在窯裡燒出白瓷，輔以彩料進行繪畫，最後以低溫二次燒成。彩在釉上，如用手撫摸，可覺微微凸起。',
        'w 彩在釉下，平滑如鏡；釉上彩色彩豐富，可任意搭配，但容易磨損。另有兩者結合之物，名為「鬥彩」',
        'hide image gallery_010 with fadeOut',
        'y 原來如此...是不是還有一個叫做...單色釉？',
        'w 聰明！且看此件！',
        'show image gallery_004 with fadeIn',
        'w 此件技法就是單色彩，亦稱顏色釉。不施彩繪，全以釉色自身襯托',
        'w 其釉色以青釉，且紋樣則以竹刀在外刻出蓮瓣，可見其細',
        'y 這單色彩很難燒嗎？',
        'w 自然是極難。青釉須精準控制製品含量與窯火，多一分則暗，少一分則淡。這碗釉色瑩潤，刻花流暢，可謂上品',
        'hide image gallery_004 with fadeOut',
        'w 來！我再帶你看看其他的珍品！',
        '於是，你們一同走向了倉儲區',
        
        function () {
        // 🛑 核心技術：建立鍵盤封鎖函數，徹底攔截空白鍵與 Enter
        const blockStoryKeys = function (e) {
            if (e.code === 'Space' || e.code === 'Enter') {
                e.preventDefault();
                e.stopPropagation();
            }
        };
        // 在 window 全域階段搶先攔截按鍵事件
        window.addEventListener('keydown', blockStoryKeys, true);

        // 1. 動態注入名瓷鑑賞專專屬的精美 CSS 樣式
        if (!document.getElementById('porcelain-gallery-style')) {
            const style = document.createElement('style');
            style.id = 'porcelain-gallery-style';
            style.innerHTML = `
                /* 🛡️ 核心防護：確保 Padding 與邊框計算不會撐擠爆版面 */
                #gallery-overlay *, #gallery-overlay *::before, #gallery-overlay *::after {
                    box-sizing: border-box;
                }

                #gallery-overlay {
                    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
                    background: rgba(10, 10, 10, 0.9); z-index: 9999;
                    display: flex; justify-content: center; align-items: center;
                    font-family: 'PingFang TC', 'Microsoft JhengHei', sans-serif;
                    padding: 20px;
                }
                .gallery-box {
                    width: 100%; max-width: 850px; background: rgba(25, 25, 25, 0.95);
                    border: 2px solid #da9e47; border-radius: 16px; padding: 35px;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.8); text-align: center;
                    position: relative; 
                    overflow: hidden;   /* 確保滿版層展開時不會超出外框的圓角 */
                }
                .gallery-title { color: #da9e47; font-size: 1.8rem; letter-spacing: 3px; margin-bottom: 5px; font-weight: bold; }
                .gallery-subtitle { color: #aaa; font-size: 0.9rem; margin-bottom: 30px; }
                
                /* 🎴 四大瓷器 Icon 佈局 (電腦端完美維持原樣) */
                .gallery-grid {
                    display: flex; justify-content: space-between; gap: 20px; margin-bottom: 30px;
                }
                .gallery-card {
                    flex: 1; background: rgba(255,255,255,0.04); border: 1px solid #444;
                    border-radius: 12px; padding: 20px 15px; cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                    position: relative; overflow: hidden;
                    min-width: 0; /* 防止 Flex 子項目強行撐開橫排 */
                }
                .gallery-card:hover {
                    border-color: #da9e47; background: rgba(218, 158, 71, 0.08);
                    transform: translateY(-5px);
                }
                .gallery-card.visited {
                    border-color: #b57c2b; background: rgba(218, 158, 71, 0.03);
                }
                .gallery-card.visited::after {
                    content: '✓'; position: absolute; top: 8px; right: 12px;
                    color: #da9e47; font-weight: bold; font-size: 1.1rem;
                }
                .gallery-card.active {
                    border-color: #da9e47; background: rgba(218, 158, 71, 0.15);
                    box-shadow: 0 0 15px rgba(218, 158, 71, 0.3);
                }
                
                /* 🖼️ 瓷器圖片樣式 */
                .porcelain-icon {
                    width: 100px; height: 100px; margin: 0 auto 12px;
                    display: flex; justify-content: center; align-items: center;
                }
                .porcelain-icon img {
                    max-width: 100%; max-height: 100%; object-fit: contain;
                    filter: drop-shadow(0 5px 10px rgba(0,0,0,0.5));
                }
                .porcelain-name { color: #fff; font-size: 1.1rem; font-weight: bold; }
                
                /* 🔍 ✨【左右分流 100% 全螢幕大圖劇院級圖層 (電腦端維持原樣)】 */
                #large-preview-wrap {
                    position: fixed; /* 改為定點鋪滿整個螢幕 */
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: rgba(10, 10, 10, 0.98);
                    display: flex; flex-direction: row; justify-content: center; align-items: center;
                    gap: 50px; padding: 40px 60px; box-sizing: border-box;
                    transform: scale(0.95); opacity: 0; pointer-events: none;
                    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                    z-index: 10000; /* 高於原本的外框層 */
                }
                #large-preview-wrap.visible {
                    transform: scale(1); opacity: 1; pointer-events: auto;
                }

                /* 左側區域：大圖專屬置中容器 */
                .preview-img-container {
                    flex: 1.3; height: 100%; display: flex; justify-content: center; align-items: center;
                }
                /* 滿版大圖：徹底騰出寬度，極致放大 */
                #large-preview-img {
                    max-height: 85vh; max-width: 100%; object-fit: contain;
                    filter: drop-shadow(0 20px 45px rgba(0,0,0,0.95));
                    cursor: pointer; transition: transform 0.3s ease;
                }
                #large-preview-img:hover {
                    transform: scale(1.02);
                }
                
                /* 💬 ✨【右側區域：優雅獨立的毛玻璃說明面板，絕不擋圖】 */
                .preview-text-panel {
                    flex: 0.7; max-width: 460px; height: 75vh;
                    background: rgba(22, 22, 22, 0.85); 
                    border-left: 5px solid #da9e47;
                    border-top: 1px solid rgba(255,255,255,0.08);
                    border-right: 1px solid rgba(255,255,255,0.08);
                    border-bottom: 1px solid rgba(255,255,255,0.08);
                    border-radius: 12px; padding: 40px 25px 25px;
                    text-align: left; box-shadow: 0 15px 35px rgba(0,0,0,0.6);
                    backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);
                    display: flex; flex-direction: column; position: relative; box-sizing: border-box;
                }
                /* 內建獨立長文滾動槽 */
                .preview-text-scroll {
                    flex: 1; overflow-y: auto; padding-right: 10px; margin-top: 5px;
                }
                /* 細緻微型滾動條美化 */
                .preview-text-scroll::-webkit-scrollbar { width: 5px; }
                .preview-text-scroll::-webkit-scrollbar-track { background: rgba(0,0,0,0.05); }
                .preview-text-scroll::-webkit-scrollbar-thumb { background: rgba(218, 158, 71, 0.4); border-radius: 3px; }
                .preview-text-scroll::-webkit-scrollbar-thumb:hover { background: #da9e47; }

                .floating-speaker { color: #5bc0de; font-weight: bold; font-size: 1.25rem; margin-bottom: 12px; }
                .floating-content { color: #eee; font-size: 1.05rem; line-height: 1.7; letter-spacing: 1.5px; text-align: justify; }
                
                /* 右上角點擊縮回提示 */
                .close-hint {
                    position: absolute; top: 15px; right: 20px;
                    font-size: 0.8rem; color: #da9e47; letter-spacing: 1px;
                    opacity: 0.8; animation: pulse-hint 1.5s infinite;
                    cursor: pointer; z-index: 11;
                }
                @keyframes pulse-hint {
                    0% { opacity: 0.4; } 50% { opacity: 1; } 100% { opacity: 0.4; }
                }
                
                /* 📢 初始提示對話框 */
                .gallery-dialog {
                    background: rgba(0, 0, 0, 0.6); border: 1px solid #555;
                    border-radius: 8px; padding: 20px; min-height: 100px;
                    text-align: left; margin-bottom: 25px; position: relative;
                }
                .dialog-speaker { color: #5bc0de; font-weight: bold; font-size: 1.1rem; margin-bottom: 8px; }
                .dialog-content { color: #eee; font-size: 1.05rem; line-height: 1.6; letter-spacing: 1px; }
                
                /* 🏁 底部前進按鈕 */
                .gallery-footer { display: flex; justify-content: flex-end; }
                .gallery-btn {
                    background: linear-gradient(135deg, #da9e47, #b57c2b); border: none;
                    padding: 10px 35px; font-size: 1rem; color: white; font-weight: bold;
                    border-radius: 20px; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.3);
                    transition: all 0.2s;
                }
                .gallery-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 6px 15px rgba(218,158,71,0.4); }
                .gallery-btn:disabled { background: #444; color: #888; cursor: not-allowed; box-shadow: none; }


                /* ======================================================= */
                /* 📱【窄螢幕行動端專屬 RWD 補強規則，完全防止畫面硬擠】 */
                /* ======================================================= */
                @media (max-width: 768px) {
                    #gallery-overlay { padding: 10px; }
                    .gallery-box {
                        padding: 20px 15px;
                        max-height: 95vh; overflow-y: auto; /* 預防矮螢幕手機導致內容溢出 */
                    }
                    .gallery-title { font-size: 1.4rem; letter-spacing: 1px; }
                    .gallery-subtitle { margin-bottom: 20px; }

                    /* 💡 解法：4張卡片不再擠在一橫排，自動轉為 2x2 雙列佈局，保護元件比例 */
                    .gallery-grid {
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 12px;
                        margin-bottom: 20px;
                    }
                    .gallery-card {
                        flex: 0 1 calc(50% - 6px); /* 精準分配雙列寬度 */
                        min-width: 120px;
                        padding: 15px 10px;
                    }
                    .porcelain-icon {
                        width: 80px; height: 80px; margin-bottom: 8px; /* 行動端稍微縮小圖標 */
                    }
                    .porcelain-name { font-size: 0.95rem; }

                    /* 💡 解法：劇院大圖層由「左右並排」改為「上下疊加」，徹底解放橫向寬度 */
                    #large-preview-wrap {
                        flex-direction: column;
                        gap: 15px;
                        padding: 20px 15px;
                    }
                    .preview-img-container {
                        flex: 1; width: 100%; height: auto;
                        max-height: 40vh; /* 固定大圖最高佔用 40% 的行動端螢幕高度 */
                    }
                    #large-preview-img {
                        max-height: 100%;
                    }
                    .preview-text-panel {
                        flex: 1.2; width: 100%; max-width: 100%;
                        height: auto; max-height: 45vh; /* 固定面板最高佔用 45% 的行動端螢幕高度 */
                        padding: 35px 15px 15px;
                    }
                    .floating-speaker { font-size: 1.1rem; margin-bottom: 6px; }
                    .floating-content { font-size: 0.95rem; letter-spacing: 1px; }
                    .close-hint { top: 12px; right: 15px; }
                }

                /* 針對小於 360px 極窄手機螢幕的極致防爆 */
                @media (max-width: 360px) {
                    .gallery-grid { gap: 10px; }
                    .gallery-card { flex: 0 1 100%; } /* 直排一條龍，絕對不擠壓 */
                }
            `;
            document.head.appendChild(style);
        }

        // 2. 建立小遊戲的 UI 結構
        const galleryOverlay = document.createElement('div');
        galleryOverlay.id = 'gallery-overlay';
        
        const getImgUrl = (key) => `assets/images/${monogatari.assets('images')[key]}`;

        galleryOverlay.innerHTML = `
            <div class="gallery-box">
                <div class="gallery-title">🏛️ 景德鎮名瓷大觀 🏛️</div>
                <div class="gallery-subtitle">點擊各尊瓷器仔細鑑賞，全數觀摩完畢後方可繼續前進</div>
                
                <div class="gallery-grid">
                    <div class="gallery-card" data-idx="0" tabindex="0" role="button" aria-label="釉里紅三友帶蓋瓷梅瓶，點擊展開詳細鑑賞">
                        <div class="porcelain-icon"><img src="${getImgUrl('gallery_001')}" alt="青花"></div>
                        <div class="porcelain-name">釉里紅三友帶蓋瓷梅瓶</div>
                    </div>
                    <div class="gallery-card" data-idx="1" tabindex="1" role="button" aria-label="鬥彩雞缸杯，點擊展開詳細鑑賞">
                        <div class="porcelain-icon"><img src="${getImgUrl('gallery_002')}" alt="玲瓏"></div>
                        <div class="porcelain-name">鬥彩雞缸杯</div>
                    </div>
                    <div class="gallery-card" data-idx="2" tabindex="2" role="button" aria-label="青花一把蓮盤">
                        <div class="porcelain-icon"><img src="${getImgUrl('gallery_003')}" alt="粉彩"></div>
                        <div class="porcelain-name">青花一把蓮盤</div>
                    </div>
                    <div class="gallery-card" data-idx="3" tabindex="3" role="button" aria-label="青瓷劃花蓮瓣碗">
                        <div class="porcelain-icon"><img src="${getImgUrl('gallery_004')}" alt="顏色釉"></div>
                        <div class="porcelain-name">青瓷劃花蓮瓣碗</div>
                    </div>
                </div>
                
                <div id="large-preview-wrap">
                    <div class="preview-img-container">
                        <img id="large-preview-img" src="" alt="瓷器細節放大圖">
                    </div>
                    
                    <div class="preview-text-panel">
                        <div class="close-hint">✕ 點擊任意處縮回</div>
                        <div class="floating-speaker">說明</div>
                        <div class="preview-text-scroll">
                            <div id="floating-content" class="floating-content"></div>
                        </div>
                    </div>
                </div>
                
                <div class="gallery-dialog">
                        <div id="gallery-content" class="dialog-content">（擺在架上的四尊瓷器散發着內斂的光芒，點擊上方瓷器開始鑑賞。）</div>
                </div>
                
                <div class="gallery-footer">
                    <button id="gallery-next-btn" class="gallery-btn" disabled>繼續劇情</button>
                </div>
            </div>
        `;
        document.body.appendChild(galleryOverlay);

        // 3. 設定主角對四個瓷器的台詞文本
        const porcelainIntros = [
            "「此為永樂帝女安成公主陪葬品，其釉質細膩，出自景德鎮官窯，是明初官窯瓷器最為傑出的代表，不同於一般的青花瓷，釉裏紅作為明代瓷器工藝燒製難度最高的一種技術，不僅對於溫度有極高的要求，且必須一次成形，因此在燒製時呈色會略帶灰黑，但這種窯變效果反倒成就了釉裏紅瓷極高的辨識度與古典美」",
            "「其上繪有公雞引頸高歌，母雞帶著雛雞在山石花草間覓食，栩栩如生。「釉下青花」與「釉上五彩」的完美結合。先用青花在坯上勾勒出輪廓線，罩釉高溫燒成；出窯後，再在釉面上填入紅、綠、黃等各色料子，第二次放入低溫爐烘燒。釉下與釉上，兩火方成一器，這便是「鬥彩」。」",
            "「盤子弧壁，矮圈足。器底露胎，全器以青花為飾。口沿下是海水波濤紋，內壁有蓮花、石榴、菊花等各式花朵共十三朵，外壁口沿下繪卷草紋，壁面畫纏枝花卉十四朵，近圈足處有回紋一週。盤心主紋飾是蓮花、慈菇等紮成的花束。因為外交往來以及貿易交換等因素，土耳其的托普卡普宮殿博物館以及伊朗的阿德卑爾神廟收藏有大量的十五世紀初期青花瓷器，類似這件作品的青花一把蓮盤，在兩大收藏中也都可以見到。」",
            "「口部微外侈，深弧形壁，上豐下斂，尖底，並帶矮圈足，稱為蓮子碗。青瓷碗的外壁為蓮瓣，內壁口沿下為回紋一圈，碗心另有五瓣葵花紋。對照洪武二十六年（1393）燒造供用器皿時，需要先由內府定奪制樣的規定，可以看到明代初年，景德鎮和龍泉窯兩地的工匠，或以印花，或以鈷料繪畫，或以刻畫方式達成目標的巧思。」"
        ];

        // 4. 變數與 DOM 元件綁定
        const visitedStatus = [false, false, false, false];
        const cards = document.querySelectorAll('.gallery-card');
        const floatingContent = document.getElementById('floating-content'); 
        const nextBtn = document.getElementById('gallery-next-btn');
        
        const previewWrap = document.getElementById('large-preview-wrap');
        const previewImg = document.getElementById('large-preview-img');

        // 監聽：點擊 Icon 卡片
        cards.forEach(card => {
            card.addEventListener('click', function () {
                const idx = parseInt(this.getAttribute('data-idx'));
                const imgSrc = this.querySelector('img').getAttribute('src');
                
                // 更新選取樣式與看過標記
                cards.forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                this.classList.add('visited');
                visitedStatus[idx] = true;
                
                // 觸發滿版
                previewImg.setAttribute('src', imgSrc);
                floatingContent.innerText = porcelainIntros[idx];
                previewWrap.classList.add('visible');
                
                // 檢查是否全看過了
                if (visitedStatus.every(status => status === true)) {
                    nextBtn.disabled = false;
                }
            });
        });

        // 觸發縮回：點擊大圖或深色背景任意處縮回大圖層
        previewWrap.addEventListener('click', () => {
            previewWrap.classList.remove('visible');
        });

        // 防止點擊右側長文面板時冒泡關閉，保障流誠的捲動閱讀
        document.querySelector('.preview-text-panel').addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // 獨立綁定「✕ 點擊任意處縮回」關閉事件
        document.querySelector('.close-hint').addEventListener('click', (e) => {
            e.stopPropagation();
            previewWrap.classList.remove('visible');
        });

        // 5. 點擊按鈕關閉並推進主線劇情
        nextBtn.addEventListener('click', () => {
            galleryOverlay.style.transition = 'opacity 0.3s';
            galleryOverlay.style.opacity = '0';
            setTimeout(() => {
                // 🔓 【重要】玩家點擊前進時，解除鍵盤鎖定，恢復遊戲控制
                window.removeEventListener('keydown', blockStoryKeys, true);
                galleryOverlay.remove();
                monogatari.next(); 
            }, 300);
        });

        return false; 
},

    'w 哈哈哈！看的甚是投入嘛！怎麼？還有什麼疑問呢？',
    'y 方才真品甚是美妙！就是能...請大人再次提點技法？我這記性實在是...',
    'w 好咧！所謂「釉下彩」是工匠在生坯上直接用青花料繪畫，罩上一層透明釉後，入窯經 1200度以上的高溫一次燒成。那藍色被鎖在釉面之下，摸起來光滑如鏡，萬年不褪色！',
    'w 至於「釉上彩」，則是先把坯燒成素胚，再在表面繪上各色彩料，最後以 800-900度的低溫二次燒成。這樣的工藝讓色彩更為鮮豔多變，但相對也更容易剝落損壞，所以流傳下來的釉上彩瓷器數量非常稀少！',
    'w 最後的「單色釉」，則是直接在坯上施以一種顏色的釉，經高溫燒成後，整件器物就呈現出單一色調的美感。這類瓷器雖然沒有繪畫裝飾，但釉色的純淨與變化本身就是最大的看點！',
    'y 原來如此！那為什麼不同時期的青花，藍色看起來不太一樣呢？',
    'w 早年永樂、宣德朝流行從西洋進口的「蘇麻離青」料，發色濃艷奪目，常帶有黑色的鐵鏽斑，那叫一個霸氣。',
    'w 而近期流行的小件，則用江西當地的「平等青」，發色幽雅柔和，最適合畫這種精緻的宮廷小件了。',
    'w 不過啊小兄弟...最後再考考你！',
    'jump Label_Ask_Look' // ✨【修正 1】明確加上 jump，才不會對話完直接卡死
],

'Label_Ask_Look': [
    {
        'Choice': {
            'Dialog': 'w (指著旁邊一件通體純黃、溫潤如玉、宛如油脂般細緻的瓷盤)我且考考你。這件溫潤無瑕的『單色釉』瓷器，我若是私底下運去賣給江南最富有的鹽商，你覺得能賺多少裝銀子？',
            'Option1': { 'Text': '這黃色如此高貴，簡直像黃金一樣，富商們一定會瘋搶，賣個千兩白銀絕對沒問題！', 'Do': 'jump choice_see_wrong' },
            'Option2': { 'Text': '這黃色如此尊貴端莊，恐怕是皇家祭祀或御用的專屬色，民間是絕對禁止買賣的吧？', 'Do': 'jump choice_see_right' }
        }
    }
],

'choice_see_wrong': [
    'show character w normal at wang-giant-left',
    
    () => {
        const currentGender = monogatari.storage ().player_gender || 'female'; 
        monogatari.run (`show character y ${currentGender}_shocked at player-giant-right`);
        return false; 
    },
    
    'w 哎呀！你這黃口小兒是在害我掉腦袋啊！此乃『嬌黃釉』，是皇家至高無上的專屬之色！',
    'w 在大明，庶民私藏黃色瓷器等同於謀反，那是要滿門抄斬的！有再多銀子也碰不得！', 
    'w 再給你一次機會，重新思索！',
    'jump Label_Ask_Look' // （註：您原本寫 jump Label_Ask_Ratio，請確認是否有該標籤，此處改回重新考試）
],

'choice_see_right': [
    'show character w normal at wang-giant-left',
    
    () => {
        const currentGender = monogatari.storage ().player_gender || 'female'; 
        monogatari.run (`show character y ${currentGender}_happy at player-giant-right`);
        return false; 
    },
    
    'w 聰明！這『嬌黃釉』代表帝后至尊，任憑我汪某人再有錢，也只能在御器廠飽飽眼福，絕不敢私運一件。否則，腦袋可就不在脖子上了。',
    'y 原來在大明，瓷器的顏色不僅是美學，更是生死攸關的法律階級象徵呢...',
    'w 很好，既然你已經對這四件傳世神品有了基本認識，接下來便來考考你的眼力。',
    'w 我將這四件瓷器打亂，你且將它們分門別類，正確安放在這座三尊博古架上！務必在限時內完成，若放錯了……瓷器可是會碎的！',
    'y 明白，定當小心翼翼、全神貫注！', // ✨【修正 2】這個逗號非常重要，用來隔開字串與後面的 function

    // =========================================================================
    // 🎮 互動小遊戲：博古架瓷器分類（拖曳、限時、網頁合成音效版）
    // =========================================================================
    function () {
        // 1. 動態注入小遊戲專屬的精美 CSS 樣式（完美自適應補強，防擠壓爆版，新增點選高亮）
        if (!document.getElementById('bogu-game-style')) {
            const style = document.createElement('style');
            style.id = 'bogu-game-style';
            style.innerHTML = `
                /* 🛡️ 核心防護：確保所有 Padding 與邊框不撐擠版面 */
                #game-overlay *, #game-overlay *::before, #game-overlay *::after {
                    box-sizing: border-box;
                }

                #game-overlay {
                    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
                    background: rgba(12, 12, 12, 0.95); z-index: 9999;
                    display: flex; justify-content: center; align-items: center;
                    font-family: 'PingFang TC', 'Microsoft JhengHei', sans-serif;
                    user-select: none;
                    padding: 15px;
                }
                .game-box {
                    width: 100%; max-width: 950px; background: rgba(22, 22, 22, 0.98);
                    border: 2px solid #da9e47; border-radius: 16px; padding: 30px;
                    box-shadow: 0 25px 60px rgba(0,0,0,0.8); text-align: center;
                    position: relative;
                    max-height: 95vh; overflow-y: auto; /* 預防矮螢幕時內容被裁切 */
                }
                .game-title { color: #da9e47; font-size: 1.8rem; letter-spacing: 4px; font-weight: bold; margin-bottom: 5px; }
                .game-subtitle { color: #aaa; font-size: 0.9rem; margin-bottom: 20px; }
                .timer-container { width: 100%; height: 8px; background: #333; border-radius: 4px; margin-bottom: 25px; overflow: hidden; }
                .timer-bar { width: 100%; height: 100%; background: linear-gradient(90deg, #da9e47, #d9534f); transition: width 0.1s linear; }
                .item-pool-zone {
                    background: rgba(255,255,255,0.02); border: 1px dashed #555; border-radius: 12px;
                    height: 150px; display: flex; justify-content: center; align-items: center; margin-bottom: 30px;
                    position: relative;
                }
                .pool-hint { position: absolute; color: #555; font-size: 0.9rem; letter-spacing: 1px; pointer-events: none; }
                
                /* 瓷器本體樣式 */
                .draggable-porcelain {
                    background: rgba(35, 35, 35, 0.9); border: 2px solid #da9e47; border-radius: 12px;
                    padding: 10px 20px; display: flex; align-items: center; gap: 15px; cursor: grab;
                    box-shadow: 0 8px 20px rgba(0,0,0,0.5); z-index: 20;
                    transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
                }
                .draggable-porcelain:active { cursor: grabbing; transform: scale(0.98); }
                
                /* ✨ 新增：行動端點選激活狀態（亮起金邊與外發光） */
                .draggable-porcelain.active-select {
                    border-color: #fff;
                    box-shadow: 0 0 20px rgba(218, 158, 71, 0.8);
                    background: rgba(45, 45, 45, 0.95);
                    transform: scale(1.02);
                }

                .draggable-porcelain img { width: 65px; height: 65px; object-fit: contain; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.5)); }
                .draggable-text { text-align: left; }
                .draggable-text .p-type { color: #da9e47; font-size: 0.75rem; font-weight: bold; letter-spacing: 1px; }
                .draggable-text .p-name { color: #fff; font-size: 1.05rem; font-weight: bold; margin-top: 2px; }
                
                /* 博古架外層容器 */
                .shelves-container { display: flex; justify-content: space-between; gap: 20px; }
                .bogu-shelf {
                    flex: 1; background: rgba(40, 30, 20, 0.2); 
                    border: 3px solid #5a4028; border-radius: 12px;
                    padding: 20px 15px; min-height: 240px;
                    display: flex; flex-direction: column; align-items: center;
                    transition: all 0.25s ease; position: relative;
                    box-shadow: inset 0 0 20px rgba(0,0,0,0.6);
                    min-width: 0;
                }
                .bogu-shelf.drag-over {
                    border-color: #da9e47; background: rgba(218, 158, 71, 0.1);
                    box-shadow: inset 0 0 30px rgba(218, 158, 71, 0.2), 0 0 15px rgba(218, 158, 71, 0.2);
                }
                
                /* ✨ 新增：當瓷器被點選時，提示可點擊投放的博古架目標 */
                .bogu-shelf.selectable-target {
                    cursor: pointer;
                    border-color: rgba(218, 158, 71, 0.6);
                    box-shadow: inset 0 0 15px rgba(218, 158, 71, 0.1);
                }
                .bogu-shelf.selectable-target:hover {
                    background: rgba(218, 158, 71, 0.05);
                }

                .shelf-title {
                    background: #5a4028; color: #f1e5d5; font-weight: bold;
                    padding: 6px 20px; border-radius: 20px; font-size: 1.05rem;
                    letter-spacing: 2px; margin-bottom: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);
                }
                .shelf-content {
                    width: 100%; display: flex; flex-direction: column; gap: 10px; align-items: center; justify-content: center; flex-grow: 1;
                }
                .placed-tag {
                    background: rgba(255,255,255,0.05); border: 1px solid #da9e47;
                    border-radius: 6px; padding: 6px 12px; color: #fff; font-size: 0.9rem;
                    width: 85%; text-align: center; animation: slideUp 0.3s ease;
                }
                .shake-anim { animation: screenShake 0.4s ease-in-out; }
                @keyframes screenShake {
                    0%, 100% { transform: translateX(0); }
                    20%, 60% { transform: translateX(-8px); }
                    40%, 80% { transform: translateX(8px); }
                }
                @keyframes slideUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

                /* ======================================================= */
                /* 📱【窄螢幕行動端專屬 RWD 響應規則，完美防止博古架被硬擠】 */
                /* ======================================================= */
                @media (max-width: 768px) {
                    .game-box { padding: 20px 15px; }
                    .game-title { font-size: 1.4rem; letter-spacing: 2px; }
                    .game-subtitle { font-size: 0.85rem; margin-bottom: 15px; }
                    .timer-container { margin-bottom: 15px; }
                    
                    .item-pool-zone { height: 120px; margin-bottom: 20px; }
                    .draggable-porcelain { padding: 8px 15px; gap: 12px; cursor: pointer; } /* 手機端游標改為 pointer 提示點擊 */
                    .draggable-porcelain img { width: 50px; height: 50px; }
                    .draggable-text .p-name { font-size: 0.95rem; }

                    .shelves-container {
                        flex-direction: column;
                        gap: 15px;
                    }
                    .bogu-shelf {
                        min-height: 120px;
                        padding: 15px 10px;
                    }
                    .shelf-title {
                        font-size: 0.95rem; padding: 4px 15px; margin-bottom: 10px;
                    }
                    .shelf-content { gap: 6px; }
                    .placed-tag { font-size: 0.85rem; padding: 5px 10px; width: 90%; }
                }
            `;
            document.head.appendChild(style);
        }

        // 2. 建立小遊戲的 UI 結構
        const gameOverlay = document.createElement('div');
        gameOverlay.id = 'game-overlay';
        
        const getImgUrl = (key) => `assets/images/${monogatari.assets('images')[key]}`;

        gameOverlay.innerHTML = `
            <div class="game-box" id="game-main-box">
                <div class="game-title">🪵 御器考驗・博古歸位 🪵</div>
                <div class="game-subtitle">請按分類將瓷器「拖曳」或「點選瓷器再點格子」至正確的博古架中</div>
                <div class="timer-container">
                    <div id="game-timer-bar" class="timer-bar"></div>
                </div>
                <div class="item-pool-zone" id="item-pool">
                    <div class="pool-hint">✨ 瓷器鑑賞完畢，考驗通過 ✨</div>
                </div>
                <div class="shelves-container">
                    <div class="bogu-shelf" data-category="underglaze">
                        <div class="shelf-title">釉下彩</div>
                        <div class="shelf-content" id="shelf-underglaze"></div>
                    </div>
                    <div class="bogu-shelf" data-category="overglaze">
                        <div class="shelf-title">釉上 / 鬥彩</div>
                        <div class="shelf-content" id="shelf-overglaze"></div>
                    </div>
                    <div class="bogu-shelf" data-category="monochrome">
                        <div class="shelf-title">單色釉</div>
                        <div class="shelf-content" id="shelf-monochrome"></div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(gameOverlay);

        // 3. 核心資料集
        const porcelainData = [
            { id: 'gallery_001', type: '明代官窯', name: '釉里紅三友帶蓋瓷梅瓶', category: 'underglaze' },
            { id: 'gallery_002', type: '成化傳世', name: '鬥彩雞缸杯', category: 'overglaze' },
            { id: 'gallery_003', type: '永樂盛世', name: '青花一把蓮盤', category: 'underglaze' },
            { id: 'gallery_004', type: '宋代極簡', name: '青瓷劃花蓮瓣碗', category: 'monochrome' }
        ];

        const playSynthSound = (type) => {
            try {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                if (!AudioContext) return;
                const ctx = new AudioContext();
                if (type === 'ding') {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(987.77, ctx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime(1318.51, ctx.currentTime + 0.08);
                    gain.gain.setValueAtTime(0.25, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
                    osc.connect(gain); gain.connect(ctx.destination);
                    osc.start(); osc.stop(ctx.currentTime + 0.6);
                } else if (type === 'shatter') {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(180, ctx.currentTime);
                    osc.frequency.linearRampToValueAtTime(30, ctx.currentTime + 0.25);
                    gain.gain.setValueAtTime(0.4, ctx.currentTime);
                    gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.3);
                    osc.connect(gain); gain.connect(ctx.destination);
                    osc.start(); osc.stop(ctx.currentTime + 0.3);
                }
            } catch (e) { console.error("音效播放失敗:", e); }
        };

        let itemQueue = [];
        let currentItem = null;
        let gameTimer = null;
        const totalTime = 25;
        let timeLeft = totalTime;

        // 🌟 新增：點擊選取狀態變數
        let clickSelectedArmed = false;

        const mainBox = document.getElementById('game-main-box');
        const itemPool = document.getElementById('item-pool');
        const timerBar = document.getElementById('game-timer-bar');
        const shelves = document.querySelectorAll('.bogu-shelf');

        // 清除點選狀態的輔助函數
        const clearClickSelection = () => {
            clickSelectedArmed = false;
            const activePorcelain = document.getElementById('active-porcelain');
            if (activePorcelain) activePorcelain.classList.remove('active-select');
            shelves.forEach(s => s.classList.remove('selectable-target'));
        };

        const initGame = () => {
            document.getElementById('shelf-underglaze').innerHTML = '';
            document.getElementById('shelf-overglaze').innerHTML = '';
            document.getElementById('shelf-monochrome').innerHTML = '';
            itemQueue = [...porcelainData].sort(() => Math.random() - 0.5);
            timeLeft = totalTime;
            timerBar.style.width = '100%';
            
            clearClickSelection();

            clearInterval(gameTimer);
            gameTimer = setInterval(() => {
                timeLeft -= 0.1;
                const percentage = (timeLeft / totalTime) * 100;
                timerBar.style.width = `${percentage}%`;
                if (timeLeft <= 0) {
                    clearInterval(gameTimer);
                    triggerFailure("時間耗盡！瓷器在混亂中翻倒碎裂了！");
                }
            }, 100);

            spawnNextItem();
        };

        const spawnNextItem = () => {
            const oldItem = document.getElementById('active-porcelain');
            if (oldItem) oldItem.remove();

            clearClickSelection();

            if (itemQueue.length === 0) {
                clearInterval(gameTimer);
                setTimeout(() => {
                    playSynthSound('ding');
                    gameOverlay.style.transition = 'opacity 0.4s';
                    gameOverlay.style.opacity = '0';
                    setTimeout(() => {
                        gameOverlay.remove();
                        monogatari.next(); 
                    }, 400);
                }, 400);
                return;
            }

            currentItem = itemQueue.shift();

            const pElem = document.createElement('div');
            pElem.id = 'active-porcelain';
            pElem.className = 'draggable-porcelain';
            pElem.setAttribute('draggable', 'true');
            pElem.innerHTML = `
                <img src="${getImgUrl(currentItem.id)}" alt="${currentItem.name}">
                <div class="draggable-text">
                    <div class="p-type">${currentItem.type}</div>
                    <div class="p-name">${currentItem.name}</div>
                </div>
            `;

            // ================= 桌機端拖拽事件 =================
            pElem.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', currentItem.category);
                pElem.style.opacity = '0.5';
            });

            pElem.addEventListener('dragend', () => {
                pElem.style.opacity = '1';
            });

            // ================= 📱 新增：行動端點選選取事件 =================
            pElem.addEventListener('click', (e) => {
                e.stopPropagation(); // 防止點擊泡泡擴散
                clickSelectedArmed = !clickSelectedArmed;
                
                if (clickSelectedArmed) {
                    pElem.classList.add('active-select');
                    shelves.forEach(s => s.classList.add('selectable-target'));
                } else {
                    pElem.classList.remove('active-select');
                    shelves.forEach(s => s.classList.remove('selectable-target'));
                }
            });

            itemPool.appendChild(pElem);
        };

        const triggerFailure = (msg) => {
            clearInterval(gameTimer);
            clearClickSelection();
            playSynthSound('shatter');
            mainBox.classList.add('shake-anim');
            setTimeout(() => mainBox.classList.remove('shake-anim'), 400);
            alert(`💥 【瓷器碎裂】 💥\n\n${msg}\n師傅嘆了口氣，一揮袖將碎片收走，讓你重新擺放。`);
            initGame();
        };

        // 博古架事件綁定（同時兼顧拖拽放落與點擊判定）
        shelves.forEach(shelf => {
            // 1. 拖拽滑入
            shelf.addEventListener('dragover', (e) => {
                e.preventDefault();
                shelf.classList.add('drag-over');
            });
            // 2. 拖拽滑出
            shelf.addEventListener('dragleave', () => {
                shelf.classList.remove('drag-over');
            });
            // 3. 拖拽放開判定
            shelf.addEventListener('drop', (e) => {
                e.preventDefault();
                shelf.classList.remove('drag-over');
                const droppedCategory = e.dataTransfer.getData('text/plain');
                const targetCategory = shelf.getAttribute('data-category');

                if (droppedCategory === targetCategory) {
                    playSynthSound('ding');
                    const contentZone = shelf.querySelector('.shelf-content');
                    const tag = document.createElement('div');
                    tag.className = 'placed-tag';
                    tag.innerText = currentItem.name;
                    contentZone.appendChild(tag);
                    spawnNextItem();
                } else {
                    itemQueue.unshift(currentItem);
                    triggerFailure(`放錯了！「${currentItem.name}」不屬於【${shelf.querySelector('.shelf-title').innerText}】！`);
                }
            });

            // 4. 📱 新增：行動端點擊分類判定
            shelf.addEventListener('click', () => {
                // 如果目前沒有點選任何瓷器，則不響應點擊
                if (!clickSelectedArmed) return;

                const targetCategory = shelf.getAttribute('data-category');

                // 分流判定邏輯（與 Drop 核心機制相同）
                if (currentItem.category === targetCategory) {
                    playSynthSound('ding');
                    const contentZone = shelf.querySelector('.shelf-content');
                    const tag = document.createElement('div');
                    tag.className = 'placed-tag';
                    tag.innerText = currentItem.name;
                    contentZone.appendChild(tag);
                    spawnNextItem(); // 成功時內部會自動清除點選樣式
                } else {
                    itemQueue.unshift(currentItem);
                    triggerFailure(`放錯了！「${currentItem.name}」不屬於【${shelf.querySelector('.shelf-title').innerText}】！`);
                }
            });
        });

        initGame();
        return false; 
}, // ✨【修正 3】加上此處的逗號，用來隔開小遊戲 Function 與下一個結算 Function

        'y 呼……我緊張的手心直冒汗！',
        'show character w normal at wang-giant-left',
        'w 哈哈哈！做的好！這才像我大明的鑑賞家！',
        'w 這關考驗，便算你實至名歸地通過了！接著去準備下一項挑戰吧！',

    function () {
        monogatari.storage ({ route_explore_completed: true }); 
        monogatari.run ('jump RouteHub');                  
        return false;                                       
    }
],


    // 萬里流芳的藍（瓷器的異國結合與交流）//
    'Label_MerchantRoute_Start': [
        'show scene background_horbor with fadeIn',
        'centered 這裡是涉外商行碼頭，波光粼粼的昌江，岸邊停泊著裝滿木箱的貨船，箱子上貼著「大洋行」的封條。',
        'centered 這裡便是大明外銷世界瓷器的集散中心',
        'show character s normal at salem-giant-right',
        () => {
            const currentGender = monogatari.storage('player_gender') || 'female'; 
            monogatari.run (`show character y ${currentGender}_normal at player-giant-left`);
            return true;
        },

        's 噢！我的朋友！這次的青花瓷器，上面的紋飾真是太完美了！真主保佑，這批貨運回西域，蘇丹陛下一定會賞賜我整整一箱寶石！',
        's 啊！想必這就是我們那流浪的小兄弟？',
        'y 哇，這位外國友人好激動。不過……明朝的瓷器上，為什麼會出現看起來不怎麼「中式」的器型？',
        's 我叫薩利姆喔，當然是你們大明朝的商人們根據外國的需求，在瓷器上做出不同的風格變化啊！',
        's 例如這波斯、西洋人吃飯的習慣不同，大家族圍在一起吃飯，需要極大的平盤；而且我們啊不愛喝茶，愛喝紅酒與香料湯，所以需要大執壺、雙耳罐。',
        'y 懂了！原來是因為不同的文化與貿易需求啊！',
        's 不僅如此！景德鎮之所以能燒製出那種驚艷天下的深邃藍色，靠的也是陸上與海上絲綢之路，萬里迢迢帶來的進口青料——「蘇麻離青」呢！',
        'y 原來這青色...還有分很多不同的概念啊！',
        's 呵呵呵是的！平等青、蘇麻離青、回青，都有各自的韻味啊！',
        'show image gallery_011 with fadeIn',
        's 且看這！平等青是繼進口蘇麻離青之後，國產青料序列中的重要一環呢～使用平等青的話，發色則淺淡柔和、清澈而明晰',
        's 至於為何呈現此色，乃是因平等青料在製備時淘煉精細，含雜質較少，其成分中含鐵量較低（較少）！',
        's 使得其燒成後呈色淡雅清亮、藍中泛灰青，且呈色穩定，幾乎沒有暈散現象。',
        'y 確實！相比青花瓷淡雅許多~',
        'hide image gallery_011 with fadeOut',
        's 但是也不能忽視我們外國人的貢獻啊！', 
        'show image gallery_012 with fadeIn',
        's 永樂年間，鄭和大人七次下西洋從伊拉克薩馬拉地區帶回蘇麻離青！成為你們大明重要的青色來源呢～',
        's 論其呈色有三種情況，一種為呈色靛藍，絢麗濃豔，清晰而通透；第二種典型情況則是有暈散。',
        's 第三種情況的發色特徵是：藍豔、晶瑩亮麗，仿佛鑲嵌於釉下的藍寶石，熠熠閃光，並呈現出明顯的紫羅蘭色',
        's 且注意看的話，你會發現凝聚處有明顯的濃黑色結晶斑塊或斑點，暈散情況嚴重',
        'y 確實！瓷器好有趣啊!',
        'hide image gallery_012 with fadeOut',
        's 話說小兄弟，你可知道你大明第一個到歐洲的瓷器是什麼呢？',
        'y 欸啊！這個我還真的不清楚呢！',
        'show image gallery_013 with fadeIn',
        's 就是這件！豐山瓶（Fonthill Vase），這是一件罕見的「實驗性」花瓶，圓盤上有浮雕裝飾，採用常見的單色青白釉。似乎是中國使節拜訪教宗的時候贈送的喔！',
        'y 哇啊！果然瓶身非常的漂釀欸！',
        'hide image gallery_013 with fadeOut',
        's 嘿嘿，我們歐洲可是流行過青花瓷的風潮呢～',
        'show image gallery_014 with fadeIn',
        's 看這件，《Still Life of Fruit on a Pewter Plate and in a Wan-li Kraak Bowl》，是荷蘭畫家Jan Davidsz. de Heem 的代表性水果靜物作品之一！',
        's 畫面以成熟水果為主角，包括葡萄、桃子、檸檬等豐饒食材，被精心安排於錫製盤器與你們中國生產的克拉克瓷（Kraak porcelain）碗中呢！',
        'y （細細端詳）果然如此！話說你怎麼會有這件畫作...？',
        'hide image gallery_014 with fadeOut',
        's 別問那麼多...外國人的事情你不要知道的好！',
        's 我們歐洲人甚至有仿製你們的瓷器呢～',
        'show image gallery_015 with fadeIn',
        'y 像是什麼呢！',
        's 台夫特陶器（Delft pottery、Delftware），是荷蘭對明朝青花瓷的模仿，經本土演繹後逐漸形成了自己獨特的風格，成為荷蘭國家級的文化象徵之一呢！',
        'hide image gallery_015 with fadeOut',   
        's 來吧小兄弟，讓我展示幾件和異國有關的瓷器！',
        '於是，你和薩利姆一起在碼頭的貨倉裡，欣賞了幾件大明外銷的珍品：',

        function startPorcelainGallery() {
        // =========================================================================
        // 🛡️ 1. 防護機制：動態注入名瓷鑑賞專屬的精美 CSS 樣式
        // =========================================================================
        if (!document.getElementById('porcelain-gallery-style')) {
            const style = document.createElement('style');
            style.id = 'porcelain-gallery-style';
            style.innerHTML = `
                /* 🛡️ 核心防護：確保 Padding 與邊框不撐擠版面 */
                #gallery-overlay *, #gallery-overlay *::before, #gallery-overlay *::after {
                    box-sizing: border-box;
                }

                #gallery-overlay {
                    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
                    background: rgba(10, 10, 10, 0.9); z-index: 9999;
                    display: flex; justify-content: center; align-items: center;
                    font-family: 'PingFang TC', 'Microsoft JhengHei', sans-serif;
                    padding: 15px;
                }
                .gallery-box {
                    width: 100%; max-width: 850px; background: rgba(25, 25, 25, 0.95);
                    border: 2px solid #da9e47; border-radius: 16px; padding: 35px;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.8); text-align: center;
                    position: relative;
                    max-height: 95vh; overflow-y: auto; /* 預防矮螢幕時內容被裁切 */
                }
                .gallery-title { color: #da9e47; font-size: 1.8rem; letter-spacing: 3px; margin-bottom: 5px; font-weight: bold; }
                .gallery-subtitle { color: #aaa; font-size: 0.9rem; margin-bottom: 30px; }
                
                /* 🎴 四大瓷器 Icon 佈局 (電腦端維持原樣) */
                .gallery-grid {
                    display: flex; justify-content: space-between; gap: 20px; margin-bottom: 30px;
                }
                .gallery-card {
                    flex: 1; background: rgba(255,255,255,0.04); border: 1px solid #444;
                    border-radius: 12px; padding: 20px 15px; cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                    position: relative; overflow: hidden;
                    min-width: 0; /* 防止 Flex 項目強行撐開 */
                }
                .gallery-card:hover {
                    border-color: #da9e47; background: rgba(218, 158, 71, 0.08);
                    transform: translateY(-5px);
                }
                /* 已點擊過的狀態：右上角顯示黃金小勾勾 */
                .gallery-card.visited {
                    border-color: #b57c2b; background: rgba(218, 158, 71, 0.03);
                }
                .gallery-card.visited::after {
                    content: '✓'; position: absolute; top: 8px; right: 12px;
                    color: #da9e47; font-weight: bold; font-size: 1.1rem;
                }
                /* 目前正選中的狀態 */
                .gallery-card.active {
                    border-color: #da9e47; background: rgba(218, 158, 71, 0.15);
                    box-shadow: 0 0 15px rgba(218, 158, 71, 0.3);
                }
                
                /* 🖼️ 瓷器圖片樣式（Icon 顯示規格為 100x100） */
                .porcelain-icon {
                    width: 100px; height: 100px; margin: 0 auto 12px;
                    display: flex; justify-content: center; align-items: center;
                }
                .porcelain-icon img {
                    max-width: 100%; max-height: 100%; object-fit: contain;
                    filter: drop-shadow(0 5px 10px rgba(0,0,0,0.5));
                }
                .porcelain-name { color: #fff; font-size: 1.1rem; font-weight: bold; }
                
                /* 🔍 ✨【左右分流 100% 全螢幕大圖劇院級圖層 (電腦端)】 */
                #large-preview-wrap {
                    position: fixed;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: rgba(10, 10, 10, 0.98);
                    display: flex; flex-direction: row; justify-content: center; align-items: center;
                    gap: 50px; padding: 40px 60px; box-sizing: border-box;
                    transform: scale(0.95); opacity: 0; pointer-events: none;
                    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                    z-index: 10000;
                }
                /* 啟用放大時的狀態 */
                #large-preview-wrap.visible {
                    transform: scale(1); opacity: 1; pointer-events: auto;
                }
                
                /* 左側區域：大圖專屬置中容器 */
                .preview-img-container {
                    flex: 1.3; height: 100%; display: flex; justify-content: center; align-items: center;
                }
                /* 滿版大圖 */
                #large-preview-img {
                    max-height: 85vh; max-width: 100%; object-fit: contain;
                    filter: drop-shadow(0 20px 45px rgba(0,0,0,0.95));
                    cursor: pointer; transition: transform 0.3s ease;
                }
                #large-preview-img:hover {
                    transform: scale(1.02);
                }
                
                /* 💬 ✨【右側區域：優雅獨立的毛玻璃說明面板，絕不擋圖】 */
                .preview-text-panel {
                    flex: 0.7; max-width: 460px; height: 75vh;
                    background: rgba(22, 22, 22, 0.85); 
                    border-left: 5px solid #da9e47;
                    border-top: 1px solid rgba(255,255,255,0.08);
                    border-right: 1px solid rgba(255,255,255,0.08);
                    border-bottom: 1px solid rgba(255,255,255,0.08);
                    border-radius: 12px; padding: 40px 25px 25px;
                    text-align: left; box-shadow: 0 15px 35px rgba(0,0,0,0.6);
                    backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);
                    display: flex; flex-direction: column; position: relative; box-sizing: border-box;
                }
                /* 內建獨立長文滾動槽 */
                .preview-text-scroll {
                    flex: 1; overflow-y: auto; padding-right: 10px; margin-top: 5px;
                }
                /* 細緻微型滾動條美化 */
                .preview-text-scroll::-webkit-scrollbar { width: 5px; }
                .preview-text-scroll::-webkit-scrollbar-track { background: rgba(0,0,0,0.05); }
                .preview-text-scroll::-webkit-scrollbar-thumb { background: rgba(218, 158, 71, 0.4); border-radius: 3px; }
                .preview-text-scroll::-webkit-scrollbar-thumb:hover { background: #da9e47; }

                .floating-speaker { color: #5bc0de; font-weight: bold; font-size: 1.25rem; margin-bottom: 12px; }
                .floating-content { color: #eee; font-size: 1.05rem; line-height: 1.7; letter-spacing: 1.5px; text-align: justify; }
                
                /* 右上角點擊縮回提示 */
                .close-hint {
                    position: absolute; top: 15px; right: 20px;
                    font-size: 0.8rem; color: #da9e47; letter-spacing: 1px;
                    opacity: 0.8; animation: pulse-hint 1.5s infinite;
                    cursor: pointer; z-index: 11;
                }
                @keyframes pulse-hint {
                    0% { opacity: 0.4; } 50% { opacity: 1; } 100% { opacity: 0.4; }
                }
                
                /* 📢 初始提示對話框（未點擊任何瓷器前顯示於底部） */
                .gallery-dialog {
                    background: rgba(0, 0, 0, 0.6); border: 1px solid #555;
                    border-radius: 8px; padding: 20px; min-height: 100px;
                    text-align: left; margin-bottom: 25px; position: relative;
                }
                .dialog-speaker { color: #5bc0de; font-weight: bold; font-size: 1.1rem; margin-bottom: 8px; }
                .dialog-content { color: #eee; font-size: 1.05rem; line-height: 1.6; letter-spacing: 1px; }
                
                /* 🏁 底部前進按鈕 */
                .gallery-footer { display: flex; justify-content: flex-end; }
                .gallery-btn {
                    background: linear-gradient(135deg, #da9e47, #b57c2b); border: none;
                    padding: 10px 35px; font-size: 1rem; color: white; font-weight: bold;
                    border-radius: 20px; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.3);
                    transition: all 0.2s;
                }
                .gallery-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 6px 15px rgba(218,158,71,0.4); }
                .gallery-btn:disabled { background: #444; color: #888; cursor: not-allowed; box-shadow: none; }


                /* ======================================================= */
                /* 📱【關鍵修正：手持行動裝置 RWD 獨立響應規則，完美防擠壓】 */
                /* ======================================================= */
                @media (max-width: 768px) {
                    .gallery-box {
                        padding: 20px 15px; /* 縮減外框留白，擴大可用面積 */
                    }
                    .gallery-title { font-size: 1.4rem; letter-spacing: 1px; }
                    .gallery-subtitle { margin-bottom: 20px; }

                    /* 💡 解法：卡片不硬擠橫排，自動切換成 2x2 雙列網格，保持大氣尺寸 */
                    .gallery-grid {
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 15px;
                        margin-bottom: 20px;
                    }
                    .gallery-card {
                        flex: 0 1 calc(50% - 8px); /* 精確計算雙列寬度 */
                        min-width: 130px;
                        padding: 15px 10px;
                    }
                    .porcelain-icon {
                        width: 75px; height: 75px; margin-bottom: 8px; /* 等比例微調 Icon 尺寸 */
                    }
                    .porcelain-name { font-size: 0.95rem; }

                    /* 💡 解法：大圖劇院層由「左右並排」改為「上下疊加」，解放寬度 */
                    #large-preview-wrap {
                        flex-direction: column;
                        gap: 15px;
                        padding: 20px 15px;
                    }
                    .preview-img-container {
                        flex: 1; width: 100%; height: auto;
                        max-height: 40vh; /* 固定大圖最高佔用 40% 螢幕高度 */
                    }
                    #large-preview-img {
                        max-height: 100%;
                    }
                    .preview-text-panel {
                        flex: 1.2; width: 100%; max-width: 100%;
                        height: auto; max-height: 45vh; /* 固定文字面板最高佔用 45% 螢幕高度，其餘自由捲動 */
                        padding: 35px 15px 15px;
                    }
                    .floating-speaker { font-size: 1.1rem; margin-bottom: 6px; }
                    .floating-content { font-size: 0.95rem; letter-spacing: 1px; }
                    .close-hint { top: 12px; right: 15px; }
                }

                /* 針對極窄手機螢幕 (如舊款 iPhone SE) 的極致防壓防爆 */
                @media (max-width: 360px) {
                    .gallery-grid { gap: 10px; }
                    .gallery-card { flex: 0 1 100%; } /* 直排一條龍，絕對不擠壓 */
                }
            `;
            document.head.appendChild(style);
        }

        // =========================================================================
        // 🛡️ 2. 防護機制：清理舊 UI 與重置全域鍵盤監聽（應對回溯與存讀檔安全）
        // =========================================================================
        const oldOverlay = document.getElementById('gallery-overlay');
        if (oldOverlay) {
            oldOverlay.remove();
        }
        if (window.porcelainGalleryBlockKeys) {
            window.removeEventListener('keydown', window.porcelainGalleryBlockKeys, true);
        }

        // 建立小遊戲的 UI 結構
        const galleryOverlay = document.createElement('div');
        galleryOverlay.id = 'gallery-overlay';
        
        const getImgUrl = (key) => `assets/images/${monogatari.assets('images')[key]}`;

        galleryOverlay.innerHTML = `
            <div class="gallery-box">
                <div class="gallery-title">🏛️ 明朝與異國：瓷器大觀 🏛️</div>
                <div class="gallery-subtitle">點擊各尊瓷器仔細鑑賞，全數觀摩完畢後方可繼續前進</div>
                
                <div class="gallery-grid">
                    <div class="gallery-card" data-idx="0" tabindex="0" role="button" aria-label="青花花鳥紋瓷盤，點擊展開詳細鑑賞">
                        <div class="porcelain-icon"><img src="${getImgUrl('gallery_005')}" alt="青花"></div>
                        <div class="porcelain-name">青花花鳥紋瓷盤</div>
                    </div>
                    <div class="gallery-card" data-idx="1" tabindex="1" role="button" aria-label="瓶(錫釉陶器)，點擊展開詳細鑑賞">
                        <div class="porcelain-icon"><img src="${getImgUrl('gallery_006')}" alt="玲瓏"></div>
                        <div class="porcelain-name">瓶(錫釉陶器)</div>
                    </div>
                    <div class="gallery-card" data-idx="2" tabindex="2" role="button" aria-label="青花纏枝花卉紋執壺，點擊展開詳細鑑賞">
                        <div class="porcelain-icon"><img src="${getImgUrl('gallery_007')}" alt="粉彩"></div>
                        <div class="porcelain-name">青花纏枝花卉紋執壺</div>
                    </div>
                    <div class="gallery-card" data-idx="3" tabindex="3" role="button" aria-label="青花雲鶴紋提樑罐，點擊展開詳細鑑賞">
                        <div class="porcelain-icon"><img src="${getImgUrl('gallery_008')}" alt="顏色釉"></div>
                        <div class="porcelain-name">青花雲鶴紋提樑罐</div>
                    </div>
                </div>
                
                <div class="gallery-dialog">
                        <div id="gallery-content" class="dialog-content">（擺在架上的四尊瓷器散發着內斂的光芒，點擊上方瓷器開始鑑賞。）</div>
                </div>
                
                <div class="gallery-footer">
                    <button id="gallery-next-btn" class="gallery-btn" disabled>繼續劇情</button>
                </div>
            </div>
            
            <div id="large-preview-wrap">
                <div class="preview-img-container">
                    <img id="large-preview-img" src="" alt="瓷器細節放大圖">
                </div>
                
                <div class="preview-text-panel">
                    <div class="close-hint">✕ 點擊任意處縮回</div>
                    <div class="floating-speaker">說明</div>
                    <div class="preview-text-scroll">
                        <div id="floating-content" class="floating-content"></div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(galleryOverlay);

        // =========================================================================
        // 🛡️ 3. 【全新機制】全面封鎖 Monogatari 背景偷跑（點擊與鍵盤劫持盾）
        // =========================================================================
        // (A) 阻止滑鼠點擊穿透到最底層的 Monogatari 劇情層
        galleryOverlay.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // (B) 強行攔截並沒收 空白鍵 / Enter / 方向鍵，不讓 Monogatari 偵測到
        window.porcelainGalleryBlockKeys = function (e) {

            if (e.key === 'Enter' && (document.activeElement.classList.contains('gallery-card') || document.activeElement.tagName === 'BUTTON')) {
        return; 
    }
            const keysToBlock = [' ', 'Enter', 'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'];
            if (keysToBlock.includes(e.key)) {
                e.preventDefault();
                e.stopPropagation(); // 在捕獲階段直接截斷，不讓事件冒泡到 window
            }
        };
        // 第三個參數設為 true（使用 Capture 捕獲模式），確保優先權高於遊戲引擎
        window.addEventListener('keydown', window.porcelainGalleryBlockKeys, true);


        // 3. 設定主角對四個瓷器的台詞文本
        const porcelainIntros = [
            "「典型的外銷瓷，也是鼎鼎大名的克拉克瓷中的一員。克拉克瓷作為遠銷海外的瓷期，多數都是以人物、動物等為主要素材，此件瓷器上所包含的中國花鳥畫不僅是東方的自然美學，同時也蘊含著美好寓意，如畫中鷺鷥與蓮花的組合，代表一路連科，表達對仕途的祈願。此外，開光作為瓷器上劃定裝飾區域的手法，此件器物上則是使用期最為獨特的八角開光，將盤的內壁和外壁以單線或連辮形分隔出八個裝飾區域，而在其內部繪有對稱的花卉、幾何紋飾，從而使布局繁密有序。這種裝飾風格不僅表示歐洲的審美，同時也編織出有別於中國官窯本身嚴謹的風格，更顯自然活潑。」",
            "「這件花瓶的把手由纏繞的蛇形構成，瓶蓋上裝有兩層插花嘴，它屬於一組精美的臺夫特陶器（Delftware），這些瓷器都帶有底座，製作於1690年代。臺夫特陶器（Delftware）盛行於 1630 年之後到十八世紀中葉，在荷蘭生產製造，以中國瓷器，以及歐洲裝飾花紋為設計靈感，是東西共融的絕妙表現。」",
            "「明代永樂時期，與中亞、西亞地區交流頻繁，在外來文化的影響下，部分青花瓷器以伊斯蘭地區金屬器作為模仿的對象，燒製出前所未有的形制。水壺是伊斯蘭教寺院備用的器物，每當舉行朝拜儀式時，每個穆斯幕都要用水壺來沐浴淨身。」",
            "「全器仿木製提梁桶，帶蓋，竹節鈕。筒形器身中段以凸弦紋分作兩段，上段繪雲鶴紋、下段蝦蟹魚藻紋。提樑罐日文稱為「水指」，是容裝清水，作為調整沸水溫度，以及洗滌茶碗、茶筅之用。 提樑造型水罐在十六世紀中頗為盛行，當時多以木桶或漆器為之，千利休也曾向工匠訂製木桶型漆器水罐。這類青花水罐是明末天啟崇禎年間，日本茶人向中國景德鎮訂製，在中國罕見此造型。器沿及提梁多處剝釉，然而日本茶人覺得此種斑駁缺陷，最能體現日本茶道的麁相美感，稱其為「蟲蛀」，尤受茶人珍愛。 」"
        ];

        // 4. 變數與 DOM 元件綁定
        const visitedStatus = [false, false, false, false];
        const cards = document.querySelectorAll('.gallery-card');
        const floatingContent = document.getElementById('floating-content');
        const nextBtn = document.getElementById('gallery-next-btn');
        
        const previewWrap = document.getElementById('large-preview-wrap');
        const previewImg = document.getElementById('large-preview-img');

        // 監聽：點擊 Icon 卡片
        cards.forEach(card => {
            card.addEventListener('click', function (e) {
                e.stopPropagation(); // 安全防護
                const idx = parseInt(this.getAttribute('data-idx'));
                const imgSrc = this.querySelector('img').getAttribute('src');
                
                // 更新選取樣式與看過標記
                cards.forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                this.classList.add('visited');
                visitedStatus[idx] = true;
                
                // 觸發滿版並分流布局
                previewImg.setAttribute('src', imgSrc);
                floatingContent.innerText = porcelainIntros[idx];
                previewWrap.classList.add('visible');
                
                // 檢查是否全看過了
                if (visitedStatus.every(status => status === true)) {
                    nextBtn.disabled = false;
                }
            });
        });

        // 💥 觸發縮回：點擊大圖或深色背景任意處縮回大圖層
        previewWrap.addEventListener('click', () => {
            previewWrap.classList.remove('visible');
        });

        // 💡 體驗提升：防止點擊右側長文面板時冒泡關閉，保障流暢的捲動閱讀
        document.querySelector('.preview-text-panel').addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // 🛠️ 修正 Bug：因為面板阻斷了冒泡，在此為內部的「✕ 點擊任意處縮回」綁定獨立的關閉事件
        document.querySelector('.close-hint').addEventListener('click', (e) => {
            e.stopPropagation(); // 防止二次干擾
            previewWrap.classList.remove('visible');
        });

        // 5. 點擊按鈕關閉並推進主線劇情
        nextBtn.addEventListener('click', () => {
            galleryOverlay.style.transition = 'opacity 0.3s';
            galleryOverlay.style.opacity = '0';
            setTimeout(() => {
                // =========================================================================
                // 🛡️ 4. 解除防護機制：安全撤除鍵盤盾，還給玩家正常的劇情操作權
                // =========================================================================
                if (window.porcelainGalleryBlockKeys) {
                    window.removeEventListener('keydown', window.porcelainGalleryBlockKeys, true);
                    delete window.porcelainGalleryBlockKeys;
                }
                galleryOverlay.remove();
                
                // 呼叫 Monogatari 推進劇情
                if (typeof monogatari !== 'undefined' && monogatari.next) {
                    monogatari.next(); 
                }
            }, 300);
        });

        // 告知 Monogatari 暫停自動前進，等待小遊戲通關後手動觸發 next()
        return false; 
},
    
    's 哈哈哈！看的甚是投入嘛！怎麼？還有什麼疑問呢？',
    'y 我明白了。瓷器在明代，不僅僅是日常生活用品，更是串聯起海上與陸上絲綢之路的「國際通行貨幣」，是無聲的文化大使。',
    'w 沒錯！無論是風格、書楷甚至是器型等等，都是因為客戶的需求而訂製的呢！',
    'w 而且，像是臺夫特陶器的出現，也反過來證明大明的瓷器影響了外國的審美和工藝呢~',
    'y 原來如此！那什麼是瓷器的「開窗」？',
    'w 開窗是工匠在器物表面利用框線勾勒出圓形、方形、扇形等幾何圖案，並在其內繪製獨立畫面，形成「畫中有畫」的視覺層次，藉此凸顯主題、製造對比。',
    'y 原來如此！ ',
    'w 不過啊小兄弟...最後再考考你！',
'jump Label_Ask_sale'
    ],

    'Label_Ask_sale': [
        {
            'Choice': {
                'Dialog': 's 我這次要幫葡萄牙貴族訂製一批瓷器，他們要求在盤子中央繪製代表他們家族尊榮的『盾徽紋』，但又想要大明的精緻美感。你覺得這該如何與大明花紋結合？',
                'Option1': { 'Text': '將『盾徽紋』繪製在瓷盤的正中央，四周圍繞大明傳統的『纏枝蓮紋』或『折枝花果紋』，形成中西合璧的視覺焦點！', 'Do': 'jump choice_sale_right' },
                'Option2': { 'Text': '將西方盾徽畫在盤子的底部外面（落款處），盤子正面只畫大明的山水畫，這樣顯得含蓄優雅。', 'Do': 'jump choice_sale_wrong' }
            }
        }
    ],

    'choice_sale_wrong': [
        'show character s normal at master-giant-left',
        
        // 🎯 完美運作組合：有執行立繪，且精準煞車不吞字
        () => {
            const currentGender = monogatari.storage ().player_gender || 'female'; 
            // 1. 執行變更立繪
            monogatari.run (`show character y ${currentGender}_shocked at player-giant-right`);
            // 2. 立刻踩煞車，抵消 double advance
            return false; 
        },
        
        's 這你就不懂人的脾性了。那些貴族花了大價錢，就是要讓客人在宴會上一眼就看到他們的家族盾徽', // 🌟 這句也會完美出現！
        's 若畫在底部，難道要他們每次吃完飯都把盤子翻過來給客人看嗎？這可就失去炫耀的意義了。再想想！',
        'jump Label_Ask_sale' 
    ],

    'choice_sale_right': [
        'show character s normal at master-giant-left',
        
        () => {
            const currentGender = monogatari.storage ().player_gender || 'female'; 
            monogatari.run (`show character y ${currentGender}_happy at player-giant-right`);
            return false; 
        },

        's 妙極！既突出了貴族的家族尊榮，又保有了大明瓷藝的典雅。這等『紋章瓷』運去西洋，那些公爵一定願意用等重的黃金來換！',
        'm 原來這就是風靡歐洲的「外銷紋章瓷」的由來。不同的文明，都在這片白瓷上留下了交融的痕跡。',
        's 再給你最後的考驗吧！',

        function () {
        // 1. 動態注入絲路訂單解密小遊戲專屬的 CSS 樣式（全面自適應補強與滿版符號優化）
        if (!document.getElementById('silkroad-game-style')) {
            const style = document.createElement('style');
            style.id = 'silkroad-game-style';
            style.innerHTML = `
                /* 🛡️ 核心防護：確保 Padding 與邊框計算不會撐擠爆版面 */
                #silkroad-overlay *, #silkroad-overlay *::before, #silkroad-overlay *::after {
                    box-sizing: border-box;
                }

                #silkroad-overlay {
                    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
                    background: rgba(15, 20, 25, 0.95); z-index: 9999;
                    display: flex; justify-content: center; align-items: center;
                    font-family: 'PingFang TC', 'Microsoft JhengHei', sans-serif;
                    padding: 15px;
                }
                .silk-box {
                    width: 100%; max-width: 950px; background: rgba(28, 33, 41, 0.98);
                    border: 2px solid #b89254; border-radius: 16px; padding: 30px;
                    box-shadow: 0 25px 60px rgba(0,0,0,0.8);
                    display: flex; flex-direction: column; position: relative;
                    max-height: 95vh; overflow-y: auto; /* 預防矮螢幕時內容被裁切 */
                }
                .silk-header { text-align: center; margin-bottom: 20px; }
                .silk-title { color: #b89254; font-size: 1.8rem; letter-spacing: 3px; font-weight: bold; margin: 0; }
                .silk-subtitle { color: #8a96a3; font-size: 0.9rem; margin-top: 5px; }

                /* 遊戲主體版面：左瓷器、右面板 */
                .silk-main { flex: 1; display: flex; gap: 30px; align-items: center; justify-content: space-between; }
                
                /* ================= 左側：瓷器畫布與核心區域 ================= */
                .porcelain-container {
                    flex: 1.2; display: flex; justify-content: center; align-items: center; position: relative; padding: 10px;
                }
                /* 大盤本體 */
                .plate-rim-zone {
                    width: 360px; height: 360px; border-radius: 50%;
                    background: #fdfdfa; border: 8px double #ccc;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.5);
                    display: flex; justify-content: center; align-items: center;
                    position: relative; transition: all 0.4s ease; cursor: pointer;
                }
                /* 盤心放落區 */
                .plate-center-zone {
                    width: 180px; height: 180px; border-radius: 50%;
                    background: #f7f7f2; border: 2px dashed #999;
                    display: flex; justify-content: center; align-items: center;
                    transition: all 0.3s ease; text-align: center; font-size: 0.9rem; color: #888;
                    z-index: 2; position: relative; overflow: hidden;
                }
                
                /* 放落區 Hover 與啟動狀態提示 */
                .plate-rim-zone.drag-hover { border-color: #b89254; background: #fffdf3; }
                .plate-center-zone.drag-hover { border-color: #b89254; background: #fffdf3; color: #b89254; }
                .selected-target { box-shadow: 0 0 20px rgba(218, 146, 84, 0.6); border-color: #da9254 !important; }

                /* 🌟 紋飾純符號滿版渲染樣式（替代原本的文字備註） */
                .filled-pattern {
                    position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 50%;
                    display: flex; justify-content: center; align-items: center; pointer-events: none;
                }
                
                /* 盤心純符號覆蓋 */
                .center-style { 
                    font-size: 4.5rem; 
                    background: rgba(253, 253, 250, 0.9);
                    z-index: 5;
                    animation: zoomIn 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
                }

                /* 盤邊專屬工藝紋飾彩圈覆蓋 */
                .rim-style { z-index: 1; box-sizing: border-box; }
                .rim-symbol-bg { font-size: 10rem; opacity: 0.12; position: absolute; z-index: 0; }
                
                /* 根據不同的符號注入專屬的瓷器外圍花框工藝，徹底取代文字 */
                .rim-style-lotus { border: 25px double #104b75; background: rgba(16, 75, 117, 0.02); }
                .rim-style-geometric { border: 25px dashed #1c7cd6; background: rgba(28, 124, 214, 0.02); }
                .rim-style-shield { border: 25px solid #e8590c; background: rgba(232, 89, 12, 0.02); }
                .rim-style-fret { border: 25px double #0b7285; background: rgba(11, 114, 133, 0.02); }

                @keyframes zoomIn { from { transform: scale(0.5); opacity: 0; } to { transform: scale(1); opacity: 1; } }

                /* ================= 右側：訂單密碼與紋飾庫 ================= */
                .side-panel { flex: 0.8; display: flex; flex-direction: column; gap: 20px; }
                
                /* 顧客訂單提示框 */
                .order-card {
                    background: rgba(40, 48, 59, 0.8); border-left: 5px solid #b89254;
                    border-radius: 6px; padding: 15px 20px; text-align: left;
                }
                .client-info { color: #5bc0de; font-weight: bold; font-size: 1.1rem; margin-bottom: 6px; }
                .client-demand { color: #ddd; font-size: 0.95rem; line-height: 1.6; letter-spacing: 0.5px; }

                /* 四種紋飾素材庫 */
                .palette-title { color: #b89254; font-size: 1rem; font-weight: bold; text-align: left; margin: 0; }
                .pattern-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
                .pattern-item {
                    background: rgba(255,255,255,0.05); border: 1px solid #4f5e71; border-radius: 8px;
                    padding: 15px 10px; text-align: center; color: #eee; cursor: grab;
                    transition: all 0.2s ease; user-select: none; font-size: 0.95rem;
                }
                .pattern-item:hover { background: rgba(184, 146, 84, 0.15); border-color: #b89254; }
                .pattern-item:active { cursor: grabbing; }
                .pattern-item.active-select { background: rgba(218, 146, 84, 0.25); border-color: #da9254; }

                /* ================= 遊戲回饋與特效系統 ================= */
                .feedback-banner {
                    min-height: 45px; display: flex; justify-content: center; align-items: center;
                    font-size: 1.1rem; font-weight: bold; border-radius: 6px; margin-top: 15px; padding: 5px 10px;
                    text-align: center;
                }
                .status-idle { color: #8a96a3; }
                .status-success { color: #4caf50; background: rgba(76, 175, 80, 0.1); width: 100%; }
                .status-fail { color: #f44336; background: rgba(244, 67, 54, 0.1); width: 100%; }

                /* 底部按鈕 */
                .silk-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 20px; }
                .clear-btn { background: none; border: 1px solid #5f6e82; color: #a2b2c8; padding: 8px 20px; border-radius: 4px; cursor: pointer; font-weight: bold; }
                .clear-btn:hover { color: #fff; border-color: #fff; }
                .submit-btn {
                    background: linear-gradient(135deg, #b89254, #8e6d37); border: none;
                    padding: 10px 35px; font-size: 1rem; color: white; font-weight: bold;
                    border-radius: 20px; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.3); transition: all 0.2s;
                }
                .submit-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 6px 15px rgba(184,146,84,0.4); }
                .submit-btn:disabled { background: #444; color: #888; cursor: not-allowed; box-shadow: none; linear-gradient: none; }

                /* ✨ 成功時大盤旋轉發光特效 */
                @keyframes rotateGlow {
                    0% { transform: rotate(0deg); box-shadow: 0 0 20px #b89254; }
                    50% { box-shadow: 0 0 50px #ffdfa9, 0 0 20px #b89254; }
                    100% { transform: rotate(360deg); box-shadow: 0 0 20px #b89254; }
                }
                .success-animate { animation: rotateGlow 4s linear infinite; border-color: #b89254 !important; }


                /* ======================================================= */
                /* 📱【窄螢幕行動端專屬 RWD 響應規則，完全阻斷排版擠壓】 */
                /* ======================================================= */
                @media (max-width: 768px) {
                    .silk-box { padding: 20px 15px; }
                    .silk-title { font-size: 1.4rem; }
                    .silk-subtitle { font-size: 0.8rem; }
                    
                    /* 💡 解法：左右並排改為上下垂直堆疊，釋放橫向寬度 */
                    .silk-main { flex-direction: column; gap: 20px; }
                    .porcelain-container { flex: none; width: 100%; height: auto; }
                    
                    /* 安全縮放行動端的瓷盤比例，防止扣除手機寬度後溢出 */
                    .plate-rim-zone { width: 280px; height: 280px; border-width: 6px; }
                    .plate-center-zone { width: 130px; height: 130px; font-size: 0.8rem; }
                    
                    /* 同步等比縮減覆蓋符號與特製花邊的寬度 */
                    .center-style { font-size: 3.2rem; }
                    .rim-symbol-bg { font-size: 7.5rem; }
                    .rim-style-lotus { border-width: 18px; }
                    .rim-style-geometric { border-width: 18px; }
                    .rim-style-shield { border-width: 18px; }
                    .rim-style-fret { border-width: 18px; }

                    .side-panel { flex: none; width: 100%; }
                    .order-card { padding: 12px; }
                    .client-info { font-size: 1rem; }
                    .client-demand { font-size: 0.85rem; }
                    .pattern-grid { gap: 8px; }
                    .pattern-item { padding: 12px 6px; font-size: 0.85rem; }
                    .feedback-banner { font-size: 0.95rem; min-height: 40px; }
                    .silk-footer { margin-top: 15px; }
                }
            `;
            document.head.appendChild(style);
        }

        // 2. 建立小遊戲的 UI 結構
        const silkOverlay = document.createElement('div');
        silkOverlay.id = 'silkroad-overlay';

        silkOverlay.innerHTML = `
            <div class="silk-box">
                <div class="silk-header">
                    <div class="silk-title">🗺️ 絲路訂單解密 🗺️</div>
                    <div class="silk-subtitle">請將正確的紋飾碎片分配至瓷器相應區域，滿足海外客戶的密碼委託</div>
                </div>
                
                <div class="silk-main">
                    <div class="porcelain-container">
                        <div id="plate-rim" class="plate-rim-zone" data-zone="rim">
                            <div id="rim-text" style="position:absolute; bottom:20px; color:#aaa; font-size:0.8rem; pointer-events:none;">【盤邊放置區】</div>
                            
                            <div id="plate-center" class="plate-center-zone" data-zone="center">
                                <span id="center-text">【盤心放置區】<br><span style="font-size:0.75rem;color:#aaa;">可拖曳或點選</span></span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="side-panel">
                        <div class="order-card">
                            <div class="client-info">👤 葡萄牙使節的特別備忘錄</div>
                            <div class="client-demand">
                                「吾王渴求一件融合大明優雅與帝國榮光的精緻大盤。請在<b>【盤心】</b>鑄上象徵我朝至高尊榮的<b>王室盾徽</b>；並在<b>【盤邊】</b>環繞大明最經典內斂的<b>纏枝蓮紋</b>以作獻禮。萬不可出錯，此乃兩國交好之重器。」
                            </div>
                        </div>
                        
                        <div style="display:flex; flex-direction:column; gap:10px;">
                            <p class="palette-title">🎨 可用紋飾庫（支援拖曳或先點紋飾再點瓷器）</p>
                            <div class="pattern-grid">
                                <div class="pattern-item" draggable="true" data-pattern="lotus">🌸 大明纏枝蓮紋</div>
                                <div class="pattern-item" draggable="true" data-pattern="geometric">🔷 波斯幾何紋</div>
                                <div class="pattern-item" draggable="true" data-pattern="shield">🛡️ 葡萄牙皇家盾徽</div>
                                <div class="pattern-item" draggable="true" data-pattern="fret">🌀 回文裝飾</div>
                            </div>
                        </div>

                        <div id="silk-feedback" class="feedback-banner status-idle">
                            ☕ 尚未交付訂單...
                        </div>
                    </div>
                </div>
                
                <div class="silk-footer">
                    <button id="silk-clear-btn" class="clear-btn">重置紋飾</button>
                    <button id="silk-submit-btn" class="submit-btn">交付外銷訂單</button>
                </div>
            </div>
        `;
        document.body.appendChild(silkOverlay);

        // 3. 核心邏輯與變數控制
        // 正確答案：rim = lotus, center = shield
        const currentSelection = { rim: null, center: null };
        let selectedPatternId = null; // 用於點擊替代機制

        const rimZone = document.getElementById('plate-rim');
        const centerZone = document.getElementById('plate-center');
        const patternItems = document.querySelectorAll('.pattern-item');
        const feedback = document.getElementById('silk-feedback');
        const submitBtn = document.getElementById('silk-submit-btn');
        const clearBtn = document.getElementById('silk-clear-btn');

        // 🌟 核心修正：將原本的文字對照表，改為純符號對照表
        const patternSymbols = {
            lotus: "🌸",
            geometric: "🔷",
            shield: "🛡️",
            fret: "🌀"
        };

        // 更新放落區視覺呈現（以純符號與特製彩圈完全覆蓋該區域）
        function updateZoneVisual(zone) {
            const pattern = currentSelection[zone];
            if (zone === 'center') {
                const centerText = document.getElementById('center-text');
                if (pattern) {
                    // 盤心：放入純符號並覆蓋
                    centerText.innerHTML = `<div class="filled-pattern center-style">${patternSymbols[pattern]}</div>`;
                    centerZone.style.borderColor = "#da9254";
                } else {
                    centerText.innerHTML = `【盤心放置區】<br><span style="font-size:0.75rem;color:#aaa;">可拖曳或點選</span>`;
                    centerZone.style.borderColor = "#999";
                }
            } else if (zone === 'rim') {
                const rimContainer = document.getElementById('rim-text');
                // 移除舊的盤邊渲染
                const oldRim = rimZone.querySelector('.rim-style');
                if (oldRim) oldRim.remove();

                if (pattern) {
                    rimContainer.style.opacity = "0";
                    // 盤邊：新建一個滿版圓形層，利用特殊 Border 鑄造成對應的工藝彩圈，內部打上大符號浮雕
                    const rimDiv = document.createElement('div');
                    rimDiv.className = `filled-pattern rim-style rim-style-${pattern}`;
                    rimDiv.innerHTML = `<span class="rim-symbol-bg">${patternSymbols[pattern]}</span>`;
                    rimZone.appendChild(rimDiv);
                } else {
                    rimContainer.style.opacity = "1";
                }
            }
        }

        // ================= 機制 A：原生滑鼠拖曳 (Desktop) =================
        patternItems.forEach(item => {
            item.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', e.target.getAttribute('data-pattern'));
                patternItems.forEach(i => i.classList.remove('active-select'));
                e.target.classList.add('active-select');
                selectedPatternId = e.target.getAttribute('data-pattern');
            });
        });

        [rimZone, centerZone].forEach(zone => {
            zone.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.currentTarget.classList.add('drag-hover');
            });

            zone.addEventListener('dragleave', (e) => {
                e.currentTarget.classList.remove('drag-hover');
            });

            zone.addEventListener('drop', (e) => {
                e.preventDefault();
                e.currentTarget.classList.remove('drag-hover');
                const zoneName = e.currentTarget.getAttribute('data-zone');
                const pattern = e.dataTransfer.getData('text/plain') || selectedPatternId;
                
                if (pattern) {
                    if (zoneName === 'center') {
                        e.stopPropagation(); // 阻止盤心事件冒泡給盤邊
                    }
                    currentSelection[zoneName] = pattern;
                    updateZoneVisual(zoneName);
                }
            });
        });

        // ================= 機制 B：點擊替代方案 (Mobile / Touch Friendly) =================
        patternItems.forEach(item => {
            item.addEventListener('click', (e) => {
                patternItems.forEach(i => i.classList.remove('active-select'));
                item.classList.add('active-select');
                selectedPatternId = item.getAttribute('data-pattern');
                
                rimZone.classList.add('selected-target');
                centerZone.classList.add('selected-target');
            });
        });

        centerZone.addEventListener('click', (e) => {
            if (selectedPatternId) {
                e.stopPropagation(); // 防止點擊盤心觸發盤邊事件
                currentSelection['center'] = selectedPatternId;
                updateZoneVisual('center');
                clearSelectionState();
            }
        });

        rimZone.addEventListener('click', (e) => {
            if (selectedPatternId) {
                currentSelection['rim'] = selectedPatternId;
                updateZoneVisual('rim');
                clearSelectionState();
            }
        });

        function clearSelectionState() {
            selectedPatternId = null;
            patternItems.forEach(i => i.classList.remove('active-select'));
            rimZone.classList.remove('selected-target');
            centerZone.classList.remove('selected-target');
        }

        // ================= 重置與驗證功能 =================
        clearBtn.addEventListener('click', () => {
            currentSelection.rim = null;
            currentSelection.center = null;
            updateZoneVisual('rim');
            updateZoneVisual('center');
            clearSelectionState();
            rimZone.classList.remove('success-animate');
            feedback.className = "feedback-banner status-idle";
            feedback.innerHTML = "☕ 尚未交付訂單...";
            submitBtn.innerText = "交付外銷訂單";
            submitBtn.disabled = false;
        });

        submitBtn.addEventListener('click', () => {
            if (!currentSelection.rim || !currentSelection.center) {
                feedback.className = "feedback-banner status-fail";
                feedback.innerText = "⚠️ 瓷器尚有區域空白，請配齊紋飾後再行交付！";
                return;
            }

            if (currentSelection.rim === 'lotus' && currentSelection.center === 'shield') {
                feedback.className = "feedback-banner status-success";
                feedback.innerHTML = "🎉 外銷訂單完成！獲得金幣百兩 🪙";
                rimZone.classList.add('success-animate');
                submitBtn.innerText = "繼續劇情";
                
                submitBtn.removeEventListener('click', arguments.callee); 
                submitBtn.onclick = () => {
                    silkOverlay.style.transition = 'opacity 0.3s';
                    silkOverlay.style.opacity = '0';
                    setTimeout(() => {
                        silkOverlay.remove();
                        monogatari.next(); 
                    }, 300);
                };
            } else {
                feedback.className = "feedback-banner status-fail";
                feedback.innerText = "❌ 客戶退單：紋飾搭配不符合海外訂單需求，請重新調配紋飾！";
                
                const silkBox = document.querySelector('.silk-box');
                silkBox.style.animation = 'none';
                setTimeout(() => { silkBox.style.animation = 'shake 0.4s ease-in-out'; }, 10);
            }
        });

        return false; 
},

        'y 呼……好險！手真酸啊，終於把都成功了！',
        's 哈哈哈！做的好！這盤面真漂亮！這才是大明瓷器像樣的推廣者！',
        's 這關考驗，便算你實至名歸地通過了！接著去準備下一項挑戰吧！',
        
        function () {
            monogatari.storage ({ route_merchant_completed: true }); 
            monogatari.run ('jump RouteHub');                  
            return false;                                       
        },

    ],

    // ===== 大結局:掌控火候與完美開窯（動態小遊戲版） =====
    'Label_Final_Ending': [
        'show scene black with fadeIn',
        'centered 你徹底了解了瓷器在大明的發展',
        'centered 接下來，你將回到窯房，進行最後的難關，打造自己的瓷器...',
        'centered 之後，你便可以回到現實了！',
        
        'show scene background_kiln_interior with fadeIn',
        'centered 鎮窯內部，窯爐前。此時，窯爐已封好爐門，熱浪陣陣。大師傅一臉嚴肅的矗立在旁......',
        
        'show character m normal at master-giant-left',
        () => {
            const currentGender = monogatari.storage ().player_gender || 'female'; 
            monogatari.run (`show character y ${currentGender}_normal at player-giant-right`);
            return true; 
        },

        'm 小子，沒想到你成功地來到這裡了......我壓根沒想到你能通關呢！',
        'y ？你這傢伙，是瞧不起我......',
        'm 住嘴！懂不懂得尊師重道啊！總之，這邊就是最後一道關卡了。通常我們會讓坯體放置一至四週烘乾。',
        'm 不過，女神大人出了點力，我們就直接把上完釉的坯體放進窯裡燒製！',
        'y 女神？你口中的女神就是那個類似西方幻想遊戲會出現的傢伙...',
        'm 哈哈哈！總之，終於到了最關鍵的「投柴燒窯」階段了！',
        'm 這個步驟最重要的部分便是溫度的控制，窯溫通常介於1200°C 到 1300°C 之間，溫度不夠，瓷器燒不熟，溫度太高，瓷器又可能會變形。',
        'm 小子！這就是你回去現實的最後機會了，給我好好幹！',
        'm 這次使用的是極為珍貴的「蘇麻離青」釉料，火候必須分毫不差。如果溫度不夠，青花發色會發暗；溫度太高，釉面就會流淌崩壞！',
        'y 那麼...我到底該做什麼？',
        'm 聽好了！當火候指針進入中央的「金色節點」時，立刻按下控溫機關！',
        'y 不能在過程中隨時確認坯體的狀態嗎？',
        'm 絕對不行！這個過程中絕對不能把窯打開來看，每個環節都必須精準把控，要是一個不小心，整座窯的心血都將白費！',
        'jump Final_challenge'
    ],
        // 🎮 核心小遊戲代碼注入
        // 🎮 核心小遊戲代碼注入
    'Final_challenge': [
        function () {
            // 🛑 核心技術：建立鍵盤封鎖函數，徹底攔截空白鍵與 Enter
            const blockStoryKeys = function (e) {
                if (e.code === 'Space' || e.code === 'Enter') {
                    e.preventDefault();
                    e.stopPropagation();
                }
            };
            // 在 window 全域階段搶先攔截按鍵事件
            window.addEventListener('keydown', blockStoryKeys, true);

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
            
            // 💡 降低移動速度。數值越小越慢
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
                    const soundSuccess = new Audio('assets/sounds/porcelain_success.mp3');
                    soundSuccess.play().catch(e => console.log("音效播放失敗:", e));

                    gameOverlay.classList.add('game-success-flash'); 
                    btn.disabled = true;
                    btn.innerText = "✨燒製成功✨";
                    monogatari.storage({ kiln_result: 'perfect' });

                    setTimeout(() => {
                        gameOverlay.remove(); 
                        // 🔓 【重要】解除鍵盤鎖定，恢復遊戲控制
                        window.removeEventListener('keydown', blockStoryKeys, true);
                        monogatari.next(); 
                    }, 1500);

                } else {
                    // 💥 失敗判定
                    const soundFail = new Audio('assets/sounds/porcelain_fail.mp3');
                    soundFail.play().catch(e => console.log("音效播放失敗:", e));

                    gameOverlay.classList.add('game-fail-shake'); 
                    btn.disabled = true;
                    btn.innerText = "💥溫度失控瓷器裂開💥";
                    monogatari.storage({ kiln_result: 'failed' });

                    setTimeout(() => {
                        gameOverlay.remove();
                        // 🔓 【重要】解除鍵盤鎖定，恢復遊戲控制
                        window.removeEventListener('keydown', blockStoryKeys, true);
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
        'centered 正當你還沉浸在成功的喜悅中時，一道白光閃過...',
        'centered 你突然感覺到極度的疲勞，於是緩緩闔上雙眼...',
        'centered 再次張開眼，你來到了自己的書房',
        'show scene background_final with fadeIn',
        () => {
            const currentGender = monogatari.storage('player_gender') || 'female'; 
            monogatari.run (`show character y ${currentGender}_nowadays`);
            return false;
        },
        'y 我這是...回來了？',
        'y 討厭的女神，竟然把我綁到大明...差點要和天子一起守國門了',
        'y 不過，拜此次經驗，倒是習得不少瓷器的知識！',
        'y 原來，那些教科書上冷冰冰的知識，也是有一群人曾經努力的活著的證明啊...',
        'y 這趟旅程還真是讓我收穫良多...果然，大明瓷器太厲害了拉！',
        'centered 【大洋上的瓷風：明代瓷器藝術交流】— 完 —',
        'end' 
    ],

    // ❌ 結局 B：燒裂失敗（體貼重來）
    'Act3_Fail': [
        'centered 伴隨著一聲清脆的裂響，窯內的溫度計指針徹底爆表，滾燙的熱浪中夾雜著瓷器崩碎的悲鳴。',
        'show character m shocked at master-giant-left',
        'm 唉……火候終究是急躁了一些，整窯的胚體全都成了廢瓷碎片……',
        'm 別氣餒，匠人精神就是從失敗中站起來，我們重新清理窯爐，再來一次！',
        'jump Final_challenge' // 💡 修正點：失敗後重新挑戰第三幕小遊戲
    ],

});
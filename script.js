// РџСЂРѕРІРµСЂРєР° РЅР° Firebase РґРѕСЃС‚СЉРїРЅРѕСЃС‚
console.log('Firebase auth РґРѕСЃС‚СЉРїРµРЅ:', typeof auth !== 'undefined');
console.log('Firebase db РґРѕСЃС‚СЉРїРµРЅ:', typeof db !== 'undefined');

// РЎРёСЃС‚РµРјР° Р·Р° РїСЂРµРІРѕРґ
const translations = {
    bg: {
        player_count: "Р‘СЂРѕР№ РёРіСЂР°С‡Рё",
        start_game: "Р—Р°РїРѕС‡РЅРё РёРіСЂР°С‚Р°",
        now: "СЃРµРіР°!",
        game_rules: "РџСЂР°РІРёР»Р° РЅР° РёРіСЂР°С‚Р°",
        game_starting: "РР“Р РђРўРђ Р—РђРџРћР§Р’Рђ!",
        next_round: "РЎР›Р•Р”Р’РђР© Р РЈРќР”",
        next_player: "РЎР»РµРґРІР°С‰ РёРіСЂР°С‡",
        change_round: "РЎРјРµРЅРё СЂСѓРЅРґР°",
        results: "Р РµР·СѓР»С‚Р°С‚Рё",
        new_game: "РќРѕРІР° РёРіСЂР°",
        game_objective: "Р¦Р•Р› РќРђ РР“Р РђРўРђ",
        game_objective_text: "РРіСЂР°С‚Р° Рµ Р·Р°Р±Р°РІРЅР° СЃРѕС†РёР°Р»РЅР° РёРіСЂР°, РІ РєРѕСЏС‚Рѕ РµРґРёРЅ РѕС‚ РёРіСЂР°С‡РёС‚Рµ Рµ \"РёРјРїРѕСЃС‚РѕСЂ\", Р° РѕСЃС‚Р°РЅР°Р»РёС‚Рµ РІРёР¶РґР°С‚ РµРґРЅР° Рё СЃСЉС‰Р° РєР°СЂС‚РёРЅРєР°. РРјРїРѕСЃС‚РѕСЂСЉС‚ С‚СЂСЏР±РІР° РґР° СЃРµ РѕРїРёС‚РІР° РґР° СЃРµ РІРїРёСЃРІР° СЃСЂРµРґ РѕСЃС‚Р°РЅР°Р»РёС‚Рµ, Р±РµР· РґР° СЂР°Р·РєСЂРёРµ, С‡Рµ РЅРµ РІРёР¶РґР° РєР°СЂС‚РёРЅРєР°С‚Р°.",
        how_to_play: "РљРђРљ РЎР• РР“Р РђР•",
        rule_1: "Р’ РЅР°С‡Р°Р»РѕС‚Рѕ РЅР° РёРіСЂР°С‚Р° РІСЃРµРєРё РёРіСЂР°С‡ РїРѕР»СѓС‡Р°РІР° С‚Р°Р№РЅР° СЂРѕР»СЏ - РґРµС‚РµРєС‚РёРІ РёР»Рё РёРјРїРѕСЃС‚РѕСЂ",
        player_selection_rule: "РР·Р±РµСЂРµС‚Рµ Р±СЂРѕР№ РёРіСЂР°С‡Рё (3-8 РґСѓС€Рё)",
        rule_2: "Р”РµС‚РµРєС‚РёРІРёС‚Рµ РІРёР¶РґР°С‚ РµРґРЅР° Рё СЃСЉС‰Р° РєР°СЂС‚РёРЅРєР°, Р° РёРјРїРѕСЃС‚РѕСЂСЉС‚ РїРѕР»СѓС‡Р°РІР° РєР°СЂС‚Р° \"РРјРїРѕСЃС‚РѕСЂ\"",
        rule_3: "РРіСЂР°С‡РёС‚Рµ СЃРµ СЂРµРґСѓРІР°С‚ РґР° РєР°Р·РІР°С‚ РґСѓРјР°, СЃРІСЉСЂР·Р°РЅР° СЃ РєР°СЂС‚РёРЅРєР°С‚Р°",
        rule_4: "РРјРїРѕСЃС‚РѕСЂСЉС‚ С‚СЂСЏР±РІР° РґР° СЃР»СѓС€Р° РґСѓРјРёС‚Рµ РЅР° РґСЂСѓРіРёС‚Рµ Рё РґР° РґР°РІР° РѕР±С‰Рё РґСѓРјРё, РєРѕРёС‚Рѕ РґР° РЅРµ РіРѕ СЂР°Р·РєСЂРёСЏС‚",
        rule_5: "РРјРїРѕСЃС‚РѕСЂСЉС‚ С‚СЂСЏР±РІР° РґР° СЃРµ РѕРїРёС‚РІР° РґР° СЂР°Р·Р±РµСЂРµ РєР°СЂС‚РёРЅРєР°С‚Р° РѕС‚ РґСѓРјРёС‚Рµ РЅР° РґСЂСѓРіРёС‚Рµ РёРіСЂР°С‡Рё",
        impostor_rules: "РџР РђР’РР›Рђ Р—Рђ РРњРџРћРЎРўРћР Рђ",
        impostor_rule_1: "РќРµ РІРёР¶РґР° РєР°СЂС‚РёРЅРєР°С‚Р°, РєРѕСЏС‚Рѕ РґСЂСѓРіРёС‚Рµ РёРіСЂР°С‡Рё РІРёР¶РґР°С‚",
        impostor_rule_2: "РўСЂСЏР±РІР° РґР° РІРЅРёРјР°С‚РµР»РЅРѕ СЃР»СѓС€Р° РґСѓРјРёС‚Рµ, РєРѕРёС‚Рѕ РґСЂСѓРіРёС‚Рµ РёРіСЂР°С‡Рё РєР°Р·РІР°С‚",
        impostor_rule_3: "РўСЂСЏР±РІР° РґР° СЃРµ РѕРїРёС‚РІР° РґР° РєР°Р¶Рµ РґСѓРјР°, РєРѕСЏС‚Рѕ Р±Рё Р±РёР»Р° Р»РѕРіРёС‡РЅР° Р·Р° РєР°СЂС‚РёРЅРєР°С‚Р°",
        impostor_rule_4: "РўСЂСЏР±РІР° РґР° РІРЅРёРјР°РІР° РґР° РЅРµ СЂР°Р·РєСЂРёРµ, С‡Рµ РЅРµ РІРёР¶РґР° РєР°СЂС‚РёРЅРєР°С‚Р°",
        impostor_rule_5: "РњРѕР¶Рµ РґР° РёР·РїРѕР»Р·РІР° С…РёС‚СЂРѕСЃС‚Рё, Р·Р° РґР° РёР·РіР»РµР¶РґР° РїРѕ-РґРѕСЃС‚РѕРІРµСЂРµРЅ",
        normal_player_rules: "РџР РђР’РР›Рђ Р—Рђ РќРћР РњРђР›РќРРўР• РР“Р РђР§Р",
        normal_rule_1: "Р’РёР¶РґР°С‚ РµРґРЅР° Рё СЃСЉС‰Р° РєР°СЂС‚РёРЅРєР°",
        normal_rule_2: "РўСЂСЏР±РІР° РґР° РєР°Р·РІР°С‚ РґСѓРјРё, СЃРІСЉСЂР·Р°РЅРё СЃ РєР°СЂС‚РёРЅРєР°С‚Р°",
        normal_rule_3: "РњРѕРіР°С‚ РґР° Р·Р°РґР°РІР°С‚ РІСЉРїСЂРѕСЃРё, Р·Р° РґР° СЂР°Р·РєСЂРёСЏС‚ РёРјРїРѕСЃС‚РѕСЂР°",
        normal_rule_4: "РўСЂСЏР±РІР° РґР° РІРЅРёРјР°РІР°С‚ РґР° РЅРµ СЂР°Р·РєСЂРёСЏС‚ С‚РІСЉСЂРґРµ РјРЅРѕРіРѕ Р·Р° РєР°СЂС‚РёРЅРєР°С‚Р°",
        normal_rule_5: "РњРѕРіР°С‚ РґР° СЂР°Р±РѕС‚СЏС‚ Р·Р°РµРґРЅРѕ, Р·Р° РґР° СЂР°Р·РєСЂРёСЏС‚ РёРјРїРѕСЃС‚РѕСЂР°",
        game_end: "РљР РђР™ РќРђ РР“Р РђРўРђ",
        game_end_text: "РРіСЂР°С‚Р° РїСЂРёРєР»СЋС‡РІР°, РєРѕРіР°С‚Рѕ:",
        end_condition_1: "Р”РµС‚РµРєС‚РёРІРёС‚Рµ СЃРµ СЃСЉРіР»Р°СЃСЏС‚ РґР° РїРѕСЃРѕС‡Р°С‚ РёРјРїРѕСЃС‚СЉСЂР° Рё РїРµС‡РµР»СЏС‚, Р°РєРѕ РїРѕРІРµС‡РµС‚Рѕ РіРѕ СЂР°Р·РєСЂРёСЏС‚",
        end_condition_2: "РР»Рё РєРѕРіР°С‚Рѕ РёРјРїРѕСЃС‚РѕСЂСЉС‚ СѓСЃРїРµРµ РґР° РѕСЃС‚Р°РЅРµ РЅРµСЂР°Р·РєСЂРёС‚ Рё РїРµС‡РµР»Рё",
        tips: "РЎРЄР’Р•РўР",
        tip_1: "Р’РЅРёРјР°РІР°Р№С‚Рµ РЅР° РґРµС‚Р°Р№Р»РёС‚Рµ РІ РѕС‚РіРѕРІРѕСЂРёС‚Рµ РЅР° РґСЂСѓРіРёС‚Рµ РёРіСЂР°С‡Рё",
        tip_2: "РЎР»РµРґРµС‚Рµ Р·Р° РЅРµСЃСЉРѕС‚РІРµС‚СЃС‚РІРёСЏ РІ РґСѓРјРёС‚Рµ, РєРѕРёС‚Рѕ СЃРµ РєР°Р·РІР°С‚",
        tip_3: "РР·РїРѕР»Р·РІР°Р№С‚Рµ Р»РѕРіРёРєР° Рё РёРЅС‚СѓРёС†РёСЏ",
        tip_4: "РќР°СЃР»Р°Р¶РґР°РІР°Р№С‚Рµ СЃРµ РЅР° РёРіСЂР°С‚Р° Рё Р±СЉРґРµС‚Рµ РєСЂРµР°С‚РёРІРЅРё!",
        created_by: "РЎСЉР·РґР°РґРµРЅРѕ РѕС‚",
        player: "РРіСЂР°С‡",
        game: "РР“Р Рђ",
        you_are_impostor: "Р’РёРµ СЃС‚Рµ РёРјРїРѕСЃС‚СЉСЂ!",
        min_players: "РњРѕР»СЏ, РІСЉРІРµРґРµС‚Рµ РїРѕРЅРµ 3 РёРіСЂР°С‡Р°!",
        level_end: "РљСЂР°Р№ РЅР° РЅРёРІРѕ",
        impostor_was: "РРјРїРѕСЃС‚СЉСЂСЉС‚ Р±РµС€Рµ:",
        start_new_round: "Р—Р°РїРѕС‡РЅРё РЅРѕРІ СЂСѓРЅРґ",
        dont_tell_others: "РќРµ РєР°Р·РІР°Р№С‚Рµ РЅРёС‰Рѕ РЅР° РґСЂСѓРіРёС‚Рµ РёРіСЂР°С‡Рё!",
        click_for_detective_rules: "РџРѕРєР°Р¶Рё РїСЂР°РІРёР»Р°С‚Р° Р·Р° РґРµС‚РµРєС‚РёРІРёС‚Рµ",
        click_for_impostor_rules: "РџРѕРєР°Р¶Рё РїСЂР°РІРёР»Р°С‚Р° Р·Р° РёРјРїРѕСЃС‚СЉСЂРёС‚Рµ",
        detective_rules_title: "РџСЂР°РІРёР»Р° Р·Р° РґРµС‚РµРєС‚РёРІРёС‚Рµ",
        detective_objective: "Р¦Р•Р›",
        detective_objective_text: "Р¦РµР»С‚Р° РЅР° РґРµС‚РµРєС‚РёРІРёС‚Рµ Рµ РґР° СЂР°Р·РєСЂРёСЏС‚ РёРјРїРѕСЃС‚СЉСЂР° СЃСЂРµРґ РёРіСЂР°С‡РёС‚Рµ, РєР°С‚Рѕ РІРЅРёРјР°С‚РµР»РЅРѕ СЃР»СѓС€Р°С‚ РґСѓРјРёС‚Рµ, РєРѕРёС‚Рѕ СЃРµ РєР°Р·РІР°С‚.",
        detective_how_to_play: "РљРђРљ РЎР• РР“Р РђР•",
        detective_rule_1: "Р’РёР¶РґР°С‚Рµ РµРґРЅР° Рё СЃСЉС‰Р° РєР°СЂС‚РёРЅРєР° СЃ РґСЂСѓРіРёС‚Рµ РґРµС‚РµРєС‚РёРІРё",
        detective_rule_2: "РљР°Р·РІР°Р№С‚Рµ РґСѓРјРё, СЃРІСЉСЂР·Р°РЅРё СЃ РєР°СЂС‚РёРЅРєР°С‚Р°, РєРѕСЏС‚Рѕ РІРёР¶РґР°С‚Рµ",
        detective_rule_3: "Р’РЅРёРјР°РІР°Р№С‚Рµ РЅР° РґСѓРјРёС‚Рµ, РєРѕРёС‚Рѕ РґСЂСѓРіРёС‚Рµ РёРіСЂР°С‡Рё РєР°Р·РІР°С‚",
        detective_rule_4: "РђРЅР°Р»РёР·РёСЂР°Р№С‚Рµ РґР°Р»Рё РЅСЏРєРѕР№ РґР°РІР° РЅРµСЏСЃРЅРё РёР»Рё РѕР±С‰Рё РѕС‚РіРѕРІРѕСЂРё",
        detective_rule_5: "Р Р°Р±РѕС‚РµС‚Рµ Р·Р°РµРґРЅРѕ СЃ РґСЂСѓРіРёС‚Рµ РґРµС‚РµРєС‚РёРІРё Р·Р° СЂР°Р·РєСЂРёРІР°РЅРµ РЅР° РёРјРїРѕСЃС‚СЉСЂР°",
        detective_tips: "РЎРЄР’Р•РўР",
        detective_tip_1: "Р’РЅРёРјР°РІР°Р№С‚Рµ РЅР° С„РёРЅРёС‚Рµ СЃР»РµРґРё РІ СЂР°Р·РіРѕРІРѕСЂРёС‚Рµ",
        detective_tip_2: "РќР°Р±Р»СЋРґР°РІР°Р№С‚Рµ СЂРµР°РєС†РёРёС‚Рµ Рё РµР·РёРєР° РЅР° С‚СЏР»РѕС‚Рѕ РЅР° РёРіСЂР°С‡РёС‚Рµ",
        detective_tip_3: "РР·РїРѕР»Р·РІР°Р№С‚Рµ РґРµРґСѓРєС‚РёРІРЅРѕ РјРёСЃР»РµРЅРµ Р·Р° СЂР°Р·РєСЂРёРІР°РЅРµ РЅР° РёРјРїРѕСЃС‚СЉСЂР°",
        detective_tip_4: "Р”РѕРІРµСЂСЏРІР°Р№С‚Рµ СЃРµ РЅР° РёРЅСЃС‚РёРЅРєС‚РёС‚Рµ СЃРё Рё Р±СЉРґРµС‚Рµ РЅР°Р±Р»СЋРґР°С‚РµР»РЅРё",
        impostor_rules_title: "РџСЂР°РІРёР»Р° Р·Р° РёРјРїРѕСЃС‚СЉСЂРёС‚Рµ",
        impostor_objective: "Р¦Р•Р›",
        impostor_objective_text: "Р¦РµР»С‚Р° РЅР° РёРјРїРѕСЃС‚СЉСЂР° Рµ РґР° РѕСЃС‚Р°РЅРµ РЅРµСЂР°Р·РєСЂРёС‚ СЃСЂРµРґ РёРіСЂР°С‡РёС‚Рµ, РєР°С‚Рѕ РІРЅРёРјР°С‚РµР»РЅРѕ СЃР»СѓС€Р° РґСѓРјРёС‚Рµ РЅР° РґСЂСѓРіРёС‚Рµ Рё РґР°РІР° РѕР±С‰Рё РѕС‚РіРѕРІРѕСЂРё.",
        impostor_how_to_play: "РљРђРљ РЎР• РР“Р РђР•",
        impostor_rule_1: "РќРµ РІРёР¶РґР°С‚Рµ РєР°СЂС‚РёРЅРєР°С‚Р°, РєРѕСЏС‚Рѕ РґСЂСѓРіРёС‚Рµ РёРіСЂР°С‡Рё РІРёР¶РґР°С‚",
        impostor_rule_2: "Р’РЅРёРјР°С‚РµР»РЅРѕ СЃР»СѓС€Р°Р№С‚Рµ РґСѓРјРёС‚Рµ, РєРѕРёС‚Рѕ РґСЂСѓРіРёС‚Рµ РёРіСЂР°С‡Рё РєР°Р·РІР°С‚",
        impostor_rule_3: "РћРїРёС‚РІР°Р№С‚Рµ СЃРµ РґР° СЂР°Р·Р±РµСЂРµС‚Рµ РєР°РєРІР° Рµ РєР°СЂС‚РёРЅРєР°С‚Р° РѕС‚ РґСѓРјРёС‚Рµ РёРј",
        impostor_rule_4: "РљР°Р·РІР°Р№С‚Рµ РѕР±С‰Рё РґСѓРјРё, РєРѕРёС‚Рѕ РґР° РЅРµ РІРё СЂР°Р·РєСЂРёСЏС‚",
        impostor_rule_5: "РР·Р±СЏРіРІР°Р№С‚Рµ РґР° РєР°Р·РІР°С‚Рµ С‚РІСЉСЂРґРµ СЃРїРµС†РёС„РёС‡РЅРё РґСѓРјРё",
        impostor_tips: "РЎРЄР’Р•РўР",
        impostor_tip_1: "Р‘СЉРґРµС‚Рµ РІРЅРёРјР°С‚РµР»РЅРё СЃ РѕС‚РіРѕРІРѕСЂРёС‚Рµ СЃРё",
        impostor_tip_2: "РР·РїРѕР»Р·РІР°Р№С‚Рµ РґРІСѓСЃРјРёСЃР»РµРЅ РµР·РёРє, Р·Р° РґР° СЃРєСЂРёРµС‚Рµ РёСЃС‚РёРЅСЃРєР°С‚Р° СЃРё СЃР°РјРѕР»РёС‡РЅРѕСЃС‚",
        impostor_tip_3: "РЎСЉР·РґР°Р№С‚Рµ РїСЂР°РІРґРѕРїРѕРґРѕР±РЅР° РїСЂРёРєСЂРёРІР°С‰Р° РёСЃС‚РѕСЂРёСЏ",
        impostor_tip_4: "Р”РѕРІРµСЂСЏРІР°Р№С‚Рµ СЃРµ РЅР° РёРЅСЃС‚РёРЅРєС‚РёС‚Рµ СЃРё Рё Р±СЉРґРµС‚Рµ РїСЂРµРґРїР°Р·Р»РёРІРё",
        registration_title: "Р РµРіРёСЃС‚СЂР°С†РёСЏ",
        registration_subtitle: "РЎСЉР·РґР°Р№С‚Рµ РїСЂРѕС„РёР», Р·Р° РґР° РїСЂРѕРґСЉР»Р¶РёС‚Рµ РґР° РёРіСЂР°РµС‚Рµ",
        username: "РџРѕС‚СЂРµР±РёС‚РµР»СЃРєРѕ РёРјРµ",
        email: "РРјРµР№Р» Р°РґСЂРµСЃ",
        password: "РџР°СЂРѕР»Р°",
        confirm_password: "РџРѕС‚РІСЉСЂРґРё РїР°СЂРѕР»Р°",
        age: "Р’СЉР·СЂР°СЃС‚",
        favorite_game: "Р›СЋР±РёРјР° РёРіСЂР°",
        select_option: "РР·Р±РµСЂРµС‚Рµ РѕРїС†РёСЏ",
        board_games: "РќР°СЃС‚РѕР»РЅРё РёРіСЂРё",
        video_games: "Р’РёРґРµРѕ РёРіСЂРё",
        card_games: "РљР°СЂС‚Рё",
        puzzle_games: "РџСЉР·РµР»Рё",
        other: "Р”СЂСѓРіРѕ",
        accept_terms: "РџСЂРёРµРјР°Рј СѓСЃР»РѕРІРёСЏС‚Р° Р·Р° РїРѕР»Р·РІР°РЅРµ",
        newsletter: "РСЃРєР°Рј РґР° РїРѕР»СѓС‡Р°РІР°Рј РЅРѕРІРёРЅРё Р·Р° РЅРѕРІРё РёРіСЂРё",
        create_account: "РЎСЉР·РґР°Р№ Р°РєР°СѓРЅС‚",
        already_have_account: "Р’РµС‡Рµ РёРјР°С‚Рµ Р°РєР°СѓРЅС‚?",
        login: "Р’С…РѕРґ",
        registration_required: "РўСЂСЏР±РІР° РґР° РІР»РµР·РµС‚Рµ РІ РїСЂРѕС„РёР»Р° СЃРё, Р·Р° РґР° РїСЂРѕРґСЉР»Р¶РёС‚Рµ!",
        registration_success: "Р РµРіРёСЃС‚СЂР°С†РёСЏС‚Р° Рµ СѓСЃРїРµС€РЅР°! РњРѕР¶РµС‚Рµ РґР° РїСЂРѕРґСЉР»Р¶РёС‚Рµ РґР° РёРіСЂР°РµС‚Рµ.",
        registration_error: "Р“СЂРµС€РєР° РїСЂРё СЂРµРіРёСЃС‚СЂР°С†РёСЏ. РњРѕР»СЏ, РѕРїРёС‚Р°Р№С‚Рµ РѕС‚РЅРѕРІРѕ.",
        login_title: "Р’С…РѕРґ",
        login_subtitle: "Р’Р»РµР·С‚Рµ РІ РїСЂРѕС„РёР»Р° СЃРё",
        dont_have_account: "РќСЏРјР°С‚Рµ Р°РєР°СѓРЅС‚?",
        register: "Р РµРіРёСЃС‚СЂРёСЂР°РЅРµ",
        login_success: "Р’Р»СЏР·РѕС…С‚Рµ СѓСЃРїРµС€РЅРѕ!",
        login_error: "Р“СЂРµС€РєР° РїСЂРё РІС…РѕРґ. РџСЂРѕРІРµСЂРµС‚Рµ РїРѕС‚СЂРµР±РёС‚РµР»СЃРєРѕС‚Рѕ РёРјРµ Рё РїР°СЂРѕР»Р°С‚Р°.",
        logout_success: "РР·Р»СЏР·РѕС…С‚Рµ РѕС‚ РїСЂРѕС„РёР»Р° СЃРё!",
        logout_error: "Р“СЂРµС€РєР° РїСЂРё РёР·С…РѕРґ",
        send_error: "Р“СЂРµС€РєР° РїСЂРё РёР·РїСЂР°С‰Р°РЅРµ",
        wrong_email_password: "Р“СЂРµС€РµРЅ РёРјРµР№Р» РёР»Рё РїР°СЂРѕР»Р°!",
        wrong_username_password: "Р“СЂРµС€РЅРѕ РїРѕС‚СЂРµР±РёС‚РµР»СЃРєРѕ РёРјРµ РёР»Рё РїР°СЂРѕР»Р°!",
        username_exists: "РџРѕС‚СЂРµР±РёС‚РµР»СЃРєРѕС‚Рѕ РёРјРµ РІРµС‡Рµ СЃСЉС‰РµСЃС‚РІСѓРІР°!",
        email_exists: "РРјРµР№Р»СЉС‚ РІРµС‡Рµ Рµ РёР·РїРѕР»Р·РІР°РЅ!",
        weak_password: "РџР°СЂРѕР»Р°С‚Р° С‚СЂСЏР±РІР° РґР° Рµ РїРѕРЅРµ 6 СЃРёРјРІРѕР»Р°!",
        attention_title: "Р’РќРРњРђРќРР•!",
        attention_message: "Р’СЃРёС‡РєРё РёРіСЂР°С‡Рё РґР° СЃРµ РѕРґСЂСЉРїРЅР°С‚!",
        attention_submessage: "Р”Р° РѕСЃС‚Р°РЅРµ СЃР°РјРѕ РїСЉСЂРІРёСЏС‚ РёРіСЂР°С‡!",
        unlock_pro: "Unlock Pro",
        unlock_pro_title: "Unlock Full Version",
        unlock_pro_price: "Price:",
        unlock_pro_payment_info: "Payment is made through Revolut using the link below. In the payment note, please write your email address!",
        pay_with_revolut: "Pay with Revolut",
        forgot_password: "Forgot Password?",
        reset_password_title: "Reset Password",
        send_reset_link: "Send Reset Link",
        reset_email_sent: "Password reset email sent!",
        free_version: "Free Version",
        free_limit_message: "You played 3 consecutive rounds. This is the limit for the free version. Wait",
        free_limit_seconds: "seconds before continuing.",
        free_limit_payment_info: "If you want to unlock the full version, make a payment through Revolut. In the payment note, please enter your email address!",
        remove_limit: "Remove Limit (3.99в‚¬)",
        game_ended: "рџЋ‰ Game Ended!",
        thanks_for_playing: "Thanks for playing!",
        winner: "Winner:",
        duration: "Duration:",
        main_menu: "Main Menu",
        attention_next_player: "Р’РќРРњРђРќРР•: РЎРђРњРћ РЎР›Р•Р”Р’РђР©РРЇРў РР“Р РђР§ Р”Рђ Р“Р›Р•Р”Рђ",
        reveal_impostor: "REVEAL WHO WAS THE IMPOSTOR",
        click_for_detective_rules: "Show detective rules",
        click_for_impostor_rules: "Show impostor rules",
        detective_rules_content: "Detective rules content will be displayed here",
        impostor_rules_content: "Impostor rules content will be displayed here",
        price_period: "РµРґРЅРѕРєСЂР°С‚РЅРѕ",
        pro_benefits_title: "РџСЂРµРґРёРјСЃС‚РІР° РЅР° РїСЉР»РЅР°С‚Р° РІРµСЂСЃРёСЏ:",
        pro_benefit_1: "РЅСЏРјР° С‡Р°РєР°РЅРµ РЅР° РІСЃРµРєРё 3 СЂСѓРЅРґР° РїРѕ 5 РјРёРЅ.",
        pro_benefit_2: "РЅСЏРјР° СЂРµРєР»Р°РјРё Рё РґСЂР°Р·РЅРµС‰Рё СЃСЉРѕР±С‰РµРЅРёСЏ",
        pro_benefit_3: "РЅРµРѕРіСЂР°РЅРёС‡РµРЅ Р±СЂРѕР№ РёРіСЂРё",
        pro_benefit_4: "РµРєСЃРєР»СѓР·РёРІРЅРё РєР°СЂС‚Рё Рё С‚РµРјРё",
        pro_benefit_5: "РїСЂРёРѕСЂРёС‚РµС‚РЅР° РїРѕРґРґСЂСЉР¶РєР°",
        pro_benefit_6: "Р±СЉРґРµС‰Рё РѕР±РЅРѕРІР»РµРЅРёСЏ РІРєР»СЋС‡РµРЅРё",
        pro_guarantee: "100% СЃРёРіСѓСЂРЅРѕ РїР»Р°С‰Р°РЅРµ вЂў 30-РґРЅРµРІРЅР° РіР°СЂР°РЅС†РёСЏ",
        welcome_title: "рџЋ® Р”РѕР±СЂРµ РґРѕС€Р»Рё РІ Odd One Out!",
        welcome_subtitle: "Р—Р° РґР° РїСЂРѕРґСЉР»Р¶РёС‚Рµ РґР° РёРіСЂР°РµС‚Рµ, С‚СЂСЏР±РІР° РґР° СЃСЉР·РґР°РґРµС‚Рµ Р°РєР°СѓРЅС‚",
        welcome_why_register_title: "рџЋЇ Р—Р°С‰Рѕ РґР° СЃРµ СЂРµРіРёСЃС‚СЂРёСЂР°С‚Рµ?",
        welcome_benefit_1: "<i class='fas fa-database'></i> <strong>Р‘Р°Р·Р° РґР°РЅРЅРё:</strong> РќСЏРјР° РґР° РІРёР¶РґР°С‚Рµ РµРґРЅРё Рё СЃСЉС‰Рё РєР°СЂС‚РёРЅРё",
        welcome_benefit_2: "<i class='fas fa-layer-group'></i> <strong>РџРѕРІРµС‡Рµ РЅРёРІР°:</strong> РќРћР’Р РґСѓРјРё Рё РїСЂРµРґРёР·РІРёРєР°С‚РµР»СЃС‚РІР°",
        welcome_benefit_3: "<i class='fas fa-trophy'></i> <strong>РџСЂРѕРіСЂРµСЃ:</strong> РЎР»РµРґРµС‚Рµ РІР°С€РёС‚Рµ РїРѕСЃС‚РёР¶РµРЅРёСЏ",
        welcome_benefit_4: "<i class='fas fa-users'></i> <strong>РћР±С‰РЅРѕСЃС‚:</strong> РРіСЂР°Р№С‚Рµ СЃ РїСЂРёСЏС‚РµР»Рё",
        welcome_benefit_5: "<i class='fas fa-star'></i> <strong>Р•РєСЃРєР»СѓР·РёРІРЅРѕ СЃСЉРґСЉСЂР¶Р°РЅРёРµ:</strong> РЎРїРµС†РёР°Р»РЅРё С‚РµРјРё Рё РєР°СЂС‚Рё",
        welcome_create_account_btn: "РЎСЉР·РґР°Р№ Р°РєР°СѓРЅС‚",
        welcome_login_btn: "Р’РµС‡Рµ РёРјР°Рј Р°РєР°СѓРЅС‚",
        choose_mode: "РР·Р±РµСЂРµС‚Рµ РЅР°С‡РёРЅ РЅР° РёРіСЂР°",
        local_play: "РќР° РµРґРЅРѕ РјСЏСЃС‚Рѕ",
        local_play_desc: "Р’СЃРёС‡РєРё РёРіСЂР°СЏС‚ РЅР° РµРґРЅРѕ СѓСЃС‚СЂРѕР№СЃС‚РІРѕ",
        online_play: "РћРЅР»Р°Р№РЅ РёРіСЂР°",
        online_play_desc: "РРіСЂР°Р№С‚Рµ РѕС‚ СЂР°Р·Р»РёС‡РЅРё СѓСЃС‚СЂРѕР№СЃС‚РІР°",
        create_room: "РЎСЉР·РґР°Р№ СЃС‚Р°СЏ",
        join_room: "Р’Р»РµР· РІ СЃС‚Р°СЏ",
        profile_setup: "РќР°СЃС‚СЂРѕР№РєР° РЅР° РїСЂРѕС„РёР»",
        nickname: "РџСЂСЏРєРѕСЂ",
        choose_avatar: "РР·Р±РµСЂРµС‚Рµ Р°РІР°С‚Р°СЂ",
        join_as_spectator: "Р’Р»РµР· РєР°С‚Рѕ РЅР°Р±Р»СЋРґР°С‚РµР»",
        confirm: "РџРѕС‚РІСЉСЂРґРё",
        invite: "РџРѕРєР°РЅРё",
        players: "РРіСЂР°С‡Рё",
        waiting_for_host: "РР·С‡Р°РєРІР°РЅРµ РЅР° С…РѕСЃС‚Р° РґР° Р·Р°РїРѕС‡РЅРµ...",
        leave_room: "РќР°РїСѓСЃРЅРё СЃС‚Р°СЏС‚Р°",
        back: "РќР°Р·Р°Рґ"
    },
    en: {
        player_count: "Number of Players",
        start_game: "Start Game",
        now: "now!",
        game_rules: "Game Rules",
        game_starting: "GAME STARTING!",
        next_round: "NEXT ROUND",
        next_player: "Next Player",
        change_round: "Change Round",
        results: "Results",
        new_game: "New Game",
        game_objective: "GAME OBJECTIVE",
        game_objective_text: "The game is a fun social game where one of the players is an \"impostor\" and the others see the same picture. The impostor must try to blend in with the others without revealing that they don't see the picture.",
        how_to_play: "HOW TO PLAY",
        rule_1: "At the beginning of the game, each player receives a secret role - detective or impostor",
        player_selection_rule: "Choose number of players (3-8 people)",
        rule_2: "Detectives see the same picture, and the impostor receives a card \"Impostor\"",
        rule_3: "Players take turns saying a word related to the picture",
        rule_4: "The impostor must listen to the words of others and give general words that they don't reveal",
        rule_5: "The impostor must try to understand the picture from the words of other players",
        impostor_rules: "IMPOSTOR RULES",
        impostor_rule_1: "Does not see the picture that other players see",
        impostor_rule_2: "Must carefully listen to the words that other players say",
        impostor_rule_3: "Must try to say a word that would be logical for the picture",
        impostor_rule_4: "Must be careful not to reveal that they don't see the picture",
        impostor_rule_5: "Can use tricks to appear more credible",
        normal_player_rules: "NORMAL PLAYER RULES",
        normal_rule_1: "See the same picture",
        normal_rule_2: "Must say words related to the picture",
        normal_rule_3: "Can ask questions to reveal the impostor",
        normal_rule_4: "Must be careful not to reveal too much about the picture",
        normal_rule_5: "Can work together to reveal the impostor",
        game_end: "GAME END",
        game_end_text: "The game ends when:",
        end_condition_1: "Detectives agree to point out the impostor and win if most of them reveal him",
        end_condition_2: "Or when the impostor manages to remain unrevealed and wins",
        tips: "TIPS",
        tip_1: "Pay attention to details in other players' responses",
        tip_2: "Watch for inconsistencies in the words being said",
        tip_3: "Use logic and intuition",
        tip_4: "Enjoy the game and be creative!",
        created_by: "Created by",
        player: "Player",
        game: "GAME",
        you_are_impostor: "You are the impostor!",
        min_players: "Please enter at least 3 players!",
        level_end: "Level End",
        impostor_was: "The impostor was:",
        start_new_round: "Start New Round",
        dont_tell_others: "Don't tell anything to other players!",
        detective_rules_title: "Detective Rules",
        detective_objective: "Objective",
        detective_objective_text: "The objective of the detectives is to reveal the impostor among the players by carefully listening to the words being said.",
        detective_how_to_play: "How to Play",
        detective_rule_1: "You see the same picture as other detectives",
        detective_rule_2: "Say words related to the picture you see",
        detective_rule_3: "Pay attention to the words that other players say",
        detective_rule_4: "Analyze whether someone gives unclear or general answers",
        detective_rule_5: "Work together with other detectives to reveal the impostor",
        detective_tips: "Tips",
        detective_tip_1: "Pay attention to subtle clues in the conversations",
        detective_tip_2: "Observe the players' reactions and body language",
        detective_tip_3: "Use deductive reasoning to identify the impostor",
        detective_tip_4: "Trust your instincts and be observant",
        detective_rules_content: "Detective rules content will be displayed here",
        impostor_rules_title: "Impostor Rules",
        impostor_objective: "Objective",
        impostor_objective_text: "The objective of the impostor is to remain undetected among the players by carefully listening to the words of others and giving general answers.",
        impostor_how_to_play: "How to Play",
        impostor_rule_1: "You don't see the picture that other players see",
        impostor_rule_2: "Carefully listen to the words that other players say",
        impostor_rule_3: "Try to understand what the picture is from their words",
        impostor_rule_4: "Say general words that don't reveal you",
        impostor_rule_5: "Avoid saying too specific words",
        impostor_tips: "Tips",
        impostor_tip_1: "Be careful with your responses",
        impostor_tip_2: "Use ambiguous language to hide your true identity",
        impostor_tip_3: "Create a plausible cover story",
        impostor_tip_4: "Trust your instincts and be cautious",
        impostor_rules_content: "Impostor rules content will be displayed here",
        registration_title: "Registration",
        registration_subtitle: "Create an account to continue playing",
        username: "Username",
        email: "Email",
        password: "Password",
        confirm_password: "Confirm Password",
        age: "Age",
        favorite_game: "Favorite Game",
        select_option: "Select Option",
        board_games: "Board Games",
        video_games: "Video Games",
        card_games: "Cards",
        puzzle_games: "Puzzles",
        other: "Other",
        accept_terms: "I accept the terms of use",
        newsletter: "I want to receive news about new games",
        create_account: "Create Account",
        already_have_account: "Already have an account?",
        login: "Login",
        registration_required: "You must log in to your account to continue!",
        registration_success: "Registration successful! You can continue playing.",
        registration_error: "Registration error. Please try again.",
        login_title: "Login",
        login_subtitle: "Login to your account",
        dont_have_account: "Don't have an account?",
        register: "Register",
        login_success: "You logged in successfully!",
        login_error: "Login error. Please check your username and password.",
        logout_success: "You logged out successfully!",
        logout_error: "Logout error",
        send_error: "Send error",
        wrong_email_password: "Wrong email or password!",
        wrong_username_password: "Wrong username or password!",
        username_exists: "Username already exists!",
        email_exists: "Email already in use!",
        weak_password: "Password must be at least 6 characters!",
        attention_title: "ATTENTION!",
        attention_message: "All players must step back!",
        attention_submessage: "Only the first player should remain!",
        unlock_pro: "Unlock Pro",
        unlock_pro_title: "Unlock Full Version",
        unlock_pro_price: "Price:",
        unlock_pro_payment_info: "Payment is made through Revolut using the link below. In the payment note, please write your email address!",
        pay_with_revolut: "Pay with Revolut",
        forgot_password: "Forgot Password?",
        reset_password_title: "Reset Password",
        send_reset_link: "Send Reset Link",
        reset_email_sent: "Password reset email sent!",
        free_version: "Free Version",
        free_limit_message: "You played 3 consecutive rounds. This is the limit for the free version. Wait",
        free_limit_seconds: "seconds before continuing.",
        free_limit_payment_info: "If you want to unlock the full version, make a payment through Revolut. In the payment note, please enter your email address!",
        remove_limit: "Remove Limit (3.99в‚¬)",
        game_ended: "рџЋ‰ Game Ended!",
        thanks_for_playing: "Thanks for playing!",
        winner: "Winner:",
        duration: "Duration:",
        main_menu: "Main Menu",
        attention_next_player: "ATTENTION: ONLY THE NEXT PLAYER SHOULD LOOK",
        reveal_impostor: "REVEAL WHO WAS THE IMPOSTOR",
        click_for_detective_rules: "Show detective rules",
        click_for_impostor_rules: "Show impostor rules",
        price_period: "one-time",
        pro_benefits_title: "Full version benefits:",
        pro_benefit_1: "no waiting every 3 rounds for 5 min.",
        pro_benefit_2: "no ads and annoying messages",
        pro_benefit_3: "unlimited number of games",
        pro_benefit_4: "exclusive cards and themes",
        pro_benefit_5: "priority support",
        pro_benefit_6: "future updates included",
        pro_guarantee: "100% secure payment вЂў 30-day guarantee",
        welcome_title: "рџЋ® Welcome to Odd One Out!",
        welcome_subtitle: "To continue playing, you need to create an account",
        welcome_why_register_title: "рџЋЇ Why register?",
        welcome_benefit_1: "<i class='fas fa-database'></i> <strong>Database:</strong> You won't see the same pictures",
        welcome_benefit_2: "<i class='fas fa-layer-group'></i> <strong>More levels:</strong> NEW words and challenges",
        welcome_benefit_3: "<i class='fas fa-trophy'></i> <strong>Progress:</strong> Track your achievements",
        welcome_benefit_4: "<i class='fas fa-users'></i> <strong>Community:</strong> Play with friends",
        welcome_benefit_5: "<i class='fas fa-star'></i> <strong>Exclusive content:</strong> Special themes and cards",
        welcome_create_account_btn: "Create Account",
        welcome_login_btn: "I already have an account",
        choose_mode: "Choose game mode",
        local_play: "Local Play",
        local_play_desc: "Everyone plays on one device",
        online_play: "Online Play",
        online_play_desc: "Play from different devices",
        create_room: "Create Room",
        join_room: "Join Room",
        profile_setup: "Profile Setup",
        nickname: "Nickname",
        choose_avatar: "Choose Avatar",
        join_as_spectator: "Join as spectator",
        confirm: "Confirm",
        invite: "Invite",
        players: "Players",
        waiting_for_host: "Waiting for host to start...",
        leave_room: "Leave Room",
        back: "Back"
    }
};

let currentLanguage = 'bg';

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїСЂРµРІРѕРґ РЅР° С‚РµРєСЃС‚
function translateText(key) {
    return translations[currentLanguage][key] || translations['bg'][key] || key;
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїСЂРёР»Р°РіР°РЅРµ РЅР° РїСЂРµРІРѕРґР°
function applyTranslation() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translateText(key);
        const htmlKeys = [
            'welcome_benefit_1',
            'welcome_benefit_2',
            'welcome_benefit_3',
            'welcome_benefit_4',
            'welcome_benefit_5'
        ];
        if (htmlKeys.includes(key)) {
            element.innerHTML = translation;
        } else if (element.tagName === 'INPUT') {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }
    });
    // РћР±РЅРѕРІСЏРІР°РјРµ Рё Р±СѓС‚РѕРЅР° 'РЎР»РµРґРІР°С‰ РёРіСЂР°С‡' Р°РєРѕ СЃСЉС‰РµСЃС‚РІСѓРІР°
    const nextPlayerBtnTitle = document.querySelector('.next-player-btn-title');
    if (nextPlayerBtnTitle) {
        nextPlayerBtnTitle.textContent = translateText('next_player');
    }
    // РћР±РЅРѕРІСЏРІР°РјРµ РґРёРЅР°РјРёС‡РЅРё С‚РµРєСЃС‚РѕРІРµ
    updateDynamicTexts();
    // РћР±РЅРѕРІСЏРІР°РјРµ tooltip С‚РµРєСЃС‚РѕРІРµ
    // РћР±РЅРѕРІСЏРІР°РјРµ С‚РµРєСЃС‚Р° "СЃРµРіР°!" РІ Р°РЅРёРјРёСЂР°РЅРёСЏ Р±СѓС‚РѕРЅ
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° РѕР±РЅРѕРІСЏРІР°РЅРµ РЅР° РґРёРЅР°РјРёС‡РЅРё С‚РµРєСЃС‚РѕРІРµ
function updateDynamicTexts() {
    if (currentPlayerDisplay) {
        const buttonText = currentPlayerDisplay.querySelector('.button-text');
        if (buttonText) {
            buttonText.textContent = `${translateText('player')} ${currentPlayer}`;
        }
    }
}

// РњР°СЃРёРІ СЃ РёР·РѕР±СЂР°Р¶РµРЅРёСЏ РЅР° СЂР°Р·Р»РёС‡РЅРё РѕР±РµРєС‚Рё
const images = [
    // Р›РѕРєР°Р»РЅРё РёР·РѕР±СЂР°Р¶РµРЅРёСЏ - СЃР°РјРѕ С‚РµР·Рё, РєРѕРёС‚Рѕ СЃСЉС‰РµСЃС‚РІСѓРІР°С‚ РІ РїР°РїРєР°С‚Р° images
    'images/engin-akyurt-JBicrgiurjs-unsplash.jpg', // РґРёРІР°РЅ (sofa)
    'images/luc-bercoth-zpJH4ogbTOo-unsplash.jpg', // РєРЅРёРіР° (book)
    'images/raymond-burrage-x7kiHTL-HgM-unsplash.jpg', // С…РёРјРёРєР°Р» (pen)
    'images/vinicius-amnx-amano-4iNoeQqrLgM-unsplash.jpg', // С‡РёРЅРёСЏ (plate)
    'images/william-warby-UWznDqb7S9w-unsplash.jpg', // С‚РµР»РµС„РѕРЅ (phone)
    'images/andy-watkins-ZDRXR3MxyJM-unsplash.jpg', // РєРѕРјРїСЋС‚СЉСЂ (computer)
    'images/mostafa-amini-nasab-uSvuZ7Ovo5M-unsplash.jpg', // РјРёС€РєР° (mouse)
    'images/maria-lupan-jGTIP-92Tmc-unsplash.jpg', // С‡Р°СЃРѕРІРЅРёРє
    'images/kukla-radostina-xodeshta-govoreshta-muzikalna-kukla-01-2508x2676.jpg', // РєСѓРєР»Р°
    'images/gotvarska-pecka-tok-crown-54am-a-class-multifunctional--4-tok--bal-image_60868467dab13_800x800.jpeg', // РїРµС‡РєР°
    'images/18686404_605.jpg', // СЃС‚РѕР»
    'images/0345705001580038918_2077471_920x708.webp', // Р»Р°РјРїР°
    'images/heart-157895_640.webp', // СЃСЉСЂС†Рµ
    'images/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ@@._V1_.jpg', // С„РёР»Рј
    'images/240326-pirates-ch-1328-2b4d4f.jpg', // РїРёСЂР°С‚Рё
    'images/Carrot-PNG-Free-Download.png', // РјРѕСЂРєРѕРІ
    // Р”РѕР±Р°РІСЏРјРµ РЅРѕРІРё РёР·РѕР±СЂР°Р¶РµРЅРёСЏ РѕС‚ РїР°РїРєР°С‚Р° images
    'images/109880.jpg',
    'images/1462104889_5_559x345.jpg',
    'images/1592629345176.jpg',
    'images/16285000-1200x1200.jpg',
    'images/1920x1080.jpg',
    'images/192214242602_1.webp',
    'images/1f553d40df009d63a7173e1503338586-10621444.jpeg',
    'images/1O6MddXigTPgeTa4X6ML_22_8fe9cdd68abc282b5281bbf0c117e39a_image.jpg',
    'images/23.12.patna_.jpg',
    'images/660_a14dcd47fbf3d95d0fcd47814e2984ef.jpg',
    'images/69520__820x465__800x0__822ca60cda69b42b4519e3ab8ad3eea16d4ba2e4.webp',
    'images/768x432.jpg',
    'images/82719_715_.jpg',
    'images/cover-1651176103038.jfif',
    'images/DSC09690.jpg',
    'images/dyrven-kluch-50-sm (2)-1000x1000.png',
    'images/dzojstik-playstation-dualsense-wireless-image_5fad0e950bc55_800x800.jpeg',
    'images/figura-nintendo-amiibo---mario-[super-mario]-31.jpg',
    'images/images.jfif',
    'images/insect-6666145_1280.jpg',
    'images/instantpot-recepta-pukanki.jpg',
    'images/kakwi dokumenti sa neobhodimi pri vnos na kola ot sasht-800x480-crop.jpg',
    'images/kino-arena-pleven-1024x768.jpg-696x522.webp',
    'images/kissclipart-vector-graphics-clipart-clip-art-f0f8396a3753b30d.png',
    'images/kiulcheta-zlato.jpg',
    'images/lego_tree_house_large_crop_2-e1675159262131.jpg',
    'images/moliv-za-staklo-240-mm-image_66a0bf4e25b30_800x800.jpeg',
    'images/p1150898.jpg',
    'images/plane_wp-copy.webp',
    'images/playing-basketball.jpg',
    'images/pojarna_kola_iveco.jpg',
    'images/PP-31381-tropical-island-maldives-800x655.jpg',
    'images/skis.jpg',
    'images/spondz-bob-kvadratni-gasi-bebe-11sm-image_616ac52401c3c_1920x1920.jpeg',
    'images/thumb6_aD7tej.jpg',
    'images/unnamed.jpg',
    'images/СЃРЅРёРјРєРё-РЅР°-СЃС‚Р°СЂРё-С‚РµР»РµРІРёР·РѕСЂРё-10.jpg'
];

// РњР°СЃРёРІ СЃ 5 РєР°СЂС‚РёРЅРё СЃР°РјРѕ Р·Р° РЅРµСЂРµРіРёСЃС‚СЂРёСЂР°РЅРё РїРѕС‚СЂРµР±РёС‚РµР»Рё
const guestImages = [
    'images/engin-akyurt-JBicrgiurjs-unsplash.jpg', // РґРёРІР°РЅ
    'images/luc-bercoth-zpJH4ogbTOo-unsplash.jpg', // РєРЅРёРіР°
    'images/raymond-burrage-x7kiHTL-HgM-unsplash.jpg', // С…РёРјРёРєР°Р»
    'images/vinicius-amnx-amano-4iNoeQqrLgM-unsplash.jpg', // С‡РёРЅРёСЏ
    'images/william-warby-UWznDqb7S9w-unsplash.jpg' // С‚РµР»РµС„РѕРЅ
];
let currentPlayer = 1;
let totalPlayers = 0;
let currentLevel = 0;
let totalLevels = 50; // РђРєС‚СѓР°Р»РёР·РёСЂР°РЅРѕ СЃРїРѕСЂРµРґ РЅРѕРІРёСЏ Р±СЂРѕР№ РёР·РѕР±СЂР°Р¶РµРЅРёСЏ
let gameLevels = [];
let impostorIndex = 0;
let isCountdownActive = false;

// --- РћРЅР»Р°Р№РЅ РњСѓР»С‚РёРїР»РµСЉСЂ РџСЂРѕРјРµРЅР»РёРІРё ---
let isOnline = false;
let roomCode = null;
let roomData = null;
let currentTurnUid = null;
let myPlayerUid = null;
let isHost = false;
let selectedAvatar = 'рџ•µпёЏ';
let amISpectator = false;
const avatars = ['рџ•µпёЏ', 'рџ•µпёЏвЂЌв™ЂпёЏ', 'рџЋ', 'рџ§ђ', 'рџ¤«', 'рџ‘Ђ', 'рџ’ј', 'рџ”Ќ', 'рџ“±', 'рџЋ®', 'рџЌ•', 'рџђ±', 'рџђ¶', 'рџ¦„', 'рџ‘Ѕ', 'рџ¤–'];

// РџСЂРѕРјРµРЅР»РёРІРё Р·Р° СЂРµРіРёСЃС‚СЂР°С†РёСЏ
let isRegistrationShown = false;
let isUserRegistered = false;

// DOM РµР»РµРјРµРЅС‚Рё
const setupScreen = document.getElementById('setup-screen');
const gameScreen = document.getElementById('game-screen');
const resultsScreen = document.getElementById('results-screen');
const playerCountInput = document.getElementById('player-count');
const decreasePlayersBtn = document.getElementById('decrease-players');
const increasePlayersBtn = document.getElementById('increase-players');
const startGameBtn = document.getElementById('start-game');
const nextPlayerButton = document.getElementById('next-player-button');
const newGameBtn = document.getElementById('new-game');
const currentPlayerDisplay = document.getElementById('current-player');
const timerDisplay = document.getElementById('timer');
const imagesContainer = document.getElementById('images-container');
const resultsList = document.getElementById('results-list');

// РњРѕРґР°Р»РµРЅ РїСЂРѕР·РѕСЂРµС† Р·Р° РїСЂР°РІРёР»Р°С‚Р°
const rulesModal = document.getElementById('rules-modal');
const showRulesBtn = document.getElementById('show-rules');
const closeModalBtn = document.querySelector('.close-modal');

// DOM РµР»РµРјРµРЅС‚Рё Р·Р° РјРѕРґР°Р»Рё
const welcomeModal = document.getElementById('welcome-modal');
const registrationModal = document.getElementById('registration-modal');
const registrationForm = document.getElementById('registration-form');
const loginModal = document.getElementById('login-modal');
const loginForm = document.getElementById('login-form');
const loginLink = document.getElementById('login-link');
const registerLink = document.getElementById('register-link');
const closeRegistration = document.getElementById('close-registration');
const closeLogin = document.getElementById('close-login');
const profileInfo = document.getElementById('profile-info');
const profileActions = document.getElementById('profile-actions');
const profileUsername = document.getElementById('profile-username');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const logoutBtn = document.getElementById('logout-btn');

// --- РћРЅР»Р°Р№РЅ DOM Р•Р»РµРјРµРЅС‚Рё ---
const modeSelectionScreen = document.getElementById('mode-selection-screen');
const localModeBtn = document.getElementById('local-mode-btn');
const onlineModeBtn = document.getElementById('online-mode-btn');
const onlineSetupScreen = document.getElementById('online-setup-screen');
const profileSetupScreen = document.getElementById('profile-setup-screen');
const lobbyScreen = document.getElementById('lobby-screen');
const createRoomBtn = document.getElementById('create-room-btn');
const joinRoomBtn = document.getElementById('join-room-btn');
const roomCodeInput = document.getElementById('room-code-input');
const backToModesBtn = document.getElementById('back-to-modes-btn');
const onlineNicknameInput = document.getElementById('online-nickname');
const avatarListContainer = document.getElementById('avatar-list');
const confirmProfileBtn = document.getElementById('confirm-profile-btn');
const lobbyRoomCodeDisplay = document.getElementById('lobby-room-code');
const lobbyPlayersList = document.getElementById('lobby-players-list');
const startOnlineGameBtn = document.getElementById('start-online-game-btn');
const waitingForHostMsg = document.getElementById('waiting-for-host');
const leaveRoomBtn = document.getElementById('leave-room-btn');
const inviteBtn = document.getElementById('invite-btn');
const onlineChatContainer = document.getElementById('online-chat-container');
const chatHistoryList = document.getElementById('chat-history');
const wordInputContainer = document.getElementById('word-input-container');
const playerWordInput = document.getElementById('player-word-input');
const submitWordBtn = document.getElementById('submit-word-btn');
const gameRoomInfoDisplay = document.getElementById('game-room-info');
const localControls = document.getElementById('local-controls');
const spectatorModeCheckbox = document.getElementById('spectator-mode');

// Р‘СѓС‚РѕРЅРё Р·Р° welcome РјРѕРґР°Р»Р°
const startRegistrationBtn = document.getElementById('start-registration-btn');
const loginFromWelcomeBtn = document.getElementById('login-from-welcome-btn');

// Р¤СѓРЅРєС†РёСЏ Р·Р° С„РѕРЅРѕРІРё С‡Р°СЃС‚РёС†Рё
function initParticles() {
    const container = document.getElementById('mesh-background-fx');
    if (!container) return;
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle-fx';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (8 + Math.random() * 10) + 's';
        container.appendChild(particle);
    }
}

function showScreen(screen) {
    if (!screen) return;
    
    // Р’СЃРёС‡РєРё РІСЉР·РјРѕР¶РЅРё РµРєСЂР°РЅРё
    const screens = [
        modeSelectionScreen, setupScreen, onlineSetupScreen,
        profileSetupScreen, lobbyScreen, gameScreen, resultsScreen
    ].filter(s => s !== null);

    screens.forEach(s => {
        s.classList.add('hidden');
        s.classList.remove('animate__animated', 'animate__fadeIn');
    });

    screen.classList.remove('hidden');
    screen.classList.add('animate__animated', 'animate__fadeIn');
    
    // Р”РѕР±Р°РІСЏРјРµ Р»РµРє "pop" РµС„РµРєС‚ Р·Р° РїСЂРµС…РѕРґР°
    screen.style.animation = 'screenEnter 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
}

// Р“Р»РѕР±Р°Р»РЅР° С„СѓРЅРєС†РёСЏ Р·Р° РєСЂР°СЃРёРІРё СЃСЉРѕР±С‰РµРЅРёСЏ
function showNotification(title, text, icon = 'info') {
    return Swal.fire({
        title: title,
        text: text,
        icon: icon,
        background: 'rgba(26, 26, 46, 0.95)',
        color: '#fff',
        confirmButtonColor: 'var(--primary)',
        confirmButtonText: 'OK',
        padding: '2rem',
        borderRadius: '30px',
        backdrop: `rgba(0,0,0,0.6) blur(4px)`
    });
}

// Р”РѕР±Р°РІСЏРЅРµ РЅР° Р°СѓРґРёРѕ РѕР±СЂР°С‚РЅР° РІСЂСЉР·РєР° (РІРёР·СѓР°Р»РЅР°) Р·Р° Р±СѓС‚РѕРЅРёС‚Рµ
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 100);
    });
});

// Р“РµРЅРµСЂРёСЂР°РЅРµ РЅР° РЅРёРІР°С‚Р° РїСЂРё Р·Р°СЂРµР¶РґР°РЅРµ РЅР° СЃС‚СЂР°РЅРёС†Р°С‚Р°
function generateGameLevels() {
    gameLevels = [];
    let availableImages;
    const currentUser = getCurrentUser();
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (currentUser && currentUser.username && isLoggedIn) {
        // Р—Р° СЂРµРіРёСЃС‚СЂРёСЂР°РЅРё РїРѕС‚СЂРµР±РёС‚РµР»Рё - РёР·РїРѕР»Р·РІР°РјРµ РїСЉР»РЅРёСЏ РјР°СЃРёРІ СЃ РєР°СЂС‚РёРЅРё
        availableImages = getUserImagesPool(currentUser.username);
    } else {
        // Р—Р° РЅРµСЂРµРіРёСЃС‚СЂРёСЂР°РЅРё РїРѕС‚СЂРµР±РёС‚РµР»Рё - РёР·РїРѕР»Р·РІР°РјРµ СЃР°РјРѕ 5-С‚Рµ РєР°СЂС‚РёРЅРё
        availableImages = [...guestImages];
        for (let i = availableImages.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [availableImages[i], availableImages[j]] = [availableImages[j], availableImages[i]];
        }
    }
    
    for (let i = 0; i < totalLevels; i++) {
        let image;
        if (currentUser && currentUser.username && isLoggedIn) {
            image = getNextImageForUser(currentUser.username);
        } else {
            // Р—Р° РЅРµСЂРµРіРёСЃС‚СЂРёСЂР°РЅРё РїРѕС‚СЂРµР±РёС‚РµР»Рё - С†РёРєР»РёС‡РЅРѕ РёР·РїРѕР»Р·РІР°РјРµ 5-С‚Рµ РєР°СЂС‚РёРЅРё
            if (availableImages.length === 0) {
                availableImages = [...guestImages];
                for (let j = availableImages.length - 1; j > 0; j--) {
                    const k = Math.floor(Math.random() * (j + 1));
                    [availableImages[j], availableImages[k]] = [availableImages[k], availableImages[j]];
                }
            }
            image = availableImages.pop();
        }
        const impostor = totalPlayers > 0 ? Math.floor(Math.random() * totalPlayers) + 1 : 1;
        gameLevels.push({
            image: image,
            impostor: impostor
        });
    }
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїРѕР»СѓС‡Р°РІР°РЅРµ РЅР° РєР°СЂС‚РёРЅРё Р·Р° РЅРµСЂРµРіРёСЃС‚СЂРёСЂР°РЅРё РїРѕС‚СЂРµР±РёС‚РµР»Рё
function getGuestImagesPool() {
    return [...guestImages];
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїРѕР»СѓС‡Р°РІР°РЅРµ РЅР° СЃР»РµРґРІР°С‰Р° РєР°СЂС‚РёРЅР° Р·Р° РЅРµСЂРµРіРёСЃС‚СЂРёСЂР°РЅРё РїРѕС‚СЂРµР±РёС‚РµР»Рё
function getNextGuestImage() {
    const availableImages = getGuestImagesPool();
    const randomIndex = Math.floor(Math.random() * availableImages.length);
    return availableImages[randomIndex];
}

// Р—Р°СЂРµР¶РґР°РЅРµ РЅР° СЃС‚СЂР°РЅРёС†Р°С‚Р°
window.addEventListener('load', () => {
    const savedPlayerCount = localStorage.getItem('lastPlayerCount');
    if (savedPlayerCount) {
        playerCountInput.value = savedPlayerCount;
        totalPlayers = parseInt(savedPlayerCount);
    }
    
    // РџРѕРєР°Р·РІР°РјРµ РїСЉСЂРІРѕ РёР·Р±РѕСЂР° РЅР° СЂРµР¶РёРј
    showScreen(modeSelectionScreen);
    
    generateGameLevels();
    updateProfilePanel();
    initAvatarSelection();
    
    // РРЅРёС†РёР°Р»РёР·РёСЂР°РЅРµ РЅР° С„РѕРЅРѕРІРё С‡Р°СЃС‚РёС†Рё
    initParticles();

    // РџСЂРѕРІРµСЂРєР° Р·Р° СЃС‚Р°СЏ РІ URL
    const urlParams = new URLSearchParams(window.location.search);
    const roomFromUrl = urlParams.get('room');
    if (roomFromUrl) {
        isOnline = true;
        roomCode = roomFromUrl.toUpperCase();
        
        // РџСЂРѕРІРµСЂРєР° РґР°Р»Рё РїРѕС‚СЂРµР±РёС‚РµР»СЏС‚ Рµ Р»РѕРіРЅР°С‚
        if (typeof auth !== 'undefined' && !auth.currentUser) {
            showNotification(translateText('attention_title'), translateText('registration_required'), 'warning')
            .then(() => {
                showWelcomeModal();
            });
            // Р—Р°РїР°Р·РІР°РјРµ РєРѕРґР° РІ РёРЅРїСѓС‚Р° Р·Р° РїРѕ-РєСЉСЃРЅРѕ
            roomCodeInput.value = roomCode;
        } else {
            showScreen(profileSetupScreen);
            lobbyRoomCodeDisplay.textContent = roomCode;
        }
    }
});

function initAvatarSelection() {
    if (!avatarListContainer) return;
    avatarListContainer.innerHTML = '';
    avatars.forEach(emoji => {
        const div = document.createElement('div');
        div.className = 'avatar-item';
        if (emoji === selectedAvatar) div.classList.add('selected');
        div.textContent = emoji;
        div.onclick = () => {
            document.querySelectorAll('.avatar-item').forEach(el => el.classList.remove('selected'));
            div.classList.add('selected');
            selectedAvatar = emoji;
        };
        avatarListContainer.appendChild(div);
    });
}

// РЈРІРµР»РёС‡Р°РІР°РЅРµ РЅР° Р±СЂРѕСЏ РёРіСЂР°С‡Рё
increasePlayersBtn.addEventListener('click', () => {
    const currentCount = parseInt(playerCountInput.value);
    if (currentCount < 8) {
        playerCountInput.value = currentCount + 1;
    }
});

// РќР°РјР°Р»СЏРІР°РЅРµ РЅР° Р±СЂРѕСЏ РёРіСЂР°С‡Рё
decreasePlayersBtn.addEventListener('click', () => {
    const currentCount = parseInt(playerCountInput.value);
    if (currentCount > 3) {
        playerCountInput.value = currentCount - 1;
    }
});

// --- Р¤СѓРЅРєС†РёРё Р·Р° РћР±СЃР»СѓР¶РІР°РЅРµ РЅР° Р•РєСЂР°РЅРё ---

// РџРѕС‚СЂРµР±РёС‚РµР»СЃРєРё РРЅС‚РµСЂС„РµР№СЃ (РЎР»СѓС€Р°С‚РµР»Рё Р·Р° Р РµР¶РёРјРё)
localModeBtn?.addEventListener('click', () => {
    isOnline = false;
    showScreen(setupScreen);
});

onlineModeBtn?.addEventListener('click', () => {
    if (!auth.currentUser) {
        showNotification(translateText('attention_title'), translateText('registration_required'), 'warning');
        return;
    }
    isOnline = true;
    showScreen(onlineSetupScreen);
});

backToModesBtn?.addEventListener('click', () => showScreen(modeSelectionScreen));
createRoomBtn?.addEventListener('click', createNewRoom);

joinRoomBtn?.addEventListener('click', () => {
    const code = roomCodeInput.value.trim().toUpperCase();
    if (code.length === 6) {
        joinExistingRoom(code);
    } else {
        showNotification('Р“СЂРµС€РєР°', 'РњРѕР»СЏ, РІСЉРІРµРґРµС‚Рµ 6-С†РёС„СЂРµРЅ РєРѕРґ!', 'error');
    }
});

confirmProfileBtn?.addEventListener('click', () => {
    const nickname = onlineNicknameInput.value.trim();
    if (!nickname) {
        Swal.fire('Р“СЂРµС€РєР°', 'РњРѕР»СЏ, РІСЉРІРµРґРµС‚Рµ РїСЂСЏРєРѕСЂ!', 'error');
        return;
    }
    
    // РџСЂРѕРІРµСЂРєР° Р·Р° Р»РѕРіРЅР°С‚ РїРѕС‚СЂРµР±РёС‚РµР» РїСЂРµРґРё РїСЂРѕРґСЉР»Р¶Р°РІР°РЅРµ
    if (typeof auth !== 'undefined' && !auth.currentUser) {
        Swal.fire('Р“СЂРµС€РєР°', translateText('registration_required'), 'error').then(() => {
            showWelcomeModal();
        });
        return;
    }
    
    setupProfile(nickname, selectedAvatar, spectatorModeCheckbox.checked);
});

leaveRoomBtn?.addEventListener('click', leaveRoom);

inviteBtn?.addEventListener('click', () => {
    const inviteUrl = `${window.location.origin}${window.location.pathname}?room=${roomCode}`;
    navigator.clipboard.writeText(inviteUrl).then(() => {
        Swal.fire({
            title: 'РљРѕРїРёСЂР°РЅРѕ!',
            text: 'Р›РёРЅРєСЉС‚ Р·Р° РїРѕРєР°РЅР° Рµ РєРѕРїРёСЂР°РЅ РІ РєР»РёРїР±РѕСЂРґР°.',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
        });
    });
});

startOnlineGameBtn?.addEventListener('click', startOnlineGame);

submitWordBtn?.addEventListener('click', () => {
    const word = playerWordInput.value.trim();
    if (word) {
        submitOnlineWord(word);
        playerWordInput.value = '';
    }
});

playerWordInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') submitWordBtn.click();
});

// РЎР»СѓС€Р°С‚РµР» Р·Р° РєР»Р°РІРёС€Р° SPACE
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && gameScreen.classList.contains('hidden') === false) {
        e.preventDefault();
        // РџСЂРѕРІРµСЂСЏРІР°РјРµ РґР°Р»Рё Р±СЂРѕРµРЅРµС‚Рѕ Рµ Р°РєС‚РёРІРЅРѕ
        if (isCountdownActive) {
            return; // РђРєРѕ Р±СЂРѕРµРЅРµС‚Рѕ Рµ Р°РєС‚РёРІРЅРѕ, РЅРµ РїРѕР·РІРѕР»СЏРІР°РјРµ РЅР°С‚РёСЃРєР°РЅРµС‚Рѕ РЅР° SPACE
        }
        // РџСЂРѕРІРµСЂСЏРІР°РјРµ РґР°Р»Рё СЃРјРµ РЅР° РµРєСЂР°РЅР° Р·Р° РєСЂР°Р№ РЅР° РЅРёРІРѕС‚Рѕ
        if (imagesContainer.querySelector('.level-end')) {
            // РџСЂРµРјРёРЅР°РІР°РјРµ РєСЉРј СЃР»РµРґРІР°С‰РѕС‚Рѕ РЅРёРІРѕ
            currentPlayer = 1;
            showCountdown();
        } else {
            nextPlayer();
        }
    }
});

// РЎС‚Р°СЂРёСЏС‚ event listener Рµ РїСЂРµРјР°С…РЅР°С‚ - СЃРµРіР° РёР·РїРѕР»Р·РІР°РјРµ РЅРѕРІРёСЏ РІ РєСЂР°СЏ РЅР° С„Р°Р№Р»Р°

// РџРѕРєР°Р·РІР°РЅРµ РЅР° РѕР±СЂР°С‚РµРЅ Р±СЂРѕСЏС‡
function showCountdown() {
    let count = 3;
    isCountdownActive = true; // Р—Р°РїРѕС‡РІР°РјРµ Р±СЂРѕРµРЅРµС‚Рѕ
    setNextPlayerButtonEnabled(false); // Р”РµР°РєС‚РёРІРёСЂР°РјРµ Р±СѓС‚РѕРЅР°
    
    // Р”РѕР±Р°РІСЏРјРµ Pac-Man loader РЅР°Рґ РѕР±СЂР°С‚РЅРёСЏ Р±СЂРѕСЏС‡
    imagesContainer.innerHTML = `
        <div class="countdown-container">
            <div class="pacman-loader">
                <div class="loader-wrapper">
                    <div class="packman"></div>
                    <div class="dots">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
            </div>
            <div class="countdown">${count}</div>
            <div class="countdown-message">${translateText('attention_next_player')}</div>
        </div>
    `;
    const buttonText = currentPlayerDisplay.querySelector('.button-text');
    if (buttonText) {
        buttonText.textContent = `${translateText('player')} ${currentPlayer}`;
    }
    
    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
            // РћР±РЅРѕРІСЏРІР°РјРµ СЃР°РјРѕ Р±СЂРѕСЏС‡Р°, Р·Р°РїР°Р·РІР°Р№РєРё loader-Р°
            const countdownElement = imagesContainer.querySelector('.countdown');
            if (countdownElement) {
                countdownElement.textContent = count;
            }
        } else {
            clearInterval(countdownInterval);
            isCountdownActive = false; // РљСЂР°Р№ РЅР° Р±СЂРѕРµРЅРµС‚Рѕ
            showPlayerScreen();
        }
    }, 1000);
}

// РџРѕРєР°Р·РІР°РЅРµ РЅР° РµРєСЂР°РЅР° РЅР° РёРіСЂР°С‡Р°
function showPlayerScreen() {
    setNextPlayerButtonEnabled(true); // РђРєС‚РёРІРёСЂР°РјРµ Р±СѓС‚РѕРЅР°
    
    console.log('=== showPlayerScreen DEBUG ===');
    console.log('currentLevel:', currentLevel);
    console.log('gameLevels.length:', gameLevels.length);
    console.log('gameLevels:', gameLevels);
    
    // РџСЂРѕРІРµСЂСЏРІР°РјРµ РґР°Р»Рё РёРјР° РІР°Р»РёРґРµРЅ level
    if (!gameLevels || currentLevel >= gameLevels.length) {
        console.log('Р“РµРЅРµСЂРёСЂР°РјРµ РµРґРЅРѕ РЅРёРІРѕ РїСЂРё РЅСѓР¶РґР°...');
        // РР·РїРѕР»Р·РІР°РјРµ РЅРѕРІР°С‚Р° С„СѓРЅРєС†РёСЏ Р·Р° РіРµРЅРµСЂРёСЂР°РЅРµ РЅР° РµРґРЅРѕ РЅРёРІРѕ
        generateSingleLevelAsync().then((level) => {
            console.log('вњ… Р•РґРЅРѕ РЅРёРІРѕ РіРµРЅРµСЂРёСЂР°РЅРѕ:', level);
            gameLevels.push(level);
            showPlayerScreenContent();
        }).catch(error => {
            console.error('Р“СЂРµС€РєР° РїСЂРё РіРµРЅРµСЂРёСЂР°РЅРµ РЅР° РЅРёРІРѕ:', error);
            // Fallback РєСЉРј Р»РѕРєР°Р»РЅРѕ РіРµРЅРµСЂРёСЂР°РЅРµ
            generateGameLevels();
            showPlayerScreenContent();
        });
        return;
    }
    
    showPlayerScreenContent();
}

function showPlayerScreenContent() {
    const level = gameLevels[currentLevel];
    if (!level) {
        console.error('вќЊ Р“СЂРµС€РєР°: level Рµ undefined Р·Р° currentLevel:', currentLevel);
        return;
    }
    
    const isImpostor = currentPlayer === level.impostor;
    console.log('вњ… Level РЅР°РјРµСЂРµРЅ:', level);
    console.log('currentPlayer:', currentPlayer, 'isImpostor:', isImpostor);
    
    // РћР±РЅРѕРІСЏРІР°РјРµ С‚РµРєСЃС‚Р° РЅР° РёРіСЂР°С‡Р°
    const buttonText = currentPlayerDisplay.querySelector('.button-text');
    if (buttonText) {
        buttonText.textContent = `${translateText('player')} ${currentPlayer}`;
    }

    // РР·С‡РёСЃС‚РІР°РјРµ РєРѕРЅС‚РµР№РЅРµСЂР° РїСЉСЂРІРѕ
    imagesContainer.innerHTML = '';

    if (isImpostor) {
        // РРјРїРѕСЃС‚СЉСЂСЉС‚ РЅРµ РІРёР¶РґР° РёР·РѕР±СЂР°Р¶РµРЅРёРµС‚Рѕ
        imagesContainer.innerHTML = `
            <div class="impostor-message">
                <i class="fas fa-user-secret impostor-icon"></i>
                <div>${translateText('you_are_impostor')} ${translateText('dont_tell_others')}</div>
            </div>`;
    } else {
        // РћСЃС‚Р°РЅР°Р»РёС‚Рµ РёРіСЂР°С‡Рё РІРёР¶РґР°С‚ РёР·РѕР±СЂР°Р¶РµРЅРёРµС‚Рѕ
        const imageCard = document.createElement('div');
        imageCard.className = 'image-card';
        
        // Р”РѕР±Р°РІСЏРјРµ loader-Р°
        const loaderHTML = `
            <div class="image-loader">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="loader">
                    <path pathLength="360" d="M 56.3752 2 H 7.6248 C 7.2797 2 6.9999 2.268 6.9999 2.5985 V 61.4015 C 6.9999 61.7321 7.2797 62 7.6248 62 H 56.3752 C 56.7203 62 57.0001 61.7321 57.0001 61.4015 V 2.5985 C 57.0001 2.268 56.7203 2 56.3752 2 Z" />
                    <path pathLength="360" d="M 55.7503 60.803 H 8.2497 V 3.1971 H 55.7503 V 60.803 Z" />
                    <path pathLength="360" d="M 29.7638 47.6092 C 29.4971 47.3997 29.1031 47.4368 28.8844 47.6925 C 28.6656 47.9481 28.7046 48.3253 28.9715 48.5348 L 32.8768 51.6023 C 32.9931 51.6936 33.1333 51.738 33.2727 51.738 C 33.4533 51.738 33.6328 51.6634 33.7562 51.519 C 33.975 51.2634 33.936 50.8862 33.6692 50.6767 L 29.7638 47.6092 Z" />
                    <path pathLength="360" d="M 42.3557 34.9046 C 38.4615 34.7664 36.9617 37.6749 36.7179 39.2213 L 35.8587 44.2341 C 35.8029 44.5604 36.0335 44.8681 36.374 44.9218 C 36.4084 44.9272 36.4424 44.9299 36.476 44.9299 C 36.7766 44.9299 37.0415 44.7214 37.0918 44.4281 L 37.9523 39.4076 C 37.9744 39.2673 38.544 35.9737 42.311 36.1007 C 42.6526 36.1124 42.9454 35.8544 42.9577 35.524 C 42.9702 35.1937 42.7006 34.9164 42.3557 34.9046 Z" />
                    <path pathLength="360" d="M 13.1528 55.5663 C 13.1528 55.8968 13.4326 56.1648 13.7777 56.1648 H 50.2223 C 50.5674 56.1648 50.8472 55.8968 50.8472 55.5663 V 8.4339 C 50.8472 8.1034 50.5674 7.8354 50.2223 7.8354 H 13.7777 C 13.4326 7.8354 13.1528 8.1034 13.1528 8.4339 V 55.5663 Z" />
                    <path pathLength="360" d="M 25.3121 26.5567 C 24.9717 27.4941 25.0042 28.8167 25.0634 29.5927 C 23.6244 29.8484 20.3838 31.0913 18.9478 37.0352 C 18.5089 37.5603 17.8746 38.1205 17.2053 38.7114 C 16.2598 39.546 15.2351 40.4515 14.4027 41.5332 V 20.5393 H 23.7222 C 23.7178 22.6817 24.1666 25.4398 25.3121 26.5567 Z" />
                    <path pathLength="360" d="M 49.5975 43.4819 C 48.3838 39.1715 46.3138 33.6788 43.4709 29.7736 C 42.6161 28.5995 40.7095 27.0268 39.6852 26.1818 L 39.6352 26.1405 C 39.4176 24.783 39.1158 22.5803 38.8461 20.5394 H 49.5976 V 43.4819 Z" />
                    <path pathLength="360" d="M 29.8161 45.151 C 29.0569 44.7516 28.3216 44.4344 27.6455 44.185 C 27.6488 44.0431 27.6397 43.8917 27.6478 43.7715 C 27.9248 39.7036 30.4491 36.2472 35.1502 33.4979 C 38.7221 31.4091 42.2682 30.5427 42.3036 30.5341 C 42.3563 30.5213 42.416 30.5119 42.4781 30.5037 C 42.6695 30.7681 42.8577 31.0407 43.0425 31.3217 C 42.1523 31.4917 39.6591 32.0721 37.0495 33.6188 C 34.2273 35.2912 30.7775 38.4334 29.9445 44.0105 C 29.9025 44.2924 29.8211 45.0524 29.8161 45.151 Z" />
                    <path pathLength="360" d="M 32.2021 33.6346 C 29.1519 33.8959 26.6218 32.5634 25.6481 31.4461 C 25.9518 30.3095 28.4436 28.4847 30.2282 27.4911 C 30.436 27.3755 30.5563 27.1556 30.5372 26.9261 L 30.4311 25.6487 C 30.5264 25.6565 30.622 25.6621 30.7181 25.6642 L 30.8857 25.6672 C 32.0645 25.6912 33.2094 25.302 34.1059 24.5658 L 34.112 24.5607 L 34.4024 32.5344 C 33.8302 32.8724 33.2863 33.2227 32.7728 33.5852 C 32.5227 33.6032 32.3068 33.6258 32.2021 33.6346 Z" />
                    <path pathLength="360" d="M 27.8056 17.9207 C 27.8041 17.9207 27.8025 17.9207 27.8012 17.9207 L 27.0155 17.9259 L 26.8123 15.4718 C 26.8174 15.4609 26.8238 15.4501 26.8282 15.4389 C 27.2218 15.0856 28.158 14.3463 29.1923 14.252 C 31.0985 14.0778 33.442 14.3386 33.8213 16.5565 L 34.0564 23.0299 L 33.2927 23.6566 C 32.6306 24.2004 31.7888 24.4889 30.9118 24.4703 L 30.7437 24.4673 C 29.7977 24.4473 28.8841 24.0555 28.2376 23.3933 C 27.9671 23.1152 27.748 22.7967 27.5871 22.4474 C 27.426 22.0961 27.3292 21.7272 27.2989 21.3494 L 27.1145 19.1223 L 27.8097 19.1178 C 28.1548 19.1154 28.4327 18.8457 28.4303 18.5152 C 28.4278 18.186 28.1487 17.9207 27.8056 17.9207 Z" />
                    <path pathLength="360" d="M 38.4358 26.5433 C 38.4589 26.6829 38.5326 26.8101 38.6443 26.9026 L 38.8697 27.0889 C 39.5266 27.6307 40.6931 28.5938 41.5811 29.4829 C 40.6409 29.7428 38.2545 30.4762 35.6283 31.8516 L 35.3161 23.281 C 35.316 23.2777 35.3158 23.2743 35.3157 23.271 L 35.0692 16.4785 C 35.0682 16.455 35.0659 16.4316 35.0621 16.4082 C 34.6703 13.9692 32.4875 12.7498 29.0741 13.0603 C 28.5659 13.1067 28.0885 13.255 27.6614 13.4468 C 28.321 12.6324 29.4568 11.8605 31.3984 11.8605 C 32.892 11.8605 34.2086 12.4323 35.3118 13.5599 C 36.3478 14.6187 36.9981 15.9821 37.1923 17.5023 C 37.5097 19.987 38.0932 24.4655 38.4358 26.5433 Z" />
                    <path pathLength="360" d="M 25.6994 17.1716 L 26.053 21.4425 C 26.094 21.9536 26.225 22.4539 26.4434 22.93 C 26.6613 23.403 26.9574 23.8335 27.3242 24.2106 C 27.833 24.7317 28.4641 25.128 29.1549 25.3746 L 29.2609 26.6526 C 28.8063 26.9219 27.959 27.4459 27.0978 28.0926 C 26.7982 28.3177 26.5261 28.5365 26.2766 28.7503 C 26.2677 27.9385 26.3477 27.0941 26.6128 26.699 C 26.7087 26.5561 26.7368 26.3807 26.6898 26.2168 C 26.6428 26.0528 26.5253 25.9159 26.3667 25.8398 C 25.2812 25.3198 24.639 20.7943 25.134 18.7283 C 25.2757 18.1366 25.4822 17.6126 25.6994 17.1716 Z" />
                    <path pathLength="360" d="M 14.4025 54.9677 V 43.9616 C 15.1297 42.1745 16.6798 40.8031 18.052 39.5917 C 18.5756 39.1296 19.0771 38.6852 19.5054 38.243 C 20.1455 38.2763 21.8243 38.4721 22.2856 39.611 C 22.526 40.696 22.9861 41.6387 23.6573 42.3985 C 23.7809 42.5383 23.9573 42.6104 24.1347 42.6104 C 24.2773 42.6104 24.4206 42.5639 24.5381 42.4688 C 24.8014 42.2553 24.8343 41.8776 24.6115 41.6252 C 22.2978 39.0062 23.8504 34.5445 23.8663 34.4997 C 23.9782 34.1872 23.8046 33.8471 23.4785 33.7397 C 23.1507 33.6321 22.7964 33.7986 22.6843 34.1111 C 22.6657 34.1631 22.2262 35.4024 22.1149 37.0253 C 22.0992 37.2529 22.0927 37.476 22.0916 37.6958 C 21.4663 37.3478 20.7678 37.1827 20.215 37.1057 C 21.266 32.9598 23.2109 31.5061 24.4867 30.9973 C 24.4164 31.2001 24.3769 31.3974 24.3692 31.5894 C 24.3639 31.7208 24.404 31.8501 24.4831 31.9575 C 25.0708 32.7551 26.1363 33.5207 27.4065 34.0584 C 28.2686 34.4232 29.5576 34.8194 31.1457 34.861 C 28.2499 37.3877 26.6257 40.39 26.4009 43.6936 C 26.3992 43.7195 26.3962 43.7461 26.3928 43.7729 C 25.1023 43.399 24.2167 43.2969 24.1252 43.2873 C 23.9888 43.2728 23.8487 43.3023 23.7304 43.3716 C 23.0495 43.7702 22.591 44.3922 22.4046 45.1703 C 22.2331 45.8868 22.3106 46.6885 22.6019 47.3807 C 22.0046 47.6438 21.3269 47.7784 20.7914 47.848 C 19.4939 45.6912 20.8219 44.6351 20.989 44.5146 C 21.2655 44.3207 21.3274 43.9492 21.1268 43.6822 C 20.9253 43.4139 20.5346 43.3533 20.2546 43.5462 C 19.4539 44.0983 18.406 45.6195 19.3656 47.7888 C 18.685 47.5329 17.6255 46.8145 17.8055 44.832 C 17.8836 43.9718 18.1884 43.3352 18.7117 42.9403 C 19.5815 42.2834 20.8198 42.451 20.8366 42.4537 C 21.1748 42.503 21.4952 42.2819 21.5494 41.9563 C 21.6037 41.6297 21.3713 41.3231 21.0306 41.2712 C 20.9582 41.2599 19.2558 41.0142 17.9494 41.9917 C 17.1375 42.5992 16.6703 43.5199 16.5605 44.7282 C 16.1991 48.7092 19.7376 49.1126 19.7732 49.116 C 19.7951 49.1182 22.2326 49.1079 23.7782 48.1211 C 23.8053 48.1039 24.4158 47.7528 24.4158 47.7528 C 24.5214 47.8841 24.6624 48.0532 24.8294 48.2438 L 22.3598 49.4874 C 22.1544 49.5908 22.0257 49.7949 22.0257 50.0171 V 51.8127 C 22.0257 52.1432 22.3054 52.4112 22.6505 52.4112 S 23.2754 52.1432 23.2754 51.8127 V 50.3786 L 25.6987 49.1582 C 26.021 49.4709 26.3894 49.7985 26.7963 50.1188 L 24.6627 50.7144 C 24.4768 50.7663 24.3269 50.8977 24.2559 51.0702 L 23.3968 53.1651 C 23.2704 53.4729 23.4286 53.8202 23.7498 53.9409 C 23.8248 53.9694 23.9023 53.9825 23.9782 53.9825 C 24.2277 53.9825 24.4632 53.8384 24.5599 53.6028 L 25.307 51.7814 L 28.0879 51.0053 C 28.5412 51.2713 29.0239 51.51 29.5341 51.6979 C 29.6079 51.7252 29.6836 51.738 29.7582 51.738 C 30.0092 51.738 30.246 51.592 30.3415 51.3542 C 30.4653 51.0457 30.3048 50.6994 29.9825 50.5808 C 27.1642 49.5423 25.2952 46.9394 25.2771 46.9138 C 25.1245 46.6979 24.8439 46.6013 24.5831 46.6746 L 23.7537 46.9082 C 23.5672 46.4465 23.5125 45.8992 23.623 45.4377 C 23.7168 45.046 23.9138 44.7341 24.21 44.508 C 25.267 44.6734 29.863 45.5842 33.2732 49.2905 C 33.3967 49.4247 33.569 49.4932 33.7423 49.4932 C 33.889 49.4932 34.0364 49.444 34.1551 49.3437 C 34.414 49.1251 34.439 48.747 34.2108 48.4989 C 33.9947 48.2641 33.7738 48.0421 33.5507 47.8278 L 38.211 47.0175 C 38.3595 47.0014 40.1672 46.8356 41.295 48.2161 C 41.4182 48.3671 41.6019 48.4458 41.7875 48.4458 C 41.9222 48.4458 42.0578 48.4043 42.1721 48.3186 C 42.4439 48.1148 42.4919 47.7386 42.2791 47.4784 C 40.6703 45.5094 38.1379 45.8184 38.0305 45.8327 C 38.0218 45.8339 38.0132 45.8353 38.0043 45.8368 L 32.3855 46.8136 C 31.945 46.4667 31.4998 46.1528 31.0557 45.8697 C 31.0618 45.5534 31.0651 45.1775 31.0836 44.9842 C 31.1138 44.6713 31.1524 44.3635 31.1997 44.0606 C 31.8329 40.0032 34.0061 36.8432 37.6695 34.6587 C 40.6334 32.8915 43.5195 32.4536 43.5682 32.4464 C 43.604 32.4413 43.663 32.4341 43.7302 32.4251 C 47.2229 38.3378 49.3982 46.7588 49.5976 49.5158 V 54.9673 H 14.4025 Z" />
                    <path pathLength="360" d="M 49.5975 9.0325 V 19.3422 H 38.689 C 38.5937 18.6105 38.5061 17.9301 38.4329 17.3569 C 38.2063 15.5828 37.4422 13.9868 36.2237 12.7413 C 34.8748 11.3624 33.2514 10.6633 31.3984 10.6633 C 27.3688 10.6633 25.8233 13.5309 25.556 15.0901 C 25.1526 15.5932 24.3175 16.7856 23.916 18.46 C 23.8568 18.7069 23.8106 19.0066 23.7778 19.3421 H 14.4025 V 9.0323 H 49.5975 Z" />
                    <path pathLength="360" d="M 30.2223 21.2875 C 30.5674 21.2875 30.8471 21.0195 30.8471 20.6889 V 18.92 L 31.9916 18.9675 C 32.3376 18.9833 32.628 18.7259 32.643 18.3956 C 32.658 18.0654 32.3907 17.786 32.0459 17.7717 L 30.2495 17.6969 C 30.077 17.6889 29.9133 17.7497 29.7902 17.8624 C 29.6671 17.9753 29.5976 18.1315 29.5976 18.2948 V 20.6889 C 29.5974 21.0195 29.8772 21.2875 30.2223 21.2875 Z" />
                </svg>
                <div class="image-loader-text">Р—Р°СЂРµР¶РґР°Рј СЃРЅРёРјРєР°С‚Р°...</div>
            </div>
            <img src="${level.image}" alt="Image" onload="this.classList.add('loaded'); this.previousElementSibling.style.display='none';">
        `;
        
        imageCard.innerHTML = loaderHTML;
        imagesContainer.appendChild(imageCard);
    }
    // РЎР°РјРѕ Р°РєРѕ РЅРµ Рµ РїСЉСЂРІРѕС‚Рѕ РїРѕРєР°Р·РІР°РЅРµ, РјРѕР¶Рµ РґР° РёРјР° Р°РІС‚РѕРјР°С‚РёС‡РЅР° СЃРјСЏРЅР° (Р°РєРѕ РЅСЏРєСЉРґРµ РёРјР° setTimeout РёР»Рё РїРѕРґРѕР±РЅРѕ)
    isFirstPlayerScreen = false;
}

// РџРѕРєР°Р·РІР°РЅРµ РЅР° РµРєСЂР°РЅР° Р·Р° РєСЂР°Р№ РЅР° РЅРёРІРѕС‚Рѕ
function showLevelEnd() {
    console.log('[LIMIT DEBUG] showLevelEnd РёР·РІРёРєР°РЅР°');
    console.log('currentLevel РїСЂРµРґРё:', currentLevel);
    
    const currentLevelData = gameLevels[currentLevel - 1];
    // РЎРєСЂРёРІР°РјРµ Р±СѓС‚РѕРЅРёС‚Рµ РЅР°Р№-РѕС‚РґРѕР»Сѓ
    document.querySelector('.game-controls').style.display = 'none';
    // РЎСЉР·РґР°РІР°РјРµ Р±СѓС‚РѕРЅР° Р·Р° РЅРѕРІ СЂСѓРЅРґ
    let newRoundBtn = document.getElementById('start-new-round');
    if (!newRoundBtn) {
        newRoundBtn = document.createElement('button');
        newRoundBtn.id = 'start-new-round';
        newRoundBtn.className = 'btn';
        newRoundBtn.textContent = translateText('start_new_round');
        newRoundBtn.style.marginTop = '20px';
        newRoundBtn.style.display = 'block';
        newRoundBtn.style.width = '100%';
    }
    imagesContainer.innerHTML = `
        <div class="level-end animate__animated animate__fadeIn">
            <h2 class="animate__animated animate__bounceIn">${translateText('level_end')} ${currentLevel}</h2>
            <div class="impostor-reveal animate__animated animate__fadeInUp">
                <div class="trophy-container animate__animated animate__tada animate__infinite">
                    <i class="fas fa-trophy trophy-icon"></i>
                </div>
                <i class="fas fa-user-secret impostor-icon animate__animated animate__pulse animate__infinite"></i>
                <div class="reveal-button-container animate__animated animate__fadeIn">
                    <button id="reveal-impostor-btn" class="btn reveal-impostor-btn animate__animated animate__pulse animate__infinite">
                        <i class="fas fa-eye"></i>
                        ${translateText('reveal_impostor')}
                    </button>
                </div>
                <div id="impostor-reveal-content" class="impostor-reveal-content" style="display: none;">
                <p class="animate__animated animate__fadeIn">${translateText('impostor_was')}:</p>
                <div class="impostor-name animate__animated animate__heartBeat">${translateText('player')} ${currentLevelData.impostor}</div>
                <div class="confetti-container">
                    <i class="fas fa-star confetti"></i>
                    <i class="fas fa-star confetti"></i>
                    <i class="fas fa-star confetti"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    // Р”РѕР±Р°РІСЏРјРµ Р±СѓС‚РѕРЅР° СЃР»РµРґ .game-controls
    const gameControls = document.querySelector('.game-controls');
    if (gameControls.nextSibling) {
        gameControls.parentNode.insertBefore(newRoundBtn, gameControls.nextSibling);
    } else {
        gameControls.parentNode.appendChild(newRoundBtn);
    }
    
    // Р”РѕР±Р°РІСЏРјРµ event listener Р·Р° Р±СѓС‚РѕРЅР° Р·Р° СЂР°Р·РєСЂРёРІР°РЅРµ РЅР° РёРјРїРѕСЃС‚СЉСЂР°
    const revealImpostorBtn = document.getElementById('reveal-impostor-btn');
    if (revealImpostorBtn) {
        revealImpostorBtn.addEventListener('click', () => {
            const revealContent = document.getElementById('impostor-reveal-content');
            const revealBtn = document.getElementById('reveal-impostor-btn');
            
            if (revealContent && revealBtn) {
                // РЎРєСЂРёРІР°РјРµ Р±СѓС‚РѕРЅР°
                revealBtn.style.display = 'none';
                // РџРѕРєР°Р·РІР°РјРµ СЃСЉРґСЉСЂР¶Р°РЅРёРµС‚Рѕ СЃ Р°РЅРёРјР°С†РёСЏ
                revealContent.style.display = 'block';
                revealContent.classList.add('animate__animated', 'animate__fadeIn');
                
                // Р”РѕР±Р°РІСЏРјРµ РґРѕРїСЉР»РЅРёС‚РµР»РЅРё РµС„РµРєС‚Рё
                setTimeout(() => {
                    revealContent.classList.add('animate__heartBeat');
                }, 500);
            }
        });
    }
    // РЎР»СѓС€Р°С‚РµР» Р·Р° Р±СѓС‚РѕРЅР°
    newRoundBtn.onclick = () => {
        currentPlayer = 1;
        document.querySelector('.game-controls').style.display = '';
        newRoundBtn.remove();
        showCountdown();
    };

    // РџРѕРєР°Р·РІР°РјРµ СЂРµРіРёСЃС‚СЂР°С†РёСЏС‚Р° РІРµРґРЅР°РіР° СЃР»РµРґ РїСЉСЂРІРёСЏ СЂСѓРЅРґ
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log('РџСЂРѕРІРµСЂРєР° Р·Р° СЂРµРіРёСЃС‚СЂР°С†РёСЏ СЃР»РµРґ РїСЉСЂРІРё СЂСѓРЅРґ:');
    console.log('- currentLevel:', currentLevel, '| Number(currentLevel) === 1:', Number(currentLevel) === 1);
    console.log('- isLoggedIn:', isLoggedIn);
    console.log('- registrationModal.style.display:', registrationModal.style.display);
    if (Number(currentLevel) === 1 && isLoggedIn !== 'true' && registrationModal.style.display !== 'block') {
        console.log('РџРѕРєР°Р·РІР°РјРµ С„РѕСЂРјР°С‚Р° Р·Р° СЂРµРіРёСЃС‚СЂР°С†РёСЏ, Р·Р°С‰РѕС‚Рѕ РЅРµ СЃРё РІР»СЏР·СЉР»!');
        setTimeout(() => {
            showRegistration();
        }, 1000);
    } else {
        console.log('РќР• РїРѕРєР°Р·РІР°РјРµ С„РѕСЂРјР°С‚Р° Р·Р° СЂРµРіРёСЃС‚СЂР°С†РёСЏ. РЈСЃР»РѕРІРёСЏС‚Р° РЅРµ СЃР° РёР·РїСЉР»РЅРµРЅРё.');
    }
    
    console.log('=== showLevelEnd Р·Р°РІСЉСЂС€РµРЅР° ===');
    // Р—Р°РїРёСЃРІР°РјРµ РёР·РёРіСЂР°РЅР° РёРіСЂР° Рё РїСЂРѕРІРµСЂСЏРІР°РјРµ Р»РёРјРёС‚Р° РїСЂРё РІСЃРµРєРё СЂСѓРЅРґ
    recordGame();
    roundsPlayed++;
    // РџСЂРѕРІРµСЂРєР° Р·Р° Р»РёРјРёС‚ РЅР° РІСЃРµРєРё 3 СЂСѓРЅРґР°
    checkFreeGameLimitAndMaybeBlock(() => {
        // РЅРёС‰Рѕ, РїСЂРѕСЃС‚Рѕ РїРѕР·РІРѕР»СЏРІР°РјРµ РґР° РїСЂРѕРґСЉР»Р¶Рё СЂСѓРЅРґР°
    });
}

// РЎР»РµРґРІР°С‰ РёРіСЂР°С‡
function nextPlayer() {
    currentPlayer++;
    console.log('=== nextPlayer РёР·РІРёРєР°РЅР° ===');
    console.log('currentPlayer:', currentPlayer, 'totalPlayers:', totalPlayers, 'currentLevel РїСЂРµРґРё:', currentLevel);
    
    if (currentPlayer > totalPlayers) {
        // РљСЂР°Р№ РЅР° РЅРёРІРѕС‚Рѕ
        currentLevel++;
        console.log('РљСЂР°Р№ РЅР° РЅРёРІРѕС‚Рѕ - РЅРѕРІ currentLevel:', currentLevel, 'totalLevels:', totalLevels);
        
        if (currentLevel >= gameLevels.length) {
            // Р“РµРЅРµСЂРёСЂР°РјРµ РµРґРЅРѕ РЅРёРІРѕ РїСЂРё РЅСѓР¶РґР°
            console.log('Р“РµРЅРµСЂРёСЂР°РјРµ РµРґРЅРѕ РЅРёРІРѕ РїСЂРё РЅСѓР¶РґР°...');
            generateSingleLevelAsync().then((level) => {
                console.log('вњ… Р•РґРЅРѕ РЅРёРІРѕ РіРµРЅРµСЂРёСЂР°РЅРѕ:', level);
                gameLevels.push(level);
                if (currentLevel >= totalLevels) {
                    // РРіСЂР°С‚Р° РїСЂРёРєР»СЋС‡Рё
                    console.log('РРіСЂР°С‚Р° РїСЂРёРєР»СЋС‡Рё, РїРѕРєР°Р·РІР°РјРµ СЂРµР·СѓР»С‚Р°С‚Рё...');
                    showResults();
                } else {
                    // РџРѕРєР°Р·РІР°РјРµ РµРєСЂР°РЅР° Р·Р° РєСЂР°Р№ РЅР° РЅРёРІРѕС‚Рѕ
                    console.log('РџРѕРєР°Р·РІР°РјРµ РєСЂР°Р№ РЅР° РЅРёРІРѕС‚Рѕ...');
                    showLevelEnd();
                }
            }).catch(error => {
                console.error('Р“СЂРµС€РєР° РїСЂРё РіРµРЅРµСЂРёСЂР°РЅРµ РЅР° РЅРёРІРѕ:', error);
                // Fallback РєСЉРј Р»РѕРєР°Р»РЅРѕ РіРµРЅРµСЂРёСЂР°РЅРµ
                generateGameLevels();
                if (currentLevel >= totalLevels) {
                    showResults();
                } else {
                    showLevelEnd();
                }
            });
            return;
        }
        if (currentLevel >= totalLevels) {
            // РРіСЂР°С‚Р° РїСЂРёРєР»СЋС‡Рё
            console.log('РРіСЂР°С‚Р° РїСЂРёРєР»СЋС‡Рё, РїРѕРєР°Р·РІР°РјРµ СЂРµР·СѓР»С‚Р°С‚Рё...');
            showResults();
        } else {
            // РџРѕРєР°Р·РІР°РјРµ РµРєСЂР°РЅР° Р·Р° РєСЂР°Р№ РЅР° РЅРёРІРѕС‚Рѕ
            console.log('РџРѕРєР°Р·РІР°РјРµ РєСЂР°Р№ РЅР° РЅРёРІРѕС‚Рѕ...');
            showLevelEnd();
        }
    } else {
        console.log('РџСЂРѕРґСЉР»Р¶Р°РІР°РјРµ СЃСЉСЃ СЃР»РµРґРІР°С‰РёСЏ РёРіСЂР°С‡');
        showCountdown();
    }
    
    console.log('=== nextPlayer Р·Р°РІСЉСЂС€РµРЅР° ===');
}

// РџРѕРєР°Р·РІР°РЅРµ РЅР° СЂРµР·СѓР»С‚Р°С‚Рё
function showResults() {
    console.log('[LIMIT DEBUG] showResults РёР·РІРёРєР°РЅР°');
    console.log('currentLevel:', currentLevel);
    console.log('isUserRegistered:', isUserRegistered);
    
    gameScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
    const lastLevelData = gameLevels[currentLevel - 1];
    resultsList.innerHTML = `
        <div class="result-item">
            <span class="player-name">${translateText('player')} ${lastLevelData.impostor}</span>
            <span class="score">${translateText('you_are_impostor')}</span>
        </div>
    `;
    recordGame(); // Р—Р°РїРёСЃРІР°РјРµ РёР·РёРіСЂР°РЅР° РёРіСЂР° Р·Р° С‚РµРєСѓС‰РёСЏ РїРѕС‚СЂРµР±РёС‚РµР»
}

// РќРѕРІР° РёРіСЂР°
newGameBtn.addEventListener('click', () => {
    // Р—Р°РїРёСЃРІР°РјРµ РёР·РёРіСЂР°РЅР° РёРіСЂР° Р·Р° С‚РµРєСѓС‰РёСЏ РїРѕС‚СЂРµР±РёС‚РµР» РџР Р•Р”Р РґР° РїСЂРѕРІРµСЂРёРј Р»РёРјРёС‚Р°
    recordGame();
    checkFreeGameLimitAndMaybeBlock(() => {
        resultsScreen.classList.add('hidden');
        setupScreen.classList.remove('hidden');
        resetGame();
    });
});

// Р РµСЃС‚Р°СЂС‚РёСЂР°РЅРµ РЅР° РёРіСЂР°С‚Р°
function resetGame() {
    console.log('[LIMIT DEBUG] resetGame РёР·РІРёРєР°РЅР°');
    currentPlayer = 1;
    totalPlayers = 0;
    currentLevel = 0;
    roundsPlayed = 0; // РќСѓР»РёСЂР°РјРµ Р±СЂРѕСЏС‡Р° РїСЂРё РЅРѕРІР° РёРіСЂР°
    gameLevels = []; // РР·С‡РёСЃС‚РІР°РјРµ РЅРёРІР°С‚Р° - С‰Рµ СЃРµ РіРµРЅРµСЂРёСЂР°С‚ РїСЂРё РЅСѓР¶РґР°
    clearInterval(countdownInterval);
    // РќР• РіРµРЅРµСЂРёСЂР°РјРµ РЅРёРІР° С‚СѓРє - С‰Рµ СЃРµ РіРµРЅРµСЂРёСЂР°С‚ РїСЂРё РЅСѓР¶РґР°
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїСЂРµРјРёРЅР°РІР°РЅРµ РєСЉРј СЃР»РµРґРІР°С‰РѕС‚Рѕ РЅРёРІРѕ
function nextLevel() {
    currentLevel++;
    if (currentLevel >= totalLevels) {
        // РРіСЂР°С‚Р° РїСЂРёРєР»СЋС‡Рё
        showResults();
    } else {
        // РџРѕРєР°Р·РІР°РјРµ РµРєСЂР°РЅР° Р·Р° РєСЂР°Р№ РЅР° РЅРёРІРѕС‚Рѕ
        showLevelEnd();
    }
}

// РђРєС‚СѓР°Р»РёР·РёСЂР°Рј Р»РѕРіРёРєР°С‚Р° Р·Р° РЅР°С‚РёСЃРєР°РЅРµ РЅР° Р±СѓС‚РѕРЅР°
nextPlayerButton.addEventListener('click', () => {
    // РђРєРѕ Р±СЂРѕРµРЅРµС‚Рѕ Рµ Р°РєС‚РёРІРЅРѕ, РЅРµ РїСЂР°РІРёРј РЅРёС‰Рѕ
    if (isCountdownActive) {
        return;
    }
    console.log('Level end element:', imagesContainer.querySelector('.level-end'));
    if (imagesContainer.querySelector('.level-end')) {
        nextLevel();
    } else {
        nextPlayer();
    }
});

// Р”РµР°РєС‚РёРІРёСЂР°РЅРµ/Р°РєС‚РёРІРёСЂР°РЅРµ РЅР° Р±СѓС‚РѕРЅР° РїРѕ РІСЂРµРјРµ РЅР° Р±СЂРѕРµРЅРµС‚Рѕ
function setNextPlayerButtonEnabled(enabled) {
    nextPlayerButton.disabled = !enabled;
    if (!enabled) {
        nextPlayerButton.classList.add('disabled');
        nextPlayerButton.style.opacity = '0.5';
        nextPlayerButton.style.pointerEvents = 'none';
    } else {
        nextPlayerButton.classList.remove('disabled');
        nextPlayerButton.style.opacity = '';
        nextPlayerButton.style.pointerEvents = '';
    }
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїРѕРєР°Р·РІР°РЅРµ РЅР° РЅР°РґРїРёСЃР° "РЎР›Р•Р”Р’РђР© Р РЈРќР”"
function showNextRoundMessage() {
    const message = document.getElementById('next-round-message');
    
    // РџСЂРµРјР°С…РІР°РјРµ РІСЃРёС‡РєРё РєР»Р°СЃРѕРІРµ
    message.classList.remove('hidden', 'hide', 'show');
    
    // Р—Р°РїРѕС‡РІР°РјРµ СЃ РјР°Р»СЉРє СЂР°Р·РјРµСЂ Рё РЅРµРІРёРґРёРј
    message.style.transform = 'translate(-50%, -50%) scale(0.5)';
    message.style.opacity = '0';
    message.style.filter = 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.8))';
    
    // РџРѕРєР°Р·РІР°РјРµ РµР»РµРјРµРЅС‚Р°
    message.classList.remove('hidden');
    
    // РђРЅРёРјР°С†РёСЏ Р·Р° РїРѕСЏРІСЏРІР°РЅРµ
    setTimeout(() => {
        message.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        message.style.transform = 'translate(-50%, -50%) scale(1.1)';
        message.style.opacity = '1';
        message.style.filter = 'drop-shadow(0 0 30px rgba(255, 255, 255, 1))';
    }, 10);
    
    // РЎРєСЂРёРІР°РјРµ РЅР°РґРїРёСЃР° СЃР»РµРґ 2 СЃРµРєСѓРЅРґРё
    setTimeout(() => {
        // РђРЅРёРјР°С†РёСЏ Р·Р° РёР·С‡РµР·РІР°РЅРµ
        message.style.transform = 'translate(-50%, -50%) scale(1.5)';
        message.style.opacity = '0';
        message.style.filter = 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.6)) blur(5px)';
        
        // РЎР»РµРґ Р°РЅРёРјР°С†РёСЏС‚Р° Р·Р° СЃРєСЂРёРІР°РЅРµ, РґРѕР±Р°РІСЏРјРµ hidden РєР»Р°СЃР°
        setTimeout(() => {
            message.classList.add('hidden');
            message.style.transition = '';
        }, 500);
    }, 2000);
}

// Р”РѕР±Р°РІСЏРјРµ С„СѓРЅРєС†РёРѕРЅР°Р»РЅРѕСЃС‚ Р·Р° Р±СѓС‚РѕРЅР° "РЎРјРµРЅРё СЂСѓРЅРґР°"
document.getElementById('end-game').addEventListener('click', () => {
    // РџСЂРѕРІРµСЂРєР° РґР°Р»Рё РїРѕС‚СЂРµР±РёС‚РµР»СЏС‚ Рµ СЂРµРіРёСЃС‚СЂРёСЂР°РЅ Рё РІР»СЏР·СЉР»
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const isRegistered = localStorage.getItem('isRegistered') === 'true';
    const currentUser = getCurrentUser();
    
    console.log('=== РЎРњР•РќР Р РЈРќР”Рђ - РџРћР”Р РћР‘РќРђ РџР РћР’Р•Р РљРђ ===');
    console.log('localStorage isLoggedIn:', localStorage.getItem('isLoggedIn'));
    console.log('localStorage isRegistered:', localStorage.getItem('isRegistered'));
    console.log('localStorage currentUser:', localStorage.getItem('currentUser'));
    console.log('getCurrentUser():', currentUser);
    console.log('isUserRegistered:', isUserRegistered);
    console.log('РџСЂРѕРІРµСЂРєР° СЂРµР·СѓР»С‚Р°С‚Рё:', {
        isLoggedIn,
        isRegistered,
        hasCurrentUser: !!currentUser,
        currentUserUsername: currentUser ? currentUser.username : 'null'
    });
    
    // РџСЂРѕРІРµСЂСЏРІР°РјРµ РґР°Р»Рё РїРѕС‚СЂРµР±РёС‚РµР»СЏС‚ Рµ СЂРµРіРёСЃС‚СЂРёСЂР°РЅ Р РІР»СЏР·СЉР»
    if (!isRegistered || !isLoggedIn || !currentUser) {
        console.log('вќЊ РџРѕС‚СЂРµР±РёС‚РµР»СЏС‚ РЅРµ Рµ СЂРµРіРёСЃС‚СЂРёСЂР°РЅ/РІР»СЏР·СЉР», РїРѕРєР°Р·РІР°РјРµ СЂРµРіРёСЃС‚СЂР°С†РёСЏС‚Р°');
        console.log('РџСЂРёС‡РёРЅРё:', {
            notRegistered: !isRegistered,
            notLoggedIn: !isLoggedIn,
            noCurrentUser: !currentUser
        });
        showRegistration();
        return;
    }
    
    console.log('вњ… РџРѕС‚СЂРµР±РёС‚РµР»СЏС‚ Рµ СЂРµРіРёСЃС‚СЂРёСЂР°РЅ Рё РІР»СЏР·СЉР», РїСЂРѕРґСЉР»Р¶Р°РІР°РјРµ СЃСЉСЃ СЃРјСЏРЅР°С‚Р° РЅР° СЂСѓРЅРґР°');
    
    // РџРѕРєР°Р·РІР°РјРµ РЅР°РґРїРёСЃР° "РЎР›Р•Р”Р’РђР© Р РЈРќР”"
    showNextRoundMessage();
    
    // РР·С‡Р°РєРІР°РјРµ 2 СЃРµРєСѓРЅРґРё РїСЂРµРґРё РґР° РїСЂРѕРґСЉР»Р¶РёРј
    setTimeout(() => {
        currentLevel++;
        if (currentLevel >= totalLevels) {
            showResults();
        } else {
            currentPlayer = 1;
            showCountdown();
        }
    }, 2000);
});

// РџРѕРєР°Р·РІР°РЅРµ РЅР° РјРѕРґР°Р»РЅРёСЏ РїСЂРѕР·РѕСЂРµС†
showRulesBtn.addEventListener('click', () => {
    rulesModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // РџСЂРµРґРѕС‚РІСЂР°С‚СЏРІР° СЃРєСЂРѕР»РІР°РЅРµ РЅР° С„РѕРЅР°
});

// Р—Р°С‚РІР°СЂСЏРЅРµ РЅР° РјРѕРґР°Р»РЅРёСЏ РїСЂРѕР·РѕСЂРµС†
closeModalBtn.addEventListener('click', () => {
    rulesModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Р’СЉР·СЃС‚Р°РЅРѕРІСЏРІР° СЃРєСЂРѕР»РІР°РЅРµС‚Рѕ
});

// Р—Р°С‚РІР°СЂСЏРЅРµ РЅР° РјРѕРґР°Р»РЅРёС‚Рµ РїСЂРѕР·РѕСЂС†Рё РїСЂРё РєР»РёРє РёР·РІСЉРЅ С‚СЏС…
window.addEventListener('click', (e) => {
    // Р—Р°С‚РІР°СЂСЏРЅРµ РЅР° РјРѕРґР°Р»Р° Р·Р° РїСЂР°РІРёР»Р°С‚Р°
    if (e.target === rulesModal) {
        rulesModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    // Р—Р°С‚РІР°СЂСЏРЅРµ РЅР° СЂРµРіРёСЃС‚СЂР°С†РёРѕРЅРЅРёСЏ РјРѕРґР°Р» РїСЂРё РєР»РёРє РёР·РІСЉРЅ РЅРµРіРѕ
    if (e.target === registrationModal) {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (!isUserRegistered || !isLoggedIn) {
            showMessage(translateText('registration_required'));
            return;
        }
        hideRegistration();
    }
    // Р—Р°С‚РІР°СЂСЏРЅРµ РЅР° login РјРѕРґР°Р»Р° РїСЂРё РєР»РёРє РёР·РІСЉРЅ РЅРµРіРѕ
    if (e.target === loginModal) {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (!isLoggedIn) {
            showMessage(translateText('registration_required'), 'error');
            return;
        }
        hideLogin();
    }
});

// Р¤СѓРЅРєС†РёСЏ Р·Р° СЃСЉР·РґР°РІР°РЅРµ РЅР° РїР°РґР°С‰Рё РµРјРѕС‚РёРєРѕРЅРё
function createFallingEmoji() {
    const emojis = ['рџЋ®', 'рџЋЇ', 'рџЋІ', 'рџЋЄ', 'рџЋЁ', 'рџЋ­', 'рџЋЄ', 'рџЋЇ', 'рџЋІ', 'рџЋ®', 'рџ„', 'рџЋ‰', 'вњЁ', 'рџ’«', 'рџЋЉ'];
    const container = document.getElementById('emoji-container');
    
    const emoji = document.createElement('div');
    emoji.className = 'falling-emoji';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + '%';
    emoji.style.animationDuration = (Math.random() * 2 + 2) + 's'; // 2-4 СЃРµРєСѓРЅРґРё
    
    container.appendChild(emoji);
    
    // РџСЂРµРјР°С…РІР°РЅРµ РЅР° РµРјРѕС‚РёРєРѕРЅР° СЃР»РµРґ Р°РЅРёРјР°С†РёСЏС‚Р°
    setTimeout(() => {
        if (emoji.parentNode) {
            emoji.parentNode.removeChild(emoji);
        }
    }, 5000);
}

// РЎС‚Р°СЂС‚РёСЂР°РЅРµ РЅР° РїР°РґР°С‰РёС‚Рµ РµРјРѕС‚РёРєРѕРЅРё
function startFallingEmojis() {
    // РЎСЉР·РґР°РІР°РЅРµ РЅР° РµРјРѕС‚РёРєРѕРЅ РЅР° РІСЃРµРєРё 1-2 СЃРµРєСѓРЅРґРё
    setInterval(() => {
        if (Math.random() < 0.7) { // 70% С€Р°РЅСЃ Р·Р° СЃСЉР·РґР°РІР°РЅРµ
            createFallingEmoji();
        }
    }, 1000);
}

// РЎС‚Р°СЂС‚РёСЂР°РЅРµ РЅР° РµС„РµРєС‚Р° РєРѕРіР°С‚Рѕ СЃС‚СЂР°РЅРёС†Р°С‚Р° СЃРµ Р·Р°СЂРµРґРё
document.addEventListener('DOMContentLoaded', function() {
    startFallingEmojis();
});

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїРѕРєР°Р·РІР°РЅРµ РЅР° РµРєСЂР°РЅР° Р·Р° РІРЅРёРјР°РЅРёРµ
function showAttentionScreen() {
    // РЎСЉР·РґР°РІР°РјРµ РµРєСЂР°РЅР° Р·Р° РІРЅРёРјР°РЅРёРµ
    const attentionScreen = document.createElement('div');
    attentionScreen.id = 'attention-screen';
    attentionScreen.className = 'attention-screen';
    attentionScreen.innerHTML = `
        <div class="attention-content">
            <div class="attention-icon">
                <i class="fas fa-exclamation-triangle"></i>
            </div>
            <h1 class="attention-title">${translateText('attention_title')}</h1>
            <div class="attention-message">${translateText('attention_message')}</div>
            <div class="attention-submessage">${translateText('attention_submessage')}</div>
            <div class="attention-timer">
                <div class="timer-circle">
                    <span class="timer-number">5</span>
                </div>
            </div>
        </div>
    `;
    
    // Р”РѕР±Р°РІСЏРјРµ РµРєСЂР°РЅР° РІ body
    document.body.appendChild(attentionScreen);
    
    // РџРѕРєР°Р·РІР°РјРµ СЃ Р°РЅРёРјР°С†РёСЏ
    setTimeout(() => {
        attentionScreen.classList.add('show');
    }, 10);
    
    // РћР±СЂР°С‚РµРЅ Р±СЂРѕСЏС‡ РѕС‚ 5 РґРѕ 1
    let count = 5;
    const timerNumber = attentionScreen.querySelector('.timer-number');
    const timerInterval = setInterval(() => {
        count--;
        if (timerNumber) {
            timerNumber.textContent = count;
        }
        
        if (count <= 0) {
            clearInterval(timerInterval);
            // РЎРєСЂРёРІР°РјРµ РµРєСЂР°РЅР° Р·Р° РІРЅРёРјР°РЅРёРµ
            attentionScreen.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(attentionScreen);
                // Р”РёСЂРµРєС‚РЅРѕ СЃС‚Р°СЂС‚РёСЂР°РјРµ РёРіСЂР°С‚Р°
                startGame();
            }, 500);
        }
    }, 1000);
}



// Р¤СѓРЅРєС†РёСЏ Р·Р° СЃС‚Р°СЂС‚РёСЂР°РЅРµ РЅР° РёРіСЂР°С‚Р° (РїСЂРµРјР°С…РЅР°С‚Р° - РёР·РїРѕР»Р·РІР° СЃРµ async РІРµСЂСЃРёСЏС‚Р°)

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїСЂРѕРІРµСЂРєР° РЅР° Р°РєС‚РёРІРµРЅ С‚Р°Р№РјРµСЂ Р·Р° РёР·С‡Р°РєРІР°РЅРµ
function checkActiveWaitTimer() {
    const currentUser = getCurrentUser();
    if (!currentUser) return false;
    
    // РџСЂРѕРІРµСЂСЏРІР°РјРµ РґР°Р»Рё РїРѕС‚СЂРµР±РёС‚РµР»СЏС‚ Рµ premium
    const isPremium = localStorage.getItem('isPremium') === 'true';
    if (isPremium) return false;
    
    const gamesPlayed = currentUser.gamesPlayed || 0;
    const lastModalTime = parseInt(localStorage.getItem('lastModalShowTime') || '0');
    const now = Date.now();
    
    console.log('[LIMIT DEBUG] checkActiveWaitTimer - gamesPlayed:', gamesPlayed, 'lastModalTime:', lastModalTime, 'now:', now, 'isPremium:', isPremium);
    
    // РџСЂРѕРІРµСЂСЏРІР°РјРµ РґР°Р»Рё РёРјР° Р°РєС‚РёРІРµРЅ С‚Р°Р№РјРµСЂ (РјРѕРґР°Р»СЉС‚ Рµ РїРѕРєР°Р·Р°РЅ РІ РїРѕСЃР»РµРґРЅРёС‚Рµ 5 РјРёРЅСѓС‚Рё)
    if (lastModalTime > 0 && now - lastModalTime < 300000) {
        const remainingSeconds = Math.max(0, 300 - Math.floor((now - lastModalTime) / 1000));
        if (remainingSeconds > 0) {
            console.log('[LIMIT DEBUG] РРјР° Р°РєС‚РёРІРµРЅ С‚Р°Р№РјРµСЂ Р·Р° РёР·С‡Р°РєРІР°РЅРµ:', remainingSeconds, 'СЃРµРєСѓРЅРґРё');
            return remainingSeconds;
        }
    }
    
    console.log('[LIMIT DEBUG] РќСЏРјР° Р°РєС‚РёРІРµРЅ С‚Р°Р№РјРµСЂ');
    return false;
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїРѕРєР°Р·РІР°РЅРµ РЅР° РјРѕРґР°Р» СЃ РѕСЃС‚Р°РІР°С‰Рѕ РІСЂРµРјРµ
function showModalWithRemainingTime(remainingSeconds) {
    // РџСЂРѕРІРµСЂСЏРІР°РјРµ РґР°Р»Рё РјРѕРґР°Р»СЉС‚ РІРµС‡Рµ СЃСЉС‰РµСЃС‚РІСѓРІР°
    if (document.getElementById('free-game-block-modal')) {
        console.log('[LIMIT DEBUG] РњРѕРґР°Р»СЉС‚ РІРµС‡Рµ СЃСЉС‰РµСЃС‚РІСѓРІР°, РЅРµ РїРѕРєР°Р·РІР°РјРµ РѕС‚РЅРѕРІРѕ');
        return;
    }
    
    console.log('[LIMIT DEBUG] РџРѕРєР°Р·РІР°РјРµ РјРѕРґР°Р» СЃ РѕСЃС‚Р°РІР°С‰Рѕ РІСЂРµРјРµ:', remainingSeconds, 'СЃРµРєСѓРЅРґРё');
    
    const modal = document.createElement('div');
    modal.id = 'free-game-block-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(0,0,0,0.85)';
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '9999';
    modal.innerHTML = `
        <div style="background: #fff; border-radius: 18px; padding: 32px 24px; max-width: 350px; text-align: center; box-shadow: 0 8px 32px rgba(0,0,0,0.25);">
            <h2 style="color: #FF6B6B; margin-bottom: 12px;">${translateText('free_version')}</h2>
            <p style="font-size: 1.1rem; color: #222; margin-bottom: 10px;">${translateText('free_limit_message')}<br><b><span id="free-block-timer">${remainingSeconds}</span> ${translateText('free_limit_seconds')}</b></p>
            <p style="color: #aa2068; font-size: 1em; margin-bottom: 10px;">${translateText('free_limit_payment_info')}</p>
            <button id="buy-premium-btn" style="margin: 10px 0 0 0; padding: 10px 18px; background: #FFD93D; color: #222; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">${translateText('remove_limit')}</button>
        </div>
    `;
    document.body.appendChild(modal);
    
    // РўР°Р№РјРµСЂ
    let seconds = remainingSeconds;
    let timer = setInterval(() => {
        seconds--;
        document.getElementById('free-block-timer').textContent = seconds;
        if (seconds <= 0) {
            clearInterval(timer);
            document.body.removeChild(modal);
            isModalBeingShown = false;
            // РР·С‡РёСЃС‚РІР°РјРµ РІСЂРµРјРµС‚Рѕ РЅР° РїРѕРєР°Р·РІР°РЅРµ РЅР° РјРѕРґР°Р»Р° Рё С„Р»Р°РіР° Р·Р° Р·Р°СЂРµР¶РґР°РЅРµ
            localStorage.removeItem('lastModalShowTime');
            localStorage.removeItem('modalShownOnLoad');
        }
    }, 1000);
    
    // Р‘СѓС‚РѕРЅ Р·Р° РїРѕРєСѓРїРєР°
    document.getElementById('buy-premium-btn').onclick = function() {
        window.open('https://revolut.me/deyvidp7g', '_blank');
    };
}

// РњРѕРґРёС„РёС†РёСЂР°РЅРµ РЅР° event listener Р·Р° Р±СѓС‚РѕРЅР° "Р—Р°РїРѕС‡РЅРё РёРіСЂР°С‚Р°"
document.getElementById('start-game').addEventListener('click', function() {
    // РќСѓР»РёСЂР°РјРµ С„Р»Р°РіР° Р·Р° СЃС‚Р°СЂС‚РёСЂР°РЅРµ РѕС‚ РјРѕРґР°Р»
    isStartingGameFromModal = false;
    console.log('[LIMIT DEBUG] РќСѓР»РёСЂР°РјРµ isStartingGameFromModal РїСЂРё РЅР°С‚РёСЃРєР°РЅРµ РЅР° "Р—Р°РїРѕС‡РЅРё РёРіСЂР°С‚Р°"');
    
    // РџСЂРѕРІРµСЂСЏРІР°РјРµ РґР°Р»Рё РёРјР° Р°РєС‚РёРІРµРЅ С‚Р°Р№РјРµСЂ Р·Р° РёР·С‡Р°РєРІР°РЅРµ
    const remainingSeconds = checkActiveWaitTimer();
    console.log('[LIMIT DEBUG] "Р—Р°РїРѕС‡РЅРё РёРіСЂР°С‚Р°" - remainingSeconds:', remainingSeconds);
    
    if (remainingSeconds > 0) {
        // РџСЂРѕРІРµСЂСЏРІР°РјРµ РґР°Р»Рё РјРѕРґР°Р»СЉС‚ РІРµС‡Рµ Рµ РїРѕРєР°Р·Р°РЅ РїСЂРё Р·Р°СЂРµР¶РґР°РЅРµ РЅР° СЃС‚СЂР°РЅРёС†Р°С‚Р°
        const modalShownOnLoad = localStorage.getItem('modalShownOnLoad') === 'true';
        console.log('[LIMIT DEBUG] "Р—Р°РїРѕС‡РЅРё РёРіСЂР°С‚Р°" - modalShownOnLoad:', modalShownOnLoad);
        
        if (!modalShownOnLoad) {
            console.log('[LIMIT DEBUG] РџРѕРєР°Р·РІР°РјРµ РјРѕРґР°Р» СЃ РѕСЃС‚Р°РІР°С‰Рѕ РІСЂРµРјРµ:', remainingSeconds, 'СЃРµРєСѓРЅРґРё');
            isModalBeingShown = true;
            showModalWithRemainingTime(remainingSeconds);
        } else {
            console.log('[LIMIT DEBUG] РњРѕРґР°Р»СЉС‚ РІРµС‡Рµ Рµ РїРѕРєР°Р·Р°РЅ РїСЂРё Р·Р°СЂРµР¶РґР°РЅРµ, РЅРµ РїРѕРєР°Р·РІР°РјРµ РѕС‚РЅРѕРІРѕ');
        }
        return;
    }
    
    // РР·С‡РёСЃС‚РІР°РјРµ С„Р»Р°РіР° Р·Р° РјРѕРґР°Р» РїРѕРєР°Р·Р°РЅ РїСЂРё Р·Р°СЂРµР¶РґР°РЅРµ
    localStorage.removeItem('modalShownOnLoad');
    
    console.log('[LIMIT DEBUG] "Р—Р°РїРѕС‡РЅРё РёРіСЂР°С‚Р°" - РЅСЏРјР° Р°РєС‚РёРІРµРЅ С‚Р°Р№РјРµСЂ, РїСЂРѕРґСЉР»Р¶Р°РІР°РјРµ СЃ РЅРѕСЂРјР°Р»РЅР°С‚Р° Р»РѕРіРёРєР°');
    
    checkFreeGameLimitAndMaybeBlock(() => {
        showAttentionScreen();
    });
});

// Р¤СѓРЅРєС†РёРѕРЅР°Р»РЅРѕСЃС‚ Р·Р° РёР·Р±РѕСЂ РЅР° РµР·РёРє
const languageBtn = document.getElementById('language-btn');
const languageDropdown = document.getElementById('language-dropdown');
const currentLangSpan = document.getElementById('current-lang');
const languageOptions = document.querySelectorAll('.language-option');

// РџРѕРєР°Р·РІР°РЅРµ/СЃРєСЂРёРІР°РЅРµ РЅР° dropdown РјРµРЅСЋС‚Рѕ
languageBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    languageDropdown.classList.toggle('show');
});

// РЎРєСЂРёРІР°РЅРµ РЅР° dropdown РїСЂРё РєР»РёРє РёР·РІСЉРЅ РЅРµРіРѕ
document.addEventListener('click', () => {
    languageDropdown.classList.remove('show');
});

// РР·Р±РѕСЂ РЅР° РµР·РёРє
languageOptions.forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        changeLanguage(lang);
        
        // РћР±РЅРѕРІСЏРІР°РЅРµ РЅР° Р°РєС‚РёРІРЅРёСЏ РµР·РёРє РІ dropdown
        languageOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        
        // РЎРєСЂРёРІР°РЅРµ РЅР° dropdown
        languageDropdown.classList.remove('show');
    });
});

// Р¤СѓРЅРєС†РёСЏ Р·Р° СЃРјСЏРЅР° РЅР° РµР·РёРєР°
function changeLanguage(lang) {
    currentLanguage = lang;
    currentLangSpan.textContent = lang.toUpperCase();
    
    // Р—Р°РїР°Р·РІР°РЅРµ РЅР° РёР·Р±СЂР°РЅРёСЏ РµР·РёРє РІ localStorage
    localStorage.setItem('selectedLanguage', lang);
    
    // РџСЂРёР»Р°РіР°РЅРµ РЅР° РїСЂРµРІРѕРґР°
    applyTranslation();
    
    // РћР±РЅРѕРІСЏРІР°РЅРµ РЅР° РґРёРЅР°РјРёС‡РЅРё С‚РµРєСЃС‚РѕРІРµ
    updateDynamicTexts();
}

// Р—Р°СЂРµР¶РґР°РЅРµ РЅР° Р·Р°РїР°Р·РµРЅРёСЏ РµР·РёРє РїСЂРё СЃС‚Р°СЂС‚РёСЂР°РЅРµ
window.addEventListener('load', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        changeLanguage(savedLanguage);
    } else {
        // РџРѕ РїРѕРґСЂР°Р·Р±РёСЂР°РЅРµ Р±СЉР»РіР°СЂСЃРєРё
        changeLanguage('bg');
    }
    
    // РџСЂРёР»Р°РіР°РЅРµ РЅР° РїСЂРµРІРѕРґР° РїСЂРё Р·Р°СЂРµР¶РґР°РЅРµ
    applyTranslation();
    
    // Р”РѕР±Р°РІСЏРЅРµ РЅР° tooltip С‚РµРєСЃС‚РѕРІРµ
    
    // Р”РѕР±Р°РІСЏРЅРµ РЅР° event listeners Р·Р° РёРєРѕРЅРёС‚Рµ
    setupRoleIcons();
    
    // РџСЂРѕРІРµСЂРєР° Р·Р° СЂРµРіРёСЃС‚СЂР°С†РёСЏ
    const isRegistered = localStorage.getItem('isRegistered');
    const currentUser = getCurrentUser();
    console.log('localStorage isRegistered:', isRegistered);
    console.log('currentUser РїСЂРё Р·Р°СЂРµР¶РґР°РЅРµ:', currentUser);
    
    if (isRegistered === 'true' && currentUser) {
        isUserRegistered = true;
        isRegistrationShown = true;
        console.log('вњ… РџРѕС‚СЂРµР±РёС‚РµР»СЏС‚ Рµ СЂРµРіРёСЃС‚СЂРёСЂР°РЅ:', currentUser.username, 'UID:', currentUser.uid || 'Р»РѕРєР°Р»РЅРѕ');
    } else if (currentUser && currentUser.uid) {
        // РђРєРѕ РёРјР° currentUser СЃ UID, Р·РЅР°С‡Рё Рµ СЂРµРіРёСЃС‚СЂРёСЂР°РЅ РІ Firebase
        isUserRegistered = true;
        isRegistrationShown = true;
        localStorage.setItem('isRegistered', 'true'); // РџРѕРїСЂР°РІСЏРјРµ localStorage
        console.log('вњ… РџРѕС‚СЂРµР±РёС‚РµР»СЏС‚ Рµ СЂРµРіРёСЃС‚СЂРёСЂР°РЅ РІ Firebase, РїРѕРїСЂР°РІСЏРјРµ localStorage:', currentUser.username);
    } else {
        console.log('вќЊ РџРѕС‚СЂРµР±РёС‚РµР»СЏС‚ РЅРµ Рµ СЂРµРіРёСЃС‚СЂРёСЂР°РЅ');
        console.log('РџСЂРёС‡РёРЅРё:', {
            isRegistered: isRegistered,
            hasCurrentUser: !!currentUser,
            currentUser: currentUser
        });
        isUserRegistered = false;
        isRegistrationShown = false;
    }
    
    console.log('РРЅРёС†РёР°Р»РёР·Р°С†РёСЏ Р·Р°РІСЉСЂС€РµРЅР° - isUserRegistered:', isUserRegistered, 'isRegistrationShown:', isRegistrationShown);
    
    // РџСЂРѕРІРµСЂРєР° РЅР° Firebase auth state
    if (typeof auth !== 'undefined') {
        auth.onAuthStateChanged((user) => {
            console.log('Firebase auth state changed:', user ? user.uid : 'null');
            if (user) {
                console.log('РџРѕС‚СЂРµР±РёС‚РµР»СЏС‚ Рµ РІР»СЏР·СЉР» РІ Firebase:', user.email);
                // РћР±РЅРѕРІСЏРІР°РјРµ currentUser Р°РєРѕ Рµ РЅРµРѕР±С…РѕРґРёРјРѕ
                const currentUser = getCurrentUser();
                if (!currentUser || currentUser.uid !== user.uid) {
                    console.log('РћР±РЅРѕРІСЏРІР°РјРµ currentUser СЃ Firebase РґР°РЅРЅРёС‚Рµ');
                    // РўСѓРє РјРѕР¶РµРј РґР° Р·Р°СЂРµРґРёРј РїСЂРѕС„РёР»РЅРёС‚Рµ РґР°РЅРЅРё РѕС‚ Firestore
                }
            } else {
                console.log('РџРѕС‚СЂРµР±РёС‚РµР»СЏС‚ РЅРµ Рµ РІР»СЏР·СЉР» РІ Firebase');
            }
        });
    }
    
    updateProfilePanel();
    
    // РџСЂРѕРІРµСЂСЏРІР°РјРµ РґР°Р»Рё РёРјР° Р°РєС‚РёРІРµРЅ С‚Р°Р№РјРµСЂ Р·Р° РёР·С‡Р°РєРІР°РЅРµ РїСЂРё Р·Р°СЂРµР¶РґР°РЅРµ РЅР° СЃС‚СЂР°РЅРёС†Р°С‚Р°
    setTimeout(() => {
        const remainingSeconds = checkActiveWaitTimer();
        console.log('[LIMIT DEBUG] РџСЂРё Р·Р°СЂРµР¶РґР°РЅРµ РЅР° СЃС‚СЂР°РЅРёС†Р°С‚Р° - remainingSeconds:', remainingSeconds);
        
        if (remainingSeconds > 0) {
            console.log('[LIMIT DEBUG] РџСЂРё Р·Р°СЂРµР¶РґР°РЅРµ РЅР° СЃС‚СЂР°РЅРёС†Р°С‚Р° - РёРјР° Р°РєС‚РёРІРµРЅ С‚Р°Р№РјРµСЂ:', remainingSeconds, 'СЃРµРєСѓРЅРґРё');
            isModalBeingShown = true;
            // РњР°СЂРєРёСЂР°РјРµ С‡Рµ РјРѕРґР°Р»СЉС‚ Рµ РїРѕРєР°Р·Р°РЅ РїСЂРё Р·Р°СЂРµР¶РґР°РЅРµ
            localStorage.setItem('modalShownOnLoad', 'true');
            showModalWithRemainingTime(remainingSeconds);
        } else {
            console.log('[LIMIT DEBUG] РџСЂРё Р·Р°СЂРµР¶РґР°РЅРµ РЅР° СЃС‚СЂР°РЅРёС†Р°С‚Р° - РЅСЏРјР° Р°РєС‚РёРІРµРЅ С‚Р°Р№РјРµСЂ');
        }
    }, 1000); // РР·С‡Р°РєРІР°РјРµ 1 СЃРµРєСѓРЅРґР° Р·Р° РґР° СЃРµ Р·Р°СЂРµРґСЏС‚ РІСЃРёС‡РєРё РєРѕРјРїРѕРЅРµРЅС‚Рё
});

// Р¤СѓРЅРєС†РёСЏ Р·Р° РѕР±РЅРѕРІСЏРІР°РЅРµ РЅР° tooltip С‚РµРєСЃС‚РѕРІРµ
function updateTooltips() {
    const detectiveLogo = document.querySelector('.detective-logo');
    const impostorLogo = document.querySelector('.impostor-logo');
    
    if (detectiveLogo) {
        detectiveLogo.setAttribute('data-tooltip', translateText('click_for_detective_rules'));
    }
    if (impostorLogo) {
        impostorLogo.setAttribute('data-tooltip', translateText('click_for_impostor_rules'));
    }
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° РѕР±РЅРѕРІСЏРІР°РЅРµ РЅР° С‚РµРєСЃС‚Р° РІ Р°РЅРёРјРёСЂР°РЅРёСЏ Р±СѓС‚РѕРЅ
function updateAnimatedButtonText() {
    const nowSpan = document.querySelector('.animated-button .now');
    if (nowSpan) {
        nowSpan.textContent = translateText('now');
    }
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° РЅР°СЃС‚СЂРѕР№РІР°РЅРµ РЅР° РёРєРѕРЅРёС‚Рµ Р·Р° СЂРѕР»Рё
function setupRoleIcons() {
    const detectiveLogo = document.querySelector('.detective-logo');
    const impostorLogo = document.querySelector('.impostor-logo');
    
    if (detectiveLogo) {
        detectiveLogo.addEventListener('click', () => {
            showDetectiveRules();
        });
    }
    
    if (impostorLogo) {
        impostorLogo.addEventListener('click', () => {
            showImpostorRules();
        });
    }
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїРѕРєР°Р·РІР°РЅРµ РЅР° РїСЂР°РІРёР»Р°С‚Р° Р·Р° РґРµС‚РµРєС‚РёРІРёС‚Рµ
function showDetectiveRules() {
    const modal = document.getElementById('rules-modal');
    const modalContent = modal.querySelector('.modal-content');
    const modalTitle = modal.querySelector('h2');
    const rulesContent = modal.querySelector('.rules-content');
    
    modalTitle.textContent = translateText('detective_rules_title');
    
    rulesContent.innerHTML = `
        <h3>${translateText('detective_objective')}</h3>
        <p>${translateText('detective_objective_text')}</p>
        
        <h3>${translateText('detective_how_to_play')}</h3>
        <ol>
            <li>${translateText('detective_rule_1')}</li>
            <li>${translateText('detective_rule_2')}</li>
            <li>${translateText('detective_rule_3')}</li>
            <li>${translateText('detective_rule_4')}</li>
            <li>${translateText('detective_rule_5')}</li>
        </ol>
        
        <h3>${translateText('detective_tips')}</h3>
        <ul>
            <li>${translateText('detective_tip_1')}</li>
            <li>${translateText('detective_tip_2')}</li>
            <li>${translateText('detective_tip_3')}</li>
            <li>${translateText('detective_tip_4')}</li>
        </ul>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїРѕРєР°Р·РІР°РЅРµ РЅР° РїСЂР°РІРёР»Р°С‚Р° Р·Р° РёРјРїРѕСЃС‚СЉСЂРёС‚Рµ
function showImpostorRules() {
    const modal = document.getElementById('rules-modal');
    const modalContent = modal.querySelector('.modal-content');
    const modalTitle = modal.querySelector('h2');
    const rulesContent = modal.querySelector('.rules-content');
    
    modalTitle.textContent = translateText('impostor_rules_title');
    
    rulesContent.innerHTML = `
        <h3>${translateText('impostor_objective')}</h3>
        <p>${translateText('impostor_objective_text')}</p>
        
        <h3>${translateText('impostor_how_to_play')}</h3>
        <ol>
            <li>${translateText('impostor_rule_1')}</li>
            <li>${translateText('impostor_rule_2')}</li>
            <li>${translateText('impostor_rule_3')}</li>
            <li>${translateText('impostor_rule_4')}</li>
            <li>${translateText('impostor_rule_5')}</li>
        </ol>
        
        <h3>${translateText('impostor_tips')}</h3>
        <ul>
            <li>${translateText('impostor_tip_1')}</li>
            <li>${translateText('impostor_tip_2')}</li>
            <li>${translateText('impostor_tip_3')}</li>
            <li>${translateText('impostor_tip_4')}</li>
        </ul>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїРѕРєР°Р·РІР°РЅРµ РЅР° welcome РјРѕРґР°Р»Р°
function showWelcomeModal() {
    console.log('=== showWelcomeModal РёР·РІРёРєР°РЅР° ===');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log('isLoggedIn РѕС‚ localStorage:', isLoggedIn);
    
    if (!isLoggedIn || isLoggedIn !== 'true') {
        console.log('РџРѕРєР°Р·РІР°РјРµ welcome РјРѕРґР°Р»Р°...');
        welcomeModal.style.display = 'block';
        welcomeModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    } else {
        // РђРєРѕ РїРѕС‚СЂРµР±РёС‚РµР»СЏС‚ Рµ Р»РѕРіРЅР°С‚, РїРѕРєР°Р·РІР°РјРµ РґРёСЂРµРєС‚РЅРѕ СЂРµРіРёСЃС‚СЂР°С†РёСЏС‚Р°
        showRegistrationForm();
    }
    console.log('=== showWelcomeModal Р·Р°РІСЉСЂС€РµРЅР° ===');
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїРѕРєР°Р·РІР°РЅРµ РЅР° СЂРµРіРёСЃС‚СЂР°С†РёСЏС‚Р°
function showRegistrationForm() {
    console.log('=== showRegistrationForm РёР·РІРёРєР°РЅР° ===');
    console.log('isRegistrationShown:', isRegistrationShown);
    console.log('isUserRegistered:', isUserRegistered);
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log('isLoggedIn РѕС‚ localStorage:', isLoggedIn);
    console.log('РџРѕРєР°Р·РІР°РјРµ СЂРµРіРёСЃС‚СЂР°С†РёРѕРЅРЅРёСЏ РјРѕРґР°Р»...');
    
    // РЎРєСЂРёРІР°РјРµ welcome РјРѕРґР°Р»Р°
    welcomeModal.style.display = 'none';
    welcomeModal.classList.remove('show');
    
    // РџРѕРєР°Р·РІР°РјРµ СЂРµРіРёСЃС‚СЂР°С†РёРѕРЅРЅРёСЏ РјРѕРґР°Р»
    registrationModal.style.display = 'block';
    registrationModal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // РџРѕРєР°Р·РІР°РјРµ Р±Р°Р»РѕРЅС‡РµС‚Рѕ СЃ РїРѕР»Р·РёС‚Рµ СЃР°РјРѕ Р·Р° РЅРµСЂРµРіРёСЃС‚СЂРёСЂР°РЅРё РїРѕС‚СЂРµР±РёС‚РµР»Рё
    const benefitsTooltip = document.querySelector('.registration-benefits-tooltip');
    if (benefitsTooltip) {
        if (!isLoggedIn || isLoggedIn !== 'true') {
            benefitsTooltip.style.display = 'block';
            // Р”РѕР±Р°РІСЏРјРµ Р°РЅРёРјР°С†РёСЏ Р·Р° РїРѕСЏРІСЏРІР°РЅРµ
            benefitsTooltip.style.animation = 'fadeInUp 0.6s ease forwards';
        } else {
            benefitsTooltip.style.display = 'none';
        }
    }
    
    // Р’РёРЅР°РіРё Р·Р°РєР°С‡Р°РјРµ СЃР»СѓС€Р°С‚РµР» РІРµРґРЅР°РіР°
    attachLoginLinkListener();
    // Р—Р°РєР°С‡Р°РјРµ Рё РїСЂРё РІСЃСЏРєР° РїСЂРѕРјСЏРЅР° РЅР° DOM (РЅР°РїСЂРёРјРµСЂ РїСЂРµРІРѕРґ)
    const observer = new MutationObserver(() => {
        attachLoginLinkListener();
    });
    observer.observe(registrationModal, { childList: true, subtree: true });
    registrationModal._loginLinkObserver = observer;
    console.log('=== showRegistrationForm Р·Р°РІСЉСЂС€РµРЅР° ===');
}

// Р—Р°РїР°Р·РІР°РјРµ СЃС‚Р°СЂР°С‚Р° С„СѓРЅРєС†РёСЏ Р·Р° РѕР±СЂР°С‚РЅР° СЃСЉРІРјРµСЃС‚РёРјРѕСЃС‚
function showRegistration() {
    showWelcomeModal();
}

function attachLoginLinkListener() {
    const loginLinkBtn = document.getElementById('login-link');
    if (loginLinkBtn) {
        loginLinkBtn.tabIndex = 0;
        loginLinkBtn.style.outline = '2px solid #00fff7';
        loginLinkBtn.style.outlineOffset = '2px';
        loginLinkBtn.onclick = function(e) {
            console.log('РљР»РёРєРЅР°С‚ Рµ login-link!');
            e.preventDefault();
            hideRegistration();
            showLogin();
        };
    } else {
        console.warn('Р‘СѓС‚РѕРЅСЉС‚ login-link РЅРµ Рµ РЅР°РјРµСЂРµРЅ!');
    }
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° РѕР±СЂР°Р±РѕС‚РєР° РЅР° РєР»РёРєР° РІСЉСЂС…Сѓ Р±СѓС‚РѕРЅР° "Р’РµС‡Рµ РёРјР°С‚Рµ Р°РєР°СѓРЅС‚?"
function handleLoginClick(e) {
    e.preventDefault();
    e.stopPropagation();
    alert('Р‘СѓС‚РѕРЅСЉС‚ "Р’РµС‡Рµ РёРјР°С‚Рµ Р°РєР°СѓРЅС‚?" Р±РµС€Рµ РЅР°С‚РёСЃРЅР°С‚!');
    console.log('Р‘СѓС‚РѕРЅСЉС‚ "Р’РµС‡Рµ РёРјР°С‚Рµ Р°РєР°СѓРЅС‚?" Р±РµС€Рµ РЅР°С‚РёСЃРЅР°С‚!');
    hideRegistration();
    showLogin();
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° СЃРєСЂРёРІР°РЅРµ РЅР° welcome РјРѕРґР°Р»Р°
function hideWelcomeModal() {
    welcomeModal.style.display = 'none';
    welcomeModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° СЃРєСЂРёРІР°РЅРµ РЅР° СЂРµРіРёСЃС‚СЂР°С†РёСЏС‚Р°
function hideRegistration() {
    registrationModal.style.display = 'none';
    registrationModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїРѕРєР°Р·РІР°РЅРµ РЅР° РІС…РѕРґ
function showLogin() {
    console.log('showLogin РёР·РІРёРєР°РЅР°');
    loginModal.style.display = 'block';
    loginModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° СЃРєСЂРёРІР°РЅРµ РЅР° РІС…РѕРґ
function hideLogin() {
    loginModal.style.display = 'none';
    loginModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// РџРѕРјРѕС‰РЅРё С„СѓРЅРєС†РёРё Р·Р° СЂР°Р±РѕС‚Р° СЃ localStorage Р±Р°Р·Р°
function getUsersDB() {
    return JSON.parse(localStorage.getItem('usersDB') || '[]');
}
function saveUsersDB(users) {
    localStorage.setItem('usersDB', JSON.stringify(users));
}
function setCurrentUser(username) {
    const users = getUsersDB();
    const user = users.find(u => u.username === username);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
    }
}
function getCurrentUser() {
    const userString = localStorage.getItem('currentUser');
    return userString ? JSON.parse(userString) : null;
}
function clearCurrentUser() {
    localStorage.removeItem('currentUser');
}

// РћР±СЂР°Р±РѕС‚РєР° РЅР° СЂРµРіРёСЃС‚СЂР°С†РёРѕРЅРЅР°С‚Р° С„РѕСЂРјР°
registrationForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(registrationForm);
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirm-password');
    const age = formData.get('age');
    const favoriteGame = formData.get('favorite-game');
    const terms = formData.get('terms');
    const newsletter = formData.get('newsletter');
    if (password !== confirmPassword) {
        showMessage('РџР°СЂРѕР»РёС‚Рµ РЅРµ СЃСЉРІРїР°РґР°С‚!', 'error');
        return;
    }
    if (parseInt(age) < 13) {
        showMessage('РўСЂСЏР±РІР° РґР° СЃС‚Рµ РЅР° 13 РіРѕРґРёРЅРё РёР»Рё РїРѕРІРµС‡Рµ!', 'error');
        return;
    }
    if (!terms) {
        showMessage('РўСЂСЏР±РІР° РґР° РїСЂРёРµРјРµС‚Рµ СѓСЃР»РѕРІРёСЏС‚Р° Р·Р° РїРѕР»Р·РІР°РЅРµ!', 'error');
        return;
    }
    const success = await registerUserFirebase(username, email, password, age, favoriteGame, newsletter);
    if (success) {
        // РЎРєСЂРёРІР°РјРµ Р±Р°Р»РѕРЅС‡РµС‚Рѕ СЃ РїРѕР»Р·РёС‚Рµ СЃР»РµРґ СѓСЃРїРµС€РЅР° СЂРµРіРёСЃС‚СЂР°С†РёСЏ
        const benefitsTooltip = document.querySelector('.registration-benefits-tooltip');
        if (benefitsTooltip) {
            benefitsTooltip.style.display = 'none';
        }
        
        hideRegistration();
        isUserRegistered = true;
        isRegistrationShown = true;
        continueGameAfterRegistration();
    }
});

// Р¤СѓРЅРєС†РёСЏ Р·Р° РѕР±РЅРѕРІСЏРІР°РЅРµ РЅР° РїР°РЅРµР»Р° Р·Р° РїСЂРѕС„РёР»
function updateProfilePanel() {
    const currentUser = getCurrentUser();
    const profileInfo = document.querySelector('.profile-info');
    const profileActions = document.querySelector('.profile-actions');
    if (currentUser) {
        profileInfo.classList.remove('hidden');
        profileActions.classList.add('hidden');
        const usernameElement = document.getElementById('profile-username');
        if (usernameElement) {
            usernameElement.textContent = currentUser.username || '';
        }
        // Р”РѕР±Р°РІСЏРјРµ Р°РґРјРёРЅ Р±СѓС‚РѕРЅ РІ profile-info СЃРµРєС†РёСЏС‚Р°
        addAdminButton();
    } else {
        profileInfo.classList.add('hidden');
        profileActions.classList.remove('hidden');
    }
}

// Р‘СѓС‚РѕРЅ Р·Р° РёР·С…РѕРґ
logoutBtn.replaceWith(logoutBtn.cloneNode(true));
const logoutBtnFixed = document.getElementById('logout-btn');
logoutBtnFixed.addEventListener('click', () => {
    logoutUserFirebase();
    isUserRegistered = false;
    isRegistrationShown = false;
});

// Р›РёРЅРє Р·Р° РїСЂРµРјРёРЅР°РІР°РЅРµ РѕС‚ СЂРµРіРёСЃС‚СЂР°С†РёСЏ РєСЉРј РІС…РѕРґ
// (РІРµС‡Рµ РЅРµ Рµ РЅСѓР¶РµРЅ, РёР·РїРѕР»Р·РІР°РјРµ РґРёСЂРµРєС‚РЅР° С„СѓРЅРєС†РёСЏ switchToLogin)

// Р›РёРЅРє Р·Р° РїСЂРµРјРёРЅР°РІР°РЅРµ РѕС‚ РІС…РѕРґ РєСЉРј СЂРµРіРёСЃС‚СЂР°С†РёСЏ
registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    hideLogin();
    showRegistration();
});

// Р‘СѓС‚РѕРЅ Р·Р° Р·Р°С‚РІР°СЂСЏРЅРµ РЅР° СЂРµРіРёСЃС‚СЂР°С†РёРѕРЅРЅРёСЏ РјРѕРґР°Р»
closeRegistration.addEventListener('click', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isUserRegistered || !isLoggedIn) {
        // РџРѕРєР°Р·РІР°РјРµ Р±Р°Р»РѕРЅС‡РµС‚Рѕ СЃ РїРѕР»Р·РёС‚Рµ Р°РєРѕ РїРѕС‚СЂРµР±РёС‚РµР»СЏС‚ СЃРµ РѕРїРёС‚РІР° РґР° Р·Р°С‚РІРѕСЂРё Р±РµР· СЂРµРіРёСЃС‚СЂР°С†РёСЏ
        const benefitsTooltip = document.querySelector('.registration-benefits-tooltip');
        if (benefitsTooltip) {
            benefitsTooltip.style.display = 'block';
            benefitsTooltip.style.animation = 'fadeInUp 0.6s ease forwards';
        }
        
        showMessage('РўСЂСЏР±РІР° РґР° СЃРµ СЂРµРіРёСЃС‚СЂРёСЂР°С‚Рµ, Р·Р° РґР° РїСЂРѕРґСЉР»Р¶РёС‚Рµ!', 'error');
        return;
    }
    hideRegistration();
});

// Р‘СѓС‚РѕРЅ Р·Р° Р·Р°С‚РІР°СЂСЏРЅРµ РЅР° login РјРѕРґР°Р»Р°
closeLogin.addEventListener('click', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
        showMessage(translateText('registration_required'), 'error');
        return;
    }
    hideLogin();
});

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїСЂРѕРґСЉР»Р¶Р°РІР°РЅРµ РЅР° РёРіСЂР°С‚Р° СЃР»РµРґ СЂРµРіРёСЃС‚СЂР°С†РёСЏ
function continueGameAfterRegistration() {
    // РЎРєСЂРёРІР°РјРµ Рё РґРІР°С‚Р° РјРѕРґР°Р»Р°
    hideWelcomeModal();
    hideRegistration();
    updateProfilePanel();
    console.log('РџРѕС‚СЂРµР±РёС‚РµР»СЏС‚ Рµ СЂРµРіРёСЃС‚СЂРёСЂР°РЅ, РїСЂРѕРґСЉР»Р¶Р°РІР°РјРµ РёРіСЂР°С‚Р°...');
}

// Event listeners Р·Р° welcome РјРѕРґР°Р»Р°
if (startRegistrationBtn) {
    startRegistrationBtn.addEventListener('click', () => {
        showRegistrationForm();
    });
}

if (loginFromWelcomeBtn) {
    loginFromWelcomeBtn.addEventListener('click', () => {
        // РЎРєСЂРёРІР°РјРµ welcome РјРѕРґР°Р»Р°
        welcomeModal.style.display = 'none';
        welcomeModal.classList.remove('show');
        // РџРѕРєР°Р·РІР°РјРµ login РјРѕРґР°Р»Р°
        showLogin();
    });
}

// Р‘СѓС‚РѕРЅ Р·Р° СЂРµРіРёСЃС‚СЂР°С†РёСЏ РѕС‚ РїР°РЅРµР»Р°
registerBtn.addEventListener('click', () => {
    showRegistration();
});

// Р‘СѓС‚РѕРЅ Р·Р° РІС…РѕРґ РѕС‚ РїР°РЅРµР»Р°
loginBtn.addEventListener('click', () => {
    showLogin();
});

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїРѕРєР°Р·РІР°РЅРµ РЅР° РјРѕРґР°Р»РЅРѕ СЃСЉРѕР±С‰РµРЅРёРµ
function showMessage(message, type = 'info') {
    // РЎСЉР·РґР°РІР°РјРµ РјРѕРґР°Р»РµРЅ РµР»РµРјРµРЅС‚
    const modal = document.createElement('div');
    modal.className = 'message-modal';
    modal.innerHTML = `
        <div class="message-content ${type}">
            <div class="message-text">${message}</div>
            <button class="message-close-btn">OK</button>
        </div>
    `;
    
    // Р”РѕР±Р°РІСЏРјРµ РІ body
    document.body.appendChild(modal);
    
    // РџРѕРєР°Р·РІР°РјРµ СЃ Р°РЅРёРјР°С†РёСЏ
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // Р—Р°С‚РІР°СЂСЏРЅРµ РїСЂРё РєР»РёРє РЅР° Р±СѓС‚РѕРЅР°
    const closeBtn = modal.querySelector('.message-close-btn');
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    });
    
    // РђРІС‚РѕРјР°С‚РёС‡РЅРѕ Р·Р°С‚РІР°СЂСЏРЅРµ СЃР»РµРґ 5 СЃРµРєСѓРЅРґРё
    setTimeout(() => {
        if (document.body.contains(modal)) {
            modal.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(modal)) {
                    document.body.removeChild(modal);
                }
            }, 300);
        }
    }, 5000);
}

// РђРґРјРёРЅРёСЃС‚СЂР°С‚РёРІРµРЅ РїР°РЅРµР»
let adminMode = false;
let adminPassword = "admin123"; // Р’ СЂРµР°Р»РЅР° СЃРёС‚СѓР°С†РёСЏ С‚РѕРІР° С‚СЂСЏР±РІР° РґР° Рµ РІ СЃСЉСЂРІСЉСЂР°

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїСЂРѕРІРµСЂРєР° РґР°Р»Рё РїРѕС‚СЂРµР±РёС‚РµР»СЏС‚ Рµ Р°РґРјРёРЅ
function checkIfAdmin() {
    const currentUser = getCurrentUser();
    return currentUser && currentUser.isAdmin === true;
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїРѕРєР°Р·РІР°РЅРµ РЅР° Р°РґРјРёРЅРёСЃС‚СЂР°С‚РёРІРЅРёСЏ РїР°РЅРµР»
function showAdminPanel() {
    if (!checkIfAdmin()) {
        showMessage("РќСЏРјР°С‚Рµ РїСЂР°РІР° Р·Р° РґРѕСЃС‚СЉРї РґРѕ Р°РґРјРёРЅРёСЃС‚СЂР°С‚РёРІРЅРёСЏ РїР°РЅРµР»!", "error");
        return;
    }
    
    const adminHTML = `
        <div class="admin-panel">
            <div class="admin-header">
                <h2>рџ”§ РђРґРјРёРЅРёСЃС‚СЂР°С‚РёРІРµРЅ РїР°РЅРµР»</h2>
                <button class="close-admin-btn" onclick="hideAdminPanel()">вњ•</button>
            </div>
            
            <div class="admin-stats">
                <div class="stat-card">
                    <h3>рџ‘Ґ РћР±С‰Рѕ РїРѕС‚СЂРµР±РёС‚РµР»Рё</h3>
                    <p class="stat-number">${getAllUsers().length}</p>
                </div>
                <div class="stat-card">
                    <h3>рџЋ® РћР±С‰Рѕ РёРіСЂРё</h3>
                    <p class="stat-number">${getTotalGames()}</p>
                </div>
                <div class="stat-card">
                    <h3>рџ“Љ РђРєС‚РёРІРЅРё СЃРµСЃРёРё</h3>
                    <p class="stat-number">${getActiveSessions()}</p>
                </div>
            </div>
            
            <div class="admin-tabs">
                <button class="tab-btn active" onclick="showTab('users')">РџРѕС‚СЂРµР±РёС‚РµР»Рё</button>
                <button class="tab-btn" onclick="showTab('logs')">Р›РѕРіРѕРІРµ</button>
                <button class="tab-btn" onclick="showTab('stats')">РЎС‚Р°С‚РёСЃС‚РёРєР°</button>
            </div>
            
            <div id="users-tab" class="tab-content active">
                <div class="users-list">
                    <h3>РЎРїРёСЃСЉРє РЅР° РІСЃРёС‡РєРё РїРѕС‚СЂРµР±РёС‚РµР»Рё</h3>
                    <div class="users-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>РџРѕС‚СЂРµР±РёС‚РµР»</th>
                                    <th>РРјРµР№Р»</th>
                                    <th>Р”Р°С‚Р° РЅР° СЂРµРіРёСЃС‚СЂР°С†РёСЏ</th>
                                    <th>РџРѕСЃР»РµРґРЅР° Р°РєС‚РёРІРЅРѕСЃС‚</th>
                                    <th>Р”РµР№СЃС‚РІРёСЏ</th>
                                </tr>
                            </thead>
                            <tbody id="users-table-body">
                                ${generateUsersTable()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            <div id="logs-tab" class="tab-content">
                <div class="activity-logs">
                    <h3>Р›РѕРі РЅР° Р°РєС‚РёРІРЅРѕСЃС‚РёС‚Рµ</h3>
                    <div class="logs-container">
                        ${generateActivityLogs()}
                    </div>
                </div>
            </div>
            
            <div id="stats-tab" class="tab-content">
                <div class="detailed-stats">
                    <h3>Р”РµС‚Р°Р№Р»РЅР° СЃС‚Р°С‚РёСЃС‚РёРєР°</h3>
                    <div class="stats-grid">
                        <div class="stat-item">
                            <h4>Р РµРіРёСЃС‚СЂР°С†РёРё РґРЅРµСЃ</h4>
                            <p>${getRegistrationsToday()}</p>
                        </div>
                        <div class="stat-item">
                            <h4>Р РµРіРёСЃС‚СЂР°С†РёРё С‚Р°Р·Рё СЃРµРґРјРёС†Р°</h4>
                            <p>${getRegistrationsThisWeek()}</p>
                        </div>
                        <div class="stat-item">
                            <h4>РќР°Р№-Р°РєС‚РёРІРµРЅ РїРѕС‚СЂРµР±РёС‚РµР»</h4>
                            <p>${getMostActiveUser()}</p>
                        </div>
                        <div class="stat-item">
                            <h4>РЎСЂРµРґРЅРѕ РёРіСЂРё РЅР° РїРѕС‚СЂРµР±РёС‚РµР»</h4>
                            <p>${getAverageGamesPerUser()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // РЎСЉР·РґР°РІР°РјРµ РјРѕРґР°Р»РµРЅ РїСЂРѕР·РѕСЂРµС† Р·Р° Р°РґРјРёРЅ РїР°РЅРµР»Р°
    const adminModal = document.createElement('div');
    adminModal.className = 'admin-modal';
    adminModal.innerHTML = adminHTML;
    document.body.appendChild(adminModal);
    
    // РђРЅРёРјР°С†РёСЏ Р·Р° РїРѕРєР°Р·РІР°РЅРµ
    setTimeout(() => {
        adminModal.classList.add('show');
    }, 10);
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° СЃРєСЂРёРІР°РЅРµ РЅР° Р°РґРјРёРЅРёСЃС‚СЂР°С‚РёРІРЅРёСЏ РїР°РЅРµР»
function hideAdminPanel() {
    const adminModal = document.querySelector('.admin-modal');
    if (adminModal) {
        adminModal.classList.remove('show');
        setTimeout(() => {
            adminModal.remove();
        }, 300);
    }
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїРѕРєР°Р·РІР°РЅРµ РЅР° СЂР°Р·Р»РёС‡РЅРё С‚Р°Р±РѕРІРµ
function showTab(tabName) {
    // РЎРєСЂРёРІР°РјРµ РІСЃРёС‡РєРё С‚Р°Р±РѕРІРµ
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // РџСЂРµРјР°С…РІР°РјРµ Р°РєС‚РёРІРЅРёСЏ РєР»Р°СЃ РѕС‚ РІСЃРёС‡РєРё Р±СѓС‚РѕРЅРё
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // РџРѕРєР°Р·РІР°РјРµ РёР·Р±СЂР°РЅРёСЏ С‚Р°Р±
    document.getElementById(tabName + '-tab').classList.add('active');
    
    // Р”РѕР±Р°РІСЏРјРµ Р°РєС‚РёРІРµРЅ РєР»Р°СЃ РЅР° Р±СѓС‚РѕРЅР°
    event.target.classList.add('active');
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° РіРµРЅРµСЂРёСЂР°РЅРµ РЅР° С‚Р°Р±Р»РёС†Р° СЃ РїРѕС‚СЂРµР±РёС‚РµР»Рё
function generateUsersTable() {
    const users = getAllUsers();
    return users.map(user => `
        <tr>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${formatDate(user.registrationDate)}</td>
            <td>${formatDate(user.lastActivity)}</td>
            <td>
                <button class="admin-btn small" onclick="editUser('${user.username}')">вњЏпёЏ</button>
                <button class="admin-btn small" onclick="toggleUserStatus('${user.username}')">
                    ${user.isBlocked ? 'рџ”“' : 'рџ”’'}
                </button>
                <button class="admin-btn small danger" onclick="deleteUser('${user.username}')">рџ—‘пёЏ</button>
            </td>
        </tr>
    `).join('');
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° РіРµРЅРµСЂРёСЂР°РЅРµ РЅР° Р»РѕРіРѕРІРµ РЅР° Р°РєС‚РёРІРЅРѕСЃС‚РёС‚Рµ
function generateActivityLogs() {
    const logs = getActivityLogs();
    return logs.map(log => `
        <div class="log-entry">
            <span class="log-time">${formatDateTime(log.timestamp)}</span>
            <span class="log-user">${log.username}</span>
            <span class="log-action">${log.action}</span>
        </div>
    `).join('');
}

// РџРѕРјРѕС‰РЅРё С„СѓРЅРєС†РёРё Р·Р° СЃС‚Р°С‚РёСЃС‚РёРєР°
function getAllUsers() {
    const users = JSON.parse(localStorage.getItem('usersDB') || '[]');
    return users;
}

function getTotalGames() {
    const games = JSON.parse(localStorage.getItem('totalGames') || '0');
    return games;
}

function getActiveSessions() {
    const sessions = JSON.parse(localStorage.getItem('activeSessions') || '0');
    return sessions;
}

function getRegistrationsToday() {
    const users = getAllUsers();
    const today = new Date().toDateString();
    return users.filter(user => 
        new Date(user.registrationDate).toDateString() === today
    ).length;
}

function getRegistrationsThisWeek() {
    const users = getAllUsers();
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    
    return users.filter(user => 
        new Date(user.registrationDate) >= weekAgo
    ).length;
}

function getMostActiveUser() {
    const users = getAllUsers();
    if (users.length === 0) return 'РќСЏРјР° РґР°РЅРЅРё';
    
    const mostActive = users.reduce((prev, current) => 
        (current.gamesPlayed || 0) > (prev.gamesPlayed || 0) ? current : prev
    );
    
    return mostActive.username;
}

function getAverageGamesPerUser() {
    const users = getAllUsers();
    if (users.length === 0) return 0;
    
    const totalGames = users.reduce((sum, user) => sum + (user.gamesPlayed || 0), 0);
    return Math.round(totalGames / users.length);
}

function getActivityLogs() {
    const logs = JSON.parse(localStorage.getItem('activityLogs') || '[]');
    return logs.slice(-50); // РџРѕСЃР»РµРґРЅРёС‚Рµ 50 Р»РѕРіР°
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° РґРѕР±Р°РІСЏРЅРµ РЅР° Р»РѕРі
function addActivityLog(username, action) {
    const logs = JSON.parse(localStorage.getItem('activityLogs') || '[]');
    logs.push({
        timestamp: new Date().toISOString(),
        username: username,
        action: action
    });
    
    // Р—Р°РїР°Р·РІР°РјРµ СЃР°РјРѕ РїРѕСЃР»РµРґРЅРёС‚Рµ 1000 Р»РѕРіР°
    if (logs.length > 1000) {
        logs.splice(0, logs.length - 1000);
    }
    
    localStorage.setItem('activityLogs', JSON.stringify(logs));
}

// Р¤СѓРЅРєС†РёРё Р·Р° СѓРїСЂР°РІР»РµРЅРёРµ РЅР° РїРѕС‚СЂРµР±РёС‚РµР»Рё
function editUser(username) {
    const users = getAllUsers();
    const user = users.find(u => u.username === username);
    
    if (user) {
        const newEmail = prompt('РќРѕРІ РёРјРµР№Р»:', user.email);
        if (newEmail && newEmail !== user.email) {
            user.email = newEmail;
            user.lastModified = new Date().toISOString();
            localStorage.setItem('usersDB', JSON.stringify(users));
            addActivityLog('ADMIN', `Р РµРґР°РєС‚РёСЂР° РїРѕС‚СЂРµР±РёС‚РµР»: ${username}`);
            showMessage('РџРѕС‚СЂРµР±РёС‚РµР»СЏС‚ Рµ СЂРµРґР°РєС‚РёСЂР°РЅ СѓСЃРїРµС€РЅРѕ!', 'success');
            refreshAdminPanel();
        }
    }
}

function toggleUserStatus(username) {
    const users = getAllUsers();
    const user = users.find(u => u.username === username);
    
    if (user) {
        user.isBlocked = !user.isBlocked;
        user.lastModified = new Date().toISOString();
        localStorage.setItem('usersDB', JSON.stringify(users));
        
        const action = user.isBlocked ? 'Р±Р»РѕРєРёСЂР°' : 'РѕС‚Р±Р»РѕРєРёСЂР°';
        addActivityLog('ADMIN', `${action} РїРѕС‚СЂРµР±РёС‚РµР»: ${username}`);
        showMessage(`РџРѕС‚СЂРµР±РёС‚РµР»СЏС‚ Рµ ${action}РЅ СѓСЃРїРµС€РЅРѕ!`, 'success');
        refreshAdminPanel();
    }
}

function deleteUser(username) {
    if (confirm(`РЎРёРіСѓСЂРЅРё Р»Рё СЃС‚Рµ, С‡Рµ РёСЃРєР°С‚Рµ РґР° РёР·С‚СЂРёРµС‚Рµ РїРѕС‚СЂРµР±РёС‚РµР»СЏ ${username}?`)) {
        const users = getAllUsers();
        const filteredUsers = users.filter(u => u.username !== username);
        localStorage.setItem('usersDB', JSON.stringify(filteredUsers));
        
        addActivityLog('ADMIN', `РР·С‚СЂРё РїРѕС‚СЂРµР±РёС‚РµР»: ${username}`);
        showMessage('РџРѕС‚СЂРµР±РёС‚РµР»СЏС‚ Рµ РёР·С‚СЂРёС‚ СѓСЃРїРµС€РЅРѕ!', 'success');
        refreshAdminPanel();
    }
}

function refreshAdminPanel() {
    // РћР±РЅРѕРІСЏРІР°РјРµ С‚Р°Р±Р»РёС†Р°С‚Р° СЃ РїРѕС‚СЂРµР±РёС‚РµР»Рё
    const tableBody = document.getElementById('users-table-body');
    if (tableBody) {
        tableBody.innerHTML = generateUsersTable();
    }
    
    // РћР±РЅРѕРІСЏРІР°РјРµ СЃС‚Р°С‚РёСЃС‚РёРєР°С‚Р°
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length >= 3) {
        statNumbers[0].textContent = getAllUsers().length;
        statNumbers[1].textContent = getTotalGames();
        statNumbers[2].textContent = getActiveSessions();
    }
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° С„РѕСЂРјР°С‚РёСЂР°РЅРµ РЅР° РґР°С‚Р°
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('bg-BG');
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° С„РѕСЂРјР°С‚РёСЂР°РЅРµ РЅР° РґР°С‚Р° Рё С‡Р°СЃ
function formatDateTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString('bg-BG');
}

// Р”РѕР±Р°РІСЏРјРµ Р±СѓС‚РѕРЅ Р·Р° Р°РґРјРёРЅ РїР°РЅРµР» РІ РїСЂРѕС„РёР»РЅРёСЏ РїР°РЅРµР»
function addAdminButton() {
    console.log('addAdminButton РёР·РІРёРєР°РЅР°');
    const currentUser = getCurrentUser();
    console.log('Current user:', currentUser);
    
    if (currentUser && currentUser.isAdmin === true) {
        console.log('РџРѕС‚СЂРµР±РёС‚РµР»СЏС‚ Рµ Р°РґРјРёРЅ, РґРѕР±Р°РІСЏРјРµ Р±СѓС‚РѕРЅ');
        const profileInfo = document.querySelector('.profile-info');
        console.log('Profile info element:', profileInfo);
        
        if (profileInfo && !document.querySelector('.admin-btn')) {
            const adminBtn = document.createElement('button');
            adminBtn.className = 'profile-btn admin-btn';
            adminBtn.innerHTML = 'рџ”§';
            adminBtn.title = 'РђРґРјРёРЅРёСЃС‚СЂР°С‚РёРІРµРЅ РїР°РЅРµР»';
            adminBtn.onclick = showAdminPanel;
            profileInfo.appendChild(adminBtn);
            console.log('РђРґРјРёРЅ Р±СѓС‚РѕРЅ РґРѕР±Р°РІРµРЅ СѓСЃРїРµС€РЅРѕ');
        } else {
            console.log('Profile info РЅРµ Рµ РЅР°РјРµСЂРµРЅ РёР»Рё Р°РґРјРёРЅ Р±СѓС‚РѕРЅ РІРµС‡Рµ СЃСЉС‰РµСЃС‚РІСѓРІР°');
        }
    } else {
        console.log('РџРѕС‚СЂРµР±РёС‚РµР»СЏС‚ РЅРµ Рµ Р°РґРјРёРЅ РёР»Рё РЅСЏРјР° currentUser');
        if (currentUser) {
            console.log('Current user details:', currentUser);
        }
    }
}

// РњРѕРґРёС„РёС†РёСЂР°РјРµ С„СѓРЅРєС†РёСЏС‚Р° Р·Р° РІС…РѕРґ, Р·Р° РґР° РґРѕР±Р°РІСЏ Р°РґРјРёРЅ РїСЂР°РІР°
function loginUser(username, password) {
    const users = getUsersDB();
    const user = users.find(u => u.username === username);
    
    // РџСЂРѕРІРµСЂСЏРІР°РјРµ Рё РґРІР°С‚Р° РІР°СЂРёР°РЅС‚Р° РЅР° РїР°СЂРѕР»Р°С‚Р°
    const isValidPassword = user && (
        user.passwordHash === btoa(password) || 
        user.password === password
    );
    
    if (isValidPassword) {
        // РђРєРѕ РЅСЏРјР° Р°РґРјРёРЅ, РїСЂР°РІРёРј С‚РѕР·Рё РїРѕС‚СЂРµР±РёС‚РµР» Р°РґРјРёРЅ
        if (!users.some(u => u.isAdmin)) {
            user.isAdmin = true;
            saveUsersDB(users);
        }
        
        // РћР±РЅРѕРІСЏРІР°РјРµ РїРѕСЃР»РµРґРЅР°С‚Р° Р°РєС‚РёРІРЅРѕСЃС‚
        user.lastActivity = new Date().toISOString();
        saveUsersDB(users);
        
        setCurrentUser(username);
        localStorage.setItem('isLoggedIn', 'true');
        showMessage(translateText('login_success'), 'success');
        updateProfilePanel();
        return true;
    } else {
        showMessage(translateText('wrong_username_password'), 'error');
        return false;
    }
}

// РњРѕРґРёС„РёС†РёСЂР°РјРµ С„СѓРЅРєС†РёСЏС‚Р° Р·Р° СЂРµРіРёСЃС‚СЂР°С†РёСЏ, Р·Р° РґР° РґРѕР±Р°РІСЏ Р°РґРјРёРЅ РїСЂР°РІР°
function registerUser(username, email, password) {
    const users = getUsersDB();
    // РџСЂРѕРІРµСЂРєР° Р·Р° СѓРЅРёРєР°Р»РЅРѕСЃС‚
    if (users.find(u => u.username === username)) {
        showMessage(translateText('username_exists'), 'error');
        return false;
    }
    if (users.find(u => u.email === email)) {
        showMessage(translateText('email_exists'), 'error');
        return false;
    }
    // РЎРёРјСѓР»РёСЂР°РЅРµ РЅР° "С…РµС€РёСЂР°РЅРµ" РЅР° РїР°СЂРѕР»Р°С‚Р° (СЃР°РјРѕ Р·Р° РґРµРјРѕ)
    const passwordHash = btoa(password);
    // РЎСЉР·РґР°РІР°РЅРµ РЅР° РЅРѕРІ РїРѕС‚СЂРµР±РёС‚РµР»
    const userData = {
        username,
        email,
        passwordHash,
        registrationDate: new Date().toISOString(),
        isAdmin: false
    };
    // РђРєРѕ С‚РѕРІР° Рµ РїСЉСЂРІРёСЏС‚ РїРѕС‚СЂРµР±РёС‚РµР», РїСЂР°РІРёРј РіРѕ Р°РґРјРёРЅ
    if (users.length === 0) {
        userData.isAdmin = true;
    }
    users.push(userData);
    saveUsersDB(users);
    setCurrentUser(username);
    localStorage.setItem('isRegistered', 'true');
    localStorage.setItem('isLoggedIn', 'true');
    showMessage(translateText('registration_success'), 'success');
    return true;
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° Р·Р°РїРёСЃРІР°РЅРµ РЅР° РёРіСЂР°
function recordGame() {
    const currentUser = getCurrentUser();
    if (currentUser) {
        // РЈРІРµР»РёС‡Р°РІР°РјРµ Р±СЂРѕСЏ РёРіСЂРё РЅР° РїРѕС‚СЂРµР±РёС‚РµР»СЏ
        const users = JSON.parse(localStorage.getItem('usersDB') || '[]');
        const userIndex = users.findIndex(u => u.username === currentUser.username);
        
        if (userIndex !== -1) {
            users[userIndex].gamesPlayed = (users[userIndex].gamesPlayed || 0) + 1;
            users[userIndex].lastActivity = new Date().toISOString();
            localStorage.setItem('usersDB', JSON.stringify(users));
            
            // РћР±РЅРѕРІСЏРІР°РјРµ С‚РµРєСѓС‰РёСЏ РїРѕС‚СЂРµР±РёС‚РµР»
            currentUser.gamesPlayed = users[userIndex].gamesPlayed;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
        
        // РЈРІРµР»РёС‡Р°РІР°РјРµ РѕР±С‰РёСЏ Р±СЂРѕР№ РёРіСЂРё
        const totalGames = parseInt(localStorage.getItem('totalGames') || '0') + 1;
        localStorage.setItem('totalGames', totalGames.toString());
        
        // Р”РѕР±Р°РІСЏРјРµ Р»РѕРі
        addActivityLog(currentUser.username, 'Р—Р°РІСЉСЂС€Рё РёРіСЂР°');
    }
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° СЃР»РµРґРµРЅРµ РЅР° Р°РєС‚РёРІРЅРё СЃРµСЃРёРё
function trackActiveSession() {
    const currentUser = getCurrentUser();
    if (currentUser) {
        // РЈРІРµР»РёС‡Р°РІР°РјРµ Р±СЂРѕСЏ Р°РєС‚РёРІРЅРё СЃРµСЃРёРё
        const activeSessions = parseInt(localStorage.getItem('activeSessions') || '0') + 1;
        localStorage.setItem('activeSessions', activeSessions.toString());
        
        // Р”РѕР±Р°РІСЏРјРµ Р»РѕРі
        addActivityLog(currentUser.username, 'Р—Р°РїРѕС‡РЅР° РЅРѕРІР° СЃРµСЃРёСЏ');
    }
}

// РњРѕРґРёС„РёС†РёСЂР°РјРµ С„СѓРЅРєС†РёСЏС‚Р° Р·Р° РёР·С…РѕРґ, Р·Р° РґР° РЅР°РјР°Р»РёРј Р°РєС‚РёРІРЅРёС‚Рµ СЃРµСЃРёРё
function logoutUser() {
    const currentUser = getCurrentUser();
    if (currentUser) {
        // РќР°РјР°Р»СЏРІР°РјРµ Р±СЂРѕСЏ Р°РєС‚РёРІРЅРё СЃРµСЃРёРё
        const activeSessions = Math.max(0, parseInt(localStorage.getItem('activeSessions') || '0') - 1);
        localStorage.setItem('activeSessions', activeSessions.toString());
        
        // Р”РѕР±Р°РІСЏРјРµ Р»РѕРі
        addActivityLog(currentUser.username, 'РР·Р»СЏР·СЉР» РѕС‚ СЃРёСЃС‚РµРјР°С‚Р°');
    }
    
    localStorage.removeItem('currentUser');
    showMessage(translateText('logout_success'), 'success');
    updateProfilePanel();
}

// РњРѕРґРёС„РёС†РёСЂР°РјРµ С„СѓРЅРєС†РёСЏС‚Р° Р·Р° РєСЂР°Р№ РЅР° РёРіСЂР°С‚Р°, Р·Р° РґР° Р·Р°РїРёСЃРІР°РјРµ СЃС‚Р°С‚РёСЃС‚РёРєР°С‚Р°
function endGame() {
    // Р—Р°РїРёСЃРІР°РјРµ РёРіСЂР°С‚Р°
    recordGame();
    
    // РџРѕРєР°Р·РІР°РјРµ РµРєСЂР°РЅР° Р·Р° РєСЂР°Р№ РЅР° РёРіСЂР°С‚Р°
    showGameEndScreen();
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїРѕРєР°Р·РІР°РЅРµ РЅР° РµРєСЂР°РЅР° Р·Р° РєСЂР°Р№ РЅР° РёРіСЂР°С‚Р°
function showGameEndScreen() {
    const gameEndHTML = `
        <div class="game-end-screen">
            <div class="game-end-content">
                <h2>${translateText('game_ended')}</h2>
                <p>${translateText('thanks_for_playing')}</p>
                <div class="game-stats">
                    <div class="stat">
                        <span class="stat-label">${translateText('winner')}</span>
                        <span class="stat-value">${winner}</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">${translateText('duration')}</span>
                        <span class="stat-value">${gameDuration}</span>
                    </div>
                </div>
                <div class="game-end-buttons">
                    <button class="game-btn primary" onclick="startNewGame()">${translateText('new_game')}</button>
                    <button class="game-btn secondary" onclick="showMainMenu()">${translateText('main_menu')}</button>
                </div>
            </div>
        </div>
    `;
    
    // РЎСЉР·РґР°РІР°РјРµ РјРѕРґР°Р»РµРЅ РїСЂРѕР·РѕСЂРµС† Р·Р° РєСЂР°СЏ РЅР° РёРіСЂР°С‚Р°
    const gameEndModal = document.createElement('div');
    gameEndModal.className = 'game-end-modal';
    gameEndModal.innerHTML = gameEndHTML;
    document.body.appendChild(gameEndModal);
    
    // РђРЅРёРјР°С†РёСЏ Р·Р° РїРѕРєР°Р·РІР°РЅРµ
    setTimeout(() => {
        gameEndModal.classList.add('show');
    }, 10);
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° СЃРєСЂРёРІР°РЅРµ РЅР° РµРєСЂР°РЅР° Р·Р° РєСЂР°Р№ РЅР° РёРіСЂР°С‚Р°
function hideGameEndScreen() {
    const gameEndModal = document.querySelector('.game-end-modal');
    if (gameEndModal) {
        gameEndModal.classList.remove('show');
        setTimeout(() => {
            gameEndModal.remove();
        }, 300);
    }
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїРѕРєР°Р·РІР°РЅРµ РЅР° РіР»Р°РІРЅРѕС‚Рѕ РјРµРЅСЋ
function showMainMenu() {
    hideGameEndScreen();
    // РўСѓРє РјРѕР¶РµС€ РґР° РґРѕР±Р°РІРёС€ Р»РѕРіРёРєР° Р·Р° РІСЂСЉС‰Р°РЅРµ РєСЉРј РіР»Р°РІРЅРѕС‚Рѕ РјРµРЅСЋ
    location.reload(); // Р—Р° СЃРµРіР° РїСЂРѕСЃС‚Рѕ РїСЂРµР·Р°СЂРµР¶РґР°РјРµ СЃС‚СЂР°РЅРёС†Р°С‚Р°
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° Р·Р°РїРѕС‡РІР°РЅРµ РЅР° РЅРѕРІР° РёРіСЂР°
function startNewGame() {
    console.log('[LIMIT DEBUG] startNewGame РёР·РІРёРєР°РЅР°');
    
    // РџСЂРѕРІРµСЂСЏРІР°РјРµ РґР°Р»Рё РёРјР° Р°РєС‚РёРІРµРЅ С‚Р°Р№РјРµСЂ Р·Р° РёР·С‡Р°РєРІР°РЅРµ
    const remainingSeconds = checkActiveWaitTimer();
    console.log('[LIMIT DEBUG] startNewGame - remainingSeconds:', remainingSeconds);
    
    if (remainingSeconds > 0) {
        console.log('[LIMIT DEBUG] Р’ startNewGame - РёРјР° Р°РєС‚РёРІРµРЅ С‚Р°Р№РјРµСЂ:', remainingSeconds, 'СЃРµРєСѓРЅРґРё');
        isModalBeingShown = true;
        showModalWithRemainingTime(remainingSeconds);
        return;
    }
    
    console.log('[LIMIT DEBUG] startNewGame - РЅСЏРјР° Р°РєС‚РёРІРµРЅ С‚Р°Р№РјРµСЂ, РїСЂРѕРґСЉР»Р¶Р°РІР°РјРµ СЃ РЅРѕСЂРјР°Р»РЅР°С‚Р° Р»РѕРіРёРєР°');
    
    // Р’РјРµСЃС‚Рѕ location.reload() РёР·РїРѕР»Р·РІР°РјРµ Р»РёРјРёС‚ Рё resetGame
    checkFreeGameLimitAndMaybeBlock(() => {
        // РЎРєСЂРёРІР°РјРµ РµРєСЂР°РЅР° Р·Р° РєСЂР°Р№ РЅР° РёРіСЂР°С‚Р°, Р°РєРѕ РёРјР° С‚Р°РєСЉРІ
        hideGameEndScreen && hideGameEndScreen();
        resultsScreen.classList.add('hidden');
        setupScreen.classList.remove('hidden');
        resetGame();
    });
}

// РРЅРёС†РёР°Р»РёР·Р°С†РёСЏ РїСЂРё Р·Р°СЂРµР¶РґР°РЅРµ РЅР° СЃС‚СЂР°РЅРёС†Р°С‚Р°
document.addEventListener('DOMContentLoaded', function() {
    // РћР±РЅРѕРІСЏРІР°РјРµ РїСЂРѕС„РёР»РЅРёСЏ РїР°РЅРµР»
    updateProfilePanel();
    
    // Р”РѕР±Р°РІСЏРјРµ Р°РґРјРёРЅ Р±СѓС‚РѕРЅ Р°РєРѕ Рµ РЅСѓР¶РЅРѕ
    addAdminButton();
    
    // РРЅРёС†РёР°Р»РёР·РёСЂР°РјРµ СЃС‚Р°С‚РёСЃС‚РёРєР°С‚Р°
    initializeStats();
    
    // РџСЂРѕРІРµСЂСЏРІР°РјРµ РґР°Р»Рё РїРѕС‚СЂРµР±РёС‚РµР»СЏС‚ Рµ РІР»СЏР·СЉР»
    const currentUser = getCurrentUser();
    if (currentUser) {
        isUserRegistered = true;
    }
    
    // Р”РѕР±Р°РІСЏРјРµ event listeners
    addEventListeners();
    
    const openLoginBtn = document.getElementById('open-login-btn');
    if (openLoginBtn) {
        openLoginBtn.addEventListener('click', function() {
            hideRegistration();
            showLogin();
        });
    }

    // Unlock Pro popup logic
    const unlockProBtn = document.querySelector('.unlock-pro-btn');
    const unlockProModal = document.getElementById('unlock-pro-modal');
    const closeUnlockProModal = document.querySelector('.close-unlock-pro-modal');
    
    console.log('Unlock Pro elements:', {
        unlockProBtn: unlockProBtn,
        unlockProModal: unlockProModal,
        closeUnlockProModal: closeUnlockProModal
    });
    
    if (unlockProBtn && unlockProModal && closeUnlockProModal) {
        console.log('All Unlock Pro elements found, adding event listeners...');
        unlockProBtn.addEventListener('click', function() {
            console.log('Unlock Pro button clicked!');
            unlockProModal.classList.add('show');
            document.body.style.overflow = 'hidden'; // РџСЂРµРґРѕС‚РІСЂР°С‚СЏРІР° СЃРєСЂРѕР»РІР°РЅРµ
            console.log('Modal should be visible now');
        });
        closeUnlockProModal.addEventListener('click', function() {
            unlockProModal.classList.remove('show');
            document.body.style.overflow = ''; // Р’СЉР·СЃС‚Р°РЅРѕРІСЏРІР° СЃРєСЂРѕР»РІР°РЅРµС‚Рѕ
        });
        unlockProModal.addEventListener('click', function(e) {
            if (e.target === unlockProModal) {
                unlockProModal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
        
        // Р—Р°С‚РІР°СЂСЏРЅРµ СЃ Escape РєР»Р°РІРёС€
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && unlockProModal.classList.contains('show')) {
                unlockProModal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    } else {
        console.log('Some Unlock Pro elements not found:', {
            unlockProBtn: !!unlockProBtn,
            unlockProModal: !!unlockProModal,
            closeUnlockProModal: !!closeUnlockProModal
        });
        
        // РћРїРёС‚Р°Р№ РѕС‚РЅРѕРІРѕ СЃР»РµРґ РјР°Р»РєРѕ Р·Р°РєСЉСЃРЅРµРЅРёРµ
        setTimeout(() => {
            const retryUnlockProBtn = document.querySelector('.unlock-pro-btn');
            const retryUnlockProModal = document.getElementById('unlock-pro-modal');
            const retryCloseUnlockProModal = document.querySelector('.close-unlock-pro-modal');
            
            if (retryUnlockProBtn && retryUnlockProModal && retryCloseUnlockProModal) {
                console.log('Retry successful, adding event listeners...');
                retryUnlockProBtn.addEventListener('click', function() {
                    console.log('Unlock Pro button clicked (retry)!');
                    retryUnlockProModal.classList.add('show');
                    document.body.style.overflow = 'hidden';
                });
                retryCloseUnlockProModal.addEventListener('click', function() {
                    retryUnlockProModal.classList.remove('show');
                    document.body.style.overflow = '';
                });
                retryUnlockProModal.addEventListener('click', function(e) {
                    if (e.target === retryUnlockProModal) {
                        retryUnlockProModal.classList.remove('show');
                        document.body.style.overflow = '';
                    }
                });
            }
        }, 1000);
    }
});

// Р¤СѓРЅРєС†РёСЏ Р·Р° РёРЅРёС†РёР°Р»РёР·РёСЂР°РЅРµ РЅР° СЃС‚Р°С‚РёСЃС‚РёРєР°С‚Р°
function initializeStats() {
    // РђРєРѕ РЅСЏРјР° Р·Р°РїРёСЃР°РЅРё РёРіСЂРё, Р·Р°РїРѕС‡РІР°РјРµ РѕС‚ 0
    if (!localStorage.getItem('totalGames')) {
        localStorage.setItem('totalGames', '0');
    }
    
    // РђРєРѕ РЅСЏРјР° Р·Р°РїРёСЃР°РЅРё Р°РєС‚РёРІРЅРё СЃРµСЃРёРё, Р·Р°РїРѕС‡РІР°РјРµ РѕС‚ 0
    if (!localStorage.getItem('activeSessions')) {
        localStorage.setItem('activeSessions', '0');
    }
    
    // РђРєРѕ РЅСЏРјР° Р·Р°РїРёСЃР°РЅРё Р»РѕРіРѕРІРµ, СЃСЉР·РґР°РІР°РјРµ РїСЂР°Р·РµРЅ РјР°СЃРёРІ
    if (!localStorage.getItem('activityLogs')) {
        localStorage.setItem('activityLogs', JSON.stringify([]));
    }
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° РґРѕР±Р°РІСЏРЅРµ РЅР° РІСЃРёС‡РєРё event listeners
function addEventListeners() {
    // Р‘СѓС‚РѕРЅ Р·Р° СЂРµРіРёСЃС‚СЂР°С†РёСЏ РѕС‚ РїР°РЅРµР»Р°
    const registerBtn = document.getElementById('register-btn');
    if (registerBtn) {
        console.log('register-btn РЅР°РјРµСЂРµРЅ');
        registerBtn.addEventListener('click', () => {
            console.log('РљР»РёРєРЅР°С‚ register-btn');
            showRegistration();
        });
    } else {
        console.log('register-btn РќР• Рµ РЅР°РјРµСЂРµРЅ');
    }
    
    // Р‘СѓС‚РѕРЅ Р·Р° РІС…РѕРґ РѕС‚ РїР°РЅРµР»Р°
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        console.log('login-btn РЅР°РјРµСЂРµРЅ');
        loginBtn.addEventListener('click', () => {
            console.log('РљР»РёРєРЅР°С‚ login-btn');
            showLogin();
        });
    } else {
        console.log('login-btn РќР• Рµ РЅР°РјРµСЂРµРЅ');
    }
    
    // Р‘СѓС‚РѕРЅ Р·Р° РёР·С…РѕРґ - event listener СЃРµ РґРѕР±Р°РІСЏ РІ updateProfilePanel()
    // РўСѓРє РЅРµ РґРѕР±Р°РІСЏРјРµ event listener, Р·Р° РґР° РёР·Р±РµРіРЅРµРј РґСѓР±Р»РёСЂР°РЅРµ
    
    // Р¤РѕСЂРјР° Р·Р° СЂРµРіРёСЃС‚СЂР°С†РёСЏ
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        console.log('registration-form РЅР°РјРµСЂРµРЅ');
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('РР·РїСЂР°С‚РµРЅР° СЂРµРіРёСЃС‚СЂР°С†РёРѕРЅРЅР° С„РѕСЂРјР°');
            // ... РѕСЃС‚Р°РЅР°Р»РёСЏ РєРѕРґ ...
            const formData = new FormData(registrationForm);
            const username = formData.get('username');
            const email = formData.get('email');
            const password = formData.get('password');
            const confirmPassword = formData.get('confirm-password');
            const age = formData.get('age');
            const favoriteGame = formData.get('favorite-game');
            const terms = formData.get('terms');
            const newsletter = formData.get('newsletter');
            
            // Р’Р°Р»РёРґР°С†РёСЏ
            if (password !== confirmPassword) {
                showMessage('РџР°СЂРѕР»РёС‚Рµ РЅРµ СЃСЉРІРїР°РґР°С‚!', 'error');
                return;
            }
            if (parseInt(age) < 13) {
                showMessage('РўСЂСЏР±РІР° РґР° СЃС‚Рµ РЅР° 13 РіРѕРґРёРЅРё РёР»Рё РїРѕРІРµС‡Рµ!', 'error');
                return;
            }
            if (!terms) {
                showMessage('РўСЂСЏР±РІР° РґР° РїСЂРёРµРјРµС‚Рµ СѓСЃР»РѕРІРёСЏС‚Р° Р·Р° РїРѕР»Р·РІР°РЅРµ!', 'error');
                return;
            }
            
            // РР·РїРѕР»Р·РІР°РјРµ РЅРѕРІР°С‚Р° С„СѓРЅРєС†РёСЏ Р·Р° СЂРµРіРёСЃС‚СЂР°С†РёСЏ
            const success = registerUser(username, email, password);
            
            if (success) {
                // РЎРєСЂРёРІР°РЅРµ РЅР° СЂРµРіРёСЃС‚СЂР°С†РёСЏС‚Р°
                hideRegistration();
                // РњР°СЂРєРёСЂР°РЅРµ РєР°С‚Рѕ СЂРµРіРёСЃС‚СЂРёСЂР°РЅ
                isUserRegistered = true;
                isRegistrationShown = true;
                // РџСЂРѕРґСЉР»Р¶Р°РІР°РЅРµ РЅР° РёРіСЂР°С‚Р°
                continueGameAfterRegistration();
            }
        });
    } else {
        console.log('registration-form РќР• Рµ РЅР°РјРµСЂРµРЅ');
    }
    
    // Р¤РѕСЂРјР° Р·Р° РІС…РѕРґ
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        console.log('login-form РЅР°РјРµСЂРµРЅ');
        // РЎС‚Р°СЂРёСЏС‚ event listener Рµ РїСЂРµРјР°С…РЅР°С‚ - РёР·РїРѕР»Р·РІР°РјРµ СЃР°РјРѕ Firebase login
    } else {
        console.log('login-form РќР• Рµ РЅР°РјРµСЂРµРЅ');
    }
    
    // Р‘СѓС‚РѕРЅ Р·Р° Р·Р°С‚РІР°СЂСЏРЅРµ РЅР° СЂРµРіРёСЃС‚СЂР°С†РёСЏС‚Р°
    const closeRegistration = document.getElementById('close-registration');
    if (closeRegistration) {
        console.log('close-registration РЅР°РјРµСЂРµРЅ');
        closeRegistration.addEventListener('click', () => {
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            if (!isUserRegistered || !isLoggedIn) {
                showMessage('РўСЂСЏР±РІР° РґР° СЃРµ СЂРµРіРёСЃС‚СЂРёСЂР°С‚Рµ, Р·Р° РґР° РїСЂРѕРґСЉР»Р¶РёС‚Рµ!', 'error');
                return;
            }
            hideRegistration();
        });
    } else {
        console.log('close-registration РќР• Рµ РЅР°РјРµСЂРµРЅ');
    }
    
    // Р‘СѓС‚РѕРЅ Р·Р° Р·Р°С‚РІР°СЂСЏРЅРµ РЅР° login
    const closeLogin = document.getElementById('close-login');
    if (closeLogin) {
        console.log('close-login РЅР°РјРµСЂРµРЅ');
        closeLogin.addEventListener('click', () => {
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            if (!isLoggedIn) {
                showMessage(translateText('registration_required'), 'error');
                return;
            }
            hideLogin();
        });
    } else {
        console.log('close-login РќР• Рµ РЅР°РјРµСЂРµРЅ');
    }
    
    // Р›РёРЅРє Р·Р° РїСЂРµРјРёРЅР°РІР°РЅРµ РѕС‚ СЂРµРіРёСЃС‚СЂР°С†РёСЏ РєСЉРј РІС…РѕРґ
    const loginLink = document.getElementById('login-link');
    if (loginLink) {
        console.log('login-link РЅР°РјРµСЂРµРЅ');
        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            hideRegistration();
            showLogin();
        });
    } else {
        console.log('login-link РќР• Рµ РЅР°РјРµСЂРµРЅ');
    }
    
    // Р›РёРЅРє Р·Р° РїСЂРµРјРёРЅР°РІР°РЅРµ РѕС‚ РІС…РѕРґ РєСЉРј СЂРµРіРёСЃС‚СЂР°С†РёСЏ
    const registerLink = document.getElementById('register-link');
    if (registerLink) {
        console.log('register-link РЅР°РјРµСЂРµРЅ');
        registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            hideLogin();
            showRegistration();
        });
    } else {
        console.log('register-link РќР• Рµ РЅР°РјРµСЂРµРЅ');
    }
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° СЂСЉС‡РЅРѕ Р·Р°РґР°РІР°РЅРµ РЅР° Р°РґРјРёРЅ РїСЂР°РІР° (Р·Р° С‚РµСЃС‚РІР°РЅРµ)
function makeCurrentUserAdmin() {
    const currentUser = getCurrentUser();
    if (currentUser) {
        const users = getUsersDB();
        const userIndex = users.findIndex(u => u.username === currentUser.username);
        if (userIndex !== -1) {
            users[userIndex].isAdmin = true;
            saveUsersDB(users);
            
            // РћР±РЅРѕРІСЏРІР°РјРµ С‚РµРєСѓС‰РёСЏ РїРѕС‚СЂРµР±РёС‚РµР»
            currentUser.isAdmin = true;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            showMessage('РџРѕС‚СЂРµР±РёС‚РµР»СЏС‚ Рµ РЅР°РїСЂР°РІРµРЅ Р°РґРјРёРЅ!', 'success');
            updateProfilePanel();
        }
    } else {
        showMessage('РќСЏРјР° РІР»СЏР·СЉР» РїРѕС‚СЂРµР±РёС‚РµР»!', 'error');
    }
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° СЂСЉС‡РЅРѕ РѕС‚РІР°СЂСЏРЅРµ РЅР° Р°РґРјРёРЅ РїР°РЅРµР»Р° (Р·Р° С‚РµСЃС‚РІР°РЅРµ)
function openAdminPanel() {
    showAdminPanel();
}

// Р”РѕР±Р°РІСЏРјРµ С„СѓРЅРєС†РёРё Р·Р° С‚РµСЃС‚РІР°РЅРµ РІ РєРѕРЅР·РѕР»Р°С‚Р°
window.makeAdmin = makeCurrentUserAdmin;
window.openAdmin = openAdminPanel;

// Firebase СЂРµРіРёСЃС‚СЂР°С†РёСЏ Рё Р·Р°РїРёСЃ РЅР° РїСЂРѕС„РёР»
async function registerUserFirebase(username, email, password, age, favoriteGame, newsletter) {
    try {
        // РЎСЉР·РґР°РІР°РЅРµ РЅР° Р°РєР°СѓРЅС‚ СЃ РёРјРµР№Р» Рё РїР°СЂРѕР»Р°
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        // Р—Р°РїРёСЃ РЅР° РґРѕРїСЉР»РЅРёС‚РµР»РЅР° РёРЅС„РѕСЂРјР°С†РёСЏ РІСЉРІ Firestore
        await db.collection('users').doc(user.uid).set({
            username,
            email,
            age,
            favoriteGame,
            newsletter: !!newsletter,
            registrationDate: new Date().toISOString()
        });
        // Р—Р°РїРёСЃ РЅР° С‚РµРєСѓС‰РёСЏ РїРѕС‚СЂРµР±РёС‚РµР» РІ localStorage (СЃР°РјРѕ username Рё uid)
        localStorage.setItem('currentUser', JSON.stringify({ username, uid: user.uid }));
        localStorage.setItem('isRegistered', 'true');
        localStorage.setItem('isLoggedIn', 'true');
        console.log('Firebase СЂРµРіРёСЃС‚СЂР°С†РёСЏ СѓСЃРїРµС€РЅР° Р·Р°:', username, 'UID:', user.uid);
        showMessage(translateText('registration_success'), 'success');
        return true;
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            showMessage(translateText('email_exists'), 'error');
        } else if (error.code === 'auth/weak-password') {
            showMessage(translateText('weak_password'), 'error');
        } else {
            showMessage(translateText('registration_error') + ': ' + error.message, 'error');
        }
        return false;
    }
}

// ... existing code ...
// Firebase РІС…РѕРґ Рё Р·Р°СЂРµР¶РґР°РЅРµ РЅР° РїСЂРѕС„РёР»
async function loginUserFirebase(email, password) {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        // Р’Р·РµРјР°РјРµ РїСЂРѕС„РёР»РЅРёС‚Рµ РґР°РЅРЅРё РѕС‚ Firestore
        const doc = await db.collection('users').doc(user.uid).get();
        let profile;
        if (doc.exists) {
            profile = doc.data();
        } else {
            // РђРєРѕ РїСЂРѕС„РёР»СЉС‚ РЅРµ СЃСЉС‰РµСЃС‚РІСѓРІР°, СЃСЉР·РґР°РІР°РјРµ Р±Р°Р·РѕРІ РїСЂРѕС„РёР»
            profile = {
                email: user.email,
                username: user.email.split('@')[0],
                registrationDate: new Date().toISOString()
            };
            await db.collection('users').doc(user.uid).set(profile);
        }
        localStorage.setItem('currentUser', JSON.stringify({ ...profile, uid: user.uid }));
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('isRegistered', 'true'); // Р”РѕР±Р°РІСЏРјРµ С‚РѕРІР°
        console.log('вњ… Firebase РІС…РѕРґ СѓСЃРїРµС€РµРЅ Р·Р°:', profile.username, 'UID:', user.uid);
        console.log('вњ… localStorage Р·Р°РґР°РґРµРЅ - isLoggedIn: true, isRegistered: true');
        updateProfilePanel();
        showMessage(translateText('login_success'), 'success');
        return true;
    } catch (error) {
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
            showMessage(translateText('wrong_email_password'), 'error');
        } else {
            showMessage(translateText('login_error') + ': ' + error.message, 'error');
        }
        return false;
    }
}

// РћР±СЂР°Р±РѕС‚РєР° РЅР° login С„РѕСЂРјР°С‚Р°
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(loginForm);
    const email = formData.get('username'); // username РїРѕР»РµС‚Рѕ Рµ РёРјРµР№Р»
    const password = formData.get('password');
    const success = await loginUserFirebase(email, password);
    if (success) {
        hideLogin();
        isUserRegistered = true;
        console.log('вњ… Login СѓСЃРїРµС€РµРЅ - isUserRegistered Р·Р°РґР°РґРµРЅ РЅР° true');
        updateProfilePanel();
    } else {
        console.log('вќЊ Login РЅРµСѓСЃРїРµС€РµРЅ');
    }
});

// Firebase РёР·С…РѕРґ
async function logoutUserFirebase() {
    try {
        await auth.signOut();
        localStorage.removeItem('currentUser');
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.setItem('isRegistered', 'false'); // Р”РѕР±Р°РІСЏРјРµ С‚РѕРІР°
        updateProfilePanel();
        showMessage(translateText('logout_success'), 'success');
    } catch (error) {
        showMessage(translateText('logout_error') + ': ' + error.message, 'error');
    }
}


// ... existing code ...

// Р’СЉР·СЃС‚Р°РЅРѕРІСЏРІР°РЅРµ РЅР° РїР°СЂРѕР»Р° СЃ Firebase
const forgotPasswordLink = document.getElementById('forgot-password-link');
const resetPasswordModal = document.getElementById('reset-password-modal');
const closeResetPassword = document.getElementById('close-reset-password');
const resetPasswordForm = document.getElementById('reset-password-form');

if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        resetPasswordModal.style.display = 'block';
        resetPasswordModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
}
if (closeResetPassword) {
    closeResetPassword.addEventListener('click', () => {
        resetPasswordModal.style.display = 'none';
        resetPasswordModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
}
if (resetPasswordForm) {
    resetPasswordForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('reset-email').value;
        try {
            await auth.sendPasswordResetEmail(email);
            showMessage(translateText('reset_email_sent'), 'success');
            resetPasswordModal.style.display = 'none';
            resetPasswordModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        } catch (error) {
            showMessage(translateText('send_error') + ': ' + error.message, 'error');
        }
    });
}
// ... existing code ...

// === Р‘Р›РћРљ Р—Рђ РћР“Р РђРќРР§Р•РќРР• РќРђ Р‘Р•Р—РџР›РђРўРќРђРўРђ Р’Р•Р РЎРРЇ ===
let isPremium = false;
let freeGameBlockTimeout = null;

let isStartingGameFromModal = false; // Р¤Р»Р°Рі Р·Р° РґР° Р·РЅР°РµРј РґР°Р»Рё СЃС‚Р°СЂС‚РёСЂР°РјРµ РѕС‚ РјРѕРґР°Р»
let lastModalShowTime = 0; // Р’СЂРµРјРµ РЅР° РїРѕСЃР»РµРґРЅРѕС‚Рѕ РїРѕРєР°Р·РІР°РЅРµ РЅР° РјРѕРґР°Р»Р°
let isModalBeingShown = false; // Р¤Р»Р°Рі Р·Р° РґР° Р·РЅР°РµРј РґР°Р»Рё РјРѕРґР°Р»СЉС‚ СЃРµ РїРѕРєР°Р·РІР° РІ РјРѕРјРµРЅС‚Р°

function checkFreeGameLimitAndMaybeBlock(startGameCallback) {
    const currentUser = getCurrentUser();
    console.log('[LIMIT DEBUG] currentUser:', currentUser);
    console.log('[LIMIT DEBUG] isStartingGameFromModal:', isStartingGameFromModal);
    
    if (currentUser && !isPremium) {
        const gamesPlayed = currentUser.gamesPlayed || 0;
        console.log('[LIMIT DEBUG] gamesPlayed:', gamesPlayed);
        
        // РџСЂРѕРІРµСЂСЏРІР°РјРµ РґР°Р»Рё С‚СЂСЏР±РІР° РґР° РїРѕРєР°Р¶РµРј РјРѕРґР°Р» (РЅР° РІСЃРµРєРё 3 СЂСѓРЅРґР°)
        if (gamesPlayed > 0 && gamesPlayed % 3 === 0) {
            // РџСЂРѕРІРµСЂСЏРІР°РјРµ РґР°Р»Рё РІРµС‡Рµ СЃРјРµ РїРѕРєР°Р·Р°Р»Рё РјРѕРґР°Р» Р·Р° С‚РѕР·Рё РєРѕРЅРєСЂРµС‚РµРЅ Р±СЂРѕР№ РёРіСЂРё
            const lastShownForGames = parseInt(localStorage.getItem('lastLimitModalGames') || '0');
            
            if (gamesPlayed > lastShownForGames) {
                // Р”РѕРїСЉР»РЅРёС‚РµР»РЅР° Р·Р°С‰РёС‚Р° - РЅРµ РїРѕРєР°Р·РІР°РјРµ РјРѕРґР°Р» Р°РєРѕ Рµ РїРѕРєР°Р·Р°РЅ РІ РїРѕСЃР»РµРґРЅРёС‚Рµ 5 СЃРµРєСѓРЅРґРё
                const now = Date.now();
                if (now - lastModalShowTime < 5000) {
                    console.log('[LIMIT DEBUG] РњРѕРґР°Р»СЉС‚ Рµ РїРѕРєР°Р·Р°РЅ РїСЂРµРґРё РјР°Р»РєРѕ, РЅРµ РїРѕРєР°Р·РІР°РјРµ РѕС‚РЅРѕРІРѕ');
                    startGameCallback();
                    return;
                }
                
                // Р”РѕРїСЉР»РЅРёС‚РµР»РЅР° Р·Р°С‰РёС‚Р° - РЅРµ РїРѕРєР°Р·РІР°РјРµ РјРѕРґР°Р» Р°РєРѕ РІРµС‡Рµ СЃРµ РїРѕРєР°Р·РІР°
                if (isModalBeingShown) {
                    console.log('[LIMIT DEBUG] РњРѕРґР°Р»СЉС‚ РІРµС‡Рµ СЃРµ РїРѕРєР°Р·РІР°, РЅРµ РїРѕРєР°Р·РІР°РјРµ РѕС‚РЅРѕРІРѕ');
                    startGameCallback();
                    return;
                }
                
                console.log('[LIMIT DEBUG] РџРѕРєР°Р·РІР°РјРµ РјРѕРґР°Р» Р·Р° Р»РёРјРёС‚! gamesPlayed:', gamesPlayed, 'lastShownForGames:', lastShownForGames);
                lastModalShowTime = now;
                isModalBeingShown = true;
                localStorage.setItem('lastLimitModalGames', gamesPlayed.toString());
                isStartingGameFromModal = true; // РњР°СЂРєРёСЂР°РјРµ С‡Рµ С‰Рµ СЃС‚Р°СЂС‚РёСЂР°РјРµ РѕС‚ РјРѕРґР°Р»
            showFreeGameBlockModal(startGameCallback);
            return;
            } else {
                console.log('[LIMIT DEBUG] РњРѕРґР°Р»СЉС‚ РІРµС‡Рµ Рµ РїРѕРєР°Р·Р°РЅ Р·Р° С‚РѕР·Рё Р±СЂРѕР№ РёРіСЂРё:', gamesPlayed);
            }
        }
    }
    startGameCallback();
}

// РњРѕРґРёС„РёС†РёСЂР°Рј showFreeGameBlockModal РґР° РїСЂРѕРІРµСЂСЏРІР° Р·Р° nolimit
async function showFreeGameBlockModal(startGameCallback) {
    // FIREBASE: Р°РєРѕ РїРѕС‚СЂРµР±РёС‚РµР»СЏС‚ РёРјР° nolimit, РЅРµ РїРѕРєР°Р·РІР°РјРµ РјРѕРґР°Р»Р°
    if (await checkUserNoLimit()) {
        if (typeof startGameCallback === 'function') startGameCallback();
        return;
    }
    
    // РџСЂРѕРІРµСЂСЏРІР°РјРµ РґР°Р»Рё РјРѕРґР°Р»СЉС‚ РІРµС‡Рµ Рµ РїРѕРєР°Р·Р°РЅ
    if (document.getElementById('free-game-block-modal')) {
        console.log('РњРѕРґР°Р»СЉС‚ РІРµС‡Рµ Рµ РїРѕРєР°Р·Р°РЅ, РЅРµ РїРѕРєР°Р·РІР°РјРµ РѕС‚РЅРѕРІРѕ');
        isModalBeingShown = false; // РќСѓР»РёСЂР°РјРµ С„Р»Р°РіР° Р°РєРѕ РјРѕРґР°Р»СЉС‚ РІРµС‡Рµ СЃСЉС‰РµСЃС‚РІСѓРІР°
        if (typeof startGameCallback === 'function') startGameCallback();
        return;
    }
    
    // Р—Р°РїР°Р·РІР°РјРµ РІСЂРµРјРµС‚Рѕ РЅР° РїРѕРєР°Р·РІР°РЅРµ РЅР° РјРѕРґР°Р»Р°
    const modalStartTime = Date.now();
    localStorage.setItem('lastModalShowTime', modalStartTime.toString());
    
    let seconds = 300; // 5 РјРёРЅСѓС‚Рё
    const modal = document.createElement('div');
    modal.id = 'free-game-block-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(0,0,0,0.85)';
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '9999';
    modal.innerHTML = `
        <div style="background: #fff; border-radius: 18px; padding: 32px 24px; max-width: 350px; text-align: center; box-shadow: 0 8px 32px rgba(0,0,0,0.25);">
            <h2 style="color: #FF6B6B; margin-bottom: 12px;">${translateText('free_version')}</h2>
            <p style="font-size: 1.1rem; color: #222; margin-bottom: 10px;">${translateText('free_limit_message')}<br><b><span id="free-block-timer">${seconds}</span> ${translateText('free_limit_seconds')}</b></p>
            <p style="color: #aa2068; font-size: 1em; margin-bottom: 10px;">${translateText('free_limit_payment_info')}</p>
            <button id="buy-premium-btn" style="margin: 10px 0 0 0; padding: 10px 18px; background: #FFD93D; color: #222; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">${translateText('remove_limit')}</button>
        </div>
    `;
    document.body.appendChild(modal);
    
    // РўР°Р№РјРµСЂ
    let timer = setInterval(() => {
        seconds--;
        document.getElementById('free-block-timer').textContent = seconds;
        if (seconds <= 0) {
            clearInterval(timer);
            document.body.removeChild(modal);
            isModalBeingShown = false; // РќСѓР»РёСЂР°РјРµ С„Р»Р°РіР° РєРѕРіР°С‚Рѕ РјРѕРґР°Р»СЉС‚ СЃРµ Р·Р°С‚РІРѕСЂРё
            // РР·С‡РёСЃС‚РІР°РјРµ РІСЂРµРјРµС‚Рѕ РЅР° РїРѕРєР°Р·РІР°РЅРµ РЅР° РјРѕРґР°Р»Р° Рё С„Р»Р°РіР° Р·Р° Р·Р°СЂРµР¶РґР°РЅРµ
            localStorage.removeItem('lastModalShowTime');
            localStorage.removeItem('modalShownOnLoad');
            if (typeof startGameCallback === 'function') startGameCallback();
        }
    }, 1000);
    
    // Р‘СѓС‚РѕРЅ Р·Р° РїРѕРєСѓРїРєР°
    document.getElementById('buy-premium-btn').onclick = function() {
        window.open('https://revolut.me/deyvidp7g', '_blank');
        // РќР• Р·Р°С‚РІР°СЂСЏРјРµ РјРѕРґР°Р»Р°, РЅРµ СЃРїРёСЂР°РјРµ С‚Р°Р№РјРµСЂР°
    };
}

// РџСЂРё Р·Р°СЂРµР¶РґР°РЅРµ РЅР° СЃС‚СЂР°РЅРёС†Р°С‚Р° РїСЂРѕРІРµСЂСЏРІР°РјРµ РґР°Р»Рё Рµ Р·Р°РєСѓРїРµРЅР° РїР»Р°С‚РµРЅР° РІРµСЂСЃРёСЏ
window.addEventListener('load', () => {
    if (localStorage.getItem('isPremium') === 'true') {
        isPremium = true;
    }
});

// ... existing code ...
function getUserImagesPool(username) {
    let pool = localStorage.getItem('imagesPool_' + username);
    if (pool) {
        try {
            pool = JSON.parse(pool);
        } catch (e) {
            pool = null;
        }
    }
    if (!Array.isArray(pool) || pool.length === 0) {
        // РџСЂРµР·Р°СЂРµР¶РґР°РјРµ Рё СЂР°Р·Р±СЉСЂРєРІР°РјРµ
        pool = [...images];
        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pool[i], pool[j]] = [pool[j], pool[i]];
        }
    }
    return pool;
}

function saveUserImagesPool(username, pool) {
    localStorage.setItem('imagesPool_' + username, JSON.stringify(pool));
}

function getNextImageForUser(username) {
    let pool = getUserImagesPool(username);
    const image = pool.pop();
    saveUserImagesPool(username, pool);
    // РђРєРѕ СЃРІСЉСЂС€Р°С‚, СЃР»РµРґРІР°С‰РёСЏ РїСЉС‚ С‰Рµ СЃРµ РїСЂРµР·Р°СЂРµРґРё
    return image;
}

// РњРѕРґРёС„РёС†РёСЂР°Рј generateGameLevels С‚Р°РєР°, С‡Рµ Р·Р° СЂРµРіРёСЃС‚СЂРёСЂР°РЅ РїРѕС‚СЂРµР±РёС‚РµР» РґР° РїРѕР»Р·РІР° user pool-Р°
function generateGameLevels() {
    gameLevels = [];
    let availableImages;
    const currentUser = getCurrentUser();
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (currentUser && currentUser.username && isLoggedIn) {
        availableImages = getUserImagesPool(currentUser.username);
    } else {
        availableImages = [...guestImages];
        for (let i = availableImages.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [availableImages[i], availableImages[j]] = [availableImages[j], availableImages[i]];
        }
    }
    for (let i = 0; i < totalLevels; i++) {
        let image;
        if (currentUser && currentUser.username && isLoggedIn) {
            image = getNextImageForUser(currentUser.username);
        } else {
            if (availableImages.length === 0) {
                availableImages = [...guestImages];
                for (let j = availableImages.length - 1; j > 0; j--) {
                    const k = Math.floor(Math.random() * (j + 1));
                    [availableImages[j], availableImages[k]] = [availableImages[k], availableImages[j]];
                }
            }
            image = availableImages.pop();
        }
        const impostor = totalPlayers > 0 ? Math.floor(Math.random() * totalPlayers) + 1 : 1;
        gameLevels.push({
            image: image,
            impostor: impostor
        });
    }
}
// ... existing code ...

// ... existing code ...
// === FIREBASE imagesPool ===
async function getUserImagesPoolFirebase(uid) {
    const userDoc = db.collection('users').doc(uid);
    const poolDoc = await userDoc.collection('gameData').doc('imagesPool').get();
    let shownImages = poolDoc.exists ? poolDoc.data().shownImages : [];
    const poolVersion = poolDoc.exists ? poolDoc.data().version : null;
    
    // РџСЂРѕРІРµСЂСЏРІР°РјРµ РґР°Р»Рё pool-СЉС‚ Рµ СЃС‚Р°СЂ (РїСЂРµРґРё РїСЂРѕРјРµРЅРёС‚Рµ) РёР»Рё РЅРµ Рµ РїСЂР°РІРёР»РЅР° РІРµСЂСЃРёСЏ
    const currentVersion = '3.0'; // РќРѕРІР° РІРµСЂСЃРёСЏ РЅР° Р»РѕРіРёРєР°С‚Р°
    const shouldResetPool = !poolVersion || poolVersion !== currentVersion;
    
    if (shouldResetPool) {
        console.log('Firebase: Pool Рµ СЃС‚Р°СЂ РёР»Рё СЃ РіСЂРµС€РЅР° РІРµСЂСЃРёСЏ, РёР·С‡РёСЃС‚РІР°РјРµ Рё СЃСЉР·РґР°РІР°РјРµ РЅРѕРІ');
        shownImages = [];
        await saveUserImagesPoolFirebase(uid, shownImages, currentVersion);
        console.log('Firebase: РЎСЉР·РґР°РґРµРЅ РЅРѕРІ pool (РІРµСЂСЃРёСЏ', currentVersion + ')');
    } else {
        console.log('Firebase: Pool СЃСЉС‰РµСЃС‚РІСѓРІР° СЃ', shownImages.length, 'РїРѕРєР°Р·Р°РЅРё РєР°СЂС‚РёРЅРё (РІРµСЂСЃРёСЏ', poolVersion + ')');
    }
    
    return shownImages;
}

async function saveUserImagesPoolFirebase(uid, shownImages, version = '3.0') {
    const userDoc = db.collection('users').doc(uid);
    await userDoc.collection('gameData').doc('imagesPool').set({ shownImages, version });
}

async function getNextImageForUserFirebase(uid) {
    let shownImages = await getUserImagesPoolFirebase(uid);
    
    // РЎСЉР·РґР°РІР°РјРµ СЃРїРёСЃСЉРє СЃ РІСЃРёС‡РєРё РЅР°Р»РёС‡РЅРё РєР°СЂС‚РёРЅРё, РєРѕРёС‚Рѕ РќР• СЃР° РїРѕРєР°Р·Р°РЅРё
    let availableImages = images.filter(img => !shownImages.includes(img));
    
    // РђРєРѕ РЅСЏРјР° РЅР°Р»РёС‡РЅРё РєР°СЂС‚РёРЅРё (РІСЃРёС‡РєРё СЃР° РїРѕРєР°Р·Р°РЅРё), РёР·С‡РёСЃС‚РІР°РјРµ pool-Р°
    if (availableImages.length === 0) {
        console.log('Firebase: Р’СЃРёС‡РєРё РєР°СЂС‚РёРЅРё СЃР° РїРѕРєР°Р·Р°РЅРё, РёР·С‡РёСЃС‚РІР°РјРµ pool-Р°');
        shownImages = [];
        availableImages = [...images];
        await saveUserImagesPoolFirebase(uid, shownImages);
    }
    
    // Р Р°Р·Р±СЉСЂРєРІР°РјРµ РЅР°Р»РёС‡РЅРёС‚Рµ РєР°СЂС‚РёРЅРё
    for (let i = availableImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [availableImages[i], availableImages[j]] = [availableImages[j], availableImages[i]];
    }
    
    // Р’Р·РµРјР°РјРµ РїСЉСЂРІР°С‚Р° РєР°СЂС‚РёРЅРєР° Рё СЏ РґРѕР±Р°РІСЏРјРµ РєСЉРј РїРѕРєР°Р·Р°РЅРёС‚Рµ
    const image = availableImages[0];
    shownImages.push(image);
    await saveUserImagesPoolFirebase(uid, shownImages);
    
    console.log('Firebase: Р’Р·РµС‚Р° РєР°СЂС‚РёРЅРєР°:', image, 'РџРѕРєР°Р·Р°РЅРё РѕР±С‰Рѕ:', shownImages.length, 'РќР°Р»РёС‡РЅРё РѕСЃС‚Р°РІР°С‚:', availableImages.length - 1);
    return image;
}

// РђСЃРёРЅС…СЂРѕРЅРЅР° РІРµСЂСЃРёСЏ РЅР° generateGameLevels
async function generateGameLevelsAsync() {
    gameLevels = [];
    const currentUser = getCurrentUser();
    
    // РџСЂРѕРІРµСЂСЏРІР°РјРµ РґР°Р»Рё РїРѕС‚СЂРµР±РёС‚РµР»СЏС‚ Рµ СЂРµРіРёСЃС‚СЂРёСЂР°РЅ РІ Firebase
    if (currentUser && currentUser.uid) {
        console.log('РР·РїРѕР»Р·РІР°РјРµ Firebase Р·Р° РїРѕС‚СЂРµР±РёС‚РµР»:', currentUser.username);
        for (let i = 0; i < totalLevels; i++) {
            const image = await getNextImageForUserFirebase(currentUser.uid);
            
            if (!image) {
                console.error('Firebase: РќРµ СѓСЃРїСЏС…РјРµ РґР° РІР·РµРјРµРј РєР°СЂС‚РёРЅРєР°, РёР·РїРѕР»Р·РІР°РјРµ Р»РѕРєР°Р»РЅРѕ РіРµРЅРµСЂРёСЂР°РЅРµ');
                // РђРєРѕ РЅРµ РјРѕР¶РµРј РґР° РІР·РµРјРµРј РєР°СЂС‚РёРЅРєР° РѕС‚ Firebase, РёР·РїРѕР»Р·РІР°РјРµ Р»РѕРєР°Р»РЅРѕ РіРµРЅРµСЂРёСЂР°РЅРµ
                let availableImages = [...images];
                for (let j = availableImages.length - 1; j > 0; j--) {
                    const k = Math.floor(Math.random() * (j + 1));
                    [availableImages[j], availableImages[k]] = [availableImages[k], availableImages[j]];
                }
                const localImage = availableImages.pop();
                const impostor = totalPlayers > 0 ? Math.floor(Math.random() * totalPlayers) + 1 : 1;
                gameLevels.push({
                    image: localImage,
                    impostor: impostor
                });
            } else {
            const impostor = totalPlayers > 0 ? Math.floor(Math.random() * totalPlayers) + 1 : 1;
            gameLevels.push({
                image: image,
                impostor: impostor
            });
            }
        }
    } else {
        // Р“РѕСЃС‚/РЅРµСЂРµРіРёСЃС‚СЂРёСЂР°РЅ - Р»РѕРєР°Р»РЅРѕ РєР°РєС‚Рѕ РґРѕСЃРµРіР°
        console.log('РР·РїРѕР»Р·РІР°РјРµ Р»РѕРєР°Р»РЅРѕ РіРµРЅРµСЂРёСЂР°РЅРµ Р·Р° РіРѕСЃС‚ РїРѕС‚СЂРµР±РёС‚РµР»');
        let availableImages = [...images];
        for (let i = availableImages.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [availableImages[i], availableImages[j]] = [availableImages[j], availableImages[i]];
        }
        for (let i = 0; i < totalLevels; i++) {
            if (availableImages.length === 0) {
                availableImages = [...images];
                for (let j = availableImages.length - 1; j > 0; j--) {
                    const k = Math.floor(Math.random() * (j + 1));
                    [availableImages[j], availableImages[k]] = [availableImages[k], availableImages[j]];
                }
            }
            const image = availableImages.pop();
            const impostor = totalPlayers > 0 ? Math.floor(Math.random() * totalPlayers) + 1 : 1;
            gameLevels.push({
                image: image,
                impostor: impostor
            });
        }
    }
}

// РџРѕРєР°Р·РІР°РЅРµ РЅР° loader РґРѕРєР°С‚Рѕ СЃРµ Р·Р°СЂРµР¶РґР° imagesPool
function showLoader() {
    if (!document.getElementById('images-loader')) {
        const loader = document.createElement('div');
        loader.id = 'images-loader';
        loader.style.position = 'fixed';
        loader.style.top = '0';
        loader.style.left = '0';
        loader.style.width = '100vw';
        loader.style.height = '100vh';
        loader.style.background = 'rgba(0,0,0,0.7)';
        loader.style.display = 'flex';
        loader.style.alignItems = 'center';
        loader.style.justifyContent = 'center';
        loader.style.zIndex = '99999';
        loader.innerHTML = `
            <div class="hacker-loader">
                <div class="loader-text">
                    <span data-text="Initializing..." class="text-glitch">Initializing...</span>
                </div>
                <div class="loader-bar">
                    <div class="bar-fill"></div>
                    <div class="bar-glitch"></div>
                </div>
                <div class="particles">
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                </div>
            </div>
        `;
        document.body.appendChild(loader);
    }
}
function hideLoader() {
    const loader = document.getElementById('images-loader');
    if (loader) loader.remove();
}

// РћСЃРЅРѕРІРЅР° С„СѓРЅРєС†РёСЏ Р·Р° СЃС‚Р°СЂС‚РёСЂР°РЅРµ РЅР° РёРіСЂР°С‚Р°
async function startGame() {
    console.log('[LIMIT DEBUG] startGame РёР·РІРёРєР°РЅР°');
    console.log('=== РРіСЂР°С‚Р° Р·Р°РїРѕС‡РІР° ===');
    console.log('isUserRegistered РїСЂРµРґРё СЃС‚Р°СЂС‚:', isUserRegistered);
    console.log('[LIMIT DEBUG] isStartingGameFromModal:', isStartingGameFromModal);
    
    // РќСѓР»РёСЂР°РјРµ С„Р»Р°РіР° Р·Р° СЃС‚Р°СЂС‚РёСЂР°РЅРµ РѕС‚ РјРѕРґР°Р»
    if (isStartingGameFromModal) {
        isStartingGameFromModal = false;
        console.log('[LIMIT DEBUG] РќСѓР»РёСЂР°РјРµ isStartingGameFromModal');
    }
    
    totalPlayers = parseInt(playerCountInput.value);
    localStorage.setItem('lastPlayerCount', totalPlayers);
    
    if (totalPlayers < 3) {
        showMessage(translateText('min_players'));
        return;
    }
    
    currentPlayer = 1;
    currentLevel = 0;
    gameLevels = []; // РРЅРёС†РёР°Р»РёР·РёСЂР°РјРµ РїСЂР°Р·РµРЅ РјР°СЃРёРІ
    
    console.log('РРЅРёС†РёР°Р»РёР·Р°С†РёСЏ:');
    console.log('- currentPlayer:', currentPlayer);
    console.log('- currentLevel:', currentLevel);
    console.log('- totalPlayers:', totalPlayers);
    
    const currentUser = getCurrentUser();
    console.log('РўРµРєСѓС‰ РїРѕС‚СЂРµР±РёС‚РµР»:', currentUser);
    
    // РќР• РіРµРЅРµСЂРёСЂР°РјРµ РІСЃРёС‡РєРё РЅРёРІР° С‚СѓРє - С‰Рµ РіРё РіРµРЅРµСЂРёСЂР°РјРµ РїСЂРё РЅСѓР¶РґР°
    console.log('вњ… РРіСЂР°С‚Р° Рµ РіРѕС‚РѕРІР° Р·Р° СЃС‚Р°СЂС‚РёСЂР°РЅРµ (РЅРёРІР°С‚Р° С‰Рµ СЃРµ РіРµРЅРµСЂРёСЂР°С‚ РїСЂРё РЅСѓР¶РґР°)');
    
    setupScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    showPlayerScreen();
    isFirstPlayerScreen = true;
}
// ... existing code ...

// ... existing code ...
function attachLoginLinkListener() {
    // РђРєРѕ РІРµС‡Рµ РёРјР° listener, РЅРµ РїСЂР°РІРёРј РЅРёС‰Рѕ
    const loginLink = document.getElementById('login-link');
    if (loginLink) {
        loginLink.onclick = function(e) {
            e.preventDefault();
            console.log('РљР»РёРєРЅР°С‚ Рµ login-link!');
            showLogin();
        };
        loginLink.tabIndex = 0;
        loginLink.style.outline = '2px solid #00fff7';
        console.log('attachLoginLinkListener: Р—Р°РєР°С‡РµРЅ СѓСЃРїРµС€РЅРѕ!');
    } else {
        console.warn('attachLoginLinkListener: login-link РЅРµ Рµ РЅР°РјРµСЂРµРЅ! Р©Рµ СЃР»РµРґРёРј СЃ MutationObserver.');
        // РЎСЉР·РґР°РІР°РјРµ observer, РєРѕР№С‚Рѕ СЃР»РµРґРё Р·Р° РїРѕСЏРІР°С‚Р° РЅР° login-link
        const observer = new MutationObserver(() => {
            const link = document.getElementById('login-link');
            if (link) {
                link.onclick = function(e) {
                    e.preventDefault();
                    console.log('РљР»РёРєРЅР°С‚ Рµ login-link! (observer)');
                    showLogin();
                };
                link.tabIndex = 0;
                link.style.outline = '2px solid #00fff7';
                console.log('attachLoginLinkListener: Р—Р°РєР°С‡РµРЅ СѓСЃРїРµС€РЅРѕ С‡СЂРµР· observer!');
                observer.disconnect();
            }
        });
        observer.observe(registrationModal, { childList: true, subtree: true });
    }
}
// ... existing code ...

// ... existing code ...
// === Р“Р›РћР‘РђР›Р•Рќ OBSERVER Р—Рђ login-link ===
// (observer РїСЂРµРјР°С…РЅР°С‚, Р·Р°С‰РѕС‚Рѕ РІРµС‡Рµ РЅРµ СЃРµ РёР·РїРѕР»Р·РІР° login-link)
// ... existing code ...

// ... existing code ...
// === РђР“Р Р•РЎРР’Р•Рќ INTERVAL Р—Рђ login-link ===
setInterval(() => {
    const loginLink = document.getElementById('login-link');
    if (loginLink && !loginLink._loginListenerAttached) {
        loginLink.onclick = function(e) {
            e.preventDefault();
            console.log('РљР»РёРєРЅР°С‚ Рµ login-link! (interval)');
            hideRegistration();
            showLogin();
        };
        loginLink.tabIndex = 0;
        loginLink.style.outline = '2px solid #00fff7';
        loginLink._loginListenerAttached = true;
        console.log('[INTERVAL] Р—Р°РєР°С‡РµРЅ listener РЅР° login-link!', loginLink);
    }
}, 500);
// ... existing code ...

let roundsPlayed = 0; // РќРѕРІ Р±СЂРѕСЏС‡ Р·Р° СЂСѓРЅРґРѕРІРµ

// ... existing code ...
// === FIREBASE: РџСЂРѕРІРµСЂРєР° Р·Р° nolimit ===
async function checkUserNoLimit() {
    const currentUser = getCurrentUser();
    if (currentUser && currentUser.uid) {
        const doc = await db.collection('users').doc(currentUser.uid).get();
        if (doc.exists && doc.data().nolimit === true) {
            return true;
        }
    }
    return false;
}

// РџСЂРёРјРµСЂРЅР° С„СѓРЅРєС†РёСЏ Р·Р° Р°РґРјРёРЅРёС‚Рµ: Р·Р°РґР°РІР°РЅРµ РЅР° nolimit РЅР° РїРѕС‚СЂРµР±РёС‚РµР» РїРѕ РёРјРµР№Р»
async function setUserNoLimitByEmail(email) {
    const usersRef = db.collection('users');
    const query = await usersRef.where('email', '==', email).get();
    if (!query.empty) {
        const userDoc = query.docs[0];
        await userDoc.ref.update({ nolimit: true });
        console.log('РџРѕС‚СЂРµР±РёС‚РµР»СЏС‚ Рµ СЃ nolimit:', email);
    } else {
        console.log('РќРµ Рµ РЅР°РјРµСЂРµРЅ РїРѕС‚СЂРµР±РёС‚РµР» СЃ С‚РѕР·Рё РёРјРµР№Р»:', email);
    }
}
window.setUserNoLimitByEmail = setUserNoLimitByEmail;

// Р¤СѓРЅРєС†РёСЏ Р·Р° С‚РµСЃС‚РІР°РЅРµ РЅР° Firebase РІСЂСЉР·РєР°С‚Р°
async function testFirebaseConnection() {
    try {
        console.log('РўРµСЃС‚РІР°РјРµ Firebase РІСЂСЉР·РєР°С‚Р°...');
        const testDoc = await db.collection('test').doc('connection').get();
        console.log('Firebase РІСЂСЉР·РєР°С‚Р° СЂР°Р±РѕС‚Рё!');
        return true;
    } catch (error) {
        console.error('Р“СЂРµС€РєР° РїСЂРё Firebase РІСЂСЉР·РєР°С‚Р°:', error);
        return false;
    }
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° С‚РµСЃС‚РІР°РЅРµ РЅР° imagesPool Р·Р° РїРѕС‚СЂРµР±РёС‚РµР»
async function testUserImagesPool(uid) {
    try {
        console.log('РўРµСЃС‚РІР°РјРµ imagesPool Р·Р° РїРѕС‚СЂРµР±РёС‚РµР»:', uid);
        const pool = await getUserImagesPoolFirebase(uid);
        console.log('ImagesPool СЂРµР·СѓР»С‚Р°С‚:', pool.length, 'РєР°СЂС‚РёРЅРё');
        return pool;
    } catch (error) {
        console.error('Р“СЂРµС€РєР° РїСЂРё С‚РµСЃС‚РІР°РЅРµ РЅР° imagesPool:', error);
        return null;
    }
}

// Р”РѕР±Р°РІСЏРјРµ С„СѓРЅРєС†РёРёС‚Рµ РІ РіР»РѕР±Р°Р»РЅРёСЏ scope Р·Р° С‚РµСЃС‚РІР°РЅРµ
window.testFirebaseConnection = testFirebaseConnection;
window.testUserImagesPool = testUserImagesPool;

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїСЂРѕРІРµСЂРєР° РЅР° С‚РµРєСѓС‰РёСЏ РїРѕС‚СЂРµР±РёС‚РµР»
function checkCurrentUserStatus() {
    const currentUser = getCurrentUser();
    console.log('=== РЎРўРђРўРЈРЎ РќРђ РўР•РљРЈР©РРЇ РџРћРўР Р•Р‘РРўР•Р› ===');
    console.log('currentUser:', currentUser);
    if (currentUser) {
        console.log('Username:', currentUser.username);
        console.log('UID:', currentUser.uid);
        console.log('Email:', currentUser.email);
        console.log('РРјР° Firebase UID:', !!currentUser.uid);
    } else {
        console.log('РќСЏРјР° С‚РµРєСѓС‰ РїРѕС‚СЂРµР±РёС‚РµР»');
    }
    return currentUser;
}

window.checkCurrentUserStatus = checkCurrentUserStatus;

// Р¤СѓРЅРєС†РёСЏ Р·Р° С‚РµСЃС‚РІР°РЅРµ РЅР° Firebase imagesPool
async function testFirebaseImagesPool() {
    const currentUser = getCurrentUser();
    if (!currentUser || !currentUser.uid) {
        console.log('РќСЏРјР° СЂРµРіРёСЃС‚СЂРёСЂР°РЅ РїРѕС‚СЂРµР±РёС‚РµР» Р·Р° С‚РµСЃС‚РІР°РЅРµ');
        return;
    }
    
    console.log('=== РўР•РЎРў РќРђ FIREBASE IMAGESPOOL (Р’Р•Р РЎРРЇ 3.0) ===');
    console.log('РџРѕС‚СЂРµР±РёС‚РµР»:', currentUser.username, 'UID:', currentUser.uid);
    
    try {
        // РўРµСЃС‚РІР°РјРµ РІСЂСЉР·РєР°С‚Р°
        const connectionOk = await testFirebaseConnection();
        if (!connectionOk) {
            console.error('Firebase РІСЂСЉР·РєР°С‚Р° РЅРµ СЂР°Р±РѕС‚Рё!');
            return;
        }
        
        // РџРѕРєР°Р·РІР°РјРµ РІСЃРёС‡РєРё РєР°СЂС‚РёРЅРё
        console.log('РћР±С‰ Р±СЂРѕР№ РєР°СЂС‚РёРЅРё РІ СЃРёСЃС‚РµРјР°С‚Р°:', images.length);
        
        // РўРµСЃС‚РІР°РјРµ pool-Р°
        const shownImages = await getUserImagesPoolFirebase(currentUser.uid);
        console.log('РџРѕРєР°Р·Р°РЅРё РєР°СЂС‚РёРЅРё:', shownImages.length);
        console.log('РќР°Р»РёС‡РЅРё РєР°СЂС‚РёРЅРё:', images.length - shownImages.length);
        
        // РўРµСЃС‚РІР°РјРµ РІР·РµРјР°РЅРµ РЅР° РєР°СЂС‚РёРЅРєР°
        const image = await getNextImageForUserFirebase(currentUser.uid);
        console.log('Р’Р·РµС‚Р° РєР°СЂС‚РёРЅРєР°:', image);
        
        // РџСЂРѕРІРµСЂСЏРІР°РјРµ pool-Р° СЃР»РµРґ РІР·РµРјР°РЅРµ
        const shownImagesAfter = await getUserImagesPoolFirebase(currentUser.uid);
        console.log('РџРѕРєР°Р·Р°РЅРё РєР°СЂС‚РёРЅРё СЃР»РµРґ РІР·РµРјР°РЅРµ:', shownImagesAfter.length);
        console.log('РќР°Р»РёС‡РЅРё РєР°СЂС‚РёРЅРё СЃР»РµРґ РІР·РµРјР°РЅРµ:', images.length - shownImagesAfter.length);
        
        // РџРѕРєР°Р·РІР°РјРµ РїСЉСЂРІРёС‚Рµ 5 РїРѕРєР°Р·Р°РЅРё РєР°СЂС‚РёРЅРё
        if (shownImagesAfter.length > 0) {
            console.log('РџСЉСЂРІРё 5 РїРѕРєР°Р·Р°РЅРё РєР°СЂС‚РёРЅРё:', shownImagesAfter.slice(0, 5));
        }
        
    } catch (error) {
        console.error('Р“СЂРµС€РєР° РїСЂРё С‚РµСЃС‚РІР°РЅРµ:', error);
    }
}

window.testFirebaseImagesPool = testFirebaseImagesPool;

// Р¤СѓРЅРєС†РёСЏ Р·Р° РёР·С‡РёСЃС‚РІР°РЅРµ РЅР° pool-Р° Р·Р° С‚РµСЃС‚РІР°РЅРµ
async function clearUserImagesPool() {
    const currentUser = getCurrentUser();
    if (!currentUser || !currentUser.uid) {
        console.log('РќСЏРјР° СЂРµРіРёСЃС‚СЂРёСЂР°РЅ РїРѕС‚СЂРµР±РёС‚РµР» Р·Р° РёР·С‡РёСЃС‚РІР°РЅРµ');
        return;
    }
    
    console.log('=== РР—Р§РРЎРўР’РђРќР• РќРђ IMAGESPOOL ===');
    console.log('РџРѕС‚СЂРµР±РёС‚РµР»:', currentUser.username, 'UID:', currentUser.uid);
    
    try {
        const userDoc = db.collection('users').doc(currentUser.uid);
        await userDoc.collection('gameData').doc('imagesPool').delete();
        console.log('Pool РёР·С‡РёСЃС‚РµРЅ СѓСЃРїРµС€РЅРѕ!');
    } catch (error) {
        console.error('Р“СЂРµС€РєР° РїСЂРё РёР·С‡РёСЃС‚РІР°РЅРµ РЅР° pool:', error);
    }
}

window.clearUserImagesPool = clearUserImagesPool;

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїРѕРєР°Р·РІР°РЅРµ РЅР° СЃС‚Р°С‚РёСЃС‚РёРєР° Р·Р° pool-Р°
async function showPoolStats() {
    const currentUser = getCurrentUser();
    if (!currentUser || !currentUser.uid) {
        console.log('РќСЏРјР° СЂРµРіРёСЃС‚СЂРёСЂР°РЅ РїРѕС‚СЂРµР±РёС‚РµР» Р·Р° СЃС‚Р°С‚РёСЃС‚РёРєР°');
        return;
    }
    
    console.log('=== РЎРўРђРўРРЎРўРРљРђ Р—Рђ IMAGESPOOL (Р’Р•Р РЎРРЇ 3.0) ===');
    console.log('РџРѕС‚СЂРµР±РёС‚РµР»:', currentUser.username, 'UID:', currentUser.uid);
    
    try {
        const shownImages = await getUserImagesPoolFirebase(currentUser.uid);
        console.log('РћР±С‰ Р±СЂРѕР№ РєР°СЂС‚РёРЅРё РІ СЃРёСЃС‚РµРјР°С‚Р°:', images.length);
        console.log('РџРѕРєР°Р·Р°РЅРё РєР°СЂС‚РёРЅРё:', shownImages.length);
        console.log('РќР°Р»РёС‡РЅРё РєР°СЂС‚РёРЅРё:', images.length - shownImages.length);
        console.log('РџСЂРѕС†РµРЅС‚ РїРѕРєР°Р·Р°РЅРё:', Math.round((shownImages.length / images.length) * 100) + '%');
        console.log('РџСЂРѕС†РµРЅС‚ РЅР°Р»РёС‡РЅРё:', Math.round(((images.length - shownImages.length) / images.length) * 100) + '%');
        
        if (shownImages.length > 0) {
            console.log('РџСЉСЂРІРёС‚Рµ 5 РїРѕРєР°Р·Р°РЅРё РєР°СЂС‚РёРЅРё:', shownImages.slice(0, 5));
        }
        
        if (shownImages.length === images.length) {
            console.log('рџЋ‰ Р’СЃРёС‡РєРё РєР°СЂС‚РёРЅРё СЃР° РїРѕРєР°Р·Р°РЅРё! РџСЂРё СЃР»РµРґРІР°С‰Р° РёРіСЂР° pool-СЉС‚ С‰Рµ СЃРµ РёР·С‡РёСЃС‚Рё.');
        }
        
    } catch (error) {
        console.error('Р“СЂРµС€РєР° РїСЂРё РїРѕРєР°Р·РІР°РЅРµ РЅР° СЃС‚Р°С‚РёСЃС‚РёРєР°:', error);
    }
}

window.showPoolStats = showPoolStats;

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїСЂРёРЅСѓРґРёС‚РµР»РЅРѕ РёР·С‡РёСЃС‚РІР°РЅРµ РЅР° pool-Р°
async function forceResetPool() {
    const currentUser = getCurrentUser();
    if (!currentUser || !currentUser.uid) {
        console.log('РќСЏРјР° СЂРµРіРёСЃС‚СЂРёСЂР°РЅ РїРѕС‚СЂРµР±РёС‚РµР» Р·Р° РёР·С‡РёСЃС‚РІР°РЅРµ');
        return;
    }
    
    console.log('=== РџР РРќРЈР”РРўР•Р›РќРћ РР—Р§РРЎРўР’РђРќР• РќРђ POOL (Р’Р•Р РЎРРЇ 3.0) ===');
    console.log('РџРѕС‚СЂРµР±РёС‚РµР»:', currentUser.username, 'UID:', currentUser.uid);
    
    try {
        const userDoc = db.collection('users').doc(currentUser.uid);
        await userDoc.collection('gameData').doc('imagesPool').delete();
        console.log('Pool РёР·С‡РёСЃС‚РµРЅ РїСЂРёРЅСѓРґРёС‚РµР»РЅРѕ!');
        console.log('РџСЂРё СЃР»РµРґРІР°С‰Рѕ СЃС‚Р°СЂС‚РёСЂР°РЅРµ РЅР° РёРіСЂР°С‚Р° С‰Рµ СЃРµ СЃСЉР·РґР°РґРµ РЅРѕРІ pool СЃ РІРµСЂСЃРёСЏ 3.0.');
        console.log('Р’СЃРёС‡РєРё РєР°СЂС‚РёРЅРё С‰Рµ Р±СЉРґР°С‚ РЅР°Р»РёС‡РЅРё РѕС‚РЅРѕРІРѕ.');
    } catch (error) {
        console.error('Р“СЂРµС€РєР° РїСЂРё РїСЂРёРЅСѓРґРёС‚РµР»РЅРѕ РёР·С‡РёСЃС‚РІР°РЅРµ РЅР° pool:', error);
    }
}

window.forceResetPool = forceResetPool;

// Р¤СѓРЅРєС†РёСЏ Р·Р° С‚РµСЃС‚РІР°РЅРµ РЅР° С‚РµРєСѓС‰РѕС‚Рѕ СЃСЉСЃС‚РѕСЏРЅРёРµ РЅР° РїРѕС‚СЂРµР±РёС‚РµР»СЏ
function testUserState() {
    console.log('=== РўР•РЎРў РќРђ РЎРЄРЎРўРћРЇРќРР•РўРћ РќРђ РџРћРўР Р•Р‘РРўР•Р›РЇ ===');
    console.log('localStorage isLoggedIn:', localStorage.getItem('isLoggedIn'));
    console.log('localStorage isRegistered:', localStorage.getItem('isRegistered'));
    console.log('localStorage currentUser:', localStorage.getItem('currentUser'));
    console.log('getCurrentUser():', getCurrentUser());
    console.log('isUserRegistered:', isUserRegistered);
    
    const currentUser = getCurrentUser();
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const isRegistered = localStorage.getItem('isRegistered') === 'true';
    
    console.log('РџСЂРѕРІРµСЂРєР° Р·Р° "СЃРјРµРЅРё СЂСѓРЅРґР°":', {
        isLoggedIn,
        isRegistered,
        hasCurrentUser: !!currentUser,
        canChangeRound: isLoggedIn && isRegistered && !!currentUser
    });
    
    return {
        isLoggedIn,
        isRegistered,
        hasCurrentUser: !!currentUser,
        canChangeRound: isLoggedIn && isRegistered && !!currentUser
    };
}

window.testUserState = testUserState;

// Р¤СѓРЅРєС†РёСЏ Р·Р° РіРµРЅРµСЂРёСЂР°РЅРµ РЅР° СЃР»РµРґРІР°С‰Рѕ РЅРёРІРѕ (Р»РµРЅРёРІРѕ Р·Р°СЂРµР¶РґР°РЅРµ)
async function generateNextLevel() {
    if (currentLevel >= gameLevels.length) {
        // Р“РµРЅРµСЂРёСЂР°РјРµ РЅРѕРІРѕ РЅРёРІРѕ СЃР°РјРѕ РєРѕРіР°С‚Рѕ Рµ РЅСѓР¶РЅРѕ
        const currentUser = getCurrentUser();
        
        if (currentUser && currentUser.uid) {
            console.log('Р“РµРЅРµСЂРёСЂР°РјРµ РЅРѕРІРѕ РЅРёРІРѕ Р·Р° Firebase РїРѕС‚СЂРµР±РёС‚РµР»:', currentUser.username);
            const image = await getNextImageForUserFirebase(currentUser.uid);
            
            if (!image) {
                console.error('Firebase: РќРµ СѓСЃРїСЏС…РјРµ РґР° РІР·РµРјРµРј РєР°СЂС‚РёРЅРєР°, РёР·РїРѕР»Р·РІР°РјРµ Р»РѕРєР°Р»РЅРѕ РіРµРЅРµСЂРёСЂР°РЅРµ');
                // Fallback РєСЉРј Р»РѕРєР°Р»РЅРѕ РіРµРЅРµСЂРёСЂР°РЅРµ
                let availableImages = [...images];
                for (let j = availableImages.length - 1; j > 0; j--) {
                    const k = Math.floor(Math.random() * (j + 1));
                    [availableImages[j], availableImages[k]] = [availableImages[k], availableImages[j]];
                }
                const localImage = availableImages.pop();
                const impostor = totalPlayers > 0 ? Math.floor(Math.random() * totalPlayers) + 1 : 1;
                gameLevels.push({
                    image: localImage,
                    impostor: impostor
                });
            } else {
                const impostor = totalPlayers > 0 ? Math.floor(Math.random() * totalPlayers) + 1 : 1;
                gameLevels.push({
                    image: image,
                    impostor: impostor
                });
            }
        } else {
            // Р“РѕСЃС‚/РЅРµСЂРµРіРёСЃС‚СЂРёСЂР°РЅ - Р»РѕРєР°Р»РЅРѕ РіРµРЅРµСЂРёСЂР°РЅРµ
            console.log('Р“РµРЅРµСЂРёСЂР°РјРµ РЅРѕРІРѕ РЅРёРІРѕ Р·Р° РіРѕСЃС‚ РїРѕС‚СЂРµР±РёС‚РµР»');
            let availableImages = [...images];
            for (let j = availableImages.length - 1; j > 0; j--) {
                const k = Math.floor(Math.random() * (j + 1));
                [availableImages[j], availableImages[k]] = [availableImages[k], availableImages[j]];
            }
            const image = availableImages.pop();
            const impostor = totalPlayers > 0 ? Math.floor(Math.random() * totalPlayers) + 1 : 1;
            gameLevels.push({
                image: image,
                impostor: impostor
            });
        }
    }
}

// Р“РµРЅРµСЂРёСЂР°РЅРµ РЅР° РµРґРЅРѕ РЅРёРІРѕ РїСЂРё РЅСѓР¶РґР°
async function generateSingleLevelAsync() {
    const currentUser = getCurrentUser();
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    // РџСЂРѕРІРµСЂСЏРІР°РјРµ РґР°Р»Рё РїРѕС‚СЂРµР±РёС‚РµР»СЏС‚ Рµ СЂРµРіРёСЃС‚СЂРёСЂР°РЅ РІ Firebase
    if (currentUser && currentUser.uid && isLoggedIn) {
        console.log('Р“РµРЅРµСЂРёСЂР°РјРµ РµРґРЅРѕ РЅРёРІРѕ СЃ Firebase Р·Р° РїРѕС‚СЂРµР±РёС‚РµР»:', currentUser.username);
        const image = await getNextImageForUserFirebase(currentUser.uid);
        if (!image) {
            console.error('Firebase: РќРµ СѓСЃРїСЏС…РјРµ РґР° РІР·РµРјРµРј РєР°СЂС‚РёРЅРєР°, РёР·РїРѕР»Р·РІР°РјРµ Р»РѕРєР°Р»РЅРѕ РіРµРЅРµСЂРёСЂР°РЅРµ');
            // Fallback РєСЉРј Р»РѕРєР°Р»РЅРѕ РіРµРЅРµСЂРёСЂР°РЅРµ
            let availableImages = [...images];
            for (let j = availableImages.length - 1; j > 0; j--) {
                const k = Math.floor(Math.random() * (j + 1));
                [availableImages[j], availableImages[k]] = [availableImages[k], availableImages[j]];
            }
            const localImage = availableImages.pop();
            const impostor = totalPlayers > 0 ? Math.floor(Math.random() * totalPlayers) + 1 : 1;
            return {
                image: localImage,
                impostor: impostor
            };
        } else {
            const impostor = totalPlayers > 0 ? Math.floor(Math.random() * totalPlayers) + 1 : 1;
            return {
                image: image,
                impostor: impostor
            };
        }
    } else {
        // Р“РѕСЃС‚/РЅРµСЂРµРіРёСЃС‚СЂРёСЂР°РЅ - РёР·РїРѕР»Р·РІР°РјРµ СЃР°РјРѕ 5-С‚Рµ РєР°СЂС‚РёРЅРё
        console.log('Р“РµРЅРµСЂРёСЂР°РјРµ РµРґРЅРѕ РЅРёРІРѕ Р·Р° РЅРµСЂРµРіРёСЃС‚СЂРёСЂР°РЅ РїРѕС‚СЂРµР±РёС‚РµР» СЃ 5 РєР°СЂС‚РёРЅРё');
        const image = getNextGuestImage();
        const impostor = totalPlayers > 0 ? Math.floor(Math.random() * totalPlayers) + 1 : 1;
        return {
            image: image,
            impostor: impostor
        };
    }
}

// РђСЃРёРЅС…СЂРѕРЅРЅР° РІРµСЂСЃРёСЏ РЅР° generateGameLevels (Р·Р°РїР°Р·РІР°РјРµ Р·Р° РѕР±СЂР°С‚РЅР° СЃСЉРІРјРµСЃС‚РёРјРѕСЃС‚)
async function generateGameLevelsAsync() {
    gameLevels = [];
    const currentUser = getCurrentUser();
    
    // РџСЂРѕРІРµСЂСЏРІР°РјРµ РґР°Р»Рё РїРѕС‚СЂРµР±РёС‚РµР»СЏС‚ Рµ СЂРµРіРёСЃС‚СЂРёСЂР°РЅ РІ Firebase
    if (currentUser && currentUser.uid) {
        console.log('РР·РїРѕР»Р·РІР°РјРµ Firebase Р·Р° РїРѕС‚СЂРµР±РёС‚РµР»:', currentUser.username);
        for (let i = 0; i < totalLevels; i++) {
            const image = await getNextImageForUserFirebase(currentUser.uid);
            
            if (!image) {
                console.error('Firebase: РќРµ СѓСЃРїСЏС…РјРµ РґР° РІР·РµРјРµРј РєР°СЂС‚РёРЅРєР°, РёР·РїРѕР»Р·РІР°РјРµ Р»РѕРєР°Р»РЅРѕ РіРµРЅРµСЂРёСЂР°РЅРµ');
                // РђРєРѕ РЅРµ РјРѕР¶РµРј РґР° РІР·РµРјРµРј РєР°СЂС‚РёРЅРєР° РѕС‚ Firebase, РёР·РїРѕР»Р·РІР°РјРµ Р»РѕРєР°Р»РЅРѕ РіРµРЅРµСЂРёСЂР°РЅРµ
                let availableImages = [...images];
                for (let j = availableImages.length - 1; j > 0; j--) {
                    const k = Math.floor(Math.random() * (j + 1));
                    [availableImages[j], availableImages[k]] = [availableImages[k], availableImages[j]];
                }
                const localImage = availableImages.pop();
                const impostor = totalPlayers > 0 ? Math.floor(Math.random() * totalPlayers) + 1 : 1;
                gameLevels.push({
                    image: localImage,
                    impostor: impostor
                });
            } else {
            const impostor = totalPlayers > 0 ? Math.floor(Math.random() * totalPlayers) + 1 : 1;
            gameLevels.push({
                image: image,
                impostor: impostor
            });
            }
        }
    } else {
        // Р“РѕСЃС‚/РЅРµСЂРµРіРёСЃС‚СЂРёСЂР°РЅ - Р»РѕРєР°Р»РЅРѕ РєР°РєС‚Рѕ РґРѕСЃРµРіР°
        console.log('РР·РїРѕР»Р·РІР°РјРµ Р»РѕРєР°Р»РЅРѕ РіРµРЅРµСЂРёСЂР°РЅРµ Р·Р° РіРѕСЃС‚ РїРѕС‚СЂРµР±РёС‚РµР»');
        let availableImages = [...images];
        for (let i = availableImages.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [availableImages[i], availableImages[j]] = [availableImages[j], availableImages[i]];
        }
        for (let i = 0; i < totalLevels; i++) {
            if (availableImages.length === 0) {
                availableImages = [...images];
                for (let j = availableImages.length - 1; j > 0; j--) {
                    const k = Math.floor(Math.random() * (j + 1));
                    [availableImages[j], availableImages[k]] = [availableImages[k], availableImages[j]];
                }
            }
            const image = availableImages.pop();
            const impostor = totalPlayers > 0 ? Math.floor(Math.random() * totalPlayers) + 1 : 1;
            gameLevels.push({
                image: image,
                impostor: impostor
            });
        }
    }
}

// ... existing code ...
// РђСЃРёРЅС…СЂРѕРЅРЅРѕ Р·Р°РїРёСЃРІР°РЅРµ РЅР° gamesPlayed РІСЉРІ Firebase
async function recordGameFirebase(currentUser) {
    if (!currentUser || !currentUser.uid) return;
    try {
        const userRef = db.collection('users').doc(currentUser.uid);
        // Р’Р·РµРјРё С‚РµРєСѓС‰РёС‚Рµ РґР°РЅРЅРё
        const doc = await userRef.get();
        let gamesPlayed = 1;
        if (doc.exists && doc.data().gamesPlayed) {
            gamesPlayed = doc.data().gamesPlayed + 1;
        }
        await userRef.update({
            gamesPlayed: gamesPlayed,
            lastActivity: new Date().toISOString()
        });
        // РћР±РЅРѕРІРё Р»РѕРєР°Р»РЅРѕ
        currentUser.gamesPlayed = gamesPlayed;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    } catch (e) {
        console.warn('РќРµСѓСЃРїРµС€РµРЅ Р·Р°РїРёСЃ РІСЉРІ Firebase, С‰Рµ СЃРµ Р·Р°РїРёС€Рµ СЃР°РјРѕ Р»РѕРєР°Р»РЅРѕ:', e);
    }
}

function recordGame() {
    const currentUser = getCurrentUser();
    if (currentUser) {
        // РЈРІРµР»РёС‡Р°РІР°РјРµ Р±СЂРѕСЏ РёРіСЂРё РЅР° РїРѕС‚СЂРµР±РёС‚РµР»СЏ
        const users = JSON.parse(localStorage.getItem('usersDB') || '[]');
        const userIndex = users.findIndex(u => u.username === currentUser.username);
        
        if (userIndex !== -1) {
            users[userIndex].gamesPlayed = (users[userIndex].gamesPlayed || 0) + 1;
            users[userIndex].lastActivity = new Date().toISOString();
            localStorage.setItem('usersDB', JSON.stringify(users));
            // РћР±РЅРѕРІСЏРІР°РјРµ С‚РµРєСѓС‰РёСЏ РїРѕС‚СЂРµР±РёС‚РµР»
            currentUser.gamesPlayed = users[userIndex].gamesPlayed;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
        // РђРєРѕ Рµ Firebase РїРѕС‚СЂРµР±РёС‚РµР», Р·Р°РїРёСЃРІР°РјРµ Рё С‚Р°Рј
        if (currentUser.uid) {
            recordGameFirebase(currentUser);
        }
        // РЈРІРµР»РёС‡Р°РІР°РјРµ РѕР±С‰РёСЏ Р±СЂРѕР№ РёРіСЂРё
        const totalGames = parseInt(localStorage.getItem('totalGames') || '0') + 1;
        localStorage.setItem('totalGames', totalGames.toString());
        // Р”РѕР±Р°РІСЏРјРµ Р»РѕРі
        addActivityLog(currentUser.username, 'Р—Р°РІСЉСЂС€Рё РёРіСЂР°');
    }
}
// ... existing code ...

// ... existing code ...
// === FIREBASE: РџСЂРѕРІРµСЂРєР° Р·Р° nolimit ===
async function checkUserNoLimit() {
    const currentUser = getCurrentUser();
    if (currentUser && currentUser.uid) {
        const doc = await db.collection('users').doc(currentUser.uid).get();
        if (doc.exists && doc.data().nolimit === true) {
            return true;
        }
    }
    return false;
}

// РџСЂРёРјРµСЂРЅР° С„СѓРЅРєС†РёСЏ Р·Р° Р°РґРјРёРЅРёС‚Рµ: Р·Р°РґР°РІР°РЅРµ РЅР° nolimit РЅР° РїРѕС‚СЂРµР±РёС‚РµР» РїРѕ РёРјРµР№Р»
async function setUserNoLimitByEmail(email) {
    const usersRef = db.collection('users');
    const query = await usersRef.where('email', '==', email).get();
    if (!query.empty) {
        const userDoc = query.docs[0];
        await userDoc.ref.update({ nolimit: true });
        console.log('РџРѕС‚СЂРµР±РёС‚РµР»СЏС‚ Рµ СЃ nolimit:', email);
    } else {
        console.log('РќРµ Рµ РЅР°РјРµСЂРµРЅ РїРѕС‚СЂРµР±РёС‚РµР» СЃ С‚РѕР·Рё РёРјРµР№Р»:', email);
    }
}
window.setUserNoLimitByEmail = setUserNoLimitByEmail;

// Р¤СѓРЅРєС†РёСЏ Р·Р° С‚РµСЃС‚РІР°РЅРµ РЅР° Firebase РІСЂСЉР·РєР°С‚Р°
async function testFirebaseConnection() {
    try {
        console.log('РўРµСЃС‚РІР°РјРµ Firebase РІСЂСЉР·РєР°С‚Р°...');
        const testDoc = await db.collection('test').doc('connection').get();
        console.log('Firebase РІСЂСЉР·РєР°С‚Р° СЂР°Р±РѕС‚Рё!');
        return true;
    } catch (error) {
        console.error('Р“СЂРµС€РєР° РїСЂРё Firebase РІСЂСЉР·РєР°С‚Р°:', error);
        return false;
    }
}

// Р¤СѓРЅРєС†РёСЏ Р·Р° С‚РµСЃС‚РІР°РЅРµ РЅР° imagesPool Р·Р° РїРѕС‚СЂРµР±РёС‚РµР»
async function testUserImagesPool(uid) {
    try {
        console.log('РўРµСЃС‚РІР°РјРµ imagesPool Р·Р° РїРѕС‚СЂРµР±РёС‚РµР»:', uid);
        const pool = await getUserImagesPoolFirebase(uid);
        console.log('ImagesPool СЂРµР·СѓР»С‚Р°С‚:', pool.length, 'РєР°СЂС‚РёРЅРё');
        return pool;
    } catch (error) {
        console.error('Р“СЂРµС€РєР° РїСЂРё С‚РµСЃС‚РІР°РЅРµ РЅР° imagesPool:', error);
        return null;
    }
}

// Р”РѕР±Р°РІСЏРјРµ С„СѓРЅРєС†РёРёС‚Рµ РІ РіР»РѕР±Р°Р»РЅРёСЏ scope Р·Р° С‚РµСЃС‚РІР°РЅРµ
window.testFirebaseConnection = testFirebaseConnection;
window.testUserImagesPool = testUserImagesPool;

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїСЂРѕРІРµСЂРєР° РЅР° С‚РµРєСѓС‰РёСЏ РїРѕС‚СЂРµР±РёС‚РµР»
function checkCurrentUserStatus() {
    const currentUser = getCurrentUser();
    console.log('=== РЎРўРђРўРЈРЎ РќРђ РўР•РљРЈР©РРЇ РџРћРўР Р•Р‘РРўР•Р› ===');
    console.log('currentUser:', currentUser);
    if (currentUser) {
        console.log('Username:', currentUser.username);
        console.log('UID:', currentUser.uid);
        console.log('Email:', currentUser.email);
        console.log('РРјР° Firebase UID:', !!currentUser.uid);
    } else {
        console.log('РќСЏРјР° С‚РµРєСѓС‰ РїРѕС‚СЂРµР±РёС‚РµР»');
    }
    return currentUser;
}

window.checkCurrentUserStatus = checkCurrentUserStatus;

// Р¤СѓРЅРєС†РёСЏ Р·Р° С‚РµСЃС‚РІР°РЅРµ РЅР° Firebase imagesPool
async function testFirebaseImagesPool() {
    const currentUser = getCurrentUser();
    if (!currentUser || !currentUser.uid) {
        console.log('РќСЏРјР° СЂРµРіРёСЃС‚СЂРёСЂР°РЅ РїРѕС‚СЂРµР±РёС‚РµР» Р·Р° С‚РµСЃС‚РІР°РЅРµ');
        return;
    }
    
    console.log('=== РўР•РЎРў РќРђ FIREBASE IMAGESPOOL (Р’Р•Р РЎРРЇ 3.0) ===');
    console.log('РџРѕС‚СЂРµР±РёС‚РµР»:', currentUser.username, 'UID:', currentUser.uid);
    
    try {
        // РўРµСЃС‚РІР°РјРµ РІСЂСЉР·РєР°С‚Р°
        const connectionOk = await testFirebaseConnection();
        if (!connectionOk) {
            console.error('Firebase РІСЂСЉР·РєР°С‚Р° РЅРµ СЂР°Р±РѕС‚Рё!');
            return;
        }
        
        // РџРѕРєР°Р·РІР°РјРµ РІСЃРёС‡РєРё РєР°СЂС‚РёРЅРё
        console.log('РћР±С‰ Р±СЂРѕР№ РєР°СЂС‚РёРЅРё РІ СЃРёСЃС‚РµРјР°С‚Р°:', images.length);
        
        // РўРµСЃС‚РІР°РјРµ pool-Р°
        const shownImages = await getUserImagesPoolFirebase(currentUser.uid);
        console.log('РџРѕРєР°Р·Р°РЅРё РєР°СЂС‚РёРЅРё:', shownImages.length);
        console.log('РќР°Р»РёС‡РЅРё РєР°СЂС‚РёРЅРё:', images.length - shownImages.length);
        
        // РўРµСЃС‚РІР°РјРµ РІР·РµРјР°РЅРµ РЅР° РєР°СЂС‚РёРЅРєР°
        const image = await getNextImageForUserFirebase(currentUser.uid);
        console.log('Р’Р·РµС‚Р° РєР°СЂС‚РёРЅРєР°:', image);
        
        // РџСЂРѕРІРµСЂСЏРІР°РјРµ pool-Р° СЃР»РµРґ РІР·РµРјР°РЅРµ
        const shownImagesAfter = await getUserImagesPoolFirebase(currentUser.uid);
        console.log('РџРѕРєР°Р·Р°РЅРё РєР°СЂС‚РёРЅРё СЃР»РµРґ РІР·РµРјР°РЅРµ:', shownImagesAfter.length);
        console.log('РќР°Р»РёС‡РЅРё РєР°СЂС‚РёРЅРё СЃР»РµРґ РІР·РµРјР°РЅРµ:', images.length - shownImagesAfter.length);
        
        // РџРѕРєР°Р·РІР°РјРµ РїСЉСЂРІРёС‚Рµ 5 РїРѕРєР°Р·Р°РЅРё РєР°СЂС‚РёРЅРё
        if (shownImagesAfter.length > 0) {
            console.log('РџСЉСЂРІРё 5 РїРѕРєР°Р·Р°РЅРё РєР°СЂС‚РёРЅРё:', shownImagesAfter.slice(0, 5));
        }
        
    } catch (error) {
        console.error('Р“СЂРµС€РєР° РїСЂРё С‚РµСЃС‚РІР°РЅРµ:', error);
    }
}

window.testFirebaseImagesPool = testFirebaseImagesPool;

// Р¤СѓРЅРєС†РёСЏ Р·Р° РёР·С‡РёСЃС‚РІР°РЅРµ РЅР° pool-Р° Р·Р° С‚РµСЃС‚РІР°РЅРµ
async function clearUserImagesPool() {
    const currentUser = getCurrentUser();
    if (!currentUser || !currentUser.uid) {
        console.log('РќСЏРјР° СЂРµРіРёСЃС‚СЂРёСЂР°РЅ РїРѕС‚СЂРµР±РёС‚РµР» Р·Р° РёР·С‡РёСЃС‚РІР°РЅРµ');
        return;
    }
    
    console.log('=== РР—Р§РРЎРўР’РђРќР• РќРђ IMAGESPOOL ===');
    console.log('РџРѕС‚СЂРµР±РёС‚РµР»:', currentUser.username, 'UID:', currentUser.uid);
    
    try {
        const userDoc = db.collection('users').doc(currentUser.uid);
        await userDoc.collection('gameData').doc('imagesPool').delete();
        console.log('Pool РёР·С‡РёСЃС‚РµРЅ СѓСЃРїРµС€РЅРѕ!');
    } catch (error) {
        console.error('Р“СЂРµС€РєР° РїСЂРё РёР·С‡РёСЃС‚РІР°РЅРµ РЅР° pool:', error);
    }
}

window.clearUserImagesPool = clearUserImagesPool;

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїРѕРєР°Р·РІР°РЅРµ РЅР° СЃС‚Р°С‚РёСЃС‚РёРєР° Р·Р° pool-Р°
async function showPoolStats() {
    const currentUser = getCurrentUser();
    if (!currentUser || !currentUser.uid) {
        console.log('РќСЏРјР° СЂРµРіРёСЃС‚СЂРёСЂР°РЅ РїРѕС‚СЂРµР±РёС‚РµР» Р·Р° СЃС‚Р°С‚РёСЃС‚РёРєР°');
        return;
    }
    
    console.log('=== РЎРўРђРўРРЎРўРРљРђ Р—Рђ IMAGESPOOL (Р’Р•Р РЎРРЇ 3.0) ===');
    console.log('РџРѕС‚СЂРµР±РёС‚РµР»:', currentUser.username, 'UID:', currentUser.uid);
    
    try {
        const shownImages = await getUserImagesPoolFirebase(currentUser.uid);
        console.log('РћР±С‰ Р±СЂРѕР№ РєР°СЂС‚РёРЅРё РІ СЃРёСЃС‚РµРјР°С‚Р°:', images.length);
        console.log('РџРѕРєР°Р·Р°РЅРё РєР°СЂС‚РёРЅРё:', shownImages.length);
        console.log('РќР°Р»РёС‡РЅРё РєР°СЂС‚РёРЅРё:', images.length - shownImages.length);
        console.log('РџСЂРѕС†РµРЅС‚ РїРѕРєР°Р·Р°РЅРё:', Math.round((shownImages.length / images.length) * 100) + '%');
        console.log('РџСЂРѕС†РµРЅС‚ РЅР°Р»РёС‡РЅРё:', Math.round(((images.length - shownImages.length) / images.length) * 100) + '%');
        
        if (shownImages.length > 0) {
            console.log('РџСЉСЂРІРёС‚Рµ 5 РїРѕРєР°Р·Р°РЅРё РєР°СЂС‚РёРЅРё:', shownImages.slice(0, 5));
        }
        
        if (shownImages.length === images.length) {
            console.log('рџЋ‰ Р’СЃРёС‡РєРё РєР°СЂС‚РёРЅРё СЃР° РїРѕРєР°Р·Р°РЅРё! РџСЂРё СЃР»РµРґРІР°С‰Р° РёРіСЂР° pool-СЉС‚ С‰Рµ СЃРµ РёР·С‡РёСЃС‚Рё.');
        }
        
    } catch (error) {
        console.error('Р“СЂРµС€РєР° РїСЂРё РїРѕРєР°Р·РІР°РЅРµ РЅР° СЃС‚Р°С‚РёСЃС‚РёРєР°:', error);
    }
}

window.showPoolStats = showPoolStats;

// Р¤СѓРЅРєС†РёСЏ Р·Р° РїСЂРёРЅСѓРґРёС‚РµР»РЅРѕ РёР·С‡РёСЃС‚РІР°РЅРµ РЅР° pool-Р°
async function forceResetPool() {
    const currentUser = getCurrentUser();
    if (!currentUser || !currentUser.uid) {
        console.log('РќСЏРјР° СЂРµРіРёСЃС‚СЂРёСЂР°РЅ РїРѕС‚СЂРµР±РёС‚РµР» Р·Р° РёР·С‡РёСЃС‚РІР°РЅРµ');
        return;
    }
    
    console.log('=== РџР РРќРЈР”РРўР•Р›РќРћ РР—Р§РРЎРўР’РђРќР• РќРђ POOL (Р’Р•Р РЎРРЇ 3.0) ===');
    console.log('РџРѕС‚СЂРµР±РёС‚РµР»:', currentUser.username, 'UID:', currentUser.uid);
    
    try {
        const userDoc = db.collection('users').doc(currentUser.uid);
        await userDoc.collection('gameData').doc('imagesPool').delete();
        console.log('Pool РёР·С‡РёСЃС‚РµРЅ РїСЂРёРЅСѓРґРёС‚РµР»РЅРѕ!');
        console.log('РџСЂРё СЃР»РµРґРІР°С‰Рѕ СЃС‚Р°СЂС‚РёСЂР°РЅРµ РЅР° РёРіСЂР°С‚Р° С‰Рµ СЃРµ СЃСЉР·РґР°РґРµ РЅРѕРІ pool СЃ РІРµСЂСЃРёСЏ 3.0.');
        console.log('Р’СЃРёС‡РєРё РєР°СЂС‚РёРЅРё С‰Рµ Р±СЉРґР°С‚ РЅР°Р»РёС‡РЅРё РѕС‚РЅРѕРІРѕ.');
    } catch (error) {
        console.error('Р“СЂРµС€РєР° РїСЂРё РїСЂРёРЅСѓРґРёС‚РµР»РЅРѕ РёР·С‡РёСЃС‚РІР°РЅРµ РЅР° pool:', error);
    }
}

window.forceResetPool = forceResetPool;

// Р¤СѓРЅРєС†РёСЏ Р·Р° С‚РµСЃС‚РІР°РЅРµ РЅР° С‚РµРєСѓС‰РѕС‚Рѕ СЃСЉСЃС‚РѕСЏРЅРёРµ РЅР° РїРѕС‚СЂРµР±РёС‚РµР»СЏ
function testUserState() {
    console.log('=== РўР•РЎРў РќРђ РЎРЄРЎРўРћРЇРќРР•РўРћ РќРђ РџРћРўР Р•Р‘РРўР•Р›РЇ ===');
    console.log('localStorage isLoggedIn:', localStorage.getItem('isLoggedIn'));
    console.log('localStorage isRegistered:', localStorage.getItem('isRegistered'));
    console.log('localStorage currentUser:', localStorage.getItem('currentUser'));
    console.log('getCurrentUser():', getCurrentUser());
    console.log('isUserRegistered:', isUserRegistered);
    
    const currentUser = getCurrentUser();
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const isRegistered = localStorage.getItem('isRegistered') === 'true';
    
    console.log('РџСЂРѕРІРµСЂРєР° Р·Р° "СЃРјРµРЅРё СЂСѓРЅРґР°":', {
        isLoggedIn,
        isRegistered,
        hasCurrentUser: !!currentUser,
        canChangeRound: isLoggedIn && isRegistered && !!currentUser
    });
    
    return {
        isLoggedIn,
        isRegistered,
        hasCurrentUser: !!currentUser,
        canChangeRound: isLoggedIn && isRegistered && !!currentUser
    };
}

window.testUserState = testUserState;

// Р¤СѓРЅРєС†РёСЏ Р·Р° РіРµРЅРµСЂРёСЂР°РЅРµ РЅР° СЃР»РµРґРІР°С‰Рѕ РЅРёРІРѕ (Р»РµРЅРёРІРѕ Р·Р°СЂРµР¶РґР°РЅРµ)
async function generateNextLevel() {
    if (currentLevel >= gameLevels.length) {
        // Р“РµРЅРµСЂРёСЂР°РјРµ РЅРѕРІРѕ РЅРёРІРѕ СЃР°РјРѕ РєРѕРіР°С‚Рѕ Рµ РЅСѓР¶РЅРѕ
        const currentUser = getCurrentUser();
        
        if (currentUser && currentUser.uid) {
            console.log('Р“РµРЅРµСЂРёСЂР°РјРµ РЅРѕРІРѕ РЅРёРІРѕ Р·Р° Firebase РїРѕС‚СЂРµР±РёС‚РµР»:', currentUser.username);
            const image = await getNextImageForUserFirebase(currentUser.uid);
            
            if (!image) {
                console.error('Firebase: РќРµ СѓСЃРїСЏС…РјРµ РґР° РІР·РµРјРµРј РєР°СЂС‚РёРЅРєР°, РёР·РїРѕР»Р·РІР°РјРµ Р»РѕРєР°Р»РЅРѕ РіРµРЅРµСЂРёСЂР°РЅРµ');
                // Fallback РєСЉРј Р»РѕРєР°Р»РЅРѕ РіРµРЅРµСЂРёСЂР°РЅРµ
                let availableImages = [...images];
                for (let j = availableImages.length - 1; j > 0; j--) {
                    const k = Math.floor(Math.random() * (j + 1));
                    [availableImages[j], availableImages[k]] = [availableImages[k], availableImages[j]];
                }
                const localImage = availableImages.pop();
                const impostor = totalPlayers > 0 ? Math.floor(Math.random() * totalPlayers) + 1 : 1;
                gameLevels.push({
                    image: localImage,
                    impostor: impostor
                });
            } else {
                const impostor = totalPlayers > 0 ? Math.floor(Math.random() * totalPlayers) + 1 : 1;
                gameLevels.push({
                    image: image,
                    impostor: impostor
                });
            }
        } else {
            // Р“РѕСЃС‚/РЅРµСЂРµРіРёСЃС‚СЂРёСЂР°РЅ - Р»РѕРєР°Р»РЅРѕ РіРµРЅРµСЂРёСЂР°РЅРµ
            console.log('Р“РµРЅРµСЂРёСЂР°РјРµ РЅРѕРІРѕ РЅРёРІРѕ Р·Р° РіРѕСЃС‚ РїРѕС‚СЂРµР±РёС‚РµР»');
            let availableImages = [...images];
            for (let j = availableImages.length - 1; j > 0; j--) {
                const k = Math.floor(Math.random() * (j + 1));
                [availableImages[j], availableImages[k]] = [availableImages[k], availableImages[j]];
            }
            const image = availableImages.pop();
            const impostor = totalPlayers > 0 ? Math.floor(Math.random() * totalPlayers) + 1 : 1;
            gameLevels.push({
                image: image,
                impostor: impostor
            });
        }
    }
}

// Р“РµРЅРµСЂРёСЂР°РЅРµ РЅР° РµРґРЅРѕ РЅРёРІРѕ РїСЂРё РЅСѓР¶РґР°
async function generateSingleLevelAsync() {
    const currentUser = getCurrentUser();
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    // РџСЂРѕРІРµСЂСЏРІР°РјРµ РґР°Р»Рё РїРѕС‚СЂРµР±РёС‚РµР»СЏС‚ Рµ СЂРµРіРёСЃС‚СЂРёСЂР°РЅ РІ Firebase
    if (currentUser && currentUser.uid && isLoggedIn) {
        console.log('Р“РµРЅРµСЂРёСЂР°РјРµ РµРґРЅРѕ РЅРёРІРѕ СЃ Firebase Р·Р° РїРѕС‚СЂРµР±РёС‚РµР»:', currentUser.username);
        const image = await getNextImageForUserFirebase(currentUser.uid);
        if (!image) {
            console.error('Firebase: РќРµ СѓСЃРїСЏС…РјРµ РґР° РІР·РµРјРµРј РєР°СЂС‚РёРЅРєР°, РёР·РїРѕР»Р·РІР°РјРµ Р»РѕРєР°Р»РЅРѕ РіРµРЅРµСЂРёСЂР°РЅРµ');
            // Fallback РєСЉРј Р»РѕРєР°Р»РЅРѕ РіРµРЅРµСЂРёСЂР°РЅРµ
            let availableImages = [...images];
            for (let j = availableImages.length - 1; j > 0; j--) {
                const k = Math.floor(Math.random() * (j + 1));
                [availableImages[j], availableImages[k]] = [availableImages[k], availableImages[j]];
            }
            const localImage = availableImages.pop();
            const impostor = totalPlayers > 0 ? Math.floor(Math.random() * totalPlayers) + 1 : 1;
            return {
                image: localImage,
                impostor: impostor
            };
        } else {
            const impostor = totalPlayers > 0 ? Math.floor(Math.random() * totalPlayers) + 1 : 1;
            return {
                image: image,
                impostor: impostor
            };
        }
    } else {
        // Р“РѕСЃС‚/РЅРµСЂРµРіРёСЃС‚СЂРёСЂР°РЅ - РёР·РїРѕР»Р·РІР°РјРµ СЃР°РјРѕ 5-С‚Рµ РєР°СЂС‚РёРЅРё
        console.log('Р“РµРЅРµСЂРёСЂР°РјРµ РµРґРЅРѕ РЅРёРІРѕ Р·Р° РЅРµСЂРµРіРёСЃС‚СЂРёСЂР°РЅ РїРѕС‚СЂРµР±РёС‚РµР» СЃ 5 РєР°СЂС‚РёРЅРё');
        const image = getNextGuestImage();
        const impostor = totalPlayers > 0 ? Math.floor(Math.random() * totalPlayers) + 1 : 1;
        return {
            image: image,
            impostor: impostor
        };
    }
}

// РђСЃРёРЅС…СЂРѕРЅРЅР° РІРµСЂСЃРёСЏ РЅР° generateGameLevels (Р·Р°РїР°Р·РІР°РјРµ Р·Р° РѕР±СЂР°С‚РЅР° СЃСЉРІРјРµСЃС‚РёРјРѕСЃС‚)
async function generateGameLevelsAsync() {
    gameLevels = [];
    const currentUser = getCurrentUser();
    
    // РџСЂРѕРІРµСЂСЏРІР°РјРµ РґР°Р»Рё РїРѕС‚СЂРµР±РёС‚РµР»СЏС‚ Рµ СЂРµРіРёСЃС‚СЂРёСЂР°РЅ РІ Firebase
    if (currentUser && currentUser.uid) {
        console.log('РР·РїРѕР»Р·РІР°РјРµ Firebase Р·Р° РїРѕС‚СЂРµР±РёС‚РµР»:', currentUser.username);
        for (let i = 0; i < totalLevels; i++) {
            const image = await getNextImageForUserFirebase(currentUser.uid);
            
            if (!image) {
                console.error('Firebase: РќРµ СѓСЃРїСЏС…РјРµ РґР° РІР·РµРјРµРј РєР°СЂС‚РёРЅРєР°, РёР·РїРѕР»Р·РІР°РјРµ Р»РѕРєР°Р»РЅРѕ РіРµРЅРµСЂРёСЂР°РЅРµ');
                // РђРєРѕ РЅРµ РјРѕР¶РµРј РґР° РІР·РµРјРµРј РєР°СЂС‚РёРЅРєР° РѕС‚ Firebase, РёР·РїРѕР»Р·РІР°РјРµ Р»РѕРєР°Р»РЅРѕ РіРµРЅРµСЂРёСЂР°РЅРµ
                let availableImages = [...images];
                for (let j = availableImages.length - 1; j > 0; j--) {
                    const k = Math.floor(Math.random() * (j + 1));
                    [availableImages[j], availableImages[k]] = [availableImages[k], availableImages[j]];
                }
                const localImage = availableImages.pop();
                const impostor = totalPlayers > 0 ? Math.floor(Math.random() * totalPlayers) + 1 : 1;
                gameLevels.push({
                    image: localImage,
                    impostor: impostor
                });
            } else {
            const impostor = totalPlayers > 0 ? Math.floor(Math.random() * totalPlayers) + 1 : 1;
            gameLevels.push({
                image: image,
                impostor: impostor
            });
            }
        }
    } else {
        // Р“РѕСЃС‚/РЅРµСЂРµРіРёСЃС‚СЂРёСЂР°РЅ - Р»РѕРєР°Р»РЅРѕ РєР°РєС‚Рѕ РґРѕСЃРµРіР°
        console.log('РР·РїРѕР»Р·РІР°РјРµ Р»РѕРєР°Р»РЅРѕ РіРµРЅРµСЂРёСЂР°РЅРµ Р·Р° РіРѕСЃС‚ РїРѕС‚СЂРµР±РёС‚РµР»');
        let availableImages = [...images];
        for (let i = availableImages.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [availableImages[i], availableImages[j]] = [availableImages[j], availableImages[i]];
        }
        for (let i = 0; i < totalLevels; i++) {
            if (availableImages.length === 0) {
                availableImages = [...images];
                for (let j = availableImages.length - 1; j > 0; j--) {
                    const k = Math.floor(Math.random() * (j + 1));
                    [availableImages[j], availableImages[k]] = [availableImages[k], availableImages[j]];
                }
            }
            const image = availableImages.pop();
            const impostor = totalPlayers > 0 ? Math.floor(Math.random() * totalPlayers) + 1 : 1;
            gameLevels.push({
                image: image,
                impostor: impostor
            });
        }
    }
}

// ... existing code ...
// РђСЃРёРЅС…СЂРѕРЅРЅРѕ Р·Р°РїРёСЃРІР°РЅРµ РЅР° Р»РѕРі РІСЉРІ Firebase
async function addActivityLogFirebase(username, action) {
    try {
        const currentUser = getCurrentUser();
        if (!currentUser || !currentUser.uid) return;
        const userRef = db.collection('users').doc(currentUser.uid);
        await userRef.collection('logs').add({
            timestamp: new Date().toISOString(),
            username: username,
            action: action
        });
    } catch (e) {
        console.warn('РќРµСѓСЃРїРµС€РµРЅ Р·Р°РїРёСЃ РЅР° Р»РѕРі РІСЉРІ Firebase:', e);
    }
}

function addActivityLog(username, action) {
    const logs = JSON.parse(localStorage.getItem('activityLogs') || '[]');
    logs.push({
        timestamp: new Date().toISOString(),
        username: username,
        action: action
    });
    // Р—Р°РїР°Р·РІР°РјРµ СЃР°РјРѕ РїРѕСЃР»РµРґРЅРёС‚Рµ 1000 Р»РѕРіР°
    if (logs.length > 1000) {
        logs.splice(0, logs.length - 1000);
    }
    localStorage.setItem('activityLogs', JSON.stringify(logs));
    // РђРєРѕ Рµ Firebase РїРѕС‚СЂРµР±РёС‚РµР», Р·Р°РїРёСЃРІР°РјРµ Рё С‚Р°Рј
    const currentUser = getCurrentUser();
    if (currentUser && currentUser.uid) {
        addActivityLogFirebase(username, action);
    }
}
// ... existing code ...

// ... existing code ...
// Р’Р—РРњРђРќР• РќРђ Р’РЎРР§РљР РџРћРўР Р•Р‘РРўР•Р›Р РћРў FIREBASE
async function fetchAllUsersFirebase() {
    try {
        const usersSnapshot = await db.collection('users').get();
        return usersSnapshot.docs.map(doc => ({ uid: doc.id, ...doc.data() }));
    } catch (e) {
        console.warn('РќРµСѓСЃРїРµС€РЅРѕ РІР·РёРјР°РЅРµ РЅР° РїРѕС‚СЂРµР±РёС‚РµР»Рё РѕС‚ Firebase:', e);
        return [];
    }
}

// Р’Р—РРњРђРќР• РќРђ Р’РЎРР§РљР Р›РћР“РћР’Р• РћРў FIREBASE (РѕС‚ РІСЃРёС‡РєРё РїРѕС‚СЂРµР±РёС‚РµР»Рё Рё РіРѕСЃС‚Рё)
async function fetchAllLogsFirebase() {
    try {
        let allLogs = [];
        
        // Р’Р·РёРјР°РјРµ Р»РѕРіРѕРІРµС‚Рµ РЅР° СЂРµРіРёСЃС‚СЂРёСЂР°РЅРёС‚Рµ РїРѕС‚СЂРµР±РёС‚РµР»Рё
        const usersSnapshot = await db.collection('users').get();
        for (const userDoc of usersSnapshot.docs) {
            const logsSnapshot = await userDoc.ref.collection('logs').orderBy('timestamp', 'desc').limit(50).get();
            logsSnapshot.forEach(logDoc => {
                allLogs.push({
                    ...logDoc.data(),
                    userUid: userDoc.id,
                    type: 'registered'
                });
            });
        }
        
        // Р’Р·РёРјР°РјРµ Р»РѕРіРѕРІРµС‚Рµ РЅР° РіРѕСЃС‚РёС‚Рµ
        const guestLogsSnapshot = await db.collection('guestLogs').orderBy('timestamp', 'desc').limit(100).get();
        guestLogsSnapshot.forEach(logDoc => {
            allLogs.push({
                ...logDoc.data(),
                type: 'guest'
            });
        });
        
        // РЎРѕСЂС‚РёСЂР°РјРµ РІСЃРёС‡РєРё Р»РѕРіРѕРІРµ РїРѕ РґР°С‚Р° (РЅР°Р№-РЅРѕРІРё РїСЉСЂРІРѕ)
        allLogs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        return allLogs;
    } catch (e) {
        console.warn('РќРµСѓСЃРїРµС€РЅРѕ РІР·РёРјР°РЅРµ РЅР° Р»РѕРіРѕРІРµ РѕС‚ Firebase:', e);
        return [];
    }
}
// ... existing code ...

// ... existing code ...
// РђРЎРРќРҐР РћРќР•Рќ РђР”РњРРќ РџРђРќР•Р› РЎРђРњРћ РЎ FIREBASE Р”РђРќРќР
async function showAdminPanel() {
    if (!checkIfAdmin()) {
        showMessage("РќСЏРјР°С‚Рµ РїСЂР°РІР° Р·Р° РґРѕСЃС‚СЉРї РґРѕ Р°РґРјРёРЅРёСЃС‚СЂР°С‚РёРІРЅРёСЏ РїР°РЅРµР»!", "error");
        return;
    }
    // РџРѕРєР°Р·РІР°РјРµ loader
    const loader = document.createElement('div');
    loader.className = 'admin-modal';
    loader.innerHTML = '<div class="admin-panel"><h2>Р—Р°СЂРµР¶РґР°РЅРµ РЅР° РґР°РЅРЅРё РѕС‚ Firebase...</h2></div>';
    document.body.appendChild(loader);
    try {
        const users = await fetchAllUsersFirebase();
        const logs = await fetchAllLogsFirebase();
        // Р“РµРЅРµСЂРёСЂР°РјРµ HTML Р·Р° РїРѕС‚СЂРµР±РёС‚РµР»Рё Рё Р»РѕРіРѕРІРµ
        const usersTableHTML = generateUsersTableFirebase(users);
        const logsHTML = generateActivityLogsFirebase(logs);
        // РЎС‚Р°С‚РёСЃС‚РёРєР°
        const totalGames = users.reduce((sum, u) => sum + (u.gamesPlayed || 0), 0);
        const mostActive = users.reduce((prev, curr) => (curr.gamesPlayed||0) > (prev.gamesPlayed||0) ? curr : prev, users[0]||{});
        const avgGames = users.length ? Math.round(totalGames / users.length) : 0;
        // Р”Р°С‚Р° Р·Р° РґРЅРµСЃ Рё СЃРµРґРјРёС†Р°С‚Р°
        const today = new Date().toDateString();
        const weekAgo = new Date(); weekAgo.setDate(weekAgo.getDate() - 7);
        const regsToday = users.filter(u => new Date(u.registrationDate).toDateString() === today).length;
        const regsWeek = users.filter(u => new Date(u.registrationDate) >= weekAgo).length;
        // HTML РЅР° Р°РґРјРёРЅ РїР°РЅРµР»Р°
        const adminHTML = `
        <div class="admin-panel">
            <div class="admin-header">
                <h2>рџ”§ РђРґРјРёРЅРёСЃС‚СЂР°С‚РёРІРµРЅ РїР°РЅРµР»</h2>
                <button class="close-admin-btn" onclick="hideAdminPanel()">вњ•</button>
            </div>
            <div class="admin-stats">
                <div class="stat-card"><h3>рџ‘Ґ РћР±С‰Рѕ РїРѕС‚СЂРµР±РёС‚РµР»Рё</h3><p class="stat-number">${users.length}</p></div>
                <div class="stat-card"><h3>рџЋ® РћР±С‰Рѕ РёРіСЂРё</h3><p class="stat-number">${totalGames}</p></div>
                <div class="stat-card"><h3>рџ“Љ РќР°Р№-Р°РєС‚РёРІРµРЅ</h3><p class="stat-number">${mostActive?.username||'-'}</p></div>
            </div>
            <div class="admin-tabs">
                <button class="tab-btn active" onclick="showTab('users')">РџРѕС‚СЂРµР±РёС‚РµР»Рё</button>
                <button class="tab-btn" onclick="showTab('logs')">Р›РѕРіРѕРІРµ</button>
                <button class="tab-btn" onclick="showTab('stats')">РЎС‚Р°С‚РёСЃС‚РёРєР°</button>
            </div>
            <div id="users-tab" class="tab-content active">
                <div class="users-list">
                    <h3>РЎРїРёСЃСЉРє РЅР° РІСЃРёС‡РєРё РїРѕС‚СЂРµР±РёС‚РµР»Рё</h3>
                    <div class="users-table"><table><thead><tr><th>РџРѕС‚СЂРµР±РёС‚РµР»</th><th>РРјРµР№Р»</th><th>Р”Р°С‚Р° РЅР° СЂРµРіРёСЃС‚СЂР°С†РёСЏ</th><th>РР·РёРіСЂР°РЅРё РёРіСЂРё</th></tr></thead><tbody id="users-table-body">${usersTableHTML}</tbody></table></div>
                </div>
            </div>
            <div id="logs-tab" class="tab-content">
                <div class="activity-logs"><h3>Р›РѕРі РЅР° Р°РєС‚РёРІРЅРѕСЃС‚РёС‚Рµ</h3><div class="logs-container">${logsHTML}</div></div>
            </div>
            <div id="stats-tab" class="tab-content">
                <div class="detailed-stats">
                    <h3>Р”РµС‚Р°Р№Р»РЅР° СЃС‚Р°С‚РёСЃС‚РёРєР°</h3>
                    <div class="stats-grid">
                        <div class="stat-item"><h4>Р РµРіРёСЃС‚СЂР°С†РёРё РґРЅРµСЃ</h4><p>${regsToday}</p></div>
                        <div class="stat-item"><h4>Р РµРіРёСЃС‚СЂР°С†РёРё С‚Р°Р·Рё СЃРµРґРјРёС†Р°</h4><p>${regsWeek}</p></div>
                        <div class="stat-item"><h4>РЎСЂРµРґРЅРѕ РёРіСЂРё РЅР° РїРѕС‚СЂРµР±РёС‚РµР»</h4><p>${avgGames}</p></div>
                    </div>
                </div>
            </div>
        </div>`;
        loader.innerHTML = adminHTML;
        setTimeout(() => { loader.classList.add('show'); }, 10);
    } catch (e) {
        loader.innerHTML = '<div class="admin-panel"><h2>Р“СЂРµС€РєР° РїСЂРё Р·Р°СЂРµР¶РґР°РЅРµ РЅР° РґР°РЅРЅРё РѕС‚ Firebase!</h2><p>'+e+'</p><button onclick="hideAdminPanel()">Р—Р°С‚РІРѕСЂРё</button></div>';
    }
}

// Р“РµРЅРµСЂРёСЂР° HTML Р·Р° С‚Р°Р±Р»РёС†Р° СЃ РїРѕС‚СЂРµР±РёС‚РµР»Рё РѕС‚ Firebase
function generateUsersTableFirebase(users) {
    return users.map(user => `
        <tr>
            <td>${user.username||'-'}</td>
            <td>${user.email||'-'}</td>
            <td>${user.registrationDate ? formatDate(user.registrationDate) : '-'}</td>
            <td>${user.gamesPlayed||0}</td>
        </tr>
    `).join('');
}

// Р“РµРЅРµСЂРёСЂР° HTML Р·Р° Р»РѕРіРѕРІРµ РѕС‚ Firebase
function generateActivityLogsFirebase(logs) {
    return logs.map(log => `
        <div class="log-entry">
            <span class="log-time">${log.timestamp ? formatDateTime(log.timestamp) : '-'}</span>
            <span class="log-user">${log.username||'-'} ${log.type === 'guest' ? '(Р“РѕСЃС‚)' : ''}</span>
            <span class="log-action">${log.action||'-'}</span>
        </div>
    `).join('');
}
// ... existing code ...

// ... existing code ...
// РђСЃРёРЅС…СЂРѕРЅРЅРѕ Р·Р°РїРёСЃРІР°РЅРµ РЅР° Р»РѕРі Р·Р° РіРѕСЃС‚Рё РІСЉРІ Firebase
async function addGuestLogFirebase(username, action) {
    try {
        await db.collection('guestLogs').add({
            timestamp: new Date().toISOString(),
            username: username,
            action: action
        });
    } catch (e) {
        console.warn('РќРµСѓСЃРїРµС€РµРЅ Р·Р°РїРёСЃ РЅР° РіРѕСЃС‚ Р»РѕРі РІСЉРІ Firebase:', e);
    }
}

// РђСЃРёРЅС…СЂРѕРЅРЅРѕ Р·Р°РїРёСЃРІР°РЅРµ РЅР° Р»РѕРі РІСЉРІ Firebase
async function addActivityLogFirebase(username, action) {
    try {
        const currentUser = getCurrentUser();
        if (!currentUser || !currentUser.uid) return;
        const userRef = db.collection('users').doc(currentUser.uid);
        await userRef.collection('logs').add({
            timestamp: new Date().toISOString(),
            username: username,
            action: action
        });
    } catch (e) {
        console.warn('РќРµСѓСЃРїРµС€РµРЅ Р·Р°РїРёСЃ РЅР° Р»РѕРі РІСЉРІ Firebase:', e);
    }
}

function addActivityLog(username, action) {
    const logs = JSON.parse(localStorage.getItem('activityLogs') || '[]');
    logs.push({
        timestamp: new Date().toISOString(),
        username: username,
        action: action
    });
    // Р—Р°РїР°Р·РІР°РјРµ СЃР°РјРѕ РїРѕСЃР»РµРґРЅРёС‚Рµ 1000 Р»РѕРіР°
    if (logs.length > 1000) {
        logs.splice(0, logs.length - 1000);
    }
    localStorage.setItem('activityLogs', JSON.stringify(logs));
    // РђРєРѕ Рµ Firebase РїРѕС‚СЂРµР±РёС‚РµР», Р·Р°РїРёСЃРІР°РјРµ РІ РЅРµРіРѕРІРёС‚Рµ Р»РѕРіРѕРІРµ
    const currentUser = getCurrentUser();
    if (currentUser && currentUser.uid) {
        addActivityLogFirebase(username, action);
    } else {
        // РђРєРѕ Рµ РіРѕСЃС‚, Р·Р°РїРёСЃРІР°РјРµ РІ РіРѕСЃС‚ Р»РѕРіРѕРІРµС‚Рµ
        addGuestLogFirebase(username, action);
    }
}

// --- Firestore Room Management ---

function createNewRoom() {
    roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    myPlayerUid = auth.currentUser.uid;
    isHost = true;
    isOnline = true;
    
    const initialRoomData = {
        hostId: myPlayerUid,
        status: 'lobby',
        mode: 'online',
        round: 1,
        maxRounds: 5,
        turnIndex: 0,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    db.collection('rooms').doc(roomCode).set(initialRoomData).then(() => {
        showScreen(profileSetupScreen);
        lobbyRoomCodeDisplay.textContent = roomCode;
    }).catch(err => Swal.fire('Error', 'Could not create room', 'error'));
}

function joinExistingRoom(code) {
    db.collection('rooms').doc(code).get().then(doc => {
        if (doc.exists) {
            roomCode = code;
            isOnline = true;
            isHost = false;
            showScreen(profileSetupScreen);
            lobbyRoomCodeDisplay.textContent = roomCode;
        } else {
            Swal.fire('Р“СЂРµС€РєР°', 'РЎС‚Р°СЏС‚Р° РЅРµ Рµ РЅР°РјРµСЂРµРЅР°!', 'error');
        }
    });
}

function setupProfile(nickname, avatar, spectator) {
    if (!auth.currentUser) {
        Swal.fire('Р“СЂРµС€РєР°', 'РўСЂСЏР±РІР° РґР° СЃС‚Рµ РІР»РµР·Р»Рё РІ РїСЂРѕС„РёР»Р° СЃРё!', 'error');
        return;
    }
    if (!roomCode) {
        Swal.fire('Р“СЂРµС€РєР°', 'Р›РёРїСЃРІР° РєРѕРґ РЅР° СЃС‚Р°СЏ!', 'error');
        return;
    }

    amISpectator = spectator;
    const playerData = {
        name: nickname,
        avatar: avatar,
        isSpectator: spectator,
        joinedAt: Date.now()
    };
    
    db.collection('rooms').doc(roomCode).collection('players').doc(auth.currentUser.uid).set(playerData)
        .then(() => {
            listenToRoom(roomCode);
            showScreen(lobbyScreen);
        })
        .catch(err => {
            console.error('Firestore Error:', err);
            Swal.fire('Р“СЂРµС€РєР°', 'РќРµСѓСЃРїРµС€РЅРѕ РІР»РёР·Р°РЅРµ РІ СЃС‚Р°СЏС‚Р°: ' + err.message, 'error');
        });
}

function listenToRoom(code) {
    db.collection('rooms').doc(code).onSnapshot(doc => {
        if (!doc.exists) return;
        roomData = doc.data();
        
        if (roomData.status === 'playing' && gameScreen.classList.contains('hidden')) {
            startOnlineGameLocal();
        }
        
        if (roomData.status === 'playing') {
            updateOnlineGameState();
        }
        
        updateLobbyUI();
    });
    
    db.collection('rooms').doc(code).collection('players').onSnapshot(snapshot => {
        const players = [];
        snapshot.forEach(p => players.push({uid: p.id, ...p.data()}));
        roomData = roomData || {};
        roomData.players = players;
        updateLobbyUI();
    });
    
    db.collection('rooms').doc(code).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
        renderChat(snapshot);
    });
}

function updateLobbyUI() {
    if (!roomData || !roomData.players) return;
    
    lobbyPlayersList.innerHTML = '';
    roomData.players.sort((a, b) => a.joinedAt - b.joinedAt).forEach(player => {
        const card = document.createElement('div');
        card.className = `player-card ${player.uid === roomData.hostId ? 'is-host' : ''}`;
        card.innerHTML = `
            <div class="player-avatar">${player.avatar}</div>
            <div class="player-name">${player.name}</div>
            ${player.isSpectator ? '<div class="spectator-badge" title="РќР°Р±Р»СЋРґР°С‚РµР»">рџ‘Ђ</div>' : ''}
        `;
        lobbyPlayersList.appendChild(card);
    });
    
    if (isHost) {
        startOnlineGameBtn.classList.remove('hidden');
        waitingForHostMsg.classList.add('hidden');
    } else {
        startOnlineGameBtn.classList.add('hidden');
        waitingForHostMsg.classList.remove('hidden');
    }
}

function leaveRoom() {
    if (roomCode) {
        db.collection('rooms').doc(roomCode).collection('players').doc(auth.currentUser.uid).delete();
    }
    isOnline = false;
    roomCode = null;
    showScreen(modeSelectionScreen);
}

function startOnlineGame() {
    if (!isHost) return;
    
    const players = roomData.players.filter(p => !p.isSpectator);
    if (players.length < 3) {
        Swal.fire('Р“СЂРµС€РєР°', 'РўСЂСЏР±РІР°С‚ РїРѕРЅРµ 3-РјР° РёРіСЂР°С‡Рё!', 'error');
        return;
    }
    
    const impostorIndex = Math.floor(Math.random() * players.length);
    const impostorUid = players[impostorIndex].uid;
    const randomImg = images[Math.floor(Math.random() * images.length)];
    
    db.collection('rooms').doc(roomCode).update({
        status: 'playing',
        impostorUid: impostorUid,
        currentImage: randomImg,
        currentTurnUid: players[0].uid,
        turnIndex: 0
    });
}

function startOnlineGameLocal() {
    showScreen(gameScreen);
    gameRoomInfoDisplay.textContent = `РЎС‚Р°СЏ: ${roomCode}`;
    onlineChatContainer.classList.remove('hidden');
    localControls.classList.add('hidden');
}

function updateOnlineGameState() {
    if (!roomData) return;
    
    const amITurn = roomData.currentTurnUid === auth.currentUser.uid;
    const players = roomData.players.filter(p => !p.isSpectator);
    const turnPlayer = players.find(p => p.uid === roomData.currentTurnUid);
    
    // Header info
    document.getElementById('game-round-info').textContent = `Р СѓРЅРґ ${roomData.round}/${roomData.maxRounds}`;
    const playerBtnText = currentPlayerDisplay.querySelector('.button-text');
    if (turnPlayer) {
        playerBtnText.textContent = turnPlayer.name.toUpperCase();
    }
    
    // Show image or impostor mask
    imagesContainer.innerHTML = '';
    const imgCard = document.createElement('div');
    imgCard.className = 'image-card';
    
    if (amISpectator || auth.currentUser.uid === roomData.impostorUid) {
        imgCard.innerHTML = `<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; font-weight:800; color:#FF6B6B;">
            <i class="fas fa-user-secret" style="font-size:4rem; margin-bottom:10px;"></i>
            <span>${translateText('you_are_impostor')}</span>
        </div>`;
    } else {
        imgCard.innerHTML = `<img src="${roomData.currentImage}" style="width:100%; height:100%; object-fit:cover;">`;
    }
    imagesContainer.appendChild(imgCard);
    
    // Chat visibility
    if (amITurn && !amISpectator) {
        wordInputContainer.classList.remove('hidden');
    } else {
        wordInputContainer.classList.add('hidden');
    }
}

function submitOnlineWord(word) {
    if (!roomData) return;
    
    const players = roomData.players.filter(p => !p.isSpectator);
    const nextIndex = (roomData.turnIndex + 1) % players.length;
    
    db.collection('rooms').doc(roomCode).collection('messages').add({
        senderUid: auth.currentUser.uid,
        senderName: roomData.players.find(p => p.uid === auth.currentUser.uid).name,
        word: word,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    
    db.collection('rooms').doc(roomCode).update({
        currentTurnUid: players[nextIndex].uid,
        turnIndex: nextIndex
    });
}

function renderChat(snapshot) {
    chatHistoryList.innerHTML = '';
    snapshot.forEach(doc => {
        const msg = doc.data();
        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble';
        bubble.innerHTML = `<span class="sender">${msg.senderName}</span><span class="text">${msg.word}</span>`;
        chatHistoryList.appendChild(bubble);
    });
    chatHistoryList.scrollTop = chatHistoryList.scrollHeight;
}
// ... existing code ...


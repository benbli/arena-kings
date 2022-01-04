import Draggable from './draggable.js'

function init() {
    const img = document.getElementById('olich-img')
    const root = document.getElementById('scene')
    // const draggableOlich = new Draggable(img, root)

}

function save() {
    var c = document.createElement("a");
    c.download = "options.json";
    
    const text = 
    {
        "VIDEO_FPS_BACKGROUND" : "REFRESH_RATE",
        "VIDEO_FPS_FOREGROUND" : "REFRESH_RATE",
        "VIDEO_VSYNC" : "false",
        "VIDEO_FULLSCREEN_MODE" : "false",
        "NETWORK_REGION_USEAST1" : "true",
        "CURSOR_HIGHLIGHTING" : "true",
        "STICKY_TARGETING" : "true",
        "PARTY_TABS" : "false",
        "CLICK_ALLY_HOLD_SHIFT" : "true",
        "CLICK_ENEMY_HOLD_CONTROL" : "true",
        "NAMEPLATE_EMBEDDED_KEYBINDS" : "true",
        "NAMEPLATE_USE_CHARACTER_NAME" : "true",
        "NAMEPLATE_USE_CLASS_NAME" : "false",
        "NAMEPLATE_USE_KEYBIND" : "false",
        "NAMEPLATE_USE_NUMBER" : "false",
        "NAMEPLATE_TARGET_INDICATOR_ALLY" : "true",
        "NAMEPLATE_TARGET_INDICATOR_ENEMY" : "true",
        "NAMEPLATE_HIDE_ALLY" : "false",
        "NAMEPLATE_HIDE_ENEMY" : "false",
        "ALLY_TARGET_FEET_GLOW" : "true",
        "ALLY_PARTY_FRAME_SPACER" : "0",
        "ALLY_1_PARTY_FRAME_HIDDEN" : "false",
        "ALLY_1_PARTY_FRAME_X_OFFSET" : "0",
        "ALLY_1_PARTY_FRAME_Y_OFFSET" : "0",
        "ALLY_2_PARTY_FRAME_HIDDEN" : "false",
        "ALLY_2_PARTY_FRAME_X_OFFSET" : "225",
        "ALLY_2_PARTY_FRAME_Y_OFFSET" : "0",
        "ALLY_3_PARTY_FRAME_HIDDEN" : "false",
        "ALLY_3_PARTY_FRAME_X_OFFSET" : "450",
        "ALLY_3_PARTY_FRAME_Y_OFFSET" : "0",
        "ENEMY_TARGET_FEET_GLOW" : "true",
        "ENEMY_PARTY_FRAME_SPACER" : "0",
        "ENEMY_1_PARTY_FRAME_HIDDEN" : "false",
        "ENEMY_1_PARTY_FRAME_X_OFFSET" : "1190",
        "ENEMY_1_PARTY_FRAME_Y_OFFSET" : "0",
        "ENEMY_2_PARTY_FRAME_HIDDEN" : "false",
        "ENEMY_2_PARTY_FRAME_X_OFFSET" : "1415",
        "ENEMY_2_PARTY_FRAME_Y_OFFSET" : "0",
        "ENEMY_3_PARTY_FRAME_HIDDEN" : "false",
        "ENEMY_3_PARTY_FRAME_X_OFFSET" : "1640",
        "ENEMY_3_PARTY_FRAME_Y_OFFSET" : "0",
        "SHOW_PLAY_UI_LONGBAR" : "true",
        "SHOW_PLAY_UI_BACKDROP" : "true",
        "VOLUME_LEVEL" : "75",
        "PLAY_HIDE_CHANNEL_CHAT" : "false",
        "PLAY_HIDE_CHANNEL_FRAME" : "true",
        "PLAY_ROLE_QUEUE_DPS" : "false",
        "PLAY_ROLE_QUEUE_HEALER" : "false"
        }
    ;

    const textToString = JSON.stringify(text, null, 2);

    var t = new Blob([textToString], { type: "application/json"});

    c.href = window.URL.createObjectURL(t);
    c.click();
    }

    init()
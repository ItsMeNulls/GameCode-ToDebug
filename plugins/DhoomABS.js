//=============================================================================
// DhoomABS.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_ABS = true;

var Dhoom = Dhoom || {};
Dhoom.ABS = Dhoom.ABS || {};

/*:
 * @plugindesc Dhoom ABS v3.0c
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 *
 * @param DEBUG
 * @desc Show console debug (true/false)
 * @default false
 *
 * @param Switch ID
 * @desc Switch ID to activate DABS
 * @default 1
 * 
 * @param =====Number Graphic=====
 *
 * @param Damage Filename
 * @desc Damage graphic filename, put it in img/system/
 * @default dabs damage
 *
 * @param Damage Critical Filename
 * @desc Damage graphic filename, put it in img/system/
 * @default dabs damage critical
 *
 * @param Heal Filename
 * @desc Heal graphic filename, put it in img/system/	
 * @default dabs heal
 * 
 * @param =====Target Cursor=====
 * 
 * @param Target Cursor Filename
 * @desc Cursor filename, put it in img/system/
 * @default dabs attack cursor
 * 
 * @param Target Cursor Anchor
 * @desc Anchor point, from 0 to 1. [x ,y]
 * @default [0.5, 0.5]
 * 
 * @param Target Cursor Move Speed
 * @desc Movement speed. [initial speed, max speed, increment speed]
 * @default [1, 5, 0.1]
 * 
 * @param Target Cursor Snap Radius
 * @desc Radius tile around cursor for auto snapping to enemy.
 * @default 1
 * 
 * @param Target Cursor Snap Release Duration
 * @desc Move duration for cursor to be released from snapped enemy.
 * @default 20
 * 
 * @param Target Cursor Snap Cooldown
 * @desc Cooldown duration after snap is released.
 * @default 60
 *
 * @param =====Input=====
 * @desc 
 * @default 
 * 
 * @param Switch Attack Mode Input
 * @desc a-z 0-9 escape backspace tab enter shift ctrl alt esc space pageup pagedown left up right down
 * @default ["E","B", "gamepadA"]
 * @type text[]
 *
 * @param Attack Input
 * @desc a-z 0-9 escape backspace tab enter shift ctrl alt esc space pageup pagedown left up right down
 * @default ["F", "gamepadB"]
 * @type text[]
 *
 * @param Bomb Input
 * @desc a-z 0-9 escape backspace tab enter shift ctrl alt esc space pageup pagedown left up right down
 * @default ["Q", "gamepadLB"]
 * @type text[]
 *
 * @param Potion Input
 * @desc a-z 0-9 escape backspace tab enter shift ctrl alt esc space pageup pagedown left up right down
 * @default ["R", "gamepadRB"]
 * @type text[]
 * 
 * @param Target Cursor Input
 * @desc Target Cursor input Up, Down, Left, Right. Acceptable input: a-z 0-9 escape backspace tab enter shift ctrl alt esc space pageup pagedown left up right down
 * @type struct<cursorInput>
 * @default {"up":"[\"W\",\"gamepadxup\"]","down":"[\"S\",\"gamepadxdown\"]","left":"[\"A\",\"gamepadxleft\"]","right":"[\"D\",\"gamepadxright\"]"}
 *
 * @param =====Player=====
 * @desc 
 * @default 
 * 
 * @param Player Default Attack Mode
 * @desc Default attack mode for player
 * @default ranged
 * @type select
 * @option melee
 * @option ranged
 *
 * @param Player Health Variable
 * @desc Variable ID for player health
 * @default 1
 *
 * @param Player Health Max
 * @desc Player maximum health
 * @default 100
 *
 * @param Player Health Damage Operator
 * @desc Determine wether health variable goes up or down, true = Up, false = Down
 * @default true
 *
 * @param Player HP Regeneration
 * @desc HP regeneration per second
 * @default 1
 *
 * @param Player Attack Damage
 * @desc Event damage [Min, Max]
 * @default [5, 15]
 *
 * @param Player Critical Chance
 * @desc Critical chance in percentage
 * @default 10
 *
 * @param Player Critical Multiplier
 * @desc Critical damage multiplier
 * @default 2.0
 *
 * @param Player Attack SE
 * @desc SE that will be played when attacking, filename | volume | pitch | pan
 * @default sword5 | 90 | 100 | 0
 *
 * @param Player Attack Frequency
 * @desc How long to wait in frame between each attack
 * @default 15
 *
 * @param Player Attack Knockback Power
 * @desc How many tiles the knockback power is
 * @default 1
 *
 * @param Player Attack Knockback Duration
 * @desc How many frames that the knockback effect last.
 * @default 300
 *
 * @param Player Attack Knockback Animation
 * @desc Animation that will be played after knockbacked
 * @default 122
 *
 * @param =====Bullet=====
 * @desc 
 * @default 
 *
 * @param Player Bullet Damage
 * @desc Event damage [Min, Max]
 * @default [5, 15]
 *
 * @param Player Bullet Critical Chance
 * @desc Critical chance in percentage
 * @default 10
 *
 * @param Player Bullet Critical Multiplier
 * @desc Critical damage multiplier
 * @default 2.0
 *
 * @param Player Bullet SE
 * @desc SE that will be played when attacking, filename | volume | pitch | pan
 * @default sword5 | 90 | 100 | 0
 *
 * @param Player Bullet Frequency
 * @desc How long to wait in frame between each shot
 * @default 40
 *
 * @param Player Bullet Knockback Power
 * @desc How many tiles the knockback power is
 * @default 1
 *
 * @param Player Bullet Knockback Duration
 * @desc How many frames that the knockback effect last.
 * @default 300
 *
 * @param Player Bullet Animation
 * @desc Animation that will be played when the projectile hit the target
 * @default 1
 *
 * @param Player Bullet
 * @desc Bullet graphic filename for ranged attack, put it in img/Pictures/
 * @default bullet
 *
 * @param Player Bullet Pattern
 * @desc single, burst, circle, spiral
 * @default single
 *
 * @param Player Bullet Pattern Angle
 * @desc Max angle for circle and spiral pattern
 * @default 90
 *
 * @param Player Bullet Amount
 * @desc How many bullet to shot
 * @default 1
 *
 * @param Player Bullet Pattern Interval
 * @desc Only for burst and spiral pattern
 * @default 5
 *
 * @param Player Bullet Speed
 * @desc Bullet speed for ranged attack
 * @default 5
 *
 * @param Player Bullet Bypass Region
 * @desc Bullet will go through anything in this region, [Region ID, Region ID, ...]
 * @default [1]
 *
 * @param Player Bullet Range
 * @desc Max range that the bullet can travel. Set to 0 for unlimited range.
 * @default 3
 *
 * @param =====Bomb=====
 * @desc 
 * @default 
 *
 * @param Bomb Filename
 * @desc Bomb graphic filename, put it in img/Pictures/
 * @default bomb
 *
 * @param Bomb Item ID
 * @desc Bomb item ID
 * @default 5
 *
 * @param Bomb Radius
 * @desc Bomb explode radius
 * @default 2
 *
 * @param Bomb Damage
 * @desc Explode damage [Min, Max]
 * @default [10, 20]
 *
 * @param Bomb Fuse Time
 * @desc Bomb fuse time in frame
 * @default 120
 *
 * @param Bomb Placed SE
 * @desc SE that will be played when bomb is placed, filename | volume | pitch | pan
 * @default blow2 | 90 | 120 | 0
 *
 * @param Bomb Explode Animation
 * @desc Explode animation ID
 * @default 66
 *
 * @param Bomb Event Animation
 * @desc Animation ID that will be played to events that are caught in the explosion.
 * @default 1
 *
 * @param =====Bomb Countdown=====
 * @desc 
 * @default 
 *
 * @param Bomb Countdown Rect
 * @desc Countdown text position and size [x, y, width, height]
 * @default [0, 0, 64, 32]
 *
 * @param Bomb Countdown Text
 * @desc Countdown text, %1 = Second, %2 = Milisecond, %3 = Frame
 * @default %1.%2
 *
 * @param Bomb Countdown Text Alignment
 * @desc Text alignment, left | center | right
 * @default center
 *
 * @param Bomb Countdown Font Name
 * @desc Font name, leave empty if you want to use the default font.
 * @default 
 *
 * @param Bomb Countdown Font Size
 * @desc Font size
 * @default 11
 *
 * @param Bomb Countdown Font Color
 * @desc Font color
 * @default #FFFFFF
 *
 * @param Bomb Countdown Font Outline Width
 * @desc Font outline width
 * @default 0
 *
 * @param Bomb Countdown Font Outline Color
 * @desc Font outline color
 * @default #000000
 *
 * @param Bomb Countdown Font Bold
 * @desc Font bold
 * @default false
 *
 * @param Bomb Countdown Font Italic
 * @desc Font italic
 * @default false
 *
 * @param =====Potion=====
 * @desc 
 * @default 
 *
 * @param Potion Item ID
 * @desc Potion Item ID
 * @default 1
 *
 * @param Potion Heal Value
 * @desc How much does the potions heal [Min, Max]
 * @default [30, 30]
 *
 * @param Potion Animation ID
 * @desc Animation ID that will be played when using potion
 * @default 41
 *
 * @param =====HUD=====
 * @desc 
 * @default 
 *
 * @param HUD Hover Mouse Cursor
 * @desc TDDP MouseSystemEx required
 * @default select
 *
 * @param HUD Hover Color
 * @desc Tone color when hovered [r, g, b, gray]
 * @default [51, 51, 51, 0]
 *
 * @param HUD HP Bar Position
 * @desc HP Bar position [x, y]
 * @default [32, 24]
 *
 * @param HUD HP Bar Back
 * @desc HP Bar back filename, put it in img/system/
 * @default dabs hud hp back
 *
 * @param HUD HP Bar Fill
 * @desc HP Bar fill filename, put it in img/system/
 * @default dabs hud hp fill
 *
 * @param HUD HP Bar Fill Position
 * @desc HP Bar fill position [x, y]
 * @default [0, 0]
 *
 * @param HUD HP Bar Text
 * @desc %1 = Current HP, %2 = Max HP
 * @default %1 / %2
 *
 * @param HUD HP Bar Text Rect
 * @desc Text position and size [x, y, width, heigh]
 * @default [85, 6, 188, 24]
 *
 * @param HUD HP Bar Text Alignment
 * @desc Text alignment, left | center | right
 * @default right
 *
 * @param HUD HP Bar Font Name
 * @desc Font name, leave empty if you want to use the default font.
 * @default 
 *
 * @param HUD HP Bar Font Size
 * @desc Font size
 * @default 18
 *
 * @param HUD HP Bar Font Color
 * @desc Font color
 * @default #FFFFFF
 *
 * @param HUD HP Bar Font Outline Width
 * @desc Font outline width
 * @default 1
 *
 * @param HUD HP Bar Font Outline Color
 * @desc Font outline color
 * @default #000000
 *
 * @param HUD HP Bar Font Bold
 * @desc Font bold
 * @default false
 *
 * @param HUD HP Bar Font Italic
 * @desc Font italic
 * @default false
 *
 * @param HUD Attack Filename
 * @desc HUD Attack filename, leave empty if not used. Melee, Ranged
 * @default dabs hud attack melee, dabs hud attack ranged
 *
 * @param HUD Attack Position
 * @desc Position [x, y]
 * @default [32, 64]
 * 
 * @param HUD Bomb Visibility
 * @desc Bomb button visibility, when set to false, the button only be visible when the player has the item.
 * @default true
 * 
 * @param HUD Bomb Disabled Tone
 * @desc Button tone when the player doesn't have the item. [R, G, B, Gray]
 * @default [0, 0, 0, 255]
 *
 * @param HUD Bomb Filename
 * @desc HUD bomb filename, leave empty if not used
 * @default dabs hud bomb
 *
 * @param HUD Bomb Position
 * @desc Position [x, y]
 * @default [126, 64]
 *
 * @param HUD Bomb Text
 * @desc %1 = Total Item
 * @default %1
 *
 * @param HUD Bomb Text Rect
 * @desc Text position and size [x, y, width, heigh]
 * @default [55, 51, 22, 21]
 *
 * @param HUD Bomb Text Alignment
 * @desc Text alignment, left | center | right
 * @default center
 *
 * @param HUD Bomb Font Name
 * @desc Font name, leave empty if you want to use the default font.
 * @default 
 *
 * @param HUD Bomb Font Size
 * @desc Font size
 * @default 11
 *
 * @param HUD Bomb Font Color
 * @desc Font color
 * @default #FFFFFF
 *
 * @param HUD Bomb Font Outline Width
 * @desc Font outline width
 * @default 0
 *
 * @param HUD Bomb Font Outline Color
 * @desc Font outline color
 * @default #000000
 *
 * @param HUD Bomb Font Bold
 * @desc Font bold
 * @default false
 *
 * @param HUD Bomb Font Italic
 * @desc Font italic
 * @default false
 * 
 * @param HUD Potion Visibility
 * @desc Potion button visibility, when set to false, the button only be visible when the player has the item.
 * @default true
 * 
 * @param HUD Potion Disabled Tone
 * @desc Button tone when the player doesn't have the item. [R, G, B, Gray]
 * @default [0, 0, 0, 255]
 *
 * @param HUD Potion Filename
 * @desc HUD potion filename, Leave empty if not used
 * @default dabs hud potion
 *
 * @param HUD Potion Position
 * @desc Position [x, y]
 * @default [220, 64]
 *
 * @param HUD Potion Text
 * @desc %1 = Total Item
 * @default %1
 *
 * @param HUD Potion Text Rect
 * @desc Text position and size [x, y, width, heigh]
 * @default [55, 51, 22, 21]
 *
 * @param HUD Potion Text Alignment
 * @desc Text alignment, left | center | right
 * @default center
 *
 * @param HUD Potion Font Name
 * @desc Font name, leave empty if you want to use the default font.
 * @default 
 *
 * @param HUD Potion Font Size
 * @desc Font size
 * @default 11
 *
 * @param HUD Potion Font Color
 * @desc Font color
 * @default #FFFFFF
 *
 * @param HUD Potion Font Outline Width
 * @desc Font outline width
 * @default 0
 *
 * @param HUD Potion Font Outline Color
 * @desc Font outline color
 * @default #000000
 *
 * @param HUD Potion Font Bold
 * @desc Font bold
 * @default false
 *
 * @param HUD Potion Font Italic
 * @desc Font italic
 * @default false
 *
 * @param =====Event HP Bar=====
 * @desc 
 * @default 
 *
 * @param Event HP View Range
 * @desc Maximum range to player for this to be shown
 * @default 10
 *
 * @param Event HP Position
 * @desc HP Bar position, x is auto centered. [x, y]
 * @default [0, -8]
 *
 * @param Event HP Back
 * @desc HP Bar back filename, put it in img/system/
 * @default event hp bar back
 *
 * @param Event HP Fill
 * @desc HP Bar fill filename, put it in img/system/
 * @default event hp bar fill
 *
 * @param Event HP Fill Position
 * @desc HP Bar fill position [x, y]
 * @default [0, -1]
 *
 * @param ====Default Event Parameters=====
 * @desc 
 * @default 
 * 
 * @param Movement Type
 * @desc Event movement type, see plugin help for more information.
 * @default approach-in-range
 * @type select
 * @option approach-in-range
 * @option maintain-distance
 * @option random-shoot
 * @option random-shoot-angle
 * @option random-shoot-player
 * @option none
 *		
 * @param Max HP
 * @desc Event max hp
 * @default 50
 *
 * @param HP Regeneration
 * @desc HP regeneration per second
 * @default 1
 *
 * @param Attack Type
 * @desc Event attack type, melee or ranged
 * @default melee
 *
 * @param Attack Range
 * @desc Event attack range in a square
 * @default 1
 *
 * @param Attack Damage
 * @desc Event damage [Min, Max]
 * @default [1, 5]
 *
 * @param Critical Chance
 * @desc Critical chance in percentage
 * @default 10
 *
 * @param Critical Multiplier
 * @desc Critical damage multiplier
 * @default 2.0
 *
 * @param Knockback Power
 * @desc How many tiles the knockback power is
 * @default 0
 *
 * @param Knockback Duration
 * @desc How many frames that the knockback effect last.
 * @default 300
 *
 * @param Knockback Animation
 * @desc Animation that will be played after knockbacked
 * @default 122
 *
 * @param Attack Bullet
 * @desc Bullet graphic filename for ranged attack, put it in img/pictures/
 * @default bullet
 *
 * @param Bullet Pattern
 * @desc single, burst, circle, spiral, laser, homing, curved
 * @default single
 *
 * @param Bullet Pattern Angle
 * @desc Max angle for circle and spiral pattern
 * @default 180
 *
 * @param Bullet Amount
 * @desc How many bullet to shot
 * @default 1
 *
 * @param Bullet Pattern Interval
 * @desc Only for burst and spiral pattern. If the pattern is laser, this is how long the laser will last.
 * @default 5
 *
 * @param Bullet Speed
 * @desc Bullet speed for ranged attack
 * @default 5
 *
 * @param Bullet Shoot Animation
 * @desc Animation ID that will be played before shooting, set to 0 to disable
 * @default 120
 *
 * @param Bullet Bypass Region
 * @desc Bullet will go through anything in this region, [Region ID, Region ID, ...]
 * @default [1]
 *
 * @param Bullet Range
 * @desc Max range that the bullet can travel. Set to 0 for unlimited range.
 * @default 3
 * 
 * @param Bullet Tile
 * @desc For toxic and mud pattern. filename damage duration
 * @default toxicwater 1 120
 *
 * @param Attack Animation ID
 * @desc Attack animation ID
 * @default 1
 *
 * @param Attack SE
 * @desc SE that will be played when attacking, filename | volume | pitch | pan
 * @default shot2 | 90 | 100 | 0
 *
 * @param Attack Frequency
 * @desc How long to wait in frame between each attack
 * @default 15
 *
 * @param Attack Wait
 * @desc Wait time in frame after attack is performed, in this state the event will stop moving.
 * @default 10
 *
 * @param Dead Animation ID
 * @desc Dead animation ID
 * @default 67
 *
 * @param Respawn Time
 * @desc Respawn time in frame
 * @default 60
 *
 * @param Heal Target
 * @desc -1 = Disabled, 0 = Self, 1 = Self and Others, 2 = Others
 * @default -1
 *
 * @param Heal Value
 * @desc [Min, Max]
 * @default [5, 10]
 *
 * @param Heal Animation
 * @desc Targetted heal animation ID
 * @default 42
 *
 * @param Heal Cast Animation
 * @desc Caster animation ID
 * @default 51
 *
 * @param Heal Range
 * @desc Heal range
 * @default 5
 *
 * @param Heal Frequency
 * @desc How long the battler have to wait before healing again
 * @default 600
 * 
 * @param Attack Immunity
 * @desc Immunity from attack type. none, melee, ranged, both
 * @default none
 * 
 * @param =====KEY OPTION=====
 * @desc
 * 
 * @param Key Option Command
 * @desc Command term for keys option
 * @default Keys Configuration
 * 
 * @param Key Option Window
 * @desc Window setting
 * @default {"x":"328","y":"132","width":"640","height":"540","opacity":"255","padding":"18","lineHeight":"36","style":"{\"name\":\"\",\"size\":\"28\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\"}","background":"","backgroundPosition":"[0, 0]"}
 * @type struct<windowSetting>
 * 
 * @param Key Option Terms
 * @desc Command terms for keys
 * @default {"dabsswitch":"Switch Attack Mode","dabsattack":"Attack/Shoot","dabsbomb":"Drop Bomb","dabspotion":"Use Potion","up":"Move Up","down":"Move Down","left":"Move Left","right":"Move Right","dabspointerup":"Pointer Up","dabspointerdown":"Pointer Down","dabspointerleft":"Pointer Left","dabspointerright":"Pointer Right","dabsmenu":"Open Menu","reset":"Reset All Keys to Default"}
 * @type struct<optionTerm>
 * 
 * @param Remap Window
 * @desc Window setting
 * @default {"x":"328","y":"323","width":"640","height":"140","opacity":"255","padding":"18","style":"{\"name\":\"\",\"size\":\"28\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"1\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\"}","background":"","backgroundPosition":"[0, 0]","title":"{\"x\":\"0\",\"y\":\"0\",\"width\":\"604\",\"height\":\"32\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"28\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"1\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"center\\\"}\"}","value":"{\"x\":\"0\",\"y\":\"32\",\"width\":\"604\",\"height\":\"32\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"28\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"1\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"center\\\"}\"}","confirm":"{\"x\":\"0\",\"y\":\"64\",\"width\":\"201\",\"height\":\"32\",\"text\":\"Confirm\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"28\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"1\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"center\\\"}\"}","default":"{\"x\":\"201\",\"y\":\"64\",\"width\":\"201\",\"height\":\"32\",\"text\":\"Reset to Default\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"28\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"1\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"center\\\"}\"}","clear":"{\"x\":\"402\",\"y\":\"64\",\"width\":\"201\",\"height\":\"32\",\"text\":\"Clear\",\"style\":\"{\\\"name\\\":\\\"\\\",\\\"size\\\":\\\"28\\\",\\\"color\\\":\\\"#FFFFFF\\\",\\\"outlineWidth\\\":\\\"1\\\",\\\"outlineColor\\\":\\\"#000000\\\",\\\"bold\\\":\\\"false\\\",\\\"italic\\\":\\\"false\\\",\\\"align\\\":\\\"center\\\"}\"}"}
 * @type struct<remapWindowSetting>
 *
 * @help 
Boner Games © 2016 BonerGames.com - All rights reserved.
Using this plugin without written permission is not allowed.
 */

/*~struct~cursorInput:
@param up
@text Up Input
@desc Input for moving up
@type text[]
@default

@param down
@text Down Input
@desc Input for moving down
@type text[]
@default

@param left
@text Left Input
@desc Input for moving left
@type text[] 
@default

@param right
@text Right Input
@desc Input for moving right
@type text[]
@default
*/

/*~struct~windowSetting:
@param x
@text Window X
@desc Window x position.
@default 0
@type number
@min -99999
@max 99999

@param y
@text Window Y
@desc Window y position.
@default 0
@type number
@min -99999
@max 99999

@param width
@text Window Width
@desc Window width
@default 240
@type number
@min 32

@param height
@text Window Height
@desc Window height area
@default 72
@type number
@min 32

@param opacity
@text Window Opacity
@desc Window opacity
@default 0
@type number
@max 255

@param padding
@text Window Padding
@desc Window padding
@default 12
@type number
@min 0

@param lineHeight
@text Window Line Height
@desc Window line height
@default 32
@type number

@param style
@text Text Style
@desc Text style
@type struct<FontStyle>

@param background
@text Window Background
@desc Window background filename
@default 
@type file
@dir img/system/
@require

@param backgroundPosition
@text Window Background Position
@desc Background position, relative to window position [x, y]
@default [0, 0]
*/

/*~struct~remapWindowSetting:
@param x
@text Window X
@desc Window x position.
@default 0
@type number
@min -99999
@max 99999

@param y
@text Window Y
@desc Window y position.
@default 0
@type number
@min -99999
@max 99999

@param width
@text Window Width
@desc Window width
@default 240
@type number
@min 32

@param height
@text Window Height
@desc Window height area
@default 72
@type number
@min 32

@param opacity
@text Window Opacity
@desc Window opacity
@default 0
@type number
@max 255

@param padding
@text Window Padding
@desc Window padding
@default 12
@type number
@min 0

@param style
@text Text Style
@desc Text style
@type struct<FontStyle>

@param background
@text Window Background
@desc Window background filename
@default 
@type file
@dir img/system/
@require

@param backgroundPosition
@text Window Background Position
@desc Background position, relative to window position [x, y]
@default [0, 0]

@param title
@text Title Text
@desc Title text rect and style
@default
@type struct<noTextSetting>

@param value
@text Inputs Text
@desc Inputs text rect and style
@default
@type struct<noTextSetting>

@param confirm
@text Confirm Text
@desc Confirm text rect and style
@default
@type struct<textSetting>

@param default
@text Default Text
@desc Default text rect and style
@default
@type struct<textSetting>

@param clear
@text Clear Text
@desc Clear text rect and style
@default
@type struct<textSetting>
*/

/*~struct~textSetting:
@param x
@text Text X
@desc Text x position.
@default 0
@type number
@min -99999
@max 99999

@param y
@text Text Y
@desc Text y position.
@default 0
@type number
@min -99999
@max 99999

@param width
@text Text Width
@desc Text width
@default 240
@type number
@min 32

@param height
@text Text Height
@desc Text height area
@default 72
@type number
@min 32

@param text
@text Text
@desc Text

@param style
@text Text Style
@desc Text style
@type struct<FontStyleAlign>
*/

/*~struct~noTextSetting:
@param x
@text Text X
@desc Text x position.
@default 0
@type number
@min -99999
@max 99999

@param y
@text Text Y
@desc Text y position.
@default 0
@type number
@min -99999
@max 99999

@param width
@text Text Width
@desc Text width
@default 240
@type number
@min 32

@param height
@text Text Height
@desc Text height area
@default 72
@type number
@min 32

@param style
@text Text Style
@desc Text style
@type struct<FontStyleAlign>
*/

/*~struct~FontStyle:
@param name
@text Font Name
@desc Font name, leave empty if you want to use the default font.
@default 

@param size
@text Font Size
@desc Font size
@default 32
@type number
@min 1

@param color
@text Font Color
@desc Font color
@default #FFFFFF

@param outlineWidth
@text Font Outline Width
@desc Font outline width
@default 1
@type number

@param outlineColor
@text Font Outline Color
@desc Font outline color
@default #000000

@param bold
@text Font Bold
@desc Font bold
@default false
@type boolean

@param italic
@text Font Italic
@desc Font italic
@default false
@type boolean
*/

/*~struct~FontStyleAlign:
@param name
@text Font Name
@desc Font name, leave empty if you want to use the default font.
@default 

@param size
@text Font Size
@desc Font size
@default 32
@type number
@min 1

@param color
@text Font Color
@desc Font color
@default #FFFFFF

@param outlineWidth
@text Font Outline Width
@desc Font outline width
@default 1
@type number

@param outlineColor
@text Font Outline Color
@desc Font outline color
@default #000000

@param bold
@text Font Bold
@desc Font bold
@default false
@type boolean

@param italic
@text Font Italic
@desc Font italic
@default false
@type boolean

@param align
@text Alignment
@desc Text alignment
@type select
@option left
@option center
@option right
@default center
*/

/*~struct~optionTerm:
@param dabsswitch
@text Switch Attack Mode
@default Switch Attack Mode

@param dabsattack
@text Attack
@default Attack/Shoot

@param dabsbomb
@text Drop Bomb
@default Drop Bomb

@param dabspotion
@text Use Potion
@default Use Potion

@param up
@text Move Up
@default Move Up

@param down
@text Move Down
@default Move Down

@param left
@text Move Left
@default Move Left

@param right
@text Move Right
@default Move Right

@param dabspointerup
@text Pointer Up
@default Pointer Up

@param dabspointerdown
@text Pointer Down
@default Pointer Down

@param dabspointerleft
@text Pointer Left
@default Pointer Left

@param dabspointerright
@text Pointer Right
@default Pointer Right

@param dabsmenu
@text Open Menu
@default Open Menu

@param reset
@text Reset All Keys to Default
@default Reset All Keys to Default
*/

var sedata,DABSBomb,DABSBullet,DABSLaser,DABSTile,DABSToxicTile,DABSMudTile,Window_KeyOptions,Window_KeyRemapOptions,Sprite_DABSBombBullet,Sprite_DABSTiles,Sprite_DABSDamage,Sprite_DABSHeal,Sprite_DABSCursor,Spriteset_DABSBullets,Spriteset_DABSBombs,Spriteset_DABSTiles,Spriteset_DABSHUD;(function() {
var _0xE718=[];function _0xE766(_0xE766){try{return JSON["parse"](_0xE766,function(_0xE766,_0xE7B4){try{return this["jsonParse"](_0xE7B4)}catch(e){return _0xE7B4}}["bind"](this))}catch(e){return _0xE766}}function _0xE7B4(_0xE766){return Dhoom["jsonParse"](Dhoom["Parameters"][_0xE766])}function _0xE802(_0xE766){return _0xE766["trim"]()}function _0xE850(_0xE766){return _0xE766["trim"]()}function _0xE89E(_0xE766){return _0xE766["trim"]()}function _0xE8EC(_0xE766){return _0xE766["trim"]()}function _0xE93A(_0xE766){return _0xE766["trim"]()}function _0xE988(_0xE766,_0xE718){if(_0xE718=== 0){return _0xE766}else {return Number(_0xE766)}}function _0xE9D6(_0xEA24,_0xEA72,_0xE850){var _0xE89E=0;var _0xE988=1;var _0xE93A=2;var _0xE9D6=3;var _0xE8EC=4;var _0xE802=5;var _0xE766=6;var _0xE7B4=7;if(!_0xE850["_usingCustomSize"]){return _0xE850["pos"](_0xEA24,_0xEA72)};return ((_0xEA24>= _0xE850["_ferValues"][_0xE89E]&& _0xEA24<= _0xE850["_ferValues"][_0xE8EC]&& _0xEA72== _0xE850["y"])|| (_0xEA72>= _0xE850["_ferValues"][_0xE93A]&& _0xEA72<= _0xE850["_ferValues"][_0xE766]&& _0xEA24== _0xE850["x"])|| (_0xEA24>= _0xE850["_ferValues"][_0xE988][0]&& _0xEA24< _0xE850["x"]&& _0xEA72>= _0xE850["_ferValues"][_0xE988][1]&& _0xEA72< _0xE850["y"])|| (_0xEA24> _0xE850["x"]&& _0xEA24<= _0xE850["_ferValues"][_0xE9D6][0]&& _0xEA72>= _0xE850["_ferValues"][_0xE9D6][1]&& _0xEA72< _0xE850["y"])|| (_0xEA24>= _0xE850["_ferValues"][_0xE7B4][0]&& _0xEA24< _0xE850["x"]&& _0xEA72> _0xE850["y"]&& _0xEA72<= _0xE850["_ferValues"][_0xE7B4][1])|| (_0xEA24> _0xE850["x"]&& _0xEA24<= _0xE850["_ferValues"][_0xE802][0]&& _0xEA72> _0xE850["y"]&& _0xEA72<= _0xE850["_ferValues"][_0xE802][1]))}function _0xEA24(_0xE766){if(_0xE766["toLowerCase"]()["contains"]("gamepad")){return _0xE766["toLowerCase"]()};return "#"+ _0xE766["toLowerCase"]()}function _0xEA72(_0xE766){if(_0xE766["toLowerCase"]()["contains"]("gamepad")){return _0xE766["toLowerCase"]()};return "#"+ _0xE766["toLowerCase"]()}function _0xEAC0(_0xE766){if(_0xE766["toLowerCase"]()["contains"]("gamepad")){return _0xE766["toLowerCase"]()};return "#"+ _0xE766["toLowerCase"]()}function _0xEB0E(_0xE766){if(_0xE766["toLowerCase"]()["contains"]("gamepad")){return _0xE766["toLowerCase"]()};return "#"+ _0xE766["toLowerCase"]()}function _0xEB5C(_0xE766){if(_0xE766["toLowerCase"]()["contains"]("gamepad")){return _0xE766["toLowerCase"]()};return "#"+ _0xE766["toLowerCase"]()}function _0xEBAA(_0xE766){if(_0xE766["toLowerCase"]()["contains"]("gamepad")){return _0xE766["toLowerCase"]()};return "#"+ _0xE766["toLowerCase"]()}function _0xEBF8(_0xE766){if(_0xE766["toLowerCase"]()["contains"]("gamepad")){return _0xE766["toLowerCase"]()};return "#"+ _0xE766["toLowerCase"]()}function _0xEC46(_0xE766){if(_0xE766["toLowerCase"]()["contains"]("gamepad")){return _0xE766["toLowerCase"]()};return "#"+ _0xE766["toLowerCase"]()}function _0xEC94(_0xE766){if(_0xE766["contains"]("dabs")){return ConfigManager["keys"][_0xE766]};if(_0xE766["contains"]("gamepad")){return ConfigManager["keys"][_0xE766]};return Dhoom["ABS"]["QuasiInput_remap"]["call"](this,_0xE766)}function _0xECE2(_0xE802){Dhoom["ABS"]["Input_updateGamepadState"]["call"](this,_0xE802);var _0xE89E=this["_gamepadStates"][_0xE802["index"]]|| [];var _0xE8EC=[];var _0xE766=_0xE802["axes"];var _0xE93A=0.5;_0xE8EC[16]= false;_0xE8EC[17]= false;_0xE8EC[18]= false;_0xE8EC[19]= false;if(!this["_gamepadRightAxis"]|| this["_gamepadRightAxis"]["length"]< 2){this["_initGamepadRightAxis"](_0xE802)};if(_0xE766[this["_gamepadRightAxis"][1]]<  -_0xE93A){_0xE8EC[16]= true}else {if(_0xE766[this["_gamepadRightAxis"][1]]> _0xE93A){_0xE8EC[17]= true}};if(_0xE766[this["_gamepadRightAxis"][0]]<  -_0xE93A){_0xE8EC[18]= true}else {if(_0xE766[this["_gamepadRightAxis"][0]]> _0xE93A){_0xE8EC[19]= true}};for(var _0xE850=16;_0xE850< _0xE8EC["length"];_0xE850++){if(_0xE8EC[_0xE850]!== _0xE89E[_0xE850]){var _0xE7B4=this["gamepadMapper"][_0xE850];if(_0xE7B4){this["_currentState"][_0xE7B4]= _0xE8EC[_0xE850]}}};this["_gamepadStates"][_0xE802["index"]][16]= _0xE8EC[16];this["_gamepadStates"][_0xE802["index"]][17]= _0xE8EC[17];this["_gamepadStates"][_0xE802["index"]][18]= _0xE8EC[18];this["_gamepadStates"][_0xE802["index"]][19]= _0xE8EC[19];this["_lastGamepadIndex"]= _0xE802["index"];this["_lastGamepad"]= _0xE802}function _0xED30(_0xE7B4){this["_gamepadRightAxis"]= [];var _0xE766=_0xE7B4["axes"];for(var _0xE802=2;_0xE802< _0xE766["length"];_0xE802++){if(this["_gamepadRightAxis"]["length"]< 2&& _0xE766[_0xE802]!== 0){this["_gamepadRightAxis"]["push"](_0xE802)}}}function _0xED7E(_0xE766){for(var _0xE7B4 in this["gamepadMapper"]){if(this["isTriggered"](this["gamepadMapper"][_0xE7B4])){this["_lastTriggered"]= this["gamepadMapper"][_0xE7B4];return true}};return Dhoom["ABS"]["Input_anyTriggered"]["call"](this,_0xE766)}function _0xEDCC(){Dhoom["ABS"]["TouchInput_clear"]["call"](this);this["_mouseX"]= 0;this["_mouseY"]= 0}function _0xEE1A(){return this["_mouseX"]}function _0xEE68(){return this["_mouseY"]}function _0xEEB6(_0xE766){Dhoom["ABS"]["TouchInput_onMouseMove"]["call"](this,_0xE766);this["_mouseX"]= Graphics["pageToCanvasX"](_0xE766["pageX"]);this["_mouseY"]= Graphics["pageToCanvasY"](_0xE766["pageY"])}function _0xEF04(){Dhoom["ABS"]["TouchInput_clear2"]["call"](this);this["_mouseRightPressed"]= false;this["_pressedRightTime"]= 0}function _0xEF52(_0xE766){Dhoom["ABS"]["TouchInput_onMouseUp"]["call"](this,_0xE766);if(_0xE766["button"]=== 2){this["_mouseRightPressed"]= false}}function _0xEFA0(){return this["_mouseRightPressed"]}function _0xEFEE(_0xE766){var _0xE7B4=Graphics["pageToCanvasX"](_0xE766["pageX"]);var _0xE802=Graphics["pageToCanvasY"](_0xE766["pageY"]);if(Graphics["isInsideCanvas"](_0xE7B4,_0xE802)){this["_mouseRightPressed"]= true};Dhoom["ABS"]["TouchInput_onRightButtonDown"]["call"](this,_0xE766)}function _0xF03C(_0xE7B4,_0xE766){Dhoom["ABS"]["Bitmap_initialize"]["call"](this,_0xE7B4,_0xE766);this["fontBold"]= false}function _0xF08A(){if(this["fontBold"]){return "Bold "+ this["fontSize"]+ "px "+ this["fontFace"]};return Dhoom["ABS"]["Bitmap_makeFontNameText"]["call"](this)}function _0xF0D8(_0xE766){this["fontFace"]= _0xE766["name"]["length"]> 0?_0xE766["name"]:"GameFont";this["fontSize"]= _0xE766["size"];this["textColor"]= _0xE766["color"];this["outlineWidth"]= _0xE766["outlineWidth"];this["outlineColor"]= _0xE766["outlineColor"];this["fontBold"]= _0xE766["bold"];this["fontItalic"]= _0xE766["italic"]}function _0xF126(_0xE7B4,_0xE802,_0xE850,_0xE766){if(this["outlineWidth"]=== 0){return};Dhoom["ABS"]["Bitmap_drawTextOutline"]["call"](this,_0xE7B4,_0xE802,_0xE850,_0xE766)}function _0xF174(_0xE766,_0xE7B4){Dhoom["ABS"]["Game_Temp_setDestination"]["call"](this,_0xE766,_0xE7B4);this["_DABSAttackTarget"]= null}function _0xF1C2(){Dhoom["ABS"]["Game_Temp_clearDestination"]["call"](this);this["_DABSAttackTarget"]= null}function _0xF210(){if(this["_DABSAttackTarget"]){if($gameSystem["isDABSActive"]()){this["_destinationX"]= this["_DABSAttackTarget"]["x"];this["_destinationY"]= this["_DABSAttackTarget"]["y"]}else {this["clearDestination"]()}};return Dhoom["ABS"]["Game_Temp_isDestinationValid"]["call"](this)}function _0xF25E(){return $gameSwitches["value"](Dhoom["ABS"]["switchId"])}function _0xF2AC(){return this["DABSParams"]("maxhp")}function _0xF2FA(){return this["_DABSHP"]}function _0xF348(_0xE766){this["_DABSHP"]= _0xE766["clamp"](0,this["DABSmhp"]);if(this["_DABSHP"]=== 0){this["DABSDead"]()}}function _0xF396(){this["_DABSRegenTick"]= 0;this["_isDABS"]= false;this["_DABSDead"]= false;this["_DABSAttackDelay"]= 0;this["_DABSAttackWait"]= 0;this["_DABSParams"]= JsonEx["makeDeepCopy"](Dhoom["ABS"]["defaultEventParams"]);this["_DABSHP"]= this["DABSmhp"];this["_DABSRespawnPos"]= [this["_x"],this["_y"]];this["_DABSHealWait"]= 0;this["_DABSKnockbackWait"]= 0;this["_DABSKnockbackAnimation"]= this["DABSParams"]("knockbackanimation");this["_DABSBulletLeft"]= 0;this["_DABSShootTarget"]= null}function _0xF3E4(_0xE766){return this["_DABSParams"][_0xE766]}function _0xF432(){return SceneManager["_scene"]["_spriteset"]["getCharacterSprite"](this)}function _0xF480(){return false}function _0xF4CE(_0xE766,_0xE89E,_0xE7B4){if(this["_DABSKnockbackWait"]> 0||  !_0xE89E){return};if(!Array["isArray"](_0xE766)){if(_0xE766=== 2|| _0xE766=== 8){_0xE766= [0,_0xE766]}else {_0xE766= [_0xE766,0]}};this["_DABSKnockbackWait"]= _0xE7B4;var _0xE850=this["isDirectionFixed"]();this["setDirectionFix"](true);for(var _0xE802=0;_0xE802< _0xE89E;_0xE802++){this["moveDiagonally"](_0xE766[0],_0xE766[1])};this["setDirectionFix"](_0xE850)}function _0xF51C(){this["_DABSKnockbackWait"]--;if(!this["isAnimationPlaying"]()&& this["_DABSKnockbackWait"]> 0){this["requestAnimation"](this["_DABSKnockbackAnimation"])}}function _0xF56A(){return this["_DABSDead"]}function _0xF5B8(){this["_DABSDead"]= true;this["_DABSShootAfterAnim"]= false}function _0xF606(){return this["DABShp"]/ this["DABSmhp"]}function _0xF654(){return !$gameMap["isEventRunning"]()&& this["_DABSAttackDelay"]=== 0 &&  !this["_DABSShootAfterAnim"] && (this["DABSParams"]("type")=== "ranged"|| this["DABSAdjacentToTarget"]()) &&  !this["_DABSBulletLeft"]}function _0xF6A2(_0xE850){if(this["DABSTurnToTarget"]()&& _0xE850&&  !Array["isArray"](_0xE850)){this["turnTowardCharacter"](_0xE850)};if(this["DABSParams"]("type")=== "melee"){this["_DABSAttackDelay"]= this["_DABSParams"]["frequency"];this["_DABSAttackWait"]= this["_DABSParams"]["wait"];var _0xE802;if(this["DABSTurnToTarget"]()&& this["isDirectionFixed"]()){_0xE802= this["direction"]();this["setDirectionFix"](false);if(_0xE850){this["turnTowardCharacter"](_0xE850)}};AudioManager["playSe"](this["DABSParams"]("se"));if(_0xE850&& _0xE850["DABSParams"]("immunity")!== "melee"&& _0xE850["DABSParams"]("immunity")!== "both"){var _0xE766=this["DABSDetermineCriticalAttack"]();var _0xE7B4=this["DABSParams"]("damage")[0]+ Math["randomInt"](this["DABSParams"]("damage")[1]- this["DABSParams"]("damage")[0]);if(_0xE766){_0xE7B4*= this["DABSParams"]("critmultiplier")};_0xE7B4= Math["floor"](_0xE7B4);_0xE850["DABSTakeDamage"](_0xE7B4,_0xE766,this["DABSParams"]("attackanim"));_0xE850["DABSKnockback"](this["direction"](),this["DABSParams"]("knockbackpower"),this["DABSParams"]("knockbackduration"))};if(_0xE802){this["setDirection"](_0xE802);this["setDirectionFix"](true)}}else {this["_DABSShootAfterAnim"]= true;if(Array["isArray"](_0xE850)){this["_DABSShootTarget"]= _0xE850}else {this["_DABSShootTarget"]= _0xE850["constructor"]["name"]=== "Game_Event"?_0xE850["eventId"]():0};this["requestAnimation"](this["DABSParams"]("bulletanim"))}}function _0xF6F0(_0xE766){if(Array["isArray"](_0xE766)){return _0xE766};if(_0xE766=== 0){return $gamePlayer};if(_0xE766){return $gameMap["event"](_0xE766)}}function _0xF73E(){this["_DABSShootAfterAnim"]= false;this["_DABSBulletProp"]= {};var _0xE9D6=this["getDABSTarget"](this["_DABSShootTarget"]);var _0xE89E,_0xE802,_0xE850;if(Array["isArray"](_0xE9D6)){_0xE802= _0xE9D6[0];_0xE850= _0xE9D6[1]}else {_0xE802= _0xE9D6["_realX"]- this["_realX"];_0xE850= _0xE9D6["_realY"]- this["_realY"]};var _0xE766=this["DABSParams"]("bulletamount");var _0xE7B4=Math["atan2"](_0xE850,_0xE802)* (180/ Math["PI"]);var _0xE8EC=this["DABSParams"]("bulletangle");var _0xE93A=_0xE8EC=== 360?_0xE766:_0xE766- 1;var _0xE988=this["DABSParams"]("bulletpattern");if(_0xE988=== "homing"&& Array["isArray"](_0xE9D6)){_0xE988= "burst"};switch(_0xE988){case "single":this["DABSShoot"](String(_0xE7B4));break;case "burst":this["_DABSBulletWait"]= this["DABSParams"]("bulletinterval");this["_DABSBulletLeft"]= this["DABSParams"]("bulletamount");this["_DABSBulletDir"]= [String(_0xE7B4)];break;case "circle":for(_0xE89E= 0;_0xE89E< _0xE766;_0xE89E++){this["DABSShoot"](String(_0xE7B4- _0xE8EC/ 2+ _0xE8EC/ _0xE93A* _0xE89E))};break;case "spiral":this["_DABSBulletWait"]= this["DABSParams"]("bulletinterval");this["_DABSBulletLeft"]= _0xE766;this["_DABSBulletDir"]= [];for(_0xE89E= 0;_0xE89E< _0xE766;_0xE89E++){this["_DABSBulletDir"]["push"](String(_0xE7B4- _0xE8EC/ 2+ _0xE8EC/ _0xE93A* _0xE89E))};break;case "laser":this["DABSShoot"]();break;case "homing":this["_DABSBulletWait"]= this["DABSParams"]("bulletinterval");this["_DABSBulletLeft"]= this["DABSParams"]("bulletamount");this["_DABSBulletDir"]= [10];break;case "curved":this["_DABSBulletWait"]= this["DABSParams"]("bulletinterval");this["_DABSBulletLeft"]= this["DABSParams"]("bulletamount");this["_DABSBulletProp"]["angle"]= this["DABSParams"]("bulletangle");this["_DABSBulletProp"]["curved"]= true;this["_DABSBulletDir"]= [String(_0xE7B4)];break;case "toxic":this["_DABSBulletWait"]= this["DABSParams"]("bulletinterval");this["_DABSBulletLeft"]= this["DABSParams"]("bulletamount");this["_DABSBulletProp"]["angle"]= this["DABSParams"]("bulletangle");this["_DABSBulletProp"]["toxic"]= true;this["_DABSBulletDir"]= [String(_0xE7B4)];break;case "mud":this["_DABSBulletWait"]= this["DABSParams"]("bulletinterval");this["_DABSBulletLeft"]= this["DABSParams"]("bulletamount");this["_DABSBulletProp"]["angle"]= this["DABSParams"]("bulletangle");this["_DABSBulletProp"]["mud"]= true;this["_DABSBulletDir"]= [String(_0xE7B4)];break}}function _0xF78C(_0xE850){var _0xE93A=this["getDABSTarget"](this["_DABSShootTarget"]);if(this["DABSTurnToTarget"]()&& _0xE93A){if(Array["isArray"](_0xE93A)){var _0xE802=0;if(_0xE93A[0]> 0){_0xE802= 6};if(_0xE93A[0]< 0){_0xE802= 4};if(_0xE93A[1]> 0){_0xE802= 2};if(_0xE93A[1]< 0){_0xE802= 8};this["setDirection"](_0xE802)}else {this["turnTowardCharacter"](_0xE93A)}};AudioManager["playSe"](this["DABSParams"]("se"));var _0xE766=this["DABSDetermineCriticalAttack"]();var _0xE89E=this["DABSParams"]("damage")[0]+ Math["randomInt"](this["DABSParams"]("damage")[1]- this["DABSParams"]("damage")[0]);if(_0xE766){_0xE89E*= this["DABSParams"]("critmultiplier")};_0xE89E= Math["floor"](_0xE89E);if(this["DABSParams"]("bulletpattern")=== "laser"){$gameMap["DABSCreateLaser"](this["DABSParams"]("bullet"),this,_0xE89E,_0xE93A,_0xE766,this["DABSParams"]("bulletregion"),this["DABSParams"]("bulletinterval"));this["_DABSAttackDelay"]= this["_DABSParams"]["frequency"]+ this["DABSParams"]("bulletinterval");this["_DABSAttackWait"]= this["_DABSParams"]["wait"]}else {var _0xE7B4=this["_DABSBulletProp"]["curved"]?this["_DABSBulletProp"]["angle"]:false;var _0xE988=this["_DABSBulletProp"]["toxic"];var _0xE8EC=this["_DABSBulletProp"]["mud"];$gameMap["DABSCreateBullet"](this["DABSParams"]("bullet"),this,this["DABSParams"]("bulletspeed"),_0xE850,_0xE89E,_0xE93A,true,_0xE766,this["DABSParams"]("bulletregion"),this["DABSParams"]("bulletrange"),_0xE7B4,_0xE988,_0xE8EC);if(this["_DABSBulletLeft"]<= 0){this["_DABSAttackDelay"]= this["_DABSParams"]["frequency"];this["_DABSAttackWait"]= this["_DABSParams"]["wait"]}}}function _0xF7DA(){this["_DABSBulletWait"]--;if(this["_DABSBulletWait"]<= 0){this["_DABSBulletWait"]= this["DABSParams"]("bulletinterval");this["_DABSBulletLeft"]--;var _0xE766=this["_DABSBulletDir"][this["_DABSBulletLeft"]]?this["_DABSBulletDir"][this["_DABSBulletLeft"]]:this["_DABSBulletDir"][0];this["DABSShoot"](_0xE766)}}function _0xF828(){return this["DABSParams"]("critchance")>= Math["randomInt"](100)}function _0xF876(){return false}function _0xF8C4(){return true}function _0xF912(){return this["_DABSAttackWait"]> 0}function _0xF960(){Dhoom["ABS"]["Game_Character_update"]["call"](this);if(this["isDABSEvent"]()){this["updateDABS"]()}}function _0xF9AE(){if(this["_DABSShootAfterAnim"]){if(this["DABSParams"]("bulletanim")=== 0||  !this["isAnimationPlaying"]()|| (this["_animationId"]!== this["DABSParams"]("bulletanim")&&  !this["getSprite"]()["isAnimationIdPlaying"](this["DABSParams"]("bulletanim")))){this["DABSStartRangeAttack"]()}else {var _0xE7B4=this["getDABSTarget"](this["_DABSShootTarget"]);if(this["DABSTurnToTarget"]()&& _0xE7B4){if(Array["isArray"](_0xE7B4)){var _0xE766=0;if(_0xE7B4[0]> 0){_0xE766= 6};if(_0xE7B4[0]< 0){_0xE766= 4};if(_0xE7B4[1]> 0){_0xE766= 2};if(_0xE7B4[1]< 0){_0xE766= 8};this["setDirection"](_0xE766)}else {this["turnTowardCharacter"](_0xE7B4)}};this["_DABSAttackWait"]= 2}};if(this["_DABSBulletLeft"]> 0){this["updateDABSShoot"]()};if(this["_DABSKnockbackWait"]> 0){this["updateDABSKnockback"]()};this["DABSUpdateRegeneration"]();this["DABSUpdateMoveSpeed"]()}function _0xF9FC(){this["_erased"]= false;this["_DABSDead"]= false;this["_DABSHP"]= this["DABSmhp"];this["setPosition"](this["_DABSRespawnPos"][0],this["_DABSRespawnPos"][1])}function _0xFA4A(){if(!this["isDABSDead"]()){this["_DABSRegenTick"]++;if(this["_DABSRegenTick"]>= 60){this["_DABSRegenTick"]= 0;this["DABShp"]+= this["DABSParams"]("hpregen")}}}function _0xFA98(_0xE802,_0xE7B4,_0xE766){this["DABShp"]-= _0xE802;this["DABShp"]= this["DABShp"]["clamp"](0,this["DABSmhp"]);this["_DABSDamageTaken"]= _0xE802;this["_DABSDamageCritical"]= _0xE7B4;this["requestAnimation"](_0xE766)}function _0xFAE6(_0xE802,_0xE850,_0xE7B4,_0xE766){if(this["_DABSMoveSpeed"]){if(this["_DABSMoveSpeed"][3]=== _0xE766){return};this["_moveSpeed"]= this["_DABSMoveSpeed"][4];this["_DABSMoveSpeed"]= null};this["_DABSMoveSpeed"]= [_0xE802,_0xE850,_0xE7B4,_0xE766,this["_moveSpeed"]];this["_moveSpeed"]= (this["_moveSpeed"]+ _0xE7B4)["clamp"](1,6)}function _0xFB34(){if(this["_DABSMoveSpeed"]){if(this["_DABSMoveSpeed"][3]["_name"]){if(Math["floor"](this["_realX"])!== this["_DABSMoveSpeed"][0]|| Math["floor"](this["_realY"])!== this["_DABSMoveSpeed"][1]){this["_moveSpeed"]= this["_DABSMoveSpeed"][4];this["_DABSMoveSpeed"]= null}}else {this["_moveSpeed"]= this["_DABSMoveSpeed"][4];this["_DABSMoveSpeed"]= null}}}function _0xFB82(){Dhoom["ABS"]["Game_Event_setupPageSettings"]["call"](this);if(this["_lastDABSPage"]!== this["page"]()){this["DABSResetParams"]();this["DABSScanNote"]()}}function _0xFBD0(){this["_lastDABSPage"]= this["page"]();Game_Character["prototype"]["DABSResetParams"]["call"](this)}function _0xFC1E(){var _0xE850=this["page"]();var _0xE7B4=false;for(var _0xE802=0;_0xE802< _0xE850["list"]["length"];_0xE802++){var _0xE766=_0xE850["list"][_0xE802];if(_0xE766["code"]=== 108|| _0xE766["code"]=== 408){if(_0xE766["parameters"][0]["toLowerCase"]()=== "<dabs>"){_0xE7B4= true;this["_isDABS"]= true}else {if(_0xE766["parameters"][0]["toLowerCase"]()=== "</dabs>"){_0xE7B4= false}else {if(_0xE7B4){var _0xE89E=_0xE766["parameters"][0]["toLowerCase"]()["split"](" ");switch(_0xE89E[0]){case "movementtype":this["_DABSParams"]["movement"]= _0xE89E[1]["toLowerCase"]();break;case "maxhp":this["_DABSParams"]["maxhp"]= Number(_0xE89E[1]);this["_DABSHP"]= this["DABSmhp"];break;case "hpregen":this["_DABSParams"]["hpregen"]= Number(_0xE89E[1]);break;case "type":if(_0xE89E[1]=== "melee"|| _0xE89E[1]=== "ranged"){this["_DABSParams"]["type"]= _0xE89E[1]};break;case "range":this["_DABSParams"]["range"]= Number(_0xE89E[1]);break;case "se":this["_DABSParams"]["se"]["name"]= _0xE89E[1];this["_DABSParams"]["se"]["volume"]= _0xE89E[2];this["_DABSParams"]["se"]["pitch"]= _0xE89E[3];this["_DABSParams"]["se"]["pan"]= _0xE89E[4];this["_DABSParams"]["bulletse"]= this["_DABSParams"]["se"];break;case "bullet":this["_DABSParams"]["bullet"]= _0xE89E[1];break;case "bulletspeed":this["_DABSParams"]["bulletspeed"]= Number(_0xE89E[1]);break;case "bulletregion":this["_DABSParams"]["bulletregion"]= eval(_0xE766["parameters"][0]["toLowerCase"]()["replace"]("bulletregion",""));break;case "bulletrange":this["_DABSParams"]["bulletrange"]= Number(_0xE89E[1]);break;case "bullettile":this["_DABSParams"]["bullettile"]= [];this["_DABSParams"]["bullettile"][0]= _0xE89E[1];this["_DABSParams"]["bullettile"][1]= Number(_0xE89E[2]);this["_DABSParams"]["bullettile"][2]= Number(_0xE89E[3]);break;case "critchance":this["_DABSParams"]["critchance"]= Number(_0xE89E[1]);this["_DABSParams"]["bulletcritchance"]= this["_DABSParams"]["critchance"];break;case "critmultiplier":this["_DABSParams"]["critmultiplier"]= Number(_0xE89E[1]);this["_DABSParams"]["bulletcritmult"]= this["_DABSParams"]["critmultiplier"];break;case "damage":this["_DABSParams"]["damage"]= [Number(_0xE89E[1]),Number(_0xE89E[2])];this["_DABSParams"]["bulletdamage"]= this["_DABSParams"]["damage"];break;case "attackanim":this["_DABSParams"]["attackanim"]= Number(_0xE89E[1]);break;case "frequency":this["_DABSParams"]["frequency"]= Number(_0xE89E[1]);this["_DABSParams"]["bulletfrequency"]= this["_DABSParams"]["frequency"];break;case "wait":this["_DABSParams"]["wait"]= Number(_0xE89E[1]);break;case "deadanim":this["_DABSParams"]["deadanim"]= Number(_0xE89E[1]);break;case "respawn":if(["a","b","c","d"]["contains"](_0xE89E[1])){this["_DABSParams"]["respawn"]= _0xE89E[1]}else {this["_DABSParams"]["respawn"]= Number(_0xE89E[1])};break;case "healtarget":this["_DABSParams"]["healtarget"]= Number(_0xE89E[1]);break;case "healanim":this["_DABSParams"]["healanim"]= Number(_0xE89E[1]);break;case "healcast":this["_DABSParams"]["healcast"]= Number(_0xE89E[1]);break;case "healrange":this["_DABSParams"]["healrange"]= Number(_0xE89E[1]);break;case "healfreq":this["_DABSParams"]["healfreq"]= Number(_0xE89E[1]);break;case "knockbackpower":this["_DABSParams"]["knockbackpower"]= Number(_0xE89E[1]);this["_DABSParams"]["bulletknockbackpower"]= Number(_0xE89E[1]);break;case "knockbackduration":this["_DABSParams"]["knockbackduration"]= Number(_0xE89E[1]);this["_DABSParams"]["bulletknockbackduration"]= Number(_0xE89E[1]);break;case "knockbackanimation":this["_DABSParams"]["knockbackanimation"]= Number(_0xE89E[1]);break;case "bulletpattern":this["_DABSParams"]["bulletpattern"]= _0xE89E[1];break;case "bulletamount":this["_DABSParams"]["bulletamount"]= Number(_0xE89E[1]);break;case "bulletinterval":this["_DABSParams"]["bulletinterval"]= Number(_0xE89E[1]);break;case "bulletshootanim":this["_DABSParams"]["bulletanim"]= Number(_0xE89E[1]);break;case "bulletangle":this["_DABSParams"]["bulletangle"]= Number(_0xE89E[1]);break;case "attackimmunity":this["_DABSParams"]["immunity"]= _0xE89E[1]["toLowerCase"]();break}}}}}};if(Dhoom["ABS"]["debug"]&& this["isDABSEvent"]()){console["log"]("DEBUG DABS: "+ this["event"]()["name"]+ ": "+ JsonEx["stringify"](this["_DABSParams"]))}}function _0xFC6C(){if(this["isDABSDead"]()){return};if($gameSystem["isDABSActive"]()&& this["isDABSEvent"]()&&  !this["_locked"]&& this["checkStop"](this["stopCountThreshold"]())){var _0xE850=this["DABSGetHealTarget"]();if(_0xE850){this["DABSHealTarget"](_0xE850)}else {if(!this["DABSIsWaiting"]()){switch(this["DABSParams"]("movement")){case "random-shoot":if(this["DABSCanAttack"]()){var _0xE8EC=[0,0];if(this["_direction"]=== 2){_0xE8EC[1]+= 32};if(this["_direction"]=== 8){_0xE8EC[1]-= 32};if(this["_direction"]=== 4){_0xE8EC[0]-= 32};if(this["_direction"]=== 6){_0xE8EC[0]+= 32};this["DABSAttack"](_0xE8EC)}else {this["moveRandom"]()};break;case "random-shoot-angle":if(this["DABSCanAttack"]()){var _0xE8EC=[Math["randomInt"](100)- Math["randomInt"](100),Math["randomInt"](100)- Math["randomInt"](100)];this["DABSAttack"](_0xE8EC)}else {this["moveRandom"]()};break;case "random-shoot-player":if(this["DABSCanAttack"]()){this["DABSAttack"]($gamePlayer)}else {this["moveRandom"]()};break;case "maintain-distance":if(this["DABSIsPlayerInRange"]()){var _0xE766=this["_x"]- $gamePlayer["_x"];var _0xE7B4=this["_y"]- $gamePlayer["_y"];var _0xE89E=this["DABSParams"]("range");if(Math["abs"](_0xE766)!== _0xE89E&& Math["abs"](_0xE7B4)!== _0xE89E){if(Math["abs"](_0xE766)> Math["abs"](_0xE7B4)){var _0xE802=_0xE766> 0?6:4;if(this["canPass"](this["_x"],this["_y"],_0xE802)){this["moveStraight"](_0xE802)}else {_0xE802= _0xE7B4> 0?2:8;if(_0xE7B4=== 0){if(this["canPass"](this["_x"],this["_y"],8)){_0xE802= 8};if(this["canPass"](this["_x"],this["_y"],2)){_0xE802= 2}};if(this["canPass"](this["_x"],this["_y"],_0xE802)){this["moveStraight"](_0xE802)}else {if(this["DABSCanAttack"]()){if(Dhoom["ABS"]["debug"]){console["log"]("DEBUG DABS: "+ this["event"]()["name"]+ ": "+ "Can Attack")};this["DABSAttack"]($gamePlayer)}}}}else {var _0xE802=_0xE7B4> 0?2:8;if(this["canPass"](this["_x"],this["_y"],_0xE802)){this["moveStraight"](_0xE802)}else {_0xE802= _0xE766> 0?6:4;if(_0xE766=== 0){if(this["canPass"](this["_x"],this["_y"],4)){_0xE802= 4};if(this["canPass"](this["_x"],this["_y"],6)){_0xE802= 6}};if(this["canPass"](this["_x"],this["_y"],_0xE802)){this["moveStraight"](_0xE802)}else {if(this["DABSCanAttack"]()){if(Dhoom["ABS"]["debug"]){console["log"]("DEBUG DABS: "+ this["event"]()["name"]+ ": "+ "Can Attack")};this["DABSAttack"]($gamePlayer)}}}}}else {if(this["DABSCanAttack"]()&& this["DABSIsPlayerInRange"]()){if(Dhoom["ABS"]["debug"]){console["log"]("DEBUG DABS: "+ this["event"]()["name"]+ ": "+ "Can Attack")};this["DABSAttack"]($gamePlayer)}}}else {this["moveTowardPlayer"]()};break;case "approach-in-range":if(this["DABSIsPlayerInRange"]()){if(this["DABSCanAttack"]()){if(Dhoom["ABS"]["debug"]){console["log"]("DEBUG DABS: "+ this["event"]()["name"]+ ": "+ "Can Attack")};this["DABSAttack"]($gamePlayer)}else {this["moveTowardPlayer"]()}}else {Dhoom["ABS"]["Game_Event_updateSelfMovement"]["call"](this)};break;default:if(this["DABSCanAttack"]()&& this["DABSIsPlayerInRange"]()){if(Dhoom["ABS"]["debug"]){console["log"]("DEBUG DABS: "+ this["event"]()["name"]+ ": "+ "Can Attack")};this["DABSAttack"]($gamePlayer)}else {Dhoom["ABS"]["Game_Event_updateSelfMovement"]["call"](this)};break}}}}else {Dhoom["ABS"]["Game_Event_updateSelfMovement"]["call"](this)}}function _0xFCBA(){return this["DABSParams"]("healtarget")>= 0&& this["_DABSHealWait"]=== 0}function _0xFD08(){if(!this["DABSCanHeal"]()){return false};if(this["DABSParams"]("healtarget")=== 0){if(!this["isDABSDead"]()&& this["DABShp"]< this["DABSmhp"]){return this}}else {var _0xE802=this["DABSParams"]("healrange");for(var _0xE850=this["_x"]- _0xE802;_0xE850< this["_x"]+ _0xE802;_0xE850++){for(var _0xE89E=this["_y"]- _0xE802;_0xE89E< this["_y"]+ _0xE802;_0xE89E++){var _0xE766=$gameMap["eventsXy"](_0xE850,_0xE89E);for(var _0xE7B4=0;_0xE7B4< _0xE766["length"];_0xE7B4++){if((this["DABSParams"]("healtarget")=== 1|| _0xE766[_0xE7B4]!== this)&& _0xE766[_0xE7B4]["isDABSEvent"]()&&  !_0xE766[_0xE7B4]["isDABSDead"]()&& _0xE766[_0xE7B4]["DABShp"]< _0xE766[_0xE7B4]["DABSmhp"]){return _0xE766[_0xE7B4]}}}}};return false}function _0xFD56(_0xE766){if(Dhoom["ABS"]["debug"]){console["log"]("DEBUG DABS: "+ this["event"]()["name"]+ ": "+ "Heal "+ _0xE766["event"]()["name"])};this["turnTowardCharacter"](_0xE766);this["requestAnimation"](this["DABSParams"]("healcast"));_0xE766["requestAnimation"](this["DABSParams"]("healanim"));var _0xE7B4=this["DABSParams"]("healvalue")[0]+ Math["randomInt"](this["DABSParams"]("healvalue")[1]- this["DABSParams"]("healvalue")[0]);_0xE766["DABShp"]+= _0xE7B4;this["_DABSHealTaken"]= _0xE7B4;this["_DABSHealWait"]= this["DABSParams"]("healfreq")}function _0xFDA4(){return this["_isDABS"]}function _0xFDF2(){Game_Character["prototype"]["DABSDead"]["call"](this);if(Dhoom["ABS"]["debug"]){console["log"]("DEBUG DABS: "+ this["event"]()["name"]+ ": "+ "Dead")}}function _0xFE40(){this["_DABSKnockbackWait"]= 0;this["getSprite"]()["stopAnimation"]();this["requestAnimation"](this["DABSParams"]("deadanim"));if(["a","b","c","d"]["contains"](this["DABSParams"]("respawn"))){if(Dhoom["ABS"]["debug"]){console["log"]("DEBUG DABS: "+ this["event"]()["name"]+ ": "+ "Self Switch "+ this["DABSParams"]("respawn")["toUpperCase"]()+ " ON")};var _0xE766=[this["_mapId"],this["_eventId"],this["DABSParams"]("respawn")["toUpperCase"]()];$gameSelfSwitches["setValue"](_0xE766,true)}else {this["_DABSRespawn"]= this["DABSParams"]("respawn");this["erase"]()}}function _0xFE8E(){var _0xE766=this["_x"]- this["DABSParams"]("range");var _0xE7B4=this["_x"]+ this["DABSParams"]("range");var _0xE802=this["_y"]- this["DABSParams"]("range");var _0xE850=this["_y"]+ this["DABSParams"]("range");return ($gamePlayer["x"]>= _0xE766&& $gamePlayer["x"]<= _0xE7B4&& $gamePlayer["y"]>= _0xE802&& $gamePlayer["y"]<= _0xE850)}function _0xFEDC(){var _0xE766=Math["abs"]($gamePlayer["_realX"]- this["_realX"]);var _0xE7B4=Math["abs"]($gamePlayer["_realY"]- this["_realY"]);return (_0xE766< 1&& _0xE7B4< 2|| _0xE7B4< 1&& _0xE766< 2)}function _0xFF2A(){if(this["isDABSDead"]()&&  !this["_erased"]){this["DABSApplyDeadAnimation"]()};if(this["_erased"]&& this["_DABSRespawn"]> 0){this["_DABSRespawn"]--;if(this["_DABSRespawn"]=== 0){this["DABSRespawn"]();return}};Game_Character["prototype"]["updateDABS"]["call"](this);if(!this["_locked"]){if(this["_DABSHealWait"]> 0){this["_DABSHealWait"]--;if(Dhoom["ABS"]["debug"]&& this["_DABSHealWait"]=== 0){console["log"]("DEBUG DABS: "+ this["event"]()["name"]+ ": "+ "Heal Refreshed")}};if(this["_DABSAttackDelay"]> 0){this["_DABSAttackDelay"]--;if(Dhoom["ABS"]["debug"]&& this["_DABSAttackDelay"]=== 0){console["log"]("DEBUG DABS: "+ this["event"]()["name"]+ ": "+ "Attack Refreshed")}};if(this["_DABSAttackWait"]> 0){this["_DABSAttackWait"]--;if(Dhoom["ABS"]["debug"]&& this["_DABSAttackWait"]=== 0){console["log"]("DEBUG DABS: "+ this["event"]()["name"]+ ": "+ "Stop Waiting")}}}}function _0xFF78(){Game_Character["prototype"]["DABSRespawn"]["call"](this);this["refresh"]();if(Dhoom["ABS"]["debug"]){console["log"]("DEBUG DABS: "+ this["event"]()["name"]+ ": "+ "Respawned")}}function _0xFFC6(){var _0xE766=this["_x"]- Dhoom["ABS"]["evHPRange"];var _0xE7B4=this["_x"]+ Dhoom["ABS"]["evHPRange"];var _0xE802=this["_y"]- Dhoom["ABS"]["evHPRange"];var _0xE850=this["_y"]+ Dhoom["ABS"]["evHPRange"];return ($gamePlayer["x"]>= _0xE766&& $gamePlayer["x"]<= _0xE7B4&& $gamePlayer["y"]>= _0xE802&& $gamePlayer["y"]<= _0xE850)}function _0x10014(){return $gameVariables["value"](Dhoom["ABS"]["plHealthVar"])}function _0x10062(_0xE766){$gameVariables["setValue"](Dhoom["ABS"]["plHealthVar"],_0xE766["clamp"](0,this["DABSmhp"]));if($gameVariables["value"](Dhoom["ABS"]["plHealthVar"])=== 0){this["DABSDead"]()}}function _0x100B0(){Dhoom["ABS"]["Game_Player_initMembers"]["call"](this);this["DABSResetParams"]();this["_DABSParams"]["maxhp"]= Dhoom["ABS"]["plHealthMax"];this["_DABSParams"]["frequency"]= Dhoom["ABS"]["plFrequency"];this["_DABSParams"]["damage"]= Dhoom["ABS"]["plDamage"];this["_DABSParams"]["critchance"]= Dhoom["ABS"]["plCritChance"];this["_DABSParams"]["critmultiplier"]= Dhoom["ABS"]["plCritMultiplier"];this["_DABSParams"]["se"]= JsonEx["makeDeepCopy"](Dhoom["ABS"]["plSE"]);this["_DABSParams"]["hpregen"]= Dhoom["ABS"]["plHPRegen"];this["_DABSParams"]["bombname"]= Dhoom["ABS"]["bombFilename"];this["_DABSParams"]["bombdamage"]= Dhoom["ABS"]["bombDamage"];this["_DABSParams"]["bombfuse"]= Dhoom["ABS"]["bombFuse"];this["_DABSParams"]["bombradius"]= Dhoom["ABS"]["bombRadius"];this["_DABSParams"]["bombexplodeanim"]= Dhoom["ABS"]["bombExplodeAnim"];this["_DABSParams"]["bombtargetanim"]= Dhoom["ABS"]["bombEventAnim"];this["_DABSParams"]["potionvalue"]= Dhoom["ABS"]["potionValue"];this["_DABSParams"]["potionanim"]= Dhoom["ABS"]["potionAnim"];this["_DABSParams"]["knockbackpower"]= Dhoom["ABS"]["plKnockbackPower"];this["_DABSParams"]["knockbackduration"]= Dhoom["ABS"]["plKnockbackDuration"];this["_DABSParams"]["knockbackanimation"]= Dhoom["ABS"]["plKnockbackAnim"];this["_DABSParams"]["type"]= Dhoom["ABS"]["plDefaultMode"];this["_DABSParams"]["bullet"]= Dhoom["ABS"]["plBulletFilename"];this["_DABSParams"]["bulletpattern"]= Dhoom["ABS"]["plBulletPattern"];this["_DABSParams"]["bulletamount"]= Dhoom["ABS"]["plBulletAmount"];this["_DABSParams"]["bulletinterval"]= Dhoom["ABS"]["plBulletInterval"];this["_DABSParams"]["bulletspeed"]= Dhoom["ABS"]["plBulletSpeed"];this["_DABSParams"]["bulletregion"]= Dhoom["ABS"]["plBulletRegion"];this["_DABSParams"]["bulletdamage"]= Dhoom["ABS"]["plBulletDamage"];this["_DABSParams"]["bulletfrequency"]= Dhoom["ABS"]["plBulletFrequency"];this["_DABSParams"]["bulletcritchance"]= Dhoom["ABS"]["plBulletCritChance"];this["_DABSParams"]["bulletcritmult"]= Dhoom["ABS"]["plBulletCritMult"];this["_DABSParams"]["bulletse"]= Dhoom["ABS"]["plBulletSE"];this["_DABSParams"]["bulletknockbackpower"]= Dhoom["ABS"]["plBulletKnockbackPower"];this["_DABSParams"]["bulletknockbackduration"]= Dhoom["ABS"]["plBulletKnockbackDuration"];this["_DABSParams"]["bulletanim"]= 0;this["_DABSParams"]["bullethitanim"]= Dhoom["ABS"]["plBulletAnim"];this["_DABSParams"]["bulletangle"]= Dhoom["ABS"]["plBulletAngle"];this["_DABSParams"]["bulletrange"]= Dhoom["ABS"]["plBulletRange"]}function _0x100FE(){return true}function _0x1014C(){return false}function _0x1019A(){Game_Character["prototype"]["updateDABS"]["call"](this);if(this["_DABSAttackDelay"]> 0){this["_DABSAttackDelay"]--};if(!$gameSystem["isDABSActive"]()|| this["isInVehicle"]()){this["_DABSKnockbackWait"]= 0;this["_DABSAttackDelay"]= 0;return};if(Input["isTriggered"]("dabsattack")&& this["DABSCanAttack"]()){var _0xE766;if(this["DABSParams"]("type")=== "ranged"){if(this["_DABSUsingAttackCursor"]){_0xE766= [$gameMap["_DABSCursorPos"][0]- this["screenX"](),$gameMap["_DABSCursorPos"][1]- this["screenY"]()]}else {_0xE766= [TouchInput["_mouseX"]- this["screenX"](),TouchInput["_mouseY"]- this["screenY"]()]}};this["DABSAttack"](_0xE766)};if(Input["isTriggered"]("dabsbomb")&& this["DABSCanPlaceBomb"]()){this["DABSPlaceBomb"]()};if(Input["isTriggered"]("dabspotion")&& this["DABSCanUsePotion"]()){this["DABSUsePotion"]()}}function _0x101E8(_0xE766){if(Dhoom["ABS"]["debug"]){console["log"]("DEBUG DABS: Player: Attacking")};if(this["DABSParams"]("type")=== "melee"){_0xE766= this["DABSAnyEventAdjacent"]()};Game_Character["prototype"]["DABSAttack"]["call"](this,_0xE766)}function _0x10236(){if(Dhoom["ABS"]["debug"]){console["log"]("DEBUG DABS: Player: Placing Bomb")};$gameParty["loseItem"]($dataItems[Dhoom["ABS"]["bombItemID"]],1,false);$gameMap["DABSCreateBomb"](this,this["DABSParams"]("bombname"),this["DABSParams"]("bombdamage"),this["DABSParams"]("bombfuse"),this["DABSParams"]("bombradius"),this["DABSParams"]("bombexplodeanim"),this["DABSParams"]("bombtargetanim"))}function _0x10284(){if(Dhoom["ABS"]["debug"]){console["log"]("DEBUG DABS: Player: Use Potion")};$gameParty["loseItem"]($dataItems[Dhoom["ABS"]["potionItemID"]],1,false);var _0xE766=this["DABSParams"]("potionvalue")[0]+ Math["randomInt"](this["DABSParams"]("potionvalue")[1]- this["DABSParams"]("potionvalue")[0]);if(Dhoom["ABS"]["plHealthOperator"]){this["DABShp"]-= _0xE766}else {this["DABShp"]+= _0xE766};this["_DABSHealTaken"]= _0xE766;this["requestAnimation"](this["DABSParams"]("potionanim"))}function _0x102D2(){this["_DABSRegenTick"]++;if(this["_DABSRegenTick"]>= 60){this["_DABSRegenTick"]= 0;if(Dhoom["ABS"]["plHealthOperator"]){this["DABShp"]-= this["DABSParams"]("hpregen")}else {this["DABShp"]+= this["DABSParams"]("hpregen")}}}function _0x10320(){return this["_DABSAttackDelay"]<= 0&&  !this["_DABSBulletLeft"]}function _0x1036E(){return $gameParty["hasItem"]($dataItems[Dhoom["ABS"]["bombItemID"]])&&  !$gameMap["DABSBombs"](this["x"],this["y"])["length"]}function _0x103BC(){return $gameParty["hasItem"]($dataItems[Dhoom["ABS"]["potionItemID"]])}function _0x1040A(){var _0xE802=this["x"];var _0xE850=this["y"];if(this["_direction"]=== 2){_0xE850++};if(this["_direction"]=== 4){_0xE802--};if(this["_direction"]=== 6){_0xE802++};if(this["_direction"]=== 8){_0xE850--};var _0xE766=$gameMap["eventsXy"](_0xE802,_0xE850);for(var _0xE7B4=0;_0xE7B4< _0xE766["length"];_0xE7B4++){if(_0xE766[_0xE7B4]["isDABSEvent"]()&&  !_0xE766[_0xE7B4]["isDABSDead"]()){return _0xE766[_0xE7B4]}}}function _0x10458(_0xE802,_0xE7B4,_0xE766){this["DABShp"]-=  !Dhoom["ABS"]["plHealthOperator"]?_0xE802:-_0xE802;this["_DABSDamageTaken"]= _0xE802;this["_DABSDamageCritical"]= _0xE7B4;this["requestAnimation"](_0xE766)}function _0x104A6(){if(this["DABSParams"]("type")=== "melee"){return Game_Character["prototype"]["DABSDetermineCriticalAttack"]["call"](this)};if(this["DABSParams"]("type")=== "ranged"){return this["DABSParams"]("bulletcritchance")>= Math["randomInt"](100)}}function _0x104F4(_0xE802,_0xE850){if($gameSystem["isDABSActive"]()&& this["DABSCanAttack"]()){var _0xE766=$gameMap["eventsXy"](_0xE802,_0xE850,true);for(var _0xE7B4=0;_0xE7B4< _0xE766["length"];_0xE7B4++){if(this["DABSCanAttack"]()&& _0xE766[_0xE7B4]["isDABSEvent"]()&&  !_0xE766[_0xE7B4]["isDABSDead"]()){if(Dhoom["ABS"]["debug"]){console["log"]("DEBUG DABS: Player: Attacking")};AudioManager["playSe"](this["DABSParams"]("type")=== "melee"?this["DABSParams"]("se"):this["DABSParams"]("bulletse"));this["_DABSAttackDelay"]= this["DABSParams"]("type")=== "melee"?this["DABSParams"]("frequency"):this["DABSParams"]("bulletfrequency");this["DABSAttack"](_0xE766[_0xE7B4]);return true}};return Dhoom["ABS"]["Game_Player_triggerTouchActionD2"]["call"](this,_0xE802,_0xE850)}else {return Dhoom["ABS"]["Game_Player_triggerTouchActionD2"]["call"](this,_0xE802,_0xE850)}}function _0x10542(_0xE7B4,_0xE766){Dhoom["ABS"]["Game_Interpreter_pluginCommand"]["call"](this,_0xE7B4,_0xE766);if(_0xE7B4["toLowerCase"]()=== "dabs"){var _0xE850,_0xE89E,_0xE802;var _0xE8EC=_0xE766[0]["toLowerCase"]()=== "player"?$gamePlayer:this["character"](Number(_0xE766[0]));if(!_0xE8EC){return};switch(_0xE766[1]["toLowerCase"]()){case "maxhp":_0xE8EC["_DABSParams"]["maxhp"]= Number(_0xE766[2]);_0xE8EC["DABShp"]= _0xE8EC["DABShp"];break;case "hpregen":_0xE8EC["_DABSParams"]["hpregen"]= Number(_0xE766[2]);break;case "type":if(_0xE766[2]=== "melee"|| _0xE766[2]=== "ranged"){_0xE8EC["_DABSParams"]["type"]= _0xE766[2]};break;case "range":_0xE8EC["_DABSParams"]["range"]= Number(_0xE766[2]);break;case "se":_0xE8EC["_DABSParams"]["se"]["name"]= _0xE766[2];_0xE8EC["_DABSParams"]["se"]["volume"]= Number(_0xE766[3]);_0xE8EC["_DABSParams"]["se"]["pitch"]= Number(_0xE766[4]);_0xE8EC["_DABSParams"]["se"]["pan"]= Number(_0xE766[5]);if(_0xE8EC!== $gamePlayer){_0xE8EC["_DABSParams"]["bulletse"]= _0xE8EC["_DABSParams"]["se"]};break;case "bullet":_0xE8EC["_DABSParams"]["bullet"]= _0xE766[2];break;case "bulletspeed":_0xE8EC["_DABSParams"]["bulletspeed"]= Number(_0xE766[2]);break;case "bulletregion":_0xE89E= _0xE766["slice"](2,_0xE766["length"]);_0xE850= "[";for(_0xE802= 0;_0xE802< _0xE89E["length"];_0xE802++){_0xE850= _0xE850+ _0xE89E[_0xE802]};_0xE8EC["_DABSParams"]["bulletregion"]= JSON["parse"](_0xE850+ "]");break;case "bulletpattern":_0xE8EC["_DABSParams"]["bulletpattern"]= _0xE766[2];break;case "bulletamount":_0xE8EC["_DABSParams"]["bulletamount"]= Number(_0xE766[2]);break;case "bulletinterval":_0xE8EC["_DABSParams"]["bulletinterval"]= Number(_0xE766[2]);break;case "critchance":_0xE8EC["_DABSParams"]["critchance"]= Number(_0xE766[2]);if(_0xE8EC!== $gamePlayer){_0xE8EC["_DABSParams"]["bulletcritchance"]= Number(_0xE766[2])};break;case "critmultiplier":_0xE8EC["_DABSParams"]["critmultiplier"]= Number(_0xE766[2]);if(_0xE8EC!== $gamePlayer){_0xE8EC["_DABSParams"]["bulletcritmult"]= Number(_0xE766[2])};break;case "damage":_0xE8EC["_DABSParams"]["damage"]= [Number(_0xE766[2]),Number(_0xE766[3])];if(_0xE8EC!== $gamePlayer){_0xE8EC["_DABSParams"]["bulletdamage"]= _0xE8EC["_DABSParams"]["damage"]};break;case "attackanim":_0xE8EC["_DABSParams"]["attackanim"]= Number(_0xE766[2]);if(_0xE8EC!== $gamePlayer){_0xE8EC["_DABSParams"]["bullethitanim"]= Number(_0xE766[2])};break;case "frequency":_0xE8EC["_DABSParams"]["frequency"]= Number(_0xE766[2]);if(_0xE8EC!== $gamePlayer){_0xE8EC["_DABSParams"]["bulletfrequency"]= Number(_0xE766[2])};break;case "wait":_0xE8EC["_DABSParams"]["wait"]= Number(_0xE766[2]);break;case "deadanim":_0xE8EC["_DABSParams"]["deadanim"]= Number(_0xE766[2]);break;case "respawn":if(["a","b","c","d"]["contains"](_0xE766[2])){_0xE8EC["_DABSParams"]["respawn"]= _0xE766[2]}else {_0xE8EC["_DABSParams"]["respawn"]= Number(_0xE766[2])};break;case "shootanim":_0xE8EC["_DABSParams"]["bulletanim"]= Number(_0xE766[2]);break;case "knockbackpower":_0xE8EC["_DABSParams"]["knockbackpower"]= Number(_0xE766[2]);if(_0xE8EC!== $gamePlayer){_0xE8EC["_DABSParams"]["bulletknockbackpower"]= Number(_0xE766[2])};break;case "knockbackduration":_0xE8EC["_DABSParams"]["knockbackduration"]= Number(_0xE766[2]);if(_0xE8EC!== $gamePlayer){_0xE8EC["_DABSParams"]["bulletknockbackduration"]= Number(_0xE766[2])};break;case "knockbackanim":_0xE8EC["_DABSParams"]["knockbackanimation"]= Number(_0xE766[2]);break;case "bulletdamage":_0xE8EC["_DABSParams"]["bulletdamage"]= [Number(_0xE766[2]),Number(_0xE766[3])];break;case "bulletfrequency":_0xE8EC["_DABSParams"]["bulletfrequency"]= Number(_0xE766[2]);break;case "bulletcritchance":_0xE8EC["_DABSParams"]["bulletcritchance"]= Number(_0xE766[2]);break;case "bulletcritmultiplier":_0xE8EC["_DABSParams"]["bulletcritmult"]= Number(_0xE766[2]);break;case "bulletse":_0xE8EC["_DABSParams"]["bulletse"]["name"]= _0xE766[2];_0xE8EC["_DABSParams"]["bulletse"]["volume"]= Number(_0xE766[3]);_0xE8EC["_DABSParams"]["bulletse"]["pitch"]= Number(_0xE766[4]);_0xE8EC["_DABSParams"]["bulletse"]["pan"]= Number(_0xE766[5]);break;case "bulletanim":_0xE8EC["_DABSParams"]["bullethitanim"]= Number(_0xE766[2]);break;case "bulletknockbackpower":_0xE8EC["_DABSParams"]["bulletknockbackpower"]= Number(_0xE766[2]);break;case "bulletknockbackduration":_0xE8EC["_DABSParams"]["bulletknockbackduration"]= Number(_0xE766[2]);break;case "bombname":_0xE8EC["_DABSParams"]["bombname"]= _0xE766[2];break;case "bombdamage":_0xE8EC["_DABSParams"]["bombdamage"]= [Number(_0xE766[2]),Number(_0xE766[3])];break;case "bombfusetime":_0xE8EC["_DABSParams"]["bombfuse"]= Number(_0xE766[2]);break;case "bombrange":_0xE8EC["_DABSParams"]["bombradius"]= Number(_0xE766[2]);break;case "bombanim":_0xE8EC["_DABSParams"]["bombexplodeanim"]= Number(_0xE766[2]);break;case "bombdamageanim":_0xE8EC["_DABSParams"]["bombtargetanim"]= Number(_0xE766[2]);break;case "potionvalue":_0xE8EC["_DABSParams"]["potionvalue"]= [Number(_0xE766[2]),Number(_0xE766[3])];break;case "potionanim":_0xE8EC["_DABSParams"]["potionanim"]= Number(_0xE766[2]);break;case "movementtype":_0xE8EC["_DABSParams"]["movement"]= _0xE766[2];break;case "bullettile":_0xE8EC["_DABSParams"]["bullettile"]= [_0xE766[2],Number(_0xE766[3]),Number(_0xE766[4])];break;case "attackimmunity":_0xE8EC["_DABSParams"]["immunity"]= _0xE766[2]["toLowerCase"]();break};_0xE8EC["_isDABS"]= true}}function _0x10590(){this["initialize"]["apply"](this,arguments)}function _0x105DE(_0xE93A,_0xE89E,_0xE766,_0xE850,_0xE8EC,_0xE802,_0xE7B4){Game_Picture["prototype"]["initialize"]["call"](this);this["_realX"]= _0xE93A["_x"];this["_realY"]= _0xE93A["_y"];this["_source"]= _0xE93A;this["_sourceX"]= _0xE93A["x"];this["_sourceY"]= _0xE93A["y"];this["_fuseTime"]= _0xE850;this["_fuseTick"]= 0;this["_damage"]= _0xE766;this["_range"]= _0xE8EC;this["_explodeAnim"]= _0xE802;this["_damageAnim"]= _0xE7B4;this["show"](_0xE89E)}function _0x1062C(_0xE766){Game_Picture["prototype"]["show"]["call"](this,_0xE766,1,this["_realX"],this["_realY"],100,100,255,0);this["updatePosition"]()}function _0x1067A(){Game_Picture["prototype"]["update"]["call"](this);if(this["_name"]){this["updatePosition"]();this["updateFuse"]()}}function _0x106C8(){var _0xE7B4=$gameMap["tileWidth"]();this["_x"]= Math["round"]((this["_realX"]- $gameMap["_displayX"])* _0xE7B4+ _0xE7B4/ 2);var _0xE766=$gameMap["tileHeight"]();this["_y"]= Math["round"]((this["_realY"]- $gameMap["_displayY"])* _0xE766+ _0xE766/ 2)}function _0x10716(){this["_fuseTick"]++;if(this["_fuseTick"]>= this["_fuseTime"]){this["_sprite"]["startAnimation"](this["_explodeAnim"]);if($gameSystem["isDABSActive"]()){var _0xE850=[];for(var _0xE89E=this["_realX"]- this["_range"];_0xE89E<= this["_realX"]+ this["_range"];_0xE89E++){for(var _0xE8EC=this["_realY"]- this["_range"];_0xE8EC<= this["_realY"]+ this["_range"];_0xE8EC++){var _0xE7B4=$gameMap["eventsXy"](_0xE89E,_0xE8EC,true)["filter"](function(_0xE766){return _0xE766["isDABSEvent"]()&&  !_0xE766["isDABSDead"]()});_0xE850= _0xE850["concat"](_0xE7B4);if(_0xE89E=== $gamePlayer["x"]&& _0xE8EC=== $gamePlayer["y"]){_0xE850["push"]($gamePlayer)}}};for(var _0xE802=0;_0xE802< _0xE850["length"];_0xE802++){var _0xE766=this["_damage"][0]+ Math["randomInt"](this["_damage"][1]- this["_damage"][0]);_0xE850[_0xE802]["DABSTakeDamage"](_0xE766,false,this["_damageAnim"])}};this["erase"]()}}function _0x10764(){return Math["floor"](this["fuseRemainingFrame"]()/ 60)}function _0x107B2(){return Math["floor"]((this["fuseRemainingFrame"]()/ 60- this["fuseRemainingSecond"]())* 100)}function _0x10800(){return this["_fuseTime"]- this["_fuseTick"]}function _0x1084E(){this["initialize"]["apply"](this,arguments)}function _0x1089C(){Game_Picture["prototype"]["initialize"]["call"](this);this["_bullet_dir"]=  -1;this["_speed"]= 0;this["_boxCollision"]= true}function _0x108EA(_0xE850,_0xE93A,_0xE988,_0xE802,_0xE9D6,_0xE89E,_0xE8EC,_0xE7B4){Game_Picture["prototype"]["show"]["call"](this,_0xE850,1,_0xE93A["screenX"](),_0xE93A["screenY"]()- 24,_0xE89E|| 100,_0xE8EC|| 100,255,0);this["_realX"]= _0xE93A["_realX"];this["_realY"]= _0xE93A["_realY"];this["_posOrigin"]= [this["_realX"],this["_realY"]];this["_realX0"]= this["_realX"];this["_realY0"]= this["_realY"];this["_speed"]= _0xE988;this["_bullet_dir"]= _0xE802;this["_source"]= _0xE93A;this["_target"]= _0xE9D6;if(_0xE93A=== _0xE9D6){this["erase"]()}else {if(_0xE802=== 9){this["_dx"]= _0xE988/ Math["sqrt"](Math["pow"]((_0xE9D6["_realX"]- _0xE93A["_realX"]),2)+ Math["pow"]((_0xE9D6["_realY"]- _0xE93A["_realY"]),2))* (_0xE9D6["_realX"]- _0xE93A["_realX"]);this["_dy"]= _0xE988/ Math["sqrt"](Math["pow"]((_0xE9D6["_realX"]- _0xE93A["_realX"]),2)+ Math["pow"]((_0xE9D6["_realY"]- _0xE93A["_realY"]),2))* (_0xE9D6["_realY"]- _0xE93A["_realY"])}else {if( typeof _0xE802=== "string"){var _0xE766=Number(_0xE802);this["_dx"]= _0xE988* Math["cos"](_0xE766* Math["PI"]/ 180);this["_dy"]= _0xE988* Math["sin"](_0xE766* Math["PI"]/ 180);if(this["_isRotate"]){this["_angle"]= _0xE766};this["_bullet_dir"]= 9;if(_0xE7B4){this["_bullet_dir"]= 11;this["_curveAngle"]= _0xE7B4;this["_oriAngle"]= _0xE766}}}}}function _0x10938(){if(this["_name"]!== ""){var _0xE988,_0xEA24;var _0xE93A=this["_realX"];var _0xE9D6=this["_realY"];switch(this["_bullet_dir"]){case 1:this["_realY"]+= this["_speed"];if(this["_isRotate"]){this["_angle"]= 270};break;case 2:this["_realX"]-= this["_speed"];if(this["_isRotate"]){this["_angle"]= 180};break;case 3:this["_realX"]+= this["_speed"];if(this["_isRotate"]){this["_angle"]= 0};break;case 4:this["_realY"]-= this["_speed"];if(this["_isRotate"]){this["_angle"]= 90};break;case 5:this["_realX"]-= this["_speed"]* 0.707;this["_realY"]+= this["_speed"]* 0.707;if(this["_isRotate"]){this["_angle"]= 225};break;case 6:this["_realX"]+= this["_speed"]* 0.707;this["_realY"]+= this["_speed"]* 0.707;if(this["_isRotate"]){this["_angle"]= 315};break;case 7:this["_realX"]-= this["_speed"]* 0.707;this["_realY"]-= this["_speed"]* 0.707;if(this["_isRotate"]){this["_angle"]= 135};break;case 8:this["_realX"]+= this["_speed"]* 0.707;this["_realY"]-= this["_speed"]* 0.707;if(this["_isRotate"]){this["_angle"]= 45};break;case 9:this["_realX"]+= this["_dx"];this["_realY"]+= this["_dy"];if(this["_isRotate"]){this["_angle"]= Math["atan2"](this["_dy"],this["_dx"])* 180/ Math["PI"]};break;case 10:_0xE988= this["_target"]["_realX"]- this["_source"]["_realX"];_0xEA24= this["_target"]["_realY"]- this["_source"]["_realY"];this["_dx"]= this["_speed"]/ Math["sqrt"](_0xE988* _0xE988+ _0xEA24* _0xEA24)* _0xE988;this["_dy"]= this["_speed"]/ Math["sqrt"](_0xE988* _0xE988+ _0xEA24* _0xEA24)* _0xEA24;this["_realX"]+= this["_dx"];this["_realY"]+= this["_dy"];if(this["_isRotate"]){this["_angle"]= Math["atan2"](this["_dy"],this["_dx"])* 180/ Math["PI"]};break;case 11:this["_speed"]+= this["_curveAngle"]/ 360/ 20;this["_oriAngle"]+= this["_curveAngle"];this["_dx"]= this["_speed"]* Math["cos"](this["_oriAngle"]* Math["PI"]/ 180);this["_dy"]= this["_speed"]* Math["sin"](this["_oriAngle"]* Math["PI"]/ 180);this["_realX"]+= this["_dx"];this["_realY"]+= this["_dy"];if(this["_isRotate"]){this["_angle"]= this["_oriAngle"]};break};var _0xE8EC=$gameMap["tileWidth"]();this["_x"]= Math["round"]((this["_realX"]- $gameMap["_displayX"])* _0xE8EC+ _0xE8EC/ 2);var _0xE89E=$gameMap["tileHeight"]();this["_y"]= Math["round"]((this["_realY"]- $gameMap["_displayY"])* _0xE89E+ _0xE89E/ 2);if(Math["round"](_0xE93A)!== Math["round"](this["_realX0"])|| Math["round"](_0xE9D6)!== Math["round"](this["_realY0"])){_0xE988= Math["round"](this["_realX"]);_0xEA24= Math["round"](this["_realY"]);if(!this["_bypassRegion"]["contains"]($gameMap["regionId"](_0xE988,_0xEA24))&&  !$gameMap["checkPassage"](_0xE988,_0xEA24,0x0f) &&  !$gameMap["isBoatPassable"](_0xE988,_0xEA24) ||  !this["isInRange"]()){if($gameMap["checkPassage"](Math["round"](_0xE93A),Math["round"](_0xE9D6),0x0f)){if(this["_isToxic"]){$gameMap["DABSCreateToxicTile"](Math["round"](_0xE93A),Math["round"](_0xE9D6),this["_source"]["DABSParams"]("bullettile")[1],this["_source"],this["_source"]["DABSParams"]("bullethitanim"),this["_source"]["DABSParams"]("bullettile")[2],this["_source"]["DABSParams"]("bullettile")[0])}else {if(this["_isMud"]){$gameMap["DABSCreateMudTile"](Math["round"](_0xE93A),Math["round"](_0xE9D6),this["_source"]["DABSParams"]("bullettile")[1],this["_source"],this["_source"]["DABSParams"]("bullettile")[2],this["_source"]["DABSParams"]("bullettile")[0])}}};this["erase"]()}else {var _0xE766=this["_boxCollision"]?this["boxCollisionPoint"](_0xE988,_0xEA24):this["collisionPoint"](_0xE988,_0xEA24);if(_0xE766){if((this["_source"]["constructor"]=== Game_Event&& _0xE766=== $gamePlayer)|| (this["_source"]=== $gamePlayer&& _0xE766["constructor"]=== Game_Event)&& _0xE766["DABSParams"]("immunity")!== "ranged"&& _0xE766["DABSParams"]("immunity")!== "both"){_0xE766["DABSTakeDamage"](this["_atk"],this["_critical"],this["_source"]["DABSParams"]("bullethitanim"));var _0xE7B4=[0,0];if(_0xE766["_realX"]> this["_realX"]){_0xE7B4[0]= 6};if(_0xE766["_realX"]< this["_realX"]){_0xE7B4[0]= 4};if(_0xE766["_realY"]> this["_realY"]){_0xE7B4[1]= 2};if(_0xE766["_realY"]< this["_realY"]){_0xE7B4[1]= 8};_0xE766["DABSKnockback"](_0xE7B4,this["_source"]["DABSParams"]("bulletknockbackpower"),this["_source"]["DABSParams"]("bulletknockbackduration"));if(this["_isToxic"]){$gameMap["DABSCreateToxicTile"](_0xE988,_0xEA24,this["_source"]["DABSParams"]("bullettile")[1],this["_source"],this["_source"]["DABSParams"]("bullethitanim"),this["_source"]["DABSParams"]("bullettile")[2],this["_source"]["DABSParams"]("bullettile")[0])}else {if(this["_isMud"]){$gameMap["DABSCreateMudTile"](_0xE988,_0xEA24,this["_source"]["DABSParams"]("bullettile")[1],this["_source"],this["_source"]["DABSParams"]("bullettile")[2],this["_source"]["DABSParams"]("bullettile")[0])}};this["erase"]()}}else {if(!this["_bypassRegion"]["contains"]($gameMap["regionId"](_0xE988,_0xEA24))){var _0xE802=$gameMap["eventsXyNt"](_0xE988,_0xEA24,true);for(var _0xE850=0;_0xE850< _0xE802["length"];_0xE850++){if(_0xE802[_0xE850]!== this["_source"]&& _0xE802[_0xE850]["isNormalPriority"]()&&  !_0xE802[_0xE850]["isDABSEvent"]()){this["erase"]();return}}}}}};if(this["_x"]<= 0|| this["_x"]>= Graphics["_width"]|| this["_y"]<= 0|| this["_y"]>= Graphics["_height"]){this["erase"]()}};Game_Picture["prototype"]["update"]["call"](this)}function _0x10986(_0xEB5C,_0xEBAA){if(this["_sprite"]){var _0xE766=this["_sprite"]["width"]/ $gameMap["tileWidth"]()+ 2;var _0xE7B4=this["_sprite"]["height"]/ $gameMap["tileHeight"]()+ 2;var _0xE988=_0xE766> _0xE7B4?_0xE766:_0xE7B4;_0xE988= Math["round"](_0xE988/ 2);var _0xE802=[];var _0xEA24,_0xEA72,_0xEAC0,_0xEB0E,_0xE9D6;for(var _0xE89E=_0xEB5C- _0xE988;_0xE89E< _0xE988+ _0xEB5C;_0xE89E++){for(var _0xE8EC=_0xEBAA- _0xE988;_0xE8EC< _0xE988+ _0xEBAA;_0xE8EC++){if(this["_source"]=== $gamePlayer){var _0xE850=$gameMap["eventsXyNt"](_0xE89E,_0xE8EC,true);for(var _0xE93A=0;_0xE93A< _0xE850["length"];_0xE93A++){if(_0xE802["contains"](_0xE850[_0xE93A])){continue};_0xE9D6= _0xE850[_0xE93A]["getSprite"]();_0xEA24= _0xE9D6["x"]- _0xE9D6["width"]* _0xE9D6["anchor"]["x"];_0xEA72= _0xE9D6["y"]- _0xE9D6["height"]* _0xE9D6["anchor"]["y"];_0xEAC0= this["_sprite"]["x"]- this["_sprite"]["width"]* this["_sprite"]["anchor"]["x"];_0xEB0E= this["_sprite"]["y"]- this["_sprite"]["height"]* this["_sprite"]["anchor"]["y"];if(_0xE850[_0xE93A]!== this["_source"]&& _0xE850[_0xE93A]["isNormalPriority"]()&& _0xE850[_0xE93A]["isDABSEvent"]()&& _0xEAC0< _0xEA24+ _0xE9D6["width"]&& _0xEAC0+ this["_sprite"]["width"]> _0xEA24&& _0xEB0E< _0xEA72+ _0xE9D6["height"]&& _0xEB0E+ this["_sprite"]["height"]> _0xEA72){return _0xE850[_0xE93A]};_0xE802["push"](_0xE850[_0xE93A])}}else {if(!_0xE802["contains"]($gamePlayer)){_0xE802["push"]($gamePlayer);_0xE9D6= $gamePlayer["getSprite"]();_0xEA24= _0xE9D6["x"]- _0xE9D6["width"]* _0xE9D6["anchor"]["x"];_0xEA72= _0xE9D6["y"]- _0xE9D6["height"]* _0xE9D6["anchor"]["y"];_0xEAC0= this["_sprite"]["x"]- this["_sprite"]["width"]* this["_sprite"]["anchor"]["x"];_0xEB0E= this["_sprite"]["y"]- this["_sprite"]["height"]* this["_sprite"]["anchor"]["y"];if(_0xEAC0< _0xEA24+ _0xE9D6["width"]&& _0xEAC0+ this["_sprite"]["width"]> _0xEA24&& _0xEB0E< _0xEA72+ _0xE9D6["height"]&& _0xEB0E+ this["_sprite"]["height"]> _0xEA72){return $gamePlayer}}}}}}}function _0x109D4(_0xE850,_0xE89E){if(this["_source"]!== $gamePlayer&& $gamePlayer["pos"](_0xE850,_0xE89E)){return $gamePlayer}else {var _0xE7B4=this["_source"];var _0xE766=$gameMap["eventsXyNt"](_0xE850,_0xE89E,true);var _0xE802=0;_0xE766["forEach"](function(_0xE766){if(_0xE766!== _0xE7B4&& _0xE766["isNormalPriority"]()){_0xE802= _0xE766}},_0xE766);if(!_0xE802){if($gameMap["boat"]()["posNt"](_0xE850,_0xE89E)){return $gameMap["boat"]()};if($gameMap["ship"]()["posNt"](_0xE850,_0xE89E)){return $gameMap["ship"]()}};return _0xE802}}function _0x10A22(){var _0xE850=this["_posOrigin"][0];var _0xE89E=this["_posOrigin"][1];var _0xE766=this["_realX"];var _0xE7B4=this["_realY"];var _0xE802=this["_range"];return (_0xE766> _0xE850- _0xE802&& _0xE766< _0xE850+ _0xE802&& _0xE7B4> _0xE89E- _0xE802&& _0xE7B4< _0xE89E+ _0xE802)}function _0x10A70(){this["initialize"]["apply"](this,arguments)}function _0x10ABE(_0xE850,_0xE89E,_0xE8EC,_0xE802){Game_Picture["prototype"]["show"]["call"](this,_0xE850,0,_0xE89E["screenX"](),_0xE89E["screenY"]()- 24,100,100,255,0);this["_target"]= _0xE8EC;this["_source"]= _0xE89E;var _0xE988=$gameMap["tileWidth"]();var _0xE93A=$gameMap["tileHeight"]();this["_startPoints"]= [_0xE89E["screenX"](),_0xE89E["screenY"]()- 24];this["calculateEndPoint"]();this["_realX"]= this["_startPoints"][0]+ $gameMap["displayX"]()* _0xE988;this["_realY"]= this["_startPoints"][1]+ $gameMap["displayY"]()* _0xE93A;var _0xE766=this["_endPoints"][0]- this["_startPoints"][0];var _0xE7B4=this["_endPoints"][1]- this["_startPoints"][1];this["_angle"]= Math["atan2"](_0xE7B4,_0xE766)* (180/ Math["PI"]);this["_opacityDur"]= 255/ _0xE802}function _0x10B0C(){this["_endPoints"]= [];var _0xE850=this["_target"]["screenX"]()- this["_startPoints"][0];var _0xE89E=this["_target"]["screenY"]()- this["_startPoints"][1];var _0xE766=Math["atan2"](_0xE89E,_0xE850)* (180/ Math["PI"]);var _0xE8EC=JsonEx["makeDeepCopy"](this["_startPoints"]);var _0xE93A=Math["cos"](_0xE766* Math["PI"]/ 180);var _0xE988=Math["sin"](_0xE766* Math["PI"]/ 180);var _0xE7B4,_0xE802;while(true){_0xE8EC[0]+= _0xE93A;_0xE8EC[1]+= _0xE988;_0xE7B4= $gameMap["canvasToMapX"](_0xE8EC[0]);_0xE802= $gameMap["canvasToMapY"](_0xE8EC[1]);if(this["_target"]["pos"](_0xE7B4,_0xE802)|| (!$gameMap["checkPassage"](_0xE7B4,_0xE802,0x0f)&&  !$gameMap["isBoatPassable"](_0xE7B4,_0xE802) &&  !this["_bypassRegion"]["contains"]($gameMap["regionId"](_0xE7B4,_0xE802)))|| _0xE7B4<= 0|| _0xE802<= 0|| _0xE7B4>= $gameMap["width"]()|| _0xE802>= $gameMap["height"]()){if(this["_target"]["pos"](_0xE7B4,_0xE802)&& this["_target"]["DABSParams"]("immunity")!== "ranged"&& this["_target"]["DABSParams"]("immunity")!== "both"){this["_target"]["DABSTakeDamage"](this["_atk"],this["_critical"],this["_source"]["DABSParams"]("attackanim"))};this["_endPoints"]= _0xE8EC;return}}}function _0x10B5A(){if(this["_name"]!== ""){var _0xE7B4=$gameMap["tileWidth"]();this["_x"]= this["_realX"]- $gameMap["displayX"]()* _0xE7B4;var _0xE766=$gameMap["tileHeight"]();this["_y"]= this["_realY"]- $gameMap["displayY"]()* _0xE766;this["_opacity"]-= this["_opacityDur"];if(this["_opacity"]=== 0){this["erase"]()}};Game_Picture["prototype"]["update"]["call"](this)}function _0x10BA8(){this["initialize"]["apply"](this,arguments)}function _0x10BF6(_0xE850,_0xE89E,_0xE802,_0xE7B4,_0xE766){Game_Picture["prototype"]["initialize"]["call"](this);this["_realX"]= _0xE850;this["_realY"]= _0xE89E;this["_source"]= _0xE802;this["_tileduration"]= _0xE766;this["show"](_0xE7B4)}function _0x10C44(_0xE766){Game_Picture["prototype"]["show"]["call"](this,_0xE766,1,this["_realX"],this["_realY"],100,100,255,0);this["updatePosition"]()}function _0x10C92(){Game_Picture["prototype"]["update"]["call"](this);if(this["_name"]){this["updatePosition"]();this["updateDuration"]()}}function _0x10CE0(){var _0xE7B4=$gameMap["tileWidth"]();this["_x"]= Math["round"]((this["_realX"]- $gameMap["_displayX"])* _0xE7B4+ _0xE7B4/ 2);var _0xE766=$gameMap["tileHeight"]();this["_y"]= Math["round"]((this["_realY"]- $gameMap["_displayY"])* _0xE766+ _0xE766/ 2)}function _0x10D2E(){this["_tileduration"]--;if(this["_tileduration"]<= 0){this["erase"]()}}function _0x10D7C(){this["initialize"]["apply"](this,arguments)}function _0x10DCA(_0xE8EC,_0xE93A,_0xE7B4,_0xE89E,_0xE766,_0xE802,_0xE850){_0x10BA8["prototype"]["initialize"]["call"](this,_0xE8EC,_0xE93A,_0xE89E,_0xE850,_0xE802);this["_animation"]= _0xE766;this["_damage"]= _0xE7B4;this["_hitDur"]= 0}function _0x10E18(){_0x10BA8["prototype"]["update"]["call"](this);if(this["_hitDur"]){this["_hitDur"]--};if(this["_name"]&& this["_hitDur"]=== 0){if(this["_source"]["constructor"]=== Game_Player){var _0xE766=$gameMap["eventsXy"](this["_realX"],this["_realY"]);for(var _0xE7B4=0;_0xE7B4< _0xE766["length"];_0xE7B4++){_0xE766[_0xE7B4]["DABSTakeDamage"](this["_damage"],false,this["_animation"]);this["_hitDur"]= 20}}else {if($gamePlayer["_x"]=== this["_realX"]&& $gamePlayer["_y"]=== this["_realY"]){$gamePlayer["DABSTakeDamage"](this["_damage"],false,this["_animation"]);this["_hitDur"]= 20}}}}function _0x10E66(){this["initialize"]["apply"](this,arguments)}function _0x10EB4(_0xE89E,_0xE8EC,_0xE850,_0xE802,_0xE766,_0xE7B4){_0x10BA8["prototype"]["initialize"]["call"](this,_0xE89E,_0xE8EC,_0xE802,_0xE7B4,_0xE766);this["_speed"]= _0xE850}function _0x10F02(){_0x10BA8["prototype"]["update"]["call"](this);if(this["_name"]){if(this["_source"]["constructor"]=== Game_Player){var _0xE766=$gameMap["eventsXy"](this["_realX"],this["_realY"]);for(var _0xE7B4=0;_0xE7B4< _0xE766["length"];_0xE7B4++){_0xE766[_0xE7B4]["DABSSlowMovement"](this["_realX"],this["_realY"],this["_speed"],this)}}else {if($gamePlayer["_x"]=== this["_realX"]&& $gamePlayer["_y"]=== this["_realY"]){$gamePlayer["DABSSlowMovement"](this["_realX"],this["_realY"],this["_speed"],this)}}}}function _0x10F50(_0xE766){Dhoom["ABS"]["Game_Map_setup"]["call"](this,_0xE766);this["_DABSCursorPos"]= this["_DABSCursorPos"]|| [Graphics["width"]/ 2,Graphics["height"]/ 2];this["DABSClearBullets"]();this["DABSClearBombs"]();this["DABSClearTiles"]()}function _0x10F9E(_0xE988,_0xEA72,_0xEAC0,_0xE89E,_0xE766,_0xEB0E,_0xE8EC,_0xE802,_0xEA24,_0xE9D6,_0xE850,_0xEB5C,_0xE93A){if($gamePlayer["isTransferring"]()||  !$gameSystem["isDABSActive"]()){return};var _0xE7B4= new _0x1084E();_0xE7B4["show"](_0xE988,_0xEA72,_0xEAC0/ 60,_0xE89E,_0xEB0E,100,100,_0xE850);_0xE7B4["_atk"]= _0xE766;_0xE7B4["_isRotate"]= _0xE8EC;_0xE7B4["_critical"]= _0xE802;_0xE7B4["_bypassRegion"]= _0xEA24;_0xE7B4["_range"]= _0xE9D6;_0xE7B4["_isToxic"]= _0xEB5C;_0xE7B4["_isMud"]= _0xE93A;this["_DABSBullets"]["push"](_0xE7B4);this["_DABSBulletsNeedRefresh"]= true}function _0x10FEC(_0xE89E,_0xE93A,_0xE766,_0xE988,_0xE802,_0xE8EC,_0xE850){if($gamePlayer["isTransferring"]()||  !$gameSystem["isDABSActive"]()){return};var _0xE7B4= new _0x10A70();_0xE7B4["_atk"]= _0xE766;_0xE7B4["_critical"]= _0xE802;_0xE7B4["_bypassRegion"]= _0xE8EC;_0xE7B4["show"](_0xE89E,_0xE93A,_0xE988,_0xE850);this["_DABSBombs"]["push"](_0xE7B4);this["_DABSBombsNeedRefresh"]= true}function _0x1103A(_0xE988,_0xE8EC,_0xE7B4,_0xE89E,_0xE93A,_0xE850,_0xE802){if($gamePlayer["isTransferring"]()||  !$gameSystem["isDABSActive"]()){return};var _0xE766= new _0x10590(_0xE988,_0xE8EC,_0xE7B4,_0xE89E,_0xE93A,_0xE850,_0xE802);this["_DABSBombs"]["push"](_0xE766);this["_DABSBombsNeedRefresh"]= true}function _0x11088(_0xE93A,_0xE988,_0xE7B4,_0xE89E,_0xE766,_0xE802,_0xE850){if($gamePlayer["isTransferring"]()||  !$gameSystem["isDABSActive"]()){return};this["DABSRemoveTile"](_0xE93A,_0xE988);var _0xE8EC= new _0x10D7C(_0xE93A,_0xE988,_0xE7B4,_0xE89E,_0xE766,_0xE802,_0xE850);this["_DABSTiles"]["push"](_0xE8EC);this["_DABSTilesNeedRefresh"]= true}function _0x110D6(_0xE8EC,_0xE93A,_0xE850,_0xE802,_0xE766,_0xE7B4){if($gamePlayer["isTransferring"]()||  !$gameSystem["isDABSActive"]()){return};this["DABSRemoveTile"](_0xE8EC,_0xE93A);var _0xE89E= new _0x10E66(_0xE8EC,_0xE93A,_0xE850,_0xE802,_0xE766,_0xE7B4);this["_DABSTiles"]["push"](_0xE89E);this["_DABSTilesNeedRefresh"]= true}function _0x11124(_0xE802,_0xE850){var _0xE7B4=[];for(var _0xE766=0;_0xE766< this["_DABSBombs"]["length"];_0xE766++){if(this["_DABSBombs"][_0xE766]["_realX"]=== _0xE802&& this["_DABSBombs"][_0xE766]["_realY"]=== _0xE850){_0xE7B4["push"](this["_DABSBombs"][_0xE766])}};return _0xE7B4}function _0x11172(_0xE766){Dhoom["ABS"]["Game_Map_update"]["call"](this,_0xE766);this["DABSUpdateBullets"]();this["DABSUpdateBombs"]();this["DABSUpdateTiles"]()}function _0x111C0(){var _0xE766;if($gamePlayer["isTransferring"]()||  !$gameSystem["isDABSActive"]()){this["DABSClearBullets"]()}else {for(_0xE766= 0;_0xE766< this["_DABSBullets"]["length"];_0xE766++){if(this["_DABSBullets"][_0xE766]["_name"]){this["_DABSBullets"][_0xE766]["update"]()}else {this["_DABSBullets"]["splice"](_0xE766,1);_0xE766--;this["_DABSBulletsNeedRefresh"]= true}}}}function _0x1120E(){if(this["_DABSBullets"]){for(i= 0;i< this["_DABSBullets"]["length"];i++){this["_DABSBullets"][i]["erase"]()}};this["_DABSBullets"]= [];this["_DABSBulletsNeedRefresh"]= true}function _0x1125C(){var _0xE766;if($gamePlayer["isTransferring"]()||  !$gameSystem["isDABSActive"]()){this["DABSClearBombs"]()}else {for(_0xE766= 0;_0xE766< this["_DABSBombs"]["length"];_0xE766++){if(this["_DABSBombs"][_0xE766]["_name"]){this["_DABSBombs"][_0xE766]["update"]()}else {this["_DABSBombs"]["splice"](_0xE766,1);_0xE766--;this["_DABSBombsNeedRefresh"]= true}}}}function _0x112AA(){if(this["_DABSBombs"]){for(var _0xE766=0;_0xE766< this["_DABSBombs"]["length"];_0xE766++){this["_DABSBombs"][_0xE766]["erase"]()}};this["_DABSBombs"]= [];this["_DABSBombsNeedRefresh"]= true}function _0x112F8(){for(var _0xE766=0;_0xE766< this["_DABSBullets"]["length"];_0xE766++){this["_DABSBullets"][_0xE766]["_sprite"]= null};for(_0xE766= 0;_0xE766< this["_DABSBombs"]["length"];_0xE766++){this["_DABSBombs"][_0xE766]["_sprite"]= null};for(_0xE766= 0;_0xE766< this["_DABSTiles"]["length"];_0xE766++){this["_DABSTiles"][_0xE766]["_sprite"]= null};this["_DABSBombsNeedRefresh"]= true;this["_DABSBulletsNeedRefresh"]= true;this["_DABSTilesNeedRefresh"]= true}function _0x11346(){if(this["_DABSTiles"]){for(var _0xE766=0;_0xE766< this["_DABSTiles"]["length"];_0xE766++){this["_DABSTiles"][_0xE766]["erase"]()}};this["_DABSTiles"]= [];this["_DABSTilesNeedRefresh"]= true}function _0x11394(){var _0xE766;if($gamePlayer["isTransferring"]()||  !$gameSystem["isDABSActive"]()){this["DABSClearTiles"]()}else {for(_0xE766= 0;_0xE766< this["_DABSTiles"]["length"];_0xE766++){if(this["_DABSTiles"][_0xE766]["_name"]){this["_DABSTiles"][_0xE766]["update"]()}else {this["_DABSTiles"]["splice"](_0xE766,1);_0xE766--;this["_DABSTilesNeedRefresh"]= true}}}}function _0x113E2(_0xE7B4,_0xE802){if(this["_DABSTiles"]){for(var _0xE766=0;_0xE766< this["_DABSTiles"]["length"];_0xE766++){if(this["_DABSTiles"][_0xE766]["_realX"]=== _0xE7B4&& this["_DABSTiles"][_0xE766]["_realY"]=== _0xE802){this["_DABSTiles"][_0xE766]["erase"]();this["_DABSTilesNeedRefresh"]= true}}}}function _0x11430(_0xE8EC,_0xE93A,_0xE802){if($gameSystem["isDABSActive"]()&& _0xE802){var _0xE766=this["mapToCanvasX"](_0xE8EC);var _0xE7B4=this["mapToCanvasY"](_0xE93A);var _0xE89E=this["tileWidth"]();var _0xE850=this["tileHeight"]();return this["events"]()["filter"](function(_0xE988){if(_0xE988["pos"](_0xE8EC,_0xE93A)){return true};if(Imported["Fogo_EventRadius"]&& Dhoom["ABS"]["containsEvent"](_0xE8EC,_0xE93A,_0xE988)){return true};if(_0xE802&& _0xE988["x"]>= _0xE8EC- 3&& _0xE988["x"]<= _0xE8EC+ 3&& _0xE988["y"]>= _0xE93A- 3&& _0xE988["y"]<= _0xE93A+ 3){var _0xE9D6=_0xE988["getSprite"]();var _0xEA24=_0xE9D6["x"]- _0xE9D6["width"]* _0xE9D6["anchor"]["x"];var _0xEA72=_0xE9D6["y"]- _0xE9D6["height"]* _0xE9D6["anchor"]["y"];return (_0xE766< _0xEA24+ _0xE9D6["width"]&& _0xE766+ _0xE89E> _0xEA24&& _0xE7B4< _0xEA72+ _0xE9D6["height"]&& _0xE7B4+ _0xE850> _0xEA72)};return false})}else {return Dhoom["ABS"]["Game_Map_eventsXy"]["call"](this,_0xE8EC,_0xE93A)}}function _0x1147E(_0xE7B4,_0xE802,_0xE766){if($gameSystem["isDABSActive"]()&& _0xE766){return this["eventsXy"](_0xE7B4,_0xE802,_0xE766)["filter"](function(_0xE766){return !_0xE766["isThrough"]()})}else {return Dhoom["ABS"]["Game_Map_eventsXyNt"]["call"](this,_0xE7B4,_0xE802)}}function _0x114CC(_0xE7B4){var _0xE766=this["tileWidth"]();return (_0xE7B4- this["_displayX"])* _0xE766}function _0x1151A(_0xE7B4){var _0xE766=this["tileHeight"]();return (_0xE7B4- this["_displayY"])* _0xE766}function _0x11568(){Dhoom["ABS"]["Window_Options_makeCommandList"]["call"](this);this["addKeyOptions"]()}function _0x115B6(){this["addCommand"](Dhoom["ABS"]["keyCommand"],"keyOption")}function _0x11604(_0xE766){var _0xE7B4=this["commandSymbol"](_0xE766);if(_0xE7B4=== "keyOption"){return ""};return Dhoom["ABS"]["Window_Options_statusText"]["call"](this,_0xE766)}function _0x11652(){var _0xE766=this["index"]();var _0xE7B4=this["commandSymbol"](_0xE766);if(_0xE7B4=== "keyOption"){if(this["isHandled"](_0xE7B4)){SoundManager["playOk"]();this["callHandler"](_0xE7B4)}else {SoundManager["playBuzzer"]()}}else {Dhoom["ABS"]["Window_Options_processOk"]["call"](this)}}function _0x116A0(){this["initialize"]["apply"](this,arguments)}function _0x116EE(_0xE766){this["_setting"]= _0xE766;Window_Selectable["prototype"]["initialize"]["call"](this,this["_setting"]["x"],this["_setting"]["y"],this["_setting"]["width"],this["_setting"]["height"]);this["opacity"]= this["_setting"]["opacity"];this["createBackground"]();this["refresh"]()}function _0x1173C(){return this["_setting"]["padding"]}function _0x1178A(){return this["_setting"]["lineHeight"]}function _0x117D8(){return Object["keys"](Dhoom["ABS"]["keyTerms"])}function _0x11826(){return this["termKeys"]()["length"]}function _0x11874(){return Dhoom["ABS"]["keyTerms"][this["termKeys"]()[this["index"]()]]}function _0x118C2(){return QuasiInput["remap"](this["termKeys"]()[this["index"]()])}function _0x11910(){this["_background"]=  new Sprite();this["_background"]["bitmap"]= ImageManager["loadSystem"](this["_setting"]["background"]);this["_background"]["x"]= this["_setting"]["backgroundPosition"][0];this["_background"]["y"]= this["_setting"]["backgroundPosition"][1];this["addChildToBack"](this["_background"])}function _0x1195E(_0xE766){this["contents"]["changeTextStyle"](this["_setting"]["style"]);var _0xE802=this["termKeys"]()[_0xE766];if(_0xE802=== "reset"){this["contents"]["drawText"](Dhoom["ABS"]["keyTerms"][_0xE802],0,_0xE766* this["lineHeight"](),this["contents"]["width"],this["lineHeight"]())}else {var _0xE850=(this["contents"]["width"]- 24)/ 2;this["contents"]["drawText"](Dhoom["ABS"]["keyTerms"][_0xE802],0,_0xE766* this["lineHeight"](),_0xE850,this["lineHeight"]());var _0xE7B4=QuasiInput["remap"](_0xE802)["map"](function(_0xE766){return _0xE766["replace"]("#","")["toUpperCase"]()});this["contents"]["drawText"](_0xE7B4["join"](", "),_0xE850+ 24,_0xE766* this["lineHeight"](),_0xE850,this["lineHeight"](),"right")}}function _0x119AC(){this["initialize"]["apply"](this,arguments)}function _0x119FA(_0xE766){this["_setting"]= _0xE766;this["_title"]= "";this["_value"]= [];Window_Selectable["prototype"]["initialize"]["call"](this,this["_setting"]["x"],this["_setting"]["y"],this["_setting"]["width"],this["_setting"]["height"]);this["opacity"]= this["_setting"]["opacity"];this["createBackground"]();this["refresh"]()}function _0x11A48(){return this["_setting"]["padding"]}function _0x11A96(){return 3}function _0x11AE4(){return this["maxItems"]()}function _0x11B32(){return this["maxItems"]()}function _0x11B80(_0xE766){if(_0xE766=== 0){var _0xE7B4="confirm"}else {if(_0xE766=== 1){var _0xE7B4="default"}else {var _0xE7B4="clear"}};var _0xE802= new Rectangle();_0xE802["width"]= this["_setting"][_0xE7B4]["width"];_0xE802["height"]= this["_setting"][_0xE7B4]["height"];_0xE802["x"]= this["_setting"][_0xE7B4]["x"];_0xE802["y"]= this["_setting"][_0xE7B4]["y"];return _0xE802}function _0x11BCE(){this["_background"]=  new Sprite();this["_background"]["bitmap"]= ImageManager["loadSystem"](this["_setting"]["background"]);this["_background"]["x"]= this["_setting"]["backgroundPosition"][0];this["_background"]["y"]= this["_setting"]["backgroundPosition"][1];this["addChildToBack"](this["_background"])}function _0x11C1C(){var _0xE766="title";var _0xE7B4=this["_setting"][_0xE766]["style"];this["contents"]["changeTextStyle"](_0xE7B4);this["contents"]["drawText"](this["_title"],this["_setting"][_0xE766]["x"],this["_setting"][_0xE766]["y"],this["_setting"][_0xE766]["width"],this["_setting"][_0xE766]["height"],_0xE7B4["align"]);_0xE766= "value";_0xE7B4= this["_setting"][_0xE766]["style"];this["contents"]["changeTextStyle"](_0xE7B4);var _0xE802=this["_value"]["map"](function(_0xE766){return _0xE766["replace"]("#","")["toUpperCase"]()});this["contents"]["drawText"](_0xE802["join"](", "),this["_setting"][_0xE766]["x"],this["_setting"][_0xE766]["y"],this["_setting"][_0xE766]["width"],this["_setting"][_0xE766]["height"],_0xE7B4["align"]);Window_Selectable["prototype"]["drawAllItems"]["call"](this)}function _0x11C6A(_0xE766){var _0xE802=this["itemRect"](_0xE766);if(_0xE766=== 0){var _0xE7B4="confirm"}else {if(_0xE766=== 1){var _0xE7B4="default"}else {var _0xE7B4="clear"}};var _0xE850=this["_setting"][_0xE7B4]["style"];this["contents"]["changeTextStyle"](_0xE850);this["contents"]["drawText"](this["_setting"][_0xE7B4]["text"],_0xE802["x"],_0xE802["y"],_0xE802["width"],_0xE802["height"],_0xE850["align"])}function _0x11CB8(){Window_Selectable["prototype"]["update"]["call"](this);if(this["isOpenAndActive"]()){this["updateKeys"]()}}function _0x11D06(){}function _0x11D54(){if(Input["anyTriggered"]()){var _0xE766=Input["_lastTriggered"];if(!_0xE766["contains"]("gamepad")){_0xE766= "#"+ _0xE766};if(!this["_value"]["contains"](_0xE766)){this["_value"]["push"](_0xE766);this["refresh"]()}}}function _0x11DA2(){}function _0x11DF0(_0xE7B4){for(var _0xE766=0;_0xE766< this["_animationSprites"]["length"];_0xE766++){if(this["_animationSprites"][_0xE766]["_animation"]["id"]=== _0xE7B4){return true}};return false}function _0x11E3E(){for(var _0xE766=0;_0xE766< this["_animationSprites"]["length"];_0xE766++){this["_animationSprites"][_0xE766]["remove"]()};this["_animationSprites"]= []}function _0x11E8C(_0xE7B4){for(var _0xE766=0;_0xE766< this["_animationSprites"]["length"];_0xE766++){if(this["_animationSprites"][_0xE766]["_animation"]["id"]=== _0xE7B4){this["_animationSprites"][_0xE766]["remove"]();this["_animationSprites"]["splice"](_0xE766,1);_0xE766--}}}function _0x11EDA(){this["initialize"]["apply"](this,arguments)}function _0x11F28(_0xE766){this["_data"]= _0xE766;_0xE766["_sprite"]= this;Sprite_Picture["prototype"]["initialize"]["call"](this,0);if(this["_data"]["constructor"]=== _0x10590){this["createCountdownSprite"]()}}function _0x11F76(){return this["_data"]}function _0x11FC4(_0xE766){this["parent"]["createAnimation"](this,_0xE766)}function _0x12012(){this["_countdownSprite"]=  new Sprite();this["_countdownSprite"]["x"]= Dhoom["ABS"]["bombTextRect"][0];this["_countdownSprite"]["y"]= Dhoom["ABS"]["bombTextRect"][1];this["_countdownSprite"]["bitmap"]=  new Bitmap(Dhoom["ABS"]["bombTextRect"][2],Dhoom["ABS"]["bombTextRect"][3]);this["_countdownSprite"]["anchor"]["x"]= 0.5;this["_countdownSprite"]["anchor"]["y"]= 0.5;this["_countdownSprite"]["bitmap"]["changeTextStyle"](Dhoom["ABS"]["bombFont"]);this["addChild"](this["_countdownSprite"]);this["refreshCountdown"]()}function _0x12060(){this["_countdownText"]= Dhoom["ABS"]["bombText"]["format"](this["_data"]["fuseRemainingSecond"](),this["_data"]["fuseRemainingMilisecond"](),this["_data"]["fuseRemainingFrame"]());this["_countdownSprite"]["bitmap"]["clear"]();this["_countdownSprite"]["bitmap"]["drawText"](this["_countdownText"],0,0,this["_countdownSprite"]["width"],this["_countdownSprite"]["height"],Dhoom["ABS"]["bombFont"]["align"])}function _0x120AE(){Sprite_Picture["prototype"]["update"]["call"](this);if(this["_countdownSprite"]&& this["_countdownText"]!== Dhoom["ABS"]["bombText"]["format"](this["_data"]["fuseRemainingSecond"](),this["_data"]["fuseRemainingMilisecond"](),this["_data"]["fuseRemainingFrame"]())){this["refreshCountdown"]()}}function _0x120FC(){}function _0x1214A(){this["initialize"]["apply"](this,arguments)}function _0x12198(_0xE766){this["_data"]= _0xE766;_0xE766["_sprite"]= this;Sprite_Picture["prototype"]["initialize"]["call"](this,0)}function _0x121E6(){return this["_data"]}function _0x12234(){}function _0x12282(){this["initialize"]["apply"](this,arguments)}function _0x122D0(){this["_realX"]= 0;this["_realY"]= 0;this["z"]= 7;Sprite_Damage["prototype"]["initialize"]["call"](this);this["_damageBitmap"]= ImageManager["loadSystem"](Dhoom["ABS"]["damageFilename"])}function _0x1231E(){return this["_damageBitmap"]?this["_damageBitmap"]["height"]/ 2:0}function _0x1236C(_0xE850,_0xE89E,_0xE8EC,_0xE7B4,_0xE802,_0xE766){this["showDamage"](_0xE850,_0xE89E,_0xE8EC,_0xE7B4,_0xE802,_0xE766);this["createDigits"](1,_0xE850)}function _0x123BA(_0xE850,_0xE89E,_0xE8EC,_0xE7B4,_0xE802,_0xE766){this["showDamage"](_0xE850,_0xE89E,_0xE8EC,_0xE7B4,_0xE802,_0xE766);this["createDigits"](0,_0xE850)}function _0x12408(_0xE850,_0xE89E,_0xE8EC,_0xE7B4,_0xE802,_0xE766){this["_realX"]= _0xE89E;this["_realY"]= _0xE8EC;this["_offsetX"]= _0xE7B4;this["_offsetY"]= _0xE802;if(_0xE766){this["_damageBitmap"]= ImageManager["loadSystem"](Dhoom["ABS"]["damageCritFilename"])}}function _0x12456(){Sprite_Damage["prototype"]["update"]["call"](this);this["updatePosition"]()}function _0x124A4(){var _0xE7B4=$gameMap["tileWidth"]();this["x"]= Math["round"]($gameMap["adjustX"](this["_realX"])* _0xE7B4+ _0xE7B4/ 2)+ this["_offsetX"];var _0xE766=$gameMap["tileHeight"]();this["y"]= Math["round"]($gameMap["adjustY"](this["_realY"])* _0xE766+ _0xE766)+ this["_offsetY"]}function _0x124F2(){this["initialize"]["apply"](this,arguments)}function _0x12540(){_0x12282["prototype"]["initialize"]["call"](this);this["_damageBitmap"]= ImageManager["loadSystem"](Dhoom["ABS"]["healFilename"])}function _0x1258E(_0xE802,_0xE850,_0xE89E,_0xE766,_0xE7B4){this["showDamage"](_0xE802,_0xE850,_0xE89E,_0xE766,_0xE7B4,false);this["createDigits"](0,_0xE802)}function _0x125DC(_0xE802,_0xE850,_0xE89E,_0xE766,_0xE7B4){this["showDamage"](_0xE802,_0xE850,_0xE89E,_0xE766,_0xE7B4,false);this["createDigits"](1,_0xE802)}function _0x1262A(){Dhoom["ABS"]["Sprite_Character_update"]["call"](this);this["updateDABSDamage"]();if($gameSystem["isDABSActive"]()&& this["isDABSEvent"]()){this["updateDABSHPBar"]()}else {if(this["_DABSHPBar"]){this["removeChild"](this["_DABSHPBarBack"]);this["removeChild"](this["_DABSHPBar"]);delete this["_DABSHPBarBack"];delete this["_DABSHPBar"];delete this["_tempDABSHP"]}}}function _0x12678(){if(!this["_damageSprites"]){this["_damageSprites"]= [];ImageManager["loadSystem"](Dhoom["ABS"]["damageFilename"]);ImageManager["loadSystem"](Dhoom["ABS"]["damageCritFilename"]);ImageManager["loadSystem"](Dhoom["ABS"]["healFilename"])};for(var _0xE766=0;_0xE766< this["_damageSprites"]["length"];_0xE766++){if(!this["_damageSprites"][_0xE766]["isPlaying"]()){this["parent"]["removeChild"](this["_damageSprites"][_0xE766]);delete this["_damageSprites"][_0xE766];this["_damageSprites"]["splice"](_0xE766,1)}};if(this["_character"]&& (this["_character"]["constructor"]=== Game_Event|| this["_character"]["constructor"]=== Game_Player)){var _0xE89E,_0xE850,_0xE8EC,_0xE93A,_0xE7B4,_0xE802;if(this["_character"]["_DABSDamageTaken"]){_0xE89E= this["_character"]["_DABSDamageTaken"];_0xE850=  new _0x12282();_0xE8EC= this["_character"]["_realX"];_0xE93A= this["_character"]["_realY"];_0xE7B4= Math["randomInt"](this["width"]/ 2)- Math["randomInt"](this["width"]/ 2);_0xE802= 0;if(this["_character"]["constructor"]=== Game_Event){_0xE850["showDamageEvent"](_0xE89E,_0xE8EC,_0xE93A,_0xE7B4,_0xE802,this["_character"]["_DABSDamageCritical"])}else {_0xE850["showDamagePlayer"](_0xE89E,_0xE8EC,_0xE93A,_0xE7B4,_0xE802,this["_character"]["_DABSDamageCritical"])};this["_damageSprites"]["push"](_0xE850);this["parent"]["addChild"](_0xE850);this["_character"]["_DABSDamageTaken"]= 0};if(this["_character"]["_DABSHealTaken"]){_0xE89E= this["_character"]["_DABSHealTaken"];_0xE850=  new _0x124F2();_0xE8EC= this["_character"]["_realX"];_0xE93A= this["_character"]["_realY"];_0xE7B4= Math["randomInt"](this["width"]/ 2)- Math["randomInt"](this["width"]/ 2);_0xE802= 0;if(this["_character"]["constructor"]=== Game_Event){_0xE850["showDamageEvent"](_0xE89E,_0xE8EC,_0xE93A,_0xE7B4,_0xE802,false)}else {_0xE850["showDamagePlayer"](_0xE89E,_0xE8EC,_0xE93A,_0xE7B4,_0xE802,false)};this["_damageSprites"]["push"](_0xE850);this["parent"]["addChild"](_0xE850);this["_character"]["_DABSHealTaken"]= 0}}}function _0x126C6(){return (this["_character"]&& this["_character"]["constructor"]=== Game_Event&& this["_character"]["isDABSEvent"]()&&  !this["_character"]["isDABSDead"]())}function _0x12714(){if(!this["_DABSHPBar"]){this["createDABSHPBar"]()};this["_DABSHPBarBack"]["visible"]= this["_character"]["DABSIsHPBarVisible"]();this["_DABSHPBar"]["visible"]= this["_character"]["DABSIsHPBarVisible"]();if(this["_tempDABSHP"]!== this["_character"]["DABSHPRate"]()){this["refreshDABSHPBar"]()};this["_DABSHPBarBack"]["x"]= Dhoom["ABS"]["evHPPos"][0];this["_DABSHPBarBack"]["y"]= -this["height"]+ Dhoom["ABS"]["evHPPos"][1];this["_DABSHPBar"]["x"]= this["_DABSHPBarBack"]["x"]+ Dhoom["ABS"]["evHPFillPos"][0];this["_DABSHPBar"]["y"]= this["_DABSHPBarBack"]["y"]+ Dhoom["ABS"]["evHPFillPos"][1]}function _0x12762(){this["_DABSHPBarBack"]=  new Sprite();this["_DABSHPBarBack"]["anchor"]["x"]= 0.5;this["_DABSHPBarBack"]["anchor"]["y"]= 1;this["_DABSHPBarBack"]["bitmap"]= ImageManager["loadSystem"](Dhoom["ABS"]["evHPBack"]);this["_DABSHPBar"]=  new Sprite();this["_DABSHPBar"]["anchor"]["x"]= 0.5;this["_DABSHPBar"]["anchor"]["y"]= 1;this["addChild"](this["_DABSHPBarBack"]);this["addChild"](this["_DABSHPBar"]);this["refreshDABSHPBar"]()}function _0x127B0(){var _0xE766=ImageManager["loadSystem"](Dhoom["ABS"]["evHPFill"]);if(!_0xE766["isReady"]()){return};if(!this["_DABSHPBar"]["bitmap"]){this["_DABSHPBar"]["bitmap"]=  new Bitmap(_0xE766["width"],_0xE766["height"])};this["_DABSHPBar"]["bitmap"]["clear"]();this["_DABSHPBar"]["bitmap"]["blt"](_0xE766,0,0,_0xE766["width"]* this["_character"]["DABSHPRate"](),_0xE766["height"],0,0);this["_tempDABSHP"]= this["_character"]["DABSHPRate"]()}function _0x127FE(){var _0xE802=this["picture"]();if(_0xE802&& _0xE802["constructor"]=== _0x10A70){var _0xE766=ImageManager["loadPicture"](this["_pictureName"]);var _0xE89E=Math["abs"](_0xE802["_startPoints"][0]- _0xE802["_endPoints"][0]);var _0xE7B4=Math["abs"](_0xE802["_startPoints"][1]- _0xE802["_endPoints"][1]);var _0xE850=Math["sqrt"](Math["pow"](_0xE89E,2)+ Math["pow"](_0xE7B4,2));this["bitmap"]=  new Bitmap(_0xE850,_0xE766["height"]);this["bitmap"]["blt"](_0xE766,0,0,_0xE766["width"],_0xE766["height"],0,0,this["bitmap"]["width"],this["bitmap"]["height"])}else {Dhoom["ABS"]["Sprite_Picture_loadBitmap"]["call"](this)}}function _0x1284C(){this["initialize"]["apply"](this,arguments)}function _0x1289A(){Sprite["prototype"]["initialize"]["call"](this);this["_initSpeed"]= Dhoom["ABS"]["cursorSpeed"][0];this["_maxSpeed"]= Dhoom["ABS"]["cursorSpeed"][1];this["_incSpeed"]= Dhoom["ABS"]["cursorSpeed"][2];this["_speed"]= this["_initSpeed"];this["_multSpeed"]= 1;this["_lockedEvent"]= 0;this["_releaseDuration"]= Dhoom["ABS"]["cursorRelease"];this["_cooldown"]= 0;this["visible"]= false;this["refresh"]()}function _0x128E8(){this["bitmap"]= ImageManager["loadSystem"](Dhoom["ABS"]["cursorFilename"]);this["anchor"]["x"]= Dhoom["ABS"]["cursorAnchor"][0];this["anchor"]["y"]= Dhoom["ABS"]["cursorAnchor"][1]}function _0x12936(){Sprite["prototype"]["update"]["call"](this);if(this["_cooldown"]){this["_cooldown"]--};this["updateMove"]();this["updatePosition"]()}function _0x12984(){var _0xE766=false;if(this["_lockedEvent"]){if(Input["isPressed"]("dabspointerup")|| Input["isPressed"]("dabspointerdown")|| Input["isPressed"]("dabspointerleft")|| Input["isPressed"]("dabspointerright")){this["_releaseDuration"]--;if(this["_releaseDuration"]<= 0){this["_releaseDuration"]= Dhoom["ABS"]["cursorRelease"];this["_lastSnap"]= this["_lockedEvent"];this["_lockedEvent"]= 0;this["_cooldown"]= Dhoom["ABS"]["cursorCooldown"]}}else {this["_releaseDuration"]= Dhoom["ABS"]["cursorRelease"]}}else {if(Input["isPressed"]("dabspointerup")){_0xE766= true;$gameMap["_DABSCursorPos"][1]= Math["max"](0,$gameMap["_DABSCursorPos"][1]- this["_speed"])};if(Input["isPressed"]("dabspointerdown")){_0xE766= true;$gameMap["_DABSCursorPos"][1]= Math["min"](Graphics["height"],$gameMap["_DABSCursorPos"][1]+ this["_speed"])};if(Input["isPressed"]("dabspointerleft")){_0xE766= true;$gameMap["_DABSCursorPos"][0]= Math["max"](0,$gameMap["_DABSCursorPos"][0]- this["_speed"])};if(Input["isPressed"]("dabspointerright")){_0xE766= true;$gameMap["_DABSCursorPos"][0]= Math["min"](Graphics["width"],$gameMap["_DABSCursorPos"][0]+ this["_speed"])}};if(_0xE766){this["_multSpeed"]+= this["_incSpeed"];this["_speed"]= Math["min"](this["_maxSpeed"],this["_initSpeed"]* this["_multSpeed"]);this["processSnapping"]()}else {this["_speed"]= this["_initSpeed"];this["_multSpeed"]= 1}}function _0x129D2(){var _0xE89E=$gameMap["canvasToMapX"]($gameMap["_DABSCursorPos"][0]);var _0xE8EC=$gameMap["canvasToMapY"]($gameMap["_DABSCursorPos"][1]);for(var _0xE7B4=0;_0xE7B4<= Dhoom["ABS"]["cursorRadius"];_0xE7B4++){for(var _0xE802=0;_0xE802<= Dhoom["ABS"]["cursorRadius"];_0xE802++){var _0xE766=$gameMap["eventsXy"](_0xE89E+ _0xE7B4,_0xE8EC+ _0xE802);_0xE766= _0xE766["concat"]($gameMap["eventsXy"](_0xE89E- _0xE7B4,_0xE8EC- _0xE802));for(var _0xE850=0;_0xE850< _0xE766["length"];_0xE850++){if(_0xE766[_0xE850]["isDABSEvent"]()&&  !_0xE766[_0xE850]["isDABSDead"]()&& (!this["_cooldown"]|| _0xE766[_0xE850]["eventId"]()!== this["_lastSnap"])&& _0xE766[_0xE850]["screenX"]()>= 0&& _0xE766[_0xE850]["screenX"]()<= Graphics["width"]&& _0xE766[_0xE850]["screenY"]()>= 0&& _0xE766[_0xE850]["screenY"]()<= Graphics["height"]- $gameMap["tileHeight"]()/ 2){this["_lockedEvent"]= _0xE766[_0xE850]["eventId"]();return}}}};this["_lockedEvent"]= 0}function _0x12A20(){if(this["_lockedEvent"]){var _0xE766=$gameMap["event"](this["_lockedEvent"]);$gameMap["_DABSCursorPos"][0]= _0xE766["screenX"]();$gameMap["_DABSCursorPos"][1]= _0xE766["screenY"]();$gameMap["_DABSCursorPos"][1]-= $gameMap["tileHeight"]()/ 2;if($gameMap["_DABSCursorPos"][0]< 0|| $gameMap["_DABSCursorPos"][1]< 0|| $gameMap["_DABSCursorPos"][0]> Graphics["width"]|| $gameMap["_DABSCursorPos"][1]> Graphics["height"]){this["_lockedEvent"]= 0;$gameMap["_DABSCursorPos"][0]= Math["min"](Graphics["width"],Math["max"](0,$gameMap["_DABSCursorPos"][0]));$gameMap["_DABSCursorPos"][1]= Math["min"](Graphics["height"],Math["max"](0,$gameMap["_DABSCursorPos"][1]))}};this["x"]= $gameMap["_DABSCursorPos"][0];this["y"]= $gameMap["_DABSCursorPos"][1]}function _0x12A6E(){this["initialize"]["apply"](this,arguments)}function _0x12ABC(){Sprite["prototype"]["initialize"]["call"](this);this["_bullets"]= []}function _0x12B0A(){Sprite["prototype"]["update"]["call"](this);if($gameMap["_DABSBulletsNeedRefresh"]){this["updateBullets"]()}}function _0x12B58(){var _0xE7B4,_0xE802;for(_0xE7B4= 0;_0xE7B4< this["_bullets"]["length"];_0xE7B4++){_0xE802= this["_bullets"][_0xE7B4];if(!_0xE802["_data"]["_name"]){this["removeChild"](_0xE802);this["_bullets"]["splice"](_0xE7B4,1);_0xE7B4--}};for(_0xE7B4= 0;_0xE7B4< $gameMap["_DABSBullets"]["length"];_0xE7B4++){var _0xE766=$gameMap["_DABSBullets"][_0xE7B4];if(!_0xE766["_sprite"]){_0xE802=  new _0x11EDA(_0xE766);this["_bullets"]["push"](_0xE802);this["addChild"](_0xE802)}};$gameMap["_DABSBulletsNeedRefresh"]= false}function _0x12BA6(){this["initialize"]["apply"](this,arguments)}function _0x12BF4(){Sprite["prototype"]["initialize"]["call"](this);this["_animations"]= [];this["_bombs"]= []}function _0x12C42(){Sprite["prototype"]["update"]["call"](this);if($gameMap["_DABSBombsNeedRefresh"]){this["updateBullets"]()};this["updateAnimations"]()}function _0x12C90(){var _0xE7B4,_0xE802;for(_0xE7B4= 0;_0xE7B4< this["_bombs"]["length"];_0xE7B4++){_0xE802= this["_bombs"][_0xE7B4];if(!_0xE802["_data"]["_name"]){this["removeChild"](_0xE802);this["_bombs"]["splice"](_0xE7B4,1);_0xE7B4--}};for(_0xE7B4= 0;_0xE7B4< $gameMap["_DABSBombs"]["length"];_0xE7B4++){var _0xE766=$gameMap["_DABSBombs"][_0xE7B4];if(!_0xE766["_sprite"]){_0xE802=  new _0x11EDA(_0xE766);this["_bombs"]["push"](_0xE802);this["addChild"](_0xE802)}};$gameMap["_DABSBombsNeedRefresh"]= false}function _0x12CDE(_0xE802,_0xE766){var _0xE7B4= new Sprite_Base();_0xE7B4["bitmap"]= _0xE802["bitmap"];_0xE7B4["opacity"]= 128;_0xE7B4["x"]= _0xE802["x"];_0xE7B4["y"]= _0xE802["y"];_0xE7B4["_realX"]= _0xE802["_data"]["_realX"];_0xE7B4["_realY"]= _0xE802["_data"]["_realY"];_0xE7B4["anchor"]= _0xE802["anchor"];_0xE7B4["scale"]= _0xE802["scale"];_0xE7B4["z"]= 100;this["parent"]["addChild"](_0xE7B4);_0xE7B4["startAnimation"]($dataAnimations[_0xE766],false,0);this["_animations"]["push"](_0xE7B4)}function _0x12D2C(){var _0xE802=$gameMap["tileWidth"]();var _0xE7B4=$gameMap["tileHeight"]();for(var _0xE766=0;_0xE766< this["_animations"]["length"];_0xE766++){if(this["_animations"][_0xE766]["isAnimationPlaying"]()){this["_animations"][_0xE766]["x"]= Math["round"]($gameMap["adjustX"](this["_animations"][_0xE766]["_realX"])* _0xE802+ _0xE802/ 2);this["_animations"][_0xE766]["y"]= Math["round"]($gameMap["adjustY"](this["_animations"][_0xE766]["_realY"])* _0xE7B4+ _0xE7B4/ 2)}else {this["parent"]["removeChild"](this["_animations"][_0xE766]);this["_animations"]["splice"](_0xE766,1);_0xE766--}}}function _0x12D7A(){this["initialize"]["apply"](this,arguments)}function _0x12DC8(){Sprite["prototype"]["initialize"]["call"](this);this["_tiles"]= []}function _0x12E16(){Sprite["prototype"]["update"]["call"](this);if($gameMap["_DABSTilesNeedRefresh"]){this["updateTiles"]()}}function _0x12E64(){var _0xE766,_0xE7B4;for(_0xE766= 0;_0xE766< this["_tiles"]["length"];_0xE766++){_0xE7B4= this["_tiles"][_0xE766];if(!_0xE7B4["_data"]["_name"]){this["removeChild"](_0xE7B4);this["_tiles"]["splice"](_0xE766,1);_0xE766--}};for(_0xE766= 0;_0xE766< $gameMap["_DABSTiles"]["length"];_0xE766++){var _0xE802=$gameMap["_DABSTiles"][_0xE766];if(!_0xE802["_sprite"]){_0xE7B4=  new _0x1214A(_0xE802);this["_tiles"]["push"](_0xE7B4);this["addChild"](_0xE7B4)}};$gameMap["_DABSTilesNeedRefresh"]= false}function _0x12EB2(){this["initialize"]["apply"](this,arguments)}function _0x12F00(){Sprite["prototype"]["initialize"]["call"](this);this["visible"]= false;this["createSprites"]()}function _0x12F4E(){this["createHPBarSprite"]();this["createAttackSprite"]();this["createBombSprite"]();this["createPotionSprite"]();this["createAttackCursor"]();this["_tempMouseCursor"]= [-1,-1];this["_tempAttackCursor"]= [this["_attackCursor"]["x"],this["_attackCursor"]["y"]]}function _0x12F9C(){this["_hpBarBack"]=  new Sprite();this["_hpBarBack"]["bitmap"]= ImageManager["loadSystem"](Dhoom["ABS"]["hudHPBack"]);this["_hpBarBack"]["x"]= Dhoom["ABS"]["hudHPPos"][0];this["_hpBarBack"]["y"]= Dhoom["ABS"]["hudHPPos"][1];this["addChild"](this["_hpBarBack"]);this["_hpBarFill"]=  new Sprite();ImageManager["loadSystem"](Dhoom["ABS"]["hudHPFill"]);this["_hpBarFill"]["x"]= Dhoom["ABS"]["hudHPFillPos"][0];this["_hpBarFill"]["y"]= Dhoom["ABS"]["hudHPFillPos"][1];this["_hpBarBack"]["addChild"](this["_hpBarFill"]);this["_hpBarText"]=  new Sprite();this["_hpBarText"]["bitmap"]=  new Bitmap(Dhoom["ABS"]["hudHPTextRect"][2],Dhoom["ABS"]["hudHPTextRect"][3]);this["_hpBarText"]["bitmap"]["changeTextStyle"](Dhoom["ABS"]["hudHPFont"]);this["_hpBarText"]["x"]= Dhoom["ABS"]["hudHPTextRect"][0];this["_hpBarText"]["y"]= Dhoom["ABS"]["hudHPTextRect"][1];this["_hpBarBack"]["addChild"](this["_hpBarText"]);this["refreshHPBar"]()}function _0x12FEA(){this["_attackSprite"]=  new Sprite();this["_attackSprite"]["x"]= Dhoom["ABS"]["hudAttackPos"][0];this["_attackSprite"]["y"]= Dhoom["ABS"]["hudAttackPos"][1];this["refreshAttackButton"]();this["addChild"](this["_attackSprite"])}function _0x13038(){var _0xE766=$gamePlayer["DABSParams"]("type")=== "melee"?0:1;this["_attackSprite"]["bitmap"]= ImageManager["loadSystem"](Dhoom["ABS"]["hudAttack"][_0xE766])}function _0x13086(){this["_bombSprite"]=  new Sprite();this["_bombSprite"]["bitmap"]= ImageManager["loadSystem"](Dhoom["ABS"]["hudBomb"]);this["_bombSprite"]["x"]= Dhoom["ABS"]["hudBombPos"][0];this["_bombSprite"]["y"]= Dhoom["ABS"]["hudBombPos"][1];this["_bombText"]=  new Sprite();this["_bombText"]["bitmap"]=  new Bitmap(Dhoom["ABS"]["hudBombTextRect"][2],Dhoom["ABS"]["hudBombTextRect"][3]);this["_bombText"]["bitmap"]["changeTextStyle"](Dhoom["ABS"]["hudBombFont"]);this["_bombText"]["x"]= Dhoom["ABS"]["hudBombTextRect"][0];this["_bombText"]["y"]= Dhoom["ABS"]["hudBombTextRect"][1];this["addChild"](this["_bombSprite"]);this["_bombSprite"]["addChild"](this["_bombText"]);this["refreshBombText"]()}function _0x130D4(){this["_potionSprite"]=  new Sprite();this["_potionSprite"]["bitmap"]= ImageManager["loadSystem"](Dhoom["ABS"]["hudPotion"]);this["_potionSprite"]["x"]= Dhoom["ABS"]["hudPotionPos"][0];this["_potionSprite"]["y"]= Dhoom["ABS"]["hudPotionPos"][1];this["_potionText"]=  new Sprite();this["_potionText"]["bitmap"]=  new Bitmap(Dhoom["ABS"]["hudPotionTextRect"][2],Dhoom["ABS"]["hudPotionTextRect"][3]);this["_potionText"]["bitmap"]["changeTextStyle"](Dhoom["ABS"]["hudPotionFont"]);this["_potionText"]["x"]= Dhoom["ABS"]["hudPotionTextRect"][0];this["_potionText"]["y"]= Dhoom["ABS"]["hudPotionTextRect"][1];this["addChild"](this["_potionSprite"]);this["_potionSprite"]["addChild"](this["_potionText"]);this["refreshPotionText"]()}function _0x13122(){this["_attackCursor"]=  new _0x1284C();this["_attackCursor"]["x"]= Graphics["width"]/ 2;this["_attackCursor"]["y"]= Graphics["height"]/ 2;this["_attackCursor"]["visible"]= false;$gamePlayer["_DABSUsingAttackCursor"]= this["_attackCursor"]["visible"];this["addChild"](this["_attackCursor"])}function _0x13170(){var _0xE766=ImageManager["loadSystem"](Dhoom["ABS"]["hudHPFill"]);if(!this["_hpBarFill"]["bitmap"]&& ImageManager["isReady"]()){this["_hpBarFill"]["bitmap"]=  new Bitmap(_0xE766["width"],_0xE766["height"])};if(!this["_hpBarFill"]["bitmap"]){return};this["_hpBarFill"]["bitmap"]["clear"]();this["_hpBarText"]["bitmap"]["clear"]();var _0xE7B4=$gameVariables["value"](Dhoom["ABS"]["plHealthVar"])/ Dhoom["ABS"]["plHealthMax"];if(Dhoom["ABS"]["plHealthOperator"]){_0xE7B4= 1.0- _0xE7B4};this["_hpBarFill"]["bitmap"]["blt"](_0xE766,0,0,_0xE766["width"]* _0xE7B4,_0xE766["height"],0,0);this["_tempHP"]= $gameVariables["value"](Dhoom["ABS"]["plHealthVar"]);var _0xE850;if(Dhoom["ABS"]["plHealthOperator"]){_0xE850= Dhoom["ABS"]["plHealthMax"]- this["_tempHP"]}else {_0xE850= this["_tempHP"]};var _0xE802=Dhoom["ABS"]["hudHPText"]["format"](_0xE850,Dhoom["ABS"]["plHealthMax"]);this["_hpBarText"]["bitmap"]["drawText"](_0xE802,0,0,this["_hpBarText"]["width"],this["_hpBarText"]["height"],Dhoom["ABS"]["hudHPFont"]["align"])}function _0x131BE(){this["_bombText"]["bitmap"]["clear"]();this["_tempBomb"]= $gameParty["numItems"]($dataItems[Dhoom["ABS"]["bombItemID"]]);var _0xE766=Dhoom["ABS"]["hudBombFont"]["align"];var _0xE7B4=Dhoom["ABS"]["hudBombText"]["format"](this["_tempBomb"]);this["_bombText"]["bitmap"]["drawText"](_0xE7B4,0,0,this["_bombText"]["width"],this["_bombText"]["height"],_0xE766)}function _0x1320C(){this["_potionText"]["bitmap"]["clear"]();this["_tempPotion"]= $gameParty["numItems"]($dataItems[Dhoom["ABS"]["potionItemID"]]);var _0xE766=Dhoom["ABS"]["hudPotionFont"]["align"];var _0xE7B4=Dhoom["ABS"]["hudPotionText"]["format"](this["_tempPotion"]);this["_potionText"]["bitmap"]["drawText"](_0xE7B4,0,0,this["_potionText"]["width"],this["_potionText"]["height"],_0xE766)}function _0x1325A(){if(!this["visible"]){return};Sprite["prototype"]["update"]["call"](this);this["updateTargetCursor"]();this["updateVisibility"]();if(this["_tempHP"]!== $gameVariables["value"](Dhoom["ABS"]["plHealthVar"])){this["refreshHPBar"]()};if(this["_bombSprite"]["visible"]&& this["_tempBomb"]!== $gameParty["numItems"]($dataItems[Dhoom["ABS"]["bombItemID"]])){this["refreshBombText"]()};if(this["_potionSprite"]["visible"]&& this["_tempPotion"]!== $gameParty["numItems"]($dataItems[Dhoom["ABS"]["potionItemID"]])){this["refreshPotionText"]()};if(Imported["TDDP_MouseSystemEx"]){this["updateMouseCursor"]()};if(this["visible"]){this["updateHoverTone"]()};this["updateAttackSwitchInput"]()}function _0x132A8(){if(!this["_tempAttackCursor"]["equals"]([this["_attackCursor"]["x"],this["_attackCursor"]["y"]])){if(!this["_attackCursor"]["visible"]&& this["_attackCursor"]["_lockedEvent"] && this["_attackCursor"]["_releaseDuration"]=== Dhoom["ABS"]["cursorRelease"]){this["_attackCursor"]["visible"]= false}else {this["_attackCursor"]["visible"]= true}};if(!this["_tempMouseCursor"]["equals"]([TouchInput["_mouseX"],TouchInput["_mouseY"]])){this["_attackCursor"]["visible"]= false};if(this["_attackCursor"]["visible"]){document["body"]["style"]["cursor"]= "none"}else {if(TDDP_MouseSystemEx["useCustomCursor"]){document["body"]["style"]["cursor"]= ""}else {document["body"]["style"]["cursor"]= "inherit"}};this["_tempMouseCursor"]= [TouchInput["_mouseX"],TouchInput["_mouseY"]];this["_tempAttackCursor"]= [this["_attackCursor"]["x"],this["_attackCursor"]["y"]];$gamePlayer["_DABSUsingAttackCursor"]= this["_attackCursor"]["visible"]}function _0x132F6(){if(!this["visible"]){return};if(Input["isTriggered"]("dabsswitch")&& this["_attackSprite"]["visible"]){Input["update"]();$gamePlayer["_DABSParams"]["type"]= $gamePlayer["DABSParams"]("type")=== "melee"?"ranged":"melee";this["refreshAttackButton"]()}}function _0x13344(){this["visible"]= $gameSystem["isDABSActive"]();this["_bombSprite"]["visible"]= (Dhoom["ABS"]["hudBombVisibility"]|| $gameParty["hasItem"]($dataItems[Dhoom["ABS"]["bombItemID"]]));this["_bombSprite"]["disabled"]=  !$gameParty["hasItem"]($dataItems[Dhoom["ABS"]["bombItemID"]]);this["_potionSprite"]["visible"]= (Dhoom["ABS"]["hudPotionVisibility"]|| $gameParty["hasItem"]($dataItems[Dhoom["ABS"]["potionItemID"]]));this["_potionSprite"]["disabled"]=  !$gameParty["hasItem"]($dataItems[Dhoom["ABS"]["potionItemID"]])}function _0x13392(){if(!this["visible"]){return};if(TouchInput["isTriggered"]()&& this["_attackSprite"]["visible"]&& this["isSpriteTouched"](this["_attackSprite"])){TouchInput["update"]();$gamePlayer["_DABSParams"]["type"]= $gamePlayer["DABSParams"]("type")=== "melee"?"ranged":"melee";this["refreshAttackButton"]()};if(TouchInput["isTriggered"]()&& this["_bombSprite"]["visible"]&& this["isSpriteTouched"](this["_bombSprite"])&& $gamePlayer["DABSCanPlaceBomb"]()){TouchInput["update"]();$gamePlayer["DABSPlaceBomb"]()};if(TouchInput["isTriggered"]()&& this["_potionSprite"]["visible"]&& this["isSpriteTouched"](this["_potionSprite"])&& $gamePlayer["DABSCanUsePotion"]()){TouchInput["update"]();$gamePlayer["DABSUsePotion"]()}}function _0x133E0(_0xE766){var _0xE7B4=TouchInput["x"];var _0xE802=TouchInput["y"];return _0xE7B4>= _0xE766["x"]&& _0xE7B4<= _0xE766["x"]+ _0xE766["width"]&& _0xE802>= _0xE766["y"]&& _0xE802<= _0xE766["y"]+ _0xE766["height"]}function _0x1342E(_0xE766){var _0xE7B4=TouchInput["_mouseX"];var _0xE802=TouchInput["_mouseY"];return _0xE7B4>= _0xE766["x"]&& _0xE7B4<= _0xE766["x"]+ _0xE766["width"]&& _0xE802>= _0xE766["y"]&& _0xE802<= _0xE766["y"]+ _0xE766["height"]}function _0x1347C(){return this["visible"]&& ((this["_attackSprite"]["visible"]&& this["isSpriteTouched"](this["_attackSprite"]))|| (this["_bombSprite"]["visible"]&& this["isSpriteTouched"](this["_bombSprite"]))|| (this["_potionSprite"]["visible"]&& this["isSpriteTouched"](this["_potionSprite"])))}function _0x134CA(){if(this["visible"]&& ((this["_attackSprite"]["visible"]&& this["isSpriteHovered"](this["_attackSprite"]))|| (this["_bombSprite"]["visible"]&& this["isSpriteHovered"](this["_bombSprite"]))|| (this["_potionSprite"]["visible"]&& this["isSpriteHovered"](this["_potionSprite"])))){TDDP_MouseSystemEx["_setCustomCursor"](TDDP_MouseSystemEx["_ext"](Dhoom["ABS"]["hudMouseCursor"]));this["_isHovered"]= true}else {if(this["_isHovered"]){TDDP_MouseSystemEx["_resetCustomCursor"]();this["_isHovered"]= false}}}function _0x13518(){if(this["_attackSprite"]["visible"]&& this["isSpriteHovered"](this["_attackSprite"])){this["_attackSprite"]["setColorTone"](Dhoom["ABS"]["hudHoverTone"])}else {this["_attackSprite"]["setColorTone"]([0,0,0,0])};if(this["_bombSprite"]["visible"]&& this["isSpriteHovered"](this["_bombSprite"])&&  !this["_bombSprite"]["disabled"]){this["_bombSprite"]["setColorTone"](Dhoom["ABS"]["hudHoverTone"])}else {if(this["_bombSprite"]["disabled"]){this["_bombSprite"]["setColorTone"](Dhoom["ABS"]["hudBombTone"])}else {this["_bombSprite"]["setColorTone"]([0,0,0,0])}};if(this["_potionSprite"]["visible"]&& this["isSpriteHovered"](this["_potionSprite"])&&  !this["_potionSprite"]["disabled"]){this["_potionSprite"]["setColorTone"](Dhoom["ABS"]["hudHoverTone"])}else {if(this["_potionSprite"]["disabled"]){this["_potionSprite"]["setColorTone"](Dhoom["ABS"]["hudPotionTone"])}else {this["_potionSprite"]["setColorTone"]([0,0,0,0])}}}function _0x13566(){Dhoom["ABS"]["Spriteset_Map_createTilemap"]["call"](this);this["_spritesetDABSTiles"]=  new _0x12D7A();this["_spritesetDABSTiles"]["z"]= 1;this["_tilemap"]["addChild"](this["_spritesetDABSTiles"]);this["_spritesetBombs"]=  new _0x12BA6();this["_spritesetBombs"]["z"]= 1;this["_tilemap"]["addChild"](this["_spritesetBombs"])}function _0x135B4(){Dhoom["ABS"]["Spriteset_Map_createUpperLayer"]["call"](this);this["_spritesetBullets"]=  new _0x12A6E();this["addChild"](this["_spritesetBullets"]);this["_spritesetDABS"]=  new _0x12EB2();this["addChild"](this["_spritesetDABS"]);if( typeof Sprite_Live2D_Layer!== "undefined"&&  !this["_live2dLayer"]){this["createLive2DLayer"]()}}function _0x13602(_0xE766){for(var _0xE7B4=0;_0xE7B4< this["_characterSprites"]["length"];_0xE7B4++){if(this["_characterSprites"][_0xE7B4]["_character"]=== _0xE766){return this["_characterSprites"][_0xE7B4]}}}function _0x13650(){Dhoom["ABS"]["Spriteset_Map_prototype_update"]["call"](this);this["_spritesetDABS"]["visible"]= $gameSystem["isDABSActive"]()}function _0x1369E(){Dhoom["ABS"]["Scene_Map_terminate"]["call"](this);$gameMap["DABSClearSprites"]();if(TDDP_MouseSystemEx["useCustomCursor"]){document["body"]["style"]["cursor"]= ""}else {document["body"]["style"]["cursor"]= "inherit"}}function _0x136EC(){if(TouchInput["isTriggered"]()&& this["_spriteset"]["_spritesetDABS"]["isTouched"]()){this["_spriteset"]["_spritesetDABS"]["updateInput"]()}else {if($gameSystem["isDABSActive"]()&& TouchInput["isRightPressed"]()){TouchInput["update"]();var _0xE850=$gameMap["canvasToMapX"](TouchInput["x"]);var _0xE89E=$gameMap["canvasToMapY"](TouchInput["y"]);var _0xE766=$gameMap["eventsXy"](_0xE850,_0xE89E,true);for(var _0xE7B4=0;_0xE7B4< _0xE766["length"];_0xE7B4++){if(_0xE766[_0xE7B4]["isDABSEvent"]()){if($gamePlayer["DABSParams"]("type")=== "ranged"){if($gamePlayer["DABSCanAttack"]()){$gamePlayer["DABSAttack"](_0xE766[_0xE7B4])}}else {$gameTemp["_DABSAttackTarget"]= _0xE766[_0xE7B4]};return}};if($gamePlayer["DABSParams"]("type")=== "ranged"){var _0xE802=[TouchInput["_mouseX"]- $gamePlayer["screenX"](),TouchInput["_mouseY"]- $gamePlayer["screenY"]()];if($gamePlayer["DABSCanAttack"]()){$gamePlayer["DABSAttack"](_0xE802)}}}else {Dhoom["ABS"]["Scene_Map_processMapTouch"]["call"](this)}}}function _0x1373A(){return Input["isTriggered"]("dabsmenu")|| TouchInput["isCancelled"]()}function _0x13788(_0xE766,_0xE7B4){return $gameMap["eventsXy"](_0xE766,_0xE7B4,true)}function _0x137D6(){Dhoom["ABS"]["Scene_Map_update"]["call"](this);if(!$gameSystem["isDABSActive"]()&& document["body"]["style"]["cursor"]=== "none"){if(TDDP_MouseSystemEx["useCustomCursor"]){document["body"]["style"]["cursor"]= ""}else {document["body"]["style"]["cursor"]= "inherit"}}}function _0x13824(){Dhoom["ABS"]["Scene_Options_create"]["call"](this);this["createKeyOptionsWindow"]()}function _0x13872(){Dhoom["ABS"]["Scene_Options_createOptionsWindow"]["call"](this);this["_optionsWindow"]["setHandler"]("keyOption",this["onKeyOptionCommand"]["bind"](this))}function _0x138C0(){this["_keyOptionsWindow"]=  new _0x116A0(Dhoom["ABS"]["keyWindow"]);this["_keyOptionsWindow"]["setHandler"]("ok",this["onKeyOptionOk"]["bind"](this));this["_keyOptionsWindow"]["setHandler"]("cancel",this["onKeyOptionCancel"]["bind"](this));this["_keyOptionsWindow"]["hide"]();this["addChild"](this["_keyOptionsWindow"]);this["_remapOptionsWindow"]=  new _0x119AC(Dhoom["ABS"]["remapWindow"]);this["_remapOptionsWindow"]["setHandler"]("ok",this["onRemapOptionOk"]["bind"](this));this["_remapOptionsWindow"]["hide"]();this["addChild"](this["_remapOptionsWindow"])}function _0x1390E(){Input["update"]();TouchInput["update"]();this["_optionsWindow"]["hide"]();this["_optionsWindow"]["deactivate"]();this["_keyOptionsWindow"]["show"]();this["_keyOptionsWindow"]["activate"]();this["_keyOptionsWindow"]["select"](0)}function _0x1395C(){if(this["_keyOptionsWindow"]["termKeys"]()[this["_keyOptionsWindow"]["index"]()]=== "reset"){ConfigManager["keys"]= JSON["parse"](JSON["stringify"](QuasiInput["remapped"]));this["_keyOptionsWindow"]["refresh"]();this["_keyOptionsWindow"]["activate"]()}else {this["_keyOptionsWindow"]["hide"]();this["_remapOptionsWindow"]["_title"]= this["_keyOptionsWindow"]["currentCommand"]();this["_remapOptionsWindow"]["_value"]= this["_keyOptionsWindow"]["currentValue"]();this["_remapOptionsWindow"]["refresh"]();this["_remapOptionsWindow"]["show"]();this["_remapOptionsWindow"]["activate"]();this["_remapOptionsWindow"]["select"](0)}}function _0x139AA(){this["_optionsWindow"]["show"]();this["_optionsWindow"]["activate"]();this["_keyOptionsWindow"]["hide"]();this["_keyOptionsWindow"]["deactivate"]()}function _0x139F8(){var _0xE766=this["_remapOptionsWindow"]["index"]();var _0xE7B4=this["_keyOptionsWindow"]["termKeys"]()[this["_keyOptionsWindow"]["index"]()];if(_0xE766=== 0){ConfigManager["keys"][_0xE7B4]= this["_remapOptionsWindow"]["_value"]["clone"]()}else {if(_0xE766=== 1){ConfigManager["keys"][_0xE7B4]= QuasiInput["remapped"][_0xE7B4]["clone"]()}else {ConfigManager["keys"][_0xE7B4]= []}};this["_keyOptionsWindow"]["refresh"]();this["_remapOptionsWindow"]["hide"]();this["_keyOptionsWindow"]["show"]();this["_keyOptionsWindow"]["activate"]()}DABSBomb= _0x10590;DABSBullet= _0x1084E;DABSLaser= _0x10A70;DABSTile= _0x10BA8;DABSToxicTile= _0x10D7C;DABSMudTile= _0x10E66;Window_KeyOptions= _0x116A0;Window_KeyRemapOptions= _0x119AC;Sprite_DABSBombBullet= _0x11EDA;Sprite_DABSTiles= _0x1214A;Sprite_DABSDamage= _0x12282;Sprite_DABSHeal= _0x124F2;Sprite_DABSCursor= _0x1284C;Spriteset_DABSBullets= _0x12A6E;Spriteset_DABSBombs= _0x12BA6;Spriteset_DABSTiles= _0x12D7A;Spriteset_DABSHUD= _0x12EB2;Dhoom["Parameters"]= PluginManager["parameters"]("DhoomABS");if(!Dhoom["jsonParse"]){Dhoom["jsonParse"]= _0xE766};if(!Dhoom["loadParam"]){Dhoom["loadParam"]= _0xE7B4};Dhoom["ABS"]["debug"]= eval(Dhoom["Parameters"]["DEBUG"]);Dhoom["ABS"]["switchId"]= Number(Dhoom["Parameters"]["Switch ID"]);Dhoom["ABS"]["damageFilename"]= String(Dhoom["Parameters"]["Damage Filename"]);Dhoom["ABS"]["damageCritFilename"]= String(Dhoom["Parameters"]["Damage Critical Filename"]);Dhoom["ABS"]["healFilename"]= String(Dhoom["Parameters"]["Heal Filename"]);Dhoom["ABS"]["cursorFilename"]= String(Dhoom["Parameters"]["Target Cursor Filename"]);Dhoom["ABS"]["cursorAnchor"]= JSON["parse"](Dhoom["Parameters"]["Target Cursor Anchor"]);Dhoom["ABS"]["cursorSpeed"]= JSON["parse"](Dhoom["Parameters"]["Target Cursor Move Speed"]);Dhoom["ABS"]["cursorRadius"]= Number(Dhoom["Parameters"]["Target Cursor Snap Radius"]);Dhoom["ABS"]["cursorRelease"]= Number(Dhoom["Parameters"]["Target Cursor Snap Release Duration"]);Dhoom["ABS"]["cursorCooldown"]= Number(Dhoom["Parameters"]["Target Cursor Snap Cooldown"]);Dhoom["ABS"]["plDefaultMode"]= String(Dhoom["Parameters"]["Player Default Attack Mode"])["toLowerCase"]();Dhoom["ABS"]["plHealthVar"]= Number(Dhoom["Parameters"]["Player Health Variable"]);Dhoom["ABS"]["plHealthMax"]= Number(Dhoom["Parameters"]["Player Health Max"]);Dhoom["ABS"]["plHealthOperator"]= eval(Dhoom["Parameters"]["Player Health Damage Operator"]);Dhoom["ABS"]["plDamage"]= JSON["parse"](Dhoom["Parameters"]["Player Attack Damage"]);Dhoom["ABS"]["plHPRegen"]= Number(Dhoom["Parameters"]["Player HP Regeneration"]);Dhoom["ABS"]["plCritChance"]= Number(Dhoom["Parameters"]["Player Critical Chance"]);Dhoom["ABS"]["plCritMultiplier"]= Number(Dhoom["Parameters"]["Player Critical Multiplier"]);Dhoom["ABS"]["plFrequency"]= Number(Dhoom["Parameters"]["Player Attack Frequency"]);sedata= Dhoom["Parameters"]["Player Attack SE"]["split"]("|")["map"](_0xE802);Dhoom["ABS"]["plKnockbackPower"]= Number(Dhoom["Parameters"]["Player Attack Knockback Power"]);Dhoom["ABS"]["plKnockbackDuration"]= Number(Dhoom["Parameters"]["Player Attack Knockback Duration"]);Dhoom["ABS"]["plKnockbackAnim"]= Number(Dhoom["Parameters"]["Player Attack Knockback Animation"]);Dhoom["ABS"]["plSE"]= {name:sedata[0],volume:Number(sedata[1]),pitch:Number(sedata[2]),pan:Number(sedata[3])};Dhoom["ABS"]["plBulletDamage"]= JSON["parse"](Dhoom["Parameters"]["Player Bullet Damage"]);Dhoom["ABS"]["plBulletCritChance"]= Number(Dhoom["Parameters"]["Player Bullet Critical Chance"]);Dhoom["ABS"]["plBulletCritMult"]= Number(Dhoom["Parameters"]["Player Bullet Critical Multiplier"]);Dhoom["ABS"]["plBulletFrequency"]= Number(Dhoom["Parameters"]["Player Bullet Frequency"]);sedata= Dhoom["Parameters"]["Player Bullet SE"]["split"]("|")["map"](_0xE850);Dhoom["ABS"]["plBulletSE"]= {name:sedata[0],volume:Number(sedata[1]),pitch:Number(sedata[2]),pan:Number(sedata[3])};Dhoom["ABS"]["plBulletKnockbackPower"]= Number(Dhoom["Parameters"]["Player Bullet Knockback Power"]);Dhoom["ABS"]["plBulletKnockbackDuration"]= Number(Dhoom["Parameters"]["Player Bullet Knockback Duration"]);Dhoom["ABS"]["plBulletAnim"]= Number(Dhoom["Parameters"]["Player Bullet Animation"]);Dhoom["ABS"]["plBulletFilename"]= String(Dhoom["Parameters"]["Player Bullet"]);Dhoom["ABS"]["plBulletPattern"]= String(Dhoom["Parameters"]["Player Bullet Pattern"]);Dhoom["ABS"]["plBulletAngle"]= Number(Dhoom["Parameters"]["Player Bullet Pattern Angle"]);Dhoom["ABS"]["plBulletAmount"]= Number(Dhoom["Parameters"]["Player Bullet Amount"]);Dhoom["ABS"]["plBulletInterval"]= Number(Dhoom["Parameters"]["Player Bullet Pattern Interval"]);Dhoom["ABS"]["plBulletSpeed"]= Number(Dhoom["Parameters"]["Player Bullet Speed"]);Dhoom["ABS"]["plBulletRegion"]= JSON["parse"](Dhoom["Parameters"]["Player Bullet Bypass Region"]);Dhoom["ABS"]["plBulletRange"]= Number(Dhoom["Parameters"]["Player Bullet Range"]);Dhoom["ABS"]["bombFilename"]= String(Dhoom["Parameters"]["Bomb Filename"]);Dhoom["ABS"]["bombItemID"]= Number(Dhoom["Parameters"]["Bomb Item ID"]);Dhoom["ABS"]["bombRadius"]= Number(Dhoom["Parameters"]["Bomb Radius"]);Dhoom["ABS"]["bombDamage"]= JSON["parse"](Dhoom["Parameters"]["Bomb Damage"]);Dhoom["ABS"]["bombFuse"]= Number(Dhoom["Parameters"]["Bomb Fuse Time"]);sedata= Dhoom["Parameters"]["Bomb Placed SE"]["split"]("|")["map"](_0xE89E);Dhoom["ABS"]["bombPlaceSE"]= {name:sedata[0],volume:Number(sedata[1]),pitch:Number(sedata[2]),pan:Number(sedata[3])};Dhoom["ABS"]["bombExplodeAnim"]= Number(Dhoom["Parameters"]["Bomb Explode Animation"]);Dhoom["ABS"]["bombEventAnim"]= Number(Dhoom["Parameters"]["Bomb Event Animation"]);Dhoom["ABS"]["bombText"]= String(Dhoom["Parameters"]["Bomb Countdown Text"]);Dhoom["ABS"]["bombTextRect"]= JSON["parse"](Dhoom["Parameters"]["Bomb Countdown Rect"]);Dhoom["ABS"]["bombFont"]= {name:String(Dhoom["Parameters"]["Bomb Countdown Font Name"]),size:Number(Dhoom["Parameters"]["Bomb Countdown Font Size"]),color:String(Dhoom["Parameters"]["Bomb Countdown Font Color"]),outlineWidth:Number(Dhoom["Parameters"]["Bomb Countdown Font Outline Width"]),outlineColor:String(Dhoom["Parameters"]["Bomb Countdown Font Outline Color"]),bold:JSON["parse"](Dhoom["Parameters"]["Bomb Countdown Font Bold"]["toLowerCase"]()),italic:JSON["parse"](Dhoom["Parameters"]["Bomb Countdown Font Italic"]["toLowerCase"]()),align:String(Dhoom["Parameters"]["Bomb Countdown Text Alignment"])["toLowerCase"]()};Dhoom["ABS"]["potionItemID"]= Number(Dhoom["Parameters"]["Potion Item ID"]);Dhoom["ABS"]["potionValue"]= JSON["parse"](Dhoom["Parameters"]["Potion Heal Value"]);Dhoom["ABS"]["potionAnim"]= Number(Dhoom["Parameters"]["Potion Animation ID"]);Dhoom["ABS"]["hudMouseCursor"]= String(Dhoom["Parameters"]["HUD Hover Mouse Cursor"]);Dhoom["ABS"]["hudHoverTone"]= JSON["parse"](Dhoom["Parameters"]["HUD Hover Color"]);Dhoom["ABS"]["hudHPPos"]= JSON["parse"](Dhoom["Parameters"]["HUD HP Bar Position"]);Dhoom["ABS"]["hudHPBack"]= String(Dhoom["Parameters"]["HUD HP Bar Back"]);Dhoom["ABS"]["hudHPFill"]= String(Dhoom["Parameters"]["HUD HP Bar Fill"]);Dhoom["ABS"]["hudHPFillPos"]= JSON["parse"](Dhoom["Parameters"]["HUD HP Bar Fill Position"]);Dhoom["ABS"]["hudHPText"]= String(Dhoom["Parameters"]["HUD HP Bar Text"]);Dhoom["ABS"]["hudHPTextRect"]= JSON["parse"](Dhoom["Parameters"]["HUD HP Bar Text Rect"]);Dhoom["ABS"]["hudHPFont"]= {name:String(Dhoom["Parameters"]["HUD HP Bar Font Name"]),size:Number(Dhoom["Parameters"]["HUD HP Bar Font Size"]),color:String(Dhoom["Parameters"]["HUD HP Bar Font Color"]),outlineWidth:Number(Dhoom["Parameters"]["HUD HP Bar Font Outline Width"]),outlineColor:String(Dhoom["Parameters"]["HUD HP Bar Font Outline Color"]),bold:JSON["parse"](Dhoom["Parameters"]["HUD HP Bar Font Bold"]["toLowerCase"]()),italic:JSON["parse"](Dhoom["Parameters"]["HUD HP Bar Font Italic"]["toLowerCase"]()),align:String(Dhoom["Parameters"]["HUD HP Bar Text Alignment"])["toLowerCase"]()};Dhoom["ABS"]["hudAttack"]= String(Dhoom["Parameters"]["HUD Attack Filename"])["split"](",")["map"](_0xE8EC);Dhoom["ABS"]["hudAttackPos"]= JSON["parse"](Dhoom["Parameters"]["HUD Attack Position"]);Dhoom["ABS"]["hudBombVisibility"]= JSON["parse"](Dhoom["Parameters"]["HUD Bomb Visibility"]);Dhoom["ABS"]["hudBombTone"]= JSON["parse"](Dhoom["Parameters"]["HUD Bomb Disabled Tone"]);Dhoom["ABS"]["hudBomb"]= String(Dhoom["Parameters"]["HUD Bomb Filename"]);Dhoom["ABS"]["hudBombPos"]= JSON["parse"](Dhoom["Parameters"]["HUD Bomb Position"]);Dhoom["ABS"]["hudBombText"]= String(Dhoom["Parameters"]["HUD Bomb Text"]);Dhoom["ABS"]["hudBombTextRect"]= JSON["parse"](Dhoom["Parameters"]["HUD Bomb Text Rect"]);Dhoom["ABS"]["hudBombFont"]= {name:String(Dhoom["Parameters"]["HUD Bomb Font Name"]),size:Number(Dhoom["Parameters"]["HUD Bomb Font Size"]),color:String(Dhoom["Parameters"]["HUD Bomb Font Color"]),outlineWidth:Number(Dhoom["Parameters"]["HUD Bomb Font Outline Width"]),outlineColor:String(Dhoom["Parameters"]["HUD Bomb Font Outline Color"]),bold:JSON["parse"](Dhoom["Parameters"]["HUD Bomb Font Bold"]["toLowerCase"]()),italic:JSON["parse"](Dhoom["Parameters"]["HUD Bomb Font Italic"]["toLowerCase"]()),align:String(Dhoom["Parameters"]["HUD Bomb Text Alignment"])["toLowerCase"]()};Dhoom["ABS"]["hudPotionVisibility"]= JSON["parse"](Dhoom["Parameters"]["HUD Potion Visibility"]);Dhoom["ABS"]["hudPotionTone"]= JSON["parse"](Dhoom["Parameters"]["HUD Potion Disabled Tone"]);Dhoom["ABS"]["hudPotion"]= String(Dhoom["Parameters"]["HUD Potion Filename"]);Dhoom["ABS"]["hudPotionPos"]= JSON["parse"](Dhoom["Parameters"]["HUD Potion Position"]);Dhoom["ABS"]["hudPotionText"]= String(Dhoom["Parameters"]["HUD Potion Text"]);Dhoom["ABS"]["hudPotionTextRect"]= JSON["parse"](Dhoom["Parameters"]["HUD Potion Text Rect"]);Dhoom["ABS"]["hudPotionFont"]= {name:String(Dhoom["Parameters"]["HUD Potion Font Name"]),size:Number(Dhoom["Parameters"]["HUD Potion Font Size"]),color:String(Dhoom["Parameters"]["HUD Potion Font Color"]),outlineWidth:Number(Dhoom["Parameters"]["HUD Potion Font Outline Width"]),outlineColor:String(Dhoom["Parameters"]["HUD Potion Font Outline Color"]),bold:JSON["parse"](Dhoom["Parameters"]["HUD Potion Font Bold"]["toLowerCase"]()),italic:JSON["parse"](Dhoom["Parameters"]["HUD Potion Font Italic"]["toLowerCase"]()),align:String(Dhoom["Parameters"]["HUD Potion Text Alignment"])["toLowerCase"]()};Dhoom["ABS"]["evHPRange"]= Number(Dhoom["Parameters"]["Event HP View Range"]);Dhoom["ABS"]["evHPPos"]= JSON["parse"](Dhoom["Parameters"]["Event HP Position"]);Dhoom["ABS"]["evHPBack"]= String(Dhoom["Parameters"]["Event HP Back"]);Dhoom["ABS"]["evHPFill"]= String(Dhoom["Parameters"]["Event HP Fill"]);Dhoom["ABS"]["evHPFillPos"]= JSON["parse"](Dhoom["Parameters"]["Event HP Fill Position"]);sedata= Dhoom["Parameters"]["Attack SE"]["split"]("|")["map"](_0xE93A);Dhoom["ABS"]["defaultEventParams"]= {movement:String(Dhoom["Parameters"]["Movement Type"])["toLowerCase"](),maxhp:Number(Dhoom["Parameters"]["Max HP"]),hpregen:Number(Dhoom["Parameters"]["HP Regeneration"]),type:String(Dhoom["Parameters"]["Attack Type"])["toLowerCase"](),range:Number(Dhoom["Parameters"]["Attack Range"]),damage:JSON["parse"](Dhoom["Parameters"]["Attack Damage"]),critchance:Number(Dhoom["Parameters"]["Critical Chance"]),bulletcritchance:Number(Dhoom["Parameters"]["Critical Chance"]),critmultiplier:Number(Dhoom["Parameters"]["Critical Multiplier"]),bulletcritmult:Number(Dhoom["Parameters"]["Critical Multiplier"]),se:{name:sedata[0],volume:Number(sedata[1]),pitch:Number(sedata[2]),pan:Number(sedata[3])},bullethitanim:Number(Dhoom["Parameters"]["Attack Animation ID"]),bullet:String(Dhoom["Parameters"]["Attack Bullet"]),bulletspeed:Number(Dhoom["Parameters"]["Bullet Speed"]),bulletregion:JSON["parse"](Dhoom["Parameters"]["Bullet Bypass Region"]),bulletpattern:String(Dhoom["Parameters"]["Bullet Pattern"]),bulletangle:Number(Dhoom["Parameters"]["Bullet Pattern Angle"]),bulletamount:Number(Dhoom["Parameters"]["Bullet Amount"]),bulletinterval:Number(Dhoom["Parameters"]["Bullet Pattern Interval"]),bulletrange:Number(Dhoom["Parameters"]["Bullet Range"]),bulletanim:Number(Dhoom["Parameters"]["Bullet Shoot Animation"]),bulletdamage:Number(Dhoom["Parameters"]["Attack Damage"]),bulletse:{name:sedata[0],volume:Number(sedata[1]),pitch:Number(sedata[2]),pan:Number(sedata[3])},bulletknockbackduration:Number(Dhoom["Parameters"]["Knockback Duration"]),bulletknockbackpower:Number(Dhoom["Parameters"]["Knockback Power"]),bullettile:Dhoom["Parameters"]["Bullet Tile"]["split"](" ")["map"](_0xE988),attackanim:Number(Dhoom["Parameters"]["Attack Animation ID"]),frequency:Number(Dhoom["Parameters"]["Attack Frequency"]),bulletfrequency:Number(Dhoom["Parameters"]["Attack Frequency"]),wait:Number(Dhoom["Parameters"]["Attack Wait"]),deadanim:Number(Dhoom["Parameters"]["Dead Animation ID"]),respawn:Number(Dhoom["Parameters"]["Respawn Time"]),healtarget:Number(Dhoom["Parameters"]["Heal Target"]),healvalue:JSON["parse"](Dhoom["Parameters"]["Heal Value"]),healanim:Number(Dhoom["Parameters"]["Heal Animation"]),healcast:Number(Dhoom["Parameters"]["Heal Cast Animation"]),healrange:Number(Dhoom["Parameters"]["Heal Range"]),healfreq:Number(Dhoom["Parameters"]["Heal Frequency"]),knockbackpower:Number(Dhoom["Parameters"]["Knockback Power"]),knockbackduration:Number(Dhoom["Parameters"]["Knockback Duration"]),knockbackanimation:Number(Dhoom["Parameters"]["Knockback Animation"]),immunity:String(Dhoom["Parameters"]["Attack Immunity"])};Dhoom["ABS"]["keyCommand"]= String(Dhoom["Parameters"]["Key Option Command"]);Dhoom["ABS"]["keyWindow"]= Dhoom["loadParam"]("Key Option Window");Dhoom["ABS"]["keyTerms"]= Dhoom["loadParam"]("Key Option Terms");Dhoom["ABS"]["remapWindow"]= Dhoom["loadParam"]("Remap Window");if(Imported["Fogo_EventRadius"]){Dhoom["ABS"]["containsEvent"]= _0xE9D6};if(!Imported["Quasi_Input"]){throw  new Error("Quasi Input plugin is required, and this plugin has to be under it.")};Dhoom["ABS"]["inputCursor"]= Dhoom["loadParam"]("Target Cursor Input");QuasiInput["remapped"]["dabsswitch"]= Dhoom["loadParam"]("Switch Attack Mode Input")["map"](_0xEA24);QuasiInput["remapped"]["dabsattack"]= Dhoom["loadParam"]("Attack Input")["map"](_0xEA72);QuasiInput["remapped"]["dabsbomb"]= Dhoom["loadParam"]("Bomb Input")["map"](_0xEAC0);QuasiInput["remapped"]["dabspotion"]= Dhoom["loadParam"]("Potion Input")["map"](_0xEB0E);QuasiInput["remapped"]["dabspointerup"]= Dhoom["ABS"]["inputCursor"]["up"]["map"](_0xEB5C);QuasiInput["remapped"]["dabspointerdown"]= Dhoom["ABS"]["inputCursor"]["down"]["map"](_0xEBAA);QuasiInput["remapped"]["dabspointerleft"]= Dhoom["ABS"]["inputCursor"]["left"]["map"](_0xEBF8);QuasiInput["remapped"]["dabspointerright"]= Dhoom["ABS"]["inputCursor"]["right"]["map"](_0xEC46);QuasiInput["remapped"]["dabsmenu"]= QuasiInput["remapped"]["escape"]["clone"]();QuasiInput["remapped"]["ok"]["push"]("gamepada");QuasiInput["remapped"]["escape"]["push"]("gamepadb");QuasiInput["remapped"]["shift"]["push"]("gamepadx");QuasiInput["remapped"]["pageup"]["push"]("gamepadlb");QuasiInput["remapped"]["pagedown"]["push"]("gamepadrb");QuasiInput["remapped"]["up"]["push"]("gamepadup");QuasiInput["remapped"]["down"]["push"]("gamepaddown");QuasiInput["remapped"]["left"]["push"]("gamepadleft");QuasiInput["remapped"]["right"]["push"]("gamepadright");QuasiInput["remapped"]["dabsmenu"]["push"]("gamepady");Input["gamepadMapper"]= {0:"gamepada",1:"gamepadb",2:"gamepadx",3:"gamepady",4:"gamepadlb",5:"gamepadrb",6:"gamepadlt",7:"gamepadrt",8:"gamepadback",9:"gamepadstart",10:"gamepadtl",11:"gamepadtr",12:"gamepadup",13:"gamepaddown",14:"gamepadleft",15:"gamepadright",16:"gamepadxup",17:"gamepadxdown",18:"gamepadxleft",19:"gamepadxright"};ConfigManager["keys"]= JSON["parse"](JSON["stringify"](QuasiInput["remapped"]));Dhoom["ABS"]["QuasiInput_remap"]= QuasiInput["remap"];QuasiInput["remap"]= _0xEC94;Dhoom["ABS"]["Input_updateGamepadState"]= Input["_updateGamepadState"];Input["_updateGamepadState"]= _0xECE2;Input["_initGamepadRightAxis"]= _0xED30;Dhoom["ABS"]["Input_anyTriggered"]= Input["anyTriggered"];Input["anyTriggered"]= _0xED7E;if( typeof TouchInput["_mouseX"]=== "undefined"){Dhoom["ABS"]["TouchInput_clear"]= TouchInput["clear"];TouchInput["clear"]= _0xEDCC;Object["defineProperty"](TouchInput,"mouseX",{get:_0xEE1A,configurable:true});Object["defineProperty"](TouchInput,"mouseY",{get:_0xEE68,configurable:true});Dhoom["ABS"]["TouchInput_onMouseMove"]= TouchInput["_onMouseMove"];TouchInput["_onMouseMove"]= _0xEEB6};Dhoom["ABS"]["TouchInput_clear2"]= TouchInput["clear"];TouchInput["clear"]= _0xEF04;Dhoom["ABS"]["TouchInput_onMouseUp"]= TouchInput["_onMouseUp"];TouchInput["_onMouseUp"]= _0xEF52;TouchInput["isRightPressed"]= _0xEFA0;Dhoom["ABS"]["TouchInput_onRightButtonDown"]= TouchInput["_onRightButtonDown"];TouchInput["_onRightButtonDown"]= _0xEFEE;Dhoom["ABS"]["Bitmap_initialize"]= Bitmap["prototype"]["initialize"];Bitmap["prototype"]["initialize"]= _0xF03C;Dhoom["ABS"]["Bitmap_makeFontNameText"]= Bitmap["prototype"]["_makeFontNameText"];Bitmap["prototype"]["_makeFontNameText"]= _0xF08A;Bitmap["prototype"]["changeTextStyle"]= _0xF0D8;Dhoom["ABS"]["Bitmap_drawTextOutline"]= Bitmap["prototype"]["_drawTextOutline"];Bitmap["prototype"]["_drawTextOutline"]= _0xF126;Dhoom["ABS"]["Game_Temp_setDestination"]= Game_Temp["prototype"]["setDestination"];Game_Temp["prototype"]["setDestination"]= _0xF174;Dhoom["ABS"]["Game_Temp_clearDestination"]= Game_Temp["prototype"]["clearDestination"];Game_Temp["prototype"]["clearDestination"]= _0xF1C2;Dhoom["ABS"]["Game_Temp_isDestinationValid"]= Game_Temp["prototype"]["isDestinationValid"];Game_Temp["prototype"]["isDestinationValid"]= _0xF210;Game_System["prototype"]["isDABSActive"]= _0xF25E;Object["defineProperties"](Game_Character["prototype"],{DABSmhp:{get:_0xF2AC,configurable:true},DABShp:{get:_0xF2FA,set:_0xF348,configurable:true}});Game_Character["prototype"]["DABSResetParams"]= _0xF396;Game_Character["prototype"]["DABSParams"]= _0xF3E4;Game_Character["prototype"]["getSprite"]= _0xF432;Game_Character["prototype"]["isDABSEvent"]= _0xF480;Game_Character["prototype"]["DABSKnockback"]= _0xF4CE;Game_Character["prototype"]["updateDABSKnockback"]= _0xF51C;Game_Character["prototype"]["isDABSDead"]= _0xF56A;Game_Character["prototype"]["DABSDead"]= _0xF5B8;Game_Character["prototype"]["DABSHPRate"]= _0xF606;Game_Character["prototype"]["DABSCanAttack"]= _0xF654;Game_Character["prototype"]["DABSAttack"]= _0xF6A2;Game_Character["prototype"]["getDABSTarget"]= _0xF6F0;Game_Character["prototype"]["DABSStartRangeAttack"]= _0xF73E;Game_Character["prototype"]["DABSShoot"]= _0xF78C;Game_Character["prototype"]["updateDABSShoot"]= _0xF7DA;Game_Character["prototype"]["DABSDetermineCriticalAttack"]= _0xF828;Game_Character["prototype"]["DABSAdjacentToTarget"]= _0xF876;Game_Character["prototype"]["DABSTurnToTarget"]= _0xF8C4;Game_Character["prototype"]["DABSIsWaiting"]= _0xF912;Dhoom["ABS"]["Game_Character_update"]= Game_Character["prototype"]["update"];Game_Character["prototype"]["update"]= _0xF960;Game_Character["prototype"]["updateDABS"]= _0xF9AE;Game_Character["prototype"]["DABSRespawn"]= _0xF9FC;Game_Character["prototype"]["DABSUpdateRegeneration"]= _0xFA4A;Game_Character["prototype"]["DABSTakeDamage"]= _0xFA98;Game_Character["prototype"]["DABSSlowMovement"]= _0xFAE6;Game_Character["prototype"]["DABSUpdateMoveSpeed"]= _0xFB34;Dhoom["ABS"]["Game_Event_setupPageSettings"]= Game_Event["prototype"]["setupPageSettings"];Game_Event["prototype"]["setupPageSettings"]= _0xFB82;Game_Event["prototype"]["DABSResetParams"]= _0xFBD0;Game_Event["prototype"]["DABSScanNote"]= _0xFC1E;Dhoom["ABS"]["Game_Event_updateSelfMovement"]= Game_Event["prototype"]["updateSelfMovement"];Game_Event["prototype"]["updateSelfMovement"]= _0xFC6C;Game_Event["prototype"]["DABSCanHeal"]= _0xFCBA;Game_Event["prototype"]["DABSGetHealTarget"]= _0xFD08;Game_Event["prototype"]["DABSHealTarget"]= _0xFD56;Game_Event["prototype"]["isDABSEvent"]= _0xFDA4;Game_Event["prototype"]["DABSDead"]= _0xFDF2;Game_Event["prototype"]["DABSApplyDeadAnimation"]= _0xFE40;Game_Event["prototype"]["DABSIsPlayerInRange"]= _0xFE8E;Game_Event["prototype"]["DABSAdjacentToTarget"]= _0xFEDC;Game_Event["prototype"]["updateDABS"]= _0xFF2A;Game_Event["prototype"]["DABSRespawn"]= _0xFF78;Game_Event["prototype"]["DABSIsHPBarVisible"]= _0xFFC6;Object["defineProperties"](Game_Player["prototype"],{DABShp:{get:_0x10014,set:_0x10062,configurable:true}});Dhoom["ABS"]["Game_Player_initMembers"]= Game_Player["prototype"]["initMembers"];Game_Player["prototype"]["initMembers"]= _0x100B0;Game_Player["prototype"]["isDABSEvent"]= _0x100FE;Game_Player["prototype"]["DABSTurnToTarget"]= _0x1014C;Game_Player["prototype"]["updateDABS"]= _0x1019A;Game_Player["prototype"]["DABSAttack"]= _0x101E8;Game_Player["prototype"]["DABSPlaceBomb"]= _0x10236;Game_Player["prototype"]["DABSUsePotion"]= _0x10284;Game_Player["prototype"]["DABSUpdateRegeneration"]= _0x102D2;Game_Player["prototype"]["DABSCanAttack"]= _0x10320;Game_Player["prototype"]["DABSCanPlaceBomb"]= _0x1036E;Game_Player["prototype"]["DABSCanUsePotion"]= _0x103BC;Game_Player["prototype"]["DABSAnyEventAdjacent"]= _0x1040A;Game_Player["prototype"]["DABSTakeDamage"]= _0x10458;Game_Player["prototype"]["DABSDetermineCriticalAttack"]= _0x104A6;Dhoom["ABS"]["Game_Player_triggerTouchActionD2"]= Game_Player["prototype"]["triggerTouchActionD2"];Game_Player["prototype"]["triggerTouchActionD2"]= _0x104F4;Dhoom["ABS"]["Game_Interpreter_pluginCommand"]= Game_Interpreter["prototype"]["pluginCommand"];Game_Interpreter["prototype"]["pluginCommand"]= _0x10542;_0x10590["prototype"]= Object["create"](Game_Picture["prototype"]);_0x10590["prototype"]["constructor"]= _0x10590;_0x10590["prototype"]["initialize"]= _0x105DE;_0x10590["prototype"]["show"]= _0x1062C;_0x10590["prototype"]["update"]= _0x1067A;_0x10590["prototype"]["updatePosition"]= _0x106C8;_0x10590["prototype"]["updateFuse"]= _0x10716;_0x10590["prototype"]["fuseRemainingSecond"]= _0x10764;_0x10590["prototype"]["fuseRemainingMilisecond"]= _0x107B2;_0x10590["prototype"]["fuseRemainingFrame"]= _0x10800;_0x1084E["prototype"]= Object["create"](Game_Picture["prototype"]);_0x1084E["prototype"]["constructor"]= _0x1084E;_0x1084E["prototype"]["initialize"]= _0x1089C;_0x1084E["prototype"]["show"]= _0x108EA;_0x1084E["prototype"]["update"]= _0x10938;_0x1084E["prototype"]["boxCollisionPoint"]= _0x10986;_0x1084E["prototype"]["collisionPoint"]= _0x109D4;_0x1084E["prototype"]["isInRange"]= _0x10A22;_0x10A70["prototype"]= Object["create"](Game_Picture["prototype"]);_0x10A70["prototype"]["constructor"]= _0x10A70;_0x10A70["prototype"]["show"]= _0x10ABE;_0x10A70["prototype"]["calculateEndPoint"]= _0x10B0C;_0x10A70["prototype"]["update"]= _0x10B5A;_0x10BA8["prototype"]= Object["create"](Game_Picture["prototype"]);_0x10BA8["prototype"]["constructor"]= _0x10BA8;_0x10BA8["prototype"]["initialize"]= _0x10BF6;_0x10BA8["prototype"]["show"]= _0x10C44;_0x10BA8["prototype"]["update"]= _0x10C92;_0x10BA8["prototype"]["updatePosition"]= _0x10CE0;_0x10BA8["prototype"]["updateDuration"]= _0x10D2E;_0x10D7C["prototype"]= Object["create"](_0x10BA8["prototype"]);_0x10D7C["prototype"]["constructor"]= _0x10D7C;_0x10D7C["prototype"]["initialize"]= _0x10DCA;_0x10D7C["prototype"]["update"]= _0x10E18;_0x10E66["prototype"]= Object["create"](_0x10BA8["prototype"]);_0x10E66["prototype"]["constructor"]= _0x10E66;_0x10E66["prototype"]["initialize"]= _0x10EB4;_0x10E66["prototype"]["update"]= _0x10F02;Dhoom["ABS"]["Game_Map_setup"]= Game_Map["prototype"]["setup"];Game_Map["prototype"]["setup"]= _0x10F50;Game_Map["prototype"]["DABSCreateBullet"]= _0x10F9E;Game_Map["prototype"]["DABSCreateLaser"]= _0x10FEC;Game_Map["prototype"]["DABSCreateBomb"]= _0x1103A;Game_Map["prototype"]["DABSCreateToxicTile"]= _0x11088;Game_Map["prototype"]["DABSCreateMudTile"]= _0x110D6;Game_Map["prototype"]["DABSBombs"]= _0x11124;Dhoom["ABS"]["Game_Map_update"]= Game_Map["prototype"]["update"];Game_Map["prototype"]["update"]= _0x11172;Game_Map["prototype"]["DABSUpdateBullets"]= _0x111C0;Game_Map["prototype"]["DABSClearBullets"]= _0x1120E;Game_Map["prototype"]["DABSUpdateBombs"]= _0x1125C;Game_Map["prototype"]["DABSClearBombs"]= _0x112AA;Game_Map["prototype"]["DABSClearSprites"]= _0x112F8;Game_Map["prototype"]["DABSClearTiles"]= _0x11346;Game_Map["prototype"]["DABSUpdateTiles"]= _0x11394;Game_Map["prototype"]["DABSRemoveTile"]= _0x113E2;Dhoom["ABS"]["Game_Map_eventsXy"]= Game_Map["prototype"]["eventsXy"];Game_Map["prototype"]["eventsXy"]= _0x11430;Dhoom["ABS"]["Game_Map_eventsXyNt"]= Game_Map["prototype"]["eventsXyNt"];Game_Map["prototype"]["eventsXyNt"]= _0x1147E;Game_Map["prototype"]["mapToCanvasX"]= _0x114CC;Game_Map["prototype"]["mapToCanvasY"]= _0x1151A;Dhoom["ABS"]["Window_Options_makeCommandList"]= Window_Options["prototype"]["makeCommandList"];Window_Options["prototype"]["makeCommandList"]= _0x11568;Window_Options["prototype"]["addKeyOptions"]= _0x115B6;Dhoom["ABS"]["Window_Options_statusText"]= Window_Options["prototype"]["statusText"];Window_Options["prototype"]["statusText"]= _0x11604;Dhoom["ABS"]["Window_Options_processOk"]= Window_Options["prototype"]["processOk"];Window_Options["prototype"]["processOk"]= _0x11652;_0x116A0["prototype"]= Object["create"](Window_Selectable["prototype"]);_0x116A0["prototype"]["constructor"]= _0x116A0;_0x116A0["prototype"]["initialize"]= _0x116EE;_0x116A0["prototype"]["standardPadding"]= _0x1173C;_0x116A0["prototype"]["lineHeight"]= _0x1178A;_0x116A0["prototype"]["termKeys"]= _0x117D8;_0x116A0["prototype"]["maxItems"]= _0x11826;_0x116A0["prototype"]["currentCommand"]= _0x11874;_0x116A0["prototype"]["currentValue"]= _0x118C2;_0x116A0["prototype"]["createBackground"]= _0x11910;_0x116A0["prototype"]["drawItem"]= _0x1195E;_0x119AC["prototype"]= Object["create"](Window_Selectable["prototype"]);_0x119AC["prototype"]["constructor"]= _0x119AC;_0x119AC["prototype"]["initialize"]= _0x119FA;_0x119AC["prototype"]["standardPadding"]= _0x11A48;_0x119AC["prototype"]["maxItems"]= _0x11A96;_0x119AC["prototype"]["maxPageItems"]= _0x11AE4;_0x119AC["prototype"]["maxPageRows"]= _0x11B32;_0x119AC["prototype"]["itemRect"]= _0x11B80;_0x119AC["prototype"]["createBackground"]= _0x11BCE;_0x119AC["prototype"]["drawAllItems"]= _0x11C1C;_0x119AC["prototype"]["drawItem"]= _0x11C6A;_0x119AC["prototype"]["update"]= _0x11CB8;_0x119AC["prototype"]["processCursorMove"]= _0x11D06;_0x119AC["prototype"]["updateKeys"]= _0x11D54;_0x119AC["prototype"]["processHandling"]= _0x11DA2;Sprite_Base["prototype"]["isAnimationIdPlaying"]= _0x11DF0;Sprite_Base["prototype"]["stopAnimation"]= _0x11E3E;Sprite_Base["prototype"]["stopAnimationId"]= _0x11E8C;_0x11EDA["prototype"]= Object["create"](Sprite_Picture["prototype"]);_0x11EDA["prototype"]["constructor"]= _0x11EDA;_0x11EDA["prototype"]["initialize"]= _0x11F28;_0x11EDA["prototype"]["picture"]= _0x11F76;_0x11EDA["prototype"]["startAnimation"]= _0x11FC4;_0x11EDA["prototype"]["createCountdownSprite"]= _0x12012;_0x11EDA["prototype"]["refreshCountdown"]= _0x12060;_0x11EDA["prototype"]["update"]= _0x120AE;_0x11EDA["prototype"]["updateLayer"]= _0x120FC;_0x1214A["prototype"]= Object["create"](Sprite_Picture["prototype"]);_0x1214A["prototype"]["constructor"]= _0x1214A;_0x1214A["prototype"]["initialize"]= _0x12198;_0x1214A["prototype"]["picture"]= _0x121E6;_0x1214A["prototype"]["updateLayer"]= _0x12234;_0x12282["prototype"]= Object["create"](Sprite_Damage["prototype"]);_0x12282["prototype"]["constructor"]= _0x12282;_0x12282["prototype"]["initialize"]= _0x122D0;_0x12282["prototype"]["digitHeight"]= _0x1231E;_0x12282["prototype"]["showDamagePlayer"]= _0x1236C;_0x12282["prototype"]["showDamageEvent"]= _0x123BA;_0x12282["prototype"]["showDamage"]= _0x12408;_0x12282["prototype"]["update"]= _0x12456;_0x12282["prototype"]["updatePosition"]= _0x124A4;_0x124F2["prototype"]= Object["create"](_0x12282["prototype"]);_0x124F2["prototype"]["constructor"]= _0x124F2;_0x124F2["prototype"]["initialize"]= _0x12540;_0x124F2["prototype"]["showDamagePlayer"]= _0x1258E;_0x124F2["prototype"]["showDamageEvent"]= _0x125DC;Dhoom["ABS"]["Sprite_Character_update"]= Sprite_Character["prototype"]["update"];Sprite_Character["prototype"]["update"]= _0x1262A;Sprite_Character["prototype"]["updateDABSDamage"]= _0x12678;Sprite_Character["prototype"]["isDABSEvent"]= _0x126C6;Sprite_Character["prototype"]["updateDABSHPBar"]= _0x12714;Sprite_Character["prototype"]["createDABSHPBar"]= _0x12762;Sprite_Character["prototype"]["refreshDABSHPBar"]= _0x127B0;Dhoom["ABS"]["Sprite_Picture_loadBitmap"]= Sprite_Picture["prototype"]["loadBitmap"];Sprite_Picture["prototype"]["loadBitmap"]= _0x127FE;_0x1284C["prototype"]= Object["create"](Sprite["prototype"]);_0x1284C["prototype"]["constructor"]= _0x1284C;_0x1284C["prototype"]["initialize"]= _0x1289A;_0x1284C["prototype"]["refresh"]= _0x128E8;_0x1284C["prototype"]["update"]= _0x12936;_0x1284C["prototype"]["updateMove"]= _0x12984;_0x1284C["prototype"]["processSnapping"]= _0x129D2;_0x1284C["prototype"]["updatePosition"]= _0x12A20;_0x12A6E["prototype"]= Object["create"](Sprite["prototype"]);_0x12A6E["prototype"]["constructor"]= _0x12A6E;_0x12A6E["prototype"]["initialize"]= _0x12ABC;_0x12A6E["prototype"]["update"]= _0x12B0A;_0x12A6E["prototype"]["updateBullets"]= _0x12B58;_0x12BA6["prototype"]= Object["create"](Sprite["prototype"]);_0x12BA6["prototype"]["constructor"]= _0x12BA6;_0x12BA6["prototype"]["initialize"]= _0x12BF4;_0x12BA6["prototype"]["update"]= _0x12C42;_0x12BA6["prototype"]["updateBullets"]= _0x12C90;_0x12BA6["prototype"]["createAnimation"]= _0x12CDE;_0x12BA6["prototype"]["updateAnimations"]= _0x12D2C;_0x12D7A["prototype"]= Object["create"](Sprite["prototype"]);_0x12D7A["prototype"]["constructor"]= _0x12D7A;_0x12D7A["prototype"]["initialize"]= _0x12DC8;_0x12D7A["prototype"]["update"]= _0x12E16;_0x12D7A["prototype"]["updateTiles"]= _0x12E64;_0x12EB2["prototype"]= Object["create"](Sprite["prototype"]);_0x12EB2["prototype"]["constructor"]= _0x12EB2;_0x12EB2["prototype"]["initialize"]= _0x12F00;_0x12EB2["prototype"]["createSprites"]= _0x12F4E;_0x12EB2["prototype"]["createHPBarSprite"]= _0x12F9C;_0x12EB2["prototype"]["createAttackSprite"]= _0x12FEA;_0x12EB2["prototype"]["refreshAttackButton"]= _0x13038;_0x12EB2["prototype"]["createBombSprite"]= _0x13086;_0x12EB2["prototype"]["createPotionSprite"]= _0x130D4;_0x12EB2["prototype"]["createAttackCursor"]= _0x13122;_0x12EB2["prototype"]["refreshHPBar"]= _0x13170;_0x12EB2["prototype"]["refreshBombText"]= _0x131BE;_0x12EB2["prototype"]["refreshPotionText"]= _0x1320C;_0x12EB2["prototype"]["update"]= _0x1325A;_0x12EB2["prototype"]["updateTargetCursor"]= _0x132A8;_0x12EB2["prototype"]["updateAttackSwitchInput"]= _0x132F6;_0x12EB2["prototype"]["updateVisibility"]= _0x13344;_0x12EB2["prototype"]["updateInput"]= _0x13392;_0x12EB2["prototype"]["isSpriteTouched"]= _0x133E0;_0x12EB2["prototype"]["isSpriteHovered"]= _0x1342E;_0x12EB2["prototype"]["isTouched"]= _0x1347C;_0x12EB2["prototype"]["updateMouseCursor"]= _0x134CA;_0x12EB2["prototype"]["updateHoverTone"]= _0x13518;Dhoom["ABS"]["Spriteset_Map_createTilemap"]= Spriteset_Map["prototype"]["createTilemap"];Spriteset_Map["prototype"]["createTilemap"]= _0x13566;Dhoom["ABS"]["Spriteset_Map_createUpperLayer"]= Spriteset_Map["prototype"]["createUpperLayer"];Spriteset_Map["prototype"]["createUpperLayer"]= _0x135B4;Spriteset_Map["prototype"]["getCharacterSprite"]= _0x13602;Dhoom["ABS"]["Spriteset_Map_prototype_update"]= Spriteset_Map["prototype"]["update"];Spriteset_Map["prototype"]["update"]= _0x13650;Dhoom["ABS"]["Scene_Map_terminate"]= Scene_Map["prototype"]["terminate"];Scene_Map["prototype"]["terminate"]= _0x1369E;Dhoom["ABS"]["Scene_Map_processMapTouch"]= Scene_Map["prototype"]["processMapTouch"];Scene_Map["prototype"]["processMapTouch"]= _0x136EC;Dhoom["ABS"]["Scene_Map_isMenuCalled"]= Scene_Map["prototype"]["isMenuCalled"];Scene_Map["prototype"]["isMenuCalled"]= _0x1373A;if(Imported["TDDP_MouseSystemEx"]){TDDP_MouseSystemEx["_eventsXy"]= _0x13788};Dhoom["ABS"]["Scene_Map_update"]= Scene_Map["prototype"]["update"];Scene_Map["prototype"]["update"]= _0x137D6;Dhoom["ABS"]["Scene_Options_create"]= Scene_Options["prototype"]["create"];Scene_Options["prototype"]["create"]= _0x13824;Dhoom["ABS"]["Scene_Options_createOptionsWindow"]= Scene_Options["prototype"]["createOptionsWindow"];Scene_Options["prototype"]["createOptionsWindow"]= _0x13872;Scene_Options["prototype"]["createKeyOptionsWindow"]= _0x138C0;Scene_Options["prototype"]["onKeyOptionCommand"]= _0x1390E;Scene_Options["prototype"]["onKeyOptionOk"]= _0x1395C;Scene_Options["prototype"]["onKeyOptionCancel"]= _0x139AA;Scene_Options["prototype"]["onRemapOptionOk"]= _0x139F8
})();
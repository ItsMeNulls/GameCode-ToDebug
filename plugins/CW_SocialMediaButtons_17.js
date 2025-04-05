//=======================================================================
// Social Media Buttons/In-Game Website Plugin (RMMV) v1.6
//=======================================================================
// * The Social Media Buttons/In-Game Website plugin is a simple plugin
//	 to add social media buttons to the Title Screen.  Clicking on them
//	 opens a new window with their respective URLs displayed.
//
//   This was inspired by Yanfly's excellent "External Links" plugin. I
//	 You can  also use  the plugin  to display a  web page  in-game  by
//	 calling a Plugin Command and the URL in an event.
//
//   This was inspired by Yanfly's excellent "External Links" plugin. I
//   integrated it into "Adventures of Tryggr", then into "Otherworld",
//   but wrote my own to trim out some of the superfluous code and make
//   it more compatible with "Otherworld"'s menu.
//
//	 So based on that same principle, I decided to add a separate block
//	 on the Title Screen to contain  "Otherworld"'s Twitter account and
//	 official  blogsite,  as well as  RPG  Maker  Times Facebook  page,
//	 rather than putting them in the main menu, to declutter it. I then
//	 adapted it for more general use.
//
//	 The plugin only has 3 social  media buttons (Twitter, Facebook and
//	 Website) displayed on the Title Screen, but more may be added over
//	 time. You have a choice on whether to open the links in a separate
//	 game window or in your default browser.
//
//       * © 2016, Companion Wulf
//
//========================================================================
// CW_SocialMediaButtons_17.js
//========================================================================
 
var Imported = Imported || {}; Imported.CW_SocialMediaButtons = true;
var CWT = CWT || {}; CWT.SMB = CWT.SMB || {};

CWT.SMB.Version = 1.6;
CWT.SMB.Build = 8.7;
CWT.SMB.Copyright = '© 2016, Companion Wulf';

/*:
 @plugindesc Add social media buttons to the Title Screen.
 @author Companion Wulf
 
 @param Twitter Toggle
 @desc Toggles Twitter button On/Off.
 @default On

 @param Twitter Action
 @desc The action/behaviour type of the Twitter button (Screen Name, User ID or Follow).
 @default Screen Name

 @param Twitter Account
 @desc Your Twitter Username or User ID.
 @default CompanionWulf

 @param Facebook Toggle
 @desc Toggles Facebook button On/Off.
 @default On

 @param Facebook Page Name
 @desc The name of your project's Facebook page.
 @default RPGMakerTimes

 @param Google+ Toggle
 @desc Toggles Google Plus button On/Off.
 @default On

 @param Google+ Account
 @desc Your Google+ name or ID.
 @default +RpgmakertimesInfo

 @param Website Toggle
 @desc Toggles Website button On/Off.
 @default On

 @param Website URL
 @desc The URL to show your website.
 @default http://blog.rpgmakertimes.info

 @param Display Method
 @desc Choose to display in a Window or Browser
 @default Window

 @param Icons
 @desc The list of icons to use for the social media buttons.
 @default OW-Twitter, OW-Facebook, OW-GooglePlus, OW-Website
 
 @help
 The Social Media Buttons/In-Game Website plugin only has three right now:
 Twitter, Facebook and Website. The plugin will be improved over time,
 including adding more buttons and being able to adjust its position
 on-screen (currently it shows in the bottom right corner).

 You can also call a website from within the game (see Plugin Commands
 below).

 NOTE: If playing in a browser, the URL might not open if you have a popup
 blocker, so make sure you allow it. In Windows versions, a new window
 will open to display the website.

 ==============================================================
  * TWITTER *
 ==============================================================
 These are the settings for sharing Twitter accounts via your games.

 --------------------------------------------------------------
  Twitter Toggle
 --------------------------------------------------------------
 This setting turns the Twitter button ON or OFF.

 --------------------------------------------------------------
  Twitter Action
 --------------------------------------------------------------
 Twitter Action is the behaviour type of the Twitter button. You can
 use one of three options: Screen Name, User ID or Follow.

 Screen Name - The user name of the Twitter account you'd like your
 	players to visit. 

 User ID - The unique identifier of the Twitter account.

 	To find your User ID, log into your Twitter account and go into
 	"Settings", then under "Your Twitter Data", your User ID is right
 	under your Username. (You will have to reenter your password to
 	access this area.)

 	Alternatively, go to https://tweeterid.com/ and enter the Twitter
 	"handle" to find the User ID number (or vice versa).

 Follow - Enables players to follow your Twitter account directly
 	from within RPG Maker MV, whether in a window or browser. As long
 	as the "Twitter Action Settings" is set correctly, this will
 	automatically use the Screen Name or User ID.

 --------------------------------------------------------------
  Twitter Account
 --------------------------------------------------------------
 This sets the Username or User ID for the Twitter account you wish to
 use. It's used in conjunction with the "Twitter Action" setting.

 For example, if you set that as "Screen Name", mine is "CompanionWulf",
 which will then lead to the my "RPG Maker Times" account there.

 Bear in mind, however, that Usernames change often so it's probably
 better to use the User ID, as it's unique to each account whatever the
 Username may be.

 ==============================================================
  * FACEBOOK *
 ==============================================================
 These are the settings for sharing a Facebook page from within RMMV.

 --------------------------------------------------------------
  Facebook Toggle
 --------------------------------------------------------------
 Show (ON) or hide (OFF) the Facebook button on-screen.

 --------------------------------------------------------------
  Facebook Page Name
 --------------------------------------------------------------
 This is the page name reference to display your Facebook page.

 For example, mine is "RPGMakerTimes" there, so clicking on the
 button will go to my "RPG Maker Times & Projects" page.

 ==============================================================
  * GOOGLE+ *
 ==============================================================
 These options are to share a Google+ profile from within RMMV.

 --------------------------------------------------------------
  Google+ Toggle
 --------------------------------------------------------------
 Show (ON) or hide (OFF) the Google+ button on the Title Screen.

 --------------------------------------------------------------
  Google+ Account
 --------------------------------------------------------------
 Google+ has two options (depending on how you've set it up).

 In most cases you can use your page or profile name, preceded
 by the + sign. For instance, mine is "RpgmakertimesInfo" there,
 so I'd put

 	+RpgmakertimesInfo

 in this option. NOTE: You *must* include the + sign, otherwise you'll
 receive a Page Not Found Error.

 You can also set your 21-digit User ID number here. If you click on
 your Profile and you'll see your ID number.

 In most cases, however, your page or profile name is already set up
 with the + sign identifier (because of Google+'s updates).

 ==============================================================
  * WEBSITE *
 ==============================================================
 These options set the website address you'd like visitors to go
 to when they click the button.

 --------------------------------------------------------------
  Website Toggle
 --------------------------------------------------------------
 Turns the Website icon ON or OFF.

 --------------------------------------------------------------
  Website URL
 --------------------------------------------------------------
 This is for setting your full website address. When the button
 is clicked, it'll open in a window or browser.

 ==============================================================
  * DISPLAY METHOD *
 ==============================================================
 This selects how to display the "Website URL". You can choose to
 display your link in a game Window or in your default Browser.

 ==============================================================
  * PLUGIN COMMANDS *
 ==============================================================
 You can also call a website from within the game using the following
 Plugin Command:

 showurl url

 where "url" is the FULL web address to open. This will open in a new
 window or browser tab (depending on the "Display Method" setting above).

 ==============================================================
  * ICONS *
 ==============================================================
 These are the icons you want to use for your social media buttons,
 separated by commas (Twitter, Facebook and Website).

 Recommended size is 32x32.

 Save these in the Pictures folder. If you use your own icons, be sure
 to change the settings to the filenames you used.

  

 ==============================================================
  * TERMS & CONDITIONS OF USE *
 ==============================================================
 This plugin is free to use under CC BY-NC 4.0, but please refer to
 the RPG Maker Times blogsite for other details, including for
 commercial use.
 
 Credit "Companion Wulf" or "RPG Maker Times" if using this plugin
 in your projects.
 
	For all Terms of Use, visit: http://wp.me/P2Vm8L-1z4
*/

(function() {

	CWT.parameters = PluginManager.parameters('CW_SocialMediaButtons_17');
	// Twitter
	CWT.twitterToggle = String(CWT.parameters['Twitter Toggle'] || 'ON');
	CWT.twitterIntent = String(CWT.parameters['Twitter Action'] || 'Screen Name');
	CWT.twitterIntentSettings = String(CWT.parameters['Twitter Account'] || 'Twitter');
	// Facebook
	CWT.facebookToggle = String(CWT.parameters['Facebook Toggle'] || 'ON');
	CWT.facebookUrl = String(CWT.parameters['Facebook Page Name'] || 'https://patreon.com');
	// Google+
	CWT.googlePlusToggle = String(CWT.parameters['Google+ Toggle'] || 'ON');
	CWT.googlePlusUrl = String(CWT.parameters['Google+ Account'] || 'https://plus.google.com');
	// Website
	CWT.websiteToggle = String(CWT.parameters['Website Toggle'] || 'ON');
	CWT.websiteUrl = String(CWT.parameters['Website URL'] || '');
	// Display Method
	CWT.displayMethod = String(CWT.parameters['Display Method' || 'Window']);
	// Icons
	CWT.showIcons = CWT.parameters['Icons'].split(/\s*,\s*/).filter(function(idx) { return idx; });

	CWT._alias_Scene_Title_create = Scene_Title.prototype.create;
	Scene_Title.prototype.create = function() {
		CWT._alias_Scene_Title_create.call(this);
		this.createSocialButtons();
	};

	CWT._alias_GameInterpreter_pluginCommand = Game_Interpreter.prototype.command988;
	Game_Interpreter.prototype.command988 = function(command, args) {
		if (command.toUpperCase() === 'SHOWURL') {
			var uri = args[0];
			switch(CWT.displayMethod.toUpperCase()) {
				case 'WINDOW':
					var urlWin = window.open(uri, '_blank');
					if (urlWin) { urlWin.focus(); } else { return false; };
					break;
				case 'BROWSER':
					var gui = require('nw.gui');
					gui.Shell.openExternal(uri);
					break;
			}
		}
	};

	// ** Social Media Buttons
	Scene_Title.prototype.createSocialButtons = function() {
		// * Create Buttons
		this._twitterButton = new Sprite_Button();
		this._twitterButton.bitmap = ImageManager.loadPicture(CWT.showIcons[3]);
		this._facebookButton = new Sprite_Button();
		this._facebookButton.bitmap = ImageManager.loadPicture(CWT.showIcons[1]);
		this._googleButton = new Sprite_Button();
		this._googleButton.bitmap = ImageManager.loadPicture(CWT.showIcons[2]);
		this._websiteButton = new Sprite_Button();
		this._websiteButton.bitmap = ImageManager.loadPicture(CWT.showIcons[0]);
		// * Add Buttons
		this.addChild(this._websiteButton);
		this.addChild(this._facebookButton);
		this.addChild(this._googleButton);
		this.addChild(this._twitterButton);
		// * Set Commands
		this._websiteButton.setClickHandler(this.visitWebsite.bind(this));
		this._facebookButton.setClickHandler(this.visitFacebook.bind(this));
		this._googleButton.setClickHandler(this.visitGooglePlus.bind(this));
		this._twitterButton.setClickHandler(this.visitTwitter.bind(this));
		// * Position Buttons Block
		this.positionBlock(20, 700);
	};

	String.isUserId = function(txt) {
		if (txt.match(/^[0-9]+$/)) { return true } else { return false};
	};

	Scene_Title.prototype.visitTwitter = function() {
		var _twitterUrl = 'https://twitter.com/intent/';
		var _twitterIntent = CWT.twitterIntent.toLowerCase();
		switch (_twitterIntent) {
			case 'screen name':
				var text = 'user?screen_name=';
				break;
			case 'user id':
				var text = 'user?user_id=';
				break;
			case 'follow':
				String.isUserId(CWT.twitterIntentSettings) ? txt = 'user_id=' : txt = 'screen_name=';
				text = 'follow?'+txt;
				break;
			default:
				var text = 'user?screen_name=';
				break;
		}
		this.openUrl(_twitterUrl+text+CWT.twitterIntentSettings);
	};

	Scene_Title.prototype.visitFacebook = function() {
		fb = 'https://patreon.com/'+CWT.facebookUrl;
		this.openUrl(fb);
	};

	Scene_Title.prototype.visitGooglePlus = function() {
		// https://plus.google.com/+RpgmakertimesInfo/posts
		gp = 'https://plus.google.com/'+CWT.googlePlusUrl;
		this.openUrl(gp);
	};

	Scene_Title.prototype.visitWebsite = function() {
		this.openUrl(CWT.websiteUrl);
	}

	Scene_Title.prototype.openUrl = function(uri) {
		if (!this.isBusy()) {
			switch(CWT.displayMethod.toUpperCase()) {
				case 'WINDOW':
					var urlWin = window.open(uri, '_blank');
					if (urlWin) { urlWin.focus(); } else { return false; };
					break;
				case 'BROWSER':
					var gui = require('nw.gui');
					gui.Shell.openExternal(uri);
					break;
			}
		}
	};

	Scene_Title.prototype.positionBlock = function(x, y) {
		if (CWT.websiteToggle.toUpperCase() === 'ON') this._websiteButton.x = x, this._websiteButton.y = y;
		if (CWT.facebookToggle.toUpperCase() === 'ON') this._facebookButton.x = x += 50, this._facebookButton.y = y;
	};

})();
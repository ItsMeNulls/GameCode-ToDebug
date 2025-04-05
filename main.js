//=============================================================================
// main.js
//=============================================================================

PluginManager.setup($plugins);

// Restore ability to load unencrypted content
DataManager.loadDatabase = (function(load_database, load_datafile, load_system_images) {
    return function() {
        DataManager.loadDatabase = load_database.bind(DataManager);
        DataManager.loadDataFile = load_datafile.bind(DataManager);
        Dhoom.Live2DContacts.isEncrypted = function() { return false; };
        Scene_Boot.loadSystemImages = function() {
            Decrypter.hasEncryptedAudio = false;
            Decrypter.hasEncryptedImages = false;
            load_system_images();
        };
        return DataManager.loadDatabase();
    };
})(DataManager.loadDatabase, DataManager.loadDataFile, Scene_Boot.loadSystemImages);

window.onload = function() {
    SceneManager.run(Scene_Boot);
};

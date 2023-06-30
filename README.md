# youtube-transcript-to-obsidian
Firefox plugin to import all opening YouTube video to Obsidian vault with transcription

**Important**: the plugin is active development, please keep in mind

## Install

### Clone repo

```git clone ```

### Update settings.js

```edit settings.js```

### Add temporary Firefox extension

Open [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox)

Click on `Load Temporary Add-On...`

Choose `manifest.json` from cloned repo

Click on `Reload` button for the extension

## Configuration

Update settings.js for your settings

|Settings| Description                               | Default      |
|-|-------------------------------------------|--------------|
|VAULT_NAME| Name of your vault in Obsidian            | zettelkasten |
|VIDEO_PATH_PREFIX| Prefix for your video folder if it exists | video/       |
|START_TIMEOUT| Name of your vault in Obsidian            | 3000         |

## Usage

Open any YouTube video

After 3 seconds new tab will open with Advanced URI

It will redirect you to your Obsidian vault with new note that would contain YouTube link and transcript of the video

![image](https://github.com/alifanov/youtube-transcript-to-obsidian/assets/2394285/d986a346-6104-4c01-9075-04f2580364b5)

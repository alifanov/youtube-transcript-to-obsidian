# youtube-transcript-to-obsidian
Firefox plugin to import all opening YouTube video to Obsidian vault with transcription

**Important**: the plugin is active development, please keep in mind

## Requirements

https://vinzent03.github.io/obsidian-advanced-uri/

Current extension requires the Obsidian plugin for work

## Install

### Clone repo

```git clone git@github.com:alifanov/youtube-transcript-to-obsidian.git```

### Update settings

Open `content.js` and update settings

|Settings| Description | Unit |Default      |
|-|-------------------------------------------|-|-------------|
|VAULT_NAME| Name of your vault in Obsidian|str|zettelkasten |
|VIDEO_PATH_PREFIX| Prefix for your video folder if it exists|str | video/      |
|START_TIMEOUT| Name of your vault in Obsidian|ms| 3000         |

### Add temporary Firefox extension

Open [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox)

Click on `Load Temporary Add-On...`

Choose `manifest.json` from cloned repo

Click on `Reload` button for the extension

## Usage

Open any YouTube video

After 3 seconds new tab will open with Advanced URI

It will redirect you to your Obsidian vault with new note that would contain YouTube link and transcript of the video

![image](https://github.com/alifanov/youtube-transcript-to-obsidian/assets/2394285/d986a346-6104-4c01-9075-04f2580364b5)

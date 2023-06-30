const VAULT_NAME = 'zettelkasten';
const VIDEO_PATH_PREFIX = 'video/';
const START_TIMEOUT = 3000;


let handler = function () {
    const currentURL = window.location.href;
    const pageTitle = document.title.replace(/[\/:#-().']/g, ' ');
    if (currentURL.indexOf('watch') !== -1) {
        const url = 'https://www.youtube.com/youtubei/v1/get_transcript?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8';
        const headers = {
            'Content-Type': 'application/json'
        };

        const searchParams = new URLSearchParams(window.location.search);

        const data = {
            "context": {
                "client": {
                    "clientName": "WEB",
                    "clientVersion": "2.9999099"
                }
            },
            "params": btoa('\n\x0b' + searchParams.get('v'))
        };

        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                const transcripts = data.actions[0].updateEngagementPanelAction.content.transcriptRenderer.body.transcriptBodyRenderer.cueGroups;
                const lines = transcripts.map((cue) => cue.transcriptCueGroupRenderer.cues[0].transcriptCueRenderer.cue.simpleText.replace(/[-]/g, '').replace('%', 'percent'));
                browser.runtime.sendMessage({
                    action: 'openTab',
                    url: 'obsidian://advanced-uri?vault=' + VAULT_NAME + '&filepath=' + VIDEO_PATH_PREFIX + encodeURIComponent(pageTitle) + '&data=' + encodeURIComponent(window.location.href + ' ' + lines)
                });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
};

setTimeout(handler, START_TIMEOUT)

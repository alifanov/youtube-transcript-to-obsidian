let handler = function () {
    let currentDomain = window.location.hostname;

    const currentURL = window.location.href;
    let pageTitle = document.title;
    if (currentURL.indexOf('watch') !== -1) {
        let url = 'https://www.youtube.com/youtubei/v1/get_transcript?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8';
        let headers = {
            'Content-Type': 'application/json'
        };

        const searchParams = new URLSearchParams(window.location.search);

        let data = {
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
                    url: 'obsidian://advanced-uri?vault=zettelkasten&filepath=video/' + encodeURIComponent(pageTitle.replace(/[\/:#-]/g, ' ')) + '&data=' + encodeURIComponent(window.location.href + ' ' + lines)
                });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
};

setTimeout(handler, 3000)

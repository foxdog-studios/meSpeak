# meSpeak

Text to speech that works with webaudio.

[meSpeak.js](http://www.masswerk.at/mespeak/) packaged for meteor and bower.

Currently using meSpeak v.1.9.6

## Usage

### Basic

    // You must load the config first
    meSpeak.loadConfig('/packages/fds_mespeak/mespeak_config.json');

    // Then Load a voice
    meSpeak.loadVoice('/packages/fds_mespeak/voices/en/en.json');

    // talk!
    meSpeak('Once the config and voice are loaded you can start talking');


### With webaudio

    // Use with web audio

    buffer = meSpeak('This is for those who want to create weird things', {
        rawdata: true
    });

    ctx = new AudioContext();

    bufferSource = ctx.createBufferSource();
    bufferSource.connect(ctx.destination);

    ctx.decodeAudioData(buffer, function(decodedBuffer) {
        bufferSource.buffer = decodedBuffer;
        bufferSource.start();
    });


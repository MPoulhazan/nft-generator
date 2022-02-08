const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = 'QNFTip';
const description = 'Q-NFTip collecion';

//IMAGE URL
const baseUri = 'ipfs://QmXGtc5CrjweLMXtKxBiX1iit48qtpBrWgeHKYcdDFXad2';

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
    {
        growEditionSizeTo: 10000,
        layersOrder: [
            { name: 'Background' },
            { name: 'Neck' },
            { name: 'Qtip' },
            { name: 'Body' },
            { name: 'Eyes' },
            { name: 'Glasses' },
            { name: 'Hair' },
            { name: 'Mouth' },
        ],
    },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
    width: 550,
    height: 550,
    smoothing: false,
};

const gif = {
    export: false,
    repeat: 0,
    quality: 100,
    delay: 500,
};

const text = {
    only: false,
    color: '#ffffff',
    size: 20,
    xGap: 40,
    yGap: 40,
    align: 'left',
    baseline: 'top',
    weight: 'regular',
    family: 'Courier',
    spacer: ' => ',
};

const pixelFormat = {
    ratio: 2 / 128,
};

const background = {
    generate: true,
    brightness: '80%',
    static: false,
    default: '#000000',
};

const extraMetadata = {
    external_url: 'https://thecryptoeggs.com', // Replace with your website or remove this line if you do not have one.
};

const rarityDelimiter = '#';

const uniqueDnaTorrance = 10000;

const preview = {
    thumbPerRow: 8,
    thumbWidth: 50,
    imageRatio: format.height / format.width,
    imageName: 'preview.png',
};

const preview_gif = {
    numberOfImages: 8,
    order: 'ASC', // ASC, DESC, MIXED
    repeat: 0,
    quality: 100,
    delay: 500,
    imageName: 'preview.gif',
};

module.exports = {
    format,
    baseUri,
    description,
    background,
    uniqueDnaTorrance,
    layerConfigurations,
    rarityDelimiter,
    preview,
    shuffleLayerConfigurations,
    debugLogs,
    extraMetadata,
    pixelFormat,
    text,
    namePrefix,
    network,
    gif,
    preview_gif,
};

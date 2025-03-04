import { AnimalJamClient } from 'animaljam.js';
(async () => {
    const client = new AnimalJamClient({
        deployVersion: '1711'
    });
    const numbers = [
        1000,
        1003,
        1011,
        1025,
        1027,
        1029,
        1030,
        1036,
        1038,
        1040,
        1042,
        1046,
        1047,
        1049,
        1050,
        1051,
        1052,
        1053,
        1054,
        1057,
        1058,
        1061,
        1062,
        1063,
        1064,
        1065,
        10230,
        10550
    ];
    for (const number of numbers) {
        await client.defpack.decode(number.toString(), {
            type: 'titleStrId',
            saveFile: true,
            saveFileDefpackPath: '1711-defPacks',
        });
        console.log(`Decoded ${number}`);
    }
})();

import { AnimalJamClient } from 'animaljam.js';
import * as fs from 'fs/promises';
import * as path from 'path';

(async () => {
  const client = new AnimalJamClient({
    deployVersion: '1713'
  });

  const numbersToFilenames: { [key: string]: string } = {
    1000: '1000-clothing.json',
    1003: '1003-animals.json',
    1011: '1011-rooms.json',
    1025: '1025-npcs.json',
    1027: '1027-layers.json',
    1029: '1029-imageArrays.json',
    1030: '1030-denitems.json',
    1036: '1036-holdables.json',
    1038: '1038-genericlists.json',
    1040: '1040-dens.json',
    1042: '1042-achievements.json',
    1046: '1046-pets.json',
    1047: '1047-parties.json',
    1049: '1049-namebadges.json',
    1050: '1050-battlecards.json',
    1051: '1051-ticketstogems.json',
    1052: '1052-adventures.json',
    1053: '1053-movies.json',
    1054: '1054-diamonds.json',
    1057: '1057-customanimals.json',
    1058: '1058-ebooks.json',
    1061: '1061-adoptapets.json',
    1062: '1062-petfoods.json',
    1063: '1063-pettoys.json',
    1064: '1064-bottles.json',
    1065: '1065-jamaajournals.json',
    10230: '10230-enstrings.json',
    10550: '10550-enexit.json'
  };

  const outputDir = `1713-defPacks`;

  for (const number of Object.keys(numbersToFilenames)) {
    const filename = numbersToFilenames[number];
    await client.defpack.decode(number, {
      type: 'titleStrRef',
      saveFile: true, 
      saveFileDefpackPath: outputDir,
    });
    console.log(`Decoded ${number}`);

    // Rename the file after decoding
    const oldPath = path.join(outputDir, `${number}.json`);
    const newPath = path.join(outputDir, filename);
    try {
      await fs.rename(oldPath, newPath);
      console.log(`Renamed ${oldPath} to ${newPath}`);
    } catch (error) {
      console.error(`Failed to rename ${oldPath} to ${newPath}:`, error);
    }
  }
})();
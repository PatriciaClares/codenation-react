const filterByStatus = (personagens, status) => {
    return personagens.filter(personagem => personagem.status === status);
}

const filterByGenrer = (personagens, gender) => {
    return personagens.filter(personagem => personagem.gender === gender);
}

const getEpisodeFromURL = (url) => {
    const urlSplited = url.split("/");
    return urlSplited[urlSplited.length -1];
}

const generateEpisodeList = (character) => {
    return character.episode.map(url => getEpisodeFromURL(url));
}

const mapCharacterToEpisodes = (episodes, character) => {
    const characterEpisodes = generateEpisodeList(character);
    let newEpisodes = { ...episodes};
    characterEpisodes.map(episode => {
        if(newEpisodes[episode]) {
            newEpisodes = {
                ...newEpisodes,
                [episode]: [...newEpisodes[episode], character]
            };
            return;
        }

        newEpisodes[episode] = [character];
    });
    return newEpisodes;
}

const filterByEpisode = (personagens, episode) => {
    const episodios = personagens.reduce((episodes, character) => {
        return mapCharacterToEpisodes(episodes, character);
    }, {});
    return episodios[episode]
}
module.exports = {
    filterByStatus,
    filterByGenrer,
    filterByEpisode,
    getEpisodeFromURL,
    generateEpisodeList,
    mapCharacterToEpisodes
};
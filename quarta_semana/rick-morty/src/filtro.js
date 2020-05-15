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
    const characterEpisodes = generateEpisodeList(character); // exemplo: [10, 14, 20, 30]
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
    // Primeiro parametro é o acumulador, para cada objeto que ele pecorrer, ele soma +1
    // Segundo parametro é cada item de personsagens
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

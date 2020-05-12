const filtro = require("./filtro")
const data = require('./data/data.json')

describe("Filtro", () => {
    describe('Status', () => {

        it("retorna somente os vivos", () => {
            const response = filtro.filterByStatus(data.results, 'Alive');
            expect(response.length).toBe(8);
        });

        it("retorna somente os mortos", () => {
            const response = filtro.filterByStatus(data.results, 'Dead');
            expect(response.length).toBe(6);
        });

        it("retorna somente os desconhecidos", () => {
            const response = filtro.filterByStatus(data.results, 'unknown');
            expect(response.length).toBe(6);
        });
    });


    describe('Gênero', () => {
        it('retorna somente os homens', () => {
            const response = filtro.filterByGenrer(data.results, 'Male')
            expect(response.length).toBe(15)
        })

        it('retorna somente as mulheres', () => {
            const response = filtro.filterByGenrer(data.results, 'Female')
            expect(response.length).toBe(4)
        })
    })

    describe('Episodios', () => {
        it('retorna somente Rick Morty para o episódio 1', () => {
            const response = filtro.filterByEpisode(data.results, '1')
            expect(response.length).toBe(2)
            expect(response[1].name).toBe('Morty Smith')
        })

        it('retorna o numero 6 da url', () => {
            const response = filtro.getEpisodeFromURL("https://rickandmortyapi.com/api/episode/6");
            expect(response).toBe("6")
        })

        it('retorna um array de numero dos episodios', () => {
            const response = filtro.generateEpisodeList(data.results[6]);
            expect(response).toEqual(['10', '11']);
        })

        it('Mapeia caracter para episodios', () => {
            const personagem = data.results[6];
            console.log(personagem)
            const ricky = data.results[0];
            const episodes = {
                "10" : [ricky],
                "11" : [ricky]
            };
            const response = filtro.mapCharacterToEpisodes(episodes, personagem)
            expect(response[10].length).toBe(2);
            expect(response[10][1].name).toBe(personagem.name);
        });
    });
});
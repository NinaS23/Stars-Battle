import * as starfigthersRepository from "../repositories/starfigthersRepository.js";
import axios from "axios";


async function findRepoGit(username: string) {
    try {
        const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
        return data;
    } catch (error) {
        console.log(error.response.data);
        return null;
    }
}

async function starsCount(repo1: any[], repo2: any[]) {
    let stars1: number = 0;
    let stars2: number = 0;

    repo1.map((e) => {
        stars1 += e.stargazers_count
    })
    repo2.map((e) => {
        stars2 += e.stargazers_count
    })

    return { stars1, stars2 };
}

export async function battleStars(firstUser: string, secondUser: string) {
    const firstUserRepos = await findRepoGit(firstUser);
    const secondUserRepos = await findRepoGit(secondUser);

    if (firstUserRepos && secondUserRepos) {
        const result = await starsCount(firstUserRepos, secondUserRepos)
        if (result.stars1 > result.stars2) {
            let obj = {
                "winner": firstUser,
                "loser": secondUser,
                "draw": false
            }
            return obj
        } else if (result.stars1 < result.stars2) {
            let obj = {
                "winner": secondUser,
                "loser": firstUser,
                "draw": false
            }
            return obj;
        } else {
            let obj = {
                "winner": null,
                "loser": null,
                "draw": true
            }
            return obj
        }

    }
}



const nomes_rede_social = {
    github: "willdalp",
    youtube: "nãoTenho",
    facebook: "nãoTenho",
    instagram: "wdalpont",
    twitter: "wdalpontt"
}

function changeSocialMediaLinks () {
    for (let li of social_links.children) {
        const social = li.getAttribute("class")
        li.children[0].href = `https://${social}.com/${nomes_rede_social[social]}`
    }

}

changeSocialMediaLinks ()


function pegar_informações_do_github () {
    const url = `https://api.github.com/users/${nomes_rede_social.github}`
     fetch (url).then(resposta => resposta.json() )      //resposta é o nome de uma váriavel, => arrowFunction (função reduzida)
     .then(data => {
        github_link.href = data.html_url
        user_name.textContent = data.name
        github_name_user.textContent = data.login
     }) //data armazena a resposta do outro .then em JSON
}


pegar_informações_do_github ()
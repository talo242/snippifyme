import firebase from 'firebase'


function loginGitHub(){
    return new Promise((resolve, reject) => {
        const provider = new firebase.auth.GithubAuthProvider()

        firebase.auth().signInWithPopup(provider).then((result) => {
            resolve(result)
        }).catch(function(error) {
            reject(error)
        })
    })
}

export default loginGitHub
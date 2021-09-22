const GetEmailsFromUsers = async ()=>{

    let correos = []

    await firebase.firestore().collection('users').get()
    .then((querySnapshot)=>{
            
        querySnapshot.forEach(doc => {

            correos.push(doc.data().correo)
            
        });
    })

    return correos

}

export { GetEmailsFromUsers }
const sendMail = () => {
    // Initialiser emailjs en dehors de la fonction auto-invoquée
    emailjs.init("Y_Vqoktov2IxO0Rzq");

    // Récupérer les valeurs des champs de formulaire
    var params = {
        to_name: "Mathieu",
        from_name: document.querySelector("#name").value,
        reply_to: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
    };

    var serviceID = "service_6jcatuv";
    var templateID = "template_vq21l8c";

    // Envoyer l'email via emailjs
    emailjs.send(serviceID, templateID, params)
        .then(result => {
            alert("Email envoyé avec succès !");
        }).catch(err => {
            alert("Erreur lors de l'envoi de l'email : " + err);
        });
}

// Ajouter un écouteur d'événements lorsque le DOM est chargé
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("sendMessageButton");
    button.addEventListener("click", sendMail);
});

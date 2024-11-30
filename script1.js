// Tableau contenant les surprises pour chaque jour
const surprises = {
    1: "On commence doucement (le plus nul), je te dit officiellement OUI pour la boite de nuit cet été je viendrais avec vous c'est promis.",
    2: "Quelque chose qui va te servir à prendre soin de ta nouvelle paire. (vient me voir à la récré je te passe le cadeau)",
    3: "Produit pousse pour les cheveux aromazone. (Je veux le commander DEPUISS mais RUPTURE DE STOCK)",
    4: "Cadeau matériel je te le donne ce matin",
    5: "Je te rends quelque chose de très symbolique",
    6: "Un petit cadeau de ma part maintenant que ma blonde à le permis",
    7: "Date Netflif and CHILL dans la voiture soit la tienne soit la mienne",
    8: "Sortie à prévoir Galerie lafayette",
    9: "Sortie à prévoir marcher de noël",
    10: "Sortie à prévoir chocolat chaud ",
    11: "Sortie Cinéma vaiana 2 stv",
    12: "Sortie à prévoir sur Paris promenade vers la Tour eiffel et shopping",
    13: "Sortie à prévoir date restaurant soirée chic",
    14: "Sortie Bowling ducoup ...",
    15: "Je fais une fournée de coockies gout de ton choix (sa peut être tout et n'importe quoi)",
    16: "Je te laisse me maquiller",
    17: "Je te laisse percer tous les boutons que tu veux (sa te fait tellement plaisir)",
    18: "Je te fais un massage de 30 minutes (ou moins si t'en a marre mdrr)",
    19: "Je vais acheter du chocolat aphrodisiaque on va pouvoir le tester à ton retour",
    20: "Pour ton départ je t'ai fait un Poème de noël assez sympa j'espère qu'il te plaira",
    21: "Repas tout nu (Expérience sociale à TESTER)",
    22: "t'es à moi pendant 10 min la prochaine fois qu'on se voir",
    23: "je suis à toi pendant 10 min la prochaine fois qu'on se voir",
    24: "Pour Finir ma Star je sais que tu voulais énomément le faire alors à ton retour on fera une sortie à la patinoire celle que tu veux Loveee <3"
  };
  
  // Fonction pour initialiser le calendrier
  function initCalendar() {
    const days = document.querySelectorAll('.day');
  
    days.forEach(day => {
      // Ajout d'un événement de clic à chaque case
      day.addEventListener('click', () => {
        // Vérifie si la case est déjà ouverte
        if (!day.classList.contains('opened')) {
          // Ouvre la case
          day.classList.add('opened');
  
          // Récupère le numéro du jour
          const dayNumber = day.getAttribute('data-day');
  
          // Affiche la surprise du jour
          const surprise = surprises[dayNumber] || "Pas de surprise pour aujourd'hui. 🎅";
  
          // Crée une boîte modale pour afficher la surprise
          showSurpriseModal(dayNumber, surprise);
        }
      });
    });
  }
  
  // Fonction pour afficher une boîte modale avec la surprise
  function showSurpriseModal(dayNumber, surprise) {
    // Crée les éléments de la modale
    const modal = document.createElement('div');
    modal.classList.add('modal');
  
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
  
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = "&times;";
    closeButton.addEventListener('click', () => {
      modal.remove(); // Ferme la modale
    });
  
    const title = document.createElement('h2');
    title.innerText = `Surprise du jour ${dayNumber}`;
  
    const message = document.createElement('p');
    message.innerText = surprise;
  
    // Assemble les éléments dans la modale
    modalContent.appendChild(closeButton);
    modalContent.appendChild(title);
    modalContent.appendChild(message);
    modal.appendChild(modalContent);
  
    // Ajoute la modale au document
    document.body.appendChild(modal);
  }
  
  // Ajoute des styles pour la boîte modale
  const style = document.createElement('style');
  style.innerHTML = `
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
  
    .modal-content {
      background: white;
      padding: 20px;
      border-radius: 10px;
      text-align: center;
      position: relative;
      max-width: 400px;
      width: 90%;
    }
  
    .close-button {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 1.5rem;
      cursor: pointer;
    }
  
    .close-button:hover {
      color: red;
    }
  `;
  
  // Ajoute les styles de la boîte modale au document
  document.head.appendChild(style);
  
  // Initialisation du calendrier
  document.addEventListener('DOMContentLoaded', initCalendar);

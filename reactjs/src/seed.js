export function seedDatabase(firebase) {
  function getUUID() {
    // eslint devient drôle à propos de bitwise
    /* eslint-désactiver */
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
    /* eslint-activer */
  }

  /* Jeux
      ============================================ */
  // Action
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Chivalry 2",
    description:
      "Chivalry II est la suite du jeu de combat médiéval Chivalry : Medieval Warfare. Dans ce jeu d action en vue à la première personne vous plongez dans un conflit moyenâgeux fictif. Vous pouvez choisir entre plusieurs classes et mener d intenses batailles des environnements variés.",
    sortie: "08 juin 2021",
    genre: "Action|FPS|Combat",
    maturity: "18",
    slug: "chivalry 2",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Going Medieval",
    description:
      "Going Medieval est un colony-builder prenant place dans un XIVe siècle hypothétique, où 95% de la population a péri dans une étrange pandémie. Vous devrez alors jouer le rôle du leader, installer les bases d une nouvelle civilisation là où la nature à repris ses droits, et survivre dans un monde post-apocalyptique plein de dangers...",
    sortie: "01 Juin 2021",
    genre: "Gestion|RPG|Stratégie|Simulation",
    maturity: "iconnue",
    slug: "going medieval",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Days Gone",
    description:
      "Jeu d aventure en monde ouvert Days Gone nous emmène dans un monde apocalyptique. Deux ans après une pandémie qui a ravagé la planète, Deacon St John est un chasseur de primes qui a décidé de vivre une vie dangereuse plutôt que de rester dans un camp de survivants. Il va alors devoir tout faire pour survivre seul, tout en affrontant une horde de créatures hostiles.",
    sortie: "26 Avril 2019",
    genre: "Action|TPS|Open World",
    maturity: "12",
    slug: "days gone",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Guilty Gear -Strive",
    description:
      "Guilty Gear : Strive est un jeu de combat développé par Arc System Works. Dans ce nouvel opus de la saga Guilty Gear, retrouvez quinze personnages dans le roster de base, dont Sol Badguy, Ky Kiske, May, Axl Low, Chipp Zanuff, Potemkin, et de nouveaux visages comme Giovanna et Nagoriyuki.",
    sortie: "11 juin 2021",
    genre: "Combat",
    maturity: "none",
    slug: "guilty gear -strive",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Pro Cycling Manager 2021",
    description:
      "Filmmaker James Marsh masterfully recreates high-wire daredevil Philippe Petit's 1974 stunt walking on a wire across the Twin Towers.",
    sortie: "03 juin 2021",
    genre: "Action|Course|Simulation|Sport",
    maturity: "none",
    slug: "pro cycling manager 2021",
  });

  // Comedies
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Biomutant",
    description:
      "Biomutant est un RPG open-world développé par Experiment 101, studio créé par des anciens de Just Cause, et édité par THQ Nordic. L'action se déroule dans un univers post-apocalyptique et est décrit comme 'une fable kung fu'. Le héros, qui ressemble vaguement à un certain Rocket Raccoon, peut alterner combat au corps à corps et combat à distance, piloter des véhicules, crafter de l'équipement et personnaliser ses capacités.",
    sortie: "25 mai 2021",
    genre: "RPG",
    maturity: "none",
    slug: "biomutant",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Sniper Ghost Warrior Contracts 2",
    description:
      "Dans ce nouvel opus de la série Sniper Ghost Warriors, les joueurs endossent le rôle de Reaper, un sniper à gage. L'action se déroule dans une partie du Moyen - Orient où le sniper devra s'infiltrer dans le territoire ennemi pour éliminer des cibles prioritaires.",
    sortie: "04 juin 2021",
    genre: "Action|FPS",
    maturity: "18",
    slug: "sniper ghost warrior contracts 2",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Hokko Life",
    description:
      "Hokko Life est un jeu de simulation de vie sur PC. Il vous demande de reprendre un vieille atelier et de vous en servir pour faire preuve de créativité. Créé alors une ville à votre image, en construisant des bâtiments, du mobiliers et bien d'autres choses...",
    sortie: "02 juin 2021",
    genre: "Sandbox|Simulation de vie",
    maturity: "none",
    slug: "hokko life",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Resident Evil Village",
    description:
      "Resident Evil Village est un survival-horror. Se déroulant quelques années après Resident Evil 7 Biohazard, il met en scène Ethan Winters, sa femme Mia et Chris Redfield, le héros légendaire de la série Resident Evil. L'action est en vue à la première personne et le joueur incarne un Ethan désemparé et brisé qui se retrouve confronté à des monstruosités dans un village.",
    sortie: "07 mai 2021",
    genre: "Survival-Horror",
    maturity: "18",
    slug: "resident evil village",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Necromunda: Hired Gun",
    description:
      "Au cœur de l'un des mondes les plus sordides de Warhammer 40 000, Necromunda, ce FPS violent et survolté vous invite à devenir le Hired Gun, un chasseur de primes sans pitié, accompagné de son cyber-chien. Proposant un gameplay dynamique, Necromunda : Hired Gun vous permet de personnaliser votre équipement, vos capacités, ainsi que votre compagnon canin. Plusieurs contrats sont à remplir et de nombreuses cibles sont à éliminer pour empochez vos récompenses.",
    sortie: "01 juin 2021",
    genre: "Action|FPS",
    maturity: "18",
    slug: "necromunda: hired gun",
  });

  // Children
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "We are Football",
    description:
      "WE ARE FOOTBALL est un jeu de gestion dans lequel vous devez mener votre club de football au sommet du championnat. Vous débutez donc comme manager pour d'une petite équipe locale masculine ou féminine et devez la mener vers la reconnaissance internationale.",
    sortie: "10 juin 2021",
    genre: "Gestion|Sport",
    maturity: "0",
    slug: "we are football",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "F1 2021",
    description:
      "F1 2021 est le jeu officiel du 2021 FIA FORMULA ONE WORLD CHAMPIONSHIP™. Le soft comporte une histoire inédite, 'Point de rupture', deux nouveaux modes de jeu dont un mode Carrière jouable à 2 joueurs, ainsi que d'autres ajouts mineurs. Les circuits, voitures et pilote sont mis à jour comme chaque année, et il est possible d'affronter d'autres joueurs dans des courses en ligne classées.",
    sortie: "16 juil. 2021",
    genre: "course",
    maturity: "0",
    slug: "f1 2021",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Outriders",
    description:
      "Six brave puppies, captained by a tech-savvy ten-year-old boy, Ryder, work together to accomplish high-stakes rescue missions to safeguard the residents of the Adventure Bay community.",
    sortie: "01 avr. 2021",
    genre: "Action|TPS",
    maturity: "0",
    slug: "outriders",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Nioh 2",
    description:
      "Nioh 2 est un action RPG développé par Team Ninja. L'aventure prend place durant la période Sengoku au Japon. Qu'ils soient des démons ou des humains, les obstacles se dressent au cours de l'aventure et il faudra user divers armes pour s'en défaire.",
    sortie: "13 mars 2020",
    genre: "Action|RPG|Action RPG",
    maturity: "18",
    slug: "nioh 2",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "MotoGP 21",
    description:
      "MotoGP 21 est le nouvel épisode de la licence annuelle MotoGP de Milestone. Sous licence officielle, le jeu propose plus de 120 pilotes et pistes en plus qu'une quarantaine de pilotes historiques. Un mode carrière avec un aspect gestion et personnalisation ainsi qu'un mode multijoueur jusqu'à 22 participants est disponible. ",
    sortie: "22 avr. 2021",
    genre: "children",
    maturity: "3",
    slug: "motoGP 21",
  });

  // Crime
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "NieR Replicant ver.1.22474487139",
    description:
      "NieR Replicant ver.1.22474487139... est une version améliorée de l'action-RPG NieR, paru en 2010. Le jeu met en scène un jeune homme en quête d'un remède pour sa petite sœur malade. Développée par Toylogic, cette version propose entre autres un doublage intégral, des musiques réenregistrées et de nouvelles compositions signées Keiichi Okabe..",
    sortie: "23 avr. 2021",
    genre: "Action RPG",
    maturity: "18",
    slug: "nieR replicant ver.1.22474487139",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "SnowRunner",
    description:
      "SnowRunner est un jeu de conduite d'engins tout-terrain dans des conditions extrêmes. Vous pourrez y utiliser un des 40 véhicules personnalisables, pour prendre la route et accomplir des missions où le risque de se retrouver coincé est constant...",
    sortie: "28 avr. 2020",
    genre: "Course|Simulation",
    maturity: "3",
    slug: "snowrunner",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Ranch Simulator",
    description:
      "Ranch Simulator est un jeu de simulation et de gestion dans lequel vous devez construire puis gérer votre propre ranch. Pour cela, il faut à la fois être capable de travailler comme fermier, marchand ou encore chasseur. Jusqu'à 4 joueur en coopération, vous pouvez donc reprendre le ranch de votre grand-père et en faire une fierté familiale qui saura prospérer.",
    sortie: "04 mars 2021",
    genre: "Gestion|Simulation",
    maturity: "0",
    slug: "ranch simulator",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Cartel Tycoon",
    description:
      "Cartel Tycoon est un jeu de gestion en accès anticipé développé par Moon Moose et édité par tinyBuild. Le jeu prend dans une Amérique Latine fictive des années 80 où le trafic de drogue s'est exporté vers le monde entier. Le joueur est la tête d'un empire de production de drogues et doit savoir gérer les gangs rivaux et les différents paramètres pour le faire fructifier.",
    sortie: "18 mars 2021",
    genre: "Gestion|City Builder|Stratégie|Simulation",
    maturity: "0",
    slug: "cartel tycoon",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Just Die Already",
    description:
      "L'équipe à l'origine de Goat Simulator revient avec un nouveau jeu bac à sable, jouable en solo ou jusqu'à quatre en ligne : Just Die Already. Mécontents de leurs conditions de vie, les 'vieux' décident de semer le chaos dans la ville. Vous incarnez l'un d'eux, tout juste viré de sa maison de retraite. A vous de trouver tous les moyens possibles de vous venger, dans un environnement regorgeant d'éléments intéractifs et de passages secrets à exploiter.",
    sortie: "20 mai 2021",
    genre: "Sandbox",
    maturity: "0",
    slug: "just die already",
  });

  // Feel-good
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Siege Survival: Gloria Victis",
    description:
      "En stratégie et survie, Siege Survival : Gloria Victis vous invite à gérer votre campement, trouver des ressources, en fabriquer de nouvelles et repousser les envahisseurs. Les mécaniques de jeu rappellent beaucoup This War of Mine, mais portées à la période médiévale.Will Hunting, a genius in mathematics, solves all the difficult mathematical problems. When he faces an emotional crisis, he takes help from psychiatrist Dr Sean Maguireto, who helps him recover.",
    sortie: "18 mai 2021",
    genre: "Gestion",
    maturity: "18",
    slug: "siege survival: gloria victis",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "King of Seas",
    description:
      "King of Seas est un Action-RPG dans l'univers de la piraterie. Pour devenir le roi des pirates et venger votre père, vous devrez affronter d'autres navires, découvrir des coffres cachés et des îles perdues dans ce monde généré de manière procédural.",
    sortie: "25 mai 2021",
    genre: "Action|RPG",
    maturity: "0",
    slug: "king of seas",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Tour de France 2021",
    description:
      "Dans Tour De France 2021, vous pouvez une fois encore vivre la plus grande course cycliste du monde et de nombreuses autres épreuves. La nouvelle version de ce simulateur de course à vélo accueille, entre autre, un nouveau système d'objectifs, une météo plus réaliste ainsi que de nouvelles licences.",
    sortie: "03 juin 2021",
    genre: "Sport",
    maturity: "3",
    slug: "tour de france 2021",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Dungeons and Dragons: Dark Alliance",
    description:
      "Donjons & Dragons : Dark Alliance est un jeu développé par Tuque Games et édité Wizards of the Coast. Hack'n'Slash coopératif jusqu'à quatre joueurs, le titre prend place dans la région glacière d'Icewind Dale.",
    sortie: "22 juin 2021",
    genre: "Action|Hack'n slash",
    maturity: "0",
    slug: "dungeons and dragons: dark alliance",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Knockout City ",
    description:
      "Knockout City est un jeu développé par Velan Studios et Electronic Arts. Le titre prend place dans une ville du futur aux allures cartoonesque. Seul ou en équipe, les joueurs devront conquérir la cité à travers une balle au prisonnier revisitée.",
    sortie: "21 mai 2021",
    genre: "Action|Sport",
    maturity: "0",
    slug: "knockout city",
  });

  /* Films
      ============================================ */
  // Drama
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Saints Row: The Third Remastered",
    description:
      "Saints Row 3, jeu d'action en monde ouvert, permet au joueur de prendre part à des affrontements entre différents gangs. Vous devrez vous forger une réputation pour vous faire respecter dans votre quartier.",
    sortie: "15 nov. 2011",
    genre: "Action|Aventure|Open World",
    maturity: "18",
    slug: "saints row: the third remastered",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Little Nightmares II",
    description:
      "Little Nightmares 2 est la suite des aventures de la fillette Six. Cette fois, le cadre de cette histoire terrifiante se déroule dans une école. Mais cette fois elle ne sera pas seule, elle trouvera un compagnon d'infortune qui lui cache sa tête derrière un sac en papier.",
    sortie: "11 févr. 2021",
    genre: "Aventure|Réflexion|Puzzle-Game|Plate-Forme",
    maturity: "16",
    slug: "little nightmares II",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Maneater",
    description:
      "Maneater est un jeu en open world développé par Tripwire Interactive. Ce dernier va nous placer dans la peau d'un requin et nous emmener dans les différentes eaux du monde entier. Prédateurs, assaillants ou simples baigneurs, à vous de choisir qui sera votre prochain repas.",
    sortie: "22 mai 2020",
    genre: "Open World",
    maturity: "18",
    slug: "maneater",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "MechWarrior 5: Mercenaries",
    description:
      "MechWarrior 5 : Mercenaries est un FPS dans lequel nous sommes transportés vers le futur, aux alentours de l'an 3000. A cette époque, les BattleMech sont rois sur le terrain de la guerre et dominent les champs de bataille via une formidable puissance de feu. A vous d'écraser vos ennemis et de tout faire exploser sur votre passage !",
    sortie: "10 déc. 2019",
    genre: "Action|FPS",
    maturity: "0",
    slug: "mechWarrior 5: mercenaries",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Skul: The Hero Slayer",
    description:
      "L'attaque du château du Roi Démon par la race humaine n'est pas nouvelle et s'est déjà produite de nombreuses fois par le passé. Mais cette fois-ci, les Aventuriers ont décidé de s'associer à l'armée impériale et au 'Héros de Caerleon' pour mener une attaque éclair dans l'espoir d'éliminer les Démons une fois pour toutes. Ils attaquèrent la forteresse des Démons en nombre écrasant et réussirent à la détruire totalement. Tous les démons du château ont été faits prisonniers, à l'exception d'un seul squelette nommé Skul.",
    sortie: "19 févr. 2020",
    genre: "Roguelike|Plate-Forme",
    maturity: "0",
    slug: "skul: the hero slayer",
  });

  // Suspense
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Hitman 3 ",
    description:
      "Hitman 3 est un jeu d'infiltration dans lequel vous incarnez l'agent 47. Dans ce troisième épisode de la nouvelle trilogie lancée en 2017, six lieux sont disponibles au lancement, mais il est possible de transférer les anciennes missions des deux premiers volets.",
    sortie: "20 janv. 2021",
    genre: "Action|Infiltration",
    maturity: "18",
    slug: "hitman 3 ",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "First Class Trouble",
    description:
      "First Class Trouble est un party-game se déroulant dans un vaisseau spatial. Jeu de déduction sociale, les joueurs doivent découvrir l'identité des humanoïdes envoyés par une I.A rebelle pour les éliminer. A la manière d'un loup garou de thiercelieux, des imposteurs se cachent parmi les joueurs.",
    sortie: "08 avr. 2021",
    genre: "Party-Game|Autres|Survie",
    maturity: "0",
    slug: "first class trouble",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Dying Light 2 Stay Human",
    description:
      "Dying Light 2 est un Survival-Horror dans lequel le joueur doit survivre dans un environnement peuplé de zombies. Dans ce nouvel opus, l'enjeu sera de contrôler notamment des réserves d'eau et de nourriture afin de maîtriser une cité de survivants. Les choix du joueur ont ainsi une importance capitale dans le déroulement du scénario.",
    sortie: "07 déc. 2021",
    genre: "Action|FPS|Survival-Horror",
    maturity: "18",
    slug: "dying light 2 stay human",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "It Takes Two",
    description:
      "It Takes Two est un jeu de plateforme, d'action et de coopération. Au coeur d'une famille qui se déchire, vous incarnez les deux poupées qui prennent vie, représentant les parents qui vont devoir passer des épreuves dans l'imaginaire de leur fille.",
    sortie: "26 mars 2021",
    genre: "Aventure",
    maturity: "0",
    slug: "it takes two",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Endzone - A World Apart",
    description:
      "Endzone est un jeu développé par Gently Mad Studio et édité par Assemble Entertainment. Le jeu se déroule dans un univers post-apocalyptique, après un désastre nucléair. Le joueur va devoir rebâtir la civilisation avec un groupe restreint de personnes, tout en gérant les catastrophes naturelles de la région.",
    sortie: "02 avr. 2020",
    genre: "Gestion|CityBuilder|Stratégie",
    maturity: "0",
    slug: "endzone - a world apart",
  });

  // Children
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Total War: Remastered",
    description:
      "Revivez l'expérience originale de Total War : Rome, dans un nouveau jeu complètement remis au goût du jour. Total War : Rome Remastered contient les extensions Alexander et Barbarian Invasion. Il n'est pas donné à tout le monde de conquérir l'Empire Romain une deuxième fois.",
    sortie: "29 avr. 2021",
    genre: "Stratégie",
    maturity: "0",
    slug: "total war: remastered",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Scarlet Nexus",
    description:
      "Scarlet Nexus est un RPG dans lequel vous jouez Yuito Sumeragi, un nouveau membre de l'OSF. Le jeune homme veut utiliser ses dons de psycho-kinésie afin de devenir un psionique d'élite, comme celui qui l'avait sauvé par le passé.",
    sortie: "25 juin 2021",
    genre: "RPG",
    maturity: "0",
    slug: "scarlet nexus",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Totally Reliable Delivery Service",
    description:
      "Totally Reliable Delivery Service est un jeu d'action édité par tinyBuild. A vous les joies de repousser les limites de la physique du jeu et de faire n'importe quoi avec les ragdolls. Faites juste en sorte d'apporter les livraisons aux bons endroits et en bon état.",
    sortie: "01 avr. 2020",
    genre: "Action",
    maturity: "0",
    slug: "totally reliable delivery service",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "The Universim",
    description:
      "The Universim vise à faire revivre les jours de gloire du genre God Game. A partir de rien, le but du jeu est de développer son empire galactique depuis sa planète. Dans un monde dynamique, il vous faudra développer la vie sur la planète, et l’entretenir pour que celle-ci s’y développe, et que la civilisation s’y installe. Soutenu par un moteur de jeu interne au studio, intégré à Unity 5, le jeu ne proposera jamais deux fois les mêmes planètes. Désastres, invasions aliens et autres évènements viendront mettre le joueur à l’épreuve.",
    sortie: "15 juin 2021",
    genre: "Gestion|Simulation",
    maturity: "0",
    slug: "the universim",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Before We Leave",
    description:
      "Carl, an old widower, goes off on an adventure in his flying house in search of Paradise Falls, his wife's dream destination.",
    sortie: "08 mai 2020",
    genre: "Gestion|City Builder",
    maturity: "0",
    slug: "Before We Leave",
  });

  // Thriller
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Blue Fire",
    description:
      "Blue Fire est un jeu de plateforme en 3D réalisé avec dans le thème de la fantasy. Le titre se déroule dans le royaume de Penumbra, et offre différentes zones à explorer dont des temples remplis de pièges à découvrir au fil des quêtes. D'imposants ennemis se mettront également au travers de votre route pendant votre exploration.",
    sortie: "04 févr. 2021",
    genre: "Action|Aventure|Plate-Forme",
    maturity: "7",
    slug: "blue fire",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Hood: Outlaws & Legends",
    description:
      "Hood : Outlaws & Legends est un jeu d'action multijoueur dans lequel deux équipes s'affrontent pour exécuter le braquage parfait dans des environnements patrouillés par des gardes contrôlés par l'IA. Dans cette ambiance médiévale, vous pouvez choisir de vous infiltrer discrètement ou de foncer tête baissée pour récupérer votre objectif avant vos adversaires.",
    sortie: "10 mai 2021",
    genre: "Action",
    maturity: "0",
    slug: "hood: outlaws & legends",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Paradise Lost",
    description:
      "Pardise Lost est un jeu d'aventure narratif qui vous met dans la peau d'un jeune garçon, explorant un monde post-apocalyptique où la Seconde Guerre mondiale n'a jamais pris fin. Seul et livré à lui même, il découvrira un ancien bunker nazi qui sera le point de départ de son dangereux périple.",
    sortie: "24 mars 2021",
    genre: "Aventure",
    maturity: "0",
    slug: "paradise lost",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "MXGP 2020 - The Official Motocross Videogame",
    description:
      "Nouvel épisode de la série de jeu sous licence officielle, MXGP2020 revient sur nos consoles et PC avec de nouvelles fonctionnalités. Editeur de cartes, création d'équipes, serveurs retravaillés. Le nouveau titre de Milestone met à disposition plus de 10 000 objets parmi 100 marques officielles.",
    sortie: "16 déc. 2020",
    genre: "Course|Sport",
    maturity: "0",
    slug: "MXGP 2020 - the official motocross videogame",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Overcooked! All You Can Eat",
    description:
      "Overcooked! All You Can Eat est un jeu d'action en cuisine. Le jeu comporte les niveaux d'Overcooked!, Overcooked! 2, leurs DLC. Le tout sera composé de 200 niveaux, dont 7 inédits ainsi que de 3 nouveaux chefs, et une réédition en 4k.",
    sortie: "10 nov. 2020",
    genre: "Action|Party-Game",
    maturity: "0",
    slug: "overcooked! all you can eat",
  });

  // Romance
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Predator: Hunting Grounds",
    description:
      "Predator : Hunting Grounds est un jeu d'action multijoueur qui reprend l'univers des films. La grande particularité du titre est le gameplay qui est asymétrique. Des joueurs incarnent des soldats humains, tandis qu'un autre a le malin plaisir de jouer le Predator.",
    sortie: "24 avr. 2020",
    genre: "Action",
    maturity: "15",
    slug: "predator: hunting grounds",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Yakuza 6: The Song of Life",
    description:
      "Yakuza 6 est un jeu de type aventure en monde ouvert. Après les événements du 5e volet, on retrouve Kazuma, qui après avoir apprit qu'Haruka eu été gravement blessé, va tenter de l'aider et de trouver des réponses sur son agression. Pour cela, il va se rendre à Hiroshima, dernier endroit dans lequel s'est rendu la jeune fille. En plus de cela, des problèmes au sein du clan Tojo refont surface...",
    sortie: "17 avr. 2018",
    genre: "Action|Aventure",
    maturity: "18",
    slug: "yakuza 6: the song of life",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Breathedge",
    description:
      "Breathedge est un jeu d'aventure et d'action. Incarnez un homme simple et sans besoins particuliers essayant de survivre dans les profondeurs de l'espace. Explorez, construisez et défendez-vous avec un poulet. Le jeu est en accès anticipé depuis le 13 septembre 2018.",
    sortie: "25 févr. 2021",
    genre: "Action|Aventure",
    maturity: "0",
    slug: "breathedge",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "The Wild at Heart",
    description:
      "Dans le royaume caché et mystérieux de The Wild at Heart, retrouvez deux enfants fuyant leur quotidien difficile. Mais rien n'est simple dans les Boissombres, et il vous faudra développer votre horde de Farfelins afin de combattre les ennemis sur vos routes.",
    sortie: "20 mai 2021",
    genre: "Aventure",
    maturity: "0",
    slug: "the wild at heart",
  });
  firebase.firestore().collection("jeux").add({
    id: getUUID(),
    title: "Backbone",
    description:
      "Backbone est un jeu d'aventure et de détective inspiré des films noirs. Howard Lotor, raton laveur et détective privé, explore un Vancouver dystopique en pixel-art à la recherche d'indices et de preuves.",
    sortie: "08 juin 2021",
    genre: "Action|RPG",
    maturity: "0",
    slug: "backbone",
  });
}

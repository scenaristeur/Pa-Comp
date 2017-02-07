# Pa-Comp

# Raison d'être :
<center>
```
Estimation de l'incidence d'un divorce ou d'une séparation sur le budget d'un couple.

Calcul des pensions alimentaires.

Pa-Comp ? c’est pas con !

```
</center>

# Utiliser Pa-Comp :
- https://pa-comp.firebaseapp.com/

#Tutoriel :
 [![Tutoriel Pa-Comp](http://img.youtube.com/vi/5RBjF6_IqNw/0.jpg)](http://www.youtube.com/watch?v=5RBjF6_IqNw)

# Installation en local
- necessite [nodejs](https://nodejs.org/en/), et [bower](https://bower.io/#install-bower)

```
git clone https://github.com/scenaristeur/Pa-Comp.git Pa-Comp
cd Pa-Comp
npm install
cd public
bower install
cd ..
node .
```
ou en une seulle ligne :

```
git clone https://github.com/scenaristeur/Pa-Comp.git Pa-Comp && cd Pa-Comp && npm install && cd public && bower install && cd .. && node .

```

Détail de l'installation :
- clonage du repertoire Pa-Comp depuis github dans un sous répertoire Pa-Comp
- déplacement dans ce dossier
- installation des dépendances 'node.js' avec 'npm'
- déplacement dans le répertoire 'public'
- installation des éléments Polymer 1
- retour à la racine
- lancement de 'node' dans ce répertoire
- il ne vous reste plus qu'à appuyer sur 'Entrée'
- et votre console devrait vous indiquer que le serveur écoute sur le port 3000
- ce qui signifie qu'il accessible à l'adresse http://127.0.0.1:3000 ou http://localhost:3000

# Utilise l'API-WEB d'OpenFisca

- [OpenFisca](https://www.openfisca.fr/) ( https://api.openfisca.fr/ )

# Basé sur la plateforme Polymer 1

  - [Polymer 1](https://www.polymer-project.org/1.0/)
 - [openfisca-pension](https://github.com/scenaristeur/openfisca-pension)

# A l'origine du projet
- un désaccord sur le montant de la pension alimentaire
- [une note de France Stratégie](http://www.strategie.gouv.fr/publications/partager-charges-liees-aux-enfants-apres-une-separation)
- [une discussion sur openfisca](https://github.com/openfisca/openfisca-web-api/issues/54#issuecomment-251313747)

# En cours
- ajout de testR.html dans public pour deduire le budget lié aux enfants basé sur [les budgets type l'UNAF](http://www.unaf.fr/spip.php?rubrique160) .

utilise [langage R](https://www.r-project.org/) en javascript ( Machine Learning )

# Exemple de jeux de données au format JSON

 ( d'autres exemples sont disponibles dans /public/data )

```
# SUPPRIMEZ CES LIGNES DE COMMENTAIRE SI VOUS VOULEZ UTILISER CES DONNEES EN TANT QUE FICHIER JSON
# Ce fichier représente le fichier json typique à envoyer à OpenFisca via une requête POST
# afin d'obtenir une réponse correcte dans l'application Pa-Comp.
#
# En copiant le json ci-dessous, et le collant dans l'"Outils OpenFisca"
# https://pa-comp.firebaseapp.com/bower_components/openfisca-pension/outils/ ,
# vous pouvez initialiser l'application Pa-Comp https://pa-comp.firebaseapp.com/ avec ces données.
# SUPPRIMEZ CES LIGNES DE COMMENTAIRE SI VOUS VOULEZ UTILISER CES DONNEES EN TANT QUE FICHIER JSON


{
    "scenarios": [
        {
            "test_case": {
                "familles": [
                    {
                        "parents": [
                            "D",
                            "A"
                        ],
                        "enfants": [
                            "L",
                            "S",
                            "M",
                            "E"
                        ]
                    }
                ],
                "foyers_fiscaux": [
                    {
                        "declarants": [
                            "D",
                            "A"
                        ],
                        "personnes_a_charge": [
                            "L",
                            "S",
                            "M",
                            "E"
                        ]
                    }
                ],
                "individus": [
                    {
                        "id": "D",
                        "date_naissance": "1977-05-14",
                        "salaire_imposable": "24000"
                    },
                    {
                        "id": "A",
                        "date_naissance": "1978-10-11",
                        "salaire_imposable": "24000"
                    },
                    {
                        "id": "L",
                        "date_naissance": "2000-08-23"
                    },
                    {
                        "id": "S",
                        "date_naissance": "2004-07-02"
                    },
                    {
                        "id": "M",
                        "date_naissance": "2007-02-08"
                    },
                    {
                        "id": "E",
                        "date_naissance": "2011-01-28"
                    }
                ],
                "menages": [
                    {
                        "personne_de_reference": "D",
                        "enfants": [
                            "L",
                            "S",
                            "M",
                            "E"
                        ],
                        "loyer": "1000",
                        "conjoint": "A",
                        "statut_occupation_logement": 4
                    }
                ]
            },
            "period": "2016"
        },
        {
            "test_case": {
                "familles": [
                    {
                        "parents": [
                            "D"
                        ],
                        "enfants": []
                    }
                ],
                "foyers_fiscaux": [
                    {
                        "declarants": [
                            "D"
                        ],
                        "personnes_a_charge": []
                    }
                ],
                "individus": [
                    {
                        "id": "D",
                        "date_naissance": "1977-05-14",
                        "salaire_imposable": "24000"
                    }
                ],
                "menages": [
                    {
                        "personne_de_reference": "D",
                        "enfants": [],
                        "loyer": "530",
                        "statut_occupation_logement": 3
                    }
                ]
            },
            "period": "2016"
        },
        {
            "test_case": {
                "familles": [
                    {
                        "parents": [
                            "A"
                        ],
                        "enfants": [
                            "L",
                            "S",
                            "M",
                            "E"
                        ]
                    }
                ],
                "foyers_fiscaux": [
                    {
                        "declarants": [
                            "A"
                        ],
                        "personnes_a_charge": [
                            "L",
                            "S",
                            "M",
                            "E"
                        ]
                    }
                ],
                "individus": [
                    {
                        "id": "A",
                        "date_naissance": "1978-10-11",
                        "salaire_imposable": "24000"
                    },
                    {
                        "id": "L",
                        "date_naissance": "2000-08-23"
                    },
                    {
                        "id": "S",
                        "date_naissance": "2004-07-02"
                    },
                    {
                        "id": "M",
                        "date_naissance": "2007-02-08"
                    },
                    {
                        "id": "E",
                        "date_naissance": "2011-01-28"
                    }
                ],
                "menages": [
                    {
                        "personne_de_reference": "A",
                        "enfants": [
                            "L",
                            "S",
                            "M",
                            "E"
                        ],
                        "loyer": "680",
                        "statut_occupation_logement": 4
                    }
                ]
            },
            "period": "2016"
        }
    ],
    "variables": [
        "revenu_disponible",
        "revenu_initial",
        "traitements_salaires_pensions_rentes",
        "niveau_de_vie_net",
        "irpp",
        "minima_sociaux",
        "uc",
        "rsa",
        "prestations_sociales",
        "prestations_familiales",
        "csg",
        "aides_logement",
        "salaire_imposable",
        "csg"
    ]
}

```

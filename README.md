# Pa-Comp

# Utilisation en ligne et démo :
https://pa-comp.firebaseapp.com/

#Tutoriel : 
[![Tutoriel Pa-Comp](http://img.youtube.com/vi/5RBjF6_IqNw/0.jpg)](http://www.youtube.com/watch?v=5RBjF6_IqNw)

# Installation en local
- necessite nodejs, npm, bower

```
git clone https://github.com/scenaristeur/Pa-Comp.git Pa-Comp
cd Pa-Comp
npm install
cd public
bower install
cd ..
node . 
```

Le serveur doit être accessible à l'adresse http://127.0.0.1:3000

Contact :
twitter : [@dfaveris #smag0](https://twitter.com/intent/tweet?screen_name=DFaveris)

# A l'origine du projet
- un désaccord sur le montant de la pension alimentaire
- [une discussion sur openfisca](https://github.com/openfisca/openfisca-web-api/issues/54#issuecomment-251313747)

# En cours 
- ajout de testR.html dans public pour deduire le budget lié aux enfants basé sur [les budgets type l'UNAF](http://www.unaf.fr/spip.php?rubrique160) .

utilise [langage R](https://www.r-project.org/) en javascript ( Machine Learning )

# JEU DE DONNEES example

```
# Ce fichier repr�sente le fichier json typique � envoyer � OpenFisca
# afin d'obtenir une r�ponse correcte dans l'application Pa-Comp.
#
# En copiant le json ci-dessous, et le collant dans l'"Outils OpenFisca"
# https://pa-comp.firebaseapp.com/bower_components/openfisca-pension/outils/ ,
# vous pouvez initialiser l'application Pa-Comp https://pa-comp.firebaseapp.com/ .
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
        "irpp",
        "minima_sociaux",
        "niveau_de_vie_net",
        "uc",
        "rsa",
        "prestations_sociales",
        "prestations_familiales",
        "aides_logement",
        "csg",
        "aides_logement",
        "salaire_imposable",
        "csg"
    ]
}

```








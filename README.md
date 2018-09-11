# TodoList

## La base

<<<<<<< HEAD
- Au click du button "Ajouter" rajouter un li en début de #list avec la tâche et vider l'input.
- Chaque "li" doit contenir au moins 1 span, 1 input et 3 buttons
  - button "checked". Au clique :
    > Toggle le li en vert
  - button "edit". Au clique :
    > - Remplace le texte du li par un input contenant ce texte
    > - Remplace le button edit par un button save
      > - Au clique du button save,met le nouveau texte dans le span du li et fait disparaitre l'input du li pour faire réapparaitre le span
  - button "delete"
    > - Cache le li


=======
- Au click du button "Ajouter" rajouter un li (en début de liste) avec le contenu de l'input et vider l'input
- A chaque "li" il faut rajouter 3 buttons
  - button "valided"
    > Color le li en vert
  - button "edit"
    > - Remplace ce button par un button confirme
    > - Remplace le texte du li par un input contenant ce texte
    > - Au clique du button confirme,remet le nouveau texte dans le li et fait disparaitre le input pour faire réapparaitre le texte du li
  - button "delete"
    > - Cache le li

>>>>>>> 2dd4c4315da208b1754f7449d833a19e1826bfc9
## Le filtre

- Ajouter 3 boutons de filtres pour n'afficher que certains li suivant leur état (lorsqu'on clique sur un des boutons). Voilà les états :
  > - ToDo
  > - Done
  > - Deleted
- Ajouter un quatrième bouton (All) qui affichera tous les
  li quel que soit leur état.

## Datas

- Ajouter un fichier Json et récupérer les li en fonction des éléments que vous aurez entré dans le Json sous le format suivant :

```json
{
  0: {
    "text": "voici ma tache",
    "etat": "todo"
  }
}
```

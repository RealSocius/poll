Poll

| pollId |      title       |               description               |      choices       | creator | creationDate  |
| :----: | :--------------: | :-------------------------------------: | :----------------: | :-----: | :-----------: |
|   1    | Meine tolle Poll |  choice auswählen oder texte schreiben  | auswahl,hier,eigeneAntwort | chibbi  | 1623626089318 |

Anwsers

| anwserId | pollId | creator |     answer     | AnswerPayload | creationDate  |
| :------: | :----: | :-----: | :------------: | :-----------: | :-----------: |
|    21    |   1    | thomas  | eigeneAntwort  | Ich will was  | 1623626089318 |
|    21    |   5    | tim     | Uhrzeit        |     9:20      | 1623626089318 |

SELECT \* FROM Anwsers where Poll.pollId = Anwsers.pollId
SELECT COUNT(answer) FROM anwsers where pollId = 1 GROUP BY answer

Sollte man auch so Uhrzeiten als antwort auswählen können?
ich denke ja

Vielleicht sollten Polls garkeine Choices von sich aus speichern sondern die Choices sollten geladen werden von den bereits gegebenen Antworten
das war ja eig auch der sinn dieser Plattform

Aber ich lass es erstmal drinn dann können wir auch ein klassischen Poll machen 

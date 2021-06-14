Poll

| pollId |      title       |               description               |      answers       | creator | creationDate  |
| :----: | :--------------: | :-------------------------------------: | :----------------: | :-----: | :-----------: |
|   1    | Meine tolle Poll | hier kann jeder tolle answers auswählen | auswalh,hier,third | chibbi  | 1623626089318 |

Anwsers

| anwserId | pollId | creator | answer | creationDate  |
| :------: | :----: | :-----: | :----: | :-----------: |
|    21    |   1    | thomas  | third  | 1623626089318 |

SELECT \* FROM Anwsers where Poll.pollId = Anwsers.pollId
SELECT COUNT(answer) FROM anwsers where pollId = 1 GROUP BY answer

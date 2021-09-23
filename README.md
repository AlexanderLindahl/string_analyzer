Dagens uppgift är att implementera ett program som avgör ifall en sträng är godkänd eller inte. Om en sträng är godkänd eller inte baseras på ett antal fördefinerade regler, om en sträng uppfyller alla regler så är denna godkänd.

Reglerna som en sträng behöver uppfylla för att vara godkänd:

• Den innehåller MINST 3 stycken d’n

• Den innehåller minst 3 vokaler (aeiou), exemplevis “aei”, ”xazegov” eller ”aeioueioueiou”.

• Den innehåller minst en bokstav som dyker upp 2 gånger i rad, exempelvis ”dd” eller ”aabbddcc” ( ”aa”, "bb”, ”cc” ”dd”)

• Den innehåller INTE substrängarna ”ab”, ”cd”, ”pq” eller ”xy”.

Uppgiften blir att implementera dessa regler med tillhörande test. Försök att jobba testdrivet och tänk på att skriva så läsbar och förvaltningsbar kod som möjligt.

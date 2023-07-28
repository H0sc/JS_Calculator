# JS_Calculator

A calculator purely written with JavaScript

## Tools

- Javascript
- SASS for CSS

## Ziele

- Der Rechner soll in der Lage sein grundlegende arithmetische Rechnungen zu lösen (+,-,:,*), welche der Nutzer durch Klicken der Felder eingibt. Wie bei einem üblichen Taschenrechner soll der Nutzer in der Lage sein, die bisherigen Operationen und Ergebnisse gänzlich zu löschen oder nur die letzte getätigte Eingabe.

- Weiterführendes Ziel ist das Hinzufügen komplexerer Rechenoperationen.

## Chronologisch geordnetes Vorgehen

### Setup / Grober Ablauf

- Erstellen der HTML-Datei, der JS-, und CSS-Datei [X]
- Installation und Einstellungen SASS [X]
- Verknüpfung der Dateien []
- Aufbau der HTML Struktur []
- Aufbau Logik []
- Styling []

## Tasks im Detail

### HTML

#### Generell

- Die Ganze App soll von einem Container-div umfasst sein.

#### Display

- Es gibt ein Display in Form eines div-Elements: Auf diesem Display wird der aktuelle Operand in einem span-Element angezeigt. Nach Anfügen eines Operators wird dieses span-Element um eine Zeile nach Oben verschoben und verkleinert, um das Input-div nicht vergrößern zu müssen. Der Input-div muss aber von Anfang an hoch genug sein, um dies zu gewährleisten.
- Nach Klicken des "=" buttons, wird die Logik in der JS-Datei getriggered und das Ergebnis in das Display gefügt. Die vorangegangene Operation wird wieder nach Oben verschoben.

#### Button-Logik

- Zahlen: Zahl wird bei Klick an die vorige Zahl im Inputfeld angefügt. []
- Zahlen: Kommastellen implementieren. parseFloat

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width,
                   initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>🪨📜✂️</title>
</head>
<body>
    <section class="game">
        <!-- Tytuł -->
        <div class="title">🪨📜✂️</div>
         
          <!-- Wyświetlanie wyników gracza i komputera -->
        <div class="score"> 
            <div class="playerScore">
                <h2>Gracz</h2>
                <p class="p-count count">0</p>
 
            </div>      
            <div class="computerScore">
                <h2>Komputer</h2>
                <p class="c-count count">0</p>
 
            </div>
        </div>
       
        <div class="move">Wybierz swój ruch</div>
         
          <!-- Liczba ruchów pozostałych do zakończenia gry -->
        <div class="movesleft">Pozostałe ruchy: 10 </div>
         
          <!-- Opcje dostępne dla gracza w grze -->
        <div class="options">
            <button class="kamień">Kamień</button>
            <button class="papier">Papier</button>
            <button class="nożyce">Nożyce</button>   
        </div>
         
          <!-- Ostateczny wynik gry -->
        <div class="result"></div>
         
          <!-- Przeładuj grę -->
        <button class="reload"></button>
 
    </section>
 
    <script src="app.js"></script>
</body>
</html>

PRINT "Your move R/P/S?: 
SET userInput TO GET USER INPUT 
SET lowerCaseValue TO CONVERT playerMove TO LOWERCASE

<!-- Update userInput to one variable -->
IF  userInput IS "r" OR userInput "rock" THEN
    SET userInput TO Rock
ELSE IF  userInput IS "p" OR userInput "paper" THEN
    SET userInput TO Paper
ELSE IF  userInput IS "r" OR userInput "scissors" THEN
    SET userInput TO Scissors
ELSE 
    PRINT "Your Move is not Valid Try Again"
ENDIF


GET random number between 1 and 3 THEN
SET randomMove TO random number

IF  randomMove IS 1  THEN
    SET randomMove TO Rock
ELSE IF  randomMove IS 2 THEN
    SET randomMove  TO Paper
ELSE
    SET randomMove  TO Scissors
ENDIF


 
    









 
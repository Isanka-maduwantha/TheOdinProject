PRINT "Your move R/P/S?: 
SET userInput TO GET USER INPUT 
SET lowerCaseValue TO CONVERT playerMove TO LOWERCASE

<!-- Update userInput to one variable -->
IF  userInput IS "r" OR userInput "rock" THEN
    SET userInput TO Rock
ELSE IF  userInput IS "p" OR userInput "paper" THENN
    SET userInput TO Paper
ELSE IF  userInput IS "r" OR userInput "scissors" THEN
    SET userInput TO Scissors
ELSE 
    PRINT "Your Move is not Valid Try Again"









 
function lSystemGenerate(ruleset, sentence) {
    // An empty StringBuffer that we will fill
    var nextgen = "";
    // For every character in the sentence
    for (var i = 0; i < sentence.length; i++) {
      // What is the character
      var currentChar = sentence.charAt(i);
      // We will replace it with itself unless it matches one of our rules
      var replacement = "" + currentChar;
      // Check every rule
      for (var j = 0; j < ruleset.length; j++) {
        var from = ruleset[j].getFrom();
        // if we match the Rule, get the replacement String out of the Rule
        if (from == currentChar) {
          replacement = ruleset[j].getTo();
          break;
        }
      }
      // Append replacement String
      nextgen += replacement;
    }
    // Replace sentence
    return nextgen;
  }

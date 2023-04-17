from typing import List


class Solution:
    def mostWordsFound(self, sentences: List[str]) -> int:
        return max(map(self.countWords, sentences))

    def countWords(sentence: str) -> int:
        return len(sentence.split(" "))
    
sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
    
print(Solution.mostWordsFound(Solution, sentences))
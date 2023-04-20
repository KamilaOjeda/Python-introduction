from typing import List

# lambda: palabra reservada para declarar una función anónima
class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        return max(map(lambda amounts: sum(amounts), accounts))
    
accounts = [[2,8,7],[7,1,3],[1,9,5]]
print(Solution.maximumWealth(Solution, accounts))
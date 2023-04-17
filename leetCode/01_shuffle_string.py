from typing import List

class Solution:
    def restoreString(self, s: str, indices: List[int]) -> str:
        result_array: List[int] = [""] * len(indices)
        for i, value in enumerate(indices):
            result_array[value] = s[i]
            
        output: str = ""
        for element in result_array:
            output += element
        return output

my_s, my_list = "codeleet", [4,5,6,7,0,2,1,3]

print(Solution.restoreString(Solution, my_s, my_list))
class Solution:
    def defangIPaddr(self, address: str) -> str:
        return address.replace(".", "[.]")
    
print(Solution.defangIPaddr(Solution, "1.5.4"))
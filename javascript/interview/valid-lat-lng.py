"""
inputStr, represents the given string containing substring of latitude/longitude pairs.
"""
#string starts with a bracket, has a comma after X and ends with a bracket
#there is no space between the opening parenthesis and first character of Y
#there is no space between Y and the closing parenthesis
#there is no between the comma and the first charactr of Y
#X and Y are decimal numbers and be preceded by a sign
#there are no leading zeros
#no other characters allowed in X or Y
#-90 <= x <= 90; -180 <= Y <= 180

def funcValidPairs(inputStr):
    # Write your code here
    res = []
    for val in inputStr:
        x = val.split(",")
        y = x[1][0:-1]
        if val[0] != ("("):
            res.append("Invalid")
        elif not val[1] in "+123456789":
            res.append("Invalid")
        elif x[0][-1] == ".":
            res.append("Invalid")
        elif x[1][0] not in "+123456789":
            res.append("Invalid")
        elif y[1] not in "+123456789":
            res.append("Invalid")
        elif x[1][-2] in "WNSE":
            res.append("Invalid")
        elif x[1][-2] not in "WNSE" and float(y) > 180.0:
            res.append("Invalid")
        elif x[1][-1] != (")"):
            res.append("Invalid")
        else:
            res.append("Valid")
    return res




def main():
    #input for inputStr
    inputStr = []
    inputStr_size  = int(input())
    inputStr = list(map(str,input().split(" ")))


    result = funcValidPairs(inputStr)
    print(" ".join([str(res) for res in result]))


if __name__ == "__main__":
    main()

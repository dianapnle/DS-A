def uncompress(s):
  # have two pointers
  #numbers reference
  #loop through
  numbers = "0123456789"
  i = 0
  j = 0
  res = ""

  while i < len(s):
    #if j is a number, keep increasing j index number
    if s[j] in numbers:
      j += 1
    else :
    # if j is not a number, it means it reached a character, want to slice from i to j which would be the number
      num = int(s[i:j])
      res += s[j] * num
    #update the counters
      j += 1
      i = j

  return res


#O(n*m) where n is number of groups and m is maximal number associated with any group
#space complexity and time complexity
#string contaenation is O(n) because it copies over to make a new string
#python strings are immutable as well


def improveduncompress(s):
  # have two pointers
  #numbers reference
  #loop through
  numbers = "0123456789"
  i = 0
  j = 0
  res = []

  while i < len(s):
    #if j is a number, keep increasing j index number
    if s[j] in numbers:
      j += 1
    else :
    # if j is not a number, it means it reached a character, want to slice from i to j which would be the number
      num = int(s[i:j])
      res.append(s[j] * num)
    #update the counters
      j += 1
      i = j

  return ''.join(res)

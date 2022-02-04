def merge_sort(list):
    """
    Sorts a list in ascending order.
    returns a new sorted list. 

    divide: find the midpoint of the list and divide into sublists 
    conquer: recursively sort the sublists created in previous steps
    combine: merge the sorted sublists created in previous steps 

    takes overall O(n log n)time
    """
    if len(list)<=1:
        return list
        #the above is a stopping condition. simplest scenario that returns expected results. ie if list is empty or has one element. 
    
    left_half,right_half = split(list)

    left = merge_sort(left_half)
    #This is now a recursive function, it continues to split the left and right lists until they reach the stopping condition. 

    right= merge_sort(right_half)

    return merge(left,right)


def split(list): 
    #takes  O(log n)time
    mid=len(list)//2
    left=list[:mid]
    right=list[mid:]

    return left,right


def merge(left,right): 
    """merges two lists sorting them in the process. Returns a new merged list 
    
    takes  O(n)time
    """
    l=[]
    i=0
    j=0

    while i<len(left) and j<len(right): 
        if left[i]<right[j]:
            l.append(left[i])
            i+=1
        else: 
            l.append(right[j])
            j+=1

    while i<len(left):
        l.append(left[i])
        i+=1
    while j<len(right):
        l.append(right[j])
        j+=1
    return l


def verify_sort(list): 
    n=len(list)
    if n==0 or n ==1: 
        return True
    return list[0]<list[1] and verify_sort(list[1:])

    #this function uses recursion to continually compare the first and second element of an array , removing element zero each time until it reaches the first stopping condition.  It only returns true of both statements are true. 
     



alist=[54,62,23,900,93,2,187,90]

ex=merge_sort(alist)
print(ex)
print(verify_sort(alist))
print(verify_sort(ex))


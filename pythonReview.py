# a="hello"
# b="world"
# print('{} again {}'.format(a,b))

# print(a[0:5:2])
# print(len(a))
# c=[2,4]
# d=[4,5]
# e=c+d
# e[1]=42
# print(e*2)

# f=[[2]*3]*4
# print(list(range(2,10,3)))
# e.insert(0,0)
# print(e)
# e.pop(0)
# print(e)
# del e[1]
# print(e)

# f=(1,2)
# g=(9,8)
# f[1]=2

# s={ 7,8,7,9 }
# s.add(1)

# print(s)

# dict={ "Bulak":1,"Achai":2,"Deng":3,"Ayen":4}

# dict["Bulak"]=0

# del dict["Ayen"]
# print(dict)




# print(min(15,6))

# a = "Hi my name is Ayen"
# print(a[::-1])

# Sorting merge lists

a=[0,3,4,31]
b=[4,6,30]


# def merge_sorted_array(array1, array2):
#     merged_array=[]
#     arr1_item=array1[0]
#     arr2_item=array2[0]
#     i=1
#     j=1

#     if len(array1)==0:
#         return array2
#     if len(array2)==0:
#         return array1

#     while array1 or array2 :
#         print(arr1_item, arr2_item)
#         if  arr1_item<arr2_item:
#             merged_array.append(arr1_item)
#             arr1_item = array1[i]
#             i+=1
        

#         else:
                   
#             merged_array.append(arr2_item)
#             arr2_item=array2[j]
        
#             j+=1
            
                    
           
#     return merged_array


# merge_sorted_array(a,b)



#return the first duplicating number

def first_repeat(array):
    i=0
    for item in array:
        i+=1
        if item == array[i]:
            print(item) 
            
        
        
    return





print(first_repeat([1,2,1,3,5,6,2,4]))


            

     
    



        







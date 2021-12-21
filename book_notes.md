### Introduction to Computational thinking: Algorithms and Data Structures 
by Thomas Mailund.

The purpose of this study is to introduce computational thinking as a problem solving approach for designing algorithms and implementing in a computer language - in this case using python. 
However, it takes a different skill to build software that is scalable and maintainable than the skills needed to build efficient algorithms. 

when it comes to divisions in python, be wary of negative numbers when using %(symbol for modulus division ) //(integer division) and / (true division )
when using the modulus, the result takes the sighn of the number you divide by . 
when using // with a negative number, the number acts as if it is dividing across the scale from negative to positive. 
eg 
`
-9//7 gives -2
-9%7 give 5
`

### VARIABLES

assign name-values to numbers or expression.
You can create multiple variables at the same time using `
m,n = o,p`

or you can switch existing values 
a,b=b,a since the right hand side is registered before the changes to a and b are made. 

## Strings

Things you can do to strings: 
1)join them using plus sign. this is called cancatenate 
2)a string * a number prints the string that many times

3) `
 print(f"blah blah blah {variable or number}")
 `
or you can hard type the f- f is for format 
`
: a="hello"
b="world"
print('{} again {}'.format(a,b))
`

4) You can access the characters in a string using [index no. of character]
and you can slice the string [a:b:c] where a is the first letter index in the range, b is the last letter index(not included in the range) and c is the interval 

5) `len(string) `gives you the length of the string .

## Lists 
a sequence of data values-- can be any data type , not just characters as in strings. 
You can join lists using a plus sign - ie concatenate them 

2) You can multiply by a number to repeat the sequence inside the list that many times. 

3. You can access indexes in the list and change them( lists are mutable ie  they can be altered unlike strings )
list[1]=x changes the index at position 1 to the value x. 
nb/ remember that variables are only label references to an onject and not the object itself. 
for example `x=[1,2,3]
x=y
z=[1,2,3]
`
x and y are the same list, while z is a new list. changing an index in x , does the same to y , but not to z. 
4. ` list(range(n))`
creates a list from 0 to n-1, with an interval of 1 
`list(range(a,b,c))` 
prints a list with range from a to b excluding b with an interval of c, similar to the string slicing . 
5. You can insert a value in a list , by specifying the index of insertion and the value to be inserted 
`list.insert(index,value)` This will simply push the rest of the list forward. 
6. you can delete values at specific indexes in a list using
`list.pop(index)`
or 
`del list[index]`
you can also filter the value you want to remove using 
`list.remove(value)` however it only removes the first occurence of that value. 

The above methods of inserting and removing are slow.-discusison later- its faster to insert and remove from  the end of a list. 
`list.append(value)`
`list.pop()` -- note, there is  no argument for pop this time

7. You can splice a list -ie get a subsequence from within a list using 
`list[a:b:c]` where, a is the first index, b is the last index(not included) and c is the interval 
`list[:]`assumes the first no. is zero and the last is the last, thereby returning a duplicate of the list 
`list[::-1]` gives a duplicate of the list in reverse order becuase of the -1 interval. 

## Tuples

Tuples are like lists, but their inner content cannot be modified. ie you cannot append,remove, insert,assign to index or to slice. Howver, you can read the values at the indexes. Tuples are good for packaging related values that dont need to be changes. Tuples are created like so 
`Tuple=(a,b)`

## Sets and Dictionaries

Sets are unindexed sequneces of data. 
They do not hold duplicates

You can create a set using a function` set()`,
where the input can be empty or can contain a list. 
or you can use
`x={1,2,3,4,4,4}`
which will create the set as 
`x={1,2,3,4}`

2. you can check the exsitence of a value in the set using 
`value in set `
you can add and remove elements 
`set.add(value)`
`set.remove(value)`

note there are functions that help you understand functions and methods. 
eg `dir()`
and `help()`
give a directory of methods for a datatype and the details of using it respectively. 


### Dictionaries

Map key value pairs. 
`dict={ "Bulak":1,"Achai":2,"Deng":3,"Ayen":4}
`
`dict["Bulak]=0` updates the key value of Bulak
`dict["Mijack"]=5` adds a new key value pair
`del dict["Ayen"]`
deletes the value pair Ayen. 

## Input and Output

`input("input your name")`
prompts the user to input something in the terminal. 
`int(input("type your age:"))`

requires the input to be an intger

On the other hand, to ouput infor to the use , we use `print("this here is your output")`


However input and print does not scale to large data. File handling is necessary for large data .

`f = open("file.txt", "r")`

create an object which is the file contents. The first argument in the name of the file and the second 'r' specifies that you are reading it.  'w' would specify writing to the file. if you open a file with 'w', it deletes the file contents. 
 `f.read()`

returns the contents of the file as a string. 

`f.readlines()`

returns the contents of the file as a list of lines. 

If you call f.read() or f.readlines() twice, you will get an empty string; unless you reopen the file, it can only be read once. The object stores memory of the last sequence it reads. 

`f.readline()` reads one line and calling it again will read the next line 

You can write to a file by opening it in write mode and then using the print function with two arguments: 
this:
`f = open("output.txt", "w")
print("hello, world!", file = f)
`
Writing to a file also holds memory of the last point of writing and continues from there. 

note- there is also a way to open a file for both reading and writing... 

## Conditionals -If statements. 

used for conditional execution of code. 

` if x==y:
    print(equal values)
 elif x<y: 
    print("x is less:)
 else: 
    print ("eh")`
In python, the argument for if , elif or else is followed by a colon-- and the instruction are indented. 

## Loops- For and While

Used to iterate/loop over items . 
the for loop runs through elements in a sequence 
1. loop through a range: 

`for x in range(10):
 print(x)`

2. loop through a file 

`for line in open("some-file.txt"):
 print(line)`

3. loop through a set

 `for item in s:
 print(item)`

4. loop through a dictionary

 `for key in d:
 print(key)`

`for value in d.values():
 print(value)`

`for key, value in d.items():
 print(key, value)`


### Using for loops to build new lists from old lists. 
`
x = [2 * i for i in range(5)]`

does the same as this loop

`x = []
for i in range(5):
 x.append(2 * i)`


You can combine the loop with if statements to make selective inputs to the new list. 

`x = [2 * i for i in range(5) if i % 2 == 0]`

this kind of syntax is referred to as list comprehension and can be sometimes challenging to read, but easy once you get the gist. 

The above list comprehension  is the same as saying : 

`x = []`

`for i in range(5):
 if i % 2 == 0:
 x.append(2 * i)`


You can use an underscore if you ddont wana name the list item 

`T = [[0] * m for _ in range(n)]`

`x = [a for a in x if a != 2]` 
note this last one creates a new list and so you cannot use it if other variables refer to the old list. 

### While loop

is not used for a sequence but is used to iterate something for as long as a predicate is true. 

`x = 0`

`while x < 10:
 print(x)`

 or 

` x = [1, 2, 3, 2]`

`while 2 in x:
 x.remove(2)`


## Using Modules. 
 Modules contain reusable code and are needed to build moderately sized python programs. Modules contain useful variables, functions and methods for the progrmas utility.

 To use a module: 
 1) import the module or a funtion from the module 


  `
  import random 

  import random as ran

  from random import randint

  from random import randint as rr

  from random import *

`
 2) modulename.functionname() to call a function from the module or just call the function if you have imported it

 # Introduction to Algotithms. 

 Algorithms are defined as distinct steps a computer takes to solve a problem correctly in a finite amount of time . 

 
 efficiency determines how fast a given problem can be solved by a given algorithm.
 On the other hand a problems complexity is independnt of the algorith and referes to how fast a problem can be solved.  Some problems are known to have no efficient solutions, even though they may be solvable, it takes a loong time to solve them. These are refered to as  intractable problems.
 When you meet an intractable prolem, sometimes rephrasing the problem presents a different solution to do the same task. 

 ## Shortest path between pairs problem: 


## Daily reflections: 
### Sat Dec 18th 2021
 Today I reviewed the video presentations of Algorithms and data structures. Went over hash tables and linked list, and did some exercises. for hash tables we did check for the first repeating item in the array. 
 For linkied lists, it was creating an actual linked list. 
 Hash tables take are objects in JS, and dictionaries in python and also maps .. They randomly assign memory to a key value pair using a hash function. Howvever they sometimes assighn the same memory location to more than one item. (which makes the hash table o(n) rather than o(1) for searching functionality)
 I need to review more hash tables. but they are very commonly used. 
 Linked lists are like a catapilar or a centipede. They consist of connected nodes, that have a head and a tail. Each node contains an object having  its own value, and a next -pointing to the subsequent values of the nodes that follow. 
 We went over creating a linked list since it isnt built into Javascript(thou its built into java). We coded the constuctor, first, and then the head and tail, and then created methods for appending, prepending and inserting...The flow of creating the linked list class is interesting since it starts with the simplese setting  of a single object linked list, and builds on that... I get the idea of coding for each node, but im yet to see how the automation of 'next' values occur when you keep inserting nodes. 

 ### Data Structures - YTVideo

A programs data storage format. It is the collection of values, the format they are stored in , the relationships between the values, and  the operations applied on the data stored in the structure. 



 ## Array: 



 ## Linked List(cs videos): 

 Linked lists are lists that have reference pointers to the next value, with a head and a tail connecting the values in between. 
I will follow tutorial that uses Java Script to create Linked lists.(since linked lists are not in built in JS.)

To understand linked lists, its is important to first understand object pointers. You can have an object 

`const obj1 ={a:true}`
You can reference that object with another name reference:

`const obj2 = const obj1`

in this case you dont have 2 objects in memory;; only one, that has 2 name references. 
If you change object1, object 2 changes as well. However, if you delete object1, obj2 will still exist and will still points to that location in memory of where obj1 was. The location in memory was not deleted because the computer saw that that location was still in use; ie referenced by obj2 . However,as soon as that referecne is removed, Javascript does automatic memory management(garbage collection) and deleted that location memory space. (however some languages require manual garbage collection)

Process of creating linked lists
1) start with a tangible example: 
ie 10-->5-->16

think of each item in the list as a node. 
Consider a node as a data container- and in this case, we can use an object. Each node contains information of 
1) The value of the data point
2) The reference to the next node. Because the next node also has a next value which is also a nnode, you will end up having a series of nested objects of nexts. Below is an example of a head node: 


`
head{
   value: x,
   next:{value:y,
    next:{
      value:z,
      next{ value:null
      }
       }
   }  
}
`

To implement the datatype, we use a class with a constructor (the function that gets run at the very beginning when we create a linked list), 
and a bunch of methods.

Build the class from the simplest case scenario- which is a single node linked list, having just the head

when adjusting the list, we just need to focus on the relevant nodes. 
reference the previous values of the node, before reassigning a new value to the node. this is where you apply your knowledge of pointers/references. 

Pay attention to what the values are as you change them 






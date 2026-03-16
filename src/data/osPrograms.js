export const osPrograms = [
  {
    id: 1,
    title: "1. Shell script to find the largest of three numbers",
    code: `echo "Enter three numbers:"
read a
read b
read c
if [ $a -gt $b ] && [ $a -gt $c ]
then
    echo "$a is largest"
elif [ $b -gt $a ] && [ $b -gt $c ]
then
    echo "$b is largest"
else
    echo "$c is largest"
fi`
  },
  {
    id: 2,
    title: "2. Shell script to check whether a given string is palindrome or not",
    code: `echo "Enter a string:"
read str
len=\${#str}
i=$((len-1))
rev=""
while [ $i -ge 0 ]
do
    rev="$rev\${str:$i:1}"
    i=$((i-1))
done

if [ "$str" == "$rev" ]
then
    echo "The string is a palindrome."
else
    echo "The string is not a palindrome."
fi`
  },
  {
    id: 3,
    title: "3. Shell script to find factorial of a given number",
    code: `echo "Enter a number:"
read num

fact=1

while [ $num -gt 1 ]
do
  fact=$((fact * num))  #fact = fact * num
  num=$((num - 1))      #num = num - 1
done

echo "Factorial is $fact"`
  }
];

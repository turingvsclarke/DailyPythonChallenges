# Nonogram Validator

This was pretty easy. I just wanted an array whose elements were the chunks of 1s. This just required a bit of array manipulation magic. 
I started with converting 0s to spaces, then trimming and doing various splits and joins until I got what I wanted. Python's split function automatically splits according to arbitrary space size, while javascript needed the regex.